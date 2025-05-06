import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { BiLeftArrow } from "react-icons/bi";
import {FaArrowLeft, FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

// ImageCarousel component for showing one image at a time with fade transition
const ImageCarousel = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-48 overflow-hidden rounded">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${alt} ${currentIndex + 1}`}
          className="w-full h-[169px] object-cover rounded-xl justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        />
      </AnimatePresence>
    </div>
  );
};

const images = [
  '/why_us_1.jpg',
  '/why_us_2.jpg',
  '/why_us_3.jpg',
  '/why_us_4.jpg',
  '/why_us_5.jpg',
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

export default function AdventureSteps() {
  const [activeCard, setActiveCard] = useState(null);
  const [indiaStartIndex, setIndiaStartIndex] = useState(0);
  const [globalStartIndex, setGlobalStartIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Why Us?", path: "/why_us" },
    { label: "How it Works?", path: "/how_it_works" },
    { label: "Contact Us", path: "/contact" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Delay of 3000ms (3s)
    return () => clearInterval(timer);
  }, []);

  const [activeFaq, setActiveFaq] = useState(null);
  
  const steps = [
    {
      number: "01",
      title: "Whisper your answers, and let the adventure unfold.",
      description:
        "Plan less, explore more! Share your travel details in 10 minutes—dates, budget, and preferences—then let the magic happen. A surprise trip proposal will land in your inbox soon... no hints, just pure adventure!",
      position: "top-[10%] left-[5%] max-w-[450px]",
    },
    {
      number: "02",
      title: "Answers are in, now it's time for the thrill to begin!",
      description:
        "No planning, no stress—just pack up and let the Blind Fold trips do the rest!",
      position: "top-[35%] right-[5%] max-w-[450px]",
    },
    {
      number: "03",
      title: "Airport first, destination next—let the mystery unfold!",
      description:
        "Arrive at the airport, no need to guess. Open your postcard, feel the suspense! Board your flight, let wonder ignite. Adventure awaits—your journey takes flight!",
      position: "top-[55%] left-[5%] max-w-[450px]",
    },
  ];

  const indiaGems = [
    {
      id: "nature-india",
      title: "Nature Unleashed",
      description: "Epic trails, roaring rivers, and wild air.",
      image: "/India/Nature.jpg",
      detailContent: (
        <div className="p-4 flex flex-col h-full text-white">
          <h3 className="font-titan font-weight-400 text-[24px] text-[#EC8305E5] mb-2 text-center w-full">Nature Unleashed</h3>
          <div className="flex flex-row flex-grow">
            <div className="w-1/2">
              <ul className="list-disc pl-[30px] space-y-1 font-sofia font-weight-400 text-[13px] text-[#FFFFFF]">
                <li>Coastal / Beach</li>
                <li>Mountains</li>
                <li>Forest / Jungle</li>
                <li>Lakes & Rivers</li>
                <li>Waterfalls</li>
                <li>National Parks</li>
                <li>Wildlife & Safari</li>
              </ul>
            </div>
            <div className="w-1/2">
              <ImageCarousel 
                images={[
                  "/India/1_1_1.jpg", 
                  "/India/1_1_2.jpg", 
                  "/India/1_1_3.jpg", 
                  "/India/1_1_4.jpg",
                  "/India/1_1_5.jpg",
                  "/India/1_1_6.jpg",
                  "/India/1_1_7.jpg"
                ]} 
                alt="Nature" 
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: "adrenaline-india",
      title: "Adrenaline Fix",
      description: "Fuel your thrill with every chill.",
      image: "/India/Adrenaline.jpg",
      detailContent: (
        <div className="p-4 flex flex-col h-full text-white">
          <h3 className="font-titan font-weight-400 text-[24px] text-[#EC8305E5] mb-2 text-center w-full">Adventure & Activities</h3>
          <div className="flex flex-row flex-grow">
            <div className="w-1/2">
              <ul className="list-disc pl-[30px] space-y-1 font-sofia font-weight-400 text-[13px] text-[#FFFFFF]">
                <li>Trekking / Hiking</li>
                <li>Camping</li>
                <li>Skiing / Snow Adevntures</li>
                <li>Scuba Diving / Snorkeling</li>
                <li>Paragliding / Skydiving</li>
                <li>Rock Climbing</li>
                <li>Biking / Motorbiking Tours</li>
              </ul>
            </div>
            <div className="w-1/2">
              <ImageCarousel 
                images={[
                  "/India/1_2_1.jpg", 
                  "/India/1_2_2.jpg", 
                  "/India/1_2_3.jpg", 
                  "/India/1_2_4.jpg",
                  "/India/1_2_5.jpg",
                  "/India/1_2_6.jpg",
                  "/India/1_2_7.jpg"
                ]} 
                alt="Adrenaline" 
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: "culture-india",
      title: "Culture Unlocked",
      description: "Traditions, temples, and tales with a twist.",
      image: "/India/Culture.jpg",
      detailContent: (
        <div className="p-4 flex flex-col h-full text-white">
          <h3 className="font-titan font-weight-400 text-[24px] text-[#EC8305E5] mb-2 text-center w-full">Cultural & Historical</h3>
          <div className="flex flex-row flex-grow">
            <div className="w-1/2">
              <ul className="list-disc pl-[30px] space-y-1 font-sofia font-weight-400 text-[13px] text-[#FFFFFF]">
                <li>Heritage & Historical Tours</li>
                <li>Devotional / Pilgrimage</li>
                <li>Rural / Village Tourism</li>
                <li>Architecture & Monuments</li>
                <li>Archaeological Sites</li>
                <li>Cultural Festivals</li>
              </ul>
            </div>
            <div className="w-1/2">
              <ImageCarousel 
                images={[
                  "/India/1_3_1.jpg", 
                  "/India/1_3_2.jpg", 
                  "/India/1_3_3.jpg", 
                  "/India/1_3_4.jpg",
                  "/India/1_3_5.jpg",
                  "/India/1_3_6.jpg"
                ]} 
                alt="Culture" 
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: "taste-india",
      title: "Taste the Culture",
      description: "Dine like a local, live like one too.",
      image: "/India/Taste.jpg",
      detailContent: (
        <div className="p-4 flex flex-col h-full text-white">
          <h3 className="font-titan font-weight-400 text-[24px] text-[#EC8305E5] mb-2 text-center w-full">Taste The Culture</h3>
          <div className="flex flex-row flex-grow">
            <div className="w-1/2">
              <ul className="list-disc pl-[30px] space-y-1 font-sofia font-weight-400 text-[13px] text-[#FFFFFF]">
                <li>Culinary Tours / Food Trails</li>
                <li>Wine Tasting / Vineyard Tours</li>
                <li>Cooking Classes</li>
                <li>Shopping Destinations</li>
                <li>Wellness & Spa Retreats</li>
              </ul>
            </div>
            <div className="w-1/2">
              <ImageCarousel 
                images={[
                  "/India/1_4_1.jpg", 
                  "/India/1_4_2.jpg", 
                  "/India/1_4_3.jpg", 
                  "/India/1_4_4.jpg",
                  "/India/1_4_5.jpg"
                ]} 
                alt="Taste" 
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: "city-india",
      title: "City Beat",
      description: "Catch the rhythm of rooftops and rush.",
      image: "/India/City.jpg",
      detailContent: (
        <div className="p-4 flex flex-col h-full text-white">
          <h3 className="font-titan font-weight-400 text-[24px] text-[#EC8305E5] mb-2 text-center w-full">Urban & Entertainment</h3>
          <div className="flex flex-row flex-grow">
            <div className="w-1/2">
              <ul className="list-disc pl-[30px] space-y-1 font-sofia font-weight-400 text-[13px] text-[#FFFFFF]">
                <li>Party & Nightlife</li>
                <li>City Tours / Urban Escapes</li>
                <li>Luxury Travel</li>
                <li>Cruises</li>
                <li>Theme Parks</li>
              </ul>
            </div>
            <div className="w-1/2">
              <ImageCarousel 
                images={[
                  "/India/1_5_1.jpg", 
                  "/India/1_5_2.jpg", 
                  "/India/1_5_3.jpg", 
                  "/India/1_5_4.jpg",
                  "/India/1_5_5.jpg"
                ]} 
                alt="City" 
              />
            </div>
          </div>
        </div>
      )
    },{
      id: "festive-india",
      title: "Festive Trails",
      description: "Celebrate, explore, and discover something worth remembering.",
      image: "/India/Festive.jpg",
      detailContent: (
        <div className="p-4 flex flex-col h-full text-white">
          <h3 className="font-titan font-weight-400 text-[24px] text-[#EC8305E5] mb-2 text-center w-full">Festive Trails</h3>
          <div className="flex flex-row flex-grow">
            <div className="w-1/2">
              <ul className="list-disc pl-[30px] space-y-1 font-sofia font-weight-400 text-[13px] text-[#FFFFFF]">
                <li>Honeymoon / Romantic</li>
                <li>Winter Travel</li>
                <li>Summer Getaways</li>
                <li>Spring Blossoms</li>
                <li>Photography Tours</li>
                <li>Eco-Tourism</li>
              </ul>
            </div>
            <div className="w-1/2">
              <ImageCarousel 
                images={[
                  "/India/1_6_1.jpg", 
                  "/India/1_6_2.jpg", 
                  "/India/1_6_3.jpg", 
                  "/India/1_6_4.jpg",
                  "/India/1_6_5.jpg"
                ]} 
                alt="Festive" 
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: "squad-india",
      title: "Squad Getaways",
      description: "One destination. Endless group selfies.",
      image: "/India/Squad.jpg",
      detailContent: (
        <div className="p-4 flex flex-col h-full text-white">
          <h3 className="font-titan font-weight-400 text-[24px] text-[#EC8305E5] mb-2 text-center w-full">Squad Getaways</h3>
          <div className="flex flex-row flex-grow">
            <div className="w-1/2">
              <ul className="list-disc pl-[30px] space-y-1 font-sofia font-weight-400 text-[13px] text-[#FFFFFF]">
                <li>Family-Friendly Trips</li>
                <li>Kids' Adventures</li>
                <li>Group Tours</li>
                <li>Solo Travel Friendly</li>
              </ul>
            </div>
            <div className="w-1/2">
              <ImageCarousel 
                images={[
                  "/India/1_7_1.jpg", 
                  "/India/1_7_2.jpg", 
                  "/India/1_7_3.jpg", 
                  "/India/1_7_4.jpg",
                  "/India/1_7_5.jpg",
                  "/India/1_7_6.jpg"
                ]} 
                alt="Squad" 
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: "awakening-india",
      title: "Awakening the soul",
      description: "Discover your true self through spirituality and reflection.",
      image: "/India/Awakening.jpg",
      detailContent: (
        <div className="p-4 flex flex-col h-full text-white">
          <h3 className="font-titan font-weight-400 text-[24px] text-[#EC8305E5] mb-2 text-center w-full">Spiritual & Self-Discovery</h3>
          <div className="flex flex-row flex-grow">
            <div className="w-1/2">
              <ul className="list-disc pl-[30px] space-y-1 font-sofia font-weight-400 text-[13px] text-[#FFFFFF]">
                <li>Devotional / Pilgrimage</li>
                <li>Yoga & Meditation Retreats</li>
                <li>Mindfulness Journeys</li>
                <li>Astrology / Mystic Travel</li>
              </ul>
            </div>
            <div className="w-1/2">
              <ImageCarousel 
                images={[
                  "/India/1_8_1.jpg", 
                  "/India/1_8_2.jpg", 
                  "/India/1_8_3.jpg", 
                  "/India/1_8_4.jpg"
                ]} 
                alt="Awakening" 
              />
            </div>
          </div>
        </div>
      )
    }
  ];

  const globalGems = [
    {
      id: "nature-global",
      title: "Nature Unleashed",
      description: "Epic trails, roaring rivers, and wild air.",
      image: "/home.jpg",
      detailContent: (
        <div className="p-6">
          <h3 className="font-titan font-weight-400 text-[24px] text-[#EC8305E5] mb-2">Nature Unleashed</h3>
          <p className="mb-4">Experience the world's most breathtaking natural wonders.</p>
          <ul className="list-disc pl-[30px] space-y-1 font-sofia font-weight-400 text-[13px] text-[#FFFFFF]">
            <li>Amazon Rainforest adventures</li>
            <li>Safari in Serengeti National Park</li>
            <li>Explore the Grand Canyon</li>
            <li>Northern Lights expedition in Norway</li>
          </ul>
        </div>
      )
    },
    {
      id: "adrenaline-global",
      title: "Adrenaline Fix",
      description: "Fuel your thrill with every chill.",
      image: "/home.jpg",
      detailContent: (
        <div className="p-6">
          <h3 className="font-titan font-weight-400 text-[24px] text-[#EC8305E5] mb-2">Adrenaline Fix</h3>
          <p className="mb-4">Chase worldwide thrills that will leave you breathless.</p>
          <ul className="list-disc pl-[30px] space-y-1 font-sofia font-weight-400 text-[13px] text-[#FFFFFF]">
            <li>Skydiving in Dubai</li>
            <li>Bungee jumping in New Zealand</li>
            <li>Volcano boarding in Nicaragua</li>
            <li>Shark cage diving in South Africa</li>
          </ul>
        </div>
      )
    },
    {
      id: "culture-global",
      title: "Cultural & Historical",
      description: "Traditions, temples, and tales with a twist.",
      image: "/home.jpg",
      detailContent: (
        <div className="p-6 text-white">
          <h3 className="font-titan font-weight-400 text-[24px] text-[#EC8305E5] mb-2">Cultural & Historical</h3>
          <ul className="space-y-1 text-[14px]">
            <li>Ancient Wonder Tours</li>
            <li>World Heritage Explorations</li>
            <li>Indigenous Community Visits</li>
            <li>Historical City Tours</li>
            <li>Cultural Immersion Programs</li>
            <li>Festival Celebrations Worldwide</li>
          </ul>
        </div>
      )
    },
    {
      id: "gastronomy-global",
      title: "Gastronomic Journey",
      description: "Taste the world, one flavor at a time.",
      image: "/home.jpg",
      detailContent: (
        <div className="p-6">
          <h3 className="font-titan font-weight-400 text-[24px] text-[#EC8305E5] mb-2">Gastronomic Journey</h3>
          <p className="mb-4">Travel through taste with culinary adventures worldwide.</p>
          <ul className="list-disc pl-[30px] space-y-1 font-sofia font-weight-400 text-[13px] text-[#FFFFFF]">
            <li>Pasta making in Italy</li>
            <li>Street food tours in Thailand</li>
            <li>Wine tasting in France</li>
            <li>Chocolate workshops in Belgium</li>
          </ul>
        </div>
      )
    },
  ];

  // Function to handle card click
  const handleCardClick = (id) => {
    if (activeCard === id) {
      setActiveCard(null); // Close if already open
    } else {
      setActiveCard(id); // Open the clicked card
    }
  };

  // Function to move cards
  const moveCards = (section, direction) => {
    setSlideDirection(direction > 0 ? "right" : "left");
    
    if (section === 'india') {
      const newIndex = indiaStartIndex + direction;
      // Ensure we don't go out of bounds
      if (newIndex >= 0 && newIndex <= indiaGems.length - 3) {
        setIndiaStartIndex(newIndex);
      }
    } else if (section === 'global') {
      const newIndex = globalStartIndex + direction;
      // Ensure we don't go out of bounds
      if (newIndex >= 0 && newIndex <= globalGems.length - 3) {
        setGlobalStartIndex(newIndex);
      }
    }
  };

  // Check if we can move left or right
  const canMoveLeft = indiaStartIndex > 0;
  const canMoveRight = indiaStartIndex < indiaGems.length - 3;


  // Get visible gems for each section
  const visibleIndiaGems = indiaGems.slice(indiaStartIndex, indiaStartIndex + 3);
  const visibleGlobalGems = globalGems.slice(globalStartIndex, globalStartIndex + 3);

  // // Animation variants with sliding effect
  // const cardVariants = {
  //   hidden: (direction) => ({
  //     x: direction === "right" ? 300 : -300,
  //     opacity: 0
  //   }),
  //   visible: {
  //     x: 0,
  //     opacity: 1,
  //     transition: {
  //       x: { type: "spring", stiffness: 300, damping: 30 },
  //       opacity: { duration: 0.2 }
  //     }s
  //   },
  //   exit: (direction) => ({
  //     x: direction === "right" ? -300 : 300,
  //     opacity: 0,
  //     transition: {
  //       x: { type: "spring", stiffness: 300, damping: 30 },
  //       opacity: { duration: 0.2 }
  //     }
  //   })
  // };

  // Function to toggle FAQ items
  
  const cardVariants = {
    hidden: (direction) => ({
      x: direction === "right" ? 100 : -100,
      opacity: 0,
      transition: {
        duration: 0.0,
        ease: "easeInOut"
      }
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.0,
        ease: "easeInOut"
      }
    },
    exit: (direction) => ({
      x: direction === "right" ? -100 : 100,
      opacity: 0,
      transition: {
        duration: 0.0,
        ease: "easeInOut"
      }
    })
  };
  

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

  return (
    <section className="w-full font-goudy">
        {/* Background Image and Navigation */}
        <section
          className="relative h-[750px] bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{ backgroundImage: "url('/home.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#00000080] z-0"></div>

          <div className="container mx-auto px-4 py-8 flex justify-between items-center pl-[66px] relative z-10">
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
                className="absolute top-[100px] right-0 w-1/3 bg-[#FCD2B1] flex flex-col items-center py-6 z-20 lg:hidden overflow-hidden"
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
          <div className="container mx-auto px-8 mt-24 pl-[72px] relative z-10">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-[56px] font-delta-gothic font-weight-400 text-white">
                No Clues, No Ties—Just Pure Surprise!
              </h2>
              <p className="mt-2 text-white font-goudy font-weight-400 text-[22px] opacity-90">
                Blind fold trips let you experience a fun, spontaneous, and
                surprise—filled adventure on your finger tips.
              </p>
              <button
                className="mt-8 bg-[#A11716E5] font-poppins font-weight-700 text-[#FCD2B1] text-[20px] px-6 py-2 rounded-full flex items-center transition border border-1"
                style={{ borderColor: '#FCD2B1' }}
              >
                Know your destination <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </section>

        {/* Unwrap The Mystery Section */}
        {/* <section className="relative py-12 pl-[72px]">
            <div 
                className="absolute inset-0 bg-contain opacity-25" 
                style={{backgroundImage: "url('/unwrap.jpg')"}}
            ></div>
            <div className="container mx-auto">
                <div className="md:w-[95%]">
                    <h2 className="text-[40px] font-archivo-black font-weight-400 text-[#003566E5]">Unwrap The Mystery</h2>
                    <p className="text-[#00474CBF] text-[24px] font-baloo-Bhai font-weight-400">Know How it Works</p>
                    
                    <div className="mt-6">
                        <p className="text-[#000000A6] text-[20px] font-poppins font-weight-300 leading-8">
                            Blind Fold Trips is a mystery travel platform where your destination remains a secret until you arrive at the 
                            airport! Get ready for a fun, spontaneous, and surprise-filled adventure. It's the ultimate experience for thrill-
                            seekers and free spirits. Pack your bags, embrace the unknown, and let fate choose your next journey—
                            because <span className="text-[#000000] font-weight-500">life is all about the adventure, not just the destination!</span>
                        </p>
                    </div>
                </div>
            </div>
        </section> */}
        <section
          className="relative py-12 pl-[72px]"
          style={{
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, #FFFFFF 100%)"
          }}
        >
          <div 
            className="absolute inset-0 bg-contain opacity-25 z-0" 
            style={{ backgroundImage: "url('/unwrap.jpg')" }}
          ></div>
          <div className="container mx-auto z-10">
            <div className="md:w-[95%]">
              <h2 className="text-[40px] font-archivo-black font-weight-400 text-[#003566E5]">Unwrap The Mystery</h2>
              <p className="text-[#00474CBF] text-[24px] font-baloo-bhai font-bold font-weight-400">Know How it Works</p>
              
              <div className="mt-6">
                <p className="text-[#000000A6] text-[20px] font-poppins font-weight-300 leading-8">
                  Blind Fold Trips is a mystery travel platform where your destination remains a secret until you arrive at the 
                  airport! Get ready for a fun, spontaneous, and surprise-filled adventure. It's the ultimate experience for thrill-
                  seekers and free spirits. Pack your bags, embrace the unknown, and let fate choose your next journey— 
                  because <span className="text-[#000000] font-weight-500">life is all about the adventure, not just the destination!</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Your 3 Step Plan Header */}
        <div className="relative mt-8 mb-8" style={{ background: "linear-gradient(90deg, rgba(255, 239, 206, 0) 0%, #FFEFCE 50%, rgba(255, 239, 206, 0) 100%)" }}>
            <div className="absolute inset-0 bg-[#0000002B]"></div>
            <div className="container mx-auto relative">
                <h2 className="text-[32px] font-titan font-weight-400 text-[#00474CBF] text-center">Your 3 step Plan</h2>
                <div className="absolute right-32 top-1/2 transform -translate-y-1/2 h-[24px] w-1 bg-[#00474C]"></div>
                <p className="text-[20px] text-[#00474CCC] font-sofia font-weight-400 absolute right-12 top-1/2 transform -translate-y-1/2">Progress</p>
            </div>
        </div>

        {/* Adventure Steps Section */}
        <section className="relative min-h-screen bg-cover bg-center overflow-hidden"
            style={{backgroundImage: "url('/mountain.jpg')",
              opacity: 0.8,
            }}
        >
            {/* SVG Path with stroke */}
            <svg
                viewBox="0 0 1200 800"
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                preserveAspectRatio="none"
            >
                <path
                d="M 450 200 Q 600 100, 900 300"
                stroke="white"
                strokeWidth="3"
                strokeDasharray="10,10"
                fill="none"
                />
                <path
                d="M 900 420 Q 1000 600, 600 700"
                stroke="white"
                strokeWidth="3"
                strokeDasharray="10,10"
                fill="none"
                />
            </svg>

            {/* Car on the new dashed path */}
            <motion.div
                className="absolute"
                style={{
                position: "absolute",
                zIndex: 10,
                width: "50px",
                height: "auto",
                offsetPath: "path('M 520 180 C 600 120, 680 120, 800 300')",
                offsetRotate: "auto"
                }}
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                transition={{
                duration: 8,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
                }}
            >
                <img 
                src="/car.png" 
                alt="Car" 
                width={90} 
                style={{ filter: "drop-shadow(0 0 3px white)" }} 
                />
            </motion.div>

            {/* Boxes */}
            {steps.map((step, idx) => (
                <div
                key={idx}
                className={`absolute ${step.position} p-2 bg-[#fff1dd] rounded-xl shadow-lg`}
                >
                <div className="flex items-center gap-0">
                    <h2 className="text-[70px] font-titan text-[#43463166]">{step.number}</h2>
                    <h3 className="text-[32px] font-semibold text-[#951A1AD9]">{step.title}</h3>
                </div>
                <p className="text-[15px] mt-2 text-[#573021]">{step.description}</p>
                </div>
            ))}

            {/* CTA Button */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                <button className="mt-12 px-8 py-3 bg-[#a02726] text-white text-lg rounded-full shadow-md hover:bg-[#821d1d] transition-all flex items-center">
                Know your destination <span className="ml-2">→</span>
                </button>
            </div>
        </section>

        {/* Explore hidden gems Section */}
        <section className="relative py-16 px-12">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/explore.jpg')" }}
          >
            <div className="w-full h-full bg-white/80"></div>
          </div>

          {/* Main content container with rounded edges and styling */}
          <div
            className="relative z-10 rounded-[50px] border-y-[6px] border-[#FFBE55] 
            shadow-[0px_21px_47px_#00000021,0px_85px_85px_#0000001C,0px_192px_115px_#00000012,0px_341px_136px_#00000005,0px_532px_149px_#00000000]
            bg-gradient-to-b from-white/0 to-white/90 overflow-hidden px-8 py-12"
          >
            {/* Explore hidden gems of India Section */}
            <div className="container mx-auto relative z-10">
                <h2 className="font-archivo-black font-weight-400 text-[40px] text-[#003566E5]">India Uncovered: Explore the Unexpected</h2>
                <p className="font-baloo-bhai font-weight-400 text-[24px] text-[#00474CBF] mb-8">Choose Your Adventure</p>
                
                <div className="relative">
                    <div className="flex flex-wrap gap-4 mb-4 -mr-4 relative overflow-hidden">
                        <AnimatePresence custom={slideDirection} mode="popLayout">
                            {visibleIndiaGems.map((gem) => (
                                <motion.div 
                                    key={gem.id}
                                    className={`w-[calc(33.33%-1rem)] rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ${activeCard === gem.id ? 'scale-105' : 'hover:-translate-y-2'}`}
                                    onClick={() => handleCardClick(gem.id)}
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    custom={slideDirection}
                                >
                                    {activeCard === gem.id ? (
                                        <div className={`h-[260px] bg-[#003566]`}>
                                            {gem.detailContent}
                                        </div>
                                    ) : (
                                        <div className="relative group">
                                            <div 
                                                className="h-[260px] bg-cover bg-center transition-all duration-300"
                                                style={{ backgroundImage: `url('${gem.image}')` }}
                                            >
                                                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300">
                                                    <div className="p-6 absolute bottom-0 left-0 text-white transition-all duration-300 group-hover:opacity-0">
                                                        <h3 className="text-[24px] font-bold">{gem.title}</h3>
                                                        <p className="text-gray-200 text-[14px]">{gem.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                    
                    <div className="absolute right-4 mt-2 flex space-x-2">
                      {/* Left Button */}
                      <button
                        disabled={!canMoveLeft}
                        onClick={() => canMoveLeft && moveCards('india', -1)}
                        className={`w-[77px] h-[42px] rounded-lg flex items-center justify-center shadow-md transition 
                          ${canMoveLeft ? 'bg-[#003566]' : 'bg-[#003566BF]'} text-[#FCD2B1] text-[32px] border border-0.94px border-[#FCD2B1]`}
                        // title={!canMoveLeft ? "No more cards" : ""}
                      >
                        <FaArrowLeftLong className="absolute w-[28px] h-[21px]" />
                      </button>

                      {/* Right Button */}
                      <button
                        disabled={!canMoveRight}
                        onClick={() => canMoveRight && moveCards('india', 1)}
                        className={`w-[77px] h-[42px] rounded-lg flex items-center justify-center shadow-md transition 
                          ${canMoveRight ? 'bg-[#003566]' : 'bg-[#003566BF]'} text-[#FCD2B1] text-[32px] border border-0.94px border-[#FCD2B1]`}
                        // title={!canMoveRight ? "No more cards" : ""}
                      >
                        <FaArrowRightLong className="absolute w-[28px] h-[21px]" />
                      </button>
                    </div>
                </div>
            </div>

            {/* Explore hidden gems Across the Globe Section */}
            <div className="container mx-auto relative z-10 mt-16">
                <h2 className="text-4xl font-bold text-[#003366]">Explore hidden gems Across the Globe</h2>
                <p className="text-xl text-[#003366] mb-8">Choose Your Adventure</p>
                
                <div className="relative">
                    <div className="flex flex-wrap gap-6 mb-4 relative overflow-hidden">
                        <AnimatePresence custom={slideDirection} mode="popLayout">
                            {visibleGlobalGems.map((gem) => (
                                <motion.div 
                                    key={gem.id}
                                    className={`w-[calc(33.33%-1rem)] rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ${activeCard === gem.id ? 'scale-105' : 'hover:-translate-y-2'}`}
                                    onClick={() => handleCardClick(gem.id)}
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    custom={slideDirection}
                                >
                                    {activeCard === gem.id ? (
                                        <div className={`h-[240px] ${gem.id.includes('culture') ? 'bg-[#002d62]' : 'bg-white'}`}>
                                            {gem.detailContent}
                                        </div>
                                    ) : (
                                        <div className="relative group">
                                            <div 
                                                className="h-[240px] bg-cover bg-center transition-all duration-300"
                                                style={{ backgroundImage: `url('${gem.image}')` }}
                                            >
                                                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300">
                                                    <div className="p-6 absolute bottom-0 left-0 text-white transition-all duration-300 group-hover:opacity-0">
                                                        <h3 className="text-2xl font-bold">{gem.title}</h3>
                                                        <p className="text-gray-200">{gem.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                    
                    <div className="absolute right-4 mt-2 flex space-x-2">
                        <button 
                            className="w-[77px] h-[42px] rounded-lg bg-gray-200 flex items-center justify-center shadow-md hover:bg-gray-300 transition"
                            onClick={() => moveCards('global', -1)}
                        >
                            <span className="text-2xl">←</span>
                        </button>
                        <button 
                            className="w-[77px] h-[42px] rounded-lg bg-gray-200 flex items-center justify-center shadow-md hover:bg-gray-300 transition"
                            onClick={() => moveCards('global', 1)}
                        >
                            <span className="text-2xl">→</span>
                        </button>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="relative h-[600px] bg-cover bg-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <AnimatePresence>
                <motion.div
                  key={current}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${images[current]})` }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    type: 'spring',
                    mass: 1,
                    stiffness: 100,
                    damping: 15,
                  }}
                />
              </AnimatePresence>
            </div>
            <div className="absolute inset-0 bg-[#00000099]"></div>
            <div className="relative flex flex-col justify-center items-center h-full font-">
                <h2 className="font-archivo-black font-weight-400 text-[#FCD2B1] text-[40px]">Why Us?</h2>
                <p className="font-baloo-bhai font-weight-400 text-[#FCD2B1] text-[24px]">The answer lies in the journey</p>
                <a href="/why_us" className="mt-4 px-5 py-1 text-[#FFFFFF] text-lg rounded-full transition-all flex items-center"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4) 40%)",
                    boxShadow: `
                      0px 2px 5px 0px #00000042,
                      0px 9px 9px 0px #0000003B,
                      0px 20px 12px 0px #00000021,
                      0px 36px 14px 0px #0000000A,
                      0px 56px 16px 0px #00000000
                    `
                  }}
                >
                  Know More
                  <span className="ml-2 inline-block transform -rotate-45">→</span>
                </a>
            </div>
        </section>

        {/* See What They Say - Happy Explorer Stories Section */}
        <section className="relative py-12">
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: "url('/map.jpg')" }}
          >
            <div className="absolute inset-0 bg-white/40"></div>
          </div>

          {/* Top-right decorative images */}
          <img
            src="/cloud.png"
            alt="Cloud"
            className="absolute top-1 right-20 w-[35%] z-10"
          />
          <img
            src="/flight.png"
            alt="Flight"
            className="absolute top-6 -right-32 w-[25%] z-10 rotate-[10deg]"
          />

          <div className="container relative mx-auto z-20 pl-[72px]">
            <div className="mb-8">
                <h2 className="font-archivo-black font-weight-400 text-[32px] text-[#003566E5]">See What They Say</h2>
                <p className="font-baloo-bhai font-weight-400 text-[24px] text-[#00474CBF]">Happy Explorer Stories</p>
            </div>
            
            {/* Grid of explorer images */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {feedbacks.map((item) => (
                <div
                  key={item.id}
                  className="group relative transition-all duration-300 ease-in-out w-[175px] hover:w-[270px] h-[399px] rounded-xl overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full h-full rounded-xl"
                  />
                  <div className="absolute inset-0 bg-[#003566] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex flex-col p-4 border border-[#FFBE55] border-4">
                    <h3 className="font-titan font-weight-400 text-[48px] text-[#FFBE55] text-center">{item.name}</h3>
                    <p className="font-goudy font-weight-400 text-[24px] text-[#FFBE55] text-right -mt-2 mb-4">{item.role}</p>
                    <p className="text-[#FFFFFFCC] text-[16px] font-poppins font-weight-400 leading-snug">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* FAQ Section */}
            <div className="mt-16 z-10">                    
                <div className="flex flex-wrap items-center">
                    {/* Left side - Image */}
                    <div className="w-full md:w-1/3 pr-8">
                      <img src="/Travel.jpg" alt="Travel" className="relative w-[320px] h-[280px] rounded-xl mb-4 justify-center" />
                    </div>
                    
                    {/* Right side - FAQ */}
                    <div className="w-full md:w-2/3 pl-12 pr-24 pt-2">
                        <div className="mb-6 flex flex-col items-end">
                            <h2 className="text-[32px] font-archivo-black font-weight-400 text-[#003566E5]">Got Questions? We've Got Answers</h2>
                            <p className="text-[24px] font-baloo-bhai font-weight-400 text-[#00474CBF]">Know Before You Go</p>
                        </div>
                        {faqItems.map((faq) => (
                            <div key={faq.id} className="mb-4">
                                <div 
                                    className={`p-4 rounded-lg shadow-sm cursor-pointer overflow-hidden transition-colors duration-300 ${activeFaq === faq.id ? 'bg-[#003566] text-white' : 'bg-[#FFFFFF99] text-gray-700'}`}
                                    onClick={() => toggleFaq(faq.id)}
                                >
                                    <div className="flex justify-between items-center">
                                          <h3 className={`text-[20px] font-poppins font-weight-400 ${activeFaq === faq.id ? 'text-[#FFFFFFBF' : 'text-[#000000BF]'}`}>{faq.question}</h3>
                                          <span className="text-2xl transition duration-300">
                                            {activeFaq === faq.id ? '−' : '+'}
                                          </span>
                                    </div>
                                    
                                    {activeFaq === faq.id && (
                                        <div className="pt-1">
                                            <p className="font-poppins font-weight-300 text-[16px] text-[#FFFFFF99]">{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                        <div className="mt-6">
                          <p className="font-poppins font-weight-300 text-[20px] text-[#000000]">Still wondering? Find answers in our <span className="text-[#003566] font-weight-700">FAQs!</span></p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-[#00474CE5] text-[#FFFFFF] py-10">
            <div className="container mx-auto px-12">
                <div className="flex flex-wrap justify-between">
                    {/* Logo and Info */}
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <img src="/logo.png" alt="BlindFold Trips Logo" className="h-12 mb-4" />
                        <img src="Footer.png" alt="Footer Image" className="h-[222px] w-[332px] -scale-x-100" />
                    </div>
                    
                    {/* Quick Links */}
                    <div className="w-full md:w-1/5 mb-6 md:mb-0">
                        <h4 className="font-archivo-black font-weight-400 text-[24px] mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-[18px] font-goudy font-weight-400">
                            <li><a href="/how_it_works" className="hover:text-red-200">How It Works?</a></li>
                            <li><a href="/why_us" className="hover:text-red-200">Why Us?</a></li>
                            <li><a href="/contact" className="hover:text-red-200">Contact Us</a></li>
                        </ul>
                    </div>
                    
                    {/* Legal Information */}
                    <div className="w-full md:w-1/5 mb-6 md:mb-0">
                        <h4 className="font-archivo-black font-weight-400 text-[24px] mb-4">Legal Information</h4>
                        <ul className="space-y-2 text-[18px] font-goudy font-weight-400">
                            <li><a href="/terms_of_service" className="hover:text-red-200">Terms of Service</a></li>
                            <li><a href="/refund_policy" className="hover:text-red-200">Refund Policy</a></li>
                            <li><a href="/privacy_policy" className="hover:text-red-200">Privacy Policy</a></li>
                        </ul>
                    </div>
                    
                    {/* Contact */}
                    <div className="w-full md:w-1/4">
                        <h4 className="font-archivo-black font-weight-400 text-[24px] mb-4">Contact</h4>
                        <ul className="space-y-2 text-[18px] font-goudy font-weight-400">
                            <li>Email: contact@blindfoldtrips.com</li>
                            <li>Phone: +1 (234) 567-8901</li>
                            <li>Address: 123-45, 1st Main, NE Galaxy, Republic</li>
                        </ul>
                    </div>
                </div>
                
                {/* Copyright */}
                <div className="mt-4 text-center text-[16px] font-goudy font-weight-400">
                    <p>© 2025 BlindFold Trips. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </section>
  );
}