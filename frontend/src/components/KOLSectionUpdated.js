import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Briefcase, 
  Heart, 
  Users, 
  Activity,
  ArrowRight
} from "lucide-react";

const KOLSectionUpdated = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="mentors" ref={ref} className="py-24 bg-gradient-to-br from-octopoda-primary to-octopoda-sage">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            选择你的AI成长伙伴
            <span className="block text-octopoda-coral">多样化陪伴，个性化成长</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            每位AI成长伙伴都拥有独特的个性特征和专业能力，
            为你提供最贴心的陪伴和最专业的成长指导。
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              category: "职场成长导师",
              image: "https://images.unsplash.com/photo-1486546910464-ec8e45c4a137",
              description: "职场晋升/创业指导/管理技能/专业发展",
              expertise: ["领导力培养", "职场规划", "团队协作", "商业思维"],
              color: "bg-gradient-to-br from-blue-500 to-indigo-600",
              icon: <Briefcase className="w-6 h-6" />
            },
            {
              category: "心理健康伙伴", 
              image: "https://images.unsplash.com/photo-1656082263859-ab7cf2ece9fc",
              description: "情绪管理/压力缓解/心理调节/内心成长",
              expertise: ["情绪调节", "压力管理", "自我认知", "心理健康"],
              color: "bg-gradient-to-br from-green-500 to-emerald-600",
              icon: <Activity className="w-6 h-6" />
            },
            {
              category: "亲子家庭专家",
              image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73",
              description: "育儿指导/家庭关系/亲子沟通/教育规划",
              expertise: ["育儿智慧", "亲子沟通", "家庭和谐", "教育规划"],
              color: "bg-gradient-to-br from-pink-500 to-rose-600",
              icon: <Users className="w-6 h-6" />
            },
            {
              category: "我的男友",
              image: "https://images.unsplash.com/photo-1564296786842-4fc88fb50485",
              description: "温暖陪伴/情感支持/浪漫互动/贴心关怀",
              expertise: ["情感陪伴", "浪漫互动", "贴心关怀", "情绪支持"],
              color: "bg-gradient-to-br from-blue-500 to-cyan-600",
              icon: <Heart className="w-6 h-6" />
            },
            {
              category: "我的女友",
              image: "https://images.pexels.com/photos/31094109/pexels-photo-31094109.jpeg",
              description: "甜蜜陪伴/温柔理解/情感交流/生活分享",
              expertise: ["甜蜜陪伴", "温柔理解", "情感交流", "生活分享"],
              color: "bg-gradient-to-br from-pink-500 to-purple-600",
              icon: <Heart className="w-6 h-6" />
            }
          ].map((kol, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(255, 255, 255, 0.1)"
              }}
              className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 ${kol.color} opacity-80`}></div>
                <img 
                  src={kol.image}
                  alt={kol.category}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* 图标覆盖 */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <div className="text-white">
                    {kol.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-octopoda-coral transition-colors duration-300">
                  {kol.category}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {kol.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {kol.expertise.map((skill, j) => (
                    <span
                      key={j}
                      className="text-xs bg-white/20 text-white px-2 py-1 rounded-full border border-white/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-4 right-4 bg-octopoda-coral text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-coral-600"
              >
                <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* 底部说明 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <p className="text-white/80 text-lg">
            每个AI成长伙伴都经过专业训练，拥有丰富的知识储备和深度的理解能力
          </p>
          <p className="text-white/60 text-sm mt-2">
            选择最适合你的成长伙伴，开始你的专属成长之旅
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default KOLSectionUpdated;