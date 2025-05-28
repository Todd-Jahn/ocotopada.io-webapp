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

const OctopodaChinese = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(-1);

  // 导航组件
  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-octopoda-primary">
            Octopada.io
          </div>
          
          {/* 桌面端菜单 */}
          <div className="hidden md:flex space-x-8">
            {[
              { name: '成长陪伴', href: '#features' },
              { name: '我的伙伴', href: '#mentors' },
              { name: '共创社区', href: '#community' },
              { name: '订阅方案', href: '#pricing' }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-octopoda-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA 按钮 */}
          <button className="hidden md:block bg-octopoda-coral text-white px-6 py-2 rounded-lg font-medium hover:bg-coral-600 transition-colors duration-200">
            开始成长之旅
          </button>

          {/* 移动端菜单按钮 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 移动端菜单 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 space-y-4">
            {[
              { name: '成长陪伴', href: '#features' },
              { name: '我的伙伴', href: '#mentors' },
              { name: '共创社区', href: '#community' },
              { name: '订阅方案', href: '#pricing' }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-600 hover:text-octopoda-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full bg-octopoda-coral text-white px-6 py-2 rounded-lg font-medium hover:bg-coral-600 transition-colors duration-200">
              开始成长之旅
            </button>
          </div>
        </div>
      )}
    </nav>
  );

  // 主页英雄区块 - 突出高保真AI陪伴
  const HeroSection = () => (
    <section className="pt-24 pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左侧 - 内容 */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                每个人都值得拥有
                <span className="block text-octopoda-coral">
                  懂你的AI成长伙伴
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                不是陪聊，不是娱乐，是与你共创真实人生的高保真虚拟导师。
                陪伴你的每一次蜕变，见证每一个成长瞬间。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-octopoda-coral text-white px-8 py-3 rounded-lg font-medium hover:bg-coral-600 transition-colors duration-200 flex items-center justify-center">
                开始我的成长陪伴
                <ArrowRight className="ml-2" size={18} />
              </button>

              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center">
                <Play className="mr-2" size={18} />
                观看真实案例
              </button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-500">
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-octopoda-sage" />
                高保真AI互动
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-octopoda-sage" />
                隐私安全保护
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-octopoda-sage" />
                真实成长陪伴
              </span>
            </div>
          </div>

          {/* 右侧 - 高保真AI陪伴导师 */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 lg:p-12">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
                alt="AI成长伙伴"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              
              {/* 浮动元素显示AI互动状态 */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 max-w-xs">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-xs font-medium text-gray-600">AI导师在线</span>
                </div>
                <p className="text-sm text-gray-700">
                  "我理解你的职场困惑，让我们一起制定专属的成长计划"
                </p>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-octopoda-coral text-white rounded-lg shadow-lg p-3">
                <div className="text-xs font-medium mb-1">成长进度</div>
                <div className="flex items-center space-x-2">
                  <div className="bg-white/20 rounded-full h-2 w-16">
                    <div className="bg-white rounded-full h-2 w-12"></div>
                  </div>
                  <span className="text-xs">75%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // 功能特色区块
  const FeaturesSection = () => (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            真实成长内容，陪伴你的每一次蜕变
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            这里有陪你一起面对工作压力、情感困扰、家庭挑战的AI导师，
            用纪实成长故事，为你的人生每个阶段提供真实可感的陪伴
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Heart className="w-6 h-6" />,
              title: "真实生活对话",
              description: "不是机械回复，而是真正理解你生活处境的温暖陪伴"
            },
            {
              icon: <Brain className="w-6 h-6" />,
              title: "情感共鸣理解",
              description: "虚拟人也懂你的世界，用心倾听每一个困惑和成长"
            },
            {
              icon: <TrendingUp className="w-6 h-6" />,
              title: "专属成长档案",
              description: "记录你的每一步改变，见证属于你的成长轨迹"
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "共创成长故事",
              description: "你的故事也能成为我成长的一部分，一起见证成长"
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "安全私密空间",
              description: "每一次倾诉都在安全保护下，专业守护你的隐私"
            },
            {
              icon: <MessageCircle className="w-6 h-6" />,
              title: "随时陪伴在线",
              description: "生活不分昼夜，我们的陪伴也不会缺席"
            }
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-octopoda-coral mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // AI成长伙伴矩阵
  const MentorSection = () => (
    <section id="mentors" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            选择你的AI成长伙伴
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            每个AI导师都专注于不同的人生领域，陪伴你面对真实的生活挑战，
            用专业而温暖的方式，助力你的每一次成长
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              category: "职场成长导师",
              image: "https://images.pexels.com/photos/7278797/pexels-photo-7278797.jpeg",
              description: "职场压力、晋升困惑、创业迷茫？让我陪你找到属于你的职业方向",
              expertise: ["职场规划", "领导力提升", "工作压力管理"]
            },
            {
              category: "心理陪伴师", 
              image: "https://images.pexels.com/photos/3693056/pexels-photo-3693056.jpeg",
              description: "情绪低落、焦虑不安、人生迷茫？每个人都值得被温柔以待",
              expertise: ["情绪疏导", "压力释放", "心理健康"]
            },
            {
              category: "家庭关系顾问",
              image: "https://images.unsplash.com/photo-1593323925814-253c803de3a5",
              description: "亲子沟通、夫妻相处、家庭和谐？用爱构建温暖的家庭港湾",
              expertise: ["亲子教育", "婚姻经营", "家庭沟通"]
            },
            {
              category: "人生导航师",
              image: "https://images.unsplash.com/photo-1541130292430-a832637ddc0d",
              description: "人生转折、目标迷茫、未来规划？陪你走过人生每个重要节点",
              expertise: ["人生规划", "目标设定", "转型指导"]
            },
            {
              category: "专业技能导师",
              image: "https://images.unsplash.com/photo-1496180470114-6ef490f3ff22",
              description: "技能提升、知识学习、专业发展？一起探索无限可能",
              expertise: ["技能培养", "知识学习", "专业发展"]
            }
          ].map((mentor, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={mentor.image}
                  alt={mentor.category}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {mentor.category}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {mentor.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {mentor.expertise.map((skill, j) => (
                    <span
                      key={j}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // 共创社区区块
  const CommunitySection = () => (
    <section id="community" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            共创成长社区
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            与AI伙伴和真实用户一起，共同创造有温度的成长内容，
            分享真实人生经历，在互相陪伴中实现蜕变
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <BookOpen className="w-6 h-6" />,
              title: "成长故事",
              description: "分享真实的人生故事，记录成长足迹，获得温暖回应",
              features: ["真实经历分享", "成长进度跟踪", "情感共鸣互动"]
            },
            {
              icon: <Heart className="w-6 h-6" />,
              title: "陪伴日记",
              description: "与AI伙伴的深度对话记录，沉淀成长感悟",
              features: ["深度对话回顾", "成长洞察提炼", "情绪变化追踪"]
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "共创剧本",
              description: "用户与AI协作创造成长场景和解决方案",
              features: ["场景共同构建", "角色互动设定", "成果分享展示"]
            },
            {
              icon: <Target className="w-6 h-6" />,
              title: "成长挑战",
              description: "参与个人和团队成长挑战，激发无限潜能",
              features: ["挑战任务设定", "团队协作完成", "成果庆祝展示"]
            },
            {
              icon: <HelpCircle className="w-6 h-6" />,
              title: "互助问答",
              description: "社区智慧集合，为成长困惑提供温暖解答",
              features: ["问题发布求助", "专业建议回复", "最佳答案推荐"]
            },
            {
              icon: <Gift className="w-6 h-6" />,
              title: "资源交换",
              description: "分享成长资源和工具，传递有价值的经验",
              features: ["资源免费分享", "工具使用推荐", "经验方法交流"]
            }
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-octopoda-coral mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {feature.description}
              </p>
              <div className="space-y-1">
                {feature.features.map((item, j) => (
                  <div key={j} className="flex items-center text-xs text-gray-500">
                    <CheckCircle className="w-3 h-3 mr-2 text-octopoda-sage" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 社区特色 */}
        <div className="bg-gradient-to-r from-octopoda-ivory to-blue-50 p-8 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                为什么选择我们的共创社区？
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: <Shield className="w-5 h-5" />,
                    title: "隐私安全保护",
                    description: "多层隐私设置，匿名发布选项，让你安心分享"
                  },
                  {
                    icon: <Award className="w-5 h-5" />,
                    title: "成长激励体系",
                    description: "积分徽章系统，记录每一步成长，激发持续参与"
                  },
                  {
                    icon: <Bot className="w-5 h-5" />,
                    title: "AI智能协助",
                    description: "AI内容审核，智能推荐匹配，提供个性化体验"
                  },
                  {
                    icon: <Heart className="w-5 h-5" />,
                    title: "温暖社区氛围",
                    description: "真诚共情文化，互相支持陪伴，共同成长前行"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="text-octopoda-coral mr-3 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">🌟</div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  立即加入社区
                </h4>
                <p className="text-gray-600 mb-6">
                  成为共创社区的一员，开始你的成长陪伴之旅
                </p>
                <div className="space-y-3">
                  <button className="w-full bg-octopoda-coral text-white py-3 rounded-lg font-medium hover:bg-coral-600 transition-colors duration-200">
                    免费加入社区
                  </button>
                  <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
                    先看看社区
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 社区数据展示 */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: "10,000+", label: "活跃用户", icon: "👥" },
            { number: "50,000+", label: "成长故事", icon: "📖" },
            { number: "500+", label: "AI导师", icon: "🤖" },
            { number: "95%", label: "用户满意度", icon: "⭐" }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-4 rounded-xl border border-gray-100">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-octopoda-primary mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  const PricingSection = () => (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            选择适合你的成长陪伴方案
          </h2>
          <p className="text-lg text-gray-600">
            我们相信，每个人都值得拥有专属的成长陪伴
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "基础陪伴",
              price: "¥19",
              period: "/月",
              description: "开始你的AI成长之旅",
              features: [
                "基础AI对话陪伴",
                "个人成长记录",
                "社区交流权限",
                "邮件客服支持"
              ],
              isPopular: false,
              buttonText: "开始体验"
            },
            {
              name: "深度成长", 
              price: "¥69",
              period: "/月",
              description: "完整的AI成长陪伴体验",
              features: [
                "高级AI导师陪伴",
                "专属成长计划制定",
                "优先客服支持",
                "成长数据分析",
                "内容共创功能",
                "1对1深度对话"
              ],
              isPopular: true,
              buttonText: "立即开始成长"
            },
            {
              name: "企业同行",
              price: "定制",
              period: "",
              description: "为团队和企业提供专业方案",
              features: [
                "团队成长解决方案",
                "定制AI导师培训",
                "企业专属数据分析",
                "专属客户经理",
                "API接口对接"
              ],
              isPopular: false,
              buttonText: "联系我们"
            }
          ].map((plan, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl p-6 border-2 ${
                plan.isPopular ? 'border-octopoda-coral shadow-lg' : 'border-gray-100'
              } relative`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-octopoda-coral text-white px-4 py-1 rounded-full text-sm font-medium">
                    最受欢迎
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">
                    {plan.period}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-octopoda-sage mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
                  plan.isPopular
                    ? 'bg-octopoda-coral text-white hover:bg-coral-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // 常见问题
  const FAQSection = () => {
    const faqs = [
      {
        question: "AI导师真的能理解我的真实感受吗？",
        answer: "我们的AI导师基于先进的情感理解技术，能够识别和回应你的情感状态。虽然是AI，但我们致力于创造真正有温度、有理解力的陪伴体验，让你感受到被倾听和被理解。"
      },
      {
        question: "我的隐私和个人信息安全吗？",
        answer: "绝对安全。我们采用银行级别的加密技术，绝不会泄露您的个人对话内容。您的隐私安全和情感安全是我们的首要原则，每一次对话都在严格的保护机制下进行。"
      },
      {
        question: "我可以同时与多个AI导师交流吗？",
        answer: "当然可以！根据你当前的需求，你可以选择不同专业领域的AI导师。比如工作遇到挫折时找职场导师，情感困扰时找心理陪伴师，我们陪你面对人生的各个方面。"
      },
      {
        question: "什么是\"共创成长故事\"功能？",
        answer: "这是我们独有的功能。你可以通过反馈和互动，影响AI导师对你的理解和陪伴方式，让陪伴更加个性化。你的成长经历也会成为AI导师学习的一部分，实现真正的共同成长。"
      },
      {
        question: "如果我想要更换导师或者暂停服务怎么办？",
        answer: "完全没问题。你可以随时在个人中心更换适合当前阶段的AI导师，也可以随时暂停或取消订阅，没有任何额外费用。我们希望你在最舒适的状态下享受成长陪伴。"
      }
    ];

    return (
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              你可能想了解的问题
            </h2>
            <p className="text-lg text-gray-600">
              关于AI成长陪伴，我们为你答疑解惑
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? -1 : i)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                  {openFAQ === i ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                
                {openFAQ === i && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // 最终行动召唤
  const FinalCTASection = () => (
    <section className="py-16 bg-octopoda-primary">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            开始你的专属成长陪伴之旅
          </h2>

          <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            加入数万人的成长社区，让AI成长伙伴陪伴你度过人生的每一个重要时刻。
            真实的陪伴，从这里开始。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-octopoda-coral text-white px-8 py-3 rounded-lg font-medium hover:bg-coral-600 transition-colors duration-200">
              立即开始免费体验
            </button>
            <button className="border border-blue-300 text-blue-100 px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
              预约专属顾问
            </button>
          </div>

          <div className="flex justify-center gap-6 text-sm text-blue-200">
            <span>✓ 30天免费体验</span>
            <span>✓ 无需设置费用</span>
            <span>✓ 随时可以取消</span>
          </div>
        </div>
      </div>
    </section>
  );

  // 简约页脚
  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-octopoda-coral">
              Octopada.io
            </h3>
            <p className="text-gray-400 text-sm">
              用真实成长内容，陪伴你的每一次蜕变。
              让AI成长伙伴见证你的人生故事。
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">平台功能</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">AI成长伙伴</a></li>
              <li><a href="#" className="hover:text-white transition-colors">专属成长档案</a></li>
              <li><a href="#" className="hover:text-white transition-colors">共创社区</a></li>
              <li><a href="#" className="hover:text-white transition-colors">成长日志</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">帮助支持</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">使用指南</a></li>
              <li><a href="#" className="hover:text-white transition-colors">隐私政策</a></li>
              <li><a href="#" className="hover:text-white transition-colors">服务条款</a></li>
              <li><a href="#" className="hover:text-white transition-colors">联系客服</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">关注我们</h4>
            <div className="flex space-x-4">
              {[
                { icon: <MessageCircle size={16} />, href: "#", label: "微信" },
                { icon: <Users size={16} />, href: "#", label: "QQ群" },
                { icon: <Mail size={16} />, href: "#", label: "邮箱" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-octopoda-coral transition-colors duration-200"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Octopada.io. 用心陪伴每一次成长 | 让AI成为你最懂你的伙伴
          </p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <MentorSection />
      <CommunitySection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default OctopodaChinese;