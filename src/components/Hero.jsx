import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const SESSION_KEY = 'heroAnimationComplete';

const Hero = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  
  // Check session storage on mount
  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === 'true') {
      setHasAnimated(true);
    }
  }, []);

  // --- Animation Logic (Only runs if hasAnimated is false) ---
  const nameText = "Shani";
  const subTextPart1 = "I develop full-stack web applications";
  const subTextPart2 = "using the MERN stack.";
  
  const nameLength = nameText.length;
  const paragraphLength = subTextPart1.length + subTextPart2.length;
  
  const NAME_STAGGER = 0.08; 
  const SUBTEXT_STAGGER = 0.04;
  
  // Calculate the exact time the name finishes typing
  const subtextStartDelay = nameLength * NAME_STAGGER + 0.05; 
  const cursorDelay = subtextStartDelay + (paragraphLength * SUBTEXT_STAGGER);

  // Define Varianst for Typing Animation
  const nameTypingContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: NAME_STAGGER,
        delayChildren: 0,
      },
    },
  };
  const subtextTypingContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: SUBTEXT_STAGGER,
        delayChildren: subtextStartDelay,
      },
    },
  };
  const letterVariant = {
    hidden: { opacity: 0, display: "none" },
    visible: {
      opacity: 1,
      display: "inline", 
      transition: {
        duration: 0,
      },
    },
  };
  
  // Callback function to set the session flag after the animation completes
  const handleAnimationComplete = () => {
      sessionStorage.setItem(SESSION_KEY, 'true');
  };
  // -------------------------------------------------------------

  
  // --- Conditional Rendering ---
  
  if (hasAnimated) {
    // RENDER FINAL STATIC STATE (If animation already ran)
    return (
      <section className="relative w-full h-screen mx-auto">
        <div
          className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className='flex flex-col justify-center items-center mt-5'>
            {/* Terminal Dot (Green) */}
            <div className='w-5 h-5 rounded-full bg-[#00ff41] shadow-[0_0_15px_#00ff41]' />
            {/* Green Gradient Line */}
            <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#00ff41] to-transparent' />
          </div>
          
          <div className='z-10'>
            <h1
              className={`${styles.heroHeadText} text-[#00ff41] font-mono drop-shadow-[0_0_5px_rgba(0,255,65,0.8)]`}
            >
              <span className='mr-2'>$</span>Hi, I'm{' '}
              <span className='text-[#e0ffe4] drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]'>
                {nameText}
              </span>
            </h1>
            
            <div
              className={`${styles.heroSubText} mt-2 text-[#00ff41]/80 font-mono`}
            >
              {subTextPart1}
              <br className='sm:block hidden' />
              {subTextPart2}
              <span className='text-[#00ff41] inline-block ml-1'>_</span>
            </div>
          </div>
        </div>
        <ComputersCanvas />
        {/* Scroll Indicator (Scroll indicator keeps animating regardless of text) */}
        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
            <a href='#about'>
              <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#00ff41] flex justify-center items-start p-2 shadow-[0_0_10px_#00ff41]'>
                <motion.div
                  animate={{ y: [0, 24, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                  className='w-3 h-3 rounded-full bg-[#00ff41] mb-1'
                />
              </div>
            </a>
          </div>
      </section>
    );
  }

  // RENDER ANIMATED STATE (If animation has NOT run)
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#00ff41] shadow-[0_0_15px_#00ff41]' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#00ff41] to-transparent' />
        </div>
        
        <div className='z-10'>
          <motion.h1
            variants={nameTypingContainer}
            initial="hidden"
            animate="visible"
            className={`${styles.heroHeadText} text-[#00ff41] font-mono drop-shadow-[0_0_5px_rgba(0,255,65,0.8)]`}
          >
             <span className='mr-2'>$</span>Hi, I'm{' '}
             
             {Array.from(nameText).map((char, index) => (
                <motion.span 
                    key={`name-${index}`} 
                    variants={letterVariant} 
                    className='text-[#e0ffe4] drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]'
                >
                   {char}
                </motion.span>
             ))}
          </motion.h1>
          
          <motion.div
            variants={subtextTypingContainer}
            initial="hidden"
            animate="visible"
            // ⭐ Call handleAnimationComplete when the subtext animation finishes ⭐
            onAnimationComplete={handleAnimationComplete} 
            className={`${styles.heroSubText} mt-2 text-[#00ff41]/80 font-mono`}
          >
            {/* First Line */}
            {Array.from(subTextPart1).map((char, index) => (
              <motion.span key={`line1-${index}`} variants={letterVariant}>
                {char}
              </motion.span>
            ))}
            
            <br className='sm:block hidden' />
            
            {/* Second Line */}
            {Array.from(subTextPart2).map((char, index) => (
              <motion.span key={`line2-${index}`} variants={letterVariant}>
                {char}
              </motion.span>
            ))}
            
            {/* Final Blinking Cursor */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", delay: cursorDelay }}
              className='text-[#00ff41] inline-block ml-1'
            >
              _
            </motion.span>
          </motion.div>
        </div>
      </div>

      <ComputersCanvas />
      
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#00ff41] flex justify-center items-start p-2 shadow-[0_0_10px_#00ff41]'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-[#00ff41] mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero