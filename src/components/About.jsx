import React from 'react';
import { motion } from 'framer-motion';
import ambianceImg from '../assets/ambiance_1.jpg';

const About = () => {
    return (
        <section id="about" className="section-padding bg-brand-cream overflow-hidden">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <span className="text-brand-gold font-medium tracking-[0.2em] uppercase mb-4 block">Our Story</span>
                    <h2 className="heading-section !text-left mb-6">A Blend of Comfort & Craftsmanship</h2>
                    <p className="text-lg text-brand-charcoal/80 mb-6 leading-relaxed">
                        Founded in the heart of Andheri West, Tōst emerged from a simple passion: to elevate the humble sandwich and burger into a gourmet experience. We believe that culinary excellence lies in the details—from our house-made sauces to our artisanal sourdough.
                    </p>
                    <p className="text-lg text-brand-charcoal/80 mb-8 leading-relaxed">
                        Our mission is to create a welcoming space where every bite tells a story of quality ingredients and craftsmanship. Whether it's a quick lunch or a relaxed dinner, we promise an experience that is both sophisticated and satisfying.
                    </p>
                    <div className="flex gap-10">
                        <div>
                            <h4 className="text-3xl font-heading font-bold text-brand-red">15+</h4>
                            <p className="text-sm text-brand-charcoal/60 uppercase tracking-wider">Signature Recipes</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-heading font-bold text-brand-red">Locally</h4>
                            <p className="text-sm text-brand-charcoal/60 uppercase tracking-wider">Sourced Ingredients</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute -inset-4 border-2 border-brand-gold/30 rounded-lg -z-10 translate-x-4 translate-y-4"></div>
                    <img
                        src={ambianceImg}
                        alt="Tōst Interior Ambiance"
                        className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default About;
