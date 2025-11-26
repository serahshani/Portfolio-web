import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  const nameText = "Shani";
  const subTextPart1 = "I develop full-stack web applications";
  const subTextPart2 = "using the MERN stack.";
  
  // Character count variables for precise timing
  const nameLength = nameText.length;
  const paragraphLength = subTextPart1.length + subTextPart2.length;
  
  // Timing constants (can be adjusted for speed)
  const NAME_STAGGER = 0.08; 
  const SUBTEXT_STAGGER = 0.04;
  
  // 1. Name typing (Starts immediately: delayChildren: 0)
  const nameTypingContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: NAME_STAGGER,
        delayChildren: 0, // START IMMEDIATELY
      },
    },
  };

  // Calculate the exact time the name finishes typing: 0s start + (5 chars * 0.08s stagger) = 0.4s
  const subtextStartDelay = nameLength * NAME_STAGGER + 0.05; // 0.4s + 0.05s buffer = 0.45s

  // 2. Subtext typing (Starts immediately after the name finishes)
  const subtextTypingContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: SUBTEXT_STAGGER,
        delayChildren: subtextStartDelay, // Flows directly from name
      },
    },
  };
  
  // 3. Final Cursor Delay Calculation
  // Time = Name Typing Time + Subtext Start Delay + Subtext Typing Time
  const cursorDelay = subtextStartDelay + (paragraphLength * SUBTEXT_STAGGER);

  // 4. Individual letter animation (Instant appearance)
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

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* Terminal Dot (Green) */}
          <div className='w-5 h-5 rounded-full bg-[#00ff41] shadow-[0_0_15px_#00ff41]' />
          {/* Green Gradient Line */}
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#00ff41] to-transparent' />
        </div>
        
        <div className='z-10'> {/* Ensure text is above the canvas */}
          {/* Main Heading: Typing starts immediately from the name */}
          <motion.h1
            variants={nameTypingContainer}
            initial="hidden"
            animate="visible"
            className={`${styles.heroHeadText} text-[#00ff41] font-mono drop-shadow-[0_0_5px_rgba(0,255,65,0.8)]`}
          >
             {/* Instant Text: CHANGED '>' to '$' */}
             <span className='mr-2'>$</span>Hi, I'm{' '}
             
             {/* Typed Text (Shani) */}
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
          
          {/* Typing Effect Paragraph (Starts immediately after the name) */}
          <motion.div
            variants={subtextTypingContainer}
            initial="hidden"
            animate="visible"
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