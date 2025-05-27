import React, { useState } from "react";
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

const OctopodaMinimal = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(-1);

  // Navigation Component
  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-octopoda-primary">
            Octopada.io
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Features', 'Mentors', 'Pricing'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-octopoda-primary transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden md:block bg-octopoda-coral text-white px-6 py-2 rounded-lg font-medium hover:bg-coral-600 transition-colors duration-200">
            Start Growing
          </button>

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
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 space-y-4">
            {['Features', 'Mentors', 'Pricing'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-600 hover:text-octopoda-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full bg-octopoda-coral text-white px-6 py-2 rounded-lg font-medium hover:bg-coral-600 transition-colors duration-200">
              Start Growing
            </button>
          </div>
        </div>
      )}
    </nav>
  );

  // Hero Section with Hyper-Realistic AI Companion
  const HeroSection = () => (
    <section className="pt-24 pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Meet Your
                <span className="block text-octopoda-coral">
                  AI Growth Mentor
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                Experience hyper-realistic AI companions designed for meaningful growth. 
                Personal mentorship that understands your journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-octopoda-coral text-white px-8 py-3 rounded-lg font-medium hover:bg-coral-600 transition-colors duration-200 flex items-center justify-center">
                Start Your Journey
                <ArrowRight className="ml-2" size={18} />
              </button>

              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center">
                <Play className="mr-2" size={18} />
                Watch Demo
              </button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-500">
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-octopoda-sage" />
                Hyper-Realistic AI
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-octopoda-sage" />
                Privacy-First
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-octopoda-sage" />
                Personal Growth
              </span>
            </div>
          </div>

          {/* Right side - Hyper-Realistic AI Companion */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 lg:p-12">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
                alt="Hyper-Realistic AI Mentor"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              
              {/* Floating elements to show AI interaction */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 max-w-xs">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-xs font-medium text-gray-600">AI Mentor Active</span>
                </div>
                <p className="text-sm text-gray-700">
                  "I understand your career goals. Let's create a personalized growth plan together."
                </p>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-octopoda-coral text-white rounded-lg shadow-lg p-3">
                <div className="text-xs font-medium mb-1">Growth Progress</div>
                <div className="flex items-center space-x-2">
                  <div className="bg-white/20 rounded-full h-2 w-16">
                    <div className="bg-white rounded-full h-2 w-12"></div>
                  </div>
                  <span className="text-xs">75%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Features Section
  const FeaturesSection = () => (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Beyond Traditional Chatbots
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience authentic mentorship with AI companions designed for meaningful personal growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Brain className="w-6 h-6" />,
              title: "Realistic Conversations",
              description: "Natural dialogue that adapts to your personality and communication style"
            },
            {
              icon: <Heart className="w-6 h-6" />,
              title: "Emotional Intelligence",
              description: "AI that understands emotions and responds with empathy and care"
            },
            {
              icon: <TrendingUp className="w-6 h-6" />,
              title: "Personal Growth Plans",
              description: "Customized development paths based on your goals and progress"
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Co-Creation Journey",
              description: "Shape your mentor's guidance and influence your growth story"
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Privacy Protected",
              description: "Your conversations and personal data are completely secure"
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Always Available",
              description: "24/7 access to mentorship whenever you need guidance"
            }
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-octopoda-coral mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Mentor Matrix Section
  const MentorSection = () => (
    <section id="mentors" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your AI Mentor
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each mentor specializes in different areas of personal and professional growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              category: "Career Growth",
              image: "https://images.pexels.com/photos/7278797/pexels-photo-7278797.jpeg",
              description: "Leadership, career transitions, and professional development",
              expertise: ["Leadership", "Career Planning", "Skill Development"]
            },
            {
              category: "Mental Wellness", 
              image: "https://images.pexels.com/photos/3693056/pexels-photo-3693056.jpeg",
              description: "Emotional support, stress management, and mindfulness",
              expertise: ["Stress Relief", "Mindfulness", "Life Balance"]
            },
            {
              category: "Family & Relationships",
              image: "https://images.unsplash.com/photo-1593323925814-253c803de3a5",
              description: "Family dynamics, parenting, and relationship guidance",
              expertise: ["Parenting", "Communication", "Family Planning"]
            },
            {
              category: "Life Navigation",
              image: "https://images.unsplash.com/photo-1541130292430-a832637ddc0d",
              description: "Life transitions, goal setting, and personal growth",
              expertise: ["Goal Setting", "Life Planning", "Personal Growth"]
            },
            {
              category: "Professional Development",
              image: "https://images.unsplash.com/photo-1496180470114-6ef490f3ff22",
              description: "Industry expertise and specialized skill building",
              expertise: ["Industry Knowledge", "Skills", "Networking"]
            }
          ].map((mentor, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={mentor.image}
                  alt={mentor.category}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {mentor.category}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {mentor.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {mentor.expertise.map((skill, j) => (
                    <span
                      key={j}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Pricing Section
  const PricingSection = () => (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600">
            Choose the plan that fits your growth journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Starter",
              price: "¥19",
              period: "/month",
              description: "Perfect for exploring AI mentorship",
              features: [
                "Basic AI conversations",
                "Personal growth tracking",
                "Community access",
                "Email support"
              ],
              isPopular: false,
              buttonText: "Get Started"
            },
            {
              name: "Growth", 
              price: "¥69",
              period: "/month",
              description: "Full AI mentorship experience",
              features: [
                "Advanced AI mentoring",
                "Personalized growth plans",
                "Priority support",
                "Progress analytics",
                "Co-creation features"
              ],
              isPopular: true,
              buttonText: "Start Growing"
            },
            {
              name: "Enterprise",
              price: "Custom",
              period: "",
              description: "For teams and organizations",
              features: [
                "Team mentoring solutions",
                "Custom AI training",
                "Advanced analytics",
                "Dedicated support",
                "API access"
              ],
              isPopular: false,
              buttonText: "Contact Sales"
            }
          ].map((plan, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl p-6 border-2 ${
                plan.isPopular ? 'border-octopoda-coral shadow-lg' : 'border-gray-100'
              } relative`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-octopoda-coral text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">
                    {plan.period}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-octopoda-sage mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
                  plan.isPopular
                    ? 'bg-octopoda-coral text-white hover:bg-coral-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // FAQ Section
  const FAQSection = () => {
    const faqs = [
      {
        question: "How realistic are the AI mentors?",
        answer: "Our AI mentors use advanced language models and personality frameworks to create natural, empathetic conversations that feel genuinely human while maintaining consistency in their guidance."
      },
      {
        question: "Is my personal information secure?",
        answer: "Yes, we use bank-grade encryption and never share your personal conversations. Your privacy and emotional safety are our top priorities."
      },
      {
        question: "Can I switch between different mentors?",
        answer: "Absolutely! You can work with different mentors based on your current needs, whether it's career growth, wellness, or family guidance."
      },
      {
        question: "How does the co-creation feature work?",
        answer: "You can influence your mentor's approach and guidance style through feedback, helping shape a more personalized mentorship experience."
      }
    ];

    return (
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about AI mentorship
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? -1 : i)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                  {openFAQ === i ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                
                {openFAQ === i && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Final CTA Section
  const FinalCTASection = () => (
    <section className="py-16 bg-octopoda-primary">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Start Growing?
          </h2>

          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Join thousands who've found meaningful growth with AI mentorship.
            Your journey to personal development starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-octopoda-coral text-white px-8 py-3 rounded-lg font-medium hover:bg-coral-600 transition-colors duration-200">
              Start Free Trial
            </button>
            <button className="border border-blue-300 text-blue-100 px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
              Schedule Demo
            </button>
          </div>

          <div className="flex justify-center gap-6 text-sm text-blue-200">
            <span>✓ 30-day free trial</span>
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );

  // Minimal Footer
  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-octopoda-coral">
              Octopada.io
            </h3>
            <p className="text-gray-400 text-sm">
              AI mentorship for meaningful personal growth and authentic connections.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">AI Mentors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Growth Plans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <div className="flex space-x-4">
              {[
                { icon: <Twitter size={16} />, href: "#" },
                { icon: <Linkedin size={16} />, href: "#" },
                { icon: <Instagram size={16} />, href: "#" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-octopada-coral transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Octopada.io. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <MentorSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default OctopodaMinimal;