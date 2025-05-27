import React from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  MessageCircle, 
  Twitter, 
  Linkedin, 
  Instagram,
  Shield,
  Heart,
  ExternalLink
} from "lucide-react";

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
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
};

export default Footer;