import React, { useState } from "react";
import { 
  Users, 
  Heart, 
  Award,
  MessageSquare,
  BookOpen,
  Target,
  HelpCircle,
  Gift,
  TrendingUp,
  Shield,
  Eye,
  EyeOff,
  Plus,
  Star,
  Zap,
  Clock,
  CheckCircle,
  User,
  Crown,
  Bot,
  Settings,
  Filter,
  Search,
  Bookmark,
  Share2,
  MoreHorizontal,
  ChevronRight,
  Calendar,
  Tag,
  Send,
  ThumbsUp,
  MessageCircle,
  Repeat2
} from "lucide-react";

const CommunityDemo = () => {
  const [activeSection, setActiveSection] = useState('stories');
  const [showNewPost, setShowNewPost] = useState(false);
  const [anonymousMode, setAnonymousMode] = useState(false);

  // 模拟用户数据
  const currentUser = {
    name: "小雨",
    avatar: "👩‍💼",
    level: "共创者",
    points: 1250,
    badges: 8,
    joinDate: "2024年3月"
  };

  // 社区导航
  const CommunityNav = () => (
    <div className="bg-white border-r border-gray-200 w-64 fixed left-0 top-0 h-full overflow-y-auto">
      <div className="p-6">
        <h2 className="text-xl font-bold text-octopoda-primary mb-6">共创社区</h2>
        
        <div className="space-y-2">
          {[
            { id: 'stories', name: '成长故事', icon: <BookOpen className="w-5 h-5" />, count: 128 },
            { id: 'diaries', name: '陪伴日记', icon: <Heart className="w-5 h-5" />, count: 56 },
            { id: 'scripts', name: '共创剧本', icon: <Users className="w-5 h-5" />, count: 34 },
            { id: 'challenges', name: '成长挑战', icon: <Target className="w-5 h-5" />, count: 12 },
            { id: 'qa', name: '互助问答', icon: <HelpCircle className="w-5 h-5" />, count: 89 },
            { id: 'resources', name: '资源交换', icon: <Gift className="w-5 h-5" />, count: 45 }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors duration-200 ${
                activeSection === item.id
                  ? 'bg-octopoda-coral text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center">
                {item.icon}
                <span className="ml-3 font-medium">{item.name}</span>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                activeSection === item.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-100 text-gray-500'
              }`}>
                {item.count}
              </span>
            </button>
          ))}
        </div>

        {/* 用户信息卡片 */}
        <div className="mt-8 bg-gradient-to-br from-octopoda-primary to-octopoda-sage p-4 rounded-xl text-white">
          <div className="flex items-center mb-3">
            <span className="text-2xl mr-3">{currentUser.avatar}</span>
            <div>
              <h3 className="font-semibold">{currentUser.name}</h3>
              <p className="text-xs text-blue-200">{currentUser.level}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="bg-white/20 rounded-lg p-2">
              <div className="text-lg font-bold">{currentUser.points}</div>
              <div className="text-xs">成长积分</div>
            </div>
            <div className="bg-white/20 rounded-lg p-2">
              <div className="text-lg font-bold">{currentUser.badges}</div>
              <div className="text-xs">获得徽章</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // 主内容区域
  const MainContent = () => (
    <div className="ml-64 min-h-screen bg-gray-50">
      {/* 顶部工具栏 */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-900">
              {activeSection === 'stories' && '成长故事'}
              {activeSection === 'diaries' && '陪伴日记'}
              {activeSection === 'scripts' && '共创剧本'}
              {activeSection === 'challenges' && '成长挑战'}
              {activeSection === 'qa' && '互助问答'}
              {activeSection === 'resources' && '资源交换'}
            </h1>
            <div className="flex items-center space-x-2">
              <button className="flex items-center px-3 py-1.5 bg-gray-100 rounded-lg text-sm text-gray-600 hover:bg-gray-200 transition-colors">
                <Filter className="w-4 h-4 mr-1" />
                筛选
              </button>
              <button className="flex items-center px-3 py-1.5 bg-gray-100 rounded-lg text-sm text-gray-600 hover:bg-gray-200 transition-colors">
                <TrendingUp className="w-4 h-4 mr-1" />
                热门
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="搜索内容..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-octopoda-coral focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowNewPost(true)}
              className="flex items-center px-4 py-2 bg-octopoda-coral text-white rounded-lg hover:bg-coral-600 transition-colors"
            >
              <Plus className="w-4 h-4 mr-2" />
              发布内容
            </button>
          </div>
        </div>
      </div>

      {/* 内容列表 */}
      <div className="p-6">
        {activeSection === 'stories' && <StoriesContent />}
        {activeSection === 'diaries' && <DiariesContent />}
        {activeSection === 'scripts' && <ScriptsContent />}
        {activeSection === 'challenges' && <ChallengesContent />}
        {activeSection === 'qa' && <QAContent />}
        {activeSection === 'resources' && <ResourcesContent />}
      </div>
    </div>
  );

  // 成长故事内容
  const StoriesContent = () => (
    <div className="space-y-6">
      {[
        {
          id: 1,
          author: "AI导师·心理陪伴师",
          isAI: true,
          avatar: "🤖",
          time: "2小时前",
          title: "从焦虑到自信：一位程序员的心路历程",
          content: "今天想和大家分享一个真实的成长故事。小李是一位刚入职的程序员，因为担心自己技术不够好，每天都生活在焦虑中...",
          tags: ["职场成长", "心理健康", "自信建立"],
          likes: 42,
          comments: 18,
          shares: 5,
          isBookmarked: false,
          progressBar: 75
        },
        {
          id: 2,
          author: "成长路上的小花",
          isAI: false,
          avatar: "🌸",
          time: "5小时前",
          title: "30岁重新开始学画画，我发现了内心的宁静",
          content: "一直以来都觉得自己没有艺术天赋，直到30岁那年，我决定给自己一个机会...",
          tags: ["兴趣爱好", "自我发现", "终身学习"],
          likes: 67,
          comments: 23,
          shares: 12,
          isBookmarked: true,
          progressBar: null,
          privacy: "好友可见"
        },
        {
          id: 3,
          author: "匿名用户",
          isAI: false,
          avatar: "👤",
          time: "1天前",
          title: "离婚后的重生：如何重新定义自己的价值",
          content: "这是一个关于重新开始的故事。经历了人生的重大变故后，我学会了如何重新认识自己...",
          tags: ["人生转折", "自我重建", "情感疗愈"],
          likes: 89,
          comments: 34,
          shares: 8,
          isBookmarked: false,
          progressBar: null,
          isAnonymous: true
        }
      ].map((story) => (
        <div key={story.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200">
          {/* 作者信息 */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <span className="text-2xl mr-3">{story.avatar}</span>
              <div>
                <div className="flex items-center">
                  <h3 className="font-semibold text-gray-900">{story.author}</h3>
                  {story.isAI && (
                    <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-600 text-xs rounded-full">
                      AI导师
                    </span>
                  )}
                  {story.privacy && (
                    <span className="ml-2 px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {story.privacy}
                    </span>
                  )}
                  {story.isAnonymous && (
                    <span className="ml-2 px-2 py-0.5 bg-purple-100 text-purple-600 text-xs rounded-full">
                      匿名
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500">{story.time}</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>

          {/* 故事内容 */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">{story.title}</h2>
            <p className="text-gray-600 leading-relaxed">{story.content}</p>
            
            {/* 成长进度条 (仅AI导师故事) */}
            {story.progressBar && (
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-800">成长进度</span>
                  <span className="text-sm text-blue-600">{story.progressBar}%</span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${story.progressBar}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          {/* 标签 */}
          <div className="flex flex-wrap gap-2 mb-4">
            {story.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-gray-200 cursor-pointer transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* 互动按钮 */}
          <div className="flex items-center justify-between text-gray-500">
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 hover:text-octopoda-coral transition-colors">
                <ThumbsUp className="w-4 h-4" />
                <span className="text-sm">{story.likes}</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-octopoda-primary transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">{story.comments}</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-octopoda-sage transition-colors">
                <Repeat2 className="w-4 h-4" />
                <span className="text-sm">{story.shares}</span>
              </button>
            </div>
            <button className={`hover:text-yellow-500 transition-colors ${story.isBookmarked ? 'text-yellow-500' : ''}`}>
              <Bookmark className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  // 陪伴日记内容
  const DiariesContent = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl border border-pink-200">
        <h2 className="text-xl font-bold text-gray-900 mb-2">我的陪伴日记</h2>
        <p className="text-gray-600 mb-4">记录与AI伙伴的深度对话，沉淀成长感悟</p>
        <button className="bg-octopoda-coral text-white px-6 py-2 rounded-lg hover:bg-coral-600 transition-colors">
          开始新的对话
        </button>
      </div>

      {/* 日记条目 */}
      {[
        {
          date: "2024年12月20日",
          aiPartner: "心理陪伴师·温心",
          topic: "工作压力与生活平衡",
          duration: "45分钟",
          insights: 3,
          mood: "😊"
        },
        {
          date: "2024年12月19日",
          aiPartner: "职场导师·成长",
          topic: "职业规划讨论",
          duration: "30分钟",
          insights: 2,
          mood: "🤔"
        }
      ].map((diary, i) => (
        <div key={i} className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <span className="text-2xl mr-3">{diary.mood}</span>
              <div>
                <h3 className="font-semibold text-gray-900">{diary.topic}</h3>
                <p className="text-sm text-gray-500">与 {diary.aiPartner} 的对话</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">{diary.date}</span>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-sm text-gray-600">对话时长</div>
              <div className="font-semibold">{diary.duration}</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-sm text-gray-600">获得洞察</div>
              <div className="font-semibold">{diary.insights} 个</div>
            </div>
          </div>
          
          <button className="text-octopoda-primary hover:text-octopoda-coral transition-colors">
            查看完整对话记录 →
          </button>
        </div>
      ))}
    </div>
  );

  // 其他内容区块占位
  const ScriptsContent = () => (
    <div className="text-center py-12">
      <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-gray-700 mb-2">共创剧本</h3>
      <p className="text-gray-500">与AI协作创造成长场景和解决方案</p>
    </div>
  );

  const ChallengesContent = () => (
    <div className="text-center py-12">
      <Target className="w-16 h-16 text-gray-300 mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-gray-700 mb-2">成长挑战</h3>
      <p className="text-gray-500">参与个人和团队成长挑战，激发潜能</p>
    </div>
  );

  const QAContent = () => (
    <div className="text-center py-12">
      <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-gray-700 mb-2">互助问答</h3>
      <p className="text-gray-500">社区智慧集合，解答成长困惑</p>
    </div>
  );

  const ResourcesContent = () => (
    <div className="text-center py-12">
      <Gift className="w-16 h-16 text-gray-300 mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-gray-700 mb-2">资源交换</h3>
      <p className="text-gray-500">分享和交换成长资源、工具和方法</p>
    </div>
  );

  // 发布新内容弹窗
  const NewPostModal = () => (
    showNewPost && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl p-6 w-full max-w-2xl mx-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">发布新内容</h2>
            <button
              onClick={() => setShowNewPost(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="给你的内容起个标题..."
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-octopoda-coral focus:border-transparent"
            />
            
            <textarea
              placeholder="分享你的成长故事、感悟或经验..."
              rows={6}
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-octopoda-coral focus:border-transparent resize-none"
            ></textarea>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setAnonymousMode(!anonymousMode)}
                  className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
                    anonymousMode
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {anonymousMode ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
                  匿名发布
                </button>
                
                <select className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none">
                  <option>成长故事</option>
                  <option>陪伴日记</option>
                  <option>共创剧本</option>
                  <option>资源分享</option>
                </select>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setShowNewPost(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  取消
                </button>
                <button className="flex items-center px-6 py-2 bg-octopoda-coral text-white rounded-lg hover:bg-coral-600 transition-colors">
                  <Send className="w-4 h-4 mr-2" />
                  发布
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <CommunityNav />
      <MainContent />
      <NewPostModal />
    </div>
  );
};

export default CommunityDemo;