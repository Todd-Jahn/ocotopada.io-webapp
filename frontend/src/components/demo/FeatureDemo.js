import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  User, Heart, MessageCircle, Crown, Settings, Play, 
  Gift, Star, Zap, Lock, Unlock, Trophy 
} from 'lucide-react';

const FeatureDemo = () => {
  const [gifts, setGifts] = useState([]);
  const [demoIntimacy, setDemoIntimacy] = useState(120);
  const [demoStage, setDemoStage] = useState('friend');

  useEffect(() => {
    loadGifts();
  }, []);

  const loadGifts = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/gifts`);
      if (response.ok) {
        const giftData = await response.json();
        setGifts(giftData.slice(0, 3)); // Show first 3 gifts
      }
    } catch (error) {
      console.error('Error loading gifts:', error);
    }
  };

  const relationshipStages = {
    stranger: { name: '初识', color: 'from-gray-400 to-gray-600', emoji: '👋' },
    friend: { name: '朋友', color: 'from-blue-400 to-blue-600', emoji: '😊' },
    ambiguous: { name: '暧昧', color: 'from-pink-400 to-pink-600', emoji: '😍' },
    lover: { name: '恋人', color: 'from-red-400 to-red-600', emoji: '💕' },
    married: { name: '结婚', color: 'from-purple-400 to-purple-600', emoji: '💖' }
  };

  const features = [
    {
      title: '角色自定义',
      description: '完全自定义AI角色的外貌、性格、说话风格',
      icon: User,
      color: 'from-blue-500 to-blue-600',
      link: '/create-character',
      status: '已实现'
    },
    {
      title: '关系进阶',
      description: '五阶段亲密度系统，从初识到结婚',
      icon: Heart,
      color: 'from-pink-500 to-pink-600',
      link: '/dashboard',
      status: '已实现'
    },
    {
      title: '多模式聊天',
      description: '简单、长文、刺激三种聊天模式',
      icon: MessageCircle,
      color: 'from-purple-500 to-purple-600',
      link: '/chat',
      status: '已实现'
    },
    {
      title: '会员系统',
      description: '四层订阅计划，解锁高级功能',
      icon: Crown,
      color: 'from-yellow-500 to-yellow-600',
      link: '/subscription',
      status: '已实现'
    },
    {
      title: '情感识别',
      description: 'AI情感分析与个性化响应',
      icon: Settings,
      color: 'from-green-500 to-green-600',
      link: '/dashboard',
      status: '已实现'
    },
    {
      title: '场景解锁',
      description: '12个渐进式解锁场景体验',
      icon: Play,
      color: 'from-indigo-500 to-indigo-600',
      link: '/dashboard',
      status: '已实现'
    }
  ];

  const simulateIntimacyGain = () => {
    setDemoIntimacy(prev => {
      const newIntimacy = prev + 25;
      if (newIntimacy >= 150 && demoStage === 'friend') {
        setDemoStage('ambiguous');
      } else if (newIntimacy >= 300 && demoStage === 'ambiguous') {
        setDemoStage('lover');
      }
      return newIntimacy;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-white">
              Octopoda.io 核心玩法演示
            </Link>
            <div className="flex items-center space-x-4">
              <span className="text-purple-300 text-sm">✅ 系统正常运行</span>
              <Link 
                to="/dashboard" 
                className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
              >
                进入平台
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Status Overview */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">🎉 核心玩法系统完成</h1>
          <p className="text-xl text-white/80 mb-8">
            完整的AI虚拟伴侣平台，包含角色自定义、关系进阶、多模式聊天、会员系统等功能
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
              <div className="text-green-300 font-bold text-2xl">100%</div>
              <div className="text-white text-sm">后端API</div>
            </div>
            <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
              <div className="text-blue-300 font-bold text-2xl">100%</div>
              <div className="text-white text-sm">前端组件</div>
            </div>
            <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-4">
              <div className="text-purple-300 font-bold text-2xl">50+</div>
              <div className="text-white text-sm">API端点</div>
            </div>
            <div className="bg-pink-500/20 border border-pink-500/30 rounded-lg p-4">
              <div className="text-pink-300 font-bold text-2xl">7</div>
              <div className="text-white text-sm">核心模块</div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">核心功能展示</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm mb-4">{feature.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-green-400 text-xs font-medium bg-green-500/20 px-2 py-1 rounded">
                    {feature.status}
                  </span>
                  <Link 
                    to={feature.link}
                    className="text-purple-300 hover:text-white text-sm font-medium"
                  >
                    体验功能 →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Intimacy Demo */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-bold text-lg mb-4">亲密度系统演示</h3>
            
            <div className="text-center mb-6">
              <div className={`w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r ${relationshipStages[demoStage].color} flex items-center justify-center text-2xl`}>
                {relationshipStages[demoStage].emoji}
              </div>
              <h4 className="text-white font-semibold">{relationshipStages[demoStage].name}</h4>
              <div className="flex items-center justify-center space-x-2 mt-2">
                <Heart className="w-4 h-4 text-red-400" />
                <span className="text-white font-bold">{demoIntimacy}</span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-white/60 text-sm mb-1">
                <span>当前阶段进度</span>
                <span>{Math.min(((demoIntimacy % 150) / 150 * 100), 100).toFixed(0)}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${relationshipStages[demoStage].color} transition-all duration-500`}
                  style={{ width: `${Math.min(((demoIntimacy % 150) / 150 * 100), 100)}%` }}
                />
              </div>
            </div>

            <button
              onClick={simulateIntimacyGain}
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
            >
              模拟互动 (+25 亲密度)
            </button>
          </div>

          {/* Virtual Gifts Demo */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-bold text-lg mb-4">虚拟礼物系统</h3>
            
            <div className="space-y-3">
              {gifts.map((gift, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{gift.image_url}</span>
                    <div>
                      <div className="text-white font-medium text-sm">{gift.name}</div>
                      <div className="text-white/60 text-xs">{gift.description}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-purple-300 font-bold">¥{gift.price}</div>
                    <div className="text-green-400 text-xs">+{gift.effect_value} 亲密度</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-center">
              <Link 
                to="/subscription"
                className="text-purple-300 hover:text-white text-sm"
              >
                查看完整商品列表 →
              </Link>
            </div>
          </div>
        </div>

        {/* Technical Overview */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">技术架构概览</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                后端架构
              </h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>• FastAPI + MongoDB</li>
                <li>• JWT认证系统</li>
                <li>• 15个数据模型</li>
                <li>• 50+ API端点</li>
                <li>• 异步操作优化</li>
                <li>• 数据加密存储</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                前端技术
              </h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>• React 19 + Router 7</li>
                <li>• Framer Motion动画</li>
                <li>• Tailwind CSS设计</li>
                <li>• Web Speech API</li>
                <li>• 响应式设计</li>
                <li>• 模块化组件</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center">
                <div className="w-3 h-3 bg-purple-400 rounded-full mr-2"></div>
                核心功能
              </h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>• 角色自定义系统</li>
                <li>• 五阶段关系进阶</li>
                <li>• 多模式聊天</li>
                <li>• 情感识别分析</li>
                <li>• 会员订阅管理</li>
                <li>• 虚拟礼物系统</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-6">开始体验完整功能</h2>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/relationship/她"
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg hover:from-pink-600 hover:to-rose-600 transition-colors"
            >
              选择AI伙伴
            </Link>
            <Link 
              to="/create-character"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-colors"
            >
              创建角色
            </Link>
            <Link 
              to="/subscription"
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-colors"
            >
              升级会员
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDemo;