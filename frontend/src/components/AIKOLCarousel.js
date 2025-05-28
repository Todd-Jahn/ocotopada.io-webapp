import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AIKOLCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // 6个AI虚拟KOL数据
  const aiKOLs = [
    {
      id: 1,
      name: "林溪",
      englishName: "Lingxi",
      age: 32,
      title: "职场成长导师",
      description: "前管理咨询师，现企业HR领导者，专注职场女性成长",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      expertise: ["职场规划", "沟通技巧", "个人品牌", "压力管理"],
      targetAudience: "都市职业女性 (27-38岁)",
      background: "经历多次职业转型，克服职场焦虑，拥有丰富的企业管理经验",
      speciality: "将真实商业洞察与深度情感支持相结合，让用户感到启发和理解",
      // 4个能力进度条 (0-100)
      abilities: {
        growth: 92, // 成长进度
        understanding: 88, // 懂你指数
        empathy: 95, // 共情能力
        expertise: 89 // 专业知识
      }
    },
    {
      id: 2,
      name: "李晓婧",
      englishName: "Li Xiaojing", 
      age: 36,
      title: "亲子教育专家",
      description: "前幼儿园教师，两个孩子的妈妈，发展心理学专家",
      image: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7",
      expertise: ["早期教育", "亲子沟通", "儿童情绪管理", "家庭活动"],
      targetAudience: "家长群体 (28-42岁)",
      background: "拥有丰富的教育实践经验，活跃于家长社群，深度研究儿童发展心理学",
      speciality: "像智慧的妈妈朋友和值得信赖的育儿顾问，陪伴每位家长的育儿之路",
      abilities: {
        growth: 85,
        understanding: 94,
        empathy: 97,
        expertise: 91
      }
    },
    {
      id: 3,
      name: "程野",
      englishName: "Cheng Ye",
      age: 24,
      title: "心理成长伙伴",
      description: "自由插画师，分享社交焦虑和创作困境的成长历程",
      image: "https://images.unsplash.com/photo-1557862921-37829c790f19",
      expertise: ["情感健康", "自我探索", "正念冥想", "创意表达"],
      targetAudience: "年轻人群体 (19-29岁)",
      background: "开放分享自己的社交焦虑和创作瓶颈经历，用艺术治愈心灵",
      speciality: "像温柔的大哥哥或最好的朋友，为用户创造安全的分享和疗愈空间",
      abilities: {
        growth: 78,
        understanding: 96,
        empathy: 98,
        expertise: 82
      }
    },
    {
      id: 4,
      name: "王可",
      englishName: "Wang Ke",
      age: 26, 
      title: "都市生活导师",
      description: "北漂青年，从小城市到北京创业，擅长城市适应指导",
      image: "https://images.pexels.com/photos/4957793/pexels-photo-4957793.jpeg",
      expertise: ["城市适应", "自我激励", "社交网络", "年轻人理财"],
      targetAudience: "都市独居青年 (20-30岁)",
      background: "经历多次租房搬家和职场试错，热爱跑步和摄影，积累了丰富的都市生存智慧",
      speciality: "大姐姐般的能量和生存智慧，与所有在城市丛林中迷茫的人产生共鸣",
      abilities: {
        growth: 87,
        understanding: 89,
        empathy: 85,
        expertise: 84
      }
    },
    {
      id: 5,
      name: "宋嘉泽",
      englishName: "Song Jiaze",
      age: 35,
      title: "男性成长导师",
      description: "前小学体育老师，现青少年导师，新手爸爸",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643",
      expertise: ["情感沟通", "现代父亲角色", "压力释放", "工作生活平衡"],
      targetAudience: "成年男性群体 (28-42岁)",
      background: "倡导积极的男性气质和男性心理健康，为现代健康男性气质树立榜样",
      speciality: "让男性用户安全地讨论脆弱性，为健康的现代男性气质树立榜样",
      abilities: {
        growth: 83,
        understanding: 86,
        empathy: 88,
        expertise: 87
      }
    },
    {
      id: 6,
      name: "沈珺医生",
      englishName: "Dr. Shen Jun",
      age: 41,
      title: "医疗教育专家",
      description: "资深医师，医学教育者，职业倦怠康复专家",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      expertise: ["医疗职业发展", "专业人士工作生活平衡", "患者关怀", "照护者自我关怀"],
      targetAudience: "医疗教育专业人士 (30-50岁)",
      background: "经历过职业倦怠、医疗改革和工作家庭冲突，拥有丰富的医疗教育经验",
      speciality: "在保持深度关怀的同时建立信任和权威感——你希望拥有的智慧导师",
      abilities: {
        growth: 90,
        understanding: 92,
        empathy: 93,
        expertise: 96
      }
    }
  ];

  // 自动播放
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % aiKOLs.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, aiKOLs.length]);

  // 手动切换
  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // 5秒后恢复自动播放
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const nextSlide = () => {
    goToSlide((currentIndex + 1) % aiKOLs.length);
  };

  const prevSlide = () => {
    goToSlide((currentIndex - 1 + aiKOLs.length) % aiKOLs.length);
  };

  // 进度条组件
  const ProgressBar = ({ label, value, color }) => (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm text-gray-600">{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className={`${color} h-2 rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );

  const currentKOL = aiKOLs[currentIndex];

  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 lg:p-12">
      {/* 主要内容区域 */}
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* 左侧 - AI人物照片 */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src={currentKOL.image}
              alt={currentKOL.name}
              className="w-full h-80 lg:h-96 object-cover transition-transform duration-500 hover:scale-105"
            />
            
            {/* 人物信息浮层 */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-2xl font-bold mb-1">
                {currentKOL.name}
                <span className="text-lg ml-2 opacity-80">({currentKOL.englishName})</span>
              </h3>
              <p className="text-blue-200 mb-2">{currentKOL.title}</p>
              <p className="text-sm opacity-90">{currentKOL.description}</p>
            </div>

            {/* 左右切换按钮 */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* 轮播指示器 */}
          <div className="flex justify-center mt-4 space-x-2">
            {aiKOLs.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-octopoda-coral scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* 右侧 - 能力进度条和详细信息 */}
        <div className="space-y-6">
          {/* 基本信息 */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/30">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-bold text-gray-900">AI伙伴能力</h4>
              <span className="text-sm bg-octopoda-coral/10 text-octopoda-coral px-3 py-1 rounded-full">
                {currentKOL.age}岁
              </span>
            </div>
            
            {/* 4个能力进度条 */}
            <div className="space-y-4">
              <ProgressBar 
                label="成长进度" 
                value={currentKOL.abilities.growth} 
                color="bg-gradient-to-r from-green-500 to-emerald-500"
              />
              <ProgressBar 
                label="懂你指数" 
                value={currentKOL.abilities.understanding} 
                color="bg-gradient-to-r from-blue-500 to-cyan-500"
              />
              <ProgressBar 
                label="共情能力" 
                value={currentKOL.abilities.empathy} 
                color="bg-gradient-to-r from-pink-500 to-rose-500"
              />
              <ProgressBar 
                label="专业知识" 
                value={currentKOL.abilities.expertise} 
                color="bg-gradient-to-r from-purple-500 to-violet-500"
              />
            </div>
          </div>

          {/* 专业领域 */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/30">
            <h4 className="text-lg font-bold text-gray-900 mb-3">专业领域</h4>
            <div className="flex flex-wrap gap-2">
              {currentKOL.expertise.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-octopoda-primary/10 text-octopoda-primary text-sm rounded-full border border-octopoda-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* 目标用户 */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/30">
            <h4 className="text-lg font-bold text-gray-900 mb-2">服务对象</h4>
            <p className="text-gray-600 mb-3">{currentKOL.targetAudience}</p>
            <div className="text-sm text-gray-500 leading-relaxed">
              <p className="mb-2"><strong>背景：</strong>{currentKOL.background}</p>
              <p><strong>特色：</strong>{currentKOL.speciality}</p>
            </div>
          </div>

          {/* 行动按钮 */}
          <div className="flex gap-3">
            <button className="flex-1 bg-octopoda-coral text-white py-3 px-6 rounded-lg font-medium hover:bg-coral-600 transition-colors duration-200">
              开始对话
            </button>
            <button className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
              了解更多
            </button>
          </div>
        </div>
      </div>

      {/* AI状态指示器 */}
      <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-lg shadow-lg p-3 animate-pulse">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <span className="text-xs font-medium">AI在线陪伴</span>
        </div>
      </div>
    </div>
  );
};

export default AIKOLCarousel;