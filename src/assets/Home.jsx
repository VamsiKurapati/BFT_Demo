import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { FaArrowRightLong } from "react-icons/fa6";
import NavbarDashboard from "./NavbarDashboard";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";
import { HiOutlineMap } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";

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
    <div className="relative w-full h-[120px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${alt} ${currentIndex + 1}`}
          className="absolute top-0 left-0 w-full h-[120px] object-cover"
          animate={{ opacity: 1 }}
          transition={{
            delay: 1, // 1000ms
            duration: 0.3, // 300ms
            ease: "easeIn",
          }}
        />
      </AnimatePresence>

      {/* Overlay with text */}
      <div className="absolute top-4 left-4 text-white px-2 py-1 z-10">
        <div className="font-poppins font-bold text-[18px] sm:text-[22px] text-[#FFFFFF]">{clickTitle}</div>
        <div className="font-poppins font-regular text-[12px] text-[#FFFFFF]">{activities[currentIndex]}</div>
      </div>
    </div>
  );
};

const generateDetailContent = (title, activities, activities_1, images, alt, navigate) => (
  <div className="w-full h-full flex flex-col">
    {/* Image carousel with overlay title - NO BORDER */}
    <div className="relative h-[120px]">
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
  const [showFeedbackPopup, setShowFeedbackPopup] = useState(false);
  const [popupFeedback, setPopupFeedback] = useState(null);

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
      name: "Aarav Mehta",
      role: "College Student",
      text: "Blind Fold Trips gave me the thrill of the unknown! I ended up exploring a place I never expected and made unforgettable memories. Perfect for budget-conscious adventurers like me.",
      image: "/1.jpg",
      images: ["/Cards/1_1.jpg", "/Cards/1_2.jpg", "/Cards/1_3.jpg", "/Cards/1_4.jpg", "/Cards/1_5.jpg"],
      title: "The Best Kind of Unknown"
    },
    {
      id: 2,
      name: "Sneha Kapoor",
      role: "Working Professional",
      text: "As someone with limited time, this trip was a blessing! Everything was sorted, and the surprise location brought a much-needed spark to my routine life. Highly recommend it!",
      image: "/2.jpg",
      images: ["/Cards/2_1.jpg", "/Cards/2_2.jpg", "/Cards/2_3.jpg", "/Cards/2_4.jpg", "/Cards/2_5.jpg"],
      title: "A Surprising Getaway"
    },
    {
      id: 3,
      name: "Rohan Sharma",
      role: "Travel Blogger",
      text: "I usually plan every detail, but Blind Fold Trips turned that on its head—in the best way possible. I discovered hidden gems I wouldn’t have considered. Loved the spontaneity!",
      image: "/3.jpg",
      images: ["/Cards/3_1.jpg", "/Cards/3_2.jpg", "/Cards/3_3.jpg", "/Cards/3_4.jpg", "/Cards/3_5.jpg"],
      title: "A Perfect Blend of Adventure and Relaxation"
    },
    {
      id: 4,
      name: "Maya Fernandes",
      role: "Freelance Designer",
      text: "I was skeptical about giving up control, but this surprise trip turned out to be just what I needed. Beautiful locations, smooth planning, and tons of excitement throughout!",
      image: "/4.jpg",
      images: ["/Cards/4_1.jpg", "/Cards/4_2.jpg", "/Cards/4_3.jpg", "/Cards/4_4.jpg", "/Cards/4_5.jpg"],
      title: "A True Adventure"
    },
    {
      id: 5,
      name: "Karan Patel",
      role: "Entrepreneur",
      text: "Life gets hectic, and Blind Fold Trips helped me hit reset. I didn’t have to think—just show up and enjoy. A refreshing escape that exceeded expectations!",
      image: "/5.jpg",
      images: ["/Cards/5_1.jpg", "/Cards/5_2.jpg", "/Cards/5_3.jpg", "/Cards/5_4.jpg", "/Cards/5_5.jpg"],
      title: "A Perfect Blend of Adventure and Relaxation"
    },
    {
      id: 6,
      name: "Isha Nair",
      role: "Graduate Student",
      text: "From the surprise reveal to the final day, it was a rollercoaster of joy! Budget-friendly, well-organized, and just the right amount of adventure. I'd do it again in a heartbeat!",
      image: "/6.jpg",
      images: ["/Cards/6_1.jpg", "/Cards/6_2.jpg", "/Cards/6_3.jpg", "/Cards/6_4.jpg", "/Cards/6_5.jpg"],
      title: "A Perfect Blend of Adventure and Relaxation"
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
      subtitle: "destination next—let the mystery unfold!",
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
      detailContent: generateDetailContent("Food & Lifestyle", [
        "Culinary Tours / Food Trails",
        "Wine Tasting / Vineyard Tours",
        "Cooking Classes",
        "Shopping Destinations",
        "Wellness & Spa Retreats"
      ], [
        "Culinary Tours",
        "Vineyard Tours",
        "Cooking Classes",
        "Spa",
        "Wellness Retreats",
        "Shopping Destinations"
      ], [
        "/Cards/4_1.jpg",
        "/Cards/4_2.jpg",
        "/Cards/4_3.jpg",
        "/Cards/4_4.jpg",
        "/Cards/4_5.jpg"
      ], "Taste",
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
      ], [
        "Party",
        "Casino",
        "Cruises",
        "Night Life",
        "Luxury Travel",
        "Theme Parks"
      ], [
        "/Cards/5_1.jpg",
        "/Cards/5_2.jpg",
        "/Cards/5_3.jpg",
        "/Cards/5_4.jpg",
        "/Cards/5_5.jpg"
      ], "City",
        navigate,)
    },
    {
      id: "festive-india",
      title: "Festive Trails",
      description: "Celebrate, explore, and discover something worth remembering.",
      image: "/Cards/Festive.jpg",
      detailContent: generateDetailContent("Seasonal & Special Interest", [
        "Honeymoon / Romantic",
        "Winter Travel",
        "Summer Getaways",
        "Spring Blossoms",
        "Photography Tours",
        "Eco-Tourism"
      ], [
        "Honeymoon",
        "Winter Travel",
        "Summer Getaways",
        "Photography Tours",
        "Spring Blossoms",
        "Eco-Tourism"
      ], [
        "/Cards/6_1.jpg",
        "/Cards/6_2.jpg",
        "/Cards/6_3.jpg",
        "/Cards/6_4.jpg",
        "/Cards/6_5.jpg"
      ], "Festive",
        navigate,)
    },
    {
      id: "squad-india",
      title: "Squad Getaways",
      description: "One destination. Endless group selfies.",
      image: "/Cards/Squad.jpg",
      detailContent: generateDetailContent("Family & Group Oriented", [
        "Family-Friendly Trips",
        "Kids' Adventures",
        "Group Tours",
        "Solo Travel Friendly"
      ], [
        "Family-Friendly Trips",
        "Kids' Adventures",
        "Group Tours",
        "Solo Travel Friendly"
      ], [
        "/Cards/7_1.jpg",
        "/Cards/7_2.jpg",
        "/Cards/7_3.jpg",
        "/Cards/7_4.jpg",
        "/Cards/7_5.jpg",
        "/Cards/7_6.jpg"
      ], "Squad",
        navigate,)
    },
    {
      id: "awakening-india",
      title: "Awakening the soul",
      description: "Discover your true self through spirituality and reflection.",
      image: "/Cards/Awakening.jpg",
      detailContent: generateDetailContent("Spiritual & Self Discovery", [
        "Devotional / Pilgrimage",
        "Yoga & Meditation Retreats",
        "Mindfulness Journeys",
        "Astrology / Mystic Travel"
      ], [
        "Devotional",
        "Mystic Travel",
        "Mindfulness Journeys",
        "Meditation Retreat"
      ], [
        "/Cards/8_1.jpg",
        "/Cards/8_2.jpg",
        "/Cards/8_3.jpg",
        "/Cards/8_4.jpg"
      ], "Awakening",
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
      detailContent: generateDetailContent("Food & Lifestyle", [
        "Culinary Tours / Food Trails",
        "Wine Tasting / Vineyard Tours",
        "Cooking Classes",
        "Shopping Destinations",
        "Wellness & Spa Retreats"
      ], [
        "Culinary Tours",
        "Vineyard Tours",
        "Cooking Classes",
        "Spa",
        "Wellness Retreats",
        "Shopping Destinations"
      ], [
        "/Cards/4_1.jpg",
        "/Cards/4_2.jpg",
        "/Cards/4_3.jpg",
        "/Cards/4_4.jpg",
        "/Cards/4_5.jpg"
      ], "Taste",
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
      ], [
        "Party",
        "Casino",
        "Cruises",
        "Night Life",
        "Luxury Travel",
        "Theme Parks"
      ], [
        "/Cards/5_1.jpg",
        "/Cards/5_2.jpg",
        "/Cards/5_3.jpg",
        "/Cards/5_4.jpg",
        "/Cards/5_5.jpg"
      ], "City",
        navigate,)
    },
    {
      id: "festive-global",
      title: "Festive Trails",
      description: "Celebrate, explore, and discover something worth remembering.",
      image: "/Cards/Festive_Global.jpg",
      detailContent: generateDetailContent("Seasonal & Special Interest", [
        "Honeymoon / Romantic",
        "Winter Travel",
        "Summer Getaways",
        "Spring Blossoms",
        "Photography Tours",
        "Eco-Tourism"
      ], [
        "Honeymoon",
        "Winter Travel",
        "Summer Getaways",
        "Photography Tours",
        "Spring Blossoms",
        "Eco-Tourism"
      ], [
        "/Cards/6_1.jpg",
        "/Cards/6_2.jpg",
        "/Cards/6_3.jpg",
        "/Cards/6_4.jpg",
        "/Cards/6_5.jpg"
      ], "Festive",
        navigate,)
    },
    {
      id: "squad-global",
      title: "Squad Getaways",
      description: "One destination. Endless group selfies.",
      image: "/Cards/Squad_Global.jpg",
      detailContent: generateDetailContent("Family & Group Oriented", [
        "Family-Friendly Trips",
        "Kids' Adventures",
        "Group Tours",
        "Solo Travel Friendly"
      ], [
        "Family-Friendly Trips",
        "Kids' Adventures",
        "Group Tours",
        "Solo Travel Friendly"
      ], [
        "/Cards/7_1.jpg",
        "/Cards/7_2.jpg",
        "/Cards/7_3.jpg",
        "/Cards/7_4.jpg",
        "/Cards/7_5.jpg",
        "/Cards/7_6.jpg"
      ], "Squad",
        navigate,)
    },
    {
      id: "awakening-global",
      title: "Awakening the soul",
      description: "Discover your true self through spirituality and reflection.",
      image: "/Cards/Awakening_Global.jpg",
      detailContent: generateDetailContent("Spiritual & Self Discovery", [
        "Devotional / Pilgrimage",
        "Yoga & Meditation Retreats",
        "Mindfulness Journeys",
        "Astrology / Mystic Travel"
      ], [
        "Devotional",
        "Mystic Travel",
        "Mindfulness Journeys",
        "Meditation Retreat"
      ], [
        "/Cards/8_1.jpg",
        "/Cards/8_2.jpg",
        "/Cards/8_3.jpg",
        "/Cards/8_4.jpg"
      ], "Awakening",
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
  const [showMap, setShowMap] = useState(false);

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
      answer: "The minimum is ₹38,999 per person for a 4-day trip from India."
    }
  ];

  // Popup for feedback details
  const FeedbackPopup = ({ feedback, onClose }) => {
    if (!feedback) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
        <div className="relative bg-[#0B3760] rounded-2xl shadow-lg w-full md:w-[80%] h-[95vh] overflow-y-auto p-8 flex flex-col md:flex-row gap-8 border-l-[8.54px] border-[#FFBE55]">
          {/* Left: Main Info */}
          <div className="flex-1 w-full md:w-[60%] flex flex-col">
            <div className="flex items-center gap-4 mb-2">
              <img src={feedback.image} alt={feedback.name} className="w-16 h-16 object-cover rounded-lg" />
              <div>
                <div className="font-poppins text-white text-[32px] sm:text-[48px] font-bold leading-none">{feedback.name}</div>
                <div className="font-poppins text-[#D6E6F2] text-[16px] sm:text-[20px] font-light">{feedback.role}</div>
              </div>
            </div>
            {/* Title and Stars - always stacked */}
            <div className="flex flex-col gap-1 mt-2 mb-2 w-full">
              <div className="flex items-center w-full min-w-0">
                <span className="font-paytone-one font-regular text-[#FFBE5566] text-[54px] sm:text-[72px] md:text-[109px] flex-shrink-0 leading-none">“</span>
                <span className="font-poppins text-[#FFFFFF] text-[18px] sm:text-[24px] md:text-[31px] font-semibold ml-[-16px] sm:ml-[-32px] mt-[-8px] sm:mt-0 block max-w-full whitespace-normal overflow-visible leading-tight">{feedback.title}</span>
              </div>
              <span className="flex items-center gap-[2px] mt-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>
                    <FaStar className="w-6 h-6 sm:w-8 sm:h-8 text-[#FFBE55]" />
                  </span>
                ))}
              </span>
            </div>
            <div className="w-full md:w-[80%] font-poppins font-light text-[#FFFFFF] text-[16px] sm:text-[20px] mb-6 leading-relaxed">
              {feedback.text}
            </div>
            {/* Feedback Buttons - below text on md+ */}
            <div className="hidden md:flex flex-row items-center justify-start gap-2 mt-2 w-full">
              <div className="font-poppins text-[#FCD2B1] text-[18px] md:text-[20px] font-medium text-left">Did you find this Review helpful?</div>
              <div className="flex gap-4 text-[18px] md:text-[28px] text-[#D6E6F2] ml-4">
                <FaRegThumbsUp className="cursor-pointer hover:text-[#FCD2B1]" />
                <FaRegThumbsDown className="cursor-pointer hover:text-[#FCD2B1]" />
              </div>
            </div>
          </div>
          {/* Right: Images and Feedback Buttons */}
          <div className="flex flex-col w-full md:w-[35%] gap-2 mt-0 md:mt-12">
            <div className="flex gap-2">
              {/* Left column */}
              <div className="flex flex-col gap-2 w-1/2">
                <img src={feedback.images && feedback.images[0]} alt="trip" className="w-full h-[140px] object-cover rounded-lg" />
                <img src={feedback.images && feedback.images[2]} alt="trip" className="w-full h-[180px] object-cover rounded-lg" />
              </div>
              {/* Right column */}
              <div className="flex flex-col gap-2 w-1/2">
                <img src={feedback.images && feedback.images[1]} alt="trip" className="w-full h-[200px] object-cover rounded-lg" />
                <img src={feedback.images && feedback.images[3]} alt="trip" className="w-full h-[120px] object-cover rounded-lg" />
              </div>
            </div>
            {/* 5th image spanning both columns */}
            {feedback.images && feedback.images[4] && (
              <img src={feedback.images[4]} alt="trip" className="w-full h-[137px] object-cover rounded-lg mt-2" />
            )}
            {/* Feedback Buttons - below images on mobile only */}
            <div className="flex flex-row items-center justify-start gap-2 mt-4 w-full md:hidden">
              <div className="font-poppins text-[#FCD2B1] text-[16px] sm:text-[18px] font-medium text-left">Did you find this Review helpful?</div>
              <div className="flex gap-4 text-[18px] sm:text-[28px] text-[#D6E6F2] ml-4">
                <FaRegThumbsUp className="cursor-pointer hover:text-[#FCD2B1]" />
                <FaRegThumbsDown className="cursor-pointer hover:text-[#FCD2B1]" />
              </div>
            </div>
          </div>
          {/* Close Button */}
          <button onClick={onClose} className="absolute top-3 md:top-8 right-3 md:right-8 text-red-400 hover:text-red-600 text-3xl">
            <IoCloseCircle />
          </button>
        </div>
      </div>
    );
  };

  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const carRef = useRef(null);

  const [pathPoints, setPathPoints] = useState([]);
  const [cardDebugRects, setCardDebugRects] = useState([]);

  const calculatePositions = () => {
    if (!sectionRef.current) return;

    const viewportWidth = window.innerWidth;
    console.log("Viewport width:", viewportWidth);

    // ✅ Only enable path for md and larger
    if (viewportWidth < 768) {
      console.log("Skipping car path on small screens (<768px)");
      setPathPoints([]);
      setCardDebugRects([]);
      return;
    }

    const sectionRect = sectionRef.current.getBoundingClientRect();
    const sectionScrollTop = window.scrollY + sectionRect.top;
    const sectionScrollLeft = window.scrollX + sectionRect.left;

    console.log("==== SECTION RECT ====");
    console.log(sectionRect);

    const validCards = cardRefs.current.filter(Boolean);
    console.log("Valid card refs count:", validCards.length);

    if (validCards.length === 0) {
      console.warn("No valid card refs found yet!");
      return;
    }

    const newDebugRects = [];
    const points = validCards.map((el, idx) => {
      const cardRect = el.getBoundingClientRect();
      const absoluteTop = window.scrollY + cardRect.top;
      const absoluteLeft = window.scrollX + cardRect.left;

      console.log(`CARD ${idx} width:`, cardRect.width);

      // ✅ Relative to section top-left
      const relativeY =
        absoluteTop - sectionScrollTop + cardRect.height / 2;
      const relativeX =
        absoluteLeft -
        sectionScrollLeft +
        (idx % 2 === 0
          ? cardRect.width * 0.75 // right side center
          : cardRect.width * 0.25 // left side center
        );

      // ✅ store green debug rectangle
      newDebugRects.push({
        x: absoluteLeft - sectionScrollLeft,
        y: absoluteTop - sectionScrollTop,
        w: cardRect.width,
        h: cardRect.height,
      });

      return { x: relativeX, y: relativeY };
    });

    setCardDebugRects(newDebugRects);

    const path = [];
    for (let i = 0; i < points.length; i++) {
      const current = points[i];
      const next = points[i + 1];
      path.push(current);

      if (next) {
        const midX = (current.x + next.x) / 2;
        const midY = next.y - 80; // slight curve upward
        path.push({ x: midX, y: midY });
      }
    }
    if (path.length > 0) path.push(path[0]); // loop

    console.log("Calculated path points:", path);
    setPathPoints(path);
  };

  // ✅ initial + resize recalculation
  useLayoutEffect(() => {
    requestAnimationFrame(() => calculatePositions());
    window.addEventListener("resize", calculatePositions);
    return () => window.removeEventListener("resize", calculatePositions);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const evt = new Event("resize");
      window.dispatchEvent(evt);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Animate car along path (only when pathPoints exist)
  useEffect(() => {
    if (pathPoints.length < 2) return;

    let segmentIndex = 0;
    let startTime = null;
    const segmentDuration = 2000;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = (timestamp - startTime) / segmentDuration;
      const t = Math.min(progress, 1);

      const current = pathPoints[segmentIndex];
      const next = pathPoints[(segmentIndex + 1) % pathPoints.length];
      if (!current || !next) return;

      const x = current.x + (next.x - current.x) * t;
      const y = current.y + (next.y - current.y) * t;

      const dx = next.x - current.x;
      const dy = next.y - current.y;
      const angleDeg = Math.atan2(dy, dx) * (180 / Math.PI);

      if (carRef.current) {
        carRef.current.style.transform = `translate(${x}px, ${y}px) rotate(${angleDeg}deg)`;
      }

      if (progress >= 1) {
        segmentIndex = (segmentIndex + 1) % (pathPoints.length - 1);
        startTime = timestamp;
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [pathPoints]);

  return (

    <section className="w-full">
      {/* Background Image and Navigation */}
      <section
        className="relative min-h-screen md:h-[750px] bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/home.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#00000080] z-0"></div>

        <NavbarDashboard />

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
              className="group mt-8 mb-4 md:mb-0 px-8 py-3 rounded-xl shadow-md bg-[#A11616E5] hover:bg-[#003566] hover:border hover:border-1 hover:border-[#FCD2B1] font-poppins font-bold text-[14px] sm:text-[16px] md:text-[20px] text-[#FCD2B1] transition-all flex items-center gap-2"
              onClick={() => navigate("/questionnaire")}
            >
              Get A Free Trip Proposal
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
              YOUR 3 STEP PLAN
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
      <section ref={sectionRef} className="relative bg-cover bg-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/mountain.jpg')",
            opacity: 0.8,
            zIndex: 0,
          }}
        ></div>

        {/* ✅ Only render car/path for md+ */}
        {pathPoints.length > 0 && (
          <>
            {/* ✅ Green debug rectangles for each card */}
            {cardDebugRects.map((rect, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: `${rect.x}px`,
                  top: `${rect.y}px`,
                  width: `${rect.w}px`,
                  height: `${rect.h}px`,
                  border: "2px dashed limegreen",
                  zIndex: 60,
                  pointerEvents: "none",
                }}
              ></div>
            ))}

            {/* ✅ SVG Path connecting points */}
            <svg
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 40,
              }}
            >
              <polyline
                points={pathPoints.map((p) => `${p.x},${p.y}`).join(" ")}
                fill="none"
                stroke="blue"
                strokeWidth="2"
                strokeDasharray="8 6"
              />
            </svg>

            {/* ✅ Red dots for each path point */}
            {pathPoints.map((p, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: `${p.x - 6}px`,
                  top: `${p.y - 6}px`,
                  width: "12px",
                  height: "12px",
                  background: "red",
                  borderRadius: "50%",
                  zIndex: 50,
                }}
              ></div>
            ))}

            {/* ✅ Moving Car */}
            <img
              ref={carRef}
              src="/car.png"
              alt="car"
              className="absolute w-16 md:w-24 z-20 transition-transform duration-100"
              style={{ transform: "translate(0,0)" }}
            />
          </>
        )}

        <div className="relative z-10">
          {/* Boxes */}
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row ${idx % 2 === 1 ? "md:flex-row-reverse" : ""} items-center gap-4 md:gap-10 mt-6 md:mt-12 px-4 md:px-12`}
            >
              <div
                ref={(el) => (cardRefs.current[idx] = el)}
                className={`group bg-[#FFEFCE] hover:bg-[#003566] hover:border hover:border-2 hover:border-[#FFBE55] rounded-xl shadow-lg p-4 ${idx === 0
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
                  <div className="flex flex-col w-full -ml-4 mt-2 md:mt-3">
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
              Get A Free Trip Proposal
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
                className="absolute hidden sm:flex sm:left-2 md:-left-8 top-24 transform -translate-y-1/2 z-10"
              // title={!canMoveLeft ? "No more cards" : ""}
              >
                <img src="/arrow-left.png" alt="Left" className="w-[60px] h-[60px]" />
              </button>

              <button
                disabled={!canMoveRight}
                onClick={() => canMoveRight && moveCards('india', 1)}
                // className={`w-[77px] h-[42px] rounded-lg flex items-center justify-center shadow-md transition 
                //   ${canMoveRight ? 'bg-[#003566]' : 'bg-[#003566BF]'} text-[#FCD2B1] text-[32px] border border-0.94px border-[#FCD2B1]`}
                className="absolute hidden sm:flex sm:right-2 md:-right-8 top-20 md:top-24 transform -translate-y-1/2 z-10"
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
                        <div className="h-[360px] sm:h-[300px] lg:h-[280px] bg-[#D9D9D9] overflow-y-auto">
                          {gem.detailContent}
                        </div>
                      ) : (
                        <div className="relative group">
                          <div
                            className="h-[360px] sm:h-[300px] lg:h-[280px] bg-cover bg-center transition-all duration-300"
                            style={{ backgroundImage: `url('${gem.image}')` }}
                          >
                            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300">
                              <div className="p-6 absolute bottom-4 left-0 text-white transition-all duration-300 group-hover:opacity-0">
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

            <span className="text-[#00474C] text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-normal">
              *Hover over a card to see more details
            </span>
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
                className="absolute hidden sm:flex sm:left-2 md:-left-8 top-24 transform -translate-y-1/2 z-10"
              // title={!canMoveLeft ? "No more cards" : ""}
              >
                <img src="/arrow-left.png" alt="Left" className="w-[60px] h-[60px]" />
              </button>

              <button
                disabled={!canMoveRightGlobal}
                onClick={() => canMoveRightGlobal && moveCards('global', 1)}
                // className={`w-[77px] h-[42px] rounded-lg flex items-center justify-center shadow-md transition 
                //   ${canMoveRight ? 'bg-[#003566]' : 'bg-[#003566BF]'} text-[#FCD2B1] text-[32px] border border-0.94px border-[#FCD2B1]`}
                className="absolute hidden sm:flex sm:right-2 md:-right-8 top-20 md:top-24 transform -translate-y-1/2 z-10"
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
                        <div className="h-[360px] sm:h-[300px] lg:h-[280px] bg-[#D9D9D9] overflow-y-auto">
                          {gem.detailContent}
                        </div>
                      ) : (
                        <div className="relative group">
                          <div
                            className="h-[360px] sm:h-[300px] lg:h-[280px] bg-cover bg-center transition-all duration-300"
                            style={{ backgroundImage: `url('${gem.image}')` }}
                          >
                            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300">
                              <div className="p-6 absolute bottom-4 left-0 text-white transition-all duration-300 group-hover:opacity-0">
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

            <span className="text-[#00474C] text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-normal">
              *Hover over a card to see more details
            </span>
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
                  className="group relative transition-all duration-300 ease-in-out w-[220px] hover:w-[270px] h-[450px] rounded-xl overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full h-full rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-[#003566] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex flex-col p-4 border border-[#FFBE55] border-4">
                    <h3 className="font-titan-one font-normal text-[36px] text-[#FFBE55] text-center">{item.name}</h3>
                    <p className="font-goudy font-normal text-[24px] text-[#FFBE55] text-right -mt-2 mb-4">{item.role}</p>
                    <p className="text-[#FFFFFFCC] text-[16px] font-poppins font-normal leading-snug">{item.text}</p>
                    <button
                      className="group mt-4 flex flex-row items-center justify-center gap-2 w-full py-2 px-4 bg-[#FF6B6B] hover:bg-[#A11616] hover:border-[1px] hover:border-[#FFBE55] rounded-2xl hover:rounded-none font-poppins font-bold text-[16px] text-white transition"
                      onClick={() => { setPopupFeedback(item); setShowFeedbackPopup(true); }}
                      onMouseEnter={() => { setShowMap(true) }}
                      onMouseLeave={() => { setShowMap(false) }}
                    >
                      Trace the Journey
                      <HiOutlineMap className={`w-6 h-6 text-[#FFFFFF] ${showMap ? 'inline-block' : 'hidden'}`} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {showFeedbackPopup && (
              <FeedbackPopup feedback={popupFeedback} onClose={() => setShowFeedbackPopup(false)} />
            )}
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