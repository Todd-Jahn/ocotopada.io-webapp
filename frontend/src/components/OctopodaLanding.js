import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Brain, 
  Heart, 
  Users, 
  Shield, 
  CheckCircle, 
  Star,
  ArrowRight,
  Play,
  Lock,
  Zap,
  MessageCircle,
  TrendingUp,
  Menu,
  X
} from "lucide-react";

const OctopodaLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [kolsRef, kolsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [trustRef, trustInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [pricingRef, pricingInView] = useInView({ threshold: 0.2, triggerOnce: true });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Navigation Component
  const Navigation = () => (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-octopoda-primary"
          >
            Octopoda.io
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Features', 'Mentors', 'Pricing', 'About'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.05 }}
                className="text-gray-700 hover:text-octopoda-primary transition-colors duration-300"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-octopoda-coral text-white px-6 py-2 rounded-full font-semibold hover:bg-coral-600 transition-colors duration-300"
          >
            Start Growing
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="px-6 py-4 space-y-4">
            {['Features', 'Mentors', 'Pricing', 'About'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-700 hover:text-octopoda-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full bg-octopoda-coral text-white px-6 py-2 rounded-full font-semibold hover:bg-coral-600 transition-colors duration-300">
              Start Growing
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );

  // Hero Section
  const HeroSection = () => (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, rgba(36, 66, 133, 0.95) 0%, rgba(95, 168, 150, 0.85) 100%), url('https://images.unsplash.com/photo-1655393001768-d946c97d6fd1') center/cover`
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
          >
            Meet Your
            <span className="block bg-gradient-to-r from-octopoda-coral to-yellow-400 bg-clip-text text-transparent">
              AI-Powered
            </span>
            <span className="block">Growth Mentors</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
          >
            Experience hyper-realistic virtual mentors with genuine storylines. 
            Co-create your growth journey through personalized 1-on-1 interactions, 
            growth diaries, and meaningful connections that go beyond entertainment.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 114, 98, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-octopoda-coral text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-coral-600 transition-all duration-300"
            >
              Start Your Growth Journey
              <ArrowRight className="inline ml-2" size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-medium backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <Play className="mr-2" size={20} />
              Watch Demo
            </motion.button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-8 text-white/80 text-sm"
          >
            {[
              "✓ Hyper-Realistic AI Mentors",
              "✓ Co-Creation & Story Influence", 
              "✓ Privacy-First Approach",
              "✓ Multi-Channel Access"
            ].map((item, i) => (
              <span key={i} className="flex items-center">
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );

  // Features Section
  const FeaturesSection = () => (
    <section id="features" ref={featuresRef} className="py-24 bg-octopoda-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={featuresInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-octopoda-primary mb-6"
          >
            Beyond Entertainment
            <span className="block text-octopoda-sage">Real Growth, Real Stories</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our AI-powered mentors feature life-like expressions, natural voice interactions, 
            and immersive personalities that bridge digital companionship with genuine human connection.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={featuresInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              icon: <Brain className="w-8 h-8" />,
              title: "Realistic Growth Storylines",
              description: "Experience authentic narratives rooted in real social and professional challenges, not scripted entertainment."
            },
            {
              icon: <MessageCircle className="w-8 h-8" />,
              title: "1-on-1 Personalized Interactions",
              description: "Subscribe for exclusive mentorship sessions tailored to your unique growth needs and life circumstances."
            },
            {
              icon: <TrendingUp className="w-8 h-8" />,
              title: "Growth Diaries & Tailored Advice",
              description: "Track your progress with personalized growth journals and receive targeted guidance for your journey."
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Co-Creation & Story Influence",
              description: "Shape mentor storylines and influence their growth paths. Your input matters in our community-driven approach."
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Multi-Channel Access",
              description: "Connect with your mentors across various platforms and formats that fit your lifestyle and preferences."
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Privacy & Trust-First",
              description: "Your emotional safety is paramount. Professional-grade privacy protection with transparent data practices."
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(36, 66, 133, 0.1)" 
              }}
              className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 hover:border-octopoda-sage/30 transition-all duration-300"
            >
              <div className="text-octopoda-coral mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-octopoda-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );

  // Virtual KOL Matrix Section
  const KOLSection = () => (
    <section id="mentors" ref={kolsRef} className="py-24 bg-gradient-to-br from-octopoda-primary to-octopoda-sage">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={kolsInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Virtual KOL Matrix
            <span className="block text-octopoda-coral">Choose Your Growth Path</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Each mentor features hyper-realistic visual design with life-like expressions, 
            expressive gestures, and nuanced emotions for authentic connections.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={kolsInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              category: "Career Growth Mentors",
              image: "https://images.pexels.com/photos/7616608/pexels-photo-7616608.jpeg",
              description: "职场成长/创业/管理/女性升职等",
              expertise: ["Leadership Development", "Career Transitions", "Entrepreneurship", "Professional Skills"],
              color: "bg-gradient-to-br from-blue-500 to-indigo-600"
            },
            {
              category: "Mental Wellness Guides", 
              image: "https://images.unsplash.com/photo-1541588007165-da26f41a1996",
              description: "心理陪伴/情绪疗愈/抗焦虑/人生规划",
              expertise: ["Emotional Healing", "Anxiety Management", "Life Planning", "Mindfulness"],
              color: "bg-gradient-to-br from-green-500 to-emerald-600"
            },
            {
              category: "Family & Relationship Coaches",
              image: "https://images.unsplash.com/photo-1559734840-f9509ee5677f",
              description: "亲子教育/婚姻沟通/亲密关系/家庭成长",
              expertise: ["Parenting Guidance", "Marriage Communication", "Family Dynamics", "Relationship Building"],
              color: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              category: "Life Journey Navigators",
              image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659",
              description: "北漂青年/独居成长/社会变动适应/个人突破",
              expertise: ["Life Transitions", "Social Adaptation", "Personal Growth", "Urban Living"],
              color: "bg-gradient-to-br from-purple-500 to-violet-600"
            },
            {
              category: "Professional Skill Experts",
              image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
              description: "医生、教师、咨询师等垂直领域成长型KOL",
              expertise: ["Industry Expertise", "Skill Development", "Professional Growth", "Specialized Knowledge"],
              color: "bg-gradient-to-br from-orange-500 to-red-600"
            }
          ].map((kol, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(255, 255, 255, 0.1)"
              }}
              className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 ${kol.color} opacity-80`}></div>
                <img 
                  src={kol.image}
                  alt={kol.category}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-octopoda-coral transition-colors duration-300">
                  {kol.category}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {kol.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {kol.expertise.map((skill, j) => (
                    <span
                      key={j}
                      className="text-xs bg-white/20 text-white px-2 py-1 rounded-full border border-white/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-4 right-4 bg-octopoda-coral text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-coral-600"
              >
                <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );

  // Trust & Privacy Section
  const TrustSection = () => (
    <section id="trust" ref={trustRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={trustInView ? "visible" : "hidden"}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-octopoda-primary mb-6">
              Trust & Privacy
              <span className="block text-octopoda-sage">Your Safety, Our Priority</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Unlike entertainment chatbots, our platform prioritizes emotional safety 
              and professional-grade mentorship with transparent data practices.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "Professional Team + AI Quality Assurance",
                  description: "Continuous quality monitoring ensures high-value mentorship content"
                },
                {
                  icon: <Lock className="w-6 h-6" />,
                  title: "Privacy & Emotional Safety First",
                  description: "Your personal data and emotional well-being are protected with industry-leading security"
                },
                {
                  icon: <CheckCircle className="w-6 h-6" />,
                  title: "Trusted AI Companionship",
                  description: "Real growth focus with authentic, professional-grade mentorship experiences"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 p-3 bg-octopoda-sage/10 rounded-xl text-octopoda-sage">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-octopoda-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate={trustInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Digital Security"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-octopoda-primary/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Bank-Grade Security</h3>
                <p className="text-gray-200">Your data is encrypted and protected</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <KOLSection />
      <TrustSection />
      {/* More sections will be added in the next file update */}
    </div>
  );
};

export default OctopodaLanding;