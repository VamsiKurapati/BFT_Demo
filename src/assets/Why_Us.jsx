import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

export default function WhyUs() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    
    const navLinks = [
        { label: "Home", path: "/" },
        { label: "Why Us?", path: "/why_us" },
        { label: "How it Works?", path: "/how_it_works" },
        { label: "Contact Us", path: "/contact" },
    ];
    
    return(
        <section className="w-full font-goudy">
                {/* Background Image and Navigation */}
                <section
                  className="relative min-h-screen md:h-[750px] bg-cover bg-center bg-no-repeat overflow-hidden"
                  style={{ backgroundImage: "url('/why_us.jpg')" }}
                >
                  <div className="absolute inset-0 bg-[#00000080] z-0"></div>
        
                  <div className="container mx-auto px-4 py-8 flex justify-between items-center lg:pl-[48px] relative z-10">
                    {/* Logo */}
                    <div className="text-white text-2xl font-bold">
                      <img src="/logo.png" alt="Logo" className="h-16" />
                    </div>
        
                    {/* Desktop Navigation */}
                    <div className="flex items-center">
                      <nav className="hidden lg:flex">
                        <ul className="flex gap-[12px] text-white font-goudy text-[20px] font-normal">
                          {navLinks.map((link) => (
                            <li key={link.path}>
                              <a
                                href={link.path}
                                className={`px-4 py-2 ${
                                  location.pathname === link.path
                                    ? "bg-white text-black rounded-full"
                                    : "hover:text-gray-300"
                                }`}
                              >
                                {link.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </nav>
        
                      {/* Login Button */}
                      <div className="hidden lg:block ml-8 relative group">
                        <button
                          className="bg-[#A11716E5] text-[#FCD2B1] px-4 py-2 font-poppins font-bold rounded-full transition border border-1 group-hover:bg-[#003566] flex items-center"
                          style={{ borderColor: '#FCD2B1' }}
                        >
                          Login / Register
                          <img 
                            src="/Person.png" 
                            alt="Person" 
                            className="h-6 w-6 ml-2 absolute opacity-0 group-hover:opacity-100 group-hover:static transition-all duration-300" 
                          />
                        </button>
                      </div>
        
                      {/* Hamburger Button */}
                      <button
                        className="lg:hidden ml-4 text-white focus:outline-none text-3xl"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      >
                        ☰
                      </button>
                    </div>
                  </div>
        
                  {/* Mobile Menu with animation */}
                  <AnimatePresence>
                    {isMobileMenuOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="absolute top-[100px] right-0 w-2/3 bg-[#FCD2B1] flex flex-col items-center py-6 z-20 lg:hidden overflow-hidden"
                      >
                        {navLinks.map((link) => (
                          <a
                            key={link.path}
                            href={link.path}
                            className={`text-lg py-2 px-6 ${
                              location.pathname === link.path
                                ? "bg-white text-black rounded-full"
                                : "text-white hover:text-gray-300"
                            }`}
                          >
                            {link.label}
                          </a>
                        ))}
                        <button
                          className="mt-4 bg-[#A11716E5] text-[#FCD2B1] px-6 py-2 font-poppins font-bold rounded-full transition border transition border  border-1"
                          style={{ borderColor: '#FCD2B1' }}
                        >
                          Login / Register
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
        
                  {/* Hero Content */}
                  <div className="container mx-auto px-8 mt-48 lg:pl-[60px] relative z-10">
                    <div className="max-w-xl">
                      <h2 className="text-4xl md:text-[56px] font-delta-gothic font-weight-400 text-white">
                        Why Us ? 
                      </h2>
                      <p className="mt-2 text-[#FFFFFFE5] font-goudy font-weight-400 text-[22px]">
                        Blind fold trips let you experience a fun, spontaneous, and surprise-filled adventure on your finger toes 
                      </p>
                    </div>
                  </div>
                </section>

                <Footer />
        </section>
    );
}