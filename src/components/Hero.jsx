import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/smash_burger.jpg';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <img
                    src={heroImg}
                    alt="Tōst Signature Smash Burger"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-navy/40 backdrop-blur-[2px]"></div>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 text-center px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="heading-hero text-brand-offwhite mb-6"
                >
                    Elevating the Art of <br />
                    <span className="text-brand-gold italic font-semibold italic">Tōst</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="text-xl md:text-2xl text-brand-offwhite/90 mb-10 max-w-2xl mx-auto font-body"
                >
                    Artisanal sandwiches and gourmet burgers, crafted with passion in the heart of Andheri West.
                </motion.p>

                <motion.a
                    href="#menu"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary shadow-xl inline-block"
                >
                    View Our Creations
                </motion.a>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-gold cursor-pointer"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent mx-auto"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
