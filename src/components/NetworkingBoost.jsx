import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const NetworkingBoost = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Social media links
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Masthan008",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg",
      color: "hover:text-white"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/masthan-valli-0b225b321/",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg",
      color: "hover:text-[#0077b5]"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/masthan_0812/",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg",
      color: "hover:text-[#E4405F]"
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@CodeLessCraftStudio",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg",
      color: "hover:text-[#FF0000]"
    }
  ];

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate newsletter subscription (replace with actual API call)
    try {
      // Here you would integrate with Mailchimp, Supabase, or other service
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    } catch (error) {
      console.error("Newsletter subscription failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#915eff]/20 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Content */}
        <motion.div
          variants={textVariant()}
          className="text-center mb-12"
        >
          <p className={`${styles.sectionSubText} text-center`}>Let's Connect</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Networking <span className="text-[#915eff]">Boost</span>
          </h2>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="flex justify-center gap-8 mb-12"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-16 h-16 bg-tertiary rounded-full flex items-center justify-center social-icon-hover ${social.color} shadow-lg relative overflow-hidden`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#915eff] to-transparent opacity-0 rounded-full"
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
              <img
                src={social.icon}
                alt={social.name}
                className="w-8 h-8 object-contain filter invert"
                loading="lazy"
              />
              <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white font-medium bg-[#915eff] px-2 py-1 rounded opacity-0"
                whileHover={{ opacity: 1, bottom: -10 }}
                transition={{ duration: 0.2 }}
              >
                {social.name}
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          variants={fadeIn("up", "tween", 0.4, 1)}
          className="max-w-md mx-auto mb-12"
        >
          <motion.h3 
            className="text-white text-xl font-semibold text-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Stay Updated
          </motion.h3>
          <motion.p 
            className="text-secondary text-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Get the latest updates about my projects and tech insights!
          </motion.p>
          
          <motion.form 
            onSubmit={handleNewsletterSubmit} 
            className="flex gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <motion.input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-tertiary py-3 px-4 text-white rounded-lg outline-none border-none font-medium placeholder:text-secondary transition-all duration-300 focus:ring-2 focus:ring-[#915eff] focus:bg-[#1a1a2e]"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button
              type="submit"
              disabled={isLoading || !email}
              className="newsletter-button py-3 px-6 text-white font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  ⟳
                </motion.div>
              ) : (
                "Subscribe"
              )}
            </motion.button>
          </motion.form>

          {isSubscribed && (
            <motion.p
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-green-400 text-center mt-3 flex items-center justify-center gap-2"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                ✅
              </motion.span>
              Successfully subscribed!
            </motion.p>
          )}
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          variants={fadeIn("up", "tween", 0.6, 1)}
          className="border-t border-[#915eff]/20 pt-8 text-center"
        >
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.p 
              className="text-secondary text-sm"
              whileHover={{ color: "#ffffff", scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              © 2025 MASTHAN VALLI. All rights reserved.
            </motion.p>
            <div className="flex gap-6 text-sm">
              {["about", "work", "skills", "contact"].map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link}`}
                  className="text-secondary hover:text-white transition-colors capitalize relative"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 + (index * 0.1) }}
                  whileHover={{ 
                    scale: 1.1,
                    color: "#915eff"
                  }}
                >
                  {link === "work" ? "Experience" : link}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#915eff]"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-4 text-secondary text-xs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            <motion.p
              whileHover={{ scale: 1.05, color: "#ffffff" }}
              transition={{ duration: 0.2 }}
            >
              Built with React, Three.js & Passion ❤️
            </motion.p>
            <motion.p 
              className="mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              Follow <motion.span 
                className="text-[#915eff] cursor-pointer"
                whileHover={{ 
                  scale: 1.1,
                  textShadow: "0px 0px 8px #915eff"
                }}
                onClick={() => window.open("https://www.youtube.com/@CodeLessCraftStudio", "_blank")}
              >
                CodeLess Craft Studio
              </motion.span> on YouTube for more content!
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default SectionWrapper(NetworkingBoost, "networking");