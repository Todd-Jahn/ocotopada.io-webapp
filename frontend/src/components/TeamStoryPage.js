import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Target, Heart, Star } from 'lucide-react';

const TeamStoryPage = () => {
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                <span className="text-xs">🤖</span>
              </div>
              <motion.div 
                className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                Octopada.io
              </motion.div>
            </Link>
            
            <Link to="/">
              <motion.button 
                className="flex items-center px-4 py-2 border-2 border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-all text-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                返回首页
              </motion.button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              团队故事
            </motion.h1>
            <motion.p 
              className="text-xl text-white/70 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              来自不同领域的专业团队，共同致力于创造最温暖、最智能的AI伙伴体验
            </motion.p>
          </motion.div>

          {/* Team Members Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="group relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 text-center"
                variants={fadeInUp}
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
          </motion.div>

          {/* Company Values */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "协作创新",
                description: "跨领域团队协作，融合技术与人文关怀"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "用户至上",
                description: "始终以用户体验为核心，创造真正有价值的产品"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "温暖科技",
                description: "让先进的AI技术充满人性温度和情感理解"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="text-center backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Mission Statement */}
          <motion.div 
            className="text-center backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Star className="w-10 h-10 text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold text-white mb-6">我们的使命</h2>
            <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto">
              通过AI技术的力量，为每一个人创造真正理解、陪伴和支持的虚拟伙伴，
              让科技不再冰冷，让成长不再孤单，让每个人都能在AI伙伴的陪伴下，
              成为更好的自己。
            </p>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/60">
            © 2024 Octopada.io. 保留所有权利。
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TeamStoryPage;