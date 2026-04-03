/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Menu, X, MapPin, Clock, Phone, Instagram, Facebook, 
  Star, Utensils, Coffee, Heart, Leaf, ShieldCheck, ChevronRight
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-pantry-green selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-pantry-cream/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className={`font-serif text-2xl font-bold tracking-tight ${isScrolled ? 'text-pantry-brown' : 'text-white'}`}>
            The Pantry.
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#menu" className={`text-sm font-medium hover:text-pantry-orange transition-colors ${isScrolled ? 'text-pantry-brown' : 'text-white/90'}`}>Menu</a>
            <a href="#experience" className={`text-sm font-medium hover:text-pantry-orange transition-colors ${isScrolled ? 'text-pantry-brown' : 'text-white/90'}`}>Experience</a>
            <a href="#about" className={`text-sm font-medium hover:text-pantry-orange transition-colors ${isScrolled ? 'text-pantry-brown' : 'text-white/90'}`}>Our Story</a>
            <a href="#location" className={`text-sm font-medium hover:text-pantry-orange transition-colors ${isScrolled ? 'text-pantry-brown' : 'text-white/90'}`}>Location</a>
            <a href="#reserve" className="bg-pantry-green hover:bg-pantry-green-hover text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
              Reserve a Table
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-pantry-brown' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-pantry-brown' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-pantry-cream shadow-lg py-6 px-6 flex flex-col space-y-4">
            <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="text-pantry-brown font-medium">Menu</a>
            <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="text-pantry-brown font-medium">Experience</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-pantry-brown font-medium">Our Story</a>
            <a href="#location" onClick={() => setIsMobileMenuOpen(false)} className="text-pantry-brown font-medium">Location</a>
            <a href="#reserve" onClick={() => setIsMobileMenuOpen(false)} className="bg-pantry-green text-white px-6 py-3 rounded-full text-center font-medium">
              Reserve a Table
            </a>
          </div>
        )}
      </nav>

      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop" 
            alt="Cozy restaurant interior with warm lighting" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="block text-white/90 text-sm md:text-base tracking-widest uppercase mb-4 font-medium"
          >
            Iligan City's Hidden Gem
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif text-white font-bold leading-tight mb-6"
          >
            Comfort Food, <br className="hidden md:block" /> Elevated.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light"
          >
            A cozy, aesthetic space where good food meets great company. Your perfect hangout spot in the heart of Iligan.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#reserve" className="w-full sm:w-auto bg-pantry-green hover:bg-pantry-green-hover text-white px-8 py-4 rounded-full font-medium transition-colors text-lg">
              Reserve a Table
            </a>
            <a href="#menu" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-medium transition-colors text-lg">
              View Menu
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. Social Proof Section */}
      <section className="py-16 bg-pantry-sand">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold tracking-widest text-pantry-orange uppercase mb-2">Loved by Locals</h2>
            <div className="flex justify-center items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-pantry-orange text-pantry-orange" />)}
            </div>
            <p className="text-pantry-brown/80 font-medium">4.9/5 Average Rating in Iligan City</p>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { text: "The ambience is unmatched in Iligan. Perfect for our anniversary dinner. The Truffle Pasta is a must-try!", author: "Sarah M.", type: "Ambience & Taste" },
              { text: "Finally, an aesthetic cafe that actually serves amazing food. Great portions for the price. My new go-to chill spot.", author: "Miguel R.", type: "Value & Vibe" },
              { text: "Super friendly staff and the interior is so Instagram-worthy! The coffee and pastries are top-tier.", author: "Chloe T.", type: "Service & Quality" }
            ].map((review, index) => (
              <motion.div key={index} variants={fadeIn} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-pantry-orange text-pantry-orange" />)}
                </div>
                <p className="text-pantry-brown italic mb-6 leading-relaxed">"{review.text}"</p>
                <div>
                  <p className="font-bold text-pantry-brown">{review.author}</p>
                  <p className="text-xs text-pantry-brown/60 uppercase tracking-wider mt-1">{review.type}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Menu Preview */}
      <section id="menu" className="py-24 bg-pantry-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-pantry-orange font-bold tracking-widest uppercase text-sm mb-3 block">Our Menu</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-pantry-brown">Crowd Favorites</h2>
            </div>
            <a href="#" className="group flex items-center text-pantry-green font-medium hover:text-pantry-green-hover transition-colors">
              See Full Menu <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
            {/* Mains */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-pantry-brown mb-8 flex items-center border-b border-stone-200 pb-4">
                <Utensils className="w-6 h-6 mr-3 text-pantry-orange" /> Mains
              </h3>
              <div className="space-y-8">
                {[
                  { name: "Creamy Truffle Mushroom Pasta", desc: "Fettuccine, rich truffle cream, wild mushrooms, parmesan crisp.", price: "₱320" },
                  { name: "The Pantry Signature Burger", desc: "100% pure beef patty, caramelized onions, brioche bun, house sauce.", price: "₱280" },
                  { name: "Herb-Crusted Salmon", desc: "Pan-seared Norwegian salmon, garlic mashed potatoes, lemon butter.", price: "₱450" },
                  { name: "Classic Beef Salpicao", desc: "Tender beef tenderloin cubes, toasted garlic, savory soy glaze, rice.", price: "₱350" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex justify-between items-start group"
                  >
                    <div className="pr-4">
                      <h4 className="font-bold text-lg text-pantry-brown group-hover:text-pantry-orange transition-colors">{item.name}</h4>
                      <p className="text-pantry-brown/70 text-sm mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="font-serif font-bold text-lg text-pantry-green shrink-0">{item.price}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Drinks & Desserts */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-pantry-brown mb-8 flex items-center border-b border-stone-200 pb-4">
                <Coffee className="w-6 h-6 mr-3 text-pantry-orange" /> Drinks & Sweets
              </h3>
              <div className="space-y-8">
                {[
                  { name: "Iced Spanish Latte", desc: "Espresso, condensed milk, cinnamon, creamy milk over ice.", price: "₱160" },
                  { name: "Matcha Espresso Fusion", desc: "Premium Uji matcha, milk, topped with a shot of espresso.", price: "₱180" },
                  { name: "Basque Burnt Cheesecake", desc: "Caramelized exterior, creamy and molten center. A slice of heaven.", price: "₱190" },
                  { name: "Warm Chocolate Lava Cake", desc: "Gooey chocolate center served with vanilla bean ice cream.", price: "₱210" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex justify-between items-start group"
                  >
                    <div className="pr-4">
                      <h4 className="font-bold text-lg text-pantry-brown group-hover:text-pantry-orange transition-colors">{item.name}</h4>
                      <p className="text-pantry-brown/70 text-sm mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="font-serif font-bold text-lg text-pantry-green shrink-0">{item.price}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Experience / Ambience */}
      <section id="experience" className="py-24 bg-pantry-brown text-pantry-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-pantry-orange font-bold tracking-widest uppercase text-sm mb-3 block">The Experience</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">A space designed for connection.</h2>
              <p className="text-pantry-cream/80 text-lg mb-6 leading-relaxed font-light">
                Step away from the bustle of Iligan City and into a sanctuary of warm lighting, comfortable seating, and inviting aesthetics. 
              </p>
              <p className="text-pantry-cream/80 text-lg mb-8 leading-relaxed font-light">
                Whether you're catching up with old friends, enjoying a romantic dinner, or finding a quiet corner to read, The Pantry offers an atmosphere that feels like a warm embrace.
              </p>
              <ul className="space-y-4 mb-10">
                {['Cozy, Instagram-worthy interiors', 'Soft, warm ambient lighting', 'Comfortable seating for groups & couples'].map((item, i) => (
                  <li key={i} className="flex items-center text-pantry-cream/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-pantry-orange mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-3xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop" 
                alt="Cozy cafe interior with warm lighting and plants" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pantry-brown/80 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. About & 6. Value Props */}
      <section id="about" className="py-24 bg-pantry-sand">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-pantry-orange font-bold tracking-widest uppercase text-sm mb-3 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-pantry-brown mb-6">Rooted in Iligan.</h2>
            <p className="text-lg text-pantry-brown/80 leading-relaxed">
              Born from a passion for bringing people together over good food, The Pantry started as a simple idea: to create a space in Iligan City where premium dining feels accessible and comfortable. We believe that every meal should be an experience, crafted with love and served with a smile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Leaf className="w-8 h-8" />, title: "Fresh Daily", desc: "Locally sourced ingredients prepared fresh every single day." },
              { icon: <Heart className="w-8 h-8" />, title: "Cozy Aesthetic", desc: "A thoughtfully designed space perfect for your feed and your soul." },
              { icon: <ShieldCheck className="w-8 h-8" />, title: "Premium Quality", desc: "Elevated comfort food without the intimidating price tag." },
              { icon: <Coffee className="w-8 h-8" />, title: "Perfect Hangout", desc: "Whether for dates, family dinners, or catching up with friends." }
            ].map((prop, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl text-center shadow-sm border border-stone-100 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-16 h-16 mx-auto bg-pantry-sand rounded-full flex items-center justify-center text-pantry-green mb-6">
                  {prop.icon}
                </div>
                <h3 className="text-xl font-bold text-pantry-brown mb-3">{prop.title}</h3>
                <p className="text-pantry-brown/70 text-sm leading-relaxed">{prop.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Location + Map */}
      <section id="location" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-pantry-orange font-bold tracking-widest uppercase text-sm mb-3 block">Visit Us</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-pantry-brown mb-8">Find us in the heart of the city.</h2>
              
              <div className="space-y-8 mb-10">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-pantry-green shrink-0 mt-1 mr-4" />
                  <div>
                    <h4 className="font-bold text-lg text-pantry-brown mb-1">Address</h4>
                    <p className="text-pantry-brown/70 leading-relaxed">
                      123 Macapagal Avenue, Tibanga<br />
                      Iligan City, Lanao del Norte 9200<br />
                      <span className="text-sm italic mt-1 block">(Near MSU-IIT / City Mall area)</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-pantry-green shrink-0 mt-1 mr-4" />
                  <div>
                    <h4 className="font-bold text-lg text-pantry-brown mb-1">Opening Hours</h4>
                    <p className="text-pantry-brown/70 leading-relaxed">
                      Monday - Thursday: 10:00 AM - 9:00 PM<br />
                      Friday - Sunday: 10:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-pantry-green shrink-0 mt-1 mr-4" />
                  <div>
                    <h4 className="font-bold text-lg text-pantry-brown mb-1">Contact</h4>
                    <p className="text-pantry-brown/70 leading-relaxed">
                      +63 917 123 4567<br />
                      hello@thepantryiligan.com
                    </p>
                  </div>
                </div>
              </div>

              <a href="#" className="inline-flex items-center text-pantry-green font-bold hover:text-pantry-green-hover transition-colors">
                Get Directions on Google Maps <ChevronRight className="w-5 h-5 ml-1" />
              </a>
            </div>

            <div className="bg-stone-200 rounded-3xl h-[400px] lg:h-auto overflow-hidden relative">
              {/* Map Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-pantry-sand">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-pantry-orange mx-auto mb-4 opacity-50" />
                  <p className="text-pantry-brown/60 font-medium font-serif text-xl">Interactive Map Placeholder</p>
                  <p className="text-pantry-brown/40 text-sm mt-2">Iligan City, Philippines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section id="reserve" className="py-24 bg-pantry-green relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pantry-orange/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Your Next Favorite Spot in Iligan.
          </h2>
          <p className="text-xl text-white/80 mb-10 font-light">
            Open daily. Limited seating during peak hours—reserve your table to ensure the best experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white text-pantry-green hover:bg-pantry-sand px-8 py-4 rounded-full font-bold transition-colors text-lg shadow-lg">
              Reserve Now
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-medium transition-colors text-lg">
              Call for Inquiries
            </button>
          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="bg-pantry-brown text-pantry-cream/60 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <a href="#" className="font-serif text-3xl font-bold text-white mb-6 block">
                The Pantry.
              </a>
              <p className="max-w-sm mb-6 leading-relaxed">
                Comfort food, elevated. A cozy, aesthetic space in Iligan City designed for good food and great company.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pantry-orange hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pantry-orange hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
                <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#reserve" className="hover:text-white transition-colors">Reservations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Visit Us</h4>
              <ul className="space-y-3">
                <li>123 Macapagal Ave, Tibanga</li>
                <li>Iligan City, 9200</li>
                <li className="pt-3 border-t border-white/10 mt-3">Mon-Thu: 10AM - 9PM</li>
                <li>Fri-Sun: 10AM - 10PM</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-sm flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} The Pantry Iligan. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
