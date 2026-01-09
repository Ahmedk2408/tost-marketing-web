import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuHighlights from './components/MenuHighlights';
import Gallery from './components/Gallery';
import LocationContact from './components/LocationContact';

function App() {
  return (
    <main className="bg-brand-offwhite">
      <Navbar />
      <Hero />
      <About />
      <MenuHighlights />
      <Gallery />
      <LocationContact />

      {/* Simple Footer */}
      <footer className="bg-brand-navy border-t border-brand-gold/10 py-10 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-brand-offwhite/50 text-sm font-body">
            &copy; {new Date().getFullYear()} Tōst Bombay. All rights reserved. <br className="md:hidden" />
            <span className="hidden md:inline"> | </span>
            Crafted with passion in Mumbai.
          </p>
        </div>
      </footer>
      <Analytics />
    </main>
  );
}

export default App;
