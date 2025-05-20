import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { FaEnvelope, FaPhone, FaClock, FaFacebook, FaInstagram, FaXTwitter,} from 'react-icons/fa6';
import Footer from "./Footer";

export default function Contact() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const [activeFaq, setActiveFaq] = useState(null);
    

    const toggleFaq = (id) => {
        if (activeFaq === id) {
          setActiveFaq(null); // Close if already open
        } else {
          setActiveFaq(id); // Open the clicked FAQ
        }
      };
    
      // FAQ data
    const faqItems = [
        {
            id: 1,
            question: "What path is waiting for me?",
            answer: "Find the hidden trails, the secret shores—let your adventurous soul decide!"
        },
        {
            id: 2,
            question: "Can I avoid certain places?",
            answer: "Yes! Adventure is about the unknown. Give us your “been-there, done-that” list, and we’ll take you somewhere fresh and thrilling!"
        },
        {
            id: 3,
            question: "How much does it cost?",
            answer: "The minimum is 10K per person for a 4-day trip from India ."
        }
    ];
    
    const navLinks = [
        { label: "Home", path: "/" },
        { label: "Why Us?", path: "/why_us" },
        { label: "How it Works?", path: "/how_it_works" },
        { label: "Contact Us", path: "/contact" },
    ];

    const images = [
        { src: '/IMG_1.jpg', alt: 'Preview 1' },
        { src: '/IMG_2.jpg', alt: 'Preview 2' },
        { src: '/IMG_3.jpg', alt: 'Preview 3' },
    ];
    
    const [activeIndex, setActiveIndex] = useState(0);

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        category: 'Booking a trip',
    });
    
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    
    return(
        <section className="w-full font-goudy">
                {/* Background Image and Navigation */}
                <section
                  className="relative min-h-screen md:h-[750px] bg-cover bg-center bg-no-repeat overflow-hidden"
                  style={{ backgroundImage: "url('/contact_us.jpg')" }}
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
                        Contact Us ?
                      </h2>
                      <p className="mt-2 text-[#FFFFFFE5] font-goudy font-normal text-[18px] md:text-[22px]">
                        We’re Just a Message Away From Your Next Trip
                      </p>
                    </div>
                  </div>
                </section>

                <section className="px-6 py-16 bg-white">
                    <div className="px-16 grid grid-cols-1 md:grid-cols-2 gap-24">
                        {/* 1: Left Content */}
                        <div>
                            <h2 className="text-[32px] md:text-[40px] text-[#003566E5] font-archivo-black font-normal mb-4">
                                Let’s Chat Before You Jet!
                            </h2>
                            <p className="font-poppins font-normal text-[20px] text-[#000000CC] text-center mb-6">
                                Got a question, a wild idea, or just want to say hi before your mystery trip? We're here to help—whether you're curious, nervous, or just excited.
                            </p>
                        </div>

                        {/* 2: Image Thumbnails */}
                        <div className="flex flex-col items-center gap-4">
                            {/* Image Row */}
                            <div className="flex justify-center gap-2">
                                {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img.src}
                                    alt={img.alt}
                                    onClick={() => setActiveIndex(index)}
                                    className={`rounded-xl object-cover cursor-pointer transition-all text-[#D9D9D9] duration-300
                                    ${index === activeIndex
                                        ? 'w-[250px] h-[140px]'
                                        : 'w-[100px] h-[140px]'}`}
                                />
                                ))}
                            </div>

                            {/* Dot Indicators */}
                            <div className="flex justify-center gap-2 mt-2">
                                {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300
                                    ${index === activeIndex ? 'bg-[#003566]' : 'bg-gray-400'}`}
                                />
                                ))}
                            </div>
                        </div>
                        
                        {/* 3: How to reach Us */}
                        <div className="self-start">
                            <p className="font-archivo-black font-normal text-[40px] text-[#003566E5] mb-6">
                                How to Reach Us?
                            </p>
                            {/* Contact Info */}
                            <div className="space-y-4 font-poppins font-normal text-[14px] md:text-[20px] text-[#000000]">
                                <div className="flex items-center gap-3">
                                <FaEnvelope className="text-[#003566]" />
                                <span>Email: hello@blindfoldtrips.com</span>
                                </div>
                                <div className="flex items-center gap-3">
                                <FaPhone className="text-[#003566]" />
                                <span>Phone: +1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center gap-3">
                                <FaClock className="text-[#003566]" />
                                <span>Office Hours: Mon–Fri, 10 AM to 6 PM (GMT)</span>
                                </div>
                            </div>

                            {/* Social Icons */}
                            <div className="mt-6">
                                <p className="font-baloo-bhai font-normal text-[24px] text-[#00474CBF] mb-2 ">Follow us on:</p>
                                <div className="flex space-x-4 text-2xl text-[#003566]">
                                <a href="#" aria-label="Facebook">
                                    <FaFacebook className="hover:text-blue-700 transition" />
                                </a>
                                <a href="#" aria-label="Instagram">
                                    <FaInstagram className="hover:text-pink-500 transition" />
                                </a>
                                <a href="#" aria-label="X">
                                    <FaXTwitter className="hover:text-black transition" />
                                </a>
                                </div>
                            </div>
                        </div>

                        {/* 4: Map with Directions */}
                        <div className="relative rounded-2xl overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3811.548841843516!2d83.302891!3d16.515099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39432eb5a2afc5%3A0x8eb3c71ae08b18cc!2sBenz%20Circle%2C%20Vijayawada!5e0!3m2!1sen!2sin!4v1700000000000"
                                width="100%"
                                height="260"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Get Directions"
                            ></iframe>
                            <a
                                href="https://www.google.com/maps?q=benz+circle+vijayawada"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm shadow-md hover:bg-blue-700 transition"
                            >
                                Get Directions ✈️
                            </a>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="relative py-12 overflow-hidden">
                {/* Background Layer */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                    backgroundImage: `linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.5) 33.14%, rgba(255, 255, 255, 0.75) 66.28%, #FFFFFF 94.69%), url('/contact_1.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    }}
                />

                {/* Foreground Content */}
                <div className="relative z-10 container mx-auto px-6 lg:px-16">
                    <div className="mt-16">
                    <div className="flex flex-wrap items-center">
                        {/* Left side - Image or placeholder */}
                        <div className="w-full md:w-1/3 text-center md:text-left">
                        {/* Optional: insert an image or remove this div */}
                        </div>

                        {/* Right side - FAQ */}
                        <div className="w-full md:w-2/3 pl-6 pr-6 lg:pl-12 lg:pr-24 pt-2">
                        <div className="mb-6 flex flex-col items-end">
                            <h2 className="text-[32px] font-archivo-black font-normal text-[#003566E5]">
                            Got Questions? We've Got Answers
                            </h2>
                            <p className="text-[24px] font-baloo-bhai font-normal text-[#00474CBF]">
                            Know Before You Go
                            </p>
                        </div>

                        {faqItems.map((faq) => (
                            <div key={faq.id} className="mb-4">
                            <div
                                className={`p-6 rounded-xl shadow-sm cursor-pointer transition-colors duration-300 ${
                                activeFaq === faq.id
                                    ? 'bg-[#003566] text-white'
                                    : 'bg-[#FFFFFF99] text-gray-700'
                                }`}
                                onClick={() => toggleFaq(faq.id)}
                            >
                                <div className="flex justify-between items-center">
                                <h3
                                    className={`text-[20px] font-poppins font-normal ${
                                    activeFaq === faq.id
                                        ? 'text-[#FFFFFFBF]'
                                        : 'text-[#000000BF]'
                                    }`}
                                >
                                    {faq.question}
                                </h3>
                                <span className="text-2xl transition duration-300">
                                    {activeFaq === faq.id ? '−' : '+'}
                                </span>
                                </div>

                                {activeFaq === faq.id && (
                                <div className="pt-1">
                                    <p className="font-poppins font-light text-[16px] text-[#FFFFFF99]">
                                    {faq.answer}
                                    </p>
                                </div>
                                )}
                            </div>
                            </div>
                        ))}

                        <div className="mt-6">
                            <p className="font-poppins font-light text-[20px] text-black">
                            Still wondering? Find answers in our{' '}
                            <span className="text-[#003566] font-bold">FAQs!</span>
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

                {/* Contact Form Section */}
                <section className="bg-[#FFFFFF] pt-6 pb-6">
                    <div className="w-[90%] border-l-4 border-[#FFBE55] px-10 py-10 mx-auto shadow-xl rounded-3xl mt-6 mb-6">
                        <div className="items-center mb-6">
                            <h2 className="text-[32px] md:text-[40px] text-[#003566E5] font-archivo-black font-normal mb-1">Send Us a Message</h2>
                            <p className="text-[20px] md:text-[24px] text-[#00474CBF] font-baloo-bhai font-normal mb-6">
                                We usually reply within 24 hours. Faster if we've had our coffee ☕
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-14 items-start">
                            {/* Left: Form */}
                            <div>
                                <form className="space-y-4">
                                    <div>
                                    <label className="block text-[17.53px] mb-1" htmlFor="name">Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full border border-[1.61px] border-[#003566] rounded-lg px-3 py-2"
                                        value={form.name}
                                        onChange={handleChange}
                                    />
                                    </div>

                                    <div>
                                    <label className="block text-[17.53px] mb-1" htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full border border-[1.61px] border-[#003566] rounded-lg px-3 py-2"
                                        value={form.email}
                                        onChange={handleChange}
                                    />
                                    </div>

                                    <div>
                                    <label className="block text-[17.53px] mb-1" htmlFor="phone">Phone</label>
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        className="w-full border border-[1.61px] border-[#003566] rounded-lg px-3 py-2"
                                        value={form.phone}
                                        onChange={handleChange}
                                    />
                                    </div>

                                    <div>
                                    <label className="block text-[17.53px] mb-1" htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="w-full border border-[1.61px] border-[#003566] rounded-lg px-3 py-2"
                                        value={form.subject}
                                        onChange={handleChange}
                                    />
                                    </div>

                                    <div>
                                    <label className="block text-[17.53px] mb-1" htmlFor="message">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        required
                                        className="w-full border border-[1.61px] border-[#003566] rounded-lg px-3 py-2"
                                        value={form.message}
                                        onChange={handleChange}
                                    />
                                    </div>

                                    <div>
                                    <label className="block text-[17.53px] mb-1" htmlFor="category">What's this about?</label>
                                    <select
                                        id="category"
                                        name="category"
                                        className="w-full border border-[1.61px] border-[#003566] rounded-lg px-3 py-2"
                                        value={form.category}
                                        onChange={handleChange}
                                    >
                                        <option>Booking a trip</option>
                                        <option>Collaborating</option>
                                        <option>Support</option>
                                        <option>Other</option>
                                    </select>
                                    </div>

                                    <button
                                    type="submit"
                                    className="mt-4 bg-[#A11616E5] font-poppins font-bold text-[#FCD2B1] text-[18px] md:text-[24px] px-12 md:px-20 py-1 rounded-xl shadow transition"
                                    >
                                    Submit →
                                    </button>
                                </form>
                            </div>

                            {/* Right: Image and Text */}
                            <div className="flex flex-col items-center justify-start">
                                <img
                                    src="/contact_form.jpg"
                                    alt="Phone typing"
                                    className="rounded-xl object-cover w-full h-[300px] md:h-[600px] mb-6"
                                />
                                <p className="text-center">
                                    <span className="font-poppins font-bold text-[25.5px] text-[#003566CC]">
                                    If you're tired of planning every second of your trip
                                    </span>
                                    <span className="font-poppins font-bold text-[25.5px] text-[#000000]">
                                        , or just ready to say "yes" to something new—
                                    </span>
                                    <span className="font-poppins font-bold text-[25.5px] text-[#A11616]">this is for you.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
        </section>
    );
}