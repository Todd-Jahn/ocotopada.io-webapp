import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  CheckCircle, 
  Star,
  ArrowRight,
  Users,
  MessageSquare,
  Zap,
  Crown,
  ChevronDown,
  ChevronUp
} from "lucide-react";

// How It Works Section
export const HowItWorksSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } }
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-octopoda-ivory to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
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
          animate={inView ? "visible" : "hidden"}
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
};

// Social Proof Section
export const SocialProofSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <section ref={ref} className="py-24 bg-octopoda-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
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
          animate={inView ? "visible" : "hidden"}
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
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              name: "Sarah Chen",
              role: "Marketing Professional",
              content: "The career growth mentor helped me navigate a difficult promotion. The advice felt so personal and realistic - nothing like typical chatbots.",
              rating: 5,
              image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659"
            },
            {
              name: "Michael Zhang", 
              role: "New Parent",
              content: "Our family coach provided incredible support during our transition to parenthood. The co-creation feature made our sessions truly meaningful.",
              rating: 5,
              image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659"
            },
            {
              name: "Lisa Wang",
              role: "Wellness Enthusiast", 
              content: "The mental wellness guide has been transformative for my anxiety management. Privacy-first approach gave me confidence to open up.",
              rating: 5,
              image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659"
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
};

// Pricing Section
export const PricingSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

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

  return (
    <section id="pricing" ref={ref} className="py-24 bg-gradient-to-br from-octopoda-ivory to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
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
          animate={inView ? "visible" : "hidden"}
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
          animate={inView ? "visible" : "hidden"}
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
};

// FAQ Section
export const FAQSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [openIndex, setOpenIndex] = React.useState(0);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

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
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
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
          animate={inView ? "visible" : "hidden"}
          className="space-y-4"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-octopoda-ivory/50 rounded-2xl border border-gray-200/50 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/50 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-octopoda-primary pr-4">
                  {faq.question}
                </h3>
                {openIndex === i ? (
                  <ChevronUp className="w-6 h-6 text-octopoda-coral flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-octopoda-coral flex-shrink-0" />
                )}
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === i ? 'auto' : 0,
                  opacity: openIndex === i ? 1 : 0
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
export const FinalCTASection = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <section 
      ref={ref} 
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
          animate={inView ? "visible" : "hidden"}
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
};