const { useState, useEffect } = React;

function AuPairUpLanding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [memberCount, setMemberCount] = useState(734);
  const [q1Answer, setQ1Answer] = useState(null);
  const [q2Answer, setQ2Answer] = useState(null);
  const [otherCountry, setOtherCountry] = useState('');
  const [showThanks, setShowThanks] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [userType, setUserType] = useState('aupair');
  const [email, setEmail] = useState('');
  
  // Family questions
  const [familyQ1, setFamilyQ1] = useState([]);
  const [familyQ2, setFamilyQ2] = useState(null);
  const [familyQ3, setFamilyQ3] = useState([]);
  const [showFamilyThanks, setShowFamilyThanks] = useState(false);

  // Icon components (simplified)
  const Heart = ({className, style}) => React.createElement('svg', {className, style, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24'}, 
    React.createElement('path', {strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'}));
  
  const Users = ({className, style}) => React.createElement('svg', {className, style, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24'}, 
    React.createElement('path', {strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'}));
  
  const Globe = ({className, style}) => React.createElement('svg', {className, style, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24'}, 
    React.createElement('path', {strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'}));

  const ChevronLeft = ({className, onClick}) => React.createElement('svg', {className, onClick, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24'}, 
    React.createElement('path', {strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M15 19l-7-7 7-7'}));
  
  const ChevronRight = ({className, onClick}) => React.createElement('svg', {className, onClick, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24'}, 
    React.createElement('path', {strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M9 5l7 7-7 7'}));

  const Zap = ({className, style}) => React.createElement('svg', {className, style, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24'}, 
    React.createElement('path', {strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M13 10V3L4 14h7v7l9-11h-7z'}));

  const Gift = ({className, style}) => React.createElement('svg', {className, style, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24'}, 
    React.createElement('path', {strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7'}));

  const MessageCircle = ({className, style}) => React.createElement('svg', {className, style, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24'}, 
    React.createElement('path', {strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'}));

  const User = ({className, style}) => React.createElement('svg', {className, style, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24'}, 
    React.createElement('path', {strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'}));

  const MousePointer2 = ({className, style}) => React.createElement('svg', {className, style, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24'}, 
    React.createElement('path', {strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z'}));

  const Home = ({className, style}) => React.createElement('svg', {className, style, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24'}, 
    React.createElement('path', {strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'}));

  const Languages = ({className, style}) => React.createElement('svg', {className, style, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24'}, 
    React.createElement('path', {strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129'}));

  const Clock = ({className, style}) => React.createElement('svg', {className, style, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24'}, 
    React.createElement('path', {strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'}));

  const Mail = ({className, style}) => React.createElement('svg', {className, style, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24'}, 
    React.createElement('path', {strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'}));

  const Instagram = ({className, style}) => React.createElement('svg', {className, style, fill: 'currentColor', viewBox: '0 0 24 24'}, 
    React.createElement('path', {d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'}));


  const Facebook = ({className, style}) => React.createElement('svg', {className, style, fill: 'currentColor', viewBox: '0 0 24 24'}, 
    React.createElement('path', {d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'}));

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(stepInterval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const handleQ1 = (answer) => {
    setQ1Answer(answer);
    if (q2Answer) setShowThanks(true);
  };

  const handleQ2 = (answer) => {
    setQ2Answer(answer);
    if (q1Answer) setShowThanks(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send to your email service here
    console.log('Submitted:', { email, userType });
    alert('Thanks for joining the waitlist! We\'ll be in touch soon.');
  };

  const toggleFamilyQ1 = (option) => {
    setFamilyQ1(prev => 
      prev.includes(option) 
        ? prev.filter(o => o !== option)
        : [...prev, option]
    );
  };

  const toggleFamilyQ3 = (option) => {
    setFamilyQ3(prev => 
      prev.includes(option) 
        ? prev.filter(o => o !== option)
        : [...prev, option]
    );
  };

  return React.createElement('div', {className: 'min-h-screen bg-white'},
    // Navigation
    React.createElement('nav', {className: 'sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100'},
      React.createElement('div', {className: 'max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'},
        React.createElement('div', {className: 'flex items-center'},
          React.createElement('img', {
            src: 'https://i.ibb.co/s9ZF2tRx/AuPairUp.png',
            alt: 'AuPairUp',
            className: 'h-12',
            onError: (e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }
          }),
          React.createElement('div', {style: {display: 'none'}, className: 'text-2xl font-bold'},
            React.createElement('span', {style: {color: '#8383FF'}}, 'AuPair'),
            React.createElement('span', {style: {color: '#F9ABE7'}}, 'Up')
          )
        ),
        React.createElement('div', {className: 'flex gap-8 items-center'},
          React.createElement('a', {href: '#aupairs', className: 'text-gray-700 hover:text-gray-900 font-medium transition-colors'}, 'For Au Pairs'),
          React.createElement('a', {href: '#families', className: 'text-gray-700 hover:text-gray-900 font-medium transition-colors'}, 'For Families'),
          React.createElement('a', {
            href: '#join',
            className: 'px-6 py-2.5 rounded-full font-semibold text-white transition-all hover:shadow-lg',
            style: {background: 'linear-gradient(135deg, #8383FF 0%, #F9ABE7 100%)'}
          }, 'Join Waitlist')
        )
      )
    ),

    // Hero Section
    React.createElement('section', {className: 'max-w-7xl mx-auto px-6 py-20'},
      React.createElement('div', {className: 'grid lg:grid-cols-2 gap-16 items-center'},
        // Left content
        React.createElement('div', {className: 'space-y-8'},
          React.createElement('div', {className: 'space-y-4'},
            React.createElement('h1', {className: 'text-6xl font-bold leading-tight'},
              React.createElement('span', {style: {color: '#8383FF'}}, 'Swipe.'),
              ' ',
              React.createElement('span', {style: {color: '#F9ABE7'}}, 'Match.'),
              ' ',
              React.createElement('span', {style: {color: '#8383FF'}}, 'Connect.')
            ),
            React.createElement('p', {
              className: 'text-2xl font-medium leading-relaxed',
              style: {
                background: 'linear-gradient(135deg, #9ca3af 0%, #4b5563 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }
            }, 'The first app revolutionizing how au pairs and families connect')
          ),
          
          // Member counter
          React.createElement('div', {className: 'inline-flex items-center gap-3 bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-4 rounded-full'},
            React.createElement(Users, {className: 'w-5 h-5', style: {color: '#8383FF'}}),
            React.createElement('div', null,
              React.createElement('p', {className: 'text-sm text-gray-600'}, 'Join our community'),
              React.createElement('p', {className: 'text-2xl font-bold', style: {color: '#8383FF'}}, `${memberCount} / 2,000`)
            )
          ),

          // Progress bar
          React.createElement('div', {className: 'space-y-2'},
            React.createElement('div', {className: 'h-2 bg-gray-100 rounded-full overflow-hidden'},
              React.createElement('div', {
                className: 'h-full rounded-full transition-all duration-500',
                style: {
                  width: `${(memberCount / 2000) * 100}%`,
                  background: 'linear-gradient(90deg, #8383FF 0%, #F9ABE7 100%)'
                }
              })
            ),
            React.createElement('p', {className: 'text-sm text-gray-500'}, `${2000 - memberCount} spots remaining for founding members`)
          ),

          // Benefits
          React.createElement('div', {className: 'grid grid-cols-3 gap-4 pt-4'},
            React.createElement('div', {className: 'text-center p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-transparent'},
              React.createElement(Heart, {className: 'w-8 h-8 mx-auto mb-2', style: {color: '#F9ABE7'}}),
              React.createElement('p', {className: 'text-sm font-medium text-gray-700'}, 'No endless searching')
            ),
            React.createElement('div', {className: 'text-center p-4 rounded-2xl bg-gradient-to-br from-pink-50 to-transparent'},
              React.createElement(Users, {className: 'w-8 h-8 mx-auto mb-2', style: {color: '#8383FF'}}),
              React.createElement('p', {className: 'text-sm font-medium text-gray-700'}, 'Match instantly')
            ),
            React.createElement('div', {className: 'text-center p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-transparent'},
              React.createElement(Globe, {className: 'w-8 h-8 mx-auto mb-2', style: {color: '#F9ABE7'}}),
              React.createElement('p', {className: 'text-sm font-medium text-gray-700'}, 'Connect globally')
            )
          )
        )
      )
    ),

    // How it Works section
    React.createElement('section', {className: 'py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50'},
      React.createElement('div', {className: 'max-w-7xl mx-auto px-6'},
        React.createElement('div', {className: 'text-center mb-16'},
          React.createElement('h2', {className: 'text-5xl font-bold mb-4', style: {color: '#8383FF'}}, 'How It Works'),
          React.createElement('p', {className: 'text-xl text-gray-600'}, 'Finding your perfect match is as easy as 1-2-3')
        ),

        React.createElement('div', {className: 'grid md:grid-cols-4 gap-8'},
          [
            {icon: User, title: 'Create Profile', desc: 'Share your story, experience, and what you\'re looking for'},
            {icon: MousePointer2, title: 'Swipe & Match', desc: 'Browse profiles and swipe right when you find someone special'},
            {icon: MessageCircle, title: 'Connect', desc: 'Chat with your matches and get to know each other'},
            {icon: Home, title: 'Start Journey', desc: 'Begin your au pair adventure with the perfect family'}
          ].map((step, i) =>
            React.createElement('div', {
              key: i,
              className: `text-center p-8 rounded-3xl transition-all duration-500 ${activeStep === i ? 'bg-white shadow-xl scale-105' : 'bg-white/50'}`
            },
              React.createElement('div', {
                className: 'w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center transition-all duration-500',
                style: {background: activeStep === i ? 'linear-gradient(135deg, #8383FF 0%, #F9ABE7 100%)' : '#f3f4f6'}
              },
                React.createElement(step.icon, {className: 'w-10 h-10', style: {color: activeStep === i ? 'white' : '#9ca3af'}})
              ),
              React.createElement('h3', {className: 'text-xl font-bold mb-3 text-gray-800'}, step.title),
              React.createElement('p', {className: 'text-gray-600'}, step.desc)
            )
          )
        )
      )
    ),

    // For Au Pairs section (simplified)
    React.createElement('section', {id: 'aupairs', className: 'py-24 bg-white'},
      React.createElement('div', {className: 'max-w-6xl mx-auto px-6'},
        React.createElement('div', {className: 'text-center mb-12'},
          React.createElement('h2', {className: 'text-5xl font-bold mb-4', style: {color: '#8383FF'}}, 'For Au Pairs'),
          React.createElement('p', {className: 'text-xl text-gray-600'}, '100% Free')
        ),
        
        React.createElement('div', {className: 'grid md:grid-cols-3 gap-8 mb-12'},
          [{icon: Zap, title: 'Match Faster'}, {icon: Gift, title: 'Always Free'}, {icon: Globe, title: 'Go Global'}].map((feat, i) =>
            React.createElement('div', {key: i, className: 'text-center p-6 rounded-3xl bg-gradient-to-br from-purple-50 to-transparent'},
              React.createElement(feat.icon, {className: 'w-12 h-12 mx-auto mb-4', style: {color: '#8383FF'}}),
              React.createElement('h3', {className: 'text-xl font-bold mb-2'}, feat.title)
            )
          )
        )
      )
    ),

    // For Families section (simplified)
    React.createElement('section', {id: 'families', className: 'py-24 bg-gradient-to-br from-pink-50 via-white to-purple-50'},
      React.createElement('div', {className: 'max-w-6xl mx-auto px-6'},
        React.createElement('div', {className: 'text-center mb-12'},
          React.createElement('h2', {className: 'text-5xl font-bold mb-4', style: {color: '#F9ABE7'}}, 'For Families'),
          React.createElement('p', {className: 'text-xl text-gray-600'}, 'Find your perfect match with confidence')
        )
      )
    ),

    // Subscribe section
    React.createElement('section', {id: 'join', className: 'py-24 bg-white'},
      React.createElement('div', {className: 'max-w-4xl mx-auto px-6 text-center'},
        React.createElement('h2', {className: 'text-5xl font-bold mb-6', style: {color: '#8383FF'}}, 
          'We know what it takes to move abroad — and to trust someone new at home.'
        ),
        React.createElement('p', {className: 'text-2xl text-gray-600 mb-12'}, 
          'That\'s why we built AuPairUp — made for real people, living real life.'
        ),

        React.createElement('form', {onSubmit: handleSubmit, className: 'max-w-md mx-auto mb-8'},
          React.createElement('div', {className: 'space-y-4'},
            React.createElement('div', {className: 'flex gap-4'},
              React.createElement('button', {
                type: 'button',
                onClick: () => setUserType('aupair'),
                className: `flex-1 py-3 rounded-full font-semibold transition-all ${userType === 'aupair' ? 'text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`,
                style: {background: userType === 'aupair' ? 'linear-gradient(135deg, #8383FF 0%, #F9ABE7 100%)' : undefined}
              }, 'I\'m an Au Pair'),
              React.createElement('button', {
                type: 'button',
                onClick: () => setUserType('family'),
                className: `flex-1 py-3 rounded-full font-semibold transition-all ${userType === 'family' ? 'text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`,
                style: {background: userType === 'family' ? 'linear-gradient(135deg, #8383FF 0%, #F9ABE7 100%)' : undefined}
              }, 'I\'m a Family')
            ),
            React.createElement('input', {
              type: 'email',
              value: email,
              onChange: (e) => setEmail(e.target.value),
              placeholder: 'your@email.com',
              required: true,
              className: 'w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-purple-400 focus:outline-none text-lg'
            }),
            React.createElement('button', {
              type: 'submit',
              className: 'w-full py-4 rounded-full font-bold text-white text-lg shadow-lg hover:shadow-xl transition-all',
              style: {background: 'linear-gradient(135deg, #8383FF 0%, #F9ABE7 100%)'}
            }, 'Claim Early Access')
          )
        ),

        React.createElement('p', {className: 'text-lg text-gray-600 mb-8 max-w-2xl mx-auto'},
          'Be the first to try it — created to make finding the right match feel simple, human, and mutual. ',
          React.createElement('span', {className: 'font-semibold', style: {color: '#8383FF'}}, 'First month free for early members.')
        ),

        React.createElement('div', {className: 'inline-flex items-center gap-3 bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-4 rounded-full'},
          React.createElement(Users, {className: 'w-5 h-5', style: {color: '#8383FF'}}),
          React.createElement('p', {className: 'text-lg'},
            React.createElement('span', {className: 'font-bold', style: {color: '#8383FF'}}, memberCount),
            React.createElement('span', {className: 'text-gray-600'}, ' / 2,000 joined')
          )
        )
      )
    ),

    // Footer
    React.createElement('footer', {className: 'bg-gray-50 py-12'},
      React.createElement('div', {className: 'max-w-7xl mx-auto px-6'},
        React.createElement('div', {className: 'flex flex-col md:flex-row justify-between items-center gap-8'},
          React.createElement('div', null,
            React.createElement('img', {
              src: 'https://i.ibb.co/s9ZF2tRx/AuPairUp.png',
              alt: 'AuPairUp',
              className: 'h-10',
              onError: (e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }
            }),
            React.createElement('div', {style: {display: 'none'}, className: 'text-xl font-bold'},
              React.createElement('span', {style: {color: '#8383FF'}}, 'AuPair'),
              React.createElement('span', {style: {color: '#F9ABE7'}}, 'Up')
            )
          ),
          React.createElement('div', {className: 'flex gap-8 text-sm text-gray-600'},
            React.createElement('a', {href: '#', className: 'hover:text-gray-900'}, 'Privacy Policy'),
            React.createElement('a', {href: '#', className: 'hover:text-gray-900'}, 'Terms of Service'),
            React.createElement('a', {href: 'mailto:hello@aupairup.com', className: 'hover:text-gray-900'}, 'hello@aupairup.com')
          ),
          React.createElement('div', {className: 'flex gap-4'},
            React.createElement('a', {href: '#', className: 'p-2 rounded-full hover:bg-purple-100 transition-colors'},
              React.createElement(Instagram, {className: 'w-5 h-5', style: {color: '#8383FF'}})
            ),
            React.createElement('a', {href: '#', className: 'p-2 rounded-full hover:bg-pink-100 transition-colors'},
              React.createElement(Facebook, {className: 'w-5 h-5', style: {color: '#F9ABE7'}})
            )
          )
        ),
        React.createElement('div', {className: 'text-center mt-8 text-sm text-gray-500'}, '© 2025 AuPairUp. All rights reserved.')
      )
    )
  );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(AuPairUpLanding));
