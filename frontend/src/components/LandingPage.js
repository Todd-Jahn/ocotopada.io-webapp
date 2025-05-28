import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Heart, Brain, BookOpen, HelpCircle, MessageCircle, Shield, Star, Check, Menu, X } from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  const companionTypes = [
    {
      id: 1,
      title: "他",
      subtitle: "我的男友",
      description: "温暖体贴的男性伴侣，陪伴你度过每一个美好时光",
      icon: Heart,
      color: "from-blue-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1523531099245-31a49f4527bb"
    },
    {
      id: 2,
      title: "她",
      subtitle: "我的女友",
      description: "贴心温柔的女性伴侣，理解你的每一份心情",
      icon: Heart,
      color: "from-pink-500 to-rose-600",
      image: "https://images.pexels.com/photos/30475855/pexels-photo-30475855.jpeg"
    },
    {
      id: 3,
      title: "懂我",
      subtitle: "心理健康伙伴",
      description: "专业的心理支持，帮助你维护心理健康与情感平衡",
      icon: Brain,
      color: "from-emerald-500 to-teal-600",
      image: "https://images.pexels.com/photos/7278845/pexels-photo-7278845.jpeg"
    },
    {
      id: 4,
      title: "教我",
      subtitle: "知识成长导师",
      description: "个人成长导师，助力你的学习与职业发展",
      icon: BookOpen,
      color: "from-amber-500 to-orange-600",
      image: "https://images.pexels.com/photos/5896422/pexels-photo-5896422.jpeg"
    },
    {
      id: 5,
      title: "请教",
      subtitle: "有问必答",
      description: "专业顾问随时在线，为你答疑解惑",
      icon: HelpCircle,
      color: "from-indigo-500 to-blue-600",
      image: "https://images.pexels.com/photos/5475793/pexels-photo-5475793.jpeg"
    },
    {
      id: 6,
      title: "无聊",
      subtitle: "随机聊天",
      description: "轻松愉快的聊天伙伴，陪你度过闲暇时光",
      icon: MessageCircle,
      color: "from-violet-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1560250163-17506787d971"
    }
  ];

  const features = [
    {
      title: "个性化1对1互动",
      description: "每个AI伴侣都有独特的个性和成长故事，提供真正个性化的交流体验",
      icon: Heart
    },
    {
      title: "成长日记追踪",
      description: "记录你的成长历程，AI伴侣会根据你的进展调整陪伴方式",
      icon: BookOpen
    },
    {
      title: "共同创作故事",
      description: "与AI伴侣一起创造独特的故事情节，影响彼此的成长轨迹",
      icon: Star
    },
    {
      title: "多渠道随时访问",
      description: "通过手机、电脑、平板等多种设备，随时随地与你的AI伴侣交流",
      icon: MessageCircle
    }
  ];

  const testimonials = [
    {
      name: "李小雨",
      role: "职场新人",
      content: "通过'教我'，我在职业规划上得到了很多实用建议，现在工作更有方向感了。",
      avatar: "https://images.pexels.com/photos/9089256/pexels-photo-9089256.jpeg"
    },
    {
      name: "王建华",
      role: "创业者",
      content: "'请教'帮我解决了很多创业路上的困惑，就像有个专业顾问随时在身边。",
      avatar: "https://images.pexels.com/photos/9089256/pexels-photo-9089256.jpeg"
    },
    {
      name: "张美丽",
      role: "自由职业者",
      content: "'懂我'真的很理解我的情感需求，在我迷茫的时候给了我很多心理支持。",
      avatar: "https://images.pexels.com/photos/9089256/pexels-photo-9089256.jpeg"
    }
  ];

  const pricingPlans = [
    {
      name: "基础版",
      price: "29",
      period: "月",
      features: ["单一AI伴侣", "基础对话功能", "有限消息数量", "标准响应速度"],
      popular: false
    },
    {
      name: "专业版",
      price: "69",
      period: "月",
      features: ["3个AI伴侣", "高级对话功能", "无限消息", "快速响应", "成长日记", "情感分析"],
      popular: true
    },
    {
      name: "旗舰版",
      price: "129",
      period: "月",
      features: ["全部6个AI伴侣", "所有高级功能", "优先客服", "个性化定制", "共创故事", "数据分析"],
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
              {['功能特色', '伴侣类型', '定价', '关于我们'].map((item) => (
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

            <motion.button 
              className="hidden md:block px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              开始体验
            </motion.button>
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
                {['功能特色', '伴侣类型', '定价', '关于我们'].map((item) => (
                  <a key={item} href={`#${item}`} className="block text-white/80 hover:text-white transition-colors">
                    {item}
                  </a>
                ))}
                <button className="w-full px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold">
                  开始体验
                </button>
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
                  AI陪伴
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-white/80 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                不只是聊天机器人，而是真正理解你、陪伴你成长的AI伙伴。
                <br />
                六种不同类型的虚拟伴侣，满足你生活中的各种情感需求。
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-semibold rounded-full hover:shadow-xl hover:shadow-purple-500/25 transition-all"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  免费开始体验
                </motion.button>
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
              六种陪伴类型
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              每一种都有独特的个性和专业领域，为你提供最贴心的陪伴体验
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
                  
                  <motion.button 
                    className={`w-full py-3 bg-gradient-to-r ${companion.color} text-white font-semibold rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    开始对话
                  </motion.button>
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
              为什么选择我们
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              不只是简单的对话，而是真正的成长伙伴
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
                  <h2 className="text-4xl font-bold text-white">隐私与安全</h2>
                </div>
                
                <p className="text-xl text-white/80 leading-relaxed">
                  我们深知隐私的重要性。所有对话都经过端到端加密，
                  你的个人信息永远不会被第三方获取。
                </p>

                <div className="space-y-4">
                  {[
                    '端到端加密保护',
                    '本地数据存储',
                    '匿名化处理',
                    '定期安全审计',
                    '用户完全控制数据'
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
              用户真实反馈
            </h2>
            <p className="text-xl text-white/70">
              听听他们与AI伙伴的成长故事
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
      <section id="定价" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              选择适合你的方案
            </h2>
            <p className="text-xl text-white/70">
              不同的需求，不同的陪伴体验
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
                    最受欢迎
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">¥{plan.price}</span>
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

                <motion.button 
                  className={`w-full py-4 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-xl hover:shadow-purple-500/25'
                      : 'border-2 border-white/20 text-white hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  选择方案
                </motion.button>
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
              开始你的AI陪伴之旅
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              不再孤单，不再迷茫。让AI伙伴陪伴你的每一个成长时刻。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button 
                className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-bold rounded-full hover:shadow-xl hover:shadow-purple-500/25 transition-all"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                立即免费体验
              </motion.button>
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
                重新定义AI陪伴，为你提供真正有意义的虚拟伙伴关系。
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">产品</h4>
              <div className="space-y-2">
                {['伴侣类型', '功能特色', '定价方案', '用户指南'].map(item => (
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
              © 2024 Octopada.io. 版权所有。
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;