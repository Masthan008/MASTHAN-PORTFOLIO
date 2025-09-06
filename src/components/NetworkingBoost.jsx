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
    <footer className="bg-[#0a0a0a] border-t border-[#915eff]/20 py-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          background: 'linear-gradient(45deg, #915eff 0%, transparent 25%, #915eff 50%, transparent 75%, #915eff 100%)',
          backgroundSize: '200% 200%'
        }}
      />
      
      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#915eff] rounded-full opacity-30"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Content */}
        <motion.div
          variants={textVariant()}
          className="text-center mb-12 relative"
        >
          <motion.p 
            className={`${styles.sectionSubText} text-center`}
            animate={{
              textShadow: [
                "0 0 5px rgba(145, 94, 255, 0.5)",
                "0 0 15px rgba(145, 94, 255, 0.8)",
                "0 0 5px rgba(145, 94, 255, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Let's Connect
          </motion.p>
          <motion.h2 
            className={`${styles.sectionHeadText} text-center relative`}
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              className="text-white"
              animate={{
                textShadow: [
                  "0 0 10px rgba(145, 94, 255, 0.6)",
                  "0 0 20px rgba(145, 94, 255, 0.8)", 
                  "0 0 10px rgba(145, 94, 255, 0.6)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              whileHover={{
                color: "#915eff",
                textShadow: "0 0 25px rgba(145, 94, 255, 1)"
              }}
            >
              Networking{" "}
            </motion.span>
            <motion.span 
              className="text-[#915eff] inline-block"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1],
                textShadow: [
                  "0 0 10px rgba(145, 94, 255, 0.5)",
                  "0 0 20px rgba(145, 94, 255, 0.8)",
                  "0 0 10px rgba(145, 94, 255, 0.5)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Boost
            </motion.span>
            
            {/* Decorative elements around title */}
            <motion.div
              className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-[#915eff]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-[#915eff]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </motion.h2>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="flex justify-center gap-8 mb-12 relative"
        >
          {/* Connecting lines animation */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-0.5 bg-gradient-to-r from-transparent via-[#915eff] to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
          />
          
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.name}
              className="relative"
              initial={{ opacity: 0, y: 50, rotateY: -90 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
            >
              {/* Orbital ring animation */}
              <motion.div
                className="absolute inset-0 w-20 h-20 border border-[#915eff] rounded-full opacity-30"
                style={{ left: '-2px', top: '-2px' }}
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }
                }}
              />
              
              <motion.a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-16 h-16 bg-tertiary rounded-full flex items-center justify-center social-icon-hover ${social.color} shadow-lg relative overflow-hidden group`}
                whileHover={{ 
                  y: -12, 
                  scale: 1.15,
                  rotate: [0, -10, 10, 0],
                  boxShadow: "0 20px 40px rgba(145, 94, 255, 0.6)"
                }}
                whileTap={{ scale: 0.9, rotate: 15 }}
                onHoverStart={() => {
                  // Trigger pulse animation on hover
                }}
              >
                {/* Ripple effect */}
                <motion.div
                  className="absolute inset-0 bg-[#915eff] rounded-full opacity-0"
                  whileHover={{
                    scale: [1, 1.5, 2],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Icon with rotation */}
                <motion.img
                  src={social.icon}
                  alt={social.name}
                  className="w-8 h-8 object-contain filter invert relative z-10"
                  loading="lazy"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.2
                  }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Enhanced tooltip */}
                <motion.div
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-xs text-white font-medium bg-gradient-to-r from-[#915eff] to-[#7c45e8] px-3 py-2 rounded-lg opacity-0 pointer-events-none"
                  whileHover={{ 
                    opacity: 1, 
                    y: -5,
                    scale: 1.05
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {social.name}
                  <motion.div
                    className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#915eff] rotate-45"
                  />
                </motion.div>
                
                {/* Pulsing dot indicator */}
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.4
                  }}
                />
              </motion.a>
            </motion.div>
          ))}
          
          {/* Central connecting hub */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#915eff] rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              boxShadow: [
                "0 0 0 0 rgba(145, 94, 255, 0.7)",
                "0 0 0 20px rgba(145, 94, 255, 0)",
                "0 0 0 0 rgba(145, 94, 255, 0.7)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          variants={fadeIn("up", "tween", 0.4, 1)}
          className="max-w-md mx-auto mb-12 relative"
        >
          {/* Background glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#915eff]/20 via-transparent to-[#915eff]/20 rounded-2xl blur-xl"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.h3 
            className="text-white text-xl font-semibold text-center mb-4 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{
              textShadow: "0 0 20px rgba(145, 94, 255, 0.8)",
              scale: 1.05
            }}
          >
            <motion.span
              animate={{
                backgroundPosition: ['0%', '100%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                background: 'linear-gradient(90deg, #ffffff 0%, #915eff 50%, #ffffff 100%)',
                backgroundSize: '200% 100%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Stay Updated
            </motion.span>
            
            {/* Decorative stars */}
            <motion.span
              className="absolute -top-2 -right-6 text-[#915eff]"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ✨
            </motion.span>
          </motion.h3>
          
          <motion.p 
            className="text-secondary text-center mb-6 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.span
              whileHover={{
                color: "#ffffff",
                textShadow: "0 0 10px rgba(145, 94, 255, 0.6)"
              }}
            >
              Get the latest updates about my projects and tech insights!
            </motion.span>
          </motion.p>
          
          <motion.form 
            onSubmit={handleNewsletterSubmit} 
            className="flex gap-2 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <motion.div className="flex-1 relative">
              {/* Input glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#915eff]/30 to-[#7c45e8]/30 rounded-lg blur opacity-0"
                whileFocus={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full bg-tertiary py-3 px-4 text-white rounded-lg outline-none border-none font-medium placeholder:text-secondary transition-all duration-300 focus:ring-2 focus:ring-[#915eff] focus:bg-[#1a1a2e] relative z-10"
                whileFocus={{ 
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(145, 94, 255, 0.4)"
                }}
                animate={email ? {
                  borderColor: ["#915eff", "#7c45e8", "#915eff"]
                } : {}}
                transition={{
                  borderColor: { duration: 2, repeat: Infinity }
                }}
              />
              
              {/* Typing indicator */}
              {email && (
                <motion.div
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity
                  }}
                />
              )}
            </motion.div>
            
            <motion.button
              type="submit"
              disabled={isLoading || !email}
              className="newsletter-button py-3 px-6 text-white font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(145, 94, 255, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={!isLoading ? {
                background: [
                  "linear-gradient(45deg, #915eff, #7c45e8)",
                  "linear-gradient(45deg, #7c45e8, #6b3ed1)",
                  "linear-gradient(45deg, #915eff, #7c45e8)"
                ]
              } : {}}
              transition={{
                background: { duration: 3, repeat: Infinity }
              }}
            >
              {/* Button background wave */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 -skew-x-12"
                animate={{
                  x: ['-100%', '200%']
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              />
              
              <motion.div className="relative z-10">
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="flex items-center gap-2"
                  >
                    <span>⟳</span>
                    <motion.span
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    >
                      Sending...
                    </motion.span>
                  </motion.div>
                ) : (
                  <motion.span
                    whileHover={{
                      letterSpacing: "0.1em"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Subscribe
                  </motion.span>
                )}
              </motion.div>
            </motion.button>
          </motion.form>

          {isSubscribed && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-green-400 text-center mt-4 relative"
            >
              {/* Success celebration effects */}
              <motion.div
                className="absolute inset-0 flex justify-center items-center"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.5, 1] }}
                transition={{ duration: 0.6, ease: "backOut" }}
              >
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-green-400 rounded-full"
                    initial={{ 
                      x: 0, 
                      y: 0, 
                      opacity: 1 
                    }}
                    animate={{ 
                      x: Math.cos(i * 60 * Math.PI / 180) * 30,
                      y: Math.sin(i * 60 * Math.PI / 180) * 30,
                      opacity: 0,
                      scale: [1, 0.5, 0]
                    }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.3 
                    }}
                  />
                ))}
              </motion.div>
              
              <motion.div className="flex items-center justify-center gap-2">
                <motion.span
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: 0.2, 
                    type: "spring", 
                    stiffness: 200,
                    damping: 10
                  }}
                >
                  ✅
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Successfully subscribed!
                </motion.span>
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          variants={fadeIn("up", "tween", 0.6, 1)}
          className="border-t border-[#915eff]/20 pt-8 text-center relative"
        >
          {/* Animated border line */}
          <motion.div
            className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-[#915eff] to-transparent"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 2 }}
          />
          
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center gap-4 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.p 
              className="text-secondary text-sm relative"
              whileHover={{ 
                color: "#ffffff", 
                scale: 1.05,
                textShadow: "0 0 10px rgba(145, 94, 255, 0.6)"
              }}
              transition={{ duration: 0.2 }}
            >
              {/* Year animation */}
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 5px rgba(145, 94, 255, 0.3)",
                    "0 0 15px rgba(145, 94, 255, 0.6)",
                    "0 0 5px rgba(145, 94, 255, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                © 2025
              </motion.span> MASTHAN VALLI. All rights reserved.
              
              {/* Copyright decoration */}
              <motion.span
                className="absolute -top-2 -right-4 text-[#915eff] text-xs"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ™
              </motion.span>
            </motion.p>
            
            <motion.div 
              className="flex gap-6 text-sm"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
            >
              {["about", "work", "skills", "contact"].map((link, index) => (
                <motion.div
                  key={link}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + (index * 0.1) }}
                >
                  <motion.a
                    href={`#${link}`}
                    className="text-secondary hover:text-white transition-colors capitalize relative group"
                    whileHover={{ 
                      scale: 1.1,
                      color: "#915eff",
                      textShadow: "0 0 8px rgba(145, 94, 255, 0.6)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link === "work" ? "Experience" : link}
                    
                    {/* Animated underline */}
                    <motion.div
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#915eff] to-[#7c45e8]"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-[#915eff] rounded opacity-0 blur-lg"
                      whileHover={{ opacity: 0.1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-6 text-secondary text-xs relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            {/* Tech stack with animated icons */}
            <motion.div className="flex justify-center items-center gap-2 mb-2">
              <motion.p
                whileHover={{ scale: 1.05, color: "#ffffff" }}
                transition={{ duration: 0.2 }}
              >
                Built with
              </motion.p>
              
              {['React', 'Three.js'].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="text-[#915eff] font-medium"
                  animate={{
                    scale: [1, 1.1, 1],
                    color: ['#915eff', '#7c45e8', '#915eff']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                  whileHover={{
                    textShadow: "0 0 10px rgba(145, 94, 255, 0.8)",
                    scale: 1.2
                  }}
                >
                  {tech}
                </motion.span>
              ))}
              
              <motion.span
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 20, -20, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ❤️
              </motion.span>
            </motion.div>
            
            {/* YouTube channel promotion */}
            <motion.p 
              className="mt-2 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              Follow{' '}
              <motion.span 
                className="text-[#915eff] cursor-pointer font-medium relative inline-block"
                whileHover={{ 
                  scale: 1.1,
                  textShadow: "0px 0px 12px #915eff",
                  color: "#ff0000"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("https://www.youtube.com/@CodeLessCraftStudio", "_blank")}
                animate={{
                  backgroundPosition: ['0%', '100%']
                }}
                transition={{
                  backgroundPosition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
                style={{
                  background: 'linear-gradient(90deg, #915eff 0%, #ff0000 50%, #915eff 100%)',
                  backgroundSize: '200% 100%',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                CodeLess Craft Studio
                
                {/* YouTube play button animation */}
                <motion.span
                  className="ml-1 inline-block"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ▶️
                </motion.span>
              </motion.span>
              {' '}on YouTube for more content!
              
              {/* Floating subscribe notification */}
              <motion.div
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-2 py-1 rounded-full text-xs opacity-0 pointer-events-none"
                animate={{
                  opacity: [0, 1, 0],
                  y: [-5, -15, -5],
                  scale: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 5,
                  repeatDelay: 10
                }}
              >
                Subscribe! 🔔
              </motion.div>
            </motion.p>
            
            {/* Decorative elements */}
            <motion.div className="flex justify-center mt-4 gap-4">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 h-1 bg-[#915eff] rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default SectionWrapper(NetworkingBoost, "networking");