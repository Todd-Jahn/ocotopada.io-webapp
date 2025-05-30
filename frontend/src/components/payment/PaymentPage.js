import React, { useState, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Crown, 
  Check, 
  ArrowLeft, 
  CreditCard, 
  Smartphone,
  Globe,
  Star,
  Zap,
  Shield,
  Users
} from 'lucide-react';
import { AppContext } from '../../App';

const PaymentPage = ({ success, cancel }) => {
  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedPlan, setSelectedPlan] = useState('growth');
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('stripe');

  // Check for successful payment return
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const sessionId = urlParams.get('session_id');
    
    if (sessionId) {
      // Poll payment status
      pollPaymentStatus(sessionId);
    }
  }, [location]);

  const plans = [
    {
      id: 'trial',
      name: '体验版',
      price: 0,
      currency: 'CNY',
      period: '永久免费',
      stripeId: 'price_trial_free',
      features: [
        '基础AI伙伴体验',
        '每日3次对话',
        '标准回复速度',
        '基础个性化',
        '社区功能访问',
        '基础情感分析'
      ],
      popular: false
    },
    {
      id: 'growth',
      name: '成长版',
      price: 29,
      currency: 'CNY',
      period: '月',
      stripeId: 'price_growth_monthly',
      features: [
        '无限AI对话',
        '个性化深度交流',
        '优先回复速度',
        '情感记忆功能',
        '专属成长报告',
        '多场景切换'
      ],
      popular: true
    },
    {
      id: 'professional',
      name: '专业版',
      price: 99,
      currency: 'CNY',
      period: '月',
      stripeId: 'price_professional_monthly',
      features: [
        '全部成长版功能',
        '6位AI伙伴同时在线',
        '专业心理分析',
        '定制化人格塑造',
        'VIP客服支持',
        '数据导出功能'
      ],
      popular: false
    }
  ];

  const paymentMethods = [
    {
      id: 'stripe',
      name: 'International Cards',
      description: 'Visa, Mastercard, PayPal',
      icon: <CreditCard className="h-6 w-6" />,
      region: 'global'
    },
    {
      id: 'wechat',
      name: 'WeChat Pay',
      description: '微信支付',
      icon: <Smartphone className="h-6 w-6" />,
      region: 'china'
    },
    {
      id: 'alipay',
      name: 'Alipay',
      description: '支付宝',
      icon: <Globe className="h-6 w-6" />,
      region: 'china'
    }
  ];

  const pollPaymentStatus = async (sessionId, attempts = 0) => {
    const maxAttempts = 5;
    const pollInterval = 2000;

    if (attempts >= maxAttempts) {
      setLoading(false);
      return;
    }

    try {
      // In real implementation, call your backend API
      // const response = await fetch(`/api/payments/v1/checkout/status/${sessionId}`);
      // const data = await response.json();
      
      // Mock successful payment after a delay
      setTimeout(() => {
        // Update user subscription
        const updatedUser = {
          ...user,
          subscription: 'premium',
          subscriptionPlan: selectedPlan,
          subscriptionExpiry: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
        };
        
        localStorage.setItem('octopada_user', JSON.stringify(updatedUser));
        setUser(updatedUser);
        setLoading(false);
        
        // Show success state
      }, 2000);
    } catch (error) {
      console.error('Error checking payment status:', error);
      setLoading(false);
    }
  };

  const handlePayment = async () => {
    setLoading(true);
    
    try {
      const plan = plans.find(p => p.id === selectedPlan);
      const currentUrl = window.location.origin;
      
      const requestBody = {
        stripe_price_id: plan.stripeId,
        quantity: 1,
        success_url: `${currentUrl}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${currentUrl}/payment/cancel`,
        metadata: {
          user_id: user.id,
          plan: selectedPlan,
          source: 'web_payment'
        }
      };

      // In real implementation, call your backend API
      // const response = await fetch('/api/payments/v1/checkout/session', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(requestBody)
      // });
      // const data = await response.json();
      // window.location.href = data.url;
      
      // Mock redirect to payment
      setTimeout(() => {
        pollPaymentStatus('mock_session_id');
      }, 1000);
      
    } catch (error) {
      console.error('Payment failed:', error);
      setLoading(false);
    }
  };

  // Success state
  if (success || (user?.subscription === 'premium' && loading === false)) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-md mx-auto p-8"
        >
          <div className="w-24 h-24 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-8">
            <Check className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Welcome to Premium!</h1>
          <p className="text-purple-300 mb-8">
            Your payment was successful. Enjoy unlimited access to all AI companions and features.
          </p>
          <Link
            to="/dashboard"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold"
          >
            Start Exploring
          </Link>
        </motion.div>
      </div>
    );
  }

  // Cancel state
  if (cancel) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-md mx-auto p-8"
        >
          <div className="w-24 h-24 mx-auto bg-red-500 rounded-full flex items-center justify-center mb-8">
            <ArrowLeft className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Payment Cancelled</h1>
          <p className="text-purple-300 mb-8">
            No worries! You can try upgrading again anytime.
          </p>
          <div className="space-y-4">
            <Link
              to="/payment"
              className="block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold"
            >
              Try Again
            </Link>
            <Link
              to="/dashboard"
              className="block px-8 py-3 bg-white/10 text-white rounded-xl"
            >
              Back to Dashboard
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3 text-purple-300 hover:text-white transition-colors">
              <img 
                src="https://i.postimg.cc/JyGjXXrb/Image-from-Gamma-App.jpg" 
                alt="Octopada.io Logo"
                className="w-8 h-8 rounded-lg object-cover"
              />
              <h1 className="text-xl font-bold">Octopada.io</h1>
            </Link>
            <div className="flex items-center space-x-2 text-purple-300">
              <span className="text-sm">升级至高级版</span>
              <Crown className="h-6 w-6" />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            解锁完整的 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">AI体验</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-purple-300 max-w-3xl mx-auto"
          >
            获得对所有AI伙伴、高级功能和个性化体验的无限访问权限
          </motion.p>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedPlan(plan.id)}
              className={`relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 cursor-pointer transition-all ${
                selectedPlan === plan.id
                  ? 'border-purple-400 bg-white/20'
                  : 'border-white/20 hover:border-purple-300'
              } ${plan.popular ? 'ring-2 ring-purple-400' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    最受欢迎
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-3">{plan.name}</h3>
                <div className="flex items-baseline justify-center space-x-1">
                  <span className="text-2xl font-bold text-white">¥{plan.price}</span>
                  <span className="text-white/60 text-sm">/{plan.period}</span>
                </div>
                {plan.originalPrice && (
                  <div className="text-center mt-1">
                    <span className="text-sm text-purple-300 line-through">
                      ¥{plan.originalPrice}
                    </span>
                  </div>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-purple-300">
                    <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {selectedPlan === plan.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-4 right-4 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center"
                >
                  <Check className="h-4 w-4 text-white" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="max-w-2xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">选择支付方式</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {paymentMethods.map((method) => (
              <motion.div
                key={method.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => setPaymentMethod(method.id)}
                className={`p-6 bg-white/10 backdrop-blur-lg rounded-2xl border-2 cursor-pointer transition-all ${
                  paymentMethod === method.id
                    ? 'border-purple-400 bg-white/20'
                    : 'border-white/20 hover:border-purple-300'
                }`}
              >
                <div className="text-center">
                  <div className="text-purple-400 mb-3 flex justify-center">
                    {method.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-1">{method.name}</h4>
                  <p className="text-purple-300 text-sm">{method.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Payment Button */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePayment}
            disabled={loading}
            className="px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex items-center">
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                Processing Payment...
              </div>
            ) : (
              <>
                <Crown className="h-6 w-6 mr-3 inline" />
                升级至高级版
              </>
            )}
          </motion.button>

          <p className="text-purple-300 text-sm mt-4">
            安全支付由 Stripe 提供支持。随时可取消。
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {[
            {
              icon: <Zap className="h-8 w-8" />,
              title: '无限访问',
              description: '与所有AI伙伴无限制聊天'
            },
            {
              icon: <Star className="h-8 w-8" />,
              title: '高级功能',
              description: '先进的AI模型和能力'
            },
            {
              icon: <Shield className="h-8 w-8" />,
              title: '优先支持',
              description: '24/7专属客户支持'
            },
            {
              icon: <Users className="h-8 w-8" />,
              title: '独家内容',
              description: '访问高级伙伴和功能'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-purple-400 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-purple-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;