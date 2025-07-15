import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/swiper-bundle.css';
import Footer from "./Footer";
import { FaArrowRightLong } from "react-icons/fa6";
import NavbarDashboard from "./NavbarDashboard";
import { useState } from "react";
import { FaRegThumbsUp, FaRegThumbsDown, FaStar } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { HiOutlineMap } from "react-icons/hi";

export default function WhyUs() {
  const navigate = useNavigate();
  const [showFeedbackPopup, setShowFeedbackPopup] = useState(false);
  const [popupFeedback, setPopupFeedback] = useState(null);
  const [showMap, setShowMap] = useState(false);

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

  return (
    <section className="w-full">
      {/* Background Image and Navigation */}
      <section
        className="relative min-h-screen md:h-[750px] bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/why_us.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#00000080] z-0"></div>

        <NavbarDashboard />

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
          <div className="relative group bg-white hover:bg-[#003566] rounded-2xl overflow-hidden border border-2 border-[#FFBE55] shadow-sm hover:shadow-lg transition">
            <div className="relative h-[145px] bg-cover bg-center rounded-xl overflow-hidden" style={{ backgroundImage: "url('/img4.jpg')" }} >
              <div className="absolute inset-0 bg-[#00000066] rounded-xl z-0"></div>
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <h3 className="text-[20px] font-poppins font-bold text-[#FFFFFF] text-center z-10">
                  100% Mystery
                </h3>
              </div>
            </div>
            <div className="p-4 text-center">
              <p className="mt-4 font-poppins font-normal text-[12px] text-[#000000CC] group-hover:text-[#FFFFFFCC]">
                <span className="font-semibold text-[#000000] group-hover:text-[#FFFFFF]">You won’t know where you’re going until the very last moment.</span> Your trip is custom-curated, but the destination stays top-secret until the reveal. <span className="font-semibold text-[#000000] group-hover:text-[#FFFFFF]">It’s like unwrapping a present</span>—you just happen to fly there.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white hover:bg-[#003566] rounded-2xl overflow-hidden border border-2 border-[#FFBE55] shadow-sm hover:shadow-lg transition">
            <div className="relative h-[145px] bg-cover bg-center rounded-xl" style={{ backgroundImage: "url('/img3.jpg')" }} >
              <div className="absolute inset-0 bg-[#00000066] rounded-xl z-0"></div>
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <h3 className="text-[20px] font-poppins font-bold text-[#FFFFFF] text-center z-10">
                  Zero Planning, All Play
                </h3>
              </div>
            </div>
            <div className="p-4 text-center">
              <p className="mt-4 font-poppins font-normal text-[12px] text-[#000000CC] group-hover:text-[#FFFFFFCC]">
                <span className="font-semibold text-[#000000] group-hover:text-[#FFFFFF]">Forget the stress</span> of booking flights, hotels, or activities. We handle it all, down to the details. <span className="font-semibold text-[#000000] group-hover:text-[#FFFFFF]">You just pack, trust the process, and go.</span>
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white hover:bg-[#003566] rounded-2xl overflow-hidden border border-2 border-[#FFBE55] shadow-sm hover:shadow-lg transition">
            <div className="relative h-[145px] items-center justify-center bg-cover bg-center rounded-xl" style={{ backgroundImage: "url('/img2.jpg')" }} >
              <div className="absolute inset-0 bg-[#00000066] rounded-xl z-0"></div>
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <h3 className="text-[20px] font-poppins font-bold text-[#FFFFFF] text-center z-10">
                  Tailored to You
                </h3>
              </div>
            </div>
            <div className="p-4 text-center">
              <p className="mt-4 font-poppins font-normal text-[12px] text-[#000000CC] group-hover:text-[#FFFFFFCC]">
                Whether you love beaches, mountains, culture, food, or adventure—
                <span className="font-semibold text-[#000000] group-hover:text-[#FFFFFF]"> we design your trip based on your travel style, preferences, and comfort level.</span>
                You’re in the dark, but your experience is anything but random.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group bg-white hover:bg-[#003566] rounded-2xl overflow-hidden border border-2 border-[#FFBE55] shadow-sm hover:shadow-lg transition">
            <div className="relative h-[145px] bg-cover bg-center rounded-xl" style={{ backgroundImage: "url('/img1.jpg')" }} >
              <div className="absolute inset-0 bg-[#00000066] rounded-xl z-0"></div>
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <h3 className="text-[20px] font-poppins font-bold text-[#FFFFFF] text-center z-10">
                  Surprises that Spark Joy
                </h3>
              </div>
            </div>
            <div className="group p-4 text-center">
              <p className="mt-4 font-poppins font-normal text-[12px] text-[#000000CC] group-hover:text-[#FFFFFFCC]">
                <span className="font-semibold text-[#000000] group-hover:text-[#FFFFFF]">We’re here for the goosebumps.</span> The excitement. The jaw-drops. The laughs. The kind of stories that begin with “You won’t believe what happened…”
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

            <button
              className="group mt-6 px-8 py-3 rounded-xl shadow-md bg-[#A11616E5] hover:bg-[#003566] hover:border hover:border-1 hover:border-[#FCD2B1] font-poppins font-bold text-[14px] sm:text-[16px] md:text-[20px] text-[#FCD2B1] transition-all flex items-center justify-center gap-2"
              onClick={() => navigate("/questionnaire")}
            >
              Get A Free Trip Proposal
              <span className="hidden group-hover:inline-block transition-transform duration-300 translate-x-1">
                <FaArrowRightLong />
              </span>
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

          <div className="md:w-[90%] mt-8 mb-8">
            <h2 className="font-archivo-black font-normal text-[32px] md:text-[40px] text-[#003566E5]">Ready to Let Go and Let Adventure Take Over?</h2>
            <p className="mt-2 text-[#000000CC] font-poppins font-normal text-[20px]">
              Your next unforgettable story starts with a leap of faith.<span className="font-extrabold text-[#003566CC]"> Pack your bag, embrace the unknown, and let Blind Fold Trips show you just how fun not knowing can be.</span>
            </p>
            <button
              className="group mt-4 px-8 py-3 rounded-xl shadow-md bg-[#A11616E5] hover:bg-[#003566] hover:border hover:border-1 hover:border-[#FCD2B1] font-poppins font-bold text-[14px] sm:text-[16px] md:text-[20px] text-[#FCD2B1] transition-all flex items-center justify-center gap-2"
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

      <Footer />
    </section>
  );
}