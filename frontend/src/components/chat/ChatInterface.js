import React, { useState, useContext, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { 
  ArrowLeft, 
  Send, 
  Paperclip, 
  Smile, 
  MoreVertical,
  Phone,
  Video,
  Info,
  Heart,
  Share2,
  Download,
  Mic,
  MicOff
} from 'lucide-react';
import { AppContext } from '../../App';

const ChatInterface = () => {
  const { user } = useContext(AppContext);
  const { companionId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedCompanion, setSelectedCompanion] = useState(null);
  const [showCompanionList, setShowCompanionList] = useState(!companionId);
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef(null);

  const companions = [
    {
      id: 1,
      name: '洛可 LoCo',
      type: '温暖阳光伙伴',
      avatar: 'https://images.unsplash.com/photo-1748436826061-a84fbf7c40ff?w=800&h=800&fit=crop&crop=face',
      status: 'online',
      description: '温暖阳光的女孩儿，擅长倾听和鼓励，陪伴你度过人生的每个重要时刻',
      expertise: ['情感支持', '生活陪伴', '积极鼓励'],
      personality: '温暖、阳光、积极向上'
    },
    {
      id: 2,
      name: '千奈',
      type: '温柔体贴伙伴',
      avatar: 'https://images.unsplash.com/photo-1748436889517-bc4b8e0c5eb3?w=800&h=800&fit=crop&crop=face',
      status: 'online',
      description: '温柔体贴的女性伙伴，善解人意，用细腻的情感为你带来心灵的慰藉',
      expertise: ['心灵慰藉', '情感疏导', '温暖陪伴'],
      personality: '温柔、体贴、善解人意'
    },
    {
      id: 3,
      name: 'Suki 苏奇',
      type: '活泼开朗伙伴',
      avatar: 'https://images.unsplash.com/photo-1748436826195-8b4e78b9de8f?w=800&h=800&fit=crop&crop=face',
      status: 'online',
      description: '活泼开朗的伙伴，充满创意和想象力，让每次对话都充满惊喜',
      expertise: ['创意激发', '趣味对话', '活力分享'],
      personality: '活泼、开朗、充满创意'
    },
    {
      id: 4,
      name: '陆迪',
      type: '优雅知性伙伴',
      avatar: 'https://i.postimg.cc/XvKgq5gS/Ludi.jpg',
      status: 'online',
      description: '优雅知性的伙伴，拥有丰富的人生阅历，为你提供智慧的建议',
      expertise: ['智慧分享', '深度分析', '理性建议'],
      personality: '优雅、知性、智慧深邃'
    },
    {
      id: 5,
      name: '林成卿',
      type: '成熟稳重伙伴',
      avatar: 'https://i.postimg.cc/nrxb7By4/4.png',
      status: 'online',
      description: '成熟稳重的伙伴，具备专业的知识背景，助力你的成长和发展',
      expertise: ['职业指导', '学习规划', '目标管理'],
      personality: '成熟、稳重、专业可靠'
    },
    {
      id: 6,
      name: '悦心',
      type: '心灵治愈师',
      avatar: 'https://i.postimg.cc/bY0jPVn3/2.png',
      status: 'online',
      description: '心灵治愈师，专注于情感陪伴和心理支持，让你感受到被理解的温暖',
      expertise: ['情感疏导', '心理支持', '内心治愈'],
      personality: '温暖、专业、治愈系'
    },
    {
      id: 7,
      name: '思瑶',
      type: '智慧导师',
      avatar: 'https://i.postimg.cc/CLmTBZm8/4.png',
      status: 'online',
      description: '智慧导师，擅长解答各种问题，为你的学习和成长提供专业指导',
      expertise: ['知识传授', '学习指导', '思维训练'],
      personality: '智慧、耐心、博学多才'
    },
    {
      id: 8,
      name: '乔安',
      type: '生活伙伴',
      avatar: 'https://i.postimg.cc/P5VjcLDH/2.jpg',
      status: 'online',
      description: '生活伙伴，陪伴你度过日常的点点滴滴，分享生活中的喜怒哀乐',
      expertise: ['日常陪伴', '生活分享', '贴心服务'],
      personality: '贴心、细致、生活智慧'
    },
    {
      id: 9,
      name: 'Chloe',
      type: '国际化伙伴',
      avatar: 'https://i.postimg.cc/90HbQB6h/E-n-VIP8-W6-J0-En-JC5p8hm8.png',
      status: 'online',
      description: '国际化伙伴，具备多元文化背景，为你打开更广阔的视野',
      expertise: ['多元文化', '语言学习', '国际视野'],
      personality: '开放、包容、国际化视野'
    },
    {
      id: 10,
      name: '宛宁 Ely',
      type: '活力伙伴',
      avatar: 'https://i.postimg.cc/k4bwCHhs/Vibranos.jpg',
      status: 'online',
      description: '充满活力的伙伴，带来积极正能量，与你分享生活的美好瞬间',
      expertise: ['积极正能量', '活力分享', '快乐传递'],
      personality: '活力四射、积极乐观、感染力强'
    }
  ];

  useEffect(() => {
    if (companionId) {
      const companion = companions.find(c => c.id === parseInt(companionId));
      if (companion) {
        setSelectedCompanion(companion);
        setShowCompanionList(false);
        loadChatHistory(companion.id);
      }
    }
  }, [companionId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const loadChatHistory = (id) => {
    // Mock chat history
    const mockMessages = [
      {
        id: 1,
        sender: 'companion',
        content: `Hello ${user?.name}! I'm excited to continue our journey together. How are you feeling today?`,
        timestamp: new Date(Date.now() - 3600000),
        type: 'text'
      },
      {
        id: 2,
        sender: 'user',
        content: 'Hi! I\'ve been thinking about our last conversation on career growth.',
        timestamp: new Date(Date.now() - 3300000),
        type: 'text'
      },
      {
        id: 3,
        sender: 'companion',
        content: 'That\'s wonderful! Reflection is such an important part of growth. What specific insights stood out to you?',
        timestamp: new Date(Date.now() - 3000000),
        type: 'text'
      }
    ];
    setMessages(mockMessages);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      content: newMessage,
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's a really thoughtful perspective. I can see you've been putting a lot of consideration into this.",
        "Your growth mindset really shines through in what you've shared. Let's explore this further.",
        "I appreciate you opening up about this. It takes courage to reflect on these aspects of life.",
        "What you're describing resonates with many people's experiences. You're not alone in feeling this way.",
        "That's an excellent observation. How do you think we could build on this insight?"
      ];

      const companionMessage = {
        id: Date.now() + 1,
        sender: 'companion',
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
        type: 'text'
      };

      setMessages(prev => [...prev, companionMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (showCompanionList) {
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
              <Link to="/dashboard" className="text-purple-300 hover:text-white">
                <ArrowLeft className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">选择您的AI伙伴</h2>
            <p className="text-purple-300">选择您今天想要对话的伙伴</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companions.map((companion) => (
              <motion.div
                key={companion.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setSelectedCompanion(companion);
                  setShowCompanionList(false);
                  loadChatHistory(companion.id);
                }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 cursor-pointer hover:border-purple-400 transition-all"
              >
                <div className="text-center">
                  <div className="relative mb-4">
                    <img
                      src={companion.avatar}
                      alt={companion.name}
                      className="w-20 h-20 rounded-full object-cover mx-auto"
                    />
                    <div className={`absolute bottom-0 right-1/2 transform translate-x-6 w-4 h-4 rounded-full border-2 border-white ${
                      companion.status === 'online' ? 'bg-green-400' : 'bg-gray-400'
                    }`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{companion.name}</h3>
                  <p className="text-purple-400 font-medium mb-3">{companion.type}</p>
                  <p className="text-purple-300 text-sm mb-4">{companion.description}</p>
                  
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {companion.expertise.slice(0, 2).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-purple-500/30 text-purple-300 rounded-lg text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold"
                  >
                    Start Conversation
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
      {/* Chat Header */}
      <header className="bg-white/10 backdrop-blur-lg border-b border-white/20 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowCompanionList(true)}
              className="text-purple-300 hover:text-white"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src={selectedCompanion?.avatar}
                  alt={selectedCompanion?.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
              </div>
              
              <div>
                <h3 className="text-white font-semibold">{selectedCompanion?.name}</h3>
                <p className="text-purple-300 text-sm">{selectedCompanion?.type}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button className="text-purple-300 hover:text-white p-2">
              <Phone className="h-5 w-5" />
            </button>
            <button className="text-purple-300 hover:text-white p-2">
              <Video className="h-5 w-5" />
            </button>
            <button className="text-purple-300 hover:text-white p-2">
              <Info className="h-5 w-5" />
            </button>
            <button className="text-purple-300 hover:text-white p-2">
              <MoreVertical className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-end space-x-2 max-w-xs lg:max-w-md ${
                message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}>
                {message.sender === 'companion' && (
                  <img
                    src={selectedCompanion?.avatar}
                    alt={selectedCompanion?.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                )}
                
                <div className={`relative px-4 py-3 rounded-2xl ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-white/10 backdrop-blur-lg text-white border border-white/20'
                } ${message.sender === 'user' ? 'rounded-br-sm' : 'rounded-bl-sm'}`}>
                  <p className="text-sm">{message.content}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-purple-100' : 'text-purple-300'
                  }`}>
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing Indicator */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="flex items-end space-x-2">
              <img
                src={selectedCompanion?.avatar}
                alt={selectedCompanion?.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl rounded-bl-sm px-4 py-3 border border-white/20">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="bg-white/10 backdrop-blur-lg border-t border-white/20 p-4">
        <div className="flex items-end space-x-3">
          <button className="text-purple-300 hover:text-white p-2">
            <Paperclip className="h-5 w-5" />
          </button>
          
          <div className="flex-1 relative">
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 resize-none max-h-32"
              rows="1"
            />
          </div>

          <button
            onClick={() => setIsRecording(!isRecording)}
            className={`p-3 rounded-full transition-colors ${
              isRecording ? 'bg-red-500 text-white' : 'text-purple-300 hover:text-white'
            }`}
          >
            {isRecording ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
          </button>

          <button className="text-purple-300 hover:text-white p-2">
            <Smile className="h-5 w-5" />
          </button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;