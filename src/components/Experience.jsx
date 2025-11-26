import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants"; // Assuming 'experiences' data is available
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// --- Combined Experience Card and Timeline Component ---

// Internal component for rendering each timeline element
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        // Modern, slightly transparent dark background with green glow shadow
        background: "#1d1836e6", 
        color: "#e0ffe4", 
        boxShadow: "0 0 10px 0 rgba(0, 255, 65, 0.4)", 
        borderRadius: "12px",
      }}
      // Change arrow color to terminal green
      contentArrowStyle={{ borderRight: "7px solid  #00ff41" }} 
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div className='font-mono'>
        {/* Terminal green text for the title */}
        <h3 className='text-[#00ff41] text-[26px] font-bold tracking-tight'>
          {experience.title}
        </h3>
        {/* Lighter text for the company name */}
        <p
          className='text-[#e0ffe4] text-[18px] font-semibold tracking-wide'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-3 font-mono'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-[#00ff41]/90 text-[15px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

// Main combined component
const WorkExperience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center font-mono text-[#00ff41]/80`}>
          What I have done so far
        </p>
        <h2 className={`text-center font-mono ${styles.sectionHeadText} text-[#00ff41] drop-shadow-[0_0_5px_rgba(0,255,65,0.8)]`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor="#00ff41"> 
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(WorkExperience, "work");