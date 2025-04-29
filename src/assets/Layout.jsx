import React from "react";
import DashNav from "./Dashboard";

const Layout = ({ children }) => {

    return (
        <div className="min-h-screen flex flex-col font-goudy">
            <DashNav />
            <main>{children}</main>
        </div>
    );
};

export default Layout;


<section className="relative h-[755px] bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: "url('/home.jpg')" }}
        >
            {/* Dark overlay - positioned below other content */}
            <div className="absolute inset-0 bg-[#00000080] z-0"></div>
            
            {/* Navigation - with higher z-index to appear above overlay */}
            <div className="container mx-auto px-4 py-8 flex justify-between items-center pl-[66px] relative z-10">
                <div className="text-white text-2xl font-bold">
                    <img src="/logo.png" alt="Logo" className="h-16" />
                </div>
                <div className="flex items-center">
                    <nav className="hidden md:flex">
                        <ul className="flex space-x-8 text-[#FFFFFF] font-goudy font-[20px] font-weight-400">
                            <li><a href="/" className="hover:text-gray-300">Home</a></li>
                            <li><a href="/why_us" className="hover:text-gray-300">Why Us?</a></li>
                            <li><a href="_how_it_works" className="hover:text-gray-300">How it Works?</a></li>
                            <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
                        </ul>
                    </nav>
                    <button className="ml-8 bg-[#A11716E5] text-[#FCD2B1] px-4 py-2 font-poppins font-weight-700 rounded-full transition border border-radius-[2px] border-color-[#FCD2B1]">
                        Login / Register
                    </button>
                </div>
            </div>
            
            {/* Hero Content - with higher z-index to appear above overlay */}
            <div className="container mx-auto px-8 mt-16 pl-[72px] relative z-10">
                <div className="max-w-xl">
                    <h2 className="text-4xl md:text-[48px] font-delta-gothic font-weight-400 text-white">
                        No Clues, No Ties—<br/>
                        Just Pure Surprise!
                    </h2>
                    <p className="text-[#FFFFFFE5] font-goudy font-weight-400 mt-4 text-[22px]">
                        Blind fold trips let you experience a fun, spontaneous, and
                        surprise-filled adventure on your finger tips.
                    </p>
                    <button className="mt-8 bg-[A11716E5] font-poppins font-weight-700 text-[#FCD2B1] text-[20px] px-6 py-3 rounded-full flex items-center transition border border-radius-[2px] border-color-[#A11716E5]">
                        Know your destination <span className="ml-2">→</span>
                    </button>
                </div>
            </div>
        </section>