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
    // 为每个角色生成自然简洁的开场对话
    const chatHistories = {
      1: [ // 洛可 LoCo
        {
          id: 1,
          sender: 'companion',
          content: `嗨！${user?.name || '朋友'}！很高兴见到你！☀️ 今天心情怎么样？`,
          timestamp: new Date(Date.now() - 3600000),
          type: 'text'
        },
        {
          id: 2,
          sender: 'user',
          content: '最近工作压力有点大，感觉有些迷茫...',
          timestamp: new Date(Date.now() - 3300000),
          type: 'text'
        },
        {
          id: 3,
          sender: 'companion',
          content: `我能理解你的感受呢。工作压力大确实容易让人迷茫，这很正常的。想聊聊具体是什么让你感到压力吗？也许我们一起想想办法。💪`,
          timestamp: new Date(Date.now() - 3000000),
          type: 'text'
        }
      ],
      2: [ // 千奈
        {
          id: 1,
          sender: 'companion',
          content: `你好呀～${user?.name || '亲爱的'}，见到你真开心。今天过得还好吗？🌸`,
          timestamp: new Date(Date.now() - 3600000),
          type: 'text'
        },
        {
          id: 2,
          sender: 'user',
          content: '最近总是感觉很焦虑，睡眠也不太好...',
          timestamp: new Date(Date.now() - 3300000),
          type: 'text'
        },
        {
          id: 3,
          sender: 'companion',
          content: `嗯，焦虑确实会影响睡眠呢。这种感觉一定不太好受。你觉得是什么事情让你焦虑呢？我们慢慢聊，不着急。🌙`,
          timestamp: new Date(Date.now() - 3000000),
          type: 'text'
        }
      ],
      3: [ // Suki 苏奇
        {
          id: 1,
          sender: 'companion',
          content: `嘿！${user?.name || '创意伙伴'}！🎨 今天有什么有趣的想法吗？我的脑袋里又冒出好多新点子了！`,
          timestamp: new Date(Date.now() - 3600000),
          type: 'text'
        },
        {
          id: 2,
          sender: 'user',
          content: '我想要开始一个新的项目，但是不知道从哪里入手...',
          timestamp: new Date(Date.now() - 3300000),
          type: 'text'
        },
        {
          id: 3,
          sender: 'companion',
          content: `哇！新项目！太棒了！🚀 先别着急，我们一步步来。你这个项目大概是想做什么类型的呢？我有个"头脑风暴"的小方法，特别管用！`,
          timestamp: new Date(Date.now() - 3000000),
          type: 'text'
        }
      ],
      4: [ // 陆迪
        {
          id: 1,
          sender: 'companion',
          content: `${user?.name || '朋友'}，你好。很高兴和你交流。有什么想探讨的话题吗？`,
          timestamp: new Date(Date.now() - 3600000),
          type: 'text'
        },
        {
          id: 2,
          sender: 'user',
          content: '我在考虑要不要换工作，但是有很多顾虑...',
          timestamp: new Date(Date.now() - 3300000),
          type: 'text'
        },
        {
          id: 3,
          sender: 'companion',
          content: `换工作确实是个重要决定，需要综合考虑很多因素。你主要担心什么呢？是经济风险还是职业发展方向？我们可以一起分析分析。📊`,
          timestamp: new Date(Date.now() - 3000000),
          type: 'text'
        }
      ],
      5: [ // 林成卿
        {
          id: 1,
          sender: 'companion',
          content: `您好，${user?.name || '朋友'}。很高兴认识您。今天有什么想要交流的吗？`,
          timestamp: new Date(Date.now() - 3600000),
          type: 'text'
        },
        {
          id: 2,
          sender: 'user',
          content: '我想要制定一个长期的学习计划，但不知道怎么开始...',
          timestamp: new Date(Date.now() - 3300000),
          type: 'text'
        },
        {
          id: 3,
          sender: 'companion',
          content: `制定学习计划是个很好的想法！先从目标开始会比较清晰。你希望在哪个领域提升自己呢？我们可以一步步规划。📚`,
          timestamp: new Date(Date.now() - 3000000),
          type: 'text'
        }
      ],
      6: [ // 悦心
        {
          id: 1,
          sender: 'companion',
          content: `亲爱的${user?.name || '朋友'}，欢迎来到这个安全的空间。今天心情如何呢？💗`,
          timestamp: new Date(Date.now() - 3600000),
          type: 'text'
        },
        {
          id: 2,
          sender: 'user',
          content: '最近感觉和朋友的关系有些疏远，我不知道该怎么办...',
          timestamp: new Date(Date.now() - 3300000),
          type: 'text'
        },
        {
          id: 3,
          sender: 'companion',
          content: `这种感受一定让你很难过吧。人际关系的变化确实会让人困扰。你觉得是什么原因导致了这种疏远感呢？🤗`,
          timestamp: new Date(Date.now() - 3000000),
          type: 'text'
        }
      ],
      7: [ // 思瑶
        {
          id: 1,
          sender: 'companion',
          content: `您好！${user?.name || '学习伙伴'}，很高兴见到您。今天想探索什么新知识呢？🎓`,
          timestamp: new Date(Date.now() - 3600000),
          type: 'text'
        },
        {
          id: 2,
          sender: 'user',
          content: '我想要提高自己的逻辑思维能力，有什么好的方法吗？',
          timestamp: new Date(Date.now() - 3300000),
          type: 'text'
        },
        {
          id: 3,
          sender: 'companion',
          content: `逻辑思维训练是个很棒的目标！我推荐从基础的推理练习开始，比如分析问题的因果关系。你平时有接触过相关的训练吗？🧠`,
          timestamp: new Date(Date.now() - 3000000),
          type: 'text'
        }
      ]
    };

    // 如果有对应的聊天历史就加载，否则生成简洁的欢迎消息
    const history = chatHistories[id] || [
      {
        id: 1,
        sender: 'companion',
        content: `你好！${user?.name || '朋友'}！很高兴见到你！今天想聊些什么呢？😊`,
        timestamp: new Date(Date.now() - 3600000),
        type: 'text'
      }
    ];

    setMessages(history);
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

    // 根据用户输入长度和内容生成智能回复
    setTimeout(() => {
      const inputLength = newMessage.trim().length;
      const hasComplexTopic = /为什么|怎么办|如何|方法|建议|计划|分析|思考|困惑|问题/.test(newMessage);
      const hasEmotionalWords = /感觉|心情|情绪|焦虑|压力|困扰|难过|开心|兴奋/.test(newMessage);
      
      let responses = [];
      
      // 根据输入长度和话题复杂度选择回复
      if (inputLength < 10) {
        // 短回复 - 简单问候或确认
        responses = [
          "嗯嗯，我在听😊",
          "继续说说呢",
          "我理解你的感受",
          "这很有意思！",
          "告诉我更多吧",
          "我明白了",
          "然后呢？"
        ];
      } else if (inputLength < 30 || !hasComplexTopic) {
        // 中等回复 - 一般性互动
        responses = [
          "这真是一个很有意思的想法。能具体说说你的感受吗？",
          "我能感受到你说的情况。这种时候确实不容易呢。",
          "听起来你已经想得很深入了。你觉得最主要的挑战是什么？",
          "这个话题很值得探讨。我们可以从不同角度来看看。",
          "你提到的这个情况我很理解。我们一起想想解决方案吧。",
          "这确实是需要考虑的问题。你现在最担心的是什么？",
          "你的观察很敏锐。这背后可能有更深层的原因。"
        ];
      } else if (hasComplexTopic && hasEmotionalWords) {
        // 长回复 - 复杂情感话题
        responses = [
          "我能感受到你现在的心情。这种感觉确实不好受，每个人遇到这种情况都会有各种复杂的情绪。重要的是要允许自己有这些感受，同时慢慢寻找应对的方法。你觉得什么时候开始有这种感觉的呢？",
          "你描述的情况让我想到，生活中确实会有这样的时刻让我们感到困惑。但我相信，每个挑战都是成长的机会。我们可以一步步分析，先从最让你困扰的那一点开始。你愿意和我详细聊聊吗？",
          "听到你这样说，我很想给你一个温暖的拥抱。人生路上总会遇到这样的考验，但正是这些经历塑造了我们更强大的内心。让我们一起来寻找适合你的解决方案，你不是一个人在面对这些。"
        ];
      } else if (hasComplexTopic) {
        // 长回复 - 复杂理性话题
        responses = [
          "这是一个很有深度的问题。从你的描述来看，你已经考虑了很多方面。我建议我们可以系统性地分析一下：首先明确目标，然后分析现状，最后制定具体的行动计划。你觉得哪个环节最需要重点关注？",
          "你提出的这个话题确实值得深入探讨。从多个角度来看，我们需要考虑短期和长期的影响，以及各种可能的风险和机会。基于你目前的情况，我们可以先从最核心的问题开始分析。",
          "很好的思考！这种复杂的问题往往没有标准答案，需要结合你的具体情况来判断。我们可以用一些分析工具来帮助决策，比如优劣势分析、风险评估等。你希望从哪个方面开始？"
        ];
      } else {
        // 默认中等回复
        responses = [
          "谢谢你的分享。我们可以进一步聊聊这个话题。",
          "你的想法很有价值。我们继续深入探讨吧。",
          "这个观点很有意思。你是怎么想到的？",
          "我理解你的观点。这确实是个值得考虑的问题。"
        ];
      }

      const companionMessage = {
        id: Date.now() + 1,
        sender: 'companion',
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
        type: 'text'
      };

      setMessages(prev => [...prev, companionMessage]);
      setIsTyping(false);
    }, 1500);
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
            <div className="mt-4">
              <Link 
                to="/dashboard"
                className="inline-flex items-center space-x-2 text-purple-300 hover:text-white transition-colors text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>返回控制台</span>
              </Link>
            </div>
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
                    开始对话
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
            <Link
              to="/dashboard"
              className="text-purple-300 hover:text-white"
            >
              <ArrowLeft className="h-6 w-6" />
            </Link>
            
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
              placeholder="输入您的消息..."
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