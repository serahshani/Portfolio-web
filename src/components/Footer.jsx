import React from 'react';
import { navLinks } from '../constants';
import { styles } from '../styles';

// ⭐ IMPORT YOUR ACTUAL SOCIAL ICONS HERE ⭐
import { github, linkedin, x_icon, facebook, whatsapp } from '../assets'; 
// Make sure 'github' is also imported if you want to use its icon.
// Adjust paths as per your project structure.

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Define Social Media Links with actual icon imports
    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/serahshani",
            icon: github, 
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/serahshani",
            icon: linkedin, 
        },
        {
            name: "X (Twitter)",
            url: "https://x.com/shedev22", 
            icon: x_icon, 
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/profile.php?id=100095056839085#", 
            icon: facebook, 
        },
        {
            name: "WhatsApp",
            url: "https://wa.me/+254758056305", // ⭐ REPLACE with your international phone number
            icon: whatsapp, 
        },
    ];

    return (
        <footer 
            className='w-full bg-primary/90 backdrop-blur-sm border-t border-[#00ff41]/30 
                       shadow-[0_-5px_15px_rgba(0,255,65,0.15)] mt-20'
        >
            <div className={`max-w-7xl mx-auto ${styles.paddingX} py-8 flex flex-col sm:flex-row justify-between items-center`}>
                
                {/* Left Side: Copyright & Name */}
                <div className='flex items-center space-x-4 mb-4 sm:mb-0'>
                    <p className='text-[#00ff41]/90 font-mono text-sm tracking-wide'>
                        &copy; {currentYear} Serah Shani. <span className='sm:inline hidden'>All Rights Reserved.</span>
                    </p>
                </div>

                {/* Right Side: Quick Navigation and Social Links */}
                <div className='flex flex-col sm:flex-row items-center gap-6'>
                    {/* Navigation Links */}
                    <ul className='list-none flex flex-wrap justify-center gap-6'>
                        {navLinks.map((link) => (
                            <li
                                key={link.id}
                                className='text-[#00ff41]/90 font-mono text-base cursor-pointer 
                                           hover:text-white transition-colors duration-200'
                            >
                                <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                    
                    {/* Separator for clarity between navigation and socials */}
                    <span className='hidden sm:block text-[#00ff41]/50 font-mono text-base'>|</span>

                    {/* Social Media Icons (Arranged Horizontally) */}
                    <ul className='list-none text-white flex justify-center gap-4'> 
                        {socialLinks.map((social) => (
                            <li key={social.name}>
                                <a 
                                    href={social.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    // Enhanced icon container styling
                                    className='block w-9 h-9 flex items-center justify-center 
                                               rounded-full bg-[#1d1836] border-2 border-[#00ff41]/60 
                                               hover:bg-[#00ff41]/40 transition-all duration-200 
                                               shadow-[0_0_12px_rgba(0,255,65,0.4)] hover:shadow-[0_0_18px_rgba(0,255,65,0.7)]'
                                >
                                    <img 
                                        src={social.icon} 
                                        alt={`${social.name} icon`} 
                                        // Significantly increased brightness and filter-invert if icons are dark
                                        className='w-5 h-5 object-contain brightness-200 filter-invert' 
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div> {/* End of Right Side Flex Container */}
            </div>
        </footer>
    );
};

export default Footer;