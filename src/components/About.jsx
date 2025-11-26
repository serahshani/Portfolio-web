import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// --- ServiceCard Component Update ---
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        // Changed gradient border color from green-pink to a single bright green
        className='w-full green-gradient-border p-[1px] rounded-[20px] shadow-[0_0_15px_rgba(0,255,65,0.4)]' 
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          // Changed background color to darker tertiary (or a black/dark gray shade)
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-[#e0ffe4] text-[20px] font-bold text-center font-mono'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>

  )
}

// --- About Component Update ---
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} font-mono text-[#00ff41]/80`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} font-mono text-[#00ff41] drop-shadow-[0_0_5px_rgba(0,255,65,0.8)]`}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        // Changed text color to terminal green and applied monospace font
        className='mt-4 text-[#00ff41]/90 text-[17px] max-w-3xl leading-[30px] font-mono'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")