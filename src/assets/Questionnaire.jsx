// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// // Define the full questionnaire here
// const Pages = [
//     {
//         Number: 1,
//         type: "text",
//         Content: (
//             <div className='flex flex-col items-center'>
//                 <h1 className='font-titan font-weight-400 text-[36px] text-[#000000E5] text-center mb-4'>
//                     Blind Fold Trip Questionnaire
//                 </h1>

//                 <p className='font-poppins font-weight-400 text-[24px] text-[#000000BF] text-center mb-4'>
//                     <span className="font-weight-700 text-[#0000000]">Welcome, explorer.</span> What you share here unlocks the journey meant just for you.
//                 </p>

//                 <p className='font-poppins font-weight-400 text-[24px] text-[#000000BF] text-center mb-4'>
//                     Unlock the first step to the unknown. <span className="text-[#000000]">Fill in the details, receive your surprise proposal — all for free.</span>
//                 </p>
//             </div>
//         ),
//         buttonText: "Know your destination"
//     },
//     {
//         Number: 2,
//         type: "text",
//         Content: (
//             <div className="flex flex-col items-center">
//                 <p className="text-[24px] font-poppins">What kind of adventure excites you the most?</p>
//                 {/* Add your input fields or choices here */}
//             </div>
//         ),
//         buttonText: "Continue"
//     },
//     // Add more pages similarly (up to 36)
// ];

// export default function Questionnaire() {
//     const navigate = useNavigate();
//     const [currentPageIndex, setCurrentPageIndex] = useState(0);

//     const handleNext = () => {
//         if (currentPageIndex < Pages.length - 1) {
//             setCurrentPageIndex(prev => prev + 1);
//         } else {
//             // Optional: Navigate to results page or home
//             navigate("/thankyou");
//         }
//     };

//     return (
//         <div className="min-h-screen flex flex-col justify-between items-center p-6">
//             {/* Exit button */}
//             <div className="self-end mb-4">
//                 <button onClick={() => navigate("/")} className="text-2xl font-bold text-[#A11616]">✕</button>
//             </div>

//             {/* Page content */}
//             <div className="w-full max-w-2xl flex-grow flex flex-col justify-center">
//                 {Pages[currentPageIndex].Content}
//             </div>

//             {/* Next button */}
//             <button
//                 onClick={handleNext}
//                 className="bg-[#A11616E5] text-[#FCD2B1] border border-[#FCD2B1] font-poppins font-weight-700 text-[20px] py-2 px-6 rounded-xl mt-4"
//             >
//                 {Pages[currentPageIndex].buttonText}
//             </button>
//         </div>
//     );
// }


import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import car from "/car.png";
import { RxCross2 } from "react-icons/rx";
import { IoCloseCircle, IoCloseCircleOutline } from "react-icons/io5";

const TOTAL_PAGES = 36;
// Define pages with custom content
const Pages = [
    {
        Number: 1,
        type: "text",
        Content: (
            <div className='flex flex-col items-center'>
                <h1 className='font-titan font-weight-400 text-[36px] text-[#000000E5] text-center mb-4'>
                    Blind Fold Trip Questionnaire
                </h1>

                <p className='font-poppins font-weight-400 text-[24px] text-[#000000BF] text-center mb-4'>
                    <span className="font-weight-700 text-[#0000000]">Welcome, explorer.</span> What you share here unlocks the journey meant just for you.
                </p>

                <p className='font-poppins font-weight-400 text-[24px] text-[#000000BF] text-center mb-4'>
                    Unlock the first step to the unknown. <span className="text-[#000000]">Fill in the details, receive your surprise proposal — all for free.</span>
                </p>
            </div>
        ),
        buttonText: "Know your destination"
    },
    // Generate the rest of the pages dynamically
    ...Array.from({ length: TOTAL_PAGES - 1 }, (_, i) => ({
        Number: i + 2,
        type: "text",
        Content: (
            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4 font-poppins">Page {i + 2}</h2>
                <p className="text-lg text-gray-700 font-poppins">This is the content for page {i + 2}.</p>
            </div>
        ),
        buttonText: i === TOTAL_PAGES - 2 ? "Finish" : "Next"
    }))
];

export default function Questionnaire() {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const carRef = useRef(null);
    const lineRef = useRef(null);
    const [lineWidth, setLineWidth] = useState(0);
    const navigate = useNavigate();

    const handleNext = () => {
        if (currentPageIndex < TOTAL_PAGES - 1) {
            setCurrentPageIndex((prev) => prev + 1);
        } else {
            navigate("/thankyou");
        }
    };

    useEffect(() => {
        const updateWidth = () => {
            if (lineRef.current) {
                // Subtract the car width from the line width to prevent overflow
                const adjustedWidth = lineRef.current.offsetWidth - 70; // 60px car width + 10px buffer
                setLineWidth(adjustedWidth);
            }
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    useEffect(() => {
        const progress = currentPageIndex / (TOTAL_PAGES - 1);
        const moveDistance = progress * lineWidth;
        gsap.to(carRef.current, {
            x: moveDistance,
            duration: 0.6,
            ease: "power2.out",
        });
    }, [currentPageIndex, lineWidth]);

    return (
        <div className="min-h-screen flex flex-col bg-white font-poppins">
            {/* Header */}
            <div className="flex justify-end items-center pt-[56px] px-6 py-4 border-b shadow-sm">
                {/* logo */}
                <img
                    src="/Logo_1.png"
                    alt="Logo"
                    className="pl-[40px] w-64 h-16 mr-auto"
                />

                {/* Exit button */}
                <button
                    onClick={() => navigate("/")}
                    className="text-red-600 text-xl pr-[60px] font-bold hover:text-red-800 transition"
                >
                    <IoCloseCircleOutline size={30} />
                </button>
            </div>

            {/* Dashed Line Path + Car */}
            <div className="relative w-full px-12 mt-8 mb-3 h-[60px] mx-auto max-w-[95%]">
                <div
                    ref={lineRef}
                    className="absolute top-1/2 transform -translate-y-1/2 h-1"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(to right, #000000BF 0 60px, transparent 60px 72px)',
                        width: 'calc(100% - 60px)',
                        right: '30px',
                        marginLeft: '30px'
                    }}
                ></div>
                <img
                    ref={carRef}
                    src={car}
                    alt="car"
                    className="w-[60px] absolute top-1/2 transform -translate-y-1/2 left-6"
                />
            </div>
            
            {/* Page Content */}
            <div className="flex-grow flex flex-col justify-center items-center px-6 text-center">
                {Pages[currentPageIndex].Content}
            </div>

            {/* Navigation Button */}
            <div className="w-full px-6 pb-8 flex justify-center">
                <button
                    onClick={handleNext}
                    className="bg-[#A11616E5] hover:bg-[#880F0F] text-[#FCD2B1] text-lg px-6 py-2 rounded-xl font-semibold border border-[#FCD2B1] transition"
                >
                    {Pages[currentPageIndex].buttonText}
                </button>
            </div>

            {/* Page Counter */}
            <div className="text-center text-gray-600 text-sm mb-6">
                Page {currentPageIndex + 1} of {TOTAL_PAGES}
            </div>
        </div>
    );
}