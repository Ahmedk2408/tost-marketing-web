import React from 'react';
import { motion } from 'framer-motion';
import smashImg from '../assets/smash_burger.jpg';
import lambImg from '../assets/lamb_burger.jpg';
import oinkImg from '../assets/master_oink.jpg';
import cheeseImg from '../assets/chopped_cheese.jpg';

const menuItems = [
    {
        id: 1,
        name: "The Signature Smash",
        description: "Double beef patty, secret Tōst sauce, melted American cheese on a toasted brioche bun.",
        price: "₹450",
        image: smashImg,
        category: "Burger"
    },
    {
        id: 2,
        name: "Classic Lamb",
        description: "Succulent lamb patty, garlic aioli, caramelized onions, and fresh greens.",
        price: "₹550",
        image: lambImg,
        category: "Burger"
    },
    {
        id: 3,
        name: "The Master Oink",
        description: "Tender pulled pork, smokey BBQ glaze, and crispy slaw in a soft artisanal roll.",
        price: "₹490",
        image: oinkImg,
        category: "Sandwich"
    },
    {
        id: 4,
        name: "Chopped Cheese",
        description: "Mumbai-style chopped beef, bell peppers, and sharp cheddar on a warm hoagie.",
        price: "₹420",
        image: cheeseImg,
        category: "Sandwich"
    }
];

const MenuHighlights = () => {
    return (
        <section id="menu" className="section-padding bg-brand-offwhite">
            <div className="text-center mb-16">
                <span className="text-brand-gold font-medium tracking-[0.2em] uppercase mb-4 block">Gourmet Selection</span>
                <h2 className="heading-section">Signature Creations</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {menuItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="relative overflow-hidden rounded-lg mb-6 shadow-md">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-4 right-4 bg-brand-red text-brand-offwhite px-3 py-1 text-sm font-semibold rounded">
                                {item.price}
                            </div>
                        </div>
                        <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-brand-red transition-colors">
                            {item.name}
                        </h3>
                        <p className="text-brand-charcoal/70 text-sm leading-relaxed mb-4">
                            {item.description}
                        </p>
                        <button className="text-brand-gold font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all">
                            Discover More <span>→</span>
                        </button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default MenuHighlights;
