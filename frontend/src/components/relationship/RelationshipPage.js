import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, MessageCircle, Volume2 } from 'lucide-react';

const RelationshipPage = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [playingVoice, setPlayingVoice] = useState(null);

  // Character data organized by relationship type - synced from carousel and dashboard
  const relationshipCharacters = {
    '他': [
      {
        id: 4,
        name: "陆迪",
        age: 28,
        personality: "优雅知性伙伴",
        expertise: "智慧分析师",
        description: "陆迪拥有深邃的思维和优雅的气质，他善于分析复杂问题，用理性和感性的完美结合为你提供人生指导。",
        avatar: "https://i.postimg.cc/XvKgq5gS/Ludi.jpg",
        voiceText: "您好，我是陆迪，优雅知性的AI助手，期待与您的深度交流。",
        rating: 4.7,
        tags: ["智慧分享", "深度分析", "理性建议"],
        type: "优雅知性伙伴",
        specialties: ["智慧分享", "深度分析", "理性建议"]
      },
      {
        id: 8,
        name: "乔安",
        age: 26,
        personality: "生活伙伴",
        expertise: "日常陪伴者",
        description: "乔安是你的贴心生活伙伴，他关注生活中的每一个细节，用温馨的陪伴让你的日常生活充满温暖和乐趣。",
        avatar: "https://i.postimg.cc/P5VjcLDH/2.jpg",
        voiceText: "Hi，我是乔安，你的贴心生活伙伴，随时为你服务！",
        rating: 4.7,
        tags: ["日常陪伴", "生活分享", "贴心服务"],
        type: "生活伙伴",
        specialties: ["日常陪伴", "生活分享", "贴心服务"]
      },
      {
        id: 5,
        name: "林成卿",
        age: 30,
        personality: "成熟稳重伙伴",
        expertise: "职业规划师",
        description: "林成卿是一位成熟稳重的伙伴，他在职场打拼多年，擅长职业规划和人生指导，是你事业路上的最佳导师。",
        avatar: "https://i.postimg.cc/nrxb7By4/4.png",
        voiceText: "你好，我是林成卿，成熟稳重是我的特点，让我们一起成长吧。",
        rating: 4.8,
        tags: ["职业指导", "学习规划", "目标管理"],
        type: "成熟稳重伙伴",
        specialties: ["职业指导", "学习规划", "目标管理"]
      }
    ],
    '她': [
      {
        id: 1,
        name: "洛可 LoCo",
        age: 22,
        personality: "温暖阳光伙伴",
        expertise: "情感支持专家",
        description: "洛可是一个充满活力的女孩，她总是能用最温暖的话语和最灿烂的笑容感染每一个人，让你感受到被爱的温暖。",
        avatar: "https://images.unsplash.com/photo-1748436826061-a84fbf7c40ff?w=800&h=800&fit=crop&crop=face",
        voiceText: "你好！我是洛可，一个温暖阳光的女孩儿，很高兴认识你！",
        rating: 4.9,
        tags: ["情感支持", "生活陪伴", "积极鼓励"],
        type: "温暖阳光伙伴",
        specialties: ["情感支持", "生活陪伴", "积极鼓励"]
      },
      {
        id: 2,
        name: "千奈",
        age: 24,
        personality: "温柔体贴伙伴",
        expertise: "心灵慰藉师",
        description: "千奈拥有极其温柔的性格，她善于倾听和理解，总能在你需要的时候给予最贴心的安慰和支持。",
        avatar: "https://images.unsplash.com/photo-1748436889517-bc4b8e0c5eb3?w=800&h=800&fit=crop&crop=face",
        voiceText: "嗨，我是千奈，愿意成为你温柔体贴的AI伙伴～",
        rating: 4.8,
        tags: ["心灵慰藉", "情感疏导", "温暖陪伴"],
        type: "温柔体贴伙伴",
        specialties: ["心灵慰藉", "情感疏导", "温暖陪伴"]
      },
      {
        id: 3,
        name: "Suki 苏奇",
        age: 21,
        personality: "活泼开朗伙伴",
        expertise: "创意激发师",
        description: "Suki是个充满创意和活力的女孩，她用独特的视角看世界，总能为你的生活带来新鲜的灵感和快乐。",
        avatar: "https://images.unsplash.com/photo-1748436826195-8b4e78b9de8f?w=800&h=800&fit=crop&crop=face",
        voiceText: "Hi！我是Suki苏奇，活泼开朗就是我的标签！",
        rating: 4.9,
        tags: ["创意激发", "趣味对话", "活力分享"],
        type: "活泼开朗伙伴",
        specialties: ["创意激发", "趣味对话", "活力分享"]
      },
      {
        id: 6,
        name: "悦心",
        age: 25,
        personality: "心灵治愈师",
        expertise: "情感支持专家",
        description: "悦心专注于心灵治愈和情感支持，她用专业的心理学知识和温暖的人格魅力，帮助你找到内心的平静和力量。",
        avatar: "https://i.postimg.cc/bY0jPVn3/2.png",
        voiceText: "嗨～我是悦心，专业的心灵治愈师，愿意倾听你的心声。",
        rating: 4.9,
        tags: ["情感疏导", "心理支持", "内心治愈"],
        type: "心灵治愈师",
        specialties: ["情感疏导", "心理支持", "内心治愈"]
      }
    ],
    '懂': [
      {
        id: 9,
        name: "Chloe",
        age: 27,
        personality: "国际化伙伴",
        expertise: "多元文化专家",
        description: "Chloe具有国际化的视野和丰富的文化背景，她能够从不同角度理解问题，提供独特而深刻的见解。",
        avatar: "https://i.postimg.cc/90HbQB6h/E-n-VIP8-W6-J0-En-JC5p8hm8.png",
        voiceText: "Hello! I'm Chloe, your international AI companion. Nice to meet you!",
        rating: 4.8,
        tags: ["多元文化", "语言学习", "国际视野"],
        type: "国际化伙伴",
        specialties: ["多元文化", "语言学习", "国际视野"]
      }
    ],
    '学': [
      {
        id: 7,
        name: "思瑶",
        age: 26,
        personality: "智慧导师",
        expertise: "学习指导师",
        description: "思瑶是一位博学的导师，她热爱知识传播和学习指导，能够用最易懂的方式帮助你掌握各种知识和技能。",
        avatar: "https://i.postimg.cc/CLmTBZm8/4.png",
        voiceText: "你好，我是思瑶，智慧导师，让我们一起探索知识的海洋。",
        rating: 4.6,
        tags: ["知识传授", "学习指导", "思维训练"],
        type: "智慧导师",
        specialties: ["知识传授", "学习指导", "思维训练"]
      }
    ],
    '问': [
      {
        id: 10,
        name: "宛宁 Ely",
        age: 23,
        personality: "活力伙伴",
        expertise: "万能答疑助手",
        description: "宛宁充满活力和好奇心，她喜欢探索各种问题的答案，用积极正能量和丰富知识为你解答生活中的各种疑问。",
        avatar: "https://i.postimg.cc/k4bwCHhs/Vibranos.jpg",
        voiceText: "嗨！我是宛宁Ely，充满活力的AI伙伴，让我们一起开心聊天吧！",
        rating: 4.9,
        tags: ["积极正能量", "活力分享", "快乐传递"],
        type: "活力伙伴",
        specialties: ["积极正能量", "活力分享", "快乐传递"]
      }
    ],
    '笑': []
  };

  const typeInfo = {
    '他': {
      title: '他',
      subtitle: '温柔守护你的理想男友',
      description: '体贴幽默、懂浪漫、永远把你放在心上。用专属关怀和小惊喜，让你体验每天都被喜欢。',
      color: 'from-blue-500 to-purple-600'
    },
    '她': {
      title: '她',
      subtitle: '陪你分享生活的暖心伴侣',
      description: '善解人意、乐于倾听，既会撒娇也会鼓励你成长。陪你聊天、解忧、记录每一个温柔瞬间。',
      color: 'from-pink-500 to-rose-600'
    },
    '懂': {
      title: '懂',
      subtitle: '最能安慰你的知心朋友',
      description: '专注倾听和情绪疏导，总能在你难过或焦虑时说出温暖人心的话。让你在无压力环境下，安心表达自我。',
      color: 'from-emerald-500 to-teal-600'
    },
    '学': {
      title: '学',
      subtitle: '随时在线的成长导师',
      description: '博闻多识，善于讲解复杂知识。解答学业、职场、生活难题，为你定制成长路线。',
      color: 'from-amber-500 to-orange-600'
    },
    '问': {
      title: '问',
      subtitle: '万能答疑的小帮手',
      description: '脑容量超大、信息检索高手。你遇到的生活、学习、兴趣难题，都能快速帮你找到答案。',
      color: 'from-indigo-500 to-blue-600'
    },
    '笑': {
      title: '笑',
      subtitle: '解闷逗趣的陪聊玩伴',
      description: '会讲段子、玩梗、陪你聊天打发时间，总能给你带来新鲜感和好心情。',
      color: 'from-violet-500 to-purple-600'
    }
  };

  const currentTypeInfo = typeInfo[type];
  const characters = relationshipCharacters[type] || [];

  const playVoice = (text, characterId) => {
    if (playingVoice === characterId) {
      speechSynthesis.cancel();
      setPlayingVoice(null);
      return;
    }

    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    
    utterance.onstart = () => setPlayingVoice(characterId);
    utterance.onend = () => setPlayingVoice(null);
    utterance.onerror = () => setPlayingVoice(null);
    
    speechSynthesis.speak(utterance);
  };

  if (!currentTypeInfo) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-2xl mb-4">页面未找到</h1>
          <Link to="/" className="text-purple-300 hover:text-white">返回首页</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-white hover:text-purple-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>返回首页</span>
            </button>
            
            <div className="text-center">
              <h1 className={`text-2xl font-bold bg-gradient-to-r ${currentTypeInfo.color} bg-clip-text text-transparent`}>
                {currentTypeInfo.title}
              </h1>
              <p className="text-purple-300 text-sm">{currentTypeInfo.subtitle}</p>
            </div>
            
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Type Description */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {currentTypeInfo.description}
          </p>
        </motion.div>

        {/* Characters Grid */}
        {characters.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {characters.map((character, index) => (
              <motion.div
                key={character.id}
                className="group relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Character Avatar */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-white/20">
                    <img 
                      src={character.avatar}
                      alt={character.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Voice Play Button */}
                  <button
                    onClick={() => playVoice(character.voiceText, character.id)}
                    className={`absolute -bottom-2 right-1/2 transform translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r ${currentTypeInfo.color} flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg`}
                  >
                    {playingVoice === character.id ? (
                      <Volume2 className="w-5 h-5 animate-pulse" />
                    ) : (
                      <Play className="w-5 h-5 ml-0.5" />
                    )}
                  </button>
                </div>

                {/* Character Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{character.name}</h3>
                  <p className="text-purple-300 font-semibold mb-1">{character.personality}</p>
                  <p className="text-purple-400 text-sm mb-3">{character.expertise}</p>
                  <p className="text-white/70 leading-relaxed text-sm">{character.description}</p>
                </div>

                {/* Character Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {character.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-white/10 rounded-full text-white/80 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Rating */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        {i < Math.floor(character.rating) ? '★' : '☆'}
                      </span>
                    ))}
                    <span className="text-white/60 text-sm ml-2">{character.rating}</span>
                  </div>
                </div>

                {/* Action Button */}
                <Link to={`/chat/${character.id}`}>
                  <motion.button 
                    className={`w-full py-3 bg-gradient-to-r ${currentTypeInfo.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center space-x-2`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>开始对话</span>
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-white/50 text-lg mb-4">该关系类型的AI伙伴即将上线</div>
            <p className="text-white/30">敬请期待更多精彩角色！</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default RelationshipPage;