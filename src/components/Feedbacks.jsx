import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

// --- FeedbackCard Component (Terminal Themed) ---
const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    // Glassmorphism background, rounded, with green glow/border
    className='bg-tertiary/60 backdrop-blur-sm p-10 rounded-3xl xs:w-[320px] w-full 
               border border-[#00ff41]/30 shadow-[0_0_15px_rgba(0,255,65,0.4)]'
  >
    {/* Large Green Quote */}
    <p className='text-[#00ff41] font-black text-[60px] font-mono leading-none'>"</p>

    <div className='mt-3'>
      {/* Testimonial Text in Light Terminal White */}
      <p className='text-[#e0ffe4] tracking-wider text-[16px] font-mono'>
        {testimonial}
      </p>

      <div className='mt-8 flex justify-between items-center gap-2'>
        <div className='flex-1 flex flex-col'>
          {/* Name in Light Terminal White */}
          <p className='text-[#e0ffe4] font-semibold text-[16px] font-mono'>
            {/* Terminal Green Accent for Prompt look */}
            <span className='text-[#00ff41] mr-1'>user@</span> {name}
          </p>
          {/* Designation/Company in subtle Terminal Green */}
          <p className='mt-1 text-[#00ff41]/80 text-[12px] font-mono'>
            {designation} from {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-12 h-12 rounded-full object-cover border-2 border-[#00ff41]'
        />
      </div>
    </div>
  </motion.div>
);

// --- Feedbacks Component (Terminal Themed) ---
const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        // Changed inner background to use the tertiary color for contrast
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} font-mono text-[#00ff41]/80`}>
            What others say
          </p>
          <h2 className={`${styles.sectionHeadText} font-mono text-[#00ff41] drop-shadow-[0_0_5px_rgba(0,255,65,0.8)]`}>
            Testimonials.
          </h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "feedbacks");