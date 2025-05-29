import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  User, 
  Crown, 
  Settings, 
  Bell, 
  Search,
  Plus,
  Star,
  Clock,
  Calendar
} from 'lucide-react';
import { AppContext } from '../App';

const Dashboard = () => {
  const { user, logout } = useContext(AppContext);
  const [recentChats, setRecentChats] = useState([]);
  const [companions, setCompanions] = useState([]);

  useEffect(() => {
    // Mock data for recent chats and companions
    setRecentChats([
      {
        id: 1,
        companion: '洛可 LoCo',
        lastMessage: '对您的职业目标有了很好的见解！继续努力前进。',
        timestamp: '2分钟前',
        avatar: 'https://images.unsplash.com/photo-1748436826061-a84fbf7c40ff?w=800&h=800&fit=crop&crop=face',
        unread: 2
      },
      {
        id: 2,
        companion: '千奈',
        lastMessage: '记得练习我们讨论过的正念技巧。',
        timestamp: '1小时前',
        avatar: 'https://images.unsplash.com/photo-1748436889517-bc4b8e0c5eb3?w=800&h=800&fit=crop&crop=face',
        unread: 0
      },
      {
        id: 3,
        companion: 'Suki 苏奇',
        lastMessage: '您的创意项目进展得很顺利！',
        timestamp: '3小时前',
        avatar: 'https://images.unsplash.com/photo-1748436826195-8b4e78b9de8f?w=800&h=800&fit=crop&crop=face',
        unread: 1
      }
    ]);

    setCompanions([
      {
        id: 1,
        name: '洛可 LoCo',
        type: '职业导师',
        avatar: 'https://images.unsplash.com/photo-1748436826061-a84fbf7c40ff?w=800&h=800&fit=crop&crop=face',
        rating: 4.9,
        specialties: ['领导力', '技术职业', '工作生活平衡']
      },
      {
        id: 2,
        name: '千奈',
        type: '健康向导',
        avatar: 'https://images.unsplash.com/photo-1748436889517-bc4b8e0c5eb3?w=800&h=800&fit=crop&crop=face',
        rating: 4.8,
        specialties: ['正念', '压力管理', '健身']
      },
      {
        id: 3,
        name: 'Suki 苏奇',
        type: '创意催化剂',
        avatar: 'https://images.unsplash.com/photo-1748436826195-8b4e78b9de8f?w=800&h=800&fit=crop&crop=face',
        rating: 4.9,
        specialties: ['艺术指导', '创新', '设计思维']
      }
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center mr-3">
                <span className="text-sm">🐙</span>
              </div>
              <h1 className="text-xl font-bold text-white">Octopada.io</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-purple-300" />
                <input
                  type="text"
                  placeholder="搜索伙伴..."
                  className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 w-64"
                />
              </div>
              
              <button className="relative p-2 text-purple-300 hover:text-white">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-pink-500 rounded-full"></span>
              </button>

              <div className="flex items-center space-x-3">
                <img
                  src={user?.avatar || 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'}
                  alt={user?.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-white font-medium">{user?.name}</span>
                <button
                  onClick={logout}
                  className="text-purple-300 hover:text-white text-sm"
                >
                  退出
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Recent Chats */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">最近对话</h2>
              <Link
                to="/chat"
                className="flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
              >
                <Plus className="h-4 w-4 mr-2" />
                新对话
              </Link>
            </div>

            <div className="space-y-4">
              {recentChats.map((chat) => (
                <motion.div
                  key={chat.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 cursor-pointer"
                >
                  <Link to={`/chat/${chat.id}`}>
                    <div className="flex items-start space-x-4">
                      <img
                        src={chat.avatar}
                        alt={chat.companion}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <h3 className="text-white font-semibold">{chat.companion}</h3>
                          <div className="flex items-center space-x-2">
                            <span className="text-purple-300 text-sm">{chat.timestamp}</span>
                            {chat.unread > 0 && (
                              <span className="bg-pink-500 text-white text-xs rounded-full px-2 py-1">
                                {chat.unread}
                              </span>
                            )}
                          </div>
                        </div>
                        <p className="text-purple-300 text-sm mt-1 truncate">{chat.lastMessage}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Quick Actions & Companions */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">快捷操作</h3>
              <div className="space-y-3">
                <Link
                  to="/avatar"
                  className="flex items-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <User className="h-5 w-5 text-purple-400 mr-3" />
                  <span className="text-white">创建头像</span>
                </Link>
                <Link
                  to="/payment"
                  className="flex items-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Crown className="h-5 w-5 text-purple-400 mr-3" />
                  <span className="text-white">升级方案</span>
                </Link>
                <Link
                  to="/profile"
                  className="flex items-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Settings className="h-5 w-5 text-purple-400 mr-3" />
                  <span className="text-white">设置</span>
                </Link>
              </div>
            </div>

            {/* Subscription Status */}
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">订阅状态</h3>
                <Crown className="h-6 w-6 text-purple-400" />
              </div>
              <p className="text-purple-300 capitalize">{user?.subscription === 'free' ? '免费' : '高级'} 方案</p>
              <p className="text-white text-sm mt-2">
                {user?.subscription === 'free' 
                  ? '升级以解锁无限对话' 
                  : '正在享受高级功能'
                }
              </p>
              {user?.subscription === 'free' && (
                <Link
                  to="/payment"
                  className="mt-4 block w-full text-center py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                >
                  立即升级
                </Link>
              )}
            </div>

            {/* Top Companions */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">您的伙伴</h3>
              <div className="space-y-4">
                {companions.slice(0, 3).map((companion) => (
                  <div key={companion.id} className="flex items-center space-x-3">
                    <img
                      src={companion.avatar}
                      alt={companion.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium text-sm">{companion.name}</p>
                      <p className="text-purple-300 text-xs">{companion.type}</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-400 mr-1" />
                      <span className="text-yellow-400 text-xs">{companion.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/chat"
                className="mt-4 block w-full text-center py-2 bg-white/10 text-purple-300 rounded-lg hover:bg-white/20 transition-colors"
              >
                查看全部
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;