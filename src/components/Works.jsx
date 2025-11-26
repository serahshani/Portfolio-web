import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets"; // Assuming 'github' icon is available
import { SectionWrapper } from "../hoc";
import { projects } from "../constants"; // Assuming 'projects' data is available
import { fadeIn, textVariant } from "../utils/motion";

// --- Project Card Component (Modern Terminal Themed) ---
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 10, // Reduced max tilt for a more subtle effect
          scale: 1.02, // Slightly scale up on hover
          speed: 400,
        }}
        // Glassmorphism background with green border/shadow
        className='bg-tertiary/60 backdrop-blur-sm p-6 rounded-3xl sm:w-[380px] w-full 
                   shadow-[0_0_15px_rgba(0,255,65,0.3)] border border-[#00ff41]/30
                   hover:shadow-[0_0_25px_rgba(0,255,65,0.6)] transition-shadow duration-300'
      >
        <div className='relative w-full h-[230px] rounded-2xl overflow-hidden'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            {source_code_link && ( // Only show if link exists
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-11 h-11 rounded-full flex justify-center items-center cursor-pointer
                           shadow-md hover:scale-110 transition-transform duration-200'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-3/5 h-3/5 object-contain'
                />
              </div>
            )}
          </div>
        </div>

        <div className='mt-6'>
          {/* Project Name - Terminal Green with subtle glow */}
          <h3 className='text-[#e0ffe4] font-bold text-[26px] font-mono drop-shadow-[0_0_3px_rgba(255,255,255,0.3)]'>
            {name}
          </h3>
          {/* Description - Lighter terminal green */}
          <p className='mt-3 text-[#00ff41]/80 text-[15px] leading-[26px] font-mono'>
            {description}
          </p>
        </div>

        <div className='mt-5 flex flex-wrap gap-3'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[13px] font-semibold font-mono px-3 py-1 rounded-full 
                          bg-tertiary/70 border border-[#00ff41]/50 text-[#00ff41] 
                          shadow-sm`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// --- Works Component (Modern Terminal Themed) ---
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} font-mono text-[#00ff41]/80`}>
          My work
        </p>
        <h2 className={`${styles.sectionHeadText} font-mono text-[#00ff41] drop-shadow-[0_0_5px_rgba(0,255,65,0.8)]`}>
          Projects.
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-[#00ff41]/90 text-[17px] max-w-4xl leading-[30px] font-mono'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-8 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects"); // Changed section ID to "projects" for clarity