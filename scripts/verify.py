"""Check generated links, review safeguards, preservation and article metadata."""
import json
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse, unquote

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public"

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self.ids = set()
        self.h1 = 0
        self.title = 0
        self.description = False
        self.noindex = False
        self.lang = None
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if "id" in a:
            self.ids.add(a["id"])
        if tag == "a":
            self.links.append(a.get("href", ""))
        if tag == "h1":
            self.h1 += 1
        if tag == "title":
            self.title += 1
        if tag == "html":
            self.lang = a.get("lang")
        if tag == "meta":
            self.description |= a.get("name") == "description" and bool(a.get("content"))
            self.noindex |= a.get("name") == "robots" and "noindex" in a.get("content", "")

pages = {}
for path in OUT.rglob("*.html"):
    page = Page()
    page.feed(path.read_text())
    assert page.noindex, f"Missing noindex: {path}"
    pages[path.resolve()] = page
    if "blog" in path.parts:
        assert page.h1 == 1 and page.title == 1 and page.description and page.lang in ("es", "en"), path
for path, page in pages.items():
    for link in page.links:
        parsed = urlparse(link)
        if parsed.scheme or parsed.netloc:
            continue
        target = OUT / unquote(parsed.path).lstrip("/") if parsed.path.startswith("/") else path.parent / unquote(parsed.path)
        if not parsed.path:
            target = path
        if target.is_dir():
            target = target / "index.html"
        assert target.exists(), (path, link, target)
        if parsed.fragment:
            assert parsed.fragment in pages[target.resolve()].ids, (path, link)
assert "Disallow: /" in (OUT / "robots.txt").read_text()
assert "X-Robots-Tag: noindex" in (OUT / "_headers").read_text()
assert 'ignore = "exit 0"' in (ROOT / "netlify.toml").read_text()
assert "process.exit(1)" in (ROOT / "scripts/review-gate.cjs").read_text()
app = (ROOT / "app.js").read_text()
assert "fieldset', {disabled: true}" in app
assert "console.log('Submitted:'" not in app
assert "No information has been submitted or saved." in app
assert "734" in (ROOT / "history/app-2025.js.txt").read_text()
assert "The first app" in (ROOT / "history/index-2025.html.txt").read_text()
posts = json.loads((ROOT / "content/posts.json").read_text())
assert len({p["slug"] for p in posts}) == len(posts)
print(f"PASS: {len(pages)} pages, local links/anchors, metadata, noindex, disabled form, deployment hold, originals")
