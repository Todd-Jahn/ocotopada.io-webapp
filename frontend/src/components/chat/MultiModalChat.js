import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mic, Gift, Settings, Lock, AlertTriangle, Heart } from 'lucide-react';
import IntimacyManager from '../relationship/IntimacyManager';

const MultiModalChat = ({ relationshipId, character, initialMode = 'simple' }) => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [chatMode, setChatMode] = useState(initialMode);
  const [isTyping, setIsTyping] = useState(false);
  const [relationship, setRelationship] = useState(null);
  const [showIntimacy, setShowIntimacy] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [ageVerified, setAgeVerified] = useState(false);
  const messagesEndRef = useRef(null);

  const chatModes = {
    simple: {
      name: '简单模式',
      description: '轻松愉快的日常对话',
      icon: '💬',
      color: 'from-blue-400 to-blue-600',
      maxLength: 200,
      responseStyle: 'concise'
    },
    story: {
      name: '长文模式',
      description: '深入的故事化对话体验',
      icon: '📖',
      color: 'from-purple-400 to-purple-600',
      maxLength: 1000,
      responseStyle: 'detailed'
    },
    mature: {
      name: '刺激模式',
      description: '18+ 深度情感交流',
      icon: '🔞',
      color: 'from-red-400 to-red-600',
      maxLength: 500,
      responseStyle: 'intimate',
      requiresVerification: true
    }
  };

  useEffect(() => {
    loadChatHistory();
    loadRelationshipData();
    checkAgeVerification();
  }, [relationshipId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const loadChatHistory = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/chat/${relationshipId}/history`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const history = await response.json();
        setMessages(history);
      }
    } catch (error) {
      console.error('Error loading chat history:', error);
    }
  };

  const loadRelationshipData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/relationships`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const relationships = await response.json();
        const currentRel = relationships.find(r => r.relationship_id === relationshipId);
        setRelationship(currentRel);
      }
    } catch (error) {
      console.error('Error loading relationship:', error);
    }
  };

  const checkAgeVerification = () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    setAgeVerified(user.is_age_verified || false);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async () => {
    if (!currentMessage.trim()) return;

    const userMessage = {
      sender: 'user',
      content: currentMessage,
      timestamp: new Date().toISOString(),
      chat_mode: chatMode
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage('');
    setIsTyping(true);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/chat/${relationshipId}/message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          content: currentMessage,
          chat_mode: chatMode
        })
      });

      if (response.ok) {
        const result = await response.json();
        setMessages(prev => [...prev, result.ai_response]);
        
        // Update relationship data
        if (result.intimacy_score !== undefined) {
          setRelationship(prev => ({
            ...prev,
            intimacy_score: result.intimacy_score,
            relationship_stage: result.relationship_stage
          }));
        }
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, {
        sender: 'character',
        content: '抱歉，我暂时无法回复。请稍后再试。',
        timestamp: new Date().toISOString(),
        isError: true
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleModeChange = (mode) => {
    if (mode === 'mature' && !ageVerified) {
      alert('刺激模式需要年龄验证。请在个人资料中完成身份认证。');
      return;
    }
    setChatMode(mode);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const getCurrentModeConfig = () => chatModes[chatMode];

  const renderMessage = (message, index) => {
    const isUser = message.sender === 'user';
    const isCharacter = message.sender === 'character';

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
      >
        <div className={`max-w-[80%] ${isUser ? 'order-last' : 'order-first'}`}>
          {/* Avatar */}
          {isCharacter && (
            <div className="flex items-end mb-1">
              <img
                src={character?.appearance?.avatar_url || character?.avatar}
                alt={character?.name}
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="text-white/60 text-xs">{character?.name}</span>
            </div>
          )}

          {/* Message Bubble */}
          <div
            className={`p-4 rounded-2xl ${
              isUser
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                : message.isError
                ? 'bg-red-500/20 border border-red-500/30 text-red-300'
                : 'bg-white/10 border border-white/20 text-white'
            }`}
          >
            <p className="text-sm leading-relaxed whitespace-pre-wrap">
              {message.content}
            </p>
            
            {/* Intimacy gain indicator */}
            {message.intimacy_points_gained > 0 && (
              <div className="flex items-center mt-2 text-xs text-pink-300">
                <Heart className="w-3 h-3 mr-1" />
                <span>+{message.intimacy_points_gained} 亲密度</span>
              </div>
            )}
          </div>

          {/* Timestamp */}
          <div className={`text-xs text-white/40 mt-1 ${isUser ? 'text-right' : 'text-left'}`}>
            {new Date(message.timestamp).toLocaleTimeString()}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="flex items-center space-x-3">
          <img
            src={character?.appearance?.avatar_url || character?.avatar}
            alt={character?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="text-white font-semibold">{character?.name}</h2>
            <p className="text-white/60 text-sm">
              {relationship?.relationship_stage === 'stranger' && '初识阶段'}
              {relationship?.relationship_stage === 'friend' && '朋友关系'}
              {relationship?.relationship_stage === 'ambiguous' && '暧昧阶段'}
              {relationship?.relationship_stage === 'lover' && '恋人关系'}
              {relationship?.relationship_stage === 'married' && '已结婚'}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowIntimacy(!showIntimacy)}
            className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <Heart className="w-5 h-5 text-pink-400" />
          </button>
          <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
            <Settings className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Mode Selector */}
      <div className="flex items-center space-x-2 p-4 bg-black/10 border-b border-white/10">
        {Object.entries(chatModes).map(([mode, config]) => (
          <button
            key={mode}
            onClick={() => handleModeChange(mode)}
            disabled={config.requiresVerification && !ageVerified}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
              chatMode === mode
                ? `bg-gradient-to-r ${config.color} text-white`
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            } ${config.requiresVerification && !ageVerified ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <span>{config.icon}</span>
            <span className="text-sm font-medium">{config.name}</span>
            {config.requiresVerification && !ageVerified && (
              <Lock className="w-3 h-3" />
            )}
          </button>
        ))}
      </div>

      {/* Mode Description */}
      <div className="px-4 py-2 bg-white/5 border-b border-white/10">
        <p className="text-white/60 text-sm">{getCurrentModeConfig().description}</p>
        {chatMode === 'mature' && (
          <div className="flex items-center space-x-2 mt-1 text-orange-300 text-xs">
            <AlertTriangle className="w-3 h-3" />
            <span>此模式包含成人内容，仅限18岁以上用户</span>
          </div>
        )}
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex">
        {/* Messages */}
        <div className={`${showIntimacy ? 'w-2/3' : 'w-full'} flex flex-col transition-all duration-300`}>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => renderMessage(message, index))}
            
            {/* Typing Indicator */}
            <AnimatePresence>
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/10 border border-white/20 rounded-2xl p-4 max-w-[80%]">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-black/20 border-t border-white/10">
            <div className="flex items-end space-x-3">
              <div className="flex-1">
                <textarea
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={`在${getCurrentModeConfig().name}下聊天...`}
                  maxLength={getCurrentModeConfig().maxLength}
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 resize-none focus:outline-none focus:border-purple-400"
                  rows="3"
                />
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setIsRecording(!isRecording)}
                      className={`p-2 rounded-lg transition-colors ${
                        isRecording ? 'bg-red-500 text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'
                      }`}
                    >
                      <Mic className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                      <Gift className="w-4 h-4 text-purple-400" />
                    </button>
                  </div>
                  <div className="text-white/40 text-xs">
                    {currentMessage.length}/{getCurrentModeConfig().maxLength}
                  </div>
                </div>
              </div>
              
              <button
                onClick={sendMessage}
                disabled={!currentMessage.trim() || isTyping}
                className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Intimacy Panel */}
        <AnimatePresence>
          {showIntimacy && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
              className="w-1/3 border-l border-white/10 p-4 overflow-y-auto"
            >
              {relationship && (
                <IntimacyManager
                  relationshipId={relationshipId}
                  character={character}
                  currentIntimacy={relationship.intimacy_score}
                  currentStage={relationship.relationship_stage}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MultiModalChat;