import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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

// 导入更新的组件
import AIKOLCarouselUpdated from "./AIKOLCarouselUpdated";
import KOLSectionUpdated from "./KOLSectionUpdated";

const OctopodaFinal = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(-1);

  // Simple intersection observers
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.2, triggerOnce: true });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

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

  // Hero Section - 去除"高保真"字样
  const HeroSection = () => (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{
        background: `linear-gradient(135deg, rgba(36, 66, 133, 0.95) 0%, rgba(95, 168, 150, 0.85) 100%), url('https://images.unsplash.com/photo-1655393001768-d946c97d6fd1') center/cover`
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
          >
            真实陪伴
            <span className="block bg-gradient-to-r from-octopoda-coral to-yellow-400 bg-clip-text text-transparent">
              智能成长
            </span>
            <span className="block">AI伙伴</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
          >
            不是陪聊，不是娱乐，是与你共创真实人生的AI虚拟导师。<br />
            专业的成长指导，贴心的情感陪伴，见证你的每一次蜕变。
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="bg-octopoda-coral text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-coral-600 transition-all duration-300">
              立即体验AI成长伙伴
              <ArrowRight className="inline ml-2" size={20} />
            </button>

            <button className="flex items-center text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-medium backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <Play className="mr-2" size={20} />
              观看演示视频
            </button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-8 text-white/80 text-sm"
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );

  // Features Section - 去除"高保真"字样
  const FeaturesSection = () => (
    <section id="features" ref={featuresRef} className="py-24 bg-octopoda-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-octopoda-primary mb-6">
            不只是聊天工具
            <span className="block text-octopoda-sage">真正的成长伙伴</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们的AI成长伙伴拥有真实的个性特征、专业的知识储备，
            能够提供深度的情感陪伴和专业的成长指导。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Brain className="w-8 h-8" />,
              title: "真实成长故事陪伴",
              description: "基于真实社会话题和专业挑战设计的成长故事，不是虚构娱乐内容，而是实用的人生指导。"
            },
            {
              icon: <MessageCircle className="w-8 h-8" />,
              title: "一对一专属互动",
              description: "订阅专属成长计划，获得个性化的一对一互动体验，针对你的具体情况提供定制化建议。"
            },
            {
              icon: <TrendingUp className="w-8 h-8" />,
              title: "成长日记与进度追踪",
              description: "智能记录你的成长轨迹，提供个性化的建议和反馈，让每一步进步都被看见和认可。"
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "共创内容与故事影响",
              description: "你可以参与塑造AI伙伴的故事线和成长轨迹，真正实现用户与AI的共创共成长。"
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "多平台无缝使用",
              description: "在手机、电脑、平板等不同设备上无缝切换，随时随地享受专业的成长陪伴服务。"
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "隐私安全第一",
              description: "你的情感安全是我们的首要考虑，采用专业级隐私保护技术，绝不泄露个人信息。"
            }
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 hover:border-octopoda-sage/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-octopoda-coral mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-octopoda-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Pricing Section
  const PricingSection = () => (
    <section id="pricing" className="py-24 bg-gradient-to-br from-octopoda-ivory to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-octopoda-primary mb-6">
            选择适合你的成长计划
            <span className="block text-octopoda-coral">高性价比，灵活升级</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            从基础陪伴到深度成长，我们提供多层次的服务方案，所有计划都包含隐私保护承诺。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "基础成长",
              price: "¥19",
              period: "/月",
              description: "适合初次体验AI成长陪伴的用户",
              features: [
                "基础成长内容访问",
                "AI陪伴日记功能",
                "社区论坛参与",
                "月度成长报告",
                "邮件客服支持"
              ],
              isPopular: false,
              buttonText: "开始基础计划",
              color: "border-gray-200"
            },
            {
              name: "深度成长", 
              price: "¥69",
              period: "/月",
              description: "深度成长所需的完整功能体验",
              features: [
                "专属AI导师成长档案",
                "一对一个性化互动",
                "定制成长日记与建议",
                "优先参与共创内容",
                "多平台同步使用",
                "优先客服支持",
                "高级数据分析"
              ],
              isPopular: true,
              buttonText: "开启深度成长",
              color: "border-octopoda-coral"
            },
            {
              name: "企业定制",
              price: "联系洽谈",
              period: "",
              description: "为组织和团队提供定制化解决方案",
              features: [
                "定制AI导师开发",
                "团队协作工具",
                "高级数据分析仪表板",
                "专属客户经理",
                "API接口访问",
                "定制化集成服务",
                "7×24小时专业支持"
              ],
              isPopular: false,
              buttonText: "联系商务团队",
              color: "border-octopoda-primary"
            }
          ].map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-2xl p-8 border-2 ${plan.color} ${
                plan.isPopular ? 'shadow-xl ring-4 ring-octopoda-coral/20' : 'shadow-lg'
              } transition-all duration-300 hover:scale-105`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-octopoda-coral text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Crown className="w-4 h-4 mr-2" />
                    最受欢迎
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-octopoda-primary mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-octopoda-primary">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">
                    {plan.period}
                  </span>
                </div>
                <p className="text-gray-600">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-octopoda-sage mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-octopoda-coral text-white hover:bg-coral-600 shadow-lg'
                    : 'bg-octopoda-primary text-white hover:bg-blue-700'
                }`}
              >
                {plan.buttonText}
                <ArrowRight className="inline ml-2" size={18} />
              </button>

              {plan.isPopular && (
                <div className="mt-4 text-center">
                  <span className="text-sm text-octopoda-coral font-medium">
                    ✨ 首月试用优惠价格
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // FAQ Section
  const FAQSection = () => {
    const faqs = [
      {
        question: "Octopada的AI成长伙伴与普通聊天机器人有什么不同？",
        answer: "我们的AI成长伙伴具有真实的个性特征、专业的知识储备和深度的理解能力，专注于为用户提供有意义的成长指导，而不是简单的娱乐对话。每位AI伙伴都经过专业训练，能够针对不同的人生阶段和成长需求提供个性化的建议和陪伴。"
      },
      {
        question: "共创功能是如何工作的？",
        answer: "通过我们的共创系统，你可以主动参与塑造AI伙伴的故事线和成长轨迹。你的反馈和建议会影响AI伙伴的发展方向，使每次互动都更加个性化和有意义。这种合作方式确保你的陪伴体验会随着你的需求而不断进化。"
      },
      {
        question: "我的个人数据和情感分享是否安全？",
        answer: "绝对安全。隐私和情感安全是我们的首要考虑。我们采用银行级加密技术、透明的数据处理政策，并有专业团队确保服务质量。你的对话和个人信息永远不会被分享或用于娱乐目的，我们致力于为你提供安全可信的成长环境。"
      },
      {
        question: "我可以在不同的AI成长伙伴之间切换吗？",
        answer: "当然可以！你的订阅可以让你访问我们完整的AI伙伴矩阵，包括职场成长、心理健康、家庭关系、情感陪伴等不同类型的导师。你可以根据当前的成长需求选择最适合的伙伴进行互动。"
      },
      {
        question: "成长日记有什么特别之处？",
        answer: "我们的成长日记是个性化的追踪系统，会根据你的进步和目标自动调整。它不仅记录你的成长轨迹，还提供定制化建议、里程碑庆祝和基于你与AI伙伴互动的深度洞察，创建一个完整的成长历程记录。"
      },
      {
        question: "如何升级或取消我的订阅？",
        answer: "你可以随时通过个人仪表板升级你的计划以获得更多功能。取消订阅也很简单，没有隐藏费用。我们还为新用户提供30天退款保证，让你可以放心尝试我们的服务。"
      }
    ];

    return (
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-octopoda-primary mb-6">
              常见问题解答
              <span className="block text-octopoda-sage">我们在这里为你答疑解惑</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              关于我们AI成长伙伴平台和隐私保护政策的常见问题
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-octopoda-ivory/50 rounded-2xl border border-gray-200/50 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? -1 : i)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/50 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-octopoda-primary pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === i ? (
                    <ChevronUp className="w-6 h-6 text-octopoda-coral flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-octopoda-coral flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === i && (
                  <div className="px-8 pb-6">
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

  // Final CTA Section
  const FinalCTASection = () => (
    <section className="py-24 bg-gradient-to-br from-octopoda-primary via-octopoda-sage to-octopoda-primary relative overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            准备好开始你的
            <span className="block bg-gradient-to-r from-octopoda-coral to-yellow-400 bg-clip-text text-transparent">
              成长之旅了吗？
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            加入数千名成长寻求者，选择Octopada.io获得有意义的AI陪伴。
            体验专业、隐私优先的虚拟成长伙伴带来的不同。
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-octopada-coral text-white px-12 py-4 rounded-full text-xl font-semibold shadow-xl hover:bg-coral-600 transition-all duration-300 hover:scale-105">
              立即开始免费试用
              <ArrowRight className="inline ml-3" size={24} />
            </button>

            <button className="text-white border-2 border-white/30 px-10 py-4 rounded-full text-xl font-medium backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              预约产品演示
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-white/80 text-base">
            {[
              "✨ 首月试用优惠",
              "🔒 隐私安全保证", 
              "💝 30天退款承诺",
              "🚀 即刻开始使用"
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

  // Footer Component
  const Footer = () => (
    <footer className="bg-octopoda-primary text-white">
      <div className="border-b border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              与Octopada保持联系
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              获取新AI伙伴上线、成长功能更新和社区动态的最新消息
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="输入您的邮箱地址"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-octopoda-coral focus:border-transparent"
              />
              <button className="bg-octopoda-coral text-white px-8 py-3 rounded-full font-semibold hover:bg-coral-600 transition-colors duration-300">
                订阅更新
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-octopoda-coral mb-4">
                  Octopada.io
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  专注于有意义成长的AI陪伴平台，
                  提供隐私优先的互动体验和真实的虚拟成长伙伴关系。
                </p>
              </div>
              
              <div className="flex space-x-4">
                {[
                  { icon: <Twitter size={20} />, href: "#", label: "微博" },
                  { icon: <Linkedin size={20} />, href: "#", label: "领英" },
                  { icon: <Instagram size={20} />, href: "#", label: "小红书" },
                  { icon: <MessageCircle size={20} />, href: "#", label: "微信群" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-octopoda-coral transition-colors duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-octopoda-coral">
                AI成长伙伴
              </h4>
              <ul className="space-y-3">
                {[
                  "职场成长导师",
                  "心理健康伙伴", 
                  "亲子家庭专家",
                  "我的男友",
                  "我的女友",
                  "成长日记工具",
                  "共创内容平台"
                ].map((item, i) => (
                  <li key={i}>
                    <a 
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-octopoda-coral">
                帮助支持
              </h4>
              <ul className="space-y-3">
                {[
                  "帮助中心",
                  "快速入门",
                  "隐私指南",
                  "社区论坛", 
                  "联系客服",
                  "问题反馈",
                  "功能建议"
                ].map((item, i) => (
                  <li key={i}>
                    <a 
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-octopoda-coral">
                关于公司
              </h4>
              <ul className="space-y-3">
                {[
                  "关于我们",
                  "公司使命",
                  "隐私政策",
                  "服务条款",
                  "安全承诺",
                  "加入我们",
                  "媒体资料"
                ].map((item, i) => (
                  <li key={i}>
                    <a 
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <span>© 2024 Octopada.io. 保留所有权利。</span>
              <div className="hidden md:flex items-center space-x-4">
                <Shield size={16} className="text-octopoda-sage" />
                <span>隐私优先保证</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>用</span>
              <Heart size={16} className="text-octopoda-coral" />
              <span>为有意义的成长而创造</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AIKOLCarouselUpdated />
      <FeaturesSection />
      <KOLSectionUpdated />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default OctopodaFinal;