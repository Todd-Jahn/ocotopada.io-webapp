import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
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
  ExternalLink,
  FileText,
  Calendar,
  Building,
  UserPlus
} from "lucide-react";
import RadarChart from './RadarChart';

// 导入其他页面组件
import { CommunityPage, EnterprisePage, TeamStoryPage, JoinUsPage } from "./AdditionalPages";

// 导航组件
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { path: "/", label: "AI伙伴", icon: <Brain size={18} /> },
    { path: "/companion-types", label: "陪伴类型", icon: <Heart size={18} /> },
    { path: "/growth-diary", label: "成长日志", icon: <FileText size={18} /> },
    { path: "/subscription", label: "订阅方案", icon: <Crown size={18} /> },
    { path: "/community", label: "共创社区", icon: <Users size={18} /> },
    { path: "/enterprise", label: "企业同行", icon: <Building size={18} /> },
    { path: "/team-story", label: "团队故事", icon: <Star size={18} /> },
    { path: "/join-us", label: "加入我们", icon: <UserPlus size={18} /> }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-octopoda-primary">
            Octopada.io
          </Link>
          
          {/* 左侧下拉菜单按钮 */}
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 bg-octopoda-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              <Menu size={20} />
              <span>导航菜单</span>
              {isMenuOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {/* 下拉菜单 */}
            {isMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200/50 overflow-hidden">
                {navigationItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200 ${
                      location.pathname === item.path ? 'bg-blue-50 text-octopoda-primary border-r-2 border-octopoda-primary' : 'text-gray-700'
                    }`}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* 右侧CTA按钮 */}
          <button className="hidden md:block bg-octopoda-coral text-white px-6 py-2 rounded-full font-semibold hover:bg-coral-600 transition-colors duration-300">
            开始体验
          </button>
        </div>
      </div>
    </nav>
  );
};

// AI伙伴页面（首页）
const AIPartnersPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const aiKOLs = [
    {
      id: 1,
      name: "林溪",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      description: "陪伴你在人生路上的每一个重要时刻，用温暖和智慧为你指引方向。",
      traits: {
        warmth: 85,
        understanding: 92,
        playfulness: 78,
        loyalty: 88,
        growth: 94
      }
    },
    {
      id: 2,
      name: "小萱",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      description: "用青春的活力和现代的思维，陪伴你探索属于这个时代的成长方式。",
      traits: {
        warmth: 90,
        understanding: 85,
        playfulness: 95,
        loyalty: 82,
        growth: 88
      }
    },
    {
      id: 3,
      name: "曼丽",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      description: "以丰富的人生阅历和深邃的智慧，为你的每一个选择提供温暖的支持。",
      traits: {
        warmth: 88,
        understanding: 90,
        playfulness: 75,
        loyalty: 92,
        growth: 85
      }
    },
    {
      id: 4,
      name: "陆迪",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
      description: "以细腻的共情能力和深度的理解，成为你成长路上最贴心的伙伴。",
      traits: {
        warmth: 87,
        understanding: 94,
        playfulness: 80,
        loyalty: 90,
        growth: 89
      }
    },
    {
      id: 5,
      name: "Simon Li",
      image: "https://images.unsplash.com/photo-1529232356377-57971f020a94",
      description: "结合国际化视野与本土智慧，为你的人生规划提供全新的思考角度。",
      traits: {
        warmth: 82,
        understanding: 88,
        playfulness: 85,
        loyalty: 86,
        growth: 96
      }
    },
    {
      id: 6,
      name: "林成卿",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      description: "用专业的洞察力和耐心的陪伴，帮助你发现内在的无限可能。",
      traits: {
        warmth: 84,
        understanding: 91,
        playfulness: 77,
        loyalty: 93,
        growth: 92
      }
    }
  ];

  const currentKOL = aiKOLs[currentIndex];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            每个人都值得拥有懂你的AI成长伙伴
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            陪伴你的每一次蜕变　见证每一个成长瞬间
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* 左侧：人物展示 */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={currentKOL.image}
                alt={currentKOL.name}
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold text-white mb-1">{currentKOL.name}</h3>
              </div>
            </div>

            {/* 指示器 */}
            <div className="flex justify-center mt-6 space-x-2">
              {aiKOLs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-blue-500 w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 右侧：详细信息 */}
          <div className="space-y-6">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">{currentKOL.name}</h4>
              <p className="text-lg text-gray-700 leading-relaxed">{currentKOL.description}</p>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 px-6 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              选择 {currentKOL.name} 作为我的成长伙伴
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 陪伴类型页面
const CompanionTypesPage = () => {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-octopoda-primary to-octopoda-sage">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">
            选择你的AI成长伙伴
            <span className="block text-octopoda-coral">多样化陪伴，个性化成长</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            每位AI成长伙伴都拥有独特的个性特征和专业能力
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
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <div className="text-white">{kol.icon}</div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-octopoda-coral transition-colors duration-300">
                  {kol.category}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{kol.description}</p>
                <div className="flex flex-wrap gap-2">
                  {kol.expertise.map((skill, j) => (
                    <span key={j} className="text-xs bg-white/20 text-white px-2 py-1 rounded-full border border-white/30">
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
      </div>
    </div>
  );
};

// 成长日志页面
const GrowthDiaryPage = () => {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-octopoda-ivory to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-octopoda-primary mb-6">
            成长日志
            <span className="block text-octopoda-sage">记录每一步成长轨迹</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            智能记录你的成长轨迹，提供个性化的建议和反馈
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              title: "个人成长档案",
              description: "完整记录你与AI伙伴的互动历程，包括对话记录、成长里程碑和个人感悟。",
              icon: <FileText className="w-8 h-8" />,
              color: "bg-blue-50 text-blue-600"
            },
            {
              title: "智能分析报告",
              description: "基于你的成长数据，生成个性化的分析报告，帮助你更好地了解自己的进步。",
              icon: <TrendingUp className="w-8 h-8" />,
              color: "bg-green-50 text-green-600"
            },
            {
              title: "目标追踪系统",
              description: "设定个人目标，跟踪完成进度，与AI伙伴一起制定下一步成长计划。",
              icon: <CheckCircle className="w-8 h-8" />,
              color: "bg-purple-50 text-purple-600"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className={`inline-flex p-4 rounded-xl mb-6 ${item.color}`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-octopada-coral text-white px-12 py-4 rounded-full text-xl font-semibold shadow-xl hover:bg-coral-600 transition-all duration-300">
            开启我的成长日志
            <ArrowRight className="inline ml-3" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

// 订阅方案页面
const SubscriptionPage = () => {
  const [activeTab, setActiveTab] = useState('membership');

  const tabs = [
    { id: 'membership', label: '会员权益' },
    { id: 'plans', label: '订阅方案' },
    { id: 'custom', label: '品牌定制' }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-octopoda-ivory to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-octopoda-primary mb-6">订阅方案</h1>
          
          {/* 选项卡 */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-full p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id ? 'bg-octopada-coral text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 会员权益 */}
        {activeTab === 'membership' && (
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "专属AI伙伴", description: "获得个性化AI成长伙伴，定制化陪伴体验" },
              { title: "无限对话", description: "不限时长的深度对话，随时获得成长指导" },
              { title: "成长报告", description: "定期获得个人成长分析报告和建议" },
              { title: "优先体验", description: "优先体验新功能和新AI伙伴" },
              { title: "社区特权", description: "参与会员专属活动和讨论区" },
              { title: "数据同步", description: "多设备数据同步，随时随地继续成长" }
            ].map((benefit, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-octopada-primary mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* 订阅方案 */}
        {activeTab === 'plans' && (
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "基础成长", price: "¥19", period: "/月", isPopular: false,
                features: ["基础成长内容", "AI陪伴日记", "社区论坛", "月度报告", "邮件支持"]
              },
              {
                name: "深度成长", price: "¥69", period: "/月", isPopular: true,
                features: ["专属AI导师", "1对1互动", "定制建议", "优先共创", "多平台同步", "优先支持"]
              },
              {
                name: "企业定制", price: "联系洽谈", period: "", isPopular: false,
                features: ["定制开发", "团队协作", "高级分析", "专属经理", "API接口", "7×24支持"]
              }
            ].map((plan, i) => (
              <div key={i} className={`relative bg-white rounded-2xl p-8 shadow-lg ${plan.isPopular ? 'ring-2 ring-octopada-coral' : ''}`}>
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-octopada-coral text-white px-4 py-1 rounded-full text-sm">最受欢迎</span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-octopada-primary mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold ${plan.isPopular ? 'bg-octopada-coral text-white' : 'bg-gray-100 text-gray-900'}`}>
                  {plan.name === '企业定制' ? '联系我们' : '选择方案'}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* 品牌定制 */}
        {activeTab === 'custom' && (
          <div className="text-center space-y-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-octopada-primary mb-6">品牌定制服务</h2>
              <p className="text-xl text-gray-600 mb-12">为您的品牌打造专属AI陪伴体验</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold mb-4">品牌AI定制</h3>
                  <p className="text-gray-600 mb-6">根据品牌调性和目标用户，定制专属AI形象和话术</p>
                  <ul className="text-left space-y-2">
                    <li>• 品牌形象设计</li>
                    <li>• 专属话术训练</li>
                    <li>• 品牌价值融入</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold mb-4">技术集成</h3>
                  <p className="text-gray-600 mb-6">提供完整的技术解决方案和集成支持</p>
                  <ul className="text-left space-y-2">
                    <li>• API接口对接</li>
                    <li>• 数据分析平台</li>
                    <li>• 运营支持服务</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <button className="bg-octopada-coral text-white px-12 py-4 rounded-full text-xl font-semibold">
              联系定制团队
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// 主应用组件
const OctopodaApp = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<AIPartnersPage />} />
          <Route path="/companion-types" element={<CompanionTypesPage />} />
          <Route path="/growth-diary" element={<GrowthDiaryPage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/enterprise" element={<EnterprisePage />} />
          <Route path="/team-story" element={<TeamStoryPage />} />
          <Route path="/join-us" element={<JoinUsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default OctopodaApp;