import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { FaArrowRightLong } from "react-icons/fa6";

// ImageCarousel component for showing one image at a time with fade transition
const ImageCarousel = ({ images, alt, clickTitle, activities }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${alt} ${currentIndex + 1}`}
          className="w-full h-[120px] object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </AnimatePresence>

      {/* Overlay with text */}
      <div className="absolute top-4 left-4 text-white px-2 py-1 bg-bg-[#A11616E5]">
        <div className="font-poppins font-bold text-[22px] text-[#FFFFFF]">{clickTitle}</div>
        <div className="font-poppins font-regular text-[12px] text-[#FFFFFF]">{activities[currentIndex]}</div>
      </div>
    </div>
  );
};

const generateDetailContent = (title, activities, activities_1, images, alt, navigate) => (
  <div className="w-full h-full flex flex-col">
    {/* Image carousel with overlay title - NO BORDER */}
    <div className="relative h-[120px] bg-[#A11616E5]">
      <ImageCarousel
        images={images}
        alt={alt}
        clickTitle={title}
        activities={activities}
      />
    </div>

    {/* Content below image - WITH BORDER except top */}
    <div className="rounded-b-2xl border border-2 border-[#FFBE55] border-t-0 text-[#1A1A1A] w-full h-full flex flex-col justify-between">
      {/* Activities Grid */}
      <div className="px-2 lg:px-4 pt-2 grid grid-cols-2 lg:grid-cols-3 gap-y-1 gap-x-1 text-[10px] text-[#1A1A1A] font-poppins font-medium">
        {activities_1.map((activity, index) => (
          <div key={index} className="flex items-start">
            <span className="mr-2 text-[10px]">•</span>
            <span>{activity}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex items-center justify-center p-4 pt-3">
        <button
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#A11616E5] rounded-xl border-[2px] border-[#F5B501] transition duration-300 font-poppins font-bold text-[10px] sm:text-[12px] md:text-[14px] text-[#FCD2B1]"
          onClick={() => navigate("/questionnaire")}
        >
          <img src="/footprint.png" alt="footprint icon" /> Chase the Adventure
        </button>
      </div>
    </div>
  </div>
);

export default function Home() {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState(null);
  const [indiaStartIndex, setIndiaStartIndex] = useState(0);
  const [globalStartIndex, setGlobalStartIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right");

  const [loginDetails, setLoginDetails] = useState(JSON.parse(localStorage.getItem("loginDetails")) || null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (loginDetails) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [loginDetails]);

  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Why Us?", path: "/why_us" },
    { label: "How it Works?", path: "/how_it_works" },
    { label: "Contact Us", path: "/contact" },
  ];

  const images = [
    '/why_us_1.jpg',
    '/why_us_2.jpg',
    '/why_us_3.jpg',
    '/why_us_4.jpg',
    '/why_us_5.jpg',
  ];

  const advImages = [
    '/airplane_ticket.png',
    '/kitesurfing.png',
    '/carry_on_bag.png',
    '/landscape_2.png',
    '/map_search.png',
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

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Delay of 3000ms (3s)
    return () => clearInterval(timer);
  }, []);

  const [currentAdv, setCurrentAdv] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAdv((prev) => (prev + 1) % advImages.length);
    }, 2000); // Delay of 3000ms (3s)
    return () => clearInterval(timer);
  }, []);

  const [activeFaq, setActiveFaq] = useState(null);
  
  const steps = [
    {
      number: "01",
      title: "Whisper your answers",
      subtitle: "and let the adventure unfold.",
      description:
        <span className="font-poppins font-light text-[15px] text-[#000000A6] group-hover:text-[#FFFFFFA6]">Plan less, explore more! <span className="font-bold text-[#000000] group-hover:text-[#FFFFFF]">Share your travel details in 10 minutes—dates, budget, and preferences—then let the magic happen.</span> A surprise trip proposal will land in your inbox soon... no hints, just pure adventure!</span>,
    },
    {
      number: "02",
      title: "Time For Thrill",
      subtitle: "to begin!",
      description:
        <span className="font-poppins font-light text-[15px] text-[#000000A6] group-hover:text-[#FFFFFFA6]">No planning, no stress—<span className="font-bold text-[#000000] group-hover:text-[#FFFFFF]">just pack up and let the Blind Fold trips do the rest!</span></span>,
    },
    {
      number: "03",
      title: "Airport first",
      subtitle:"destination next—let the mystery unfold!",
      description:
        <span className="font-poppins font-light text-[15px] text-[#000000A6] group-hover:text-[#FFFFFFA6]"><span className="font-bold text-[#000000] group-hover:text-[#FFFFFF]">Arrive at the airport, no need to guess. Open your postcard, feel the suspense!</span> Board your flight, let wonder ignite. Adventure awaits—your journey takes flight!</span>,
    },
  ];

  const indiaGems = [
    {
      id: "nature-india",
      title: "Nature Unleashed",
      description: "Epic trails, roaring rivers, and wild air.",
      image: "/Cards/Nature.jpg",
      detailContent: generateDetailContent("Nature & Scenic",
        [
        "Coastal / Beach",
        "Mountains",
        "Forest / Jungle",
        "Lakes & Rivers",
        "Waterfalls",
        "National Parks",
        "Wildlife & Safari"
      ],
      [
        "Coastal / Beach",
        "Mountains",
        "Forest / Jungle",
        "Lakes & Rivers",
        "Waterfalls",
        "Wildlife & Safari",
         "National Parks"
      ],
      [
        "/Cards/1_1.jpg", 
        "/Cards/1_2.jpg", 
        "/Cards/1_3.jpg", 
        "/Cards/1_4.jpg",
        "/Cards/1_5.jpg",
        "/Cards/1_6.jpg",
        "/Cards/1_7.jpg"
      ],
      "Nature",
      navigate,
      )
    },
    {
      id: "adrenaline-india",
      title: "Adrenaline Fix",
      description: "Fuel your thrill with every chill.",
      image: "/Cards/Adrenaline.jpg",
      detailContent: generateDetailContent("Adventure & Activities",
        [
          "Trekking / Hiking",
          "Camping",
          "Skiing / Snow Adventures",
          "Scuba Diving / Snorkeling",
          "Paragliding / Skydiving",
          "Rock Climbing",
          "Biking / Motorbiking Tours"
        ],
        [
          "Trekking",
          "Camping",
          "Rock Climbing",
          "Scuba Diving",
          "Snow Adventures",
          "Motorbiking Tours",
          "Cycling"
        ],
        [
          "/Cards/2_1.jpg", 
          "/Cards/2_2.jpg", 
          "/Cards/2_3.jpg", 
          "/Cards/2_4.jpg",
          "/Cards/2_5.jpg",
          "/Cards/2_6.jpg",
          "/Cards/2_7.jpg"
        ],
        "Adrenaline",
      navigate,
      )
    },
    {
      id: "culture-india",
      title: "Culture Unlocked",
      description: "Traditions, temples, and tales with a twist.",
      image: "/Cards/Culture.jpg",
      detailContent: generateDetailContent("Cultural & Historical",
        [
          "Heritage & Historical Tours",
          "Devotional / Pilgrimage",
          "Rural / Village Tourism",
          "Architecture & Monuments",
          "Archaeological Sites",
          "Cultural Festivals"
        ],
        [
          "Historical Tours",
          "Rural Tourism",
          "Archaeological Sites",
          "Pilgrimage",
          "Heritage",
          "Cultural Festivals",
          "Monuments",
        ],
        [
          "/Cards/3_1.jpg", 
          "/Cards/3_2.jpg", 
          "/Cards/3_3.jpg", 
          "/Cards/3_4.jpg",
          "/Cards/3_5.jpg",
          "/Cards/3_6.jpg"
        ],
        "Culture",
      navigate,
      )
    },
    {
      id: "taste-india",
      title: "Taste the Culture",
      description: "Dine like a local, live like one too.",
      image: "/Cards/Taste.jpg",
      detailContent: generateDetailContent("Food & Lifestyle",[
        "Culinary Tours / Food Trails",
        "Wine Tasting / Vineyard Tours",
        "Cooking Classes",
        "Shopping Destinations",
        "Wellness & Spa Retreats"
      ],[
        "Culinary Tours",
        "Vineyard Tours",
        "Cooking Classes",
        "Spa",
        "Wellness Retreats",
        "Shopping Destinations"
      ],[
        "/Cards/4_1.jpg", 
        "/Cards/4_2.jpg", 
        "/Cards/4_3.jpg", 
        "/Cards/4_4.jpg",
        "/Cards/4_5.jpg"
      ],"Taste",
      navigate,)
    },
    {
      id: "city-india",
      title: "City Beat",
      description: "Catch the rhythm of rooftops and rush.",
      image: "/Cards/City.jpg",
      detailContent: generateDetailContent("Urban & Entertainment", [
        "Party & Nightlife",
        "City Tours / Urban Escapes",
        "Luxury Travel",
        "Cruises",
        "Theme Parks"
      ],[
        "Party",
        "Casino",
        "Cruises",
        "Night Life",
        "Luxury Travel",
        "Theme Parks"
      ],[
        "/Cards/5_1.jpg", 
        "/Cards/5_2.jpg", 
        "/Cards/5_3.jpg", 
        "/Cards/5_4.jpg",
        "/Cards/5_5.jpg"
      ],"City",
      navigate,)
    },
    {
      id: "festive-india",
      title: "Festive Trails",
      description: "Celebrate, explore, and discover something worth remembering.",
      image: "/Cards/Festive.jpg",
      detailContent: generateDetailContent("Seasonal & Special Interest",[
        "Honeymoon / Romantic",
        "Winter Travel",
        "Summer Getaways",
        "Spring Blossoms",
        "Photography Tours",
        "Eco-Tourism"
      ],[
        "Honeymoon",
        "Winter Travel",
        "Summer Getaways",
        "Photography Tours",
        "Spring Blossoms",
        "Eco-Tourism"
      ],[
        "/Cards/6_1.jpg", 
        "/Cards/6_2.jpg", 
        "/Cards/6_3.jpg", 
        "/Cards/6_4.jpg",
        "/Cards/6_5.jpg"
      ],"Festive",
      navigate,)
    },
    {
      id: "squad-india",
      title: "Squad Getaways",
      description: "One destination. Endless group selfies.",
      image: "/Cards/Squad.jpg",
      detailContent: generateDetailContent("Family & Group Oriented",[
        "Family-Friendly Trips",
        "Kids' Adventures",
        "Group Tours",
        "Solo Travel Friendly"
      ],[
        "Family-Friendly Trips",
        "Kids' Adventures",
        "Group Tours",
        "Solo Travel Friendly"
      ],[
        "/Cards/7_1.jpg", 
        "/Cards/7_2.jpg", 
        "/Cards/7_3.jpg", 
        "/Cards/7_4.jpg",
        "/Cards/7_5.jpg",
        "/Cards/7_6.jpg"
      ],"Squad",
      navigate,)
    },
    {
      id: "awakening-india",
      title: "Awakening the soul",
      description: "Discover your true self through spirituality and reflection.",
      image: "/Cards/Awakening.jpg",
      detailContent: generateDetailContent("Spiritual & Self Discovery",[
        "Devotional / Pilgrimage",
        "Yoga & Meditation Retreats",
        "Mindfulness Journeys",
        "Astrology / Mystic Travel"
      ],[
        "Devotional",
        "Mystic Travel",
        "Mindfulness Journeys",
        "Meditation Retreat"
      ],[
        "/Cards/8_1.jpg", 
        "/Cards/8_2.jpg", 
        "/Cards/8_3.jpg", 
        "/Cards/8_4.jpg"
      ],"Awakening",
      navigate,)
    }
  ];

  const globalGems = [
    {
      id: "nature-global",
      title: "Nature Unleashed",
      description: "Epic trails, roaring rivers, and wild air.",
      image: "/Cards/Nature_Global.jpg",
      detailContent: generateDetailContent("Nature & Scenic",
        [
        "Coastal / Beach",
        "Mountains",
        "Forest / Jungle",
        "Lakes & Rivers",
        "Waterfalls",
        "National Parks",
        "Wildlife & Safari"
      ],
      [
        "Coastal / Beach",
        "Mountains",
        "Forest / Jungle",
        "Lakes & Rivers",
        "Waterfalls",
        "Wildlife & Safari",
         "National Parks"
      ],
      [
        "/Cards/1_1.jpg", 
        "/Cards/1_2.jpg", 
        "/Cards/1_3.jpg", 
        "/Cards/1_4.jpg",
        "/Cards/1_5.jpg",
        "/Cards/1_6.jpg",
        "/Cards/1_7.jpg"
      ],
      "Nature",
      navigate,
      )
    },
    {
      id: "adrenaline-global",
      title: "Adrenaline Fix",
      description: "Fuel your thrill with every chill.",
      image: "/Cards/Adrenaline_Global.jpg",
      detailContent: generateDetailContent("Adventure & Activities",
        [
          "Trekking / Hiking",
          "Camping",
          "Skiing / Snow Adventures",
          "Scuba Diving / Snorkeling",
          "Paragliding / Skydiving",
          "Rock Climbing",
          "Biking / Motorbiking Tours"
        ],
        [
          "Trekking",
          "Camping",
          "Rock Climbing",
          "Scuba Diving",
          "Snow Adventures",
          "Motorbiking Tours",
          "Cycling"
        ],
        [
          "/Cards/2_1.jpg", 
          "/Cards/2_2.jpg", 
          "/Cards/2_3.jpg", 
          "/Cards/2_4.jpg",
          "/Cards/2_5.jpg",
          "/Cards/2_6.jpg",
          "/Cards/2_7.jpg"
        ],
        "Adrenaline",
      navigate,
      )
    },
    {
      id: "culture-global",
      title: "Culture Unlocked",
      description: "Traditions, temples, and tales with a twist.",
      image: "/Cards/Culture_Global.jpg",
      detailContent: generateDetailContent("Cultural & Historical",
        [
          "Heritage & Historical Tours",
          "Devotional / Pilgrimage",
          "Rural / Village Tourism",
          "Architecture & Monuments",
          "Archaeological Sites",
          "Cultural Festivals"
        ],
        [
          "Historical Tours",
          "Rural Tourism",
          "Archaeological Sites",
          "Pilgrimage",
          "Heritage",
          "Cultural Festivals",
          "Monuments",
        ],
        [
          "/Cards/3_1.jpg", 
          "/Cards/3_2.jpg", 
          "/Cards/3_3.jpg", 
          "/Cards/3_4.jpg",
          "/Cards/3_5.jpg",
          "/Cards/3_6.jpg"
        ],
        "Culture",
      navigate,
      )
    },
    {
      id: "taste-global",
      title: "Taste the Culture",
      description: "Dine like a local, live like one too.",
      image: "/Cards/Taste_Global.jpg",
      detailContent: generateDetailContent("Food & Lifestyle",[
        "Culinary Tours / Food Trails",
        "Wine Tasting / Vineyard Tours",
        "Cooking Classes",
        "Shopping Destinations",
        "Wellness & Spa Retreats"
      ],[
        "Culinary Tours",
        "Vineyard Tours",
        "Cooking Classes",
        "Spa",
        "Wellness Retreats",
        "Shopping Destinations"
      ],[
        "/Cards/4_1.jpg", 
        "/Cards/4_2.jpg", 
        "/Cards/4_3.jpg", 
        "/Cards/4_4.jpg",
        "/Cards/4_5.jpg"
      ],"Taste",
      navigate,)
    },
    {
      id: "city-global",
      title: "City Beat",
      description: "Catch the rhythm of rooftops and rush.",
      image: "/Cards/City_Global.jpg",
      detailContent: generateDetailContent("Urban & Entertainment", [
        "Party & Nightlife",
        "City Tours / Urban Escapes",
        "Luxury Travel",
        "Cruises",
        "Theme Parks"
      ],[
        "Party",
        "Casino",
        "Cruises",
        "Night Life",
        "Luxury Travel",
        "Theme Parks"
      ],[
        "/Cards/5_1.jpg", 
        "/Cards/5_2.jpg", 
        "/Cards/5_3.jpg", 
        "/Cards/5_4.jpg",
        "/Cards/5_5.jpg"
      ],"City",
      navigate,)
    },
    {
      id: "festive-global",
      title: "Festive Trails",
      description: "Celebrate, explore, and discover something worth remembering.",
      image: "/Cards/Festive_Global.jpg",
      detailContent: generateDetailContent("Seasonal & Special Interest",[
        "Honeymoon / Romantic",
        "Winter Travel",
        "Summer Getaways",
        "Spring Blossoms",
        "Photography Tours",
        "Eco-Tourism"
      ],[
        "Honeymoon",
        "Winter Travel",
        "Summer Getaways",
        "Photography Tours",
        "Spring Blossoms",
        "Eco-Tourism"
      ],[
        "/Cards/6_1.jpg", 
        "/Cards/6_2.jpg", 
        "/Cards/6_3.jpg", 
        "/Cards/6_4.jpg",
        "/Cards/6_5.jpg"
      ],"Festive",
      navigate,)
    },
    {
      id: "squad-global",
      title: "Squad Getaways",
      description: "One destination. Endless group selfies.",
      image: "/Cards/Squad_Global.jpg",
      detailContent: generateDetailContent("Family & Group Oriented",[
        "Family-Friendly Trips",
        "Kids' Adventures",
        "Group Tours",
        "Solo Travel Friendly"
      ],[
        "Family-Friendly Trips",
        "Kids' Adventures",
        "Group Tours",
        "Solo Travel Friendly"
      ],[
        "/Cards/7_1.jpg", 
        "/Cards/7_2.jpg", 
        "/Cards/7_3.jpg", 
        "/Cards/7_4.jpg",
        "/Cards/7_5.jpg",
        "/Cards/7_6.jpg"
      ],"Squad",
      navigate,)
    },
    {
      id: "awakening-global",
      title: "Awakening the soul",
      description: "Discover your true self through spirituality and reflection.",
      image: "/Cards/Awakening_Global.jpg",
      detailContent: generateDetailContent("Spiritual & Self Discovery",[
        "Devotional / Pilgrimage",
        "Yoga & Meditation Retreats",
        "Mindfulness Journeys",
        "Astrology / Mystic Travel"
      ],[
        "Devotional",
        "Mystic Travel",
        "Mindfulness Journeys",
        "Meditation Retreat"
      ],[
        "/Cards/8_1.jpg", 
        "/Cards/8_2.jpg", 
        "/Cards/8_3.jpg", 
        "/Cards/8_4.jpg"
      ],"Awakening",
      navigate,)
    }
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

  const canMoveLeftGlobal = globalStartIndex > 0;
  const canMoveRightGlobal = globalStartIndex < globalGems.length - 3;

  const [itemsToShow, setItemsToShow] = useState(1);
  
  useEffect(() => {
    const updateItemsToShow = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsToShow(3); // lg
      } else if (width >= 768) {
        setItemsToShow(2); // md
      } else if (width >= 640) {
        setItemsToShow(1); // sm
      } else {
        setItemsToShow(10); // sm
      }
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);

    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  // Get visible gems for each section
  const visibleIndiaGems = indiaGems.slice(indiaStartIndex, indiaStartIndex + itemsToShow);
  const visibleGlobalGems = globalGems.slice(globalStartIndex, globalStartIndex + itemsToShow);
  
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
          className="relative min-h-screen md:h-[750px] bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{ backgroundImage: "url('/home.jpg')" }}
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
              { !isLoggedIn && (
                <div className="hidden lg:block ml-8 relative group">
                  <button
                    className="bg-[#A11716E5] text-[#FCD2B1] px-4 py-2 font-poppins font-bold rounded-full transition border border-1 group-hover:bg-[#003566] flex items-center"
                    style={{ borderColor: '#FCD2B1' }}
                    onClick={() => navigate("/login")}
                  >
                    Login / Register
                    <img 
                      src="/Person.png" 
                      alt="Person" 
                      className="h-6 w-6 ml-2 absolute opacity-0 group-hover:opacity-100 group-hover:static transition-all duration-300" 
                    />
                  </button>
                </div>
              )}

              { isLoggedIn && (
                <div className="hidden lg:block ml-8 relative group">
                  <button
                    className="bg-[#A11716E5] text-[#FCD2B1] px-8 py-2 font-poppins font-bold rounded-full transition border border-1 group-hover:bg-[#003566] flex items-center"
                    style={{ borderColor: '#FCD2B1' }}
                    onClick={() => navigate("/profile")}
                  >
                    <img
                      src="/profile.png"
                      alt="profile"
                      className="h-[28px] w-[28px] ml-2 absolute opacity-0 group-hover:opacity-100 group-hover:static transition-all duration-300"
                    />
                    Profile
                  </button>
                </div>
              )}

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
                {!isLoggedIn && (
                  <button
                    className="mt-4 bg-[#A11716E5] text-[#FCD2B1] px-6 py-2 font-poppins font-bold rounded-full transition border transition border  border-1"
                    onClick={() => navigate("/login")}
                    style={{ borderColor: '#FCD2B1' }}
                  >
                    Login / Register
                  </button>
                )}
                {isLoggedIn && (
                  <button
                    className="mt-4 bg-[#A11716E5] text-[#FCD2B1] px-6 py-2 font-poppins font-bold rounded-full transition border transition border  border-1"
                    onClick={() => navigate("/profile")}
                    style={{ borderColor: '#FCD2B1' }}
                  >
                    Profile
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Hero Content */}
          <div className="container mx-auto px-8 mt-24 lg:pl-[60px] relative z-10">
            <div className="w-[70%] lg:w-[50%]">
              <h2 className="text-[40px] md:text-[56px] font-dela-gothic font-normal text-white">
                No Clues, No Ties—Just Pure Surprise!
              </h2>
              <p className="mt-2 text-white font-goudy font-normal text-[18px] md:text-[22px] opacity-90">
                Blind fold trips let you experience a fun, spontaneous, and
                surprise-filled adventure on your finger tips.
              </p>
              <button
                className="group mt-8 px-8 py-3 rounded-xl shadow-md bg-[#A11616E5] hover:bg-[#003566] hover:border hover:border-1 hover:border-[#FCD2B1] font-poppins font-bold text-[14px] sm:text-[16px] md:text-[20px] text-[#FCD2B1] transition-all flex items-center gap-2"
                onClick={() => navigate("/questionnaire")}
              >
                Start Your Mystery Trip
                <span className="hidden group-hover:inline-block transition-transform duration-300 translate-x-1">
                  <FaArrowRightLong />
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Unwrap The Mystery Section */}
        <section
          className="relative py-12 px-8 mx-auto lg:pl-[72px]"
          style={{
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, #FFFFFF 100%)"
          }}
        >
          <div 
            className="absolute inset-0 bg-contain opacity-15 z-0" 
            style={{ backgroundImage: "url('/unwrap.jpg')" }}
          ></div>
          <div className="container mx-auto md:px-8 z-10">
            <div className="md:w-[90%]">
              <h2 className="text-[32px] sm:text-[40px] font-archivo-black font-normal text-[#003566E5] text-center sm:text-left">Unwrap The Mystery</h2>
              <p className="text-[#00474CBF] text-[20px] sm:text-[24px] font-baloo-bhai font-bold font-normal text-center sm:text-left">Know How it Works</p>
              
              <div className="mt-6">
                <p className="text-[#000000A6] text-[16px] sm:text-[20px] font-poppins font-light leading-8">
                  Blind Fold Trips is a mystery travel platform where your destination remains a secret until you arrive at the 
                  airport! Get ready for a fun, spontaneous, and surprise-filled adventure. It's the ultimate experience for thrill-
                  seekers and free spirits. Pack your bags, embrace the unknown, and let fate choose your next journey— 
                  because <span className="text-[#000000] font-medium">life is all about the adventure, not just the destination!</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Your 3 Step Plan Header */}
        <div
          className="relative mt-8 mb-8"
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 239, 206, 0) 0%, #FFEFCE 50%, rgba(255, 239, 206, 0) 100%)",
          }}
        >
          <div className="absolute inset-0 bg-[#0000002B]"></div>

          <div className="container mx-auto relative z-10">
            <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-2 w-full">
              <h2 className="text-[32px] font-titan-one font-normal text-[#00474CBF] text-center w-full">
                Your 3 step Plan
              </h2>

              <div className="flex items-center gap-2 justify-center sm:justify-end pr-16 w-full sm:w-auto">
                <div className="h-[24px] w-1 bg-[#00474C]"></div>
                <p className="text-[20px] text-[#00474CCC] font-sofia font-normal">
                  Progress
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Adventure Steps Section */}
        <section className="relative bg-cover bg-center overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/mountain.jpg')",
                opacity: 0.8,
                zIndex: 0,
              }}
            ></div>

            <div className="relative z-10">
              {/* Boxes */}
              {steps.map((step, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col md:flex-row ${idx % 2 === 1 ? "md:flex-row-reverse" : ""} items-center gap-4 md:gap-10 mt-6 md:mt-12 px-4 md:px-12`}
                  >
                    <div
                      className={`group bg-[#FFEFCE] hover:bg-[#003566] hover:border hover:border-2 hover:border-[#FFBE55] rounded-xl shadow-lg p-4 ${
                        idx === 0
                          ? 'w-full md:w-[720px]'
                          : idx === 1
                          ? 'w-full md:w-[520px]'
                          : 'w-full md:w-[475px]'
                      }`}
                    >
                      <div className={`flex items-start`}>
                        {/* Column 1: Step Number */}
                        <div className="flex-shrink-0">
                          <h2 className="text-[48px] md:text-[64px] lg:text-[70px] font-titan-one font-normal text-[#43463166] group-hover:text-[#FFBE5566] leading-none">
                            {step.number}
                          </h2>
                        </div>

                        {/* Column 2: Title + Subtitle */}
                        <div className="flex flex-col w-full">
                          <div className="text-[32px] md:text-[40px] lg:text-[48px] font-titan-one font-normal text-[#951A1AE5] group-hover:text-[#FFBE55] leading-tight">
                            {step.title}
                          </div>
                          <div className="text-right text-[14px] md:text-[20px] font-normal font-goudy text-[#951A1A] group-hover:text-[#FFBE55] -mt-1">
                            {step.subtitle}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className={`text-[15px] mt-4 text-[#573021] ${idx % 2 === 1 ? "text-right" : ""}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
              ))}

              <div className="justify-center items-center text-center">
                <button
                  className="group mt-12 mb-8 mx-auto px-8 py-3 rounded-xl shadow-md bg-[#A11616E5] hover:bg-[#003566] hover:border hover:border-1 hover:border-[#FCD2B1] font-poppins font-bold text-[14px] sm:text-[16px] md:text-[20px] text-[#FCD2B1] transition-all flex items-center justify-center gap-2"
                  onClick={() => navigate("/questionnaire")}
                >
                  Start Your Mystery Trip
                  <span className="hidden group-hover:inline-block transition-transform duration-300 translate-x-1">
                    <FaArrowRightLong />
                  </span>
                </button>
              </div>
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

          <div className="relative z-10 mb-8 flex flex-col sm:flex-row items-center text-center justify-center gap-0 md:gap-4">
            <p className="font-archivo-black font-normal text-[28px] md:text-[40px] text-[#003566E5]">
              Choose Your Adventure
            </p>
            <div className="w-[60px] h-[60px] overflow-hidden">
              <img
                src={advImages[currentAdv]}
                alt={`Icon ${currentAdv + 1}`}
                className="w-full h-full object-contain transition-all duration-500"
              />
            </div>
          </div>

          {/* Main content container with rounded edges and styling */}
          <div
            className="relative z-10 rounded-[50px] border-y-[6px] border-[#FFBE55] 
            shadow-[0px_21px_47px_#00000021,0px_85px_85px_#0000001C,0px_192px_115px_#00000012,0px_341px_136px_#00000005,0px_532px_149px_#00000000]
            bg-gradient-to-b from-white/0 to-white/90 overflow-hidden px-8 py-12"
          >
            {/* Explore hidden gems of India Section */}
            <div className="container mx-auto relative z-10">
                <h2 className="font-titan-one font-normal text-[28px] md:text-[32px] text-[#00474CBF]"><span className="text-[#00474C66] text-[56px]">01</span>Hidden Gems of India</h2>
                
                <div className="relative">
                    <button
                      disabled={!canMoveLeft}
                      onClick={() => canMoveLeft && moveCards('india', -1)}
                      // className={`w-[77px] h-[42px] rounded-lg flex items-center justify-center shadow-md transition 
                      //   ${canMoveLeft ? 'bg-[#003566]' : 'bg-[#003566BF]'} text-[#FCD2B1] text-[32px] border border-0.94px border-[#FCD2B1]`}
                      className="absolute hidden sm:flex -left-8 top-24 transform -translate-y-1/2 z-10"
                      // title={!canMoveLeft ? "No more cards" : ""}
                    >
                      <img src="/arrow-left.png" alt="Left" className="w-[60px] h-[60px]" />
                    </button>

                    <button
                      disabled={!canMoveRight}
                      onClick={() => canMoveRight && moveCards('india', 1)}
                      // className={`w-[77px] h-[42px] rounded-lg flex items-center justify-center shadow-md transition 
                      //   ${canMoveRight ? 'bg-[#003566]' : 'bg-[#003566BF]'} text-[#FCD2B1] text-[32px] border border-0.94px border-[#FCD2B1]`}
                      className="absolute hidden sm:flex -right-8 top-24 transform -translate-y-1/2 z-10"
                      // title={!canMoveRight ? "No more cards" : ""}
                    >
                      <img src="/arrow-left.png" alt="Right" className="w-[60px] h-[60px] rotate-180" />
                    </button>

                    <div className="flex gap-4 mb-4 mx-auto relative overflow-x-auto sm:overflow-x-visible scroll-smooth snap-x snap-mandatory sm:flex-wrap sm:overflow-hidden hide-horizontal-scrollbar">
                        <AnimatePresence custom={slideDirection} mode="popLayout">
                            {visibleIndiaGems.map((gem) => (
                                <motion.div 
                                  key={gem.id}
                                  className="shrink-0 snap-start sm:snap-none w-[85%] md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] mx-auto rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                                  onClick={() => handleCardClick(gem.id)}
                                  variants={cardVariants}
                                  initial="hidden"
                                  animate="visible"
                                  exit="exit"
                                  custom={slideDirection}
                                >
                                    {activeCard === gem.id ? (
                                        <div className="h-[300px] lg:h-[280px] bg-[#D9D9D9] overflow-y-auto">
                                          {gem.detailContent}
                                        </div>                                   
                                    ) : (
                                        <div className="relative group">
                                            <div 
                                                className="h-[300px] lg:h-[280px] bg-cover bg-center transition-all duration-300"
                                                style={{ backgroundImage: `url('${gem.image}')` }}
                                            >
                                                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300">
                                                    <div className="p-6 absolute bottom-0 left-0 text-white transition-all duration-300 group-hover:opacity-0">
                                                        <h3 className="text-[24px] font-bold">{gem.title}</h3>
                                                        <p className="text-gray-200 text-[14px]">{gem.description}</p>
                                                    </div>
                                                    <div
                                                      className="absolute inset-0 flex flex-row items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                                                      style={{
                                                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.45) 41.63%, rgba(0, 0, 0, 0.9) 83.26%)',
                                                        boxShadow: `
                                                          0px 4.71px 11.31px 0px #00000029,
                                                          0px 19.78px 19.78px 0px #00000024,
                                                          0px 44.28px 26.38px 0px #00000014,
                                                          0px 79.14px 32.03px 0px #00000005,
                                                          0px 124.36px 34.86px 0px #00000000
                                                        `
                                                      }}
                                                    >
                                                      <span className="flex items-center gap-2 font-poppins font-normal text-[#FFFFFF] text-[12px] sm:text-[14px] md:text-[16px]">
                                                        <img src="/ads_click.png" alt="Click icon" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                                                        Click to Know More
                                                      </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Explore hidden gems Across the Globe Section */}
            <div className="container mx-auto relative z-10 mt-12 mb-12">
                <h2 className="font-titan-one font-normal text-[28px] md:text-[32px] text-[#00474CBF]"><span className="text-[#00474C66] text-[56px]">02</span>Wonders Uncovered: Travel Beyond the Ordinary</h2>

                <div className="relative">
                  <button
                    disabled={!canMoveLeftGlobal}
                    onClick={() => canMoveLeftGlobal && moveCards('global', -1)}
                    // className={`w-[77px] h-[42px] rounded-lg flex items-center justify-center shadow-md transition 
                    //   ${canMoveLeft ? 'bg-[#003566]' : 'bg-[#003566BF]'} text-[#FCD2B1] text-[32px] border border-0.94px border-[#FCD2B1]`}
                    className="absolute hidden sm:flex -left-4 top-24 transform -translate-y-1/2 z-10"
                    // title={!canMoveLeft ? "No more cards" : ""}
                  >
                    <img src="/arrow-left.png" alt="Left" className="w-[60px] h-[60px]" />
                  </button>

                  <button
                    disabled={!canMoveRightGlobal}
                    onClick={() => canMoveRightGlobal && moveCards('global', 1)}
                    // className={`w-[77px] h-[42px] rounded-lg flex items-center justify-center shadow-md transition 
                    //   ${canMoveRight ? 'bg-[#003566]' : 'bg-[#003566BF]'} text-[#FCD2B1] text-[32px] border border-0.94px border-[#FCD2B1]`}
                    className="absolute hidden sm:flex -right-8 top-24 transform -translate-y-1/2 z-10"
                    // title={!canMoveRight ? "No more cards" : ""}
                  >
                    <img src="/arrow-left.png" alt="Right" className="w-[60px] h-[60px] rotate-180" />
                  </button> 
                              
                  <div className="flex gap-4 mb-4 mx-auto relative overflow-x-auto sm:overflow-x-visible scroll-smooth snap-x snap-mandatory sm:flex-wrap sm:overflow-hidden hide-horizontal-scrollbar">
                      <AnimatePresence custom={slideDirection} mode="popLayout">
                          {visibleGlobalGems.map((gem) => (
                              <motion.div 
                                  key={gem.id}
                                  className={"shrink-0 snap-start sm:snap-none w-[85%] md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] mx-auto rounded-2xl overflow-hidden shadow-lg cursor-pointer"}
                                  onClick={() => handleCardClick(gem.id)}
                                  variants={cardVariants}
                                  initial="hidden"
                                  animate="visible"
                                  exit="exit"
                                  custom={slideDirection}
                              >
                                  {activeCard === gem.id ? (
                                      <div className="h-[300px] lg:h-[280px] bg-[#D9D9D9] overflow-y-auto">
                                        {gem.detailContent}
                                      </div>                                      
                                  ) : (
                                      <div className="relative group">
                                          <div 
                                              className="h-[300px] lg:h-[280px] bg-cover bg-center transition-all duration-300"
                                              style={{ backgroundImage: `url('${gem.image}')` }}
                                          >
                                              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300">
                                                  <div className="p-6 absolute bottom-0 left-0 text-white transition-all duration-300 group-hover:opacity-0">
                                                      <h3 className="text-[24px] font-bold">{gem.title}</h3>
                                                      <p className="text-gray-200 text-[14px]">{gem.description}</p>
                                                  </div>
                                                  <div
                                                    className="absolute inset-0 flex flex-row items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                                                    style={{
                                                      background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.45) 41.63%, rgba(0, 0, 0, 0.9) 83.26%)',
                                                      boxShadow: `
                                                        0px 4.71px 11.31px 0px #00000029,
                                                        0px 19.78px 19.78px 0px #00000024,
                                                        0px 44.28px 26.38px 0px #00000014,
                                                        0px 79.14px 32.03px 0px #00000005,
                                                        0px 124.36px 34.86px 0px #00000000
                                                      `
                                                    }}
                                                  >
                                                    <span className="flex items-center gap-2 font-poppins font-normal text-[#FFFFFF] text-[12px] sm:text-[14px] md:text-[16px]">
                                                      <img src="/ads_click.png" alt="Click icon" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                                                      Click to Know More
                                                    </span>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  )}
                              </motion.div>
                          ))}
                      </AnimatePresence>
                  </div>
                </div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="relative h-[400px] md:h-[480px] lg:h-[600px] bg-cover bg-center overflow-hidden">
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
            <div className="relative flex flex-col justify-center items-center h-full z-10 text-center">
                <h2 className="font-archivo-black font-normal text-[#FCD2B1] text-[40px]">Why Us?</h2>
                <p className="font-baloo-bhai font-normal text-[#FCD2B1] text-[24px]">The answer lies in the journey</p>
                <a href="/why_us" className="mt-4 px-6 py-1 font-poppins font-bold text-[#FFFFFF] text-[14px] hover:text-[#000000] rounded-full transition-all flex items-center"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4) 40%)",
                    boxShadow: `
                      0px 2px 5px 0px #00000042,
                      0px 9px 9px 0px #0000003B,
                      0px 20px 12px 0px #00000021,
                      0px 36px 14px 0px #0000000A,
                      0px 56px 16px 0px #00000000
                    `,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4) 40%)";
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
            className="absolute top-2 right-4 w-[25%] z-10 rotate-[10deg]"
          />

          <div className="container relative mx-auto z-20 pl-[48px] lg:pl-[72px]">
            <div className="mb-8">
                <h2 className="font-archivo-black font-normal text-[28px] md:text-[32px] text-[#003566E5]">See What They Say</h2>
                <p className="font-baloo-bhai font-normal text-[20px] md:text-[24px] text-[#00474CBF]">Happy Explorer Stories</p>
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
                      <h3 className="font-titan-one font-normal text-[48px] text-[#FFBE55] text-center">{item.name}</h3>
                      <p className="font-goudy font-normal text-[24px] text-[#FFBE55] text-right -mt-2 mb-4">{item.role}</p>
                      <p className="text-[#FFFFFFCC] text-[16px] font-poppins font-normal leading-snug">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="group mt-16 z-10">
              <button
                className="hover:rounded-lg hover:bg-[#003566] hover:border hover:border-2 hover:border-[#FFBE55] font-poppins font-bold text-[24px] px-2 py-2"
              >
                <span className="text-black/80 group-hover:text-white/80">Your Mystery Trip Memories?</span>
                <span className="text-[#003566] group-hover:text-[#FFBE55]"> Drop Them Here!</span>
              </button>
            </div>
            
            {/* FAQ Section */}
            <div className="mt-16 z-10">                    
                <div className="flex flex-wrap items-center">
                    {/* Left side - Image */}
                    <div className="w-full md:w-1/3 pr-8 text-center md:text-left">
                      <img
                        src="/Travel.jpg"
                        alt="Travel"
                        className="relative w-[320px] h-[280px] rounded-xl mb-4 mx-auto"
                      />
                    </div>
     
                    {/* Right side - FAQ */}
                    <div className="w-full md:w-2/3 pl-12 pr-24 pt-2">
                        <div className="mb-6 flex flex-col items-end">
                            <h2 className="text-[32px] font-archivo-black font-normal text-[#003566E5]">Got Questions? We've Got Answers</h2>
                            <p className="text-[24px] font-baloo-bhai font-normal text-[#00474CBF]">Know Before You Go</p>
                        </div>
                        {faqItems.map((faq) => (
                            <div key={faq.id} className="mb-4">
                                <div 
                                    className={`p-4 rounded-lg shadow-sm cursor-pointer overflow-hidden transition-colors duration-300 ${activeFaq === faq.id ? 'bg-[#003566] text-white' : 'bg-[#FFFFFF99] text-gray-700'}`}
                                    onClick={() => toggleFaq(faq.id)}
                                >
                                    <div className="flex justify-between items-center">
                                          <h3 className={`text-[20px] font-poppins font-normal ${activeFaq === faq.id ? 'text-[#FFFFFFBF' : 'text-[#000000BF]'}`}>{faq.question}</h3>
                                          <span className="text-2xl transition duration-300">
                                            {activeFaq === faq.id ? '−' : '+'}
                                          </span>
                                    </div>
                                    
                                    {activeFaq === faq.id && (
                                        <div className="pt-1">
                                            <p className="font-poppins font-light text-[16px] text-[#FFFFFF99]">{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                        <div className="mt-6">
                          <p className="font-poppins font-light text-[20px] text-[#000000]">Still wondering? Find answers in our <span className="text-[#003566] font-bold">FAQs!</span></p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>

        <Footer />
    </section>
  );
}