import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, User, Smartphone, ArrowLeft } from 'lucide-react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';

const AuthPage = () => {
  const { setUser } = useContext(AppContext);
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call - replace with actual authentication
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock user data
      const userData = {
        id: '1',
        name: formData.name || formData.email.split('@')[0] || 'New User',
        email: formData.email || 'user@octopada.io',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
        subscription: 'free',
        hasCustomAvatar: false
      };

      // Store in localStorage (replace with secure token storage)
      localStorage.setItem('octopada_token', 'mock_jwt_token');
      localStorage.setItem('octopada_user', JSON.stringify(userData));
      
      setUser(userData);
    } catch (error) {
      console.error('Authentication failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Social login with ${provider}`);
    // Implement social login logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      {/* Return Button */}
      <Link to="/" className="absolute top-6 left-6 text-purple-300 hover:text-white transition-colors">
        <ArrowLeft className="h-6 w-6" />
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mb-4">
            <span className="text-2xl">🐙</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Octopada.io</h1>
          <p className="text-purple-300">您的AI伙伴在等待</p>
        </div>

        {/* Auth Form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
          <div className="flex mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 text-center rounded-xl transition-all ${
                isLogin ? 'bg-purple-500 text-white' : 'text-purple-300 hover:text-white'
              }`}
            >
              登录
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 text-center rounded-xl transition-all ${
                !isLogin ? 'bg-purple-500 text-white' : 'text-purple-300 hover:text-white'
              }`}
            >
              注册
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-purple-300" />
                <input
                  type="text"
                  name="name"
                  placeholder="姓名"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
                  required={!isLogin}
                />
              </div>
            )}

            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-purple-300" />
              <input
                type="email"
                name="email"
                placeholder="邮箱地址"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
                required
              />
            </div>

            {!isLogin && (
              <div className="relative">
                <Smartphone className="absolute left-3 top-3 h-5 w-5 text-purple-300" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="手机号码（可选）"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
                />
              </div>
            )}

            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-purple-300" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="密码"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-purple-300 hover:text-white"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  {isLogin ? '登录中...' : '创建账户中...'}
                </div>
              ) : (
                isLogin ? '登录' : '创建账户'
              )}
            </motion.button>
          </form>

          {/* Social Login */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-purple-300">或者使用</span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {['谷歌', '微信', '苹果'].map((provider) => (
                <button
                  key={provider}
                  onClick={() => handleSocialLogin(provider)}
                  className="w-full py-3 px-4 border border-white/20 rounded-xl text-purple-300 hover:text-white hover:border-purple-400 transition-all"
                >
                  {provider}
                </button>
              ))}
            </div>
          </div>

          {isLogin && (
            <div className="mt-4 text-center">
              <a href="#" className="text-purple-300 hover:text-white text-sm">
                忘记密码？
              </a>
            </div>
          )}
        </div>

        {/* Terms */}
        <p className="text-center text-purple-300 text-sm mt-6">
          继续即表示您同意我们的{' '}
          <a href="#" className="text-purple-400 hover:underline">服务条款</a>{' '}
          和{' '}
          <a href="#" className="text-purple-400 hover:underline">隐私政策</a>
        </p>
      </motion.div>
    </div>
  );
};

export default AuthPage;