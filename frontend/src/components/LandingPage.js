import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, PanInfo } from 'framer-motion';
import { Heart, Brain, BookOpen, HelpCircle, MessageCircle, Shield, Star, Check, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  // Character carousel data with yesterday's specified images
  const characters = [
    {
      id: 1,
      name: "洛可 LoCo",
      image: "https://images.unsplash.com/photo-1748436826061-a84fbf7c40ff?w=800&h=800&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "千奈",
      image: "https://images.unsplash.com/photo-1748436889517-bc4b8e0c5eb3?w=800&h=800&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Suki 苏奇",
      image: "https://images.unsplash.com/photo-1748436826195-8b4e78b9de8f?w=800&h=800&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "黎绮",
      image: "https://images.unsplash.com/photo-1748436878978-48695c8e14ac?w=800&h=800&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "林成卿",
      image: "https://images.unsplash.com/photo-1748436826108-f4645552b2ab?w=800&h=800&fit=crop&crop=face"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % characters.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + characters.length) % characters.length);
  };

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % characters.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [characters.length]);

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 100) {
      prevSlide();
    } else if (info.offset.x < -100) {
      nextSlide();
    }
  };

  const companionTypes = [
    {
      id: 1,
      title: "Life Coach",
      subtitle: "Personal Development",
      description: "Empathetic companion focused on helping you achieve your personal and professional goals",
      icon: Heart,
      color: "from-blue-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1523531099245-31a49f4527bb"
    },
    {
      id: 2,
      title: "Career Mentor",
      subtitle: "Professional Growth",
      description: "Strategic advisor for your career development, leadership skills, and workplace challenges",
      icon: Brain,
      color: "from-pink-500 to-rose-600",
      image: "https://images.pexels.com/photos/30475855/pexels-photo-30475855.jpeg"
    },
    {
      id: 3,
      title: "Wellness Guide",
      subtitle: "Mental Health Support",
      description: "Compassionate companion specializing in mindfulness, stress management, and emotional well-being",
      icon: Heart,
      color: "from-emerald-500 to-teal-600",
      image: "https://images.pexels.com/photos/7278845/pexels-photo-7278845.jpeg"
    },
    {
      id: 4,
      title: "Creative Catalyst",
      subtitle: "Innovation Partner",
      description: "Inspiring companion for creative projects, artistic endeavors, and innovative thinking",
      icon: BookOpen,
      color: "from-amber-500 to-orange-600",
      image: "https://images.pexels.com/photos/5896422/pexels-photo-5896422.jpeg"
    },
    {
      id: 5,
      title: "Tech Innovator",
      subtitle: "Technology Expert",
      description: "Forward-thinking companion for digital transformation, AI insights, and tech career guidance",
      icon: HelpCircle,
      color: "from-indigo-500 to-blue-600",
      image: "https://images.pexels.com/photos/5475793/pexels-photo-5475793.jpeg"
    },
    {
      id: 6,
      title: "Family Advisor",
      subtitle: "Relationship Support",
      description: "Understanding companion for family dynamics, relationship building, and parenting challenges",
      icon: MessageCircle,
      color: "from-violet-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1560250163-17506787d971"
    }
  ];

  const features = [
    {
      title: "Personalized 1-on-1 Interactions",
      description: "Each AI companion has a unique personality and growth story, providing truly personalized communication experiences",
      icon: Heart
    },
    {
      title: "Growth Diary Tracking",
      description: "Track your development journey as AI companions adjust their approach based on your progress",
      icon: BookOpen
    },
    {
      title: "Co-Creation Stories",
      description: "Collaborate with AI companions to create unique storylines, influencing each other's growth trajectories",
      icon: Star
    },
    {
      title: "Multi-Channel Access",
      description: "Connect with your AI companions anytime, anywhere through mobile, desktop, and tablet devices",
      icon: MessageCircle
    }
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Young Professional",
      content: "Through my Career Mentor, I gained valuable insights for professional development. My work now has clearer direction and purpose.",
      avatar: "https://images.pexels.com/photos/9089256/pexels-photo-9089256.jpeg"
    },
    {
      name: "Maria Santos",
      role: "Entrepreneur",
      content: "My Tech Innovator companion helped me navigate startup challenges. It's like having a professional consultant available 24/7.",
      avatar: "https://images.pexels.com/photos/9089256/pexels-photo-9089256.jpeg"
    },
    {
      name: "Jennifer Chen",
      role: "Creative Professional",
      content: "My Wellness Guide truly understands my emotional needs and provided incredible psychological support during challenging times.",
      avatar: "https://images.pexels.com/photos/9089256/pexels-photo-9089256.jpeg"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "19.99",
      period: "month",
      features: ["1 AI Companion", "Basic conversation features", "Limited daily messages", "Standard response speed"],
      popular: false
    },
    {
      name: "Professional",
      price: "49.99",
      period: "month",
      features: ["3 AI Companions", "Advanced conversation features", "Unlimited messages", "Priority response", "Growth diary", "Emotional analysis"],
      popular: true
    },
    {
      name: "Premium",
      price: "99.99",
      period: "month",
      features: ["All 6 AI Companions", "All premium features", "Priority customer support", "Custom personalization", "Co-creation stories", "Advanced analytics"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <motion.header 
        className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10"
        style={{ opacity: headerOpacity }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Octopada.io
            </motion.div>
            
            <nav className="hidden md:flex space-x-8">
              {['功能特色', '伴侣类型', '定价方案', '关于我们'].map((item) => (
                <motion.a 
                  key={item}
                  href={`#${item}`}
                  className="text-white/80 hover:text-white transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            <motion.button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>

            <Link to="/auth">
              <motion.button 
                className="hidden md:block px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="px-6 py-4 space-y-4">
                {['Features', 'Companions', 'Pricing', 'About'].map((item) => (
                  <a key={item} href={`#${item}`} className="block text-white/80 hover:text-white transition-colors">
                    {item}
                  </a>
                ))}
                <Link to="/auth">
                  <button className="w-full px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold">
                    Get Started
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Redefining
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Companionship
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-white/80 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                More than just chatbots - discover AI companions that truly understand and grow with you.
                <br />
                Six unique companion types designed to meet every aspect of your personal development journey.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link to="/auth">
                  <motion.button 
                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-semibold rounded-full hover:shadow-xl hover:shadow-purple-500/25 transition-all"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Free Trial
                  </motion.button>
                </Link>
                <motion.button 
                  className="px-8 py-4 border-2 border-white/20 text-white text-lg font-semibold rounded-full hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative rounded-3xl overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10 p-8">
                <motion.img 
                  src="https://images.pexels.com/photos/8728386/pexels-photo-8728386.jpeg"
                  alt="AI Companionship Technology"
                  className="w-full h-96 object-cover rounded-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Character Carousel */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Meet Your AI Companions
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Each AI companion has a unique personality and story. Swipe to explore more
            </p>
          </motion.div>

          {/* Desktop Carousel */}
          <div className="hidden md:block relative">
            <div className="grid grid-cols-5 gap-6">
              {characters.map((character, index) => (
                <motion.div
                  key={character.id}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  onClick={() => setCurrentSlide(index)}
                >
                  <div className="relative h-80 rounded-3xl overflow-hidden">
                    <img 
                      src={character.image}
                      alt={character.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-bold text-lg text-shadow">{character.name}</h3>
                    </div>
                    <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <div className="relative h-96 rounded-3xl overflow-hidden">
              <motion.div
                className="flex h-full"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={handleDragEnd}
                animate={{ x: `-${currentSlide * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {characters.map((character, index) => (
                  <motion.div
                    key={character.id}
                    className="relative flex-shrink-0 w-full h-full"
                  >
                    <img 
                      src={character.image}
                      alt={character.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-white font-bold text-2xl text-shadow">{character.name}</h3>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {characters.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                      : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Character Info */}
          <motion.div 
            className="text-center mt-12"
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-2xl mx-auto backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-white mb-4">{characters[currentSlide].name}</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                {currentSlide === 0 && "温暖阳光的男性伙伴，擅长倾听和鼓励，陪伴你度过人生的每个重要时刻"}
                {currentSlide === 1 && "温柔体贴的女性伙伴，善解人意，用细腻的情感为你带来心灵的慰藉"}
                {currentSlide === 2 && "活泼开朗的伙伴，充满创意和想象力，让每次对话都充满惊喜"}
                {currentSlide === 3 && "优雅知性的伙伴，拥有丰富的人生阅历，为你提供智慧的建议"}
                {currentSlide === 4 && "成熟稳重的伙伴，具备专业的知识背景，助力你的成长和发展"}
              </p>
              <Link to="/auth">
                <motion.button 
                  className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Conversation
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Companion Types Matrix */}
      <section id="Companions" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Six Companion Types
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Each with unique personalities and expertise areas, providing the most personalized companionship experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companionTypes.map((companion, index) => (
              <motion.div
                key={companion.id}
                className="group relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="relative h-48 mb-6 rounded-2xl overflow-hidden">
                  <img 
                    src={companion.image}
                    alt={companion.subtitle}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${companion.color} opacity-70 group-hover:opacity-80 transition-opacity`}></div>
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${companion.color} flex items-center justify-center`}>
                      <companion.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{companion.title}</h3>
                    <p className="text-purple-300 font-semibold">{companion.subtitle}</p>
                  </div>
                  <p className="text-white/70 leading-relaxed">{companion.description}</p>
                  
                  <Link to="/auth">
                    <motion.button 
                      className={`w-full py-3 bg-gradient-to-r ${companion.color} text-white font-semibold rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Start Conversation
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="Features" className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Why Choose Octopada
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              More than simple conversations - we're your true growth partners
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Privacy */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7233189/pexels-photo-7233189.jpeg"
                  alt="Digital Privacy Security"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Shield className="w-8 h-8 text-purple-400" />
                  <h2 className="text-4xl font-bold text-white">Privacy & Security</h2>
                </div>
                
                <p className="text-xl text-white/80 leading-relaxed">
                  We understand the importance of privacy. All conversations are end-to-end encrypted,
                  and your personal information is never shared with third parties.
                </p>

                <div className="space-y-4">
                  {[
                    'End-to-end encryption protection',
                    'Local data storage',
                    'Anonymized processing',
                    'Regular security audits',
                    'Complete user data control'
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-white/80">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Real User Stories
            </h2>
            <p className="text-xl text-white/70">
              Listen to their growth stories with AI companions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl p-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-purple-300 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed">{testimonial.content}</p>
                <div className="flex space-x-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="Pricing" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Choose Your Plan
            </h2>
            <p className="text-xl text-white/70">
              Different needs, different companionship experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative backdrop-blur-sm border rounded-3xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-purple-500/20 to-pink-500/20 border-purple-400/50 scale-105' 
                    : 'bg-white/5 border-white/10'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">${plan.price}</span>
                    <span className="text-white/60 ml-2">/{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to="/auth">
                  <motion.button 
                    className={`w-full py-4 rounded-xl font-semibold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-xl hover:shadow-purple-500/25'
                        : 'border-2 border-white/20 text-white hover:bg-white/10'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Choose Plan
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900/40 to-pink-900/40">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Start Your AI Companionship Journey
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              No more loneliness, no more confusion. Let AI companions be part of every moment of your growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/auth">
                <motion.button 
                  className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-bold rounded-full hover:shadow-xl hover:shadow-purple-500/25 transition-all"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial Now
                </motion.button>
              </Link>
              <motion.button 
                className="px-10 py-4 border-2 border-white/30 text-white text-lg font-semibold rounded-full hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Octopada.io
              </div>
              <p className="text-white/60 leading-relaxed">
                Redefining AI companionship, providing truly meaningful virtual partnerships for your growth.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <div className="space-y-2">
                {['Features', 'Companions', 'Pricing', 'User Guide'].map(item => (
                  <a key={item} href="#" className="block text-white/60 hover:text-white transition-colors">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <div className="space-y-2">
                {['Help Center', 'Contact Us', 'User Feedback', 'Technical Support'].map(item => (
                  <a key={item} href="#" className="block text-white/60 hover:text-white transition-colors">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                {['Privacy Policy', 'Terms of Service', 'User Agreement', 'Security Policy'].map(item => (
                  <a key={item} href="#" className="block text-white/60 hover:text-white transition-colors">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-white/60">
              © 2024 Octopada.io. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;