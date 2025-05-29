import React, { useState, useContext, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Upload, 
  Camera, 
  Sparkles, 
  ArrowLeft, 
  Check, 
  Shuffle,
  Download,
  Share2,
  Edit
} from 'lucide-react';
import { AppContext } from '../App';

// Avatar gallery images - Updated from user's gallery
const avatarGallery = [
  'https://images.pexels.com/photos/32207012/pexels-photo-32207012.jpeg',
  'https://images.pexels.com/photos/32225457/pexels-photo-32225457.jpeg',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
  'https://images.unsplash.com/photo-1556157382-97eda2d62296',
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf',
  'https://images.pexels.com/photos/32225449/pexels-photo-32225449.jpeg',
  'https://images.unsplash.com/photo-1507522682902-781c2e75716b',
  'https://images.pexels.com/photos/30404720/pexels-photo-30404720.jpeg',
  'https://images.pexels.com/photos/30404725/pexels-photo-30404725.jpeg',
  'https://images.unsplash.com/photo-1576558656222-ba66febe3dec',
  'https://images.unsplash.com/photo-1657128344786-360c3f8e57e5',
  'https://images.pexels.com/photos/10599803/pexels-photo-10599803.jpeg'
];

const AvatarCreation = () => {
  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  
  const [step, setStep] = useState(1); // 1: Choose method, 2: Gallery/Upload, 3: AI Generation, 4: Preview/Save
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [aiPreferences, setAiPreferences] = useState({
    gender: 'any',
    age: 'young-adult',
    style: 'realistic',
    ethnicity: 'diverse'
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedAvatars, setGeneratedAvatars] = useState([]);

  const handleMethodSelect = (method) => {
    if (method === 'gallery') {
      setStep(2);
    } else if (method === 'upload') {
      fileInputRef.current?.click();
    } else if (method === 'ai') {
      setStep(3);
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
        setStep(4);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
    setStep(4);
  };

  const generateAIAvatars = async () => {
    setIsGenerating(true);
    
    // Simulate AI generation delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Mock generated avatars based on preferences
    const mockGenerated = avatarGallery.slice(0, 4).map((url, index) => ({
      id: index,
      url: url,
      style: aiPreferences.style,
      confidence: Math.random() * 20 + 80 // 80-100%
    }));
    
    setGeneratedAvatars(mockGenerated);
    setIsGenerating(false);
    setStep(4);
  };

  const saveAvatar = async () => {
    const avatarUrl = selectedAvatar || uploadedImage || generatedAvatars[0]?.url;
    
    // Update user with new avatar
    const updatedUser = {
      ...user,
      avatar: avatarUrl,
      hasCustomAvatar: true
    };
    
    localStorage.setItem('octopada_user', JSON.stringify(updatedUser));
    setUser(updatedUser);
    
    navigate('/dashboard');
  };

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
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4].map((stepNumber) => (
                  <div
                    key={stepNumber}
                    className={`w-3 h-3 rounded-full ${
                      step >= stepNumber ? 'bg-purple-400' : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
              <Link to="/dashboard" className="text-purple-300 hover:text-white">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          {/* Step 1: Choose Creation Method */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-4">您想如何创建头像？</h2>
              <p className="text-purple-300 mb-12">选择最适合您的方法</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Gallery Selection */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleMethodSelect('gallery')}
                  className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 cursor-pointer hover:border-purple-400 transition-all"
                >
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mb-6">
                    <Camera className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">从图库选择</h3>
                  <p className="text-purple-300">从我们精选的美丽、多样化头像库中选择</p>
                </motion.div>

                {/* Photo Upload */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleMethodSelect('upload')}
                  className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 cursor-pointer hover:border-purple-400 transition-all"
                >
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                    <Upload className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">上传您的照片</h3>
                  <p className="text-purple-300">使用AI将您的照片转换为风格化头像</p>
                </motion.div>

                {/* AI Generation */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleMethodSelect('ai')}
                  className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 cursor-pointer hover:border-purple-400 transition-all"
                >
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl flex items-center justify-center mb-6">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">AI生成</h3>
                  <p className="text-purple-300">基于您的偏好创建独特头像</p>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Gallery Selection */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Choose Your Avatar</h2>
                <p className="text-purple-300">Select from our collection of beautiful, diverse avatars</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {avatarGallery.map((avatar, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAvatarSelect(avatar)}
                    className="relative cursor-pointer group"
                  >
                    <img
                      src={avatar}
                      alt={`Avatar ${index + 1}`}
                      className="w-full aspect-square object-cover rounded-2xl border-2 border-transparent group-hover:border-purple-400 transition-all"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                      <Check className="h-8 w-8 text-white" />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors"
                >
                  Back to Options
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: AI Preferences */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">AI Avatar Preferences</h2>
                <p className="text-purple-300">Tell us what kind of avatar you'd like to generate</p>
              </div>

              <div className="max-w-2xl mx-auto space-y-8">
                {/* Gender */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Gender</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {['male', 'female', 'any'].map((option) => (
                      <button
                        key={option}
                        onClick={() => setAiPreferences({...aiPreferences, gender: option})}
                        className={`py-3 px-6 rounded-xl capitalize transition-all ${
                          aiPreferences.gender === option
                            ? 'bg-purple-500 text-white'
                            : 'bg-white/10 text-purple-300 hover:bg-white/20'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Age */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Age Range</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {['young', 'young-adult', 'mature'].map((option) => (
                      <button
                        key={option}
                        onClick={() => setAiPreferences({...aiPreferences, age: option})}
                        className={`py-3 px-6 rounded-xl capitalize transition-all ${
                          aiPreferences.age === option
                            ? 'bg-purple-500 text-white'
                            : 'bg-white/10 text-purple-300 hover:bg-white/20'
                        }`}
                      >
                        {option.replace('-', ' ')}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Style */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Style</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {['realistic', 'artistic', 'modern'].map((option) => (
                      <button
                        key={option}
                        onClick={() => setAiPreferences({...aiPreferences, style: option})}
                        className={`py-3 px-6 rounded-xl capitalize transition-all ${
                          aiPreferences.style === option
                            ? 'bg-purple-500 text-white'
                            : 'bg-white/10 text-purple-300 hover:bg-white/20'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-4 pt-8">
                  <button
                    onClick={() => setStep(1)}
                    className="px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors"
                  >
                    Back
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={generateAIAvatars}
                    disabled={isGenerating}
                    className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold disabled:opacity-50"
                  >
                    {isGenerating ? (
                      <div className="flex items-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Generating...
                      </div>
                    ) : (
                      <>
                        <Sparkles className="h-5 w-5 mr-2 inline" />
                        Generate Avatars
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 4: Preview & Save */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Perfect! Your Avatar is Ready</h2>
                <p className="text-purple-300">Review your avatar and save it to your profile</p>
              </div>

              <div className="flex justify-center mb-8">
                <div className="relative">
                  <img
                    src={selectedAvatar || uploadedImage || generatedAvatars[0]?.url}
                    alt="Selected Avatar"
                    className="w-64 h-64 object-cover rounded-3xl border-4 border-purple-400"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
                  >
                    <Check className="h-4 w-4 text-white" />
                  </motion.div>
                </div>
              </div>

              {/* Generated Options */}
              {generatedAvatars.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">Other Generated Options</h3>
                  <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
                    {generatedAvatars.slice(1).map((avatar) => (
                      <motion.div
                        key={avatar.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleAvatarSelect(avatar.url)}
                        className="cursor-pointer"
                      >
                        <img
                          src={avatar.url}
                          alt={`Generated ${avatar.id}`}
                          className="w-full aspect-square object-cover rounded-xl border-2 border-white/20 hover:border-purple-400 transition-colors"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => setStep(generatedAvatars.length > 0 ? 3 : 2)}
                  className="px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors"
                >
                  Choose Different
                </button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={saveAvatar}
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold"
                >
                  Save Avatar
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default AvatarCreation;