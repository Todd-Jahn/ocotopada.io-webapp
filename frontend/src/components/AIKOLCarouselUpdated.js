import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart, Brain, Users, Sparkles, TrendingUp } from "lucide-react";

const AIKOLCarouselUpdated = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // 更新的AI导师数据，使用亚洲人特写照片
  const aiKOLs = [
    {
      id: 1,
      name: "林溪",
      age: 32,
      title: "职场成长导师",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      target: "都市职业女性(27-38岁)",
      description: "拥有10年互联网行业经验的职场导师，专注于帮助女性在职场中突破瓶颈，实现个人价值最大化。",
      specialties: ["领导力培养", "职场沟通", "工作生活平衡", "团队管理"],
      growthProgress: 85,
      understandingIndex: 92,
      empathyLevel: 88,
      expertiseLevel: 94
    },
    {
      id: 2,
      name: "李晓婧",
      age: 36,
      title: "亲子教育专家",
      image: "https://images.unsplash.com/photo-1579420593648-0deba81fd762",
      target: "家长群体(28-42岁)",
      description: "资深儿童心理学专家，致力于为现代家庭提供科学的育儿指导和亲子关系建设方案。",
      specialties: ["儿童心理", "亲子沟通", "教育规划", "情绪管理"],
      growthProgress: 91,
      understandingIndex: 89,
      empathyLevel: 95,
      expertiseLevel: 90
    },
    {
      id: 3,
      name: "程野",
      age: 24,
      title: "心理成长伙伴",
      image: "https://images.unsplash.com/photo-1558507676-92c16503cd4c",
      target: "年轻人群体(19-29岁)",
      description: "年轻的心理学研究者，深谙Z世代的心理特点，擅长帮助年轻人应对成长中的各种心理挑战。",
      specialties: ["情绪调节", "人际关系", "自我认知", "压力管理"],
      growthProgress: 78,
      understandingIndex: 94,
      empathyLevel: 91,
      expertiseLevel: 82
    },
    {
      id: 4,
      name: "王可",
      age: 26,
      title: "都市生活导师",
      image: "https://images.unsplash.com/photo-1541130292430-a832637ddc0d",
      target: "都市独居青年(20-30岁)",
      description: "独立生活达人，专注于帮助年轻人建立健康的独居生活方式，提升生活品质和幸福感。",
      specialties: ["生活规划", "时间管理", "健康生活", "社交技能"],
      growthProgress: 80,
      understandingIndex: 87,
      empathyLevel: 85,
      expertiseLevel: 83
    },
    {
      id: 5,
      name: "宋嘉泽",
      age: 35,
      title: "男性成长导师",
      image: "https://images.unsplash.com/photo-1577060663859-4db8f31dc1da",
      target: "成年男性群体(28-42岁)",
      description: "专业男性心理咨询师，深度理解现代男性在事业、家庭、个人成长中面临的独特挑战。",
      specialties: ["事业规划", "情绪表达", "责任承担", "自我提升"],
      growthProgress: 87,
      understandingIndex: 90,
      empathyLevel: 84,
      expertiseLevel: 92
    },
    {
      id: 6,
      name: "沈珺医生",
      age: 41,
      title: "医疗教育专家",
      image: "https://images.pexels.com/photos/7278797/pexels-photo-7278797.jpeg",
      target: "医疗教育专业人士(30-50岁)",
      description: "资深医疗教育专家，致力于提升医疗从业者的专业技能和人文关怀能力。",
      specialties: ["医学教育", "医患沟通", "职业发展", "专业技能"],
      growthProgress: 93,
      understandingIndex: 88,
      empathyLevel: 89,
      expertiseLevel: 96
    }
  ];

  // 自动播放功能
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % aiKOLs.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, aiKOLs.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % aiKOLs.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + aiKOLs.length) % aiKOLs.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentKOL = aiKOLs[currentIndex];

  // 简化的进度条组件，横向一行排列
  const SimpleProgressBar = ({ label, value, color, icon: Icon }) => (
    <div className="flex items-center gap-3 mb-3">
      <div className="flex items-center gap-2 w-20">
        <Icon size={16} className={`text-${color}-500`} />
        <span className="text-sm font-medium text-gray-700 text-nowrap">{label}</span>
      </div>
      <div className="flex-1 bg-gray-200 rounded-full h-2">
        <motion.div
          className={`h-2 rounded-full bg-gradient-to-r from-${color}-400 to-${color}-600`}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
      <span className="text-sm font-medium text-gray-600 w-10 text-right">{value}%</span>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* 标题区域 - 字体缩小两号 */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            每个人都值得拥有懂你的AI成长伙伴
          </motion.h2>
          {/* 修改后的描述文案 */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            陪伴你的每一次蜕变　见证每一个成长瞬间
          </motion.p>
        </div>

        {/* 轮播主体 */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 左侧：人物展示 */}
            <motion.div
              key={currentKOL.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative group">
                {/* 人物照片 - 只保留姓名 */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={currentKOL.image}
                    alt={currentKOL.name}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* 人物姓名 - 在照片上 */}
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{currentKOL.name}</h3>
                  </div>
                </div>

                {/* 导航按钮 */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-800 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-800 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* 指示器 */}
              <div className="flex justify-center mt-6 space-x-2">
                {aiKOLs.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-blue-500 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* 右侧：详细信息 - 照片下方的信息 */}
            <motion.div
              key={`info-${currentKOL.id}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* 基本信息 */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-2xl font-bold text-gray-900">{currentKOL.title}</h4>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {currentKOL.age}岁
                  </span>
                </div>
                <p className="text-lg text-gray-600 mb-4">{currentKOL.target}</p>
                <p className="text-gray-700 leading-relaxed">{currentKOL.description}</p>
              </div>

              {/* 简化的能力展示 - 横向一行排列 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h5 className="text-lg font-semibold text-gray-900 mb-4">成长能力评估</h5>
                <div className="space-y-3">
                  <SimpleProgressBar
                    label="成长进度"
                    value={currentKOL.growthProgress}
                    color="green"
                    icon={TrendingUp}
                  />
                  <SimpleProgressBar
                    label="懂你指数"
                    value={currentKOL.understandingIndex}
                    color="blue"
                    icon={Brain}
                  />
                  <SimpleProgressBar
                    label="共情能力"
                    value={currentKOL.empathyLevel}
                    color="pink"
                    icon={Heart}
                  />
                  <SimpleProgressBar
                    label="专业知识"
                    value={currentKOL.expertiseLevel}
                    color="purple"
                    icon={Sparkles}
                  />
                </div>
              </div>

              {/* 专业特长 */}
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-3">专业特长</h5>
                <div className="flex flex-wrap gap-2">
                  {currentKOL.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium border border-blue-200"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* 选择按钮 */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 px-6 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                选择 {currentKOL.name} 作为我的成长伙伴
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* 底部提示 */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            左右滑动查看更多AI成长伙伴 • 自动播放每5秒切换
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIKOLCarouselUpdated;