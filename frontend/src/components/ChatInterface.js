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
import { AppContext } from '../App';

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
      name: 'Sarah Chen',
      type: 'Career Mentor',
      avatar: 'https://images.unsplash.com/photo-1509868918748-a554ad25f858',
      status: 'online',
      description: 'Helping professionals navigate career growth and leadership challenges',
      expertise: ['Leadership', 'Tech Career', 'Work-Life Balance'],
      personality: 'Supportive, analytical, and encouraging'
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      type: 'Wellness Guide',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      status: 'online',
      description: 'Mindfulness coach focused on mental wellness and stress management',
      expertise: ['Mindfulness', 'Stress Management', 'Fitness'],
      personality: 'Calm, wise, and empathetic'
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      type: 'Creative Catalyst',
      avatar: 'https://images.pexels.com/photos/32261581/pexels-photo-32261581.jpeg',
      status: 'online',
      description: 'Inspiring creativity and innovation in personal and professional projects',
      expertise: ['Art Direction', 'Innovation', 'Design Thinking'],
      personality: 'Energetic, inspiring, and visionary'
    },
    {
      id: 4,
      name: 'David Kim',
      type: 'Tech Innovator',
      avatar: 'https://images.pexels.com/photos/32262682/pexels-photo-32262682.jpeg',
      status: 'online',
      description: 'Technology expert helping with digital transformation and innovation',
      expertise: ['AI & ML', 'Startup Strategy', 'Product Development'],
      personality: 'Analytical, forward-thinking, and practical'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      type: 'Life Coach',
      avatar: 'https://images.unsplash.com/photo-1576558656222-ba66febe3dec',
      status: 'online',
      description: 'Personal development coach for life balance and goal achievement',
      expertise: ['Goal Setting', 'Personal Growth', 'Relationship Building'],
      personality: 'Warm, motivational, and insightful'
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
              <div className="flex items-center">
                <Link to="/dashboard" className="text-purple-300 hover:text-white mr-4">
                  <ArrowLeft className="h-6 w-6" />
                </Link>
                <h1 className="text-xl font-bold text-white">Choose Your AI Companion</h1>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Select an AI Companion</h2>
            <p className="text-purple-300">Choose who you'd like to have a conversation with today</p>
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