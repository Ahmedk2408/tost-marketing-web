import React from 'react';
import { motion } from 'framer-motion';
import amb2 from '../assets/ambiance_2.jpg';
import amb3 from '../assets/ambiance_3.jpg';
import cheeseImg from '../assets/chopped_cheese.jpg';

const Gallery = () => {
    const images = [
        { src: amb2, alt: "Tōst Night Ambiance", span: "md:col-span-2 md:row-span-2" },
        { src: cheeseImg, alt: "Artisanal Preparation", span: "md:col-span-1 md:row-span-1" },
        { src: amb3, alt: "Cozy Dining Corner", span: "md:col-span-1 md:row-span-1" },
    ];

    return (
        <section id="gallery" className="section-padding bg-brand-cream">
            <div className="text-center mb-16">
                <span className="text-brand-gold font-medium tracking-[0.2em] uppercase mb-4 block">The Experience</span>
                <h2 className="heading-section">Moments at Tōst</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-[800px] md:h-[600px]">
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`relative overflow-hidden rounded-xl ${img.span} group`}
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-brand-navy/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <p className="text-brand-offwhite font-heading text-xl italic">{img.alt}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
