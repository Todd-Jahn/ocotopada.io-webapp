import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Edit3, 
  Camera, 
  Bell, 
  Shield, 
  Globe, 
  Smartphone,
  Download,
  Trash2,
  Crown,
  Settings,
  User,
  Mail,
  Phone
} from 'lucide-react';
import { AppContext } from '../../App';

const ProfilePage = () => {
  const { user, setUser, logout } = useContext(AppContext);
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    bio: user?.bio || 'Exploring AI companionship and personal growth'
  });
  const [notifications, setNotifications] = useState({
    messages: true,
    updates: true,
    marketing: false,
    push: true
  });

  const handleSave = () => {
    const updatedUser = { ...user, ...formData };
    localStorage.setItem('octopada_user', JSON.stringify(updatedUser));
    setUser(updatedUser);
    setIsEditing(false);
  };

  const handleNotificationChange = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const tabs = [
    { id: 'profile', name: 'Profile', icon: <User className="h-5 w-5" /> },
    { id: 'subscription', name: 'Subscription', icon: <Crown className="h-5 w-5" /> },
    { id: 'notifications', name: 'Notifications', icon: <Bell className="h-5 w-5" /> },
    { id: 'privacy', name: 'Privacy', icon: <Shield className="h-5 w-5" /> },
    { id: 'settings', name: 'Settings', icon: <Settings className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3 text-purple-300 hover:text-white transition-colors">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                <span className="text-sm">🐙</span>
              </div>
              <h1 className="text-xl font-bold">Octopada.io</h1>
            </Link>
            <div className="flex items-center space-x-4">
              <span className="text-purple-300 text-sm">个人资料与设置</span>
              <button
                onClick={logout}
                className="text-purple-300 hover:text-white px-4 py-2 border border-purple-300 rounded-lg"
              >
                退出
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <img
                    src={user?.avatar || 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'}
                    alt={user?.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <button className="absolute bottom-0 right-0 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white">
                    <Camera className="h-3 w-3" />
                  </button>
                </div>
                <h3 className="text-xl font-bold text-white mt-4">{user?.name}</h3>
                <p className="text-purple-300 capitalize">{user?.subscription || 'free'} member</p>
              </div>

              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                      activeTab === tab.id
                        ? 'bg-purple-500 text-white'
                        : 'text-purple-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-white">Profile Information</h2>
                    <button
                      onClick={() => setIsEditing(!isEditing)}
                      className="flex items-center space-x-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                    >
                      <Edit3 className="h-4 w-4" />
                      <span>{isEditing ? 'Cancel' : 'Edit'}</span>
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-medium mb-2">Full Name</label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400"
                          />
                        ) : (
                          <div className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white">
                            {user?.name}
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-white font-medium mb-2">Email Address</label>
                        {isEditing ? (
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400"
                          />
                        ) : (
                          <div className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white">
                            {user?.email}
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-white font-medium mb-2">Phone Number</label>
                        {isEditing ? (
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400"
                          />
                        ) : (
                          <div className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white">
                            {formData.phone || 'Not provided'}
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-white font-medium mb-2">Member Since</label>
                        <div className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white">
                          January 2024
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Bio</label>
                      {isEditing ? (
                        <textarea
                          value={formData.bio}
                          onChange={(e) => setFormData({...formData, bio: e.target.value})}
                          rows="4"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400 resize-none"
                        />
                      ) : (
                        <div className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white">
                          {formData.bio}
                        </div>
                      )}
                    </div>

                    {isEditing && (
                      <div className="flex justify-end space-x-4">
                        <button
                          onClick={() => setIsEditing(false)}
                          className="px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSave}
                          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold"
                        >
                          Save Changes
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Subscription Tab */}
              {activeTab === 'subscription' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-8">Subscription Details</h2>
                  
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30 mb-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {user?.subscription === 'premium' ? 'Premium Plan' : 'Free Plan'}
                        </h3>
                        <p className="text-purple-300">
                          {user?.subscription === 'premium' 
                            ? 'Unlimited access to all features' 
                            : 'Limited conversations and features'
                          }
                        </p>
                      </div>
                      <Crown className="h-12 w-12 text-purple-400" />
                    </div>
                    
                    {user?.subscription !== 'premium' && (
                      <Link
                        to="/payment"
                        className="mt-4 inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold"
                      >
                        Upgrade to Premium
                      </Link>
                    )}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">Usage Statistics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white/5 rounded-xl p-4">
                        <p className="text-purple-300 text-sm">Messages This Month</p>
                        <p className="text-2xl font-bold text-white">247</p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4">
                        <p className="text-purple-300 text-sm">Active Companions</p>
                        <p className="text-2xl font-bold text-white">3</p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4">
                        <p className="text-purple-300 text-sm">Hours Engaged</p>
                        <p className="text-2xl font-bold text-white">12.5</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === 'notifications' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-8">Notification Preferences</h2>
                  
                  <div className="space-y-6">
                    {[
                      { key: 'messages', label: 'New Messages', description: 'Get notified when companions send you messages' },
                      { key: 'updates', label: 'App Updates', description: 'Notifications about new features and improvements' },
                      { key: 'marketing', label: 'Marketing Communications', description: 'Promotional emails and special offers' },
                      { key: 'push', label: 'Push Notifications', description: 'Real-time notifications on your device' }
                    ].map((item) => (
                      <div key={item.key} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                        <div>
                          <h3 className="text-white font-medium">{item.label}</h3>
                          <p className="text-purple-300 text-sm">{item.description}</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notifications[item.key]}
                            onChange={() => handleNotificationChange(item.key)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Privacy Tab */}
              {activeTab === 'privacy' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-8">Privacy & Security</h2>
                  
                  <div className="space-y-6">
                    <div className="p-6 bg-white/5 rounded-xl">
                      <h3 className="text-xl font-semibold text-white mb-4">Data & Privacy</h3>
                      <div className="space-y-4">
                        <button className="w-full flex items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                          <div className="flex items-center space-x-3">
                            <Download className="h-5 w-5 text-purple-400" />
                            <span className="text-white">Export My Data</span>
                          </div>
                          <span className="text-purple-300">→</span>
                        </button>
                        
                        <button className="w-full flex items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                          <div className="flex items-center space-x-3">
                            <Trash2 className="h-5 w-5 text-red-400" />
                            <span className="text-white">Delete Account</span>
                          </div>
                          <span className="text-purple-300">→</span>
                        </button>
                      </div>
                    </div>

                    <div className="p-6 bg-white/5 rounded-xl">
                      <h3 className="text-xl font-semibold text-white mb-4">Security</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-white">Two-Factor Authentication</span>
                          <button className="text-purple-400 hover:text-purple-300">Enable</button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white">Change Password</span>
                          <button className="text-purple-400 hover:text-purple-300">Update</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-8">App Settings</h2>
                  
                  <div className="space-y-6">
                    <div className="p-6 bg-white/5 rounded-xl">
                      <h3 className="text-xl font-semibold text-white mb-4">Preferences</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-white">Language</span>
                          <select className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white">
                            <option value="en">English</option>
                            <option value="zh">中文</option>
                            <option value="es">Español</option>
                          </select>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white">Theme</span>
                          <select className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white">
                            <option value="dark">Dark</option>
                            <option value="light">Light</option>
                            <option value="auto">Auto</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-white/5 rounded-xl">
                      <h3 className="text-xl font-semibold text-white mb-4">Support</h3>
                      <div className="space-y-3">
                        <button className="w-full text-left text-purple-400 hover:text-purple-300">
                          Help Center
                        </button>
                        <button className="w-full text-left text-purple-400 hover:text-purple-300">
                          Contact Support
                        </button>
                        <button className="w-full text-left text-purple-400 hover:text-purple-300">
                          Report a Bug
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;