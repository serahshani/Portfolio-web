import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
        'service_hpas07t',
        'template_2wawaxk',
        {
          from_name: form.name,
          to_name: "Shani Pande",
          from_email: form.email,
          to_email: "Shanisp16@gmail.com",
          message: form.message,
        },
        'xQJlznfs_tbgM5MJ' // Assuming you meant xQJlznfs_tbgM5MJ for the public key
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        // Terminal themed container: dark background with green glow and border
        className='flex-[0.75] bg-tertiary/70 backdrop-blur-sm p-10 rounded-3xl 
                   border border-[#00ff41]/30 shadow-[0_0_20px_rgba(0,255,65,0.4)]'
      >
        <p className={`${styles.sectionSubText} font-mono text-[#00ff41]/80`}>
          Get in touch
        </p>
        <h3 className={`${styles.sectionHeadText} font-mono text-[#00ff41] drop-shadow-[0_0_5px_rgba(0,255,65,0.8)]`}>
          Contact.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          {/* Name Input */}
          <label className='flex flex-col'>
            <span className='text-[#e0ffe4] font-medium mb-4 font-mono'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="> Type your name..."
              // Terminal input styling: dark background, monospace, light placeholder
              className='bg-[#1d1836] py-4 px-6 
                         placeholder:text-[#00ff41]/50 placeholder:font-mono 
                         text-[#00ff41] rounded-lg outline-none 
                         border border-[#00ff41]/50 focus:border-[#00ff41] font-mono font-medium'
            />
          </label>
          
          {/* Email Input */}
          <label className='flex flex-col'>
            <span className='text-[#e0ffe4] font-medium mb-4 font-mono'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="> Type your email..."
              // Terminal input styling
              className='bg-[#1d1836] py-4 px-6 
                         placeholder:text-[#00ff41]/50 placeholder:font-mono 
                         text-[#00ff41] rounded-lg outline-none 
                         border border-[#00ff41]/50 focus:border-[#00ff41] font-mono font-medium'
            />
          </label>
          
          {/* Message Textarea */}
          <label className='flex flex-col'>
            <span className='text-[#e0ffe4] font-medium mb-4 font-mono'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='> Type your message here...'
              // Terminal input styling
              className='bg-[#1d1836] py-4 px-6 
                         placeholder:text-[#00ff41]/50 placeholder:font-mono 
                         text-[#00ff41] rounded-lg outline-none 
                         border border-[#00ff41]/50 focus:border-[#00ff41] font-mono font-medium resize-none'
            />
          </label>

          {/* Submit Button (Glow Effect) */}
          <button
            type='submit'
            // Glowing Green Button
            className='bg-[#00ff41]/10 py-3 px-8 rounded-xl outline-none w-fit 
                       text-[#00ff41] font-bold shadow-[0_0_15px_rgba(0,255,65,0.7)] 
                       border border-[#00ff41] hover:bg-[#00ff41]/20 transition-all duration-200 font-mono'
          >
            {loading ? "SENDING..." : "SEND COMMAND"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");