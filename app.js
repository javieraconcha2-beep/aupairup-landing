import React, { useState, useEffect } from 'react';
import { Heart, Users, Globe, ChevronLeft, ChevronRight, Zap, Gift, MessageCircle, User, MousePointer2, Home, Languages, Clock, Mail, Instagram, Facebook } from 'lucide-react';

export default function AuPairUpLanding() {
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

  const photos = [
    {
      url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
      alt: "Young people traveling together"
    },
    {
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
      alt: "Students studying together"
    },
    {
      url: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80",
      alt: "Au pair with family"
    },
    {
      url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
      alt: "Diverse group of friends"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
    // Here you would typically send to your email service
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

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://i.ibb.co/4why72X3/Au-Pair-Up-7.png" 
              alt="AuPairUp" 
              className="h-12"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div style={{display: 'none'}} className="text-2xl font-bold">
              <span style={{color: '#8383FF'}}>AuPair</span>
              <span style={{color: '#F9ABE7'}}>Up</span>
            </div>
          </div>
          
          {/* Menu */}
          <div className="flex gap-8 items-center">
            <a href="#aupairs" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              For Au Pairs
            </a>
            <a href="#families" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              For Families
            </a>
            <a 
              href="#join" 
              className="px-6 py-2.5 rounded-full font-semibold text-white transition-all hover:shadow-lg"
              style={{
                background: `linear-gradient(135deg, #8383FF 0%, #F9ABE7 100%)`,
              }}
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold leading-tight">
                <span style={{color: '#8383FF'}}>Swipe.</span>{' '}
                <span style={{color: '#F9ABE7'}}>Match.</span>{' '}
                <span style={{color: '#8383FF'}}>Connect.</span>
              </h1>
              
              <p 
                className="text-2xl font-medium leading-relaxed"
                style={{
                  background: 'linear-gradient(135deg, #9ca3af 0%, #4b5563 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                The first app revolutionizing how au pairs and families connect
              </p>
            </div>

            {/* Member Counter */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-4 rounded-full">
              <Users className="w-5 h-5" style={{color: '#8383FF'}} />
              <div>
                <p className="text-sm text-gray-600">Join our community</p>
                <p className="text-2xl font-bold" style={{color: '#8383FF'}}>
                  {memberCount} / 2,000
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${(memberCount / 2000) * 100}%`,
                    background: `linear-gradient(90deg, #8383FF 0%, #F9ABE7 100%)`
                  }}
                />
              </div>
              <p className="text-sm text-gray-500">
                {2000 - memberCount} spots remaining for founding members
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-transparent">
                <Heart className="w-8 h-8 mx-auto mb-2" style={{color: '#F9ABE7'}} />
                <p className="text-sm font-medium text-gray-700">No endless searching</p>
              </div>
              <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-pink-50 to-transparent">
                <Users className="w-8 h-8 mx-auto mb-2" style={{color: '#8383FF'}} />
                <p className="text-sm font-medium text-gray-700">Match instantly</p>
              </div>
              <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-transparent">
                <Globe className="w-8 h-8 mx-auto mb-2" style={{color: '#F9ABE7'}} />
                <p className="text-sm font-medium text-gray-700">100% free for au pairs</p>
              </div>
            </div>
          </div>

          {/* Right Side - Photo Carousel */}
          <div className="relative">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === currentSlide 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-95'
                  }`}
                >
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(180deg, transparent 0%, rgba(131, 131, 255, 0.1) 100%)`
                    }}
                  />
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-all"
              >
                <ChevronLeft className="w-5 h-5" style={{color: '#8383FF'}} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-all"
              >
                <ChevronRight className="w-5 h-5" style={{color: '#F9ABE7'}} />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{background: 'linear-gradient(135deg, #8383FF 0%, #F9ABE7 100%)'}}
                >
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Average match time</p>
                  <p className="text-2xl font-bold" style={{color: '#8383FF'}}>2 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gradient-to-b from-white to-purple-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2" style={{color: '#8383FF'}}>30+</p>
              <p className="text-gray-600">Countries</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2" style={{color: '#F9ABE7'}}>2,000+</p>
              <p className="text-gray-600">Families waiting</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2" style={{color: '#8383FF'}}>100%</p>
              <p className="text-gray-600">Free for au pairs</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2" style={{color: '#F9ABE7'}}>Spring '25</p>
              <p className="text-gray-600">Launch date</p>
            </div>
          </div>
        </div>
      </section>

      {/* Au Pairs Section */}
      <section id="aupairs" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header with Photo */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8" style={{color: '#8383FF'}} />
                <h2 className="text-5xl font-bold" style={{color: '#8383FF'}}>
                  For Au Pairs
                </h2>
              </div>
              <p 
                className="text-2xl font-semibold leading-relaxed"
                style={{
                  background: 'linear-gradient(135deg, #6b7280 0%, #8383FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Live abroad, learn a new language, and become part of a family — 
                Make lifelong connections
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl" style={{background: 'linear-gradient(135deg, #e0d5ff 0%, #ffd9f0 100%)'}}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Users className="w-32 h-32 opacity-20" style={{color: '#8383FF'}} />
                </div>
              </div>
            </div>
          </div>

          {/* What Makes Us Different */}
          <div className="mb-20">
            <h3 
              className="text-3xl font-bold text-center mb-12"
              style={{
                background: 'linear-gradient(135deg, #8383FF 0%, #F9ABE7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              What makes AuPairUp different
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 hover:shadow-lg transition-all">
                <Zap className="w-10 h-10 mb-3" style={{color: '#8383FF'}} />
                <h4 className="text-lg font-bold mb-2 text-gray-800">
                  Swipe-based matching
                </h4>
                <p className="text-sm text-gray-600 mb-1">Fast, human, modern</p>
                <p className="text-xs text-gray-500">
                  No endless scrolling or outdated forms.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-white border border-pink-100 hover:shadow-lg transition-all">
                <Gift className="w-10 h-10 mb-3" style={{color: '#F9ABE7'}} />
                <h4 className="text-lg font-bold mb-2 text-gray-800">
                  100% free for au pairs
                </h4>
                <p className="text-sm text-gray-600 mb-1">Always</p>
                <p className="text-xs text-gray-500">
                  No hidden fees, no subscriptions.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 hover:shadow-lg transition-all">
                <MessageCircle className="w-10 h-10 mb-3" style={{color: '#8383FF'}} />
                <h4 className="text-lg font-bold mb-2 text-gray-800">
                  Smart filters & instant chat
                </h4>
                <p className="text-sm text-gray-600 mb-1">All in one place</p>
                <p className="text-xs text-gray-500">
                  Match, chat and decide — seamlessly.
                </p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <h3 
              className="text-3xl font-bold text-center mb-16"
              style={{
                background: 'linear-gradient(135deg, #8383FF 0%, #F9ABE7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              How It Works
            </h3>
            
            <div className="max-w-3xl mx-auto space-y-8">
              {/* Step 1 */}
              <div className={`flex items-center gap-6 transition-all duration-500 ${activeStep === 0 ? 'scale-105' : 'scale-100 opacity-70'}`}>
                <div 
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0 transition-all duration-500 ${
                    activeStep === 0 ? 'shadow-2xl' : 'shadow-md'
                  }`}
                  style={{
                    background: activeStep === 0 
                      ? 'linear-gradient(135deg, #8383FF 0%, #F9ABE7 100%)' 
                      : 'linear-gradient(135deg, #c4c4ff 0%, #ffd4f0 100%)'
                  }}
                >
                  1
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold mb-2 text-gray-800">Create Your Profile</h4>
                  <p className="text-gray-600">Add photos, experience, and preferences</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className={`flex items-center gap-6 transition-all duration-500 ${activeStep === 1 ? 'scale-105' : 'scale-100 opacity-70'}`}>
                <div 
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0 transition-all duration-500 ${
                    activeStep === 1 ? 'shadow-2xl' : 'shadow-md'
                  }`}
                  style={{
                    background: activeStep === 1 
                      ? 'linear-gradient(135deg, #8383FF 0%, #F9ABE7 100%)' 
                      : 'linear-gradient(135deg, #c4c4ff 0%, #ffd4f0 100%)'
                  }}
                >
                  2
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold mb-2 text-gray-800">Start Swiping</h4>
                  <p className="text-gray-600">Browse families that match your criteria</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className={`flex items-center gap-6 transition-all duration-500 ${activeStep === 2 ? 'scale-105' : 'scale-100 opacity-70'}`}>
                <div 
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0 transition-all duration-500 ${
                    activeStep === 2 ? 'shadow-2xl' : 'shadow-md'
                  }`}
                  style={{
                    background: activeStep === 2 
                      ? 'linear-gradient(135deg, #8383FF 0%, #F9ABE7 100%)' 
                      : 'linear-gradient(135deg, #c4c4ff 0%, #ffd4f0 100%)'
                  }}
                >
                  3
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold mb-2 text-gray-800">Match Instantly</h4>
                  <p className="text-gray-600">Connect when there's mutual interest</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className={`flex items-center gap-6 transition-all duration-500 ${activeStep === 3 ? 'scale-105' : 'scale-100 opacity-70'}`}>
                <div 
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0 transition-all duration-500 ${
                    activeStep === 3 ? 'shadow-2xl' : 'shadow-md'
                  }`}
                  style={{
                    background: activeStep === 3 
                      ? 'linear-gradient(135deg, #8383FF 0%, #F9ABE7 100%)' 
                      : 'linear-gradient(135deg, #c4c4ff 0%, #ffd4f0 100%)'
                  }}
                >
                  4
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold mb-2 text-gray-800">Chat & Decide</h4>
                  <p className="text-gray-600">Video call, meet the family, make your choice</p>
                </div>
              </div>
            </div>
          </div>

          {/* Questions Section */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold mb-3 text-gray-800">
                Help us create the perfect app
              </h3>
              <p className="text-gray-600">No email required • Just 2 quick questions</p>
            </div>

            {!showThanks ? (
              <div className="space-y-10">
                {/* Question 1 */}
                <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50">
                  <p className="text-lg font-semibold mb-4 text-gray-800">
                    Would you use a Tinder-style app to find your au pair family?
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    <button
                      onClick={() => handleQ1('definitely')}
                      className={`py-4 px-6 rounded-2xl font-semibold transition-all ${
                        q1Answer === 'definitely'
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                          : 'bg-white text-gray-700 hover:shadow-md'
                      }`}
                    >
                      Definitely
                    </button>
                    <button
                      onClick={() => handleQ1('maybe')}
                      className={`py-4 px-6 rounded-2xl font-semibold transition-all ${
                        q1Answer === 'maybe'
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                          : 'bg-white text-gray-700 hover:shadow-md'
                      }`}
                    >
                      Maybe
                    </button>
                    <button
                      onClick={() => handleQ1('not-sure')}
                      className={`py-4 px-6 rounded-2xl font-semibold transition-all ${
                        q1Answer === 'not-sure'
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                          : 'bg-white text-gray-700 hover:shadow-md'
                      }`}
                    >
                      Not sure
                    </button>
                  </div>
                </div>

                {/* Question 2 */}
                <div className="p-8 rounded-3xl bg-gradient-to-br from-pink-50 to-purple-50">
                  <p className="text-lg font-semibold mb-4 text-gray-800">
                    Where do you want to be an au pair?
                  </p>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-4">
                    {['Germany', 'France', 'Spain', 'USA'].map((country) => (
                      <button
                        key={country}
                        onClick={() => setQ2Answer(country)}
                        className={`py-4 px-6 rounded-2xl font-semibold transition-all ${
                          q2Answer === country
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                            : 'bg-white text-gray-700 hover:shadow-md'
                        }`}
                      >
                        {country}
                      </button>
                    ))}
                    <button
                      onClick={() => setQ2Answer('other')}
                      className={`py-4 px-6 rounded-2xl font-semibold transition-all ${
                        q2Answer === 'other'
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                          : 'bg-white text-gray-700 hover:shadow-md'
                      }`}
                    >
                      Other
                    </button>
                  </div>
                  
                  {q2Answer === 'other' && (
                    <input
                      type="text"
                      value={otherCountry}
                      onChange={(e) => setOtherCountry(e.target.value)}
                      placeholder="Which country?"
                      className="w-full px-4 py-3 rounded-2xl border-2 border-purple-200 focus:border-purple-400 focus:outline-none"
                    />
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center p-12 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50">
                <div 
                  className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{background: 'linear-gradient(135deg, #8383FF 0%, #F9ABE7 100%)'}}
                >
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Thanks for your input!</h3>
                <p className="text-gray-600 mb-8">Your feedback helps us build something amazing</p>
                <a
                  href="#families"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #8383FF 0%, #F9ABE7 100%)',
                  }}
                >
                  Next: For Families
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Families Section */}
      <section id="families" className="py-24 bg-gradient-to-b from-white to-purple-50/30">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Home className="w-8 h-8" style={{color: '#8383FF'}} />
              <h2 className="text-5xl font-bold" style={{color: '#8383FF'}}>
                For Families
              </h2>
            </div>
            <p 
              className="text-2xl font-semibold leading-relaxed max-w-3xl"
              style={{
                background: 'linear-gradient(135deg, #6b7280 0%, #8383FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Make room for what matters, life feels better when you share it
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-20">
            <h3 
              className="text-3xl font-bold text-center mb-12"
              style={{
                background: 'linear-gradient(135deg, #8383FF 0%, #F9ABE7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Why families choose AuPairUp
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <div className="text-center p-8 rounded-3xl bg-white border border-purple-100 hover:shadow-xl transition-all">
                <Clock className="w-16 h-16 mx-auto mb-4" style={{color: '#9E8CFF'}} />
                <h3 className="text-2xl font-bold mb-3 text-gray-800">More time for what matters</h3>
                <p className="text-gray-600">
                  Find an au pair who fits naturally into your family's rhythm — so daily life flows with less stress.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="text-center p-8 rounded-3xl bg-white border border-purple-100 hover:shadow-xl transition-all">
                <Globe className="w-16 h-16 mx-auto mb-4" style={{color: '#9E8CFF'}} />
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Connection that goes beyond help</h3>
                <p className="text-gray-600">
                  Bring a new language, a new culture, and new perspectives into your home.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="text-center p-8 rounded-3xl bg-white border border-purple-100 hover:shadow-xl transition-all">
                <Heart className="w-16 h-16 mx-auto mb-4" style={{color: '#9E8CFF'}} />
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Childcare that feels personal</h3>
                <p className="text-gray-600">
                  Our matching process focuses on trust, compatibility, and genuine connection.
                </p>
              </div>
            </div>
          </div>

          {/* What Makes Us Different */}
          <div className="mb-12">
            <h3 
              className="text-3xl font-bold text-center mb-12"
              style={{
                background: 'linear-gradient(135deg, #8383FF 0%, #F9ABE7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              What makes AuPairUp different
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Card 1 */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 hover:shadow-lg transition-all">
                <MessageCircle className="w-10 h-10 mb-3" style={{color: '#8383FF'}} />
                <h4 className="text-lg font-bold mb-2 text-gray-800">
                  Match only with au pairs who are actually interested
                </h4>
                <p className="text-sm text-gray-600">
                  No more unanswered messages — every match means mutual interest.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-white border border-pink-100 hover:shadow-lg transition-all">
                <Zap className="w-10 h-10 mb-3" style={{color: '#F9ABE7'}} />
                <h4 className="text-lg font-bold mb-2 text-gray-800">
                  Smart filters & instant chat
                </h4>
                <p className="text-sm text-gray-600">
                  Filter by language, timing, and vibe — then connect instantly in one tap.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 hover:shadow-lg transition-all">
                <Gift className="w-10 h-10 mb-3" style={{color: '#8383FF'}} />
                <h4 className="text-lg font-bold mb-2 text-gray-800">
                  Affordable premium (€20/month)
                </h4>
                <p className="text-sm text-gray-600">
                  Simple, transparent pricing — no hidden fees, no contracts, no stress.
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-white border border-pink-100 hover:shadow-lg transition-all">
                <MousePointer2 className="w-10 h-10 mb-3" style={{color: '#F9ABE7'}} />
                <h4 className="text-lg font-bold mb-2 text-gray-800">
                  Modern, intuitive design
                </h4>
                <p className="text-sm text-gray-600">
                  A platform built for families who value time, trust, and simplicity.
                </p>
              </div>
            </div>
            
            {/* Closing phrase */}
            <p className="text-center text-lg text-gray-600 mt-12 italic">
              Because family life runs smoother when technology feels human.
            </p>
          </div>

          {/* How It Works */}
          <div>
            <h3 
              className="text-3xl font-bold text-center mb-16"
              style={{
                background: 'linear-gradient(135deg, #8383FF 0%, #F9ABE7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              How It Works
            </h3>
            
            <div className="max-w-3xl mx-auto space-y-8">
              {/* Step 1 */}
              <div className="flex items-center gap-6">
                <div className="flex-1 text-right">
                  <h4 className="text-2xl font-bold mb-2 text-gray-800">Create Your Profile</h4>
                  <p className="text-gray-600">Describe your family, needs, and what you're looking for</p>
                </div>
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0 shadow-lg"
                  style={{background: 'linear-gradient(135deg, #F9ABE7 0%, #8383FF 100%)'}}
                >
                  1
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-6">
                <div className="flex-1 text-right">
                  <h4 className="text-2xl font-bold mb-2 text-gray-800">Browse & Swipe</h4>
                  <p className="text-gray-600">See au pairs that match your criteria and preferences</p>
                </div>
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0 shadow-lg"
                  style={{background: 'linear-gradient(135deg, #F9ABE7 0%, #8383FF 100%)'}}
                >
                  2
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-6">
                <div className="flex-1 text-right">
                  <h4 className="text-2xl font-bold mb-2 text-gray-800">Match Instantly</h4>
                  <p className="text-gray-600">Connect when both sides are interested — no awkward rejection</p>
                </div>
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0 shadow-lg"
                  style={{background: 'linear-gradient(135deg, #F9ABE7 0%, #8383FF 100%)'}}
                >
                  3
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-center gap-6">
                <div className="flex-1 text-right">
                  <h4 className="text-2xl font-bold mb-2 text-gray-800">Interview & Decide</h4>
                  <p className="text-gray-600">Video call, meet your au pair, finalize arrangements</p>
                </div>
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0 shadow-lg"
                  style={{background: 'linear-gradient(135deg, #F9ABE7 0%, #8383FF 100%)'}}
                >
                  4
                </div>
              </div>
            </div>
          </div>

          {/* Family Questions */}
          <div className="max-w-3xl mx-auto mt-20">
            <div className="text-center mb-10">
              <h3 
                className="text-3xl font-bold mb-3"
                style={{
                  background: 'linear-gradient(135deg, #8383FF 0%, #F9ABE7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Help us create the perfect app
              </h3>
              <p className="text-gray-600">No email required • Just 3 quick questions</p>
            </div>

            {!showFamilyThanks ? (
              <div className="space-y-10">
                {/* Question 1 */}
                <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50">
                  <p className="text-lg font-semibold mb-4 text-gray-800">
                    Why are you considering an au pair?
                  </p>
                  <p className="text-sm text-gray-600 mb-4">(Choose one or more)</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'More balance at home',
                      'Cultural or language exchange for kids',
                      'Flexible childcare',
                      'Extra help you can trust',
                      'More quality time together',
                      'Just exploring the idea'
                    ].map((option) => (
                      <button
                        key={option}
                        onClick={() => toggleFamilyQ1(option)}
                        className={`py-3 px-4 rounded-xl font-medium text-left transition-all ${
                          familyQ1.includes(option)
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:shadow-md'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Question 2 */}
                <div className="p-8 rounded-3xl bg-gradient-to-br from-pink-50 to-purple-50">
                  <p className="text-lg font-semibold mb-4 text-gray-800">
                    Where are you based?
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {['🇩🇪 Germany', '🇫🇷 France', '🇪🇸 Spain', '🇮🇹 Italy', '🇺🇸 USA', '🌍 Other'].map((location) => (
                      <button
                        key={location}
                        onClick={() => setFamilyQ2(location)}
                        className={`py-4 px-6 rounded-2xl font-semibold transition-all ${
                          familyQ2 === location
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                            : 'bg-white text-gray-700 hover:shadow-md'
                        }`}
                      >
                        {location}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Question 3 */}
                <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50">
                  <p className="text-lg font-semibold mb-4 text-gray-800">
                    What would make finding the right au pair easier?
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'A simpler process',
                      'Verified profiles',
                      'Guidance by country',
                      'Better communication tools'
                    ].map((option) => (
                      <button
                        key={option}
                        onClick={() => toggleFamilyQ3(option)}
                        className={`py-3 px-4 rounded-xl font-medium text-left transition-all ${
                          familyQ3.includes(option)
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:shadow-md'
                        }`}
                      >
                        {option}
                        {option === 'Guidance by country' && (
                          <span className="block text-xs mt-1 opacity-90">
                            (contracts, documents, agencies, insurance, etc.)
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {(familyQ1.length > 0 || familyQ2 || familyQ3.length > 0) && (
                  <div className="text-center">
                    <button
                      onClick={() => setShowFamilyThanks(true)}
                      className="px-8 py-4 rounded-full font-semibold text-white transition-all hover:shadow-lg"
                      style={{
                        background: 'linear-gradient(135deg, #8383FF 0%, #F9ABE7 100%)',
                      }}
                    >
                      Submit Feedback
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center p-12 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50">
                <div 
                  className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{background: 'linear-gradient(135deg, #8383FF 0%, #F9ABE7 100%)'}}
                >
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Thanks for your input!</h3>
                <p className="text-gray-600 mb-8">Your feedback helps us build something amazing</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section id="join" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 
            className="text-5xl font-bold mb-6"
            style={{color: '#8383FF'}}
          >
            We know what it takes to move abroad — and to trust someone new at home.
          </h2>
          
          <p className="text-2xl text-gray-600 mb-12">
            That's why we built AuPairUp — made for real people, living real life.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="space-y-4">
              {/* User Type Selector */}
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setUserType('aupair')}
                  className={`flex-1 py-3 rounded-full font-semibold transition-all ${
                    userType === 'aupair'
                      ? 'text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  style={{
                    background: userType === 'aupair' 
                      ? 'linear-gradient(135deg, #8383FF 0%, #F9ABE7 100%)'
                      : undefined
                  }}
                >
                  I'm an Au Pair
                </button>
                <button
                  type="button"
                  onClick={() => setUserType('family')}
                  className={`flex-1 py-3 rounded-full font-semibold transition-all ${
                    userType === 'family'
                      ? 'text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  style={{
                    background: userType === 'family' 
                      ? 'linear-gradient(135deg, #8383FF 0%, #F9ABE7 100%)'
                      : undefined
                  }}
                >
                  I'm a Family
                </button>
              </div>

              {/* Email Input */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-purple-400 focus:outline-none text-lg"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-full font-bold text-white text-lg shadow-lg hover:shadow-xl transition-all"
                style={{
                  background: 'linear-gradient(135deg, #8383FF 0%, #F9ABE7 100%)'
                }}
              >
                Claim Early Access
              </button>
            </div>
          </form>

          {/* Message */}
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Be the first to try it — created to make finding the right match feel simple, human, and mutual. 
            <span className="font-semibold" style={{color: '#8383FF'}}> First month free for early members.</span>
          </p>

          {/* Counter */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-4 rounded-full">
            <Users className="w-5 h-5" style={{color: '#8383FF'}} />
            <p className="text-lg">
              <span className="font-bold" style={{color: '#8383FF'}}>{memberCount}</span>
              <span className="text-gray-600"> / 2,000 joined</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo */}
            <div>
              <img 
                src="https://i.ibb.co/4why72X3/Au-Pair-Up-7.png" 
                alt="AuPairUp" 
                className="h-10"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div style={{display: 'none'}} className="text-xl font-bold">
                <span style={{color: '#8383FF'}}>AuPair</span>
                <span style={{color: '#F9ABE7'}}>Up</span>
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-8 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900">Terms of Service</a>
              <a href="mailto:hello@aupairup.com" className="hover:text-gray-900">hello@aupairup.com</a>
            </div>

            {/* Social */}
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full hover:bg-purple-100 transition-colors">
                <Instagram className="w-5 h-5" style={{color: '#8383FF'}} />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-pink-100 transition-colors">
                <Facebook className="w-5 h-5" style={{color: '#F9ABE7'}} />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 text-sm text-gray-500">
            © 2025 AuPairUp. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
