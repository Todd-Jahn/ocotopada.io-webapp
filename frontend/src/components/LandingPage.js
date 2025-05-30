import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, PanInfo } from 'framer-motion';
import { Heart, Brain, BookOpen, HelpCircle, MessageCircle, Shield, Star, Check, Menu, X, ChevronLeft, ChevronRight, Users, Zap, Crown } from 'lucide-react';
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

  // 团队成员数据
  const teamMembers = [
    {
      name: "张飞",
      role: "CEO",
      description: "资深AI产品专家，致力于重新定义人机交互体验",
      image: "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763"
    },
    {
      name: "崎本涵涵",
      role: "COO",
      description: "运营战略大师，构建用户价值生态系统",
      image: "https://images.unsplash.com/photo-1563970290-c009d895b853"
    },
    {
      name: "李思源",
      role: "CTO",
      description: "技术架构师，打造下一代AI对话引擎",
      image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461"
    },
    {
      name: "王美琪",
      role: "CPO",
      description: "产品创新负责人，设计触动人心的交互体验",
      image: "https://images.pexels.com/photos/1679618/pexels-photo-1679618.jpeg"
    },
    {
      name: "陈志豪",
      role: "CMO",
      description: "品牌营销专家，传递AI伙伴的温暖价值",
      image: "https://images.pexels.com/photos/814133/pexels-photo-814133.jpeg"
    }
  ];

  // 共创同行数据
  const partnerships = [
    {
      title: "MCN机构合作",
      description: "携手顶级MCN机构，打造AI+内容创作新生态",
      icon: "🎬",
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "达人创作者",
      description: "赋能内容创作者，用AI伙伴激发无限创意灵感",
      icon: "⭐",
      color: "from-pink-500 to-purple-500"
    },
    {
      title: "PGC专业内容",
      description: "与专业内容团队合作，提供高质量AI交互内容",
      icon: "📚",
      color: "from-emerald-500 to-cyan-500"
    },
    {
      title: "品牌合作",
      description: "联合知名品牌，探索AI伙伴在商业场景的无限可能",
      icon: "🚀",
      color: "from-orange-500 to-red-500"
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

  // Updated Companion Types with new design specifications
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
      image: "https://images.unsplash.com/photo-1517231461833-7301fb461719"
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
      image: "https://images.unsplash.com/photo-1589553009868-c7b2bb474531"
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
      image: "https://images.pexels.com/photos/5336882/pexels-photo-5336882.jpeg"
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
      image: "https://images.pexels.com/photos/32294411/pexels-photo-32294411.jpeg"
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
      image: "https://images.pexels.com/photos/8566427/pexels-photo-8566427.jpeg"
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
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
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
                <span className="text-xs">🐙</span>
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
                { name: '最佳伴侣', id: '最佳伴侣' },
                { name: '选择类型', id: '选择类型' },
                { name: '共创同行', id: '共创同行' },
                { name: 'MetaCommune', id: 'MetaCommune' },
                { name: '订阅计划', id: '订阅计划' },
                { name: '团队故事', id: '团队故事' }
              ].map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.button>
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
                  { name: '最佳伴侣', id: '最佳伴侣' },
                  { name: '选择类型', id: '选择类型' },
                  { name: '共创同行', id: '共创同行' },
                  { name: 'MetaCommune', id: 'MetaCommune' },
                  { name: '订阅计划', id: '订阅计划' },
                  { name: '团队故事', id: '团队故事' }
                ].map((item) => (
                  <button 
                    key={item.name} 
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className="block text-white/80 hover:text-white transition-colors w-full text-left"
                  >
                    {item.name}
                  </button>
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

      {/* Character Carousel */}
      <section id="最佳伴侣" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center"
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
              为什么选择
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Octopada
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white/80 mb-16 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >

            </motion.p>


          </motion.div>
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

      {/* 共创同行 Section */}
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
                className="group relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="text-6xl mb-6">{partnership.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{partnership.title}</h3>
                <p className="text-white/70 leading-relaxed">{partnership.description}</p>
                <div className={`absolute inset-0 bg-gradient-to-t ${partnership.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-3xl`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Companion Types Matrix */}
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

      {/* 团队故事 Section */}
      <section id="团队故事" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              团队故事
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              来自不同领域的专业团队，共同致力于创造最温暖、最智能的AI伙伴体验
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="group relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="relative h-32 w-32 mx-auto mb-6 rounded-full overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-purple-300 font-semibold">{member.role}</p>
                  </div>
                  <p className="text-white/70 leading-relaxed text-sm">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MetaCommune Section */}
      <section id="MetaCommune" className="py-20 px-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              MetaCommune
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