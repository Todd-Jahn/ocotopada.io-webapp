import React, { useState } from "react";
import { 
  Brain, 
  Heart, 
  Users, 
  Shield, 
  CheckCircle, 
  Star,
  ArrowRight,
  Play,
  Lock,
  Zap,
  MessageCircle,
  TrendingUp,
  Menu,
  X,
  MessageSquare,
  Crown,
  ChevronDown,
  ChevronUp,
  Mail,
  Twitter,
  Linkedin,
  Instagram,
  ExternalLink
} from "lucide-react";

const OctopodaSimpleFixed = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(-1);

  // Navigation Component
  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-octopoda-primary">
            Octopada.io
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['AI伙伴', '功能特色', '订阅方案', '关于我们'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-octopoda-primary transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden md:block bg-octopoda-coral text-white px-6 py-2 rounded-full font-semibold hover:bg-coral-600 transition-colors duration-300">
            开始成长
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 space-y-4">
            {['AI伙伴', '功能特色', '订阅方案', '关于我们'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-700 hover:text-octopoda-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full bg-octopoda-coral text-white px-6 py-2 rounded-full font-semibold hover:bg-coral-600 transition-colors duration-300">
              开始成长
            </button>
          </div>
        </div>
      )}
    </nav>
  );

  // Hero Section - 更新内容，去除"高保真"字样
  const HeroSection = () => (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{
        background: `linear-gradient(135deg, rgba(36, 66, 133, 0.95) 0%, rgba(95, 168, 150, 0.85) 100%), url('https://images.unsplash.com/photo-1655393001768-d946c97d6fd1') center/cover`
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            真实陪伴
            <span className="block bg-gradient-to-r from-octopoda-coral to-yellow-400 bg-clip-text text-transparent">
              智能成长
            </span>
            <span className="block">AI伙伴</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            不是陪聊，不是娱乐，是与你共创真实人生的AI虚拟导师。<br />
            专业的成长指导，贴心的情感陪伴，见证你的每一次蜕变。
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-octopoda-coral text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-coral-600 transition-all duration-300">
              立即体验AI成长伙伴
              <ArrowRight className="inline ml-2" size={20} />
            </button>

            <button className="flex items-center text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-medium backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <Play className="mr-2" size={20} />
              观看演示视频
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm">
            {[
              "✓ 专业AI导师陪伴",
              "✓ 个性化成长方案", 
              "✓ 隐私安全保护",
              "✓ 多平台同步使用"
            ].map((item, i) => (
              <span key={i} className="flex items-center">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // AI伙伴轮播区域 - 简化版本
  const AIKOLSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

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
      }
    ];

    const currentKOL = aiKOLs[currentIndex];

    // 简化的进度条组件，横向一行排列
    const SimpleProgressBar = ({ label, value, color, icon: Icon }) => (
      <div className="flex items-center gap-3 mb-3">
        <div className="flex items-center gap-2 w-20">
          <Icon size={16} className={`text-${color}-500`} />
          <span className="text-sm font-medium text-gray-700 text-nowrap">{label}</span>
        </div>
        <div className="flex-1 bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full bg-gradient-to-r from-${color}-400 to-${color}-600`}
            style={{ width: `${value}%` }}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              每个人都值得拥有懂你的AI成长伙伴
            </h2>
            {/* 修改后的描述文案 */}
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              陪伴你的每一次蜕变　见证每一个成长瞬间
            </p>
          </div>

          {/* 轮播主体 */}
          <div className="relative max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* 左侧：人物展示 */}
              <div className="relative">
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
                </div>

                {/* 指示器 */}
                <div className="flex justify-center mt-6 space-x-2">
                  {aiKOLs.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-blue-500 w-8'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* 右侧：详细信息 - 照片下方的信息 */}
              <div className="space-y-6">
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
                      icon={Users}
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
                <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 px-6 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  选择 {currentKOL.name} 作为我的成长伙伴
                </button>
              </div>
            </div>
          </div>

          {/* 底部提示 */}
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">
              点击指示器查看更多AI成长伙伴
            </p>
          </div>
        </div>
      </section>
    );
  };

  // AI成长伙伴选择区域 - 更新版本
  const KOLSection = () => (
    <section id="mentors" className="py-24 bg-gradient-to-br from-octopoda-primary to-octopoda-sage">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            选择你的AI成长伙伴
            <span className="block text-octopoda-coral">多样化陪伴，个性化成长</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            每位AI成长伙伴都拥有独特的个性特征和专业能力，
            为你提供最贴心的陪伴和最专业的成长指导。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              category: "职场成长导师",
              image: "https://images.unsplash.com/photo-1486546910464-ec8e45c4a137",
              description: "职场晋升/创业指导/管理技能/专业发展",
              expertise: ["领导力培养", "职场规划", "团队协作", "商业思维"],
              color: "bg-gradient-to-br from-blue-500 to-indigo-600",
              icon: <Brain className="w-6 h-6" />
            },
            {
              category: "心理健康伙伴", 
              image: "https://images.unsplash.com/photo-1656082263859-ab7cf2ece9fc",
              description: "情绪管理/压力缓解/心理调节/内心成长",
              expertise: ["情绪调节", "压力管理", "自我认知", "心理健康"],
              color: "bg-gradient-to-br from-green-500 to-emerald-600",
              icon: <Heart className="w-6 h-6" />
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
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105"
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

              <button className="absolute bottom-4 right-4 bg-octopoda-coral text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-coral-600">
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* 底部说明 */}
        <div className="text-center mt-12">
          <p className="text-white/80 text-lg">
            每个AI成长伙伴都经过专业训练，拥有丰富的知识储备和深度的理解能力
          </p>
          <p className="text-white/60 text-sm mt-2">
            选择最适合你的成长伙伴，开始你的专属成长之旅
          </p>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AIKOLSection />
      <KOLSection />
      
      {/* 简单的CTA区域 */}
      <section className="py-24 bg-gradient-to-br from-octopada-primary via-octopada-sage to-octopada-primary">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
            准备好开始你的
            <span className="block bg-gradient-to-r from-octopada-coral to-yellow-400 bg-clip-text text-transparent">
              成长之旅了吗？
            </span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-octopada-coral text-white px-12 py-4 rounded-full text-xl font-semibold shadow-xl hover:bg-coral-600 transition-all duration-300">
              立即开始免费试用
              <ArrowRight className="inline ml-3" size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OctopodaSimpleFixed;