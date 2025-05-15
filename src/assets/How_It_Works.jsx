import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import 'swiper/swiper-bundle.css';
import Footer from "./Footer";

export default function HowItWorks() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    
    const navLinks = [
        { label: "Home", path: "/" },
        { label: "Why Us?", path: "/why_us" },
        { label: "How it Works?", path: "/how_it_works" },
        { label: "Contact Us", path: "/contact" },
    ];

    const cards = [
        {
            title: "Round-Trip",
            subtitle: "Flight",
            description:
            "We handle your air travel to and from your surprise destination, choosing times that maximize your vacation experience.",
            src: "/image_6.jpg",
            alt: "Airplane wing view"
        },
        {
            title: "Hand-Picked",
            subtitle: "Accommodations",
            description:
            "Stay in unique and comfortable spots, from boutique hotels to charming B&Bs—all rated 3 stars or above.",
            src: "/image_5.jpg",
            alt: "Outdoor patio with chairs"
        },
        {
            title: "Curated Local",
            subtitle: "Experiences",
            description:
            "Enjoy must-see attractions, hidden gems, and cultural experiences designed just for you, based on your quiz responses.",
            src: "image_4.jpg",
            alt: "Local street market"
        },
        {
            title: "Packing",
            subtitle: "Guide",
            description:
            "A weather-based checklist tailored to your mystery location—so you're always prepared, even if you don't know where you're going.",
            src: "image_3.jpg",
            alt: "Person packing clothes"
        },
        {
            title: "24/7 Traveler",
            subtitle: "Support",
            description:
            "Our team is on standby to help with any hiccups or questions throughout your journey.",
            src: "/image_2.jpg",
            alt: "Hotel reception desk"
        },
        {
            title: "Surprise Reveal",
            subtitle: "Kit",
            description:
            "At the airport, you'll receive a custom envelope with your destination, itinerary, and first local tip!",
            src: "/image_1.jpg",
            alt: "Gift envelope with ribbon"
        }
    ];

    const steps = [
        {
            title: 'Step 1:',
            subtitle: 'Tell Us About You',
            description:
                'Fill out a short travel quiz—dates, budget, vibe (relaxing, adventurous, romantic?), and what you don’t want.',
            icon: '/robot.png',
        },
        {
            title: 'Step 2:',
            subtitle: 'We Plan Everything',
            description:
                'We book your flights, accommodation, and hand-pick experiences tailored to your personality and travel style.',
            icon: '/chart.png',
        },
        {
            title: 'Step 3:',
            subtitle: 'Clues & Countdown',
            description:
                'Receive playful hints about your destination—but nothing that gives it away! Just enough to build anticipation.',
            icon: '/clock.png',
        },
        {
            title: 'Step 4:',
            subtitle: 'Pack & Show Up',
            description:
                'Get a weather forecast and a packing list a few days before. Your destination is revealed only at the airport!',
            icon: '/human.png',
        },
        {
            title: 'Step 5:',
            subtitle: 'Fly & Enjoy the Mystery',
            description:
                'Hop on your flight and enjoy your surprise vacation. We handle the logistics—you make the memories.',
            icon: '/fly.png',
        },
    ];
    
    return(
        <section className="w-full font-goudy">
            {/* Background Image and Navigation */}
            <section
                className="relative min-h-screen md:h-[750px] bg-cover bg-center bg-no-repeat overflow-hidden"
                style={{ backgroundImage: "url('/How_it_works.jpg')" }}
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
                    <h2 className="text-[48px] md:text-[56px] font-dela-gothic font-normal text-white">
                        How it works ? 
                    </h2>
                    <p className="mt-2 text-[#FFFFFFE5] font-goudy font-normal text-[18px] md:text-[22px]">
                        No planning. No stress. Just pack and go—your surprise adventure awaits!
                    </p>
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            <div className="relative py-16 px-4 md:px-20 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('/how_it.jpg')] bg-cover bg-center opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 via-66% to-white z-10" />
                </div>

                {/* Content */}
                <div className="relative z-20 w-[90%] space-y-20 mx-auto">
                    {/* Step 1 - Left */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-[70%]">
                            <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-xl p-6 md:p-10 w-full border-l-4 border-[#000000]">
                                <div className="flex flex-row items-center gap-2">
                                    <div className="flex flex-col items-center">
                                        <h3 className="text-[#003566E5] text-[40px] font-archivo-black">Step 1:</h3>
                                        <p className="text-[#00474CBF] text-[24px] font-baloo-bhai">Tell Us About You</p>
                                    </div>
                                <img src="/robot.png" alt="Robot Icon" className="w-28 h-28" />
                                </div>
                                <p className="text-[#000000CC] text-[20px] font-poppins mt-2">
                                    Fill out a short travel quiz—dates, budget, vibe (relaxing, adventurous, romantic?), and what you don’t want.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 - Right */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8 justify-end">
                        <div className="md:w-[70%] ml-auto">
                            <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-xl p-6 md:p-10 w-full border-r-4 border-[#000000]">
                                <div className="flex flex-row items-center gap-2 justify-end">
                                    <img src="/chart.png" alt="Chart Icon" className="w-28 h-28" />
                                    <div className="flex flex-col items-center text-right">
                                        <h3 className="text-[#003566E5] text-[40px] font-archivo-black">Step 2:</h3>
                                        <p className="text-[#00474CBF] text-[24px] font-baloo-bhai">We Plan Everything</p>
                                    </div>
                                </div>
                                <p className="text-[#000000CC] text-[20px] font-poppins mt-2 text-right">
                                    We book your flights, accommodation, and hand-pick experiences tailored to your personality and travel style.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 - Left */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-[70%]">
                            <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-xl p-6 md:p-10 w-full border-l-4 border-[#000000]">
                                <div className="flex flex-row items-center gap-2">
                                    <div className="flex flex-col items-center">
                                        <h3 className="text-[#003566E5] text-[40px] font-archivo-black">Step 3:</h3>
                                        <p className="text-[#00474CBF] text-[24px] font-baloo-bhai">Clues & Countdown</p>
                                    </div>
                                <img src="/clock.png" alt="Clock Icon" className="w-28 h-28" />
                                </div>
                                <p className="text-[#000000CC] text-[20px] font-poppins mt-2">
                                    Receive playful hints about your destination—but nothing that gives it away! Just enough to build anticipation.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 4 - Right */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8 justify-end">
                        <div className="md:w-[70%] ml-auto">
                            <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-xl p-6 md:p-10 w-full border-r-4 border-[#000000]">
                                <div className="flex flex-row items-center gap-2 justify-end">
                                    <img src="/human.png" alt="Human Icon" className="w-28 h-28" />
                                    <div className="flex flex-col items-center text-right">
                                        <h3 className="text-[#003566E5] text-[40px] font-archivo-black">Step 4:</h3>
                                        <p className="text-[#00474CBF] text-[24px] font-baloo-bhai">Pack & Show Up</p>
                                    </div>
                                </div>
                                <p className="text-[#000000CC] text-[20px] font-poppins mt-2 text-right">
                                    Get a weather forecast and a packing list a few days before. Your destination is revealed only at the airport!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 5 - Left */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-[70%]">
                            <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-xl p-6 md:p-10 w-full border-l-4 border-[#000000]">
                                <div className="flex flex-row items-center gap-2">
                                    <img src="/fly.png" alt="Fly Icon" className="w-28 h-28" />
                                        <div className="flex flex-col items-center">
                                            <h3 className="text-[#003566E5] text-[40px] font-archivo-black">Step 5:</h3>
                                            <p className="text-[#00474CBF] text-[24px] font-baloo-bhai">Fly & Enjoy the Mystery</p>
                                        </div>
                                    </div>
                                <p className="text-[#000000CC] text-[20px] font-poppins mt-2">
                                    Hop on your flight and enjoy your surprise vacation. We handle the logistics—you make the memories.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cards Section */}
            <section className="px-6 py-8 md:py-12 text-[#000000BF] pl-[36px] sm:pl-[60px] lg:pl-[72px]">
                <h2 className="text-[28px] sm:text-[32px] md:text-[36px] text-[40px] font-archivo-black font-normal text-[#003566E5] -mb-2">What’s Included</h2>
                <p className="text-[16px] sm:text[20px] md:text-[24px] font-baloo-bhai font-normal text-[#00474CBF] sm:mb-6 lg:mb-4">Hover the Cards to know</p>
                <p className="mb-6 font-poppins font-normal text-[#000000BF] text-[14px] sm:text-[16px] md:text-[20px]">
                    Your Blind Fold Trip is thoughtfully packed with everything you need for a smooth and unforgettable adventure.
                    Here’s what’s part of the magic :
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 lg:px-28 mb-4">
                    {cards.map((card, idx) => (
                        <div
                        key={idx}
                        className="relative group overflow-hidden rounded-2xl shadow hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={card.src}
                                alt={card.alt}
                                className="w-[206px] h-[247px] object-cover rounded-2xl"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="font-normal text-[20px] text-[#FFFFFF] text-center px-2">
                                    <p className="font-archivo-black">{card.title}</p>
                                    <p className="font-sofia text-right px-4">{card.subtitle}</p>
                                    <p className="font-poppins text-[#FFFFFFBF] text-[12px] mt-1">{card.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="font-poppins font-bold text-[#A11616E5] text-[16px] mb-2">* Hover the Cards to know what's included</p>
                <div className="flex justify-end w-full">
                    <p className="text-[16px] md:text[20px] lg:text-[26px] font-poppins font-bold text-black mb-4 w-full md:w-1/3 pr-12">
                        <span className="text-[#A11616] opacity-90">Everything is taken care </span>
                        of so
                        <span className="text-[#003566] opacity-90"> you can relax, trust the process, and focus on the adventure.</span>
                    </p>
                </div>
            </section>

            {/* About Us Section */}
            <section className="px-6 py-8 md:py-12 text-[#000000BF] pl-[36px] sm:pl-[60px] lg:pl-[72px]">
                <h2 className="text-[28px] sm:text-[32px] md:text-[36px] text-[40px] font-archivo-black font-normal text-[#003566E5] -mb-2">About Us</h2>
                <p className="text-[16px] sm:text[20px] md:text-[24px] font-baloo-bhai font-normal text-[#00474CBF] sm:mb-6 lg:mb-4">Where mystery meets adventure</p>
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="font-poppins font-normal text-[#000000BF] text-[14px] sm:text-[16px] md:text-[20px]">
                        <p className="mb-4">
                            <span className="text-[#A11616E5] font-semibold">Blind Fold Trips</span> was <span className="text-[#000000] font-semibold">born out of a love for adventure and the belief that the best travel stories are the ones you never see coming. </span>
                            <span className="text-[#A11616E5] font-semibold">
                            Founded by a group of travel-obsessed dreamers, planners, and thrill-seekers,</span><span className="text-[#003566E5]"> our mission is to reignite the wonder of discovery in every journey you take.</span>
                        </p>

                        <p className="mb-4">
                            We understand how stressful it can be to plan the perfect trip—juggling dates, budgets, destinations, and
                            trying to please everyone. So, <span className="font-semibold text-[#000000]">we flipped the script</span>. With us, you <span className="font-semibold text-[#000000]">just pack your bags and go</span>. We take care of the rest, from
                            flights and hotels to curated local experiences. All while keeping your final destination a thrilling
                            surprise until the very last moment.
                        </p>

                        <p>
                            <span className="font-semibold text-[#003566E5]">We believe travel should be personal, exciting, and most of all—fun.</span>{" "}
                            That’s why every trip is tailored to your preferences, quirks, and sense of adventure. Whether you’re
                            celebrating something special, taking a break from routine, or just want to do something bold and different,
                            Blind Fold Trips is your passport to the unexpected.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <img src="/about_us.jpg" alt="This is not my secret" className="rounded-xl shadow-md w-[468px] h-[400px] mb-4" />
                        <p className="text-center text-[#000000] text-[16px] sm:text[20px] md:text-[26px] font-poppins font-bold">
                            <span className="text-[#003566E5]">Adventure doesn’t start at the destination</span>—it starts the moment you decide to take the leap.
                            <span className="text-[#A11616E5]">Let’s make travel magical again.</span>
                        </p>
                    </div>
                </div>
            </section>
          
          <Footer />
        </section>
    );
}