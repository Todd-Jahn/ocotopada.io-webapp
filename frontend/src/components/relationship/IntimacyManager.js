import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, Gift, Lock, Unlock, Trophy, Flame } from 'lucide-react';

const IntimacyManager = ({ relationshipId, character, currentIntimacy = 0, currentStage = 'stranger' }) => {
  const [intimacyScore, setIntimacyScore] = useState(currentIntimacy);
  const [relationshipStage, setRelationshipStage] = useState(currentStage);
  const [unlockedScenarios, setUnlockedScenarios] = useState([]);
  const [showMilestone, setShowMilestone] = useState(false);
  const [recentGain, setRecentGain] = useState(0);

  // 关系阶段配置
  const relationshipStages = {
    stranger: {
      name: '初识',
      minScore: 0,
      maxScore: 49,
      color: 'from-gray-400 to-gray-600',
      icon: '👋',
      description: '刚刚认识，一切都是新的开始',
      benefits: ['基础对话', '简单问候', '了解基本信息']
    },
    friend: {
      name: '朋友',
      minScore: 50,
      maxScore: 149,
      color: 'from-blue-400 to-blue-600',
      icon: '😊',
      description: '成为了朋友，可以分享更多内容',
      benefits: ['深入对话', '分享日常', '情感支持', '小游戏']
    },
    ambiguous: {
      name: '暧昧',
      minScore: 150,
      maxScore: 299,
      color: 'from-pink-400 to-pink-600',
      icon: '😍',
      description: '关系变得微妙，充满了可能性',
      benefits: ['亲密称呼', '浪漫对话', '情感表达', '特殊场景']
    },
    lover: {
      name: '恋人',
      minScore: 300,
      maxScore: 499,
      color: 'from-red-400 to-red-600',
      icon: '💕',
      description: '正式成为恋人，享受甜蜜时光',
      benefits: ['恋人模式', '专属剧情', '情侣活动', '深度陪伴']
    },
    married: {
      name: '结婚',
      minScore: 500,
      maxScore: 1000,
      color: 'from-purple-400 to-purple-600',
      icon: '💖',
      description: '白头偕老的承诺，最深的情感连接',
      benefits: ['夫妻模式', '终极剧情', '专属特权', '永恒陪伴']
    }
  };

  // 场景解锁配置
  const scenarios = [
    { id: 'morning_chat', name: '晨间问候', requiredScore: 20, stage: 'stranger' },
    { id: 'daily_share', name: '日常分享', requiredScore: 60, stage: 'friend' },
    { id: 'movie_night', name: '电影之夜', requiredScore: 100, stage: 'friend' },
    { id: 'heart_to_heart', name: '深谈心事', requiredScore: 120, stage: 'friend' },
    { id: 'romantic_walk', name: '浪漫散步', requiredScore: 180, stage: 'ambiguous' },
    { id: 'jealousy_scene', name: '吃醋情节', requiredScore: 220, stage: 'ambiguous' },
    { id: 'confession', name: '告白时刻', requiredScore: 280, stage: 'ambiguous' },
    { id: 'first_date', name: '第一次约会', requiredScore: 320, stage: 'lover' },
    { id: 'anniversary', name: '纪念日庆祝', requiredScore: 380, stage: 'lover' },
    { id: 'proposal', name: '求婚仪式', requiredScore: 480, stage: 'lover' },
    { id: 'wedding', name: '婚礼典礼', requiredScore: 520, stage: 'married' },
    { id: 'forever_together', name: '永远在一起', requiredScore: 800, stage: 'married' }
  ];

  const getCurrentStage = (score) => {
    for (const [key, stage] of Object.entries(relationshipStages)) {
      if (score >= stage.minScore && score <= stage.maxScore) {
        return key;
      }
    }
    return 'stranger';
  };

  const getStageProgress = (score, stage) => {
    const stageData = relationshipStages[stage];
    if (!stageData) return 0;
    
    const progress = ((score - stageData.minScore) / (stageData.maxScore - stageData.minScore)) * 100;
    return Math.min(Math.max(progress, 0), 100);
  };

  const getUnlockedScenarios = (score) => {
    return scenarios.filter(scenario => score >= scenario.requiredScore);
  };

  const getNextMilestone = (score) => {
    const nextScenario = scenarios.find(scenario => score < scenario.requiredScore);
    if (nextScenario) {
      return {
        type: 'scenario',
        name: nextScenario.name,
        required: nextScenario.requiredScore,
        remaining: nextScenario.requiredScore - score
      };
    }

    // Check for stage progression
    const currentStageKey = getCurrentStage(score);
    const stageKeys = Object.keys(relationshipStages);
    const currentIndex = stageKeys.indexOf(currentStageKey);
    
    if (currentIndex < stageKeys.length - 1) {
      const nextStageKey = stageKeys[currentIndex + 1];
      const nextStage = relationshipStages[nextStageKey];
      return {
        type: 'stage',
        name: nextStage.name,
        required: nextStage.minScore,
        remaining: nextStage.minScore - score
      };
    }

    return null;
  };

  useEffect(() => {
    const newStage = getCurrentStage(intimacyScore);
    if (newStage !== relationshipStage) {
      setRelationshipStage(newStage);
      setShowMilestone(true);
      setTimeout(() => setShowMilestone(false), 3000);
    }
    setUnlockedScenarios(getUnlockedScenarios(intimacyScore));
  }, [intimacyScore]);

  const handleIntimacyGain = (points) => {
    setRecentGain(points);
    setIntimacyScore(prev => prev + points);
    setTimeout(() => setRecentGain(0), 2000);
  };

  const currentStageData = relationshipStages[relationshipStage];
  const progress = getStageProgress(intimacyScore, relationshipStage);
  const nextMilestone = getNextMilestone(intimacyScore);

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${currentStageData.color} flex items-center justify-center text-xl`}>
            {currentStageData.icon}
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">{currentStageData.name}</h3>
            <p className="text-white/60 text-sm">{currentStageData.description}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-2 text-white">
            <Heart className="w-5 h-5 text-red-400" />
            <span className="font-bold text-xl">{intimacyScore}</span>
          </div>
          <AnimatePresence>
            {recentGain > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: -20 }}
                exit={{ opacity: 0, y: -40 }}
                className="text-green-400 text-sm font-medium"
              >
                +{recentGain}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-white/80 text-sm">当前阶段进度</span>
          <span className="text-white/60 text-sm">{progress.toFixed(1)}%</span>
        </div>
        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${currentStageData.color}`}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Next Milestone */}
      {nextMilestone && (
        <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-2 mb-2">
            <Trophy className="w-4 h-4 text-yellow-400" />
            <span className="text-white font-medium text-sm">下一个里程碑</span>
          </div>
          <div className="text-white text-sm">
            {nextMilestone.name} 
            <span className="text-white/60 ml-2">
              还需 {nextMilestone.remaining} 亲密度
            </span>
          </div>
        </div>
      )}

      {/* Unlocked Benefits */}
      <div className="mb-6">
        <h4 className="text-white font-semibold mb-3 flex items-center">
          <Unlock className="w-4 h-4 mr-2 text-green-400" />
          已解锁权益
        </h4>
        <div className="grid grid-cols-2 gap-2">
          {currentStageData.benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-2 text-white/70 text-sm">
              <Star className="w-3 h-3 text-yellow-400" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Unlocked Scenarios */}
      <div>
        <h4 className="text-white font-semibold mb-3 flex items-center">
          <Gift className="w-4 h-4 mr-2 text-purple-400" />
          解锁场景 ({unlockedScenarios.length}/{scenarios.length})
        </h4>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {scenarios.map((scenario) => {
            const isUnlocked = intimacyScore >= scenario.requiredScore;
            return (
              <div
                key={scenario.id}
                className={`flex items-center justify-between p-2 rounded-lg ${
                  isUnlocked ? 'bg-green-500/20 border border-green-500/30' : 'bg-white/5 border border-white/10'
                }`}
              >
                <span className={`text-sm ${isUnlocked ? 'text-green-300' : 'text-white/50'}`}>
                  {scenario.name}
                </span>
                <div className="flex items-center space-x-2">
                  <span className={`text-xs ${isUnlocked ? 'text-green-400' : 'text-white/40'}`}>
                    {scenario.requiredScore}
                  </span>
                  {isUnlocked ? (
                    <Unlock className="w-3 h-3 text-green-400" />
                  ) : (
                    <Lock className="w-3 h-3 text-white/40" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Milestone Celebration */}
      <AnimatePresence>
        {showMilestone && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center max-w-sm mx-4"
            >
              <div className="text-4xl mb-4">{currentStageData.icon}</div>
              <h3 className="text-white font-bold text-xl mb-2">关系升级！</h3>
              <p className="text-white/90 mb-4">
                你们的关系进入了新阶段：{currentStageData.name}
              </p>
              <div className="flex items-center justify-center space-x-2 text-yellow-300">
                <Trophy className="w-5 h-5" />
                <span className="font-medium">解锁了新的特权和场景</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Debug Controls (for testing) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="mt-6 pt-4 border-t border-white/10">
          <div className="flex space-x-2">
            <button
              onClick={() => handleIntimacyGain(10)}
              className="px-3 py-1 bg-green-500/20 text-green-300 rounded text-xs"
            >
              +10
            </button>
            <button
              onClick={() => handleIntimacyGain(50)}
              className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded text-xs"
            >
              +50
            </button>
            <button
              onClick={() => handleIntimacyGain(100)}
              className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded text-xs"
            >
              +100
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IntimacyManager;