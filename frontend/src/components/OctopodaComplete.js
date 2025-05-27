import React, { useState } from "react";
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
  X,
  MessageSquare,
  Crown,
  ChevronDown,
  ChevronUp,
  Mail,
  Twitter,
  Linkedin,
  Instagram,
  ExternalLink
} from "lucide-react";

const OctopodaComplete = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(0);

  // Intersection observers for animations
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [kolsRef, kolsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [trustRef, trustInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [howItWorksRef, howItWorksInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [socialProofRef, socialProofInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [pricingRef, pricingInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [faqRef, faqInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [finalCTARef, finalCTAInView] = useInView({ threshold: 0.3, triggerOnce: true });

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

  // How It Works Section
  const HowItWorksSection = () => (
    <section ref={howItWorksRef} className="py-24 bg-gradient-to-br from-octopoda-ivory to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={howItWorksInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-octopoda-primary mb-6"
          >
            How It Works
            <span className="block text-octopoda-coral">Simple. Personal. Effective.</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Start your growth journey in three simple steps with our hyper-realistic AI mentors
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={howItWorksInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 relative"
        >
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-octopoda-sage to-octopoda-coral transform -translate-y-1/2"></div>
          
          {[
            {
              step: "01",
              title: "Choose Your Mentor",
              description: "Browse our matrix of AI-powered mentors across career growth, wellness, family, and life navigation",
              icon: <Users className="w-8 h-8" />,
              color: "bg-octopoda-sage"
            },
            {
              step: "02", 
              title: "Subscribe & Connect",
              description: "Select your plan and begin personalized 1-on-1 interactions with growth diaries and tailored advice",
              icon: <MessageSquare className="w-8 h-8" />,
              color: "bg-octopoda-coral"
            },
            {
              step: "03",
              title: "Start Growing",
              description: "Co-create stories, influence narratives, and experience meaningful growth with trusted AI companionship",
              icon: <Zap className="w-8 h-8" />,
              color: "bg-octopoda-primary"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="relative text-center"
            >
              <div className="relative mx-auto w-20 h-20 mb-6">
                <div className={`absolute inset-0 ${item.color} rounded-full flex items-center justify-center text-white shadow-xl`}>
                  {item.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-xs font-bold text-gray-600 shadow-lg">
                  {item.step}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-octopoda-primary mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );

  // Social Proof Section
  const SocialProofSection = () => (
    <section ref={socialProofRef} className="py-24 bg-octopoda-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={socialProofInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Trusted by Growth Seekers
            <span className="block text-octopoda-coral">Real Stories, Real Impact</span>
          </motion.h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={socialProofInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { number: "10,000+", label: "Active Users" },
            { number: "50+", label: "AI Mentors" },
            { number: "95%", label: "Growth Success Rate" },
            { number: "24/7", label: "Available Support" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-octopoda-coral mb-2">
                {stat.number}
              </div>
              <div className="text-white/80 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={socialProofInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              name: "Sarah Chen",
              role: "Marketing Professional",
              content: "The career growth mentor helped me navigate a difficult promotion. The advice felt so personal and realistic - nothing like typical chatbots.",
              rating: 5
            },
            {
              name: "Michael Zhang", 
              role: "New Parent",
              content: "Our family coach provided incredible support during our transition to parenthood. The co-creation feature made our sessions truly meaningful.",
              rating: 5
            },
            {
              name: "Lisa Wang",
              role: "Wellness Enthusiast", 
              content: "The mental wellness guide has been transformative for my anxiety management. Privacy-first approach gave me confidence to open up.",
              rating: 5
            }
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-white/90 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-octopoda-coral rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-white/60 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );

  // Pricing Section
  const PricingSection = () => (
    <section id="pricing" ref={pricingRef} className="py-24 bg-gradient-to-br from-octopoda-ivory to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={pricingInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-octopoda-primary mb-6"
          >
            Choose Your Growth Plan
            <span className="block text-octopoda-coral">High Value, Flexible Pricing</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Start with our basic plan and upgrade as you grow. All plans include privacy-first protection.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={pricingInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {[
            {
              name: "Basic Growth",
              price: "¥19",
              period: "/month",
              description: "Perfect for getting started with AI mentorship",
              features: [
                "Basic growth content access",
                "AI companion diary",
                "Community forum access",
                "Monthly progress reports",
                "Email support"
              ],
              isPopular: false,
              buttonText: "Start Basic",
              color: "border-gray-200"
            },
            {
              name: "Premium Mentorship", 
              price: "¥69",
              period: "/month",
              description: "Everything you need for accelerated growth",
              features: [
                "Exclusive KOL growth profiles",
                "1-on-1 personalized interactions",
                "Custom growth diary & advice",
                "Priority co-creation participation",
                "Multi-channel access",
                "Priority support",
                "Advanced analytics"
              ],
              isPopular: true,
              buttonText: "Go Premium",
              color: "border-octopoda-coral"
            },
            {
              name: "Enterprise",
              price: "Custom",
              period: "",
              description: "Tailored solutions for organizations",
              features: [
                "Custom mentor development",
                "Team collaboration tools",
                "Advanced analytics dashboard",
                "Dedicated account manager",
                "API access",
                "Custom integrations",
                "24/7 premium support"
              ],
              isPopular: false,
              buttonText: "Contact Sales",
              color: "border-octopoda-primary"
            }
          ].map((plan, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              whileHover={{ 
                scale: 1.05,
                boxShadow: plan.isPopular 
                  ? "0 25px 50px rgba(255, 114, 98, 0.2)" 
                  : "0 20px 40px rgba(36, 66, 133, 0.1)"
              }}
              className={`relative bg-white rounded-2xl p-8 border-2 ${plan.color} ${
                plan.isPopular ? 'shadow-xl ring-4 ring-octopoda-coral/20' : 'shadow-lg'
              } transition-all duration-300`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-octopoda-coral text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Crown className="w-4 h-4 mr-2" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-octopoda-primary mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-octopoda-primary">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">
                    {plan.period}
                  </span>
                </div>
                <p className="text-gray-600">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-octopoda-sage mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-octopoda-coral text-white hover:bg-coral-600 shadow-lg'
                    : 'bg-octopoda-primary text-white hover:bg-blue-700'
                }`}
              >
                {plan.buttonText}
                <ArrowRight className="inline ml-2" size={18} />
              </motion.button>

              {plan.isPopular && (
                <div className="mt-4 text-center">
                  <span className="text-sm text-octopoda-coral font-medium">
                    ✨ First month trial available
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={pricingInView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            All plans include our privacy-first guarantee and can be upgraded anytime
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>✓ No hidden fees</span>
            <span>✓ Cancel anytime</span>
            <span>✓ 30-day money back</span>
            <span>✓ Secure payments</span>
          </div>
        </motion.div>
      </div>
    </section>
  );

  // FAQ Section
  const FAQSection = () => {
    const faqs = [
      {
        question: "How are Octopoda's AI mentors different from regular chatbots?",
        answer: "Our AI mentors feature hyper-realistic visual design with life-like expressions, natural voice interactions, and professional-grade storylines rooted in real social and professional challenges. Unlike entertainment chatbots, we focus on meaningful growth and authentic mentorship experiences."
      },
      {
        question: "How does the co-creation feature work?",
        answer: "You can actively influence your mentor's storylines and growth paths through our co-creation system. Your input helps shape narratives, making each interaction truly personalized and community-driven. This collaborative approach ensures your mentorship experience evolves with your needs."
      },
      {
        question: "Is my personal data and emotional sharing secure?",
        answer: "Absolutely. Privacy and emotional safety are our top priorities. We use bank-grade encryption, transparent data practices, and our professional team ensures quality monitoring. Your conversations and personal information are never shared or used for entertainment purposes."
      },
      {
        question: "Can I switch between different mentors?",
        answer: "Yes! Your subscription gives you access to our entire matrix of AI mentors across career growth, mental wellness, family coaching, and life navigation. You can engage with different mentors based on your current growth needs."
      },
      {
        question: "What makes the growth diaries special?",
        answer: "Our growth diaries are personalized tracking systems that adapt to your progress and goals. They provide tailored advice, milestone celebrations, and insights based on your interactions with mentors, creating a comprehensive growth journey record."
      },
      {
        question: "How do I upgrade or cancel my subscription?",
        answer: "You can upgrade your plan anytime through your dashboard to access more features. Cancellation is simple and can be done with no hidden fees. We also offer a 30-day money-back guarantee for new users."
      }
    ];

    return (
      <section ref={faqRef} className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-octopoda-primary mb-6">
              Frequently Asked Questions
              <span className="block text-octopoda-sage">We're here to help</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common questions about our AI mentorship platform and privacy practices
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-octopoda-ivory/50 rounded-2xl border border-gray-200/50 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? -1 : i)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/50 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-octopoda-primary pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === i ? (
                    <ChevronUp className="w-6 h-6 text-octopoda-coral flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-octopoda-coral flex-shrink-0" />
                  )}
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === i ? 'auto' : 0,
                    opacity: openFAQ === i ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  };

  // Final CTA Section
  const FinalCTASection = () => (
    <section 
      ref={finalCTARef} 
      className="py-24 bg-gradient-to-br from-octopoda-primary via-octopoda-sage to-octopoda-primary relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={finalCTAInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            Ready to Start Your
            <span className="block bg-gradient-to-r from-octopoda-coral to-yellow-400 bg-clip-text text-transparent">
              Growth Journey?
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            Join thousands of growth seekers who trust Octopoda.io for 
            meaningful AI mentorship. Experience the difference of hyper-realistic, 
            privacy-first virtual companionship.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px rgba(255, 114, 98, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-octopoda-coral text-white px-12 py-4 rounded-full text-xl font-semibold shadow-xl hover:bg-coral-600 transition-all duration-300"
            >
              Start Free Trial
              <ArrowRight className="inline ml-3" size={24} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white border-2 border-white/30 px-10 py-4 rounded-full text-xl font-medium backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              Schedule Demo
            </motion.button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-8 text-white/80 text-base"
          >
            {[
              "✨ First Month Trial Available",
              "🔒 Privacy-First Guaranteed", 
              "💝 30-Day Money Back",
              "🚀 Instant Access"
            ].map((item, i) => (
              <span key={i} className="flex items-center">
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );

  // Footer Component
  const Footer = () => (
    <footer className="bg-octopoda-primary text-white">
      {/* Pre-footer CTA */}
      <div className="border-b border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h3
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Stay Connected with Octopoda
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Get updates on new mentors, growth features, and community insights
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-octopoda-coral focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-octopoda-coral text-white px-8 py-3 rounded-full font-semibold hover:bg-coral-600 transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Company Info */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-octopoda-coral mb-4">
                  Octopoda.io
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Hyper-realistic AI mentorship platform focused on meaningful growth, 
                  privacy-first interactions, and authentic virtual companionship.
                </p>
              </div>
              
              <div className="flex space-x-4">
                {[
                  { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
                  { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
                  { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
                  { icon: <MessageCircle size={20} />, href: "#", label: "Discord" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-octopoda-coral transition-colors duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Platform */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-semibold mb-6 text-octopoda-coral">
                Platform
              </h4>
              <ul className="space-y-3">
                {[
                  "Career Growth Mentors",
                  "Mental Wellness Guides", 
                  "Family Coaches",
                  "Life Navigators",
                  "Professional Experts",
                  "Growth Diaries",
                  "Co-Creation Tools"
                ].map((item, i) => (
                  <li key={i}>
                    <a 
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      {item}
                      <ExternalLink 
                        size={12} 
                        className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-semibold mb-6 text-octopoda-coral">
                Support
              </h4>
              <ul className="space-y-3">
                {[
                  "Help Center",
                  "Getting Started",
                  "Privacy Guide",
                  "Community Forum", 
                  "Contact Support",
                  "Report Issues",
                  "Feature Requests"
                ].map((item, i) => (
                  <li key={i}>
                    <a 
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      {item}
                      <ExternalLink 
                        size={12} 
                        className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-semibold mb-6 text-octopoda-coral">
                Company
              </h4>
              <ul className="space-y-3">
                {[
                  "About Us",
                  "Our Mission",
                  "Privacy Policy",
                  "Terms of Service",
                  "Security",
                  "Careers",
                  "Press Kit"
                ].map((item, i) => (
                  <li key={i}>
                    <a 
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      {item}
                      <ExternalLink 
                        size={12} 
                        className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <motion.div 
              variants={fadeInUp}
              className="flex items-center space-x-6 text-gray-400 text-sm"
            >
              <span>© 2024 Octopoda.io. All rights reserved.</span>
              <div className="hidden md:flex items-center space-x-4">
                <Shield size={16} className="text-octopoda-sage" />
                <span>Privacy-First Guaranteed</span>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="flex items-center space-x-2 text-gray-400 text-sm"
            >
              <span>Made with</span>
              <Heart size={16} className="text-octopoda-coral" />
              <span>for meaningful growth</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <KOLSection />
      <TrustSection />
      <HowItWorksSection />
      <SocialProofSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default OctopodaComplete;