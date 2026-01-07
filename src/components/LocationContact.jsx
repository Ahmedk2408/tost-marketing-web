import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from 'lucide-react';

const LocationContact = () => {
    return (
        <section id="contact" className="section-padding bg-brand-cream text-brand-navy">
            <div className="grid md:grid-cols-2 gap-16 items-start">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-8 text-brand-navy">Visit Us</h2>
                    <p className="text-lg text-brand-charcoal/80 mb-10 max-w-md">
                        Come experience the perfect blend of craft and comfort in the heart of Mumbai's most vibrant neighborhood.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <MapPin className="text-brand-gold shrink-0" size={24} />
                            <div>
                                <h4 className="font-semibold text-lg mb-1">Our Location</h4>
                                <p className="text-brand-charcoal/70">Shop No. 12, Skyward Plaza, Andheri West,<br />Mumbai, Maharashtra 400053</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Clock className="text-brand-gold shrink-0" size={24} />
                            <div>
                                <h4 className="font-semibold text-lg mb-1">Opening Hours</h4>
                                <p className="text-brand-charcoal/70">Mon - Sun: 11:00 AM - 11:00 PM</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Phone className="text-brand-gold shrink-0" size={24} />
                            <div>
                                <h4 className="font-semibold text-lg mb-1">Contact</h4>
                                <p className="text-brand-charcoal/70">+91 98XXX XXXXX</p>
                                <p className="text-brand-charcoal/70">hello@tōst.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-6 mt-12">
                        <a href="#" className="hover:text-brand-gold transition-colors"><Instagram size={28} /></a>
                        <a href="#" className="hover:text-brand-gold transition-colors"><Facebook size={28} /></a>
                    </div>
                </motion.div>

                {/* Map Placeholder / Location Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="h-full min-h-[400px] w-full rounded-2xl overflow-hidden relative group"
                >
                    {/* Soft gradient background instead of hard box */}
                    <div className="absolute inset-0 bg-brand-navy flex items-center justify-center">
                        <div className="text-center p-8">
                            <MapPin size={56} className="mx-auto mb-6 text-brand-gold drop-shadow-lg" style={{ filter: 'drop-shadow(0 0 20px rgba(198, 157, 84, 0.3))' }} />
                            <p className="text-brand-gold font-heading text-2xl md:text-3xl italic mb-2">See you in Andheri West</p>
                            <p className="text-brand-offwhite/60 text-sm mb-6">Your next favorite spot awaits</p>
                            <button className="btn-primary !bg-brand-gold !text-brand-navy hover:!bg-brand-offwhite hover:scale-105 transition-all shadow-lg">
                                Get Directions
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LocationContact;
