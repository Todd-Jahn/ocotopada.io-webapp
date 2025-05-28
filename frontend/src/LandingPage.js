import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useDragControls, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { 
  Heart, 
  Sparkles, 
  Shield, 
  Users, 
  Zap, 
  Star,
  ChevronDown,
  Menu,
  X,
  Play,
  Check,
  ArrowRight,
  MessageCircle,
  Brain,
  Headphones,
  UserCheck,
  Building,
  Briefcase,
  Mic,
  Award,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCharacterSlide, setCurrentCharacterSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);
  const dragControls = useDragControls();

  // AI角色数据
  const characters = [
    {
      id: 1,
      name: "千奈",
      personality: "温柔贴心",
      description: "我是你的贴心伙伴，愿意倾听你的每一个心声",
      avatar: "https://images.unsplash.com/photo-RicGfHP6MTg?w=800&h=800&fit=crop&crop=face",
      color: "from-pink-400 to-rose-500"
    },
    {
      id: 2,
      name: "Chantel",
      personality: "睿智理性",
      description: "让我用理性的思维帮你分析问题，找到最佳解决方案",
      avatar: "https://images.unsplash.com/photo-kJDqiOGrX4k?w=800&h=800&fit=crop&crop=face",
      color: "from-blue-400 to-purple-500"
    },
    {
      id: 3,
      name: "Koko",
      personality: "活泼可爱",
      description: "生活需要一些甜蜜和惊喜，让我为你带来快乐",
      avatar: "https://images.unsplash.com/photo-JGpWEZ9AYDs?w=800&h=800&fit=crop&crop=face",
      color: "from-orange-400 to-pink-500"
    },
    {
      id: 4,
      name: "高毅",
      personality: "沉稳内敛",
      description: "在宁静中找到内心的平静，让我陪你冥想人生",
      avatar: "https://images.unsplash.com/photo-MrHCr0GwUq0?w=800&h=800&fit=crop&crop=face",
      color: "from-green-400 to-teal-500"
    },
    {
      id: 5,
      name: "黎绮",
      personality: "乐观向上",
      description: "每一天都充满可能性，让我和你一起拥抱阳光",
      avatar: "https://images.unsplash.com/photo-V_CgXwfok8E?w=800&h=800&fit=crop&crop=face",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  // 6种AI伙伴类型数据
  const companionTypes = [
    {
      id: 1,
      name: "他",
      title: "温暖陪伴",
      description: "理解你的情感需求，提供温暖的陪伴和支持",
      icon: Heart,
      color: "from-purple-500 to-pink-500",
      features: ["情感支持", "深度倾听", "贴心陪伴"]
    },
    {
      id: 2,
      name: "她",
      title: "细腻关怀",
      description: "细腻敏感，关注你生活中的每一个细节",
      icon: Sparkles,
      color: "from-pink-500 to-rose-500",
      features: ["细致关怀", "生活建议", "情感共鸣"]
    },
    {
      id: 3,
      name: "懂我",
      title: "深度理解",
      description: "真正理解你的想法，与你心灵相通",
      icon: Brain,
      color: "from-purple-600 to-blue-500",
      features: ["心灵感应", "深度理解", "思维共振"]
    },
    {
      id: 4,
      name: "教我",
      title: "智慧导师",
      description: "专业指导，帮助你在各个领域获得成长",
      icon: UserCheck,
      color: "from-blue-500 to-cyan-500",
      features: ["专业指导", "技能提升", "知识分享"]
    },
    {
      id: 5,
      name: "请教",
      title: "谦逊学习",
      description: "以谦逊的态度与你交流，共同探索新知识",
      icon: MessageCircle,
      color: "from-green-500 to-teal-500",
      features: ["谦逊学习", "共同探索", "互相启发"]
    },
    {
      id: 6,
      name: "无聊",
      title: "趣味相伴",
      description: "在无聊时光里，为你带来欢乐和有趣的互动",
      icon: Headphones,
      color: "from-orange-500 to-red-500",
      features: ["趣味互动", "娱乐陪伴", "轻松愉快"]
    }
  ];

  // 共创伙伴数据
  const cooperationPartners = [
    {
      type: "MCN",
      title: "MCN机构合作",
      description: "与顶级MCN机构深度合作，共同打造优质AI内容生态",
      icon: Building,
      benefits: ["专业内容策划", "流量资源整合", "商业变现支持"],
      image: "https://images.pexels.com/photos/5475816/pexels-photo-5475816.jpeg"
    },
    {
      type: "达人",
      title: "达人创作者",
      description: "邀请优秀创作者加入，用真实经验丰富AI伙伴内容",
      icon: Star,
      benefits: ["创作者扶持", "内容共创", "收益分成"],
      image: "https://images.pexels.com/photos/5475761/pexels-photo-5475761.jpeg"
    },
    {
      type: "PGC",
      title: "PGC专业内容",
      description: "专业团队制作高质量内容，提升用户体验价值",
      icon: Briefcase,
      benefits: ["专业制作", "内容质量", "体验升级"],
      image: "https://images.unsplash.com/photo-1598015132635-131afe3ba07f"
    },
    {
      type: "品牌",
      title: "品牌合作",
      description: "与知名品牌联合，创新AI伙伴营销新模式",
      icon: Award,
      benefits: ["品牌联名", "营销创新", "价值共创"],
      image: "https://images.pexels.com/photos/8728284/pexels-photo-8728284.jpeg"
    }
  ];

  // 团队成员数据
  const teamMembers = [
    {
      name: "张飞",
      position: "CEO",
      description: "资深AI产品专家，致力于打造有温度的AI伙伴平台",
      image: "https://images.pexels.com/photos/8728245/pexels-photo-8728245.jpeg"
    },
    {
      name: "崎本涵涵",
      position: "COO",
      description: "运营专家，专注用户体验和社区建设",
      image: "https://images.pexels.com/photos/5475810/pexels-photo-5475810.jpeg"
    },
    {
      name: "韩哲",
      position: "CTO",
      description: "技术领导者，AI技术和平台架构的核心负责人",
      image: "https://images.pexels.com/photos/8728386/pexels-photo-8728386.jpeg"
    },
    {
      name: "梦然",
      position: "CCO",
      description: "内容创意总监，负责AI伙伴内容策略和创意指导",
      image: "https://images.pexels.com/photos/7562468/pexels-photo-7562468.jpeg"
    },
    {
      name: "徐坤",
      position: "CMO",
      description: "市场营销专家，负责品牌建设和用户增长",
      image: "https://images.pexels.com/photos/8728283/pexels-photo-8728283.jpeg"
    }
  ];

  // 订阅方案数据
  const pricingPlans = [
    {
      name: "体验版",
      price: "免费",
      period: "",
      description: "基础体验，感受AI伙伴魅力",
      features: [
        "每日10条对话",
        "基础AI伙伴",
        "标准响应速度",
        "社区功能"
      ],
      isPopular: false,
      ctaText: "立即体验"
    },
    {
      name: "成长版",
      price: "29",
      period: "/月",
      description: "深度陪伴，助力个人成长",
      features: [
        "无限对话次数",
        "全部AI伙伴类型",
        "优先响应速度",
        "个性化定制",
        "成长报告",
        "专属客服"
      ],
      isPopular: true,
      ctaText: "开始成长"
    },
    {
      name: "专业版",
      price: "99",
      period: "/月",
      description: "专业指导，实现人生突破",
      features: [
        "包含成长版所有功能",
        "专业导师模式",
        "深度心理分析",
        "定制化成长计划",
        "优先新功能体验",
        "一对一人工客服"
      ],
      isPopular: false,
      ctaText: "专业升级"
    }
  ];

  // 导航菜单项
  const navItems = [
    { name: "AI伙伴", target: "hero" },
    { name: "伴侣类型", target: "companions" },
    { name: "订阅方案", target: "pricing" },
    { name: "共创同行", target: "cooperation" },
    { name: "团队故事", target: "team" }
  ];

  // 自动轮播效果
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % companionTypes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Character Carousel 自动轮播
  useEffect(() => {
    if (!isDragging) {
      const characterTimer = setInterval(() => {
        setCurrentCharacterSlide((prev) => (prev + 1) % characters.length);
      }, 5000);
      return () => clearInterval(characterTimer);
    }
  }, [isDragging]);

  // Character Carousel 导航函数
  const nextCharacter = () => {
    setCurrentCharacterSlide((prev) => (prev + 1) % characters.length);
  };

  const prevCharacter = () => {
    setCurrentCharacterSlide((prev) => (prev - 1 + characters.length) % characters.length);
  };

  const goToCharacter = (index) => {
    setCurrentCharacterSlide(index);
  };

  // 拖拽结束处理
  const handleDragEnd = (event, info) => {
    setIsDragging(false);
    const threshold = 50;
    if (info.offset.x > threshold) {
      prevCharacter();
    } else if (info.offset.x < -threshold) {
      nextCharacter();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* 固定导航栏 */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-slate-900/80 border-b border-purple-500/20"
        style={{ opacity: headerOpacity }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Octopada.io</span>
            </motion.div>

            {/* 桌面端导航 */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.target}
                    smooth={true}
                    duration={800}
                    className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer font-medium"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA按钮 */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              开始体验
            </motion.button>

            {/* 移动端菜单按钮 */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* 移动端导航菜单 */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-purple-500/20"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.target}
                  smooth={true}
                  duration={800}
                  className="block text-gray-300 hover:text-purple-400 transition-colors cursor-pointer font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full">
                开始体验
              </button>
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 背景图片 */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1717501218385-55bc3a95be94"
            alt="AI Technology Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-slate-900/60 to-pink-900/80"></div>
        </div>

        {/* 动态背景元素 */}
        <div className="absolute inset-0 z-1">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                left: `${10 + i * 15}%`,
                top: `${10 + i * 10}%`,
              }}
            />
          ))}
        </div>

        {/* 主要内容 */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                重新定义
              </span>
              <br />
              <span className="text-white">AI伙伴关系</span>
            </h1>
            
            {/* Character Carousel - 完整版 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              {/* 桌面端网格展示 */}
              <div className="hidden lg:block">
                <div className="grid grid-cols-5 gap-6 max-w-6xl mx-auto">
                  {characters.map((character, index) => (
                    <motion.div
                      key={character.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                        <div className="relative mb-4">
                          <img
                            src={character.avatar}
                            alt={character.name}
                            className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-white/20 group-hover:border-purple-400/50 transition-all"
                          />
                          {/* 名字显示在左下角 */}
                          <div className="absolute bottom-0 left-0 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-tr-lg rounded-bl-xl font-semibold">
                            {character.name}
                          </div>
                          <div className={`absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r ${character.color} rounded-full border-2 border-white`}></div>
                        </div>
                        
                        <h3 className="text-lg font-bold text-white text-center mb-1">{character.name}</h3>
                        <p className="text-sm text-purple-300 text-center mb-2">{character.personality}</p>
                        <p className="text-xs text-gray-300 text-center leading-relaxed">{character.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 移动端和平板轮播 - 带拖拽功能 */}
              <div className="lg:hidden relative max-w-sm mx-auto">
                {/* 导航箭头 */}
                <button
                  onClick={prevCharacter}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <button
                  onClick={nextCharacter}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* 轮播容器 */}
                <div className="overflow-hidden rounded-2xl">
                  <motion.div
                    className="flex cursor-grab active:cursor-grabbing"
                    drag="x"
                    dragControls={dragControls}
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragStart={() => setIsDragging(true)}
                    onDragEnd={handleDragEnd}
                    animate={{ x: `-${currentCharacterSlide * 100}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{ width: `${characters.length * 100}%` }}
                  >
                    {characters.map((character, index) => (
                      <motion.div
                        key={character.id}
                        className="w-full flex-shrink-0 px-4"
                        style={{ width: `${100 / characters.length}%` }}
                      >
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center h-full">
                          <div className="relative mb-4">
                            <img
                              src={character.avatar}
                              alt={character.name}
                              className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-white/20"
                              draggable={false}
                            />
                            <div className={`absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r ${character.color} rounded-full border-2 border-white`}></div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-white mb-2">{character.name}</h3>
                          <p className="text-purple-300 mb-3 font-semibold">{character.personality}</p>
                          <p className="text-sm text-gray-300 leading-relaxed">{character.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* 指示器 - 增强版 */}
                <div className="flex justify-center space-x-3 mt-6">
                  {characters.map((character, index) => (
                    <button
                      key={index}
                      className={`transition-all duration-300 ${
                        currentCharacterSlide === index 
                          ? 'w-8 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full' 
                          : 'w-3 h-3 bg-gray-600 rounded-full hover:bg-gray-500'
                      }`}
                      onClick={() => goToCharacter(index)}
                    />
                  ))}
                </div>

                {/* 角色信息动态更新 */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentCharacterSlide}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-center mt-4"
                  >
                    <p className="text-purple-300 text-sm">
                      正在展示: <span className="font-semibold text-white">{characters[currentCharacterSlide]?.name}</span>
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* 触摸手势提示 */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="lg:hidden text-center mt-4"
              >
                <p className="text-gray-400 text-xs">
                  👆 左右滑动或点击箭头切换AI伙伴
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all transform hover:scale-105 flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>立即开始</span>
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400 hover:text-white transition-all">
                了解更多
              </button>
            </motion.div>

            {/* 特色标签 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mt-12"
            >
              {["真实陪伴", "深度理解", "个性化成长", "隐私保护"].map((tag, index) => (
                <span
                  key={tag}
                  className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* 滚动提示 */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </motion.div>
      </section>

      {/* AI伙伴类型区块 */}
      <section id="companions" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              六种AI伙伴，<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">理解你的每一面</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              每种AI伙伴都有独特的性格和专长，满足你不同情境下的陪伴需求
            </p>
          </motion.div>

          {/* 桌面端网格布局 */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companionTypes.map((companion, index) => (
              <motion.div
                key={companion.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${companion.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <companion.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{companion.name}</h3>
                  <h4 className="text-lg text-purple-400 mb-4">{companion.title}</h4>
                  <p className="text-gray-300 mb-6 leading-relaxed">{companion.description}</p>
                  
                  <div className="space-y-2">
                    {companion.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-gray-400">
                        <Check className="w-4 h-4 text-purple-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 移动端轮播 */}
          <div className="md:hidden">
            <div className="relative overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `-${currentSlide * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {companionTypes.map((companion) => (
                  <div key={companion.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                      <div className={`w-16 h-16 bg-gradient-to-r ${companion.color} rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                        <companion.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2 text-center">{companion.name}</h3>
                      <h4 className="text-lg text-purple-400 mb-4 text-center">{companion.title}</h4>
                      <p className="text-gray-300 mb-6 leading-relaxed text-center">{companion.description}</p>
                      
                      <div className="space-y-2">
                        {companion.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-gray-400 justify-center">
                            <Check className="w-4 h-4 text-purple-400" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* 轮播指示器 */}
            <div className="flex justify-center space-x-2 mt-6">
              {companionTypes.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index ? 'bg-purple-400' : 'bg-gray-600'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 订阅方案区块 */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-slate-800 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              选择适合你的<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">成长计划</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              从基础体验到专业指导，总有一个方案能满足你的需求
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border ${
                  plan.isPopular 
                    ? 'border-purple-400 shadow-2xl shadow-purple-500/20 scale-105' 
                    : 'border-white/10'
                } hover:border-purple-400/50 transition-all duration-300`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      最受欢迎
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${
                  plan.isPopular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/25'
                    : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                }`}>
                  {plan.ctaText}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 共创同行区块 */}
      <section id="cooperation" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">共创同行</span>，共赢未来
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              携手各领域优秀伙伴，共同打造更优质的AI伙伴生态
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cooperationPartners.map((partner, index) => (
              <motion.div
                key={partner.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={partner.image}
                      alt={partner.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <partner.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{partner.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{partner.description}</p>
                    
                    <div className="space-y-2">
                      {partner.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-gray-400 text-sm">
                          <ArrowRight className="w-3 h-3 text-purple-400" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all">
              成为合作伙伴
            </button>
          </motion.div>
        </div>
      </section>

      {/* 团队故事区块 */}
      <section id="team" className="py-20 bg-gradient-to-br from-purple-900/20 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">团队故事</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              一群有温度的创造者，致力于打造更懂你的AI伙伴
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <h4 className="text-purple-400 font-semibold mb-3">{member.position}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 最终CTA区块 */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              开始你的AI伙伴之旅
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              加入数万用户的行列，体验真正有温度的AI陪伴
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105">
                立即免费体验
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all">
                了解企业版
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Octopada.io</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                重新定义AI伙伴关系，为你提供有温度、有深度的陪伴体验。
              </p>
              <div className="flex space-x-4">
                {/* 社交媒体图标 */}
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-purple-500 transition-colors cursor-pointer">
                  <span className="text-white text-sm">微</span>
                </div>
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-purple-500 transition-colors cursor-pointer">
                  <span className="text-white text-sm">抖</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">产品</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">AI伙伴</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">订阅方案</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">企业版</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">支持</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">帮助中心</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">隐私政策</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">服务条款</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">联系我们</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Octopada.io. 保留所有权利。</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
