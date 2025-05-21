import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/swiper-bundle.css';
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

    const feedbacks = [
      {
        id: 1,
        name: "John Doe",
        role: "College Student",
        text: "Blind Fold Trips was the perfect mix of thrill and affordability! As a college student, I loved the surprise element—it took me to a place I’d never have picked, but it turned out amazing! Well-planned, budget-friendly, and full of adventure. A must-try for spontaneous travelers!",
        image: "/1.jpg",
      },
      {
        id: 2,
        name: "John Doe",
        role: "College Student",
        text: "Blind Fold Trips was the perfect mix of thrill and affordability! As a college student, I loved the surprise element—it took me to a place I’d never have picked, but it turned out amazing! Well-planned, budget-friendly, and full of adventure. A must-try for spontaneous travelers!",
        image: "/2.jpg",
      },
      {
        id: 3,
        name: "John Doe",
        role: "College Student",
        text: "Blind Fold Trips was the perfect mix of thrill and affordability! As a college student, I loved the surprise element—it took me to a place I’d never have picked, but it turned out amazing! Well-planned, budget-friendly, and full of adventure. A must-try for spontaneous travelers!",
        image: "/3.jpg",
      },
      {
        id: 4,
        name: "John Doe",
        role: "College Student",
        text: "Blind Fold Trips was the perfect mix of thrill and affordability! As a college student, I loved the surprise element—it took me to a place I’d never have picked, but it turned out amazing! Well-planned, budget-friendly, and full of adventure. A must-try for spontaneous travelers!",
        image: "/4.jpg",
      },
      {
        id: 5,
        name: "John Doe",
        role: "College Student",
        text: "Blind Fold Trips was the perfect mix of thrill and affordability! As a college student, I loved the surprise element—it took me to a place I’d never have picked, but it turned out amazing! Well-planned, budget-friendly, and full of adventure. A must-try for spontaneous travelers!",
        image: "/5.jpg",
      },
      {
        id: 6,
        name: "John Doe",
        role: "College Student",
        text: "Blind Fold Trips was the perfect mix of thrill and affordability! As a college student, I loved the surprise element—it took me to a place I’d never have picked, but it turned out amazing! Well-planned, budget-friendly, and full of adventure. A must-try for spontaneous travelers!",
        image: "/6.jpg",
      },
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
                <h2 className="text-[48px] md:text-[56px] font-dela-gothic font-normal text-white">
                  Why Us ? 
                </h2>
                <p className="mt-2 text-[#FFFFFFE5] font-goudy font-normal text-[18px] md:text-[22px]">
                  Blind fold trips let you experience a fun, spontaneous, and surprise-filled adventure on your finger toes 
                </p>
              </div>
            </div>
          </section>
          
          <section className="flex flex-col md:flex-row items-center justify-center md:justify-between p-6 md:p-12 pl-8 sm:pl-16 md:pl-20 lg:pl-24 bg-white">
            {/* Text Content */}
            <div className="md:w-[70%] space-y-1">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-archivo-black font-normal text-[#003566E5]">
                Why Blind Fold Trips?
              </h2>
              <p className="text-[#00474CBF] text-[20px] md:text-[24px] font-baloo-bhai font-normal">
                Because Ordinary is Overrated.
              </p>
              <img
                src="image.jpg" // Replace with actual path
                alt="The Power of Why book cover"
                className="md:hidden rounded-xl shadow-lg w-[400px] h-[250px] object-cover transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
              />
              <p className="font-poppins font-normal text-[20px] text-[#000000CC] leading-relaxed">
                  Imagine showing up at the airport with your bags packed, boarding pass in hand,
                  and no idea where you're flying.
                  <span className="font-semibold text-[#000000E5]">
                    That’s the thrill of Blind Fold Trips—a spontaneous, surprise-filled journey where the
                    destination is revealed only when it’s time to take off.
                  </span>
                  No planning, no overthinking—just pure adventure.
              </p>
            </div>

            {/* Image */}
            <div className="hidden md:block mt-6 md:mt-0 flex justify-center items-center">
              <img
                src="image.jpg" // Replace with actual path
                alt="The Power of Why book cover"
                className="rounded-xl shadow-lg w-[400px] h-[250px] object-cover transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
              />
            </div>
          </section>

          <section className="relative bg-[#D9D9D966] py-12 px-4 mb-12 sm:px-12 lg:px-24">
            <h2 className="text-[32px] md:text-[40px] text-[#003566E5] font-archivo-black font-normal mb-10">
              What Makes Us Different?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="relative bg-white rounded-2xl overflow-hidden border border-12 border-[#FFBE55] shadow-sm hover:shadow-lg transition">
                <div className="relative h-[145px] bg-cover bg-center rounded-2xl" style={{ backgroundImage: "url('/img4.jpg')" }} >
                  <div className="absolute inset-0 bg-[#00000066] rounded-2xl z-0"></div>
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <h3 className="text-[20px] font-poppins font-bold text-[#FFFFFF] text-center z-10">
                      100% Mystery
                    </h3>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <p className="mt-4 font-poppins font-normal text-[12px] text-[#000000CC]">
                    <span className="font-semibold text-[#000000]">You won’t know where you’re going until the very last moment.</span> Your trip is custom-curated, but the destination stays top-secret until the reveal. <span className="font-semibold text-[#000000]">It’s like unwrapping a present</span>—you just happen to fly there.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-yellow-400 shadow-sm hover:shadow-lg transition">
                <div className="relative h-[145px] bg-cover bg-center rounded-2xl" style={{ backgroundImage: "url('/img3.jpg')" }} >
                  <div className="absolute inset-0 bg-[#00000066] rounded-2xl z-0"></div>
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <h3 className="text-[20px] font-poppins font-bold text-[#FFFFFF] text-center z-10">
                      Zero Planning, All Play
                    </h3>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <p className="mt-4 font-poppins font-normal text-[12px] text-[#000000CC]">
                    <span className="font-semibold text-[#000000]">Forget the stress</span> of booking flights, hotels, or activities. We handle it all, down to the details. <span className="font-semibold text-[#000000]">You just pack, trust the process, and go.</span>
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-yellow-400 shadow-sm hover:shadow-lg transition">
                <div className="relative h-[145px] items-center justify-center bg-cover bg-center rounded-2xl" style={{ backgroundImage: "url('/img2.jpg')" }} >
                  <div className="absolute inset-0 bg-[#00000066] rounded-2xl z-0"></div>
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <h3 className="text-[20px] font-poppins font-bold text-[#FFFFFF] text-center z-10">
                      Tailored to You
                    </h3>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <p className="mt-4 font-poppins font-normal text-[12px] text-[#000000CC]">
                    Whether you love beaches, mountains, culture, food, or adventure—
                    <span className="font-semibold text-[#000000]"> we design your trip based on your travel style, preferences, and comfort level.</span>
                    You’re in the dark, but your experience is anything but random.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-yellow-400 shadow-sm hover:shadow-lg transition">
                <div className="relative h-[145px] bg-cover bg-center rounded-2xl" style={{ backgroundImage: "url('/img1.jpg')" }} >
                  <div className="absolute inset-0 bg-[#00000066] rounded-2xl z-0"></div>
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <h3 className="text-[20px] font-poppins font-bold text-[#FFFFFF] text-center z-10">
                      Surprises that Spark Joy
                    </h3>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <p className="mt-4 font-poppins font-normal text-[12px] text-[#000000CC]">
                    <span className="font-semibold text-[#000000]">We’re here for the goosebumps.</span> The excitement. The jaw-drops. The laughs. The kind of stories that begin with “You won’t believe what happened…”
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative py-10 px-5 sm:px-8 md:px-12 overflow-hidden">
            {/* Background image with 0.8 opacity */}
            <div
              className="absolute inset-0 bg-center bg-cover z-[-2]"
              style={{
                backgroundImage: "url('/Who_for.jpg')",
                opacity: 0.8,
              }}
            ></div>

            {/* Black overlay on top of background image */}
            <div className="absolute inset-0 bg-[#00000066] z-[-1]"></div>

            {/* Content Container */}
            <div
              className="z-10 rounded-xl border-l-[6px] border-[#FFBE55] p-5 sm:p-7 md:p-10 shadow-[0px_21px_47px_#00000021,0px_85px_85px_#0000001C,0px_192px_115px_#00000012,0px_341px_137px_#00000005,1px_533px_149px_#00000000] max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-8"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0) -111.56%, rgba(255, 255, 255, 0.9) 100%)",
              }}
            >
              {/* Text Section */}
              <div className="z-20 flex-1">
                <h2 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-archivo-black font-normal font-bold text-[#003566E5] mb-4">
                  Who’s This For?
                </h2>

                <ul className="space-y-2 text-[15px] sm:text-[16px] md:text-[19px] text-[#000000BF] font-poppins font-normal">
                  <li>
                    <span className="text-[#000000] font-semibold">Free spirits and thrill-seekers</span> who live for the unknown.
                  </li>
                  <li>
                    <span className="text-[#000000] font-semibold">Romantic couples</span> looking to spice things up with a mystery escape.
                  </li>
                  <li>
                    <span className="text-[#000000] font-semibold">Curious explorers</span> who want something different from cookie-cutter vacations.
                  </li>
                  <li>
                    <span className="text-[#000000] font-semibold">Overworked minds</span> who just need a break—from both routine and decision-making.
                  </li>
                </ul>

                <p className="mt-6 text-base sm:text-[17px] md:text-[28px] lg:text-[34px] font-poppins font-bold leading-relaxed">
                  <span className="text-[#003566CC]">
                    If you're tired of planning every second of your trip
                  </span>
                  <span className="text-[#000000]">, or just ready to say "yes" to something new—</span>
                  <span className="text-[#A11616]"> this is for you.</span>
                </p>

                <button className="mt-6 bg-[#A11616E5] text-[#FCD2B1] px-5 py-2.5 rounded-lg font-poppins font-bold text-[15px] md:text-[19px] shadow-md"
                onClick={() => navigate("/questionnaire")}>
                  Start Your Mystery Trip
                </button>
              </div>

              {/* Mobile Swiper */}
              <div className="sm:hidden">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  modules={[Autoplay]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img
                      src="/Traveler_2.jpg"
                      alt="Traveler 2"
                      className="rounded-lg object-cover w-full h-[297px] transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:brightness-110"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/Traveler_4.jpg"
                      alt="Traveler 4"
                      className="rounded-lg object-cover w-full h-[297px] transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:brightness-110"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/Traveler_1.jpg"
                      alt="Traveler 1"
                      className="rounded-lg object-cover w-full h-[297px] transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:brightness-110"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/Traveler_3.jpg"
                      alt="Traveler 3"
                      className="rounded-lg object-cover w-full h-[297px] transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:brightness-110"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>

              {/* Desktop Image Grid */}
              <div className="hidden sm:block sm:grid sm:grid-cols-2 gap-2 md:gap-y-2 lg:-gap-y-2">
                <div className="flex flex-col gap-2">
                  <img
                    src="/Traveler_2.jpg"
                    alt="Traveler 2"
                    className="rounded-lg object-cover w-full h-[188px] transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:brightness-110"
                  />
                  <img
                    src="/Traveler_4.jpg"
                    alt="Traveler 4"
                    className="rounded-lg object-cover w-full h-[120px] transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:brightness-110"
                  />
                </div>

                <img
                  src="/Traveler_3.jpg"
                  alt="Traveler 3"
                  className="rounded-lg object-cover w-full h-[316px] transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:brightness-110"
                />

                <img
                  src="/Traveler_1.jpg"
                  alt="Traveler 1"
                  className="rounded-lg object-cover w-full sm:col-span-2 h-[180px] transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:brightness-110"
                />
              </div>
            </div>
          </section>

          <section className="relative py-12">
            <div className="absolute inset-0 bg-white"></div>

            <div className="container relative mx-auto z-20 pl-[48px] lg:pl-[72px]">
              <div className="mb-8">
                  <h2 className="font-archivo-black font-normal text-[32px] md:text-[40px] text-[#003566E5]">Real Trips. Real Stories. Real Wow</h2>
              </div>
              
              {/* Grid of explorer images */}
              <div className="slider relative rounded-xl p-4 overflow-x-auto">
                <div className="flex gap-2 pb-4 w-max">
                  {feedbacks.map((item) => (
                    <div
                      key={item.id}
                      className="group relative transition-all duration-300 ease-in-out w-[220px] hover:w-[270px] h-[399px] rounded-xl overflow-hidden"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover w-full h-full rounded-xl"
                      />
                      <div className="absolute inset-0 bg-[#003566] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex flex-col p-4 border border-[#FFBE55] border-4">
                        <h3 className="font-titan font-normal text-[48px] text-[#FFBE55] text-center">{item.name}</h3>
                        <p className="font-goudy font-normal text-[24px] text-[#FFBE55] text-right -mt-2 mb-4">{item.role}</p>
                        <p className="text-[#FFFFFFCC] text-[16px] font-poppins font-normal leading-snug">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:w-[90%] mt-8 mb-8">
                  <h2 className="font-archivo-black font-normal text-[32px] md:text-[40px] text-[#003566E5]">Ready to Let Go and Let Adventure Take Over?</h2>
                  <p className="mt-2 text-[#000000CC] font-poppins font-normal text-[20px]">
                    Your next unforgettable story starts with a leap of faith.<span className="font-extrabold text-[#003566CC]"> Pack your bag, embrace the unknown, and let Blind Fold Trips show you just how fun not knowing can be.</span>
                  </p>
                  <button className="mt-4 bg-[#A11616E5] text-[#FCD2B1] px-6 py-2 font-poppins font-bold text-[20px] rounded-xl"
                  onClick={() => navigate("/questionnaire")}>
                    Start Your Mystery Trip
                  </button>
              </div>

            </div>
          </section>

          <Footer />
        </section>
    );
}