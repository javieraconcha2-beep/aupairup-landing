"""Build a static review site using Python's standard library. No remote requests."""
import html
import json
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public"
POSTS = json.loads((ROOT / "content/posts.json").read_text())
CHECKED = "2026-10-21"

def esc(value):
    return html.escape(value, quote=True)

def shell(title, description, body, lang="es"):
    english = lang == "en"
    return f'''<!doctype html>
<html lang="{lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{esc(title)} | AuPairUp</title><meta name="description" content="{esc(description)}">
<meta name="robots" content="noindex, nofollow"><meta property="og:title" content="{esc(title)}">
<meta property="og:description" content="{esc(description)}"><meta property="og:type" content="website">
<link rel="stylesheet" href="/blog.css"></head><body>
<a class="skip" href="#main">{"Skip to content" if english else "Saltar al contenido"}</a>
<header><div class="wrap"><nav aria-label="{"Main navigation" if english else "Navegación principal"}">
<a class="brand" href="/">AuPair<span>Up</span></a><div class="navlinks">
<a href="/blog/">Blog</a><a href="/blog/#aupairs">Au pairs</a><a href="/blog/#families">{"Host families" if english else "Familias"}</a></div></nav></div></header>
{body}<footer><div class="wrap"><p>© 2026 AuPairUp · {"Matching platform. We do not arrange placements, visas or contracts." if english else "Plataforma de matching. No gestionamos colocaciones, visas ni contratos."}</p>
<p>{"Draft for review. Registration is not open on this page." if english else "Borrador para revisión. El registro no está abierto en esta página."}</p></div></footer></body></html>'''

OUT.mkdir(exist_ok=True)
for name in ("index.html", "app.js", "blog.css"):
    shutil.copy2(ROOT / name, OUT / name)
(OUT / "blog").mkdir(exist_ok=True)
cards = []
for index, post in enumerate(POSTS):
    sections = ""
    for section in post["sections"]:
        sections += f'<section><h2>{esc(section["heading"])}</h2>'
        sections += "".join(f"<p>{esc(p)}</p>" for p in section.get("paragraphs", []))
        if section.get("items"):
            sections += "<ul>" + "".join(f"<li>{esc(p)}</li>" for p in section["items"]) + "</ul>"
        sections += "</section>"
    sources = "".join(f'<li><a href="{esc(s["url"])}">{esc(s["label"])}</a></li>' for s in post["sources"])
    en = post["lang"] == "en"
    body = f'''<main id="main" class="article"><a href="/blog/">← Blog</a>
<p class="eyebrow">{esc(post["audience"])}</p><h1>{esc(post["title"])}</h1>
<p class="meta">AuPairUp · {"Draft reviewed against linked sources" if en else "Borrador contrastado con las fuentes enlazadas"} · <time datetime="{CHECKED}">{CHECKED}</time></p>
<p class="lead">{esc(post["lead"])}</p>{sections}
<aside class="cta"><h2>{"Keep the conversation going" if en else "Prepara tu próxima conversación"}</h2>
<p>{"Explore the guides while we prepare AuPairUp. Registration is not yet available here." if en else "Explora las guías mientras preparamos AuPairUp. Todavía no puedes registrarte aquí."}</p>
<a class="button" data-event="related_guide_click" href="/blog/">{"Explore the guides" if en else "Explorar las guías"}</a></aside>
<aside class="sources"><h2>{"Sources and scope" if en else "Fuentes y alcance"}</h2><ul>{sources}</ul>
<p>{"Official sources consulted on 21 October 2026. General information; check the applicable requirements before acting." if en else "Fuentes oficiales consultadas el 21 de octubre de 2026. Información general; comprueba los requisitos aplicables antes de actuar."}</p></aside></main>'''
    folder = OUT / "blog" / post["slug"]
    folder.mkdir(exist_ok=True)
    (folder / "index.html").write_text(shell(post["title"], post["description"], body, post["lang"]))
    anchor = ' id="aupairs"' if index == 0 else (' id="families"' if index == 1 else "")
    cards.append(f'''<article class="card"{anchor} lang="{post["lang"]}"><span class="tag">{esc(post["audience"])} · {post["lang"].upper()}</span>
<h2><a href="/blog/{post["slug"]}/">{esc(post["title"])}</a></h2><p>{esc(post["description"])}</p>
<a class="read" href="/blog/{post["slug"]}/">{"Read guide" if en else "Leer guía"} →</a></article>''')
body = '''<main id="main" class="wrap"><section class="hero"><p class="eyebrow">Guías para conocerse mejor</p>
<h1>Una buena conexión empieza con una buena conversación.</h1>
<p class="intro">Ideas prácticas para au pairs y familias: perfiles claros, preguntas útiles y expectativas compartidas.</p>
<p class="notice">AuPairUp es una plataforma de matching. No gestiona colocaciones, visas ni contratos.</p></section>
<section aria-label="Guías del blog" class="cards">''' + "".join(cards) + "</section></main>"
(OUT / "blog/index.html").write_text(shell("Blog para au pairs y familias", "Guías AuPairUp para preparar entrevistas, escribir perfiles y entender el matching entre au pairs y familias.", body))
(OUT / "robots.txt").write_text("User-agent: *\nDisallow: /\n")
(OUT / "_headers").write_text("/*\n  X-Robots-Tag: noindex, nofollow\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n")
print(f"Built {len(POSTS)} article drafts + blog index in {OUT}")
