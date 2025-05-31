import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Crown, Star, Zap, Shield, Users, Gift, Check, Lock } from 'lucide-react';

const SubscriptionManager = () => {
  const [currentPlan, setCurrentPlan] = useState('free');
  const [userStats, setUserStats] = useState({
    charactersUsed: 1,
    totalChats: 0,
    subscriptionExpires: null
  });

  const subscriptionPlans = {
    free: {
      name: '体验版',
      price: 0,
      period: '永久免费',
      icon: Gift,
      color: 'from-gray-400 to-gray-600',
      features: [
        '1个AI角色同时互动',
        '基础角色自定义',
        '简单聊天模式',
        '每日20条消息限制',
        '基础情感识别',
        '显示广告'
      ],
      limits: {
        concurrent_characters: 1,
        daily_messages: 20,
        custom_characters: 0,
        premium_scenarios: false,
        mature_mode: false,
        priority_support: false
      }
    },
    basic: {
      name: '成长版',
      price: 29,
      period: '每月',
      icon: Star,
      color: 'from-blue-400 to-blue-600',
      popular: true,
      features: [
        '3个AI角色同时互动',
        '进阶角色自定义',
        '所有聊天模式',
        '无限消息数量',
        '高级情感识别',
        '无广告体验',
        '专属场景解锁',
        '语音合成功能'
      ],
      limits: {
        concurrent_characters: 3,
        daily_messages: -1,
        custom_characters: 2,
        premium_scenarios: true,
        mature_mode: true,
        priority_support: false
      }
    },
    premium: {
      name: '专业版',
      price: 99,
      period: '每月',
      icon: Crown,
      color: 'from-purple-400 to-purple-600',
      features: [
        '10个AI角色同时互动',
        '完全自定义角色',
        '所有聊天模式',
        '无限消息数量',
        'AI情感深度分析',
        '无广告体验',
        '所有专属场景',
        '语音合成功能',
        '专属剧情线',
        '个性化成长报告',
        '优先客服支持'
      ],
      limits: {
        concurrent_characters: 10,
        daily_messages: -1,
        custom_characters: 10,
        premium_scenarios: true,
        mature_mode: true,
        priority_support: true,
        custom_scenarios: true,
        advanced_ai: true
      }
    },
    vip: {
      name: '至尊版',
      price: 199,
      period: '每月',
      icon: Zap,
      color: 'from-yellow-400 to-orange-600',
      features: [
        '50个AI角色同时互动',
        '无限角色创建',
        '所有聊天模式',
        '无限消息数量',
        'AI深度情感分析',
        '无广告体验',
        '所有专属场景',
        '语音合成功能',
        '专属剧情线',
        '个性化成长报告',
        '24/7优先客服',
        '测试版功能抢先体验',
        'VIP专属角色',
        '定制化AI训练'
      ],
      limits: {
        concurrent_characters: 50,
        daily_messages: -1,
        custom_characters: -1,
        premium_scenarios: true,
        mature_mode: true,
        priority_support: true,
        custom_scenarios: true,
        advanced_ai: true,
        beta_features: true,
        custom_training: true
      }
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      setCurrentPlan(user.subscription || 'free');
      
      // Load user stats from API
      const token = localStorage.getItem('token');
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/user/stats`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        const stats = await response.json();
        setUserStats(stats);
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

  const getCurrentPlanData = () => subscriptionPlans[currentPlan];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">会员中心</h1>
          <p className="text-white/70 text-lg">选择适合你的计划，解锁更多AI伙伴功能</p>
        </div>

        {/* Current Plan Status */}
        <div className="bg-white/10 border border-white/20 rounded-2xl p-6 mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${getCurrentPlanData().color} flex items-center justify-center`}>
                <div className="w-6 h-6 text-white flex items-center justify-center">
                  {getCurrentPlanData().name.charAt(0)}
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">{getCurrentPlanData().name}</h3>
                <p className="text-white/60">
                  {currentPlan === 'free' ? '免费体验中' : `订阅至 ${userStats.subscriptionExpires || '未知'}`}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-white font-semibold">使用情况</div>
              <div className="text-white/60 text-sm">
                角色: {userStats.charactersUsed}/{getCurrentPlanData().limits.concurrent_characters === -1 ? '无限' : getCurrentPlanData().limits.concurrent_characters}
              </div>
              <div className="text-white/60 text-sm">
                聊天: {userStats.totalChats}条
              </div>
            </div>
          </div>
        </div>

        {/* Subscription Plans */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">订阅计划</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(subscriptionPlans).map(([key, plan]) => {
              const isCurrentPlan = key === currentPlan;
              const PlanIcon = plan.icon;

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`relative bg-white/5 border rounded-2xl p-6 ${
                    plan.popular ? 'border-purple-400 ring-2 ring-purple-400/50' : 'border-white/10'
                  } ${isCurrentPlan ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        最受欢迎
                      </span>
                    </div>
                  )}

                  {isCurrentPlan && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                        <Check className="w-3 h-3" />
                        <span>当前计划</span>
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                      <PlanIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold text-white mb-1">
                      ¥{plan.price}
                      {plan.price > 0 && <span className="text-lg text-white/60">/{plan.period}</span>}
                    </div>
                    {plan.price === 0 && <div className="text-purple-300 text-sm">{plan.period}</div>}
                  </div>

                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {!isCurrentPlan && (
                    <button
                      className={`w-full py-3 rounded-lg font-semibold transition-all ${
                        plan.price === 0
                          ? 'bg-white/10 text-white/70 cursor-not-allowed'
                          : `bg-gradient-to-r ${plan.color} text-white hover:shadow-lg`
                      }`}
                      disabled={plan.price === 0}
                    >
                      {plan.price === 0 ? '当前版本' : '立即订阅'}
                    </button>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Features Comparison */}
        <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">功能对比</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-white">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4">功能</th>
                  <th className="text-center py-4">体验版</th>
                  <th className="text-center py-4">成长版</th>
                  <th className="text-center py-4">专业版</th>
                  <th className="text-center py-4">至尊版</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-white/10">
                  <td className="py-4">同时互动角色数</td>
                  <td className="text-center py-4">1个</td>
                  <td className="text-center py-4">3个</td>
                  <td className="text-center py-4">10个</td>
                  <td className="text-center py-4">50个</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4">自定义角色</td>
                  <td className="text-center py-4"><Lock className="w-4 h-4 mx-auto text-red-400" /></td>
                  <td className="text-center py-4">2个</td>
                  <td className="text-center py-4">10个</td>
                  <td className="text-center py-4">无限</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4">刺激模式</td>
                  <td className="text-center py-4"><Lock className="w-4 h-4 mx-auto text-red-400" /></td>
                  <td className="text-center py-4"><Check className="w-4 h-4 mx-auto text-green-400" /></td>
                  <td className="text-center py-4"><Check className="w-4 h-4 mx-auto text-green-400" /></td>
                  <td className="text-center py-4"><Check className="w-4 h-4 mx-auto text-green-400" /></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4">专属场景</td>
                  <td className="text-center py-4"><Lock className="w-4 h-4 mx-auto text-red-400" /></td>
                  <td className="text-center py-4">部分</td>
                  <td className="text-center py-4">全部</td>
                  <td className="text-center py-4">全部加定制</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionManager;