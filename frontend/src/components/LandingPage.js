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
      title: "生活教练",
      subtitle: "个人发展",
      description: "富有同理心的伙伴，专注于帮助您实现个人和职业目标",
      icon: Heart,
      color: "from-blue-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1523531099245-31a49f4527bb"
    },
    {
      id: 2,
      title: "职业导师",
      subtitle: "专业成长",
      description: "为您的职业发展、领导技能和职场挑战提供战略建议",
      icon: Brain,
      color: "from-pink-500 to-rose-600",
      image: "https://images.pexels.com/photos/30475855/pexels-photo-30475855.jpeg"
    },
    {
      id: 3,
      title: "健康向导",
      subtitle: "心理健康支持",
      description: "专注于正念、压力管理和情感健康的富有同情心的伙伴",
      icon: Heart,
      color: "from-emerald-500 to-teal-600",
      image: "https://images.pexels.com/photos/7278845/pexels-photo-7278845.jpeg"
    },
    {
      id: 4,
      title: "创意催化剂",
      subtitle: "创新伙伴",
      description: "激发创意项目、艺术创作和创新思维的灵感伙伴",
      icon: BookOpen,
      color: "from-amber-500 to-orange-600",
      image: "https://images.pexels.com/photos/5896422/pexels-photo-5896422.jpeg"
    },
    {
      id: 5,
      title: "科技创新者",
      subtitle: "技术专家",
      description: "前瞻性伙伴，专注于数字化转型、AI洞察和技术职业指导",
      icon: HelpCircle,
      color: "from-indigo-500 to-blue-600",
      image: "https://images.pexels.com/photos/5475793/pexels-photo-5475793.jpeg"
    },
    {
      id: 6,
      title: "家庭顾问",
      subtitle: "关系支持",
      description: "理解家庭动态、关系建设和育儿挑战的贴心伙伴",
      icon: MessageCircle,
      color: "from-violet-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1560250163-17506787d971"
    }
  ];

  const features = [
    {
      title: "个性化一对一互动",
      description: "每个AI伙伴都有独特的个性和成长故事，提供真正个性化的交流体验",
      icon: Heart
    },
    {
      title: "成长日记追踪",
      description: "追踪您的发展历程，AI伙伴会根据您的进展调整他们的方法",
      icon: BookOpen
    },
    {
      title: "共创故事",
      description: "与AI伙伴合作创造独特的故事情节，相互影响彼此的成长轨迹",
      icon: Star
    },
    {
      title: "多渠道访问",
      description: "通过手机、桌面和平板设备随时随地与您的AI伙伴连接",
      icon: MessageCircle
    }
  ];

  const testimonials = [
    {
      name: "张晓明",
      role: "年轻职场人",
      content: "通过我的职业导师，我获得了宝贵的职业发展见解。我的工作现在有了更清晰的方向和目标。",
      avatar: "https://images.pexels.com/photos/9089256/pexels-photo-9089256.jpeg"
    },
    {
      name: "李婉儿",
      role: "创业者",
      content: "我的科技创新者伙伴帮助我应对创业挑战。就像有一个专业顾问24/7可用。",
      avatar: "https://images.pexels.com/photos/9089256/pexels-photo-9089256.jpeg"
    },
    {
      name: "王美华",
      role: "创意专业人士",
      content: "我的健康向导真正理解我的情感需求，在困难时期为我提供了不可思议的心理支持。",
      avatar: "https://images.pexels.com/photos/9089256/pexels-photo-9089256.jpeg"
    }
  ];

  const pricingPlans = [
    {
      name: "入门版",
      price: "19.99",
      period: "月",
      features: ["1个AI伙伴", "基础对话功能", "每日消息限制", "标准响应速度"],
      popular: false
    },
    {
      name: "专业版",
      price: "49.99",
      period: "月",
      features: ["3个AI伙伴", "高级对话功能", "无限消息", "优先响应", "成长日记", "情感分析"],
      popular: true
    },
    {
      name: "高级版",
      price: "99.99",
      period: "月",
      features: ["全部6个AI伙伴", "所有高级功能", "优先客户支持", "个性化定制", "共创故事", "高级分析"],
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
            <Link to="/">
              <motion.div 
                className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                Octopada.io
              </motion.div>
            </Link>
            
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
                立即开始
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
                {['功能特色', '伴侣类型', '定价方案', '关于我们'].map((item) => (
                  <a key={item} href={`#${item}`} className="block text-white/80 hover:text-white transition-colors">
                    {item}
                  </a>
                ))}
                <Link to="/auth">
                  <button className="w-full px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold">
                    立即开始
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
                重新定义
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI伙伴关系
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-white/80 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                不仅仅是聊天机器人 - 发现真正理解并与您共同成长的AI伙伴。
                <br />
                六种独特的伙伴类型，满足您个人发展旅程的每个方面。
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
                    开始免费试用
                  </motion.button>
                </Link>
                <motion.button 
                  className="px-8 py-4 border-2 border-white/20 text-white text-lg font-semibold rounded-full hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  了解更多
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
                  alt="AI伙伴技术"
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
              遇见您的AI伙伴
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              每个AI伙伴都有独特的个性和故事。滑动探索更多
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
                  开始对话
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Companion Types Matrix */}
      <section id="伴侣类型" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              六种伙伴类型
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              每种都有独特的个性和专业领域，提供最个性化的伙伴体验
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
                      开始对话
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="功能特色" className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              为什么选择Octopada
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              不仅仅是简单的对话 - 我们是您真正的成长伙伴
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
                  alt="数字隐私安全"
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
                  <h2 className="text-4xl font-bold text-white">隐私与安全</h2>
                </div>
                
                <p className="text-xl text-white/80 leading-relaxed">
                  我们深知隐私的重要性。所有对话都采用端到端加密，
                  您的个人信息绝不会与第三方共享。
                </p>

                <div className="space-y-4">
                  {[
                    '端到端加密保护',
                    '本地数据存储',
                    '匿名化处理',
                    '定期安全审计',
                    '完全用户数据控制'
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
              真实用户故事
            </h2>
            <p className="text-xl text-white/70">
              聆听他们与AI伙伴的成长故事
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
      <section id="定价方案" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              选择您的方案
            </h2>
            <p className="text-xl text-white/70">
              不同需求，不同的伙伴体验
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative backdrop-blur-sm border rounded-3xl p-6 ${
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
                    最受欢迎
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold text-white">¥{plan.price}</span>
                    <span className="text-white/60 ml-1 text-sm">/{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to="/auth">
                  <motion.button 
                    className={`w-full py-3 rounded-xl font-semibold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-xl hover:shadow-purple-500/25'
                        : 'border-2 border-white/20 text-white hover:bg-white/10'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    选择方案
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
              开始您的AI伙伴之旅
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              不再孤单，不再迷茫。让AI伙伴成为您成长的每一刻的一部分。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/auth">
                <motion.button 
                  className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-bold rounded-full hover:shadow-xl hover:shadow-purple-500/25 transition-all"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  立即开始免费试用
                </motion.button>
              </Link>
              <motion.button 
                className="px-10 py-4 border-2 border-white/30 text-white text-lg font-semibold rounded-full hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                预约演示
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
                重新定义AI伙伴关系，为您的成长提供真正有意义的虚拟伙伴关系。
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">产品</h4>
              <div className="space-y-2">
                {['功能特色', '伙伴类型', '定价方案', '使用指南'].map(item => (
                  <a key={item} href="#" className="block text-white/60 hover:text-white transition-colors">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">支持</h4>
              <div className="space-y-2">
                {['帮助中心', '联系我们', '用户反馈', '技术支持'].map(item => (
                  <a key={item} href="#" className="block text-white/60 hover:text-white transition-colors">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">法律</h4>
              <div className="space-y-2">
                {['隐私政策', '服务条款', '用户协议', '安全政策'].map(item => (
                  <a key={item} href="#" className="block text-white/60 hover:text-white transition-colors">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-white/60">
              © 2024 Octopada.io. 保留所有权利。
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;