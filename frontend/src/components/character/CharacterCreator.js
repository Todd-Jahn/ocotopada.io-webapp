import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Upload, Play, Heart, User, Settings, Palette } from 'lucide-react';

const CharacterCreator = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [character, setCharacter] = useState({
    name: '',
    gender: 'female',
    age: 25,
    appearance: {
      avatar_url: '',
      hair_color: '黑色',
      eye_color: '棕色',
      height: '165cm',
      build: '苗条',
      clothing_style: '休闲',
      distinctive_features: []
    },
    personality: {
      traits: [],
      speaking_style: 'friendly',
      language_preference: 'zh-CN',
      formality_level: 5,
      humor_level: 5,
      emotional_intensity: 5,
      topics_of_interest: [],
      background_story: '',
      quirks: []
    },
    is_public: true,
    tags: []
  });

  const steps = [
    { id: 1, title: '基本信息', icon: User },
    { id: 2, title: '外貌设定', icon: Palette },
    { id: 3, title: '性格特征', icon: Heart },
    { id: 4, title: '完成创建', icon: Settings }
  ];

  const genderOptions = [
    { value: 'male', label: '男性', emoji: '👨' },
    { value: 'female', label: '女性', emoji: '👩' },
    { value: 'non_binary', label: '非二元', emoji: '🧑' },
    { value: 'custom', label: '自定义', emoji: '✨' }
  ];

  const personalityTraits = [
    '温柔', '开朗', '活泼', '内向', '幽默', '理性', '感性', '乐观', '成熟', '可爱',
    '独立', '体贴', '聪明', '勇敢', '害羞', '自信', '温暖', '冷静', '热情', '神秘'
  ];

  const topics = [
    '电影', '音乐', '书籍', '旅行', '美食', '运动', '科技', '艺术', '游戏', '时尚',
    '心理学', '哲学', '历史', '科学', '摄影', '绘画', '舞蹈', '烹饪', '园艺', '宠物'
  ];

  const speakingStyles = [
    { value: 'friendly', label: '友好亲切', description: '温暖友善，让人感到舒适' },
    { value: 'formal', label: '正式礼貌', description: '使用敬语，显得专业' },
    { value: 'casual', label: '轻松随意', description: '像朋友一样聊天' },
    { value: 'playful', label: '俏皮可爱', description: '活泼有趣，充满童心' },
    { value: 'mysterious', label: '神秘魅惑', description: '带有神秘感的表达方式' },
    { value: 'intellectual', label: '知性优雅', description: '用词精准，富有内涵' }
  ];

  const handleInputChange = (field, value, subfield = null) => {
    setCharacter(prev => {
      if (subfield) {
        return {
          ...prev,
          [field]: {
            ...prev[field],
            [subfield]: value
          }
        };
      }
      return { ...prev, [field]: value };
    });
  };

  const handleArrayToggle = (field, value, subfield = null) => {
    setCharacter(prev => {
      const targetArray = subfield ? prev[field][subfield] : prev[field];
      const newArray = targetArray.includes(value)
        ? targetArray.filter(item => item !== value)
        : [...targetArray, value];
      
      if (subfield) {
        return {
          ...prev,
          [field]: {
            ...prev[field],
            [subfield]: newArray
          }
        };
      }
      return { ...prev, [field]: newArray };
    });
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/characters`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(character)
      });

      if (response.ok) {
        const newCharacter = await response.json();
        alert('角色创建成功！');
        navigate(`/relationship/custom/${newCharacter.character_id}`);
      } else {
        alert('创建失败，请重试');
      }
    } catch (error) {
      console.error('Error creating character:', error);
      alert('网络错误，请重试');
    }
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-white font-semibold mb-2">角色名称</label>
        <input
          type="text"
          value={character.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50"
          placeholder="给你的AI伙伴起个名字"
        />
      </div>

      <div>
        <label className="block text-white font-semibold mb-3">性别</label>
        <div className="grid grid-cols-2 gap-3">
          {genderOptions.map(option => (
            <button
              key={option.value}
              onClick={() => handleInputChange('gender', option.value)}
              className={`p-4 border rounded-lg text-center transition-all ${
                character.gender === option.value
                  ? 'border-purple-400 bg-purple-500/20 text-white'
                  : 'border-white/20 bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              <div className="text-2xl mb-1">{option.emoji}</div>
              <div className="text-sm">{option.label}</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-white font-semibold mb-2">年龄</label>
        <input
          type="number"
          value={character.age}
          onChange={(e) => handleInputChange('age', parseInt(e.target.value))}
          className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white"
          min="18"
          max="100"
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-white font-semibold mb-2">头像图片</label>
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-white/10 border border-white/20 rounded-full flex items-center justify-center">
            {character.appearance.avatar_url ? (
              <img src={character.appearance.avatar_url} alt="Avatar" className="w-full h-full rounded-full object-cover" />
            ) : (
              <Upload className="w-8 h-8 text-white/50" />
            )}
          </div>
          <input
            type="url"
            value={character.appearance.avatar_url}
            onChange={(e) => handleInputChange('appearance', e.target.value, 'avatar_url')}
            className="flex-1 p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50"
            placeholder="头像图片URL"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-white font-semibold mb-2">发色</label>
          <input
            type="text"
            value={character.appearance.hair_color}
            onChange={(e) => handleInputChange('appearance', e.target.value, 'hair_color')}
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white"
          />
        </div>
        <div>
          <label className="block text-white font-semibold mb-2">瞳色</label>
          <input
            type="text"
            value={character.appearance.eye_color}
            onChange={(e) => handleInputChange('appearance', e.target.value, 'eye_color')}
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-white font-semibold mb-2">身高</label>
          <input
            type="text"
            value={character.appearance.height}
            onChange={(e) => handleInputChange('appearance', e.target.value, 'height')}
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white"
          />
        </div>
        <div>
          <label className="block text-white font-semibold mb-2">体型</label>
          <input
            type="text"
            value={character.appearance.build}
            onChange={(e) => handleInputChange('appearance', e.target.value, 'build')}
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white"
          />
        </div>
      </div>

      <div>
        <label className="block text-white font-semibold mb-2">穿衣风格</label>
        <input
          type="text"
          value={character.appearance.clothing_style}
          onChange={(e) => handleInputChange('appearance', e.target.value, 'clothing_style')}
          className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white"
        />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-white font-semibold mb-3">性格特征</label>
        <div className="grid grid-cols-3 gap-2">
          {personalityTraits.map(trait => (
            <button
              key={trait}
              onClick={() => handleArrayToggle('personality', trait, 'traits')}
              className={`p-2 rounded-lg text-sm transition-all ${
                character.personality.traits.includes(trait)
                  ? 'bg-purple-500 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {trait}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-white font-semibold mb-3">说话风格</label>
        <div className="grid gap-3">
          {speakingStyles.map(style => (
            <button
              key={style.value}
              onClick={() => handleInputChange('personality', style.value, 'speaking_style')}
              className={`p-4 border rounded-lg text-left transition-all ${
                character.personality.speaking_style === style.value
                  ? 'border-purple-400 bg-purple-500/20'
                  : 'border-white/20 bg-white/5 hover:bg-white/10'
              }`}
            >
              <div className="text-white font-medium">{style.label}</div>
              <div className="text-white/60 text-sm">{style.description}</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-white font-semibold mb-3">兴趣话题</label>
        <div className="grid grid-cols-4 gap-2">
          {topics.map(topic => (
            <button
              key={topic}
              onClick={() => handleArrayToggle('personality', topic, 'topics_of_interest')}
              className={`p-2 rounded-lg text-sm transition-all ${
                character.personality.topics_of_interest.includes(topic)
                  ? 'bg-purple-500 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-white font-semibold mb-2">背景故事</label>
        <textarea
          value={character.personality.background_story}
          onChange={(e) => handleInputChange('personality', e.target.value, 'background_story')}
          className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 h-24"
          placeholder="描述角色的背景故事，让TA更有个性..."
        />
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
          {character.appearance.avatar_url ? (
            <img src={character.appearance.avatar_url} alt="Character" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <User className="w-16 h-16 text-white" />
            </div>
          )}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{character.name}</h3>
        <p className="text-purple-300">{character.gender === 'male' ? '男性' : character.gender === 'female' ? '女性' : '其他'} • {character.age}岁</p>
      </div>

      <div className="bg-white/10 rounded-lg p-4">
        <h4 className="text-white font-semibold mb-2">性格特征</h4>
        <div className="flex flex-wrap gap-2">
          {character.personality.traits.map(trait => (
            <span key={trait} className="px-2 py-1 bg-purple-500/50 rounded text-white text-sm">{trait}</span>
          ))}
        </div>
      </div>

      <div className="bg-white/10 rounded-lg p-4">
        <h4 className="text-white font-semibold mb-2">说话风格</h4>
        <p className="text-white/70">{speakingStyles.find(s => s.value === character.personality.speaking_style)?.label}</p>
      </div>

      <div className="bg-white/10 rounded-lg p-4">
        <h4 className="text-white font-semibold mb-2">兴趣话题</h4>
        <div className="flex flex-wrap gap-2">
          {character.personality.topics_of_interest.map(topic => (
            <span key={topic} className="px-2 py-1 bg-blue-500/50 rounded text-white text-sm">{topic}</span>
          ))}
        </div>
      </div>

      {character.personality.background_story && (
        <div className="bg-white/10 rounded-lg p-4">
          <h4 className="text-white font-semibold mb-2">背景故事</h4>
          <p className="text-white/70 text-sm">{character.personality.background_story}</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center space-x-2 text-white hover:text-purple-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>返回</span>
            </button>
            
            <h1 className="text-xl font-bold text-white">创建AI角色</h1>
            
            <div className="w-16"></div>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                currentStep >= step.id ? 'bg-purple-500' : 'bg-white/20'
              } transition-colors`}>
                <step.icon className="w-5 h-5 text-white" />
              </div>
              <div className="ml-3">
                <div className="text-white font-medium">{step.title}</div>
              </div>
              {index < steps.length - 1 && (
                <div className={`w-16 h-1 mx-4 ${
                  currentStep > step.id ? 'bg-purple-500' : 'bg-white/20'
                } transition-colors`}></div>
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8"
        >
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className="px-6 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              上一步
            </button>
            
            {currentStep < 4 ? (
              <button
                onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                disabled={!character.name}
                className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                下一步
              </button>
            ) : (
              <button
                onClick={handleSave}
                className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                <Save className="w-4 h-4" />
                <span>创建角色</span>
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CharacterCreator;