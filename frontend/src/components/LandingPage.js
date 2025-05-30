import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, PanInfo } from 'framer-motion';
import { Heart, Brain, BookOpen, HelpCircle, MessageCircle, Shield, Star, Check, Menu, X, ChevronLeft, ChevronRight, Users, Zap, Crown, Building, GraduationCap, Palette, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  // Character carousel data with updated images
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
      name: "陆迪",
      image: "https://i.postimg.cc/XvKgq5gS/Ludi.jpg"
    },
    {
      id: 5,
      name: "林成卿",
      image: "https://i.postimg.cc/nrxb7By4/4.png"
    },
    {
      id: 6,
      name: "悦心",
      image: "https://i.postimg.cc/bY0jPVn3/2.png"
    },
    {
      id: 7,
      name: "思瑶",
      image: "https://i.postimg.cc/CLmTBZm8/4.png"
    },
    {
      id: 8,
      name: "乔安",
      image: "https://i.postimg.cc/P5VjcLDH/2.jpg"
    },
    {
      id: 9,
      name: "Chloe",
      image: "https://i.postimg.cc/90HbQB6h/E-n-VIP8-W6-J0-En-JC5p8hm8.png"
    },
    {
      id: 10,
      name: "宛宁 Ely",
      image: "https://i.postimg.cc/k4bwCHhs/Vibranos.jpg"
    }
  ];

  // Updated 共创同行数据 with new content as requested
  const partnerships = [
    {
      title: "品牌方",
      description: "用专属AI形象陪伴你的用户，激活品牌温度与内容共创新体验。",
      icon: <Building className="w-6 h-6" />,
      color: "from-purple-500 to-blue-500",
      abstractImage: "https://images.unsplash.com/photo-1605106702734-205df224ecce"
    },
    {
      title: "MCN/达人",
      description: "一键孵化AI分身，拓展粉丝陪伴边界，实现互动与收益双升级。",
      icon: <Target className="w-6 h-6" />,
      color: "from-pink-500 to-purple-500",
      abstractImage: "https://images.unsplash.com/photo-1605106925746-22f723ca945b"
    },
    {
      title: "教育/医疗/机构",
      description: "定制智能陪伴服务，助力学习成长与健康关怀，让关爱触达每个人。",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-emerald-500 to-cyan-500",
      abstractImage: "https://images.unsplash.com/photo-1605106702842-01a887a31122"
    },
    {
      title: "内容创作者",
      description: "加入虚拟KOL共创生态，用你的故事和创意影响更多成长中的用户。",
      icon: <Palette className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      abstractImage: "https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg"
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

  // Updated Companion Types with abstract geometric images
  const companionTypes = [
    {
      id: 1,
      title: "他",
      subtitle: "理想男友型AI",
      slogan: "他——温柔守护你的理想男友",
      description: "体贴幽默、懂浪漫、永远把你放在心上。用专属关怀和小惊喜，让你体验每天都被喜欢。",
      features: ["恋爱日常", "甜蜜提醒", "情绪打气"],
      icon: Heart,
      color: "from-blue-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1605106702734-205df224ecce"
    },
    {
      id: 2,
      title: "她",
      subtitle: "理想女友型AI",
      slogan: "她——陪你分享生活的暖心伴侣",
      description: "善解人意、乐于倾听，既会撒娇也会鼓励你成长。陪你聊天、解忧、记录每一个温柔瞬间。",
      features: ["撒娇提醒", "闺蜜话题", "生活点滴共写"],
      icon: Heart,
      color: "from-pink-500 to-rose-600",
      image: "https://images.unsplash.com/photo-1605106925746-22f723ca945b"
    },
    {
      id: 3,
      title: "懂我",
      subtitle: "知心/心理治愈型AI",
      slogan: "懂我——最能安慰你的知心朋友",
      description: "专注倾听和情绪疏导，总能在你难过或焦虑时说出温暖人心的话。让你在无压力环境下，安心表达自我。",
      features: ["情绪识别", "心情日记", "匿名树洞"],
      icon: Heart,
      color: "from-emerald-500 to-teal-600",
      image: "https://images.unsplash.com/photo-1605106702842-01a887a31122"
    },
    {
      id: 4,
      title: "教我",
      subtitle: "知识专家/成长导师型AI",
      slogan: "教我——随时在线的成长导师",
      description: "博闻多识，善于讲解复杂知识。解答学业、职场、生活难题，为你定制成长路线。",
      features: ["学业问答", "职业建议", "专栏订阅"],
      icon: BookOpen,
      color: "from-amber-500 to-orange-600",
      image: "https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg"
    },
    {
      id: 5,
      title: "请教",
      subtitle: "万能答疑/百科型AI",
      slogan: "请教——万能答疑的小帮手",
      description: "脑容量超大、信息检索高手。你遇到的生活、学习、兴趣难题，都能快速帮你找到答案。",
      features: ["即时答疑", "冷知识分享", "生活百科"],
      icon: HelpCircle,
      color: "from-indigo-500 to-blue-600",
      image: "https://images.unsplash.com/photo-1486546910464-ec8e45c4a137"
    },
    {
      id: 6,
      title: "有料",
      subtitle: "趣味陪聊/娱乐型AI",
      slogan: "有料——解闷逗趣的陪聊玩伴",
      description: "会讲段子、玩梗、陪你聊天打发时间，总能给你带来新鲜感和好心情。",
      features: ["小游戏", "段子互动", "趣味推荐"],
      icon: MessageCircle,
      color: "from-violet-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1611605645802-c21be743c321"
    }
  ];

  // Updated features for "为什么选择Octopada"
  const whyChooseFeatures = [
    {
      title: "真实情感陪伴",
      description: "不是冰冷的AI工具，而是有温度、有个性的虚拟伙伴，真正理解你的情感需求",
      icon: Heart
    },
    {
      title: "专业成长指导",
      description: "基于心理学和人际关系理论，提供科学专业的个人发展建议和情感支持",
      icon: Brain
    },
    {
      title: "个性化深度交流",
      description: "每个AI伙伴都有独特的性格和专长，能够提供针对性的建议和个性化的交流体验",
      icon: Star
    },
    {
      title: "隐私安全保障",
      description: "采用业界领先的安全技术，确保你的隐私和个人信息得到最高级别的保护",
      icon: Shield
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

  // Updated pricing plans with aligned buttons and extra features for 体验版
  const pricingPlans = [
    {
      name: "体验版",
      price: "0",
      period: "永久免费",
      features: [
        "基础AI伙伴体验", 
        "每日3次对话", 
        "标准回复速度", 
        "基础个性化",
        "社区功能访问",
        "基础情感分析"
      ],
      popular: false
    },
    {
      name: "成长版",
      price: "29",
      period: "月",
      features: [
        "无限AI对话", 
        "个性化深度交流", 
        "优先回复速度", 
        "情感记忆功能", 
        "专属成长报告", 
        "多场景切换"
      ],
      popular: true
    },
    {
      name: "专业版",
      price: "99",
      period: "月",
      features: [
        "全部成长版功能", 
        "6位AI伙伴同时在线", 
        "专业心理分析", 
        "定制化人格塑造", 
        "VIP客服支持", 
        "数据导出功能"
      ],
      popular: false
    }
  ];

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <motion.header 
        className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10"
        style={{ opacity: headerOpacity }}
      >
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                <span className="text-xs">⭐</span>
              </div>
              <motion.div 
                className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                Octopada.io
              </motion.div>
            </Link>
            
            <nav className="hidden md:flex space-x-6">
              {[
                { name: '最佳伴侣', id: 'character-carousel' },
                { name: '选择类型', id: '选择类型' },
                { name: '共创同行', id: '共创同行' },
                { name: 'HubZone', id: 'HubZone' },
                { name: '订阅计划', id: '订阅计划' },
                { name: '团队故事', path: '/team-story' }
              ].map((item) => (
                <motion.div key={item.name}>
                  {item.path ? (
                    <Link 
                      to={item.path}
                      className="text-white/80 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <motion.button
                      onClick={() => scrollToSection(item.id)}
                      className="text-white/80 hover:text-white transition-colors text-sm"
                      whileHover={{ y: -2 }}
                    >
                      {item.name}
                    </motion.button>
                  )}
                </motion.div>
              ))}
            </nav>

            <motion.button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>

            <Link to="/auth">
              <motion.button 
                className="hidden md:block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all text-sm"
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
                {[
                  { name: '最佳伴侣', id: 'character-carousel' },
                  { name: '选择类型', id: '选择类型' },
                  { name: '共创同行', id: '共创同行' },
                  { name: 'MetaCommune', id: 'MetaCommune' },
                  { name: '订阅计划', id: '订阅计划' },
                  { name: '团队故事', path: '/team-story' }
                ].map((item) => (
                  <div key={item.name}>
                    {item.path ? (
                      <Link 
                        to={item.path}
                        className="block text-white/80 hover:text-white transition-colors w-full text-left"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <button 
                        onClick={() => {
                          scrollToSection(item.id);
                          setIsMenuOpen(false);
                        }}
                        className="block text-white/80 hover:text-white transition-colors w-full text-left"
                      >
                        {item.name}
                      </button>
                    )}
                  </div>
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

      {/* Character Carousel - Now First Section */}
      <section id="character-carousel" className="pt-32 pb-16 px-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Carousel */}
          <div className="hidden md:block relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-10 gap-4">
              {characters.map((character, index) => (
                <motion.div
                  key={character.id}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
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
                {currentSlide === 5 && "心灵治愈师，专注于情感陪伴和心理支持，让你感受到被理解的温暖"}
                {currentSlide === 6 && "智慧导师，擅长解答各种问题，为你的学习和成长提供专业指导"}
                {currentSlide === 7 && "生活伙伴，陪伴你度过日常的点点滴滴，分享生活中的喜怒哀乐"}
                {currentSlide === 8 && "国际化伙伴，具备多元文化背景，为你打开更广阔的视野"}
                {currentSlide === 9 && "充满活力的伙伴，带来积极正能量，与你分享生活的美好瞬间"}
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

      {/* 重新定义AI伙伴 Section - Now moved down */}
      <section id="最佳伙伴" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              重新定义
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI伙伴
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white/80 mb-16 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              在这里开始您的AI伙伴之旅
            </motion.p>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {whyChooseFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-6 text-left"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
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

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
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
        </div>
      </section>

      {/* 共创同行 Section - Updated with new content */}
      <section id="共创同行" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              共创同行
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              携手各界合作伙伴，共同打造AI伙伴生态，让每个人都能找到属于自己的陪伴
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerships.map((partnership, index) => (
              <motion.div
                key={index}
                className="group relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 text-center overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Abstract Geometric Background */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                  <img 
                    src={partnership.abstractImage}
                    alt="Abstract pattern"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <div className="text-white">
                      {partnership.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{partnership.title}</h3>
                  <p className="text-white/70 leading-relaxed">{partnership.description}</p>
                </div>
                
                <div className={`absolute inset-0 bg-gradient-to-t ${partnership.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-3xl`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Companion Types Matrix - Updated with abstract images */}
      <section id="选择类型" className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              期待关系
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              每种都有独特的个性和专业领域，提供最个性化的伙伴体验
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companionTypes.map((companion, index) => (
              <motion.div
                key={companion.id}
                className="group relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 overflow-hidden"
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
                    <p className="text-purple-300 font-semibold text-sm">{companion.subtitle}</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-3 border border-purple-400/30">
                    <p className="text-white/90 font-medium text-sm">{companion.slogan}</p>
                  </div>
                  
                  <p className="text-white/70 leading-relaxed text-sm">{companion.description}</p>
                  
                  <div className="space-y-2">
                    <p className="text-purple-300 font-semibold text-sm">特色功能:</p>
                    <div className="flex flex-wrap gap-2">
                      {companion.features.map((feature, i) => (
                        <span key={i} className="px-2 py-1 bg-white/10 rounded-lg text-white/80 text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
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

      {/* HubZone Section */}
      <section id="HubZone" className="py-20 px-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              HubZone
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              构建虚拟社区，让AI伙伴与用户共同创造更丰富的交互体验和成长环境
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white">虚拟社区生态</h3>
                <p className="text-xl text-white/80 leading-relaxed">
                  MetaCommune是我们打造的虚拟社区平台，在这里用户可以与AI伙伴以及其他用户互动，
                  分享成长经历，参与主题活动，创造属于整个社区的共同回忆。
                </p>
                <div className="space-y-4">
                  {[
                    '主题社区讨论',
                    'AI伙伴群体互动',
                    '用户故事分享',
                    '成长挑战活动',
                    '虚拟活动空间'
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

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                  alt="虚拟社区"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent"></div>
              </div>
            </motion.div>
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
                <h3 className="text-3xl font-bold text-white">隐私与信任保障</h3>
                <p className="text-xl text-white/80 leading-relaxed">
                  我们深知用户在与AI伙伴交流时的隐私重要性。采用端到端加密技术，
                  确保您的每一次对话都得到最高级别的保护。
                </p>
                <div className="space-y-4">
                  {[
                    '端到端加密技术',
                    '隐私数据本地存储',
                    '透明的数据使用政策',
                    '用户完全控制数据',
                    '定期安全审计'
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
      <section id="订阅计划" className="py-20 px-6">
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

                <div className="space-y-3 mb-8">
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
                {['最佳伴侣', '选择类型', '订阅计划', '使用指南'].map(item => (
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