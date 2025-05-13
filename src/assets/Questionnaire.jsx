// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { gsap } from "gsap";
// import car from "/car.png";
// import { IoCloseCircleOutline } from "react-icons/io5";
// import { FaArrowRightLong } from "react-icons/fa6";

// const TOTAL_PAGES = 36;
// // Define pages with custom content

// const [travelerCount, setTravelerCount] = useState(1);

// const [firstName, setFirstName] = useState("");

// const handleTravelerCountChange = (e) => {
//     setTravelerCount(Number(e.target.value));
//     updateFormData({ travelerCount: Number(e.target.value) });
// };

// const handleFirstNameChange = (e) => {
//     setFirstName(e.target.value);
//     updateFormData({ firstName: e.target.value });
// };

// const isFormValid = firstName.trim() !== "" && travelerCount > 0;

// const Pages = [
//     {
//         Number: 1,
//         type: "text",
//         Content: (
//             <div className='w-full sm:w-[90%] md:w-[75%] lg:w-[60%] flex flex-col items-center'>
//                 <h1 className='font-titan font-normal text-[36px] text-[#000000E5] text-center mb-4'>
//                     Blind Fold Trip Questionnaire
//                 </h1>

//                 <p className='font-poppins font-normal text-[24px] text-[#000000BF] text-center mb-4'>
//                     <span className="font-titan text-[32pxtext-[#000000BF]">Welcome, explorer.</span> What you share here unlocks the journey meant just for you. Soon, the details will find their way to you.
//                 </p>

//                 <p className='font-poppins font-normal text-[24px] text-[#000000BF] text-center mb-4'>
//                     Unlock the first step to the unknown. <span className="font-bold text-[#000000]">Fill in the details, receive your surprise proposal — all for free.</span>
//                 </p>
//             </div>
//         ),
//         buttonText: "Know your destination"
//     },
//     {
//         Number: 2,
//         type: "text",
//         Content: (
//             <div className='w-full sm:w-[90%] md:w-[75%] lg:w-[50%] flex flex-col items-center'> 
//                 <p className='font-poppins font-bold text-[24px] text-[#000000] text-left mb-4'>
//                     Before we send you on a mystery ride, let’s check if Blind Fold Trip is your vibe :
//                 </p>

//                 <div className='items-start mb-4'>
//                     <p className='font-poppins font-normal text-[24px] text-[#000000] text-left mb-4'>
//                         <span className="font-titan text-[32px] text-[#000000BF]">01.</span>  Choose any airport across India to begin your trip.
//                     </p>

//                     <p className='font-poppins font-normal text-[24px] text-[#000000] text-left mb-4'>
//                         <span className="font-titan text-[32px] text-[#000000BF]">02.</span>  Everyone is at least 10 years old with at least one person who is 18 or older.
//                     </p>
//                 </div>
//             </div>
//         ),
//         buttonText: "Let’s dive in!"
//     },
//     {
//         Number: 3,
//         type: "form",
//         Content: (
//             <div className='w-full max-w-[600px] flex flex-col items-start px-4'>
//                 <div className="w-full mb-8">
//                     <h2 className='font-poppins font-bold text-[24px] text-[#000000] mb-2'>
//                         <span className="font-titan font-normal text-[32px] text-[#000000BF]">01.</span> How many travelers are in your crew ? <span className="text-[#A32727]">*</span>
//                     </h2>
                    
//                     <p className='font-poppins font-normal text-[16px] text-[#000000BF] mb-4'>
//                         If you're <span className="font-bold">not sure, start with 1</span>. You can always add more 
//                         people later—after receiving your Blind Fold Trip Proposal.
//                     </p>
                    
//                     <div className="relative w-[120px]">
//                         <select 
//                             value={travelerCount}
//                             onChange={handleTravelerCountChange}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-md appearance-none bg-white font-poppins text-lg"
//                         >
//                             {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
//                                 <option key={num} value={num}>{num}</option>
//                             ))}
//                         </select>
//                         <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//                             <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                             </svg>
//                         </div>
//                     </div>
//                 </div>
                
//                 <div className="w-full mb-8">
//                     <h2 className='font-titan font-normal text-[28px] text-[#000000E5] mb-2'>
//                         <span className="font-titan text-[32px] text-[#000000E5]">02.</span> Your <span className="font-bold">first name</span>, please <span className="text-red-600">*</span>
//                     </h2>
                    
//                     <input
//                         type="text"
//                         value={firstName}
//                         onChange={handleFirstNameChange}
//                         placeholder="John Doe"
//                         className="w-full px-4 py-3 border border-gray-300 rounded-md font-poppins text-lg"
//                         required
//                     />
//                 </div>
//             </div>
//         ),
//         buttonText: "Next"
//     },
//     // Generate the rest of the pages dynamically
//     ...Array.from({ length: TOTAL_PAGES - 1 }, (_, i) => ({
//         Number: i + 2,
//         type: "text",
//         Content: (
//             <div className="text-center">
//                 <h2 className="text-2xl font-semibold mb-4 font-poppins">Page {i + 2}</h2>
//                 <p className="text-lg text-gray-700 font-poppins">This is the content for page {i + 2}.</p>
//             </div>
//         ),
//         buttonText: i === TOTAL_PAGES - 2 ? "Finish" : "Next"
//     }))
// ];

// export default function Questionnaire() {
//     const [currentPageIndex, setCurrentPageIndex] = useState(0);
//     const carRef = useRef(null);
//     const lineRef = useRef(null);
//     const [lineWidth, setLineWidth] = useState(0);
//     const navigate = useNavigate();

//     const handleNext = () => {
//         if (currentPageIndex < TOTAL_PAGES - 1) {
//             setCurrentPageIndex((prev) => prev + 1);
//         } else {
//             navigate("/thankyou");
//         }
//     };

//     useEffect(() => {
//         const updateWidth = () => {
//             if (lineRef.current) {
//                 // Subtract the car width from the line width to prevent overflow
//                 const adjustedWidth = lineRef.current.offsetWidth - 70; // 60px car width + 10px buffer
//                 setLineWidth(adjustedWidth);
//             }
//         };
//         updateWidth();
//         window.addEventListener("resize", updateWidth);
//         return () => window.removeEventListener("resize", updateWidth);
//     }, []);

//     useEffect(() => {
//         const progress = currentPageIndex / (TOTAL_PAGES - 1);
//         const moveDistance = progress * lineWidth;
//         gsap.to(carRef.current, {
//             x: moveDistance,
//             duration: 0.6,
//             ease: "power2.out",
//         });
//     }, [currentPageIndex, lineWidth]);

//     return (
//         <div className="min-h-screen flex flex-col bg-white font-poppins">
//             {/* Header */}
//             <div className="flex justify-end items-center pt-[56px] px-6 py-4 border-b shadow-sm">
//                 {/* logo */}
//                 <img
//                     src="/Logo_1.png"
//                     alt="Logo"
//                     className="pl-[40px] w-64 h-16 mr-auto"
//                 />

//                 {/* Exit button */}
//                 <button
//                     onClick={() => navigate("/")}
//                     className="text-red-600 text-xl pr-[60px] font-bold hover:text-red-800 transition"
//                 >
//                     <IoCloseCircleOutline size={30} />
//                 </button>
//             </div>

//             {/* Dashed Line Path + Car */}
//             <div className="relative w-full px-12 mt-8 mb-3 h-[60px] mx-auto max-w-[95%]">
//                 <div
//                     ref={lineRef}
//                     className="absolute top-1/2 transform -translate-y-1/2 h-1"
//                     style={{
//                         backgroundImage: 'repeating-linear-gradient(to right, #000000BF 0 60px, transparent 60px 72px)',
//                         width: 'calc(100% - 60px)',
//                         right: '30px',
//                         marginLeft: '30px'
//                     }}
//                 ></div>
//                 <img
//                     ref={carRef}
//                     src={car}
//                     alt="car"
//                     className="w-[60px] md:w-[90px] lg:w-[135px] h-[60px] md:h-[90px] lg:h-[120px] absolute top-1/2 transform -translate-y-1/2 left-4"
//                 />
//             </div>
            
//             {/* Page Content */}
//             <div className="flex-grow flex flex-col justify-center items-center px-6 text-center">
//                 {Pages[currentPageIndex].Content}
//             </div>

//             {/* Navigation Button */}
//             <div className="w-full px-6 pb-8 flex justify-center">
//                 <button
//                     onClick={handleNext}
//                     className="bg-[#A11616E5] hover:bg-[#003566] text-[#FCD2B1] font-poppins font-bold text-[20px] px-4 md:px-6 lg:px-8 py-2 rounded-full border border-1 border-[#FCD2B1] flex items-center gap-2 transition"
//             >
//                     {Pages[currentPageIndex].buttonText}
//                     <FaArrowRightLong size={20} />
//                 </button>
//             </div>

//             {/* Page Counter */}
//             <div className="text-center text-gray-600 text-sm mb-6">
//                 {currentPageIndex + 1} of {TOTAL_PAGES}
//             </div>
//         </div>
//     );
// }


import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import car from "/car.png";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

const TOTAL_PAGES = 36;

export default function Questionnaire() {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [travelerCount, setTravelerCount] = useState(1);
    const [firstName, setFirstName] = useState("");
    const carRef = useRef(null);
    const lineRef = useRef(null);
    const [lineWidth, setLineWidth] = useState(0);
    const navigate = useNavigate();

    const handleTravelerCountChange = (e) => {
        setTravelerCount(Number(e.target.value));
        // updateFormData({ travelerCount: Number(e.target.value) }); // Uncomment if you use form data globally
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
        // updateFormData({ firstName: e.target.value }); // Uncomment if you use form data globally
    };

    const isFormValid = firstName.trim() !== "" && travelerCount > 0;

    const [checkboxValues, setCheckboxValues] = useState({
        awareOfNothing: false,
        unableToDoPhysicalActivities: false,
        pregnancy: false,
        fearOfHeights: false,
        cantSwim: false,
        seaSickness: false,
        claustrophobia: false,
        fearOfDogs: false,
    });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
            setCheckboxValues((prevState) => ({
            ...prevState,
            [name]: checked,
        }));
    };

    const handleSave = () => {
        // Here you can save the responses to a backend or store them locally
        console.log("Saved Responses:", checkboxValues);
        // Example: Send the data to an API or local storage
        // fetch("/api/save", { method: "POST", body: JSON.stringify(checkboxValues) });
    };

    const Pages = [
        {
            Number: 1,
            type: "text",
            Content: (
                <div className='w-full sm:w-[90%] md:w-[75%] lg:w-[60%] flex flex-col items-center'>
                    <h1 className='font-titan font-normal text-[36px] text-[#000000E5] text-center mb-4'>
                        Blind Fold Trip Questionnaire
                    </h1>
                    <p className='font-poppins font-normal text-[24px] text-[#000000BF] text-center mb-4'>
                        <span className="font-titan text-[32px] text-[#000000BF]">Welcome, explorer.</span> What you share here unlocks the journey meant just for you. Soon, the details will find their way to you.
                    </p>
                    <p className='font-poppins font-normal text-[24px] text-[#000000BF] text-center mb-4'>
                        Unlock the first step to the unknown. <span className="font-bold text-[#000000]">Fill in the details, receive your surprise proposal — all for free.</span>
                    </p>
                </div>
            ),
            buttonText: "Know your destination"
        },
        {
            Number: 2,
            type: "text",
            Content: (
                <div className='w-full sm:w-[90%] md:w-[75%] lg:w-[50%] flex flex-col items-center'>
                    <p className='font-poppins font-bold text-[24px] text-[#000000] text-left mb-4'>
                        Before we send you on a mystery ride, let’s check if Blind Fold Trip is your vibe :
                    </p>
                    <div className='items-start mb-4'>
                        <p className='font-poppins font-normal text-[24px] text-[#000000] text-left mb-4'>
                            <span className="font-titan text-[32px] text-[#000000BF]">01.</span>  Choose any airport across India to begin your trip.
                        </p>
                        <p className='font-poppins font-normal text-[24px] text-[#000000] text-left mb-4'>
                            <span className="font-titan text-[32px] text-[#000000BF]">02.</span>  Everyone is at least 10 years old with at least one person who is 18 or older.
                        </p>
                    </div>
                </div>
            ),
            buttonText: "Let’s dive in!"
        },
        {
            Number: 3,
            type: "form",
            Content: (
                <div className='w-full sm:w-[90%] md:w-[75%] lg:w-[50%] flex flex-col items-start px-4'>
                    <div className="w-full mb-8">
                        <h2 className='font-poppins font-bold text-[24px] text-[#000000] text-left mb-4'>
                            <span className="font-titan font-normal text-[32px] text-[#000000BF]">01.</span> How many travelers are in your crew ? <span className="text-[#A32727]">*</span>
                        </h2>
                        <p className='font-poppins font-normal text-[20px] text-[#000000BF] text-left mb-4'>
                            If you're <span className="font-bold">not sure, start with 1</span>. You can always add more people later—after receiving your Blind Fold Trip Proposal.
                        </p>
                        <div className="relative w-[120px]">
                            <select
                                value={travelerCount}
                                onChange={handleTravelerCountChange}
                                className="w-full px-4 py-2 border border-2 border-[#000000B2] rounded-lg appearance-none bg-[#D9D9D966] font-poppins font-bold text-[#000000] text-[20px]"
                            >
                                {[...Array(10)].map((_, i) => (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <svg className="w-5 h-5 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-8">
                        <h2 className='font-poppins font-normal text-[24px] text-[#000000BF] text-left mb-4'>
                            <span className="font-titan text-[32px]">02.</span> Your <span className="font-bold text-[#000000]">first name</span>, please <span className="text-[#A32626]">*</span>
                        </h2>
                        <input
                            type="text"
                            value={firstName}
                            onChange={handleFirstNameChange}
                            placeholder="John Doe"
                            className="w-full px-4 py-3 border border-2 border-[#000000B2] bg-[#D9D9D966] rounded-lg font-poppins font-normal text-[24px] text-[#000000]"
                            required
                        />
                    </div>
                </div>
            ),
            buttonText: "Next"
        },
        {
            Number: 4,
            type: "text",
            Content: (
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="text-center mr-8">
                        <p className="font-poppins font-bold text-[40px] text-[#A42828]">
                            Chapter 1: You & Your Getaway Style
                        </p>
                    </div>
                    <img
                        src="/chapter-1.png"
                        alt="Chapter 1"
                        className="w-[249px] h-[241px] mt-4 mb-4"
                    />
                </div>
            ),
            buttonText: "Continue"
        },
        {
            Number: 5,
            type: "text",
            Content: (
                <div className="w-full sm:w-[90%] md:w-[75%] lg:w-[40%] flex flex-col items-center">
                    <p className="font-poppins text-[20px] text-[#000000BF] text-left mb-4">
                        With BFT, the world becomes your playground for adventure and self-discovery.<br /><br />
                        We totally get that <span className="font-bold">fears, phobias, or medical conditions</span> can affect your travel experience. Is there <span className="font-bold">anything we should keep in mind?</span>
                    </p>
                    <div className="flex flex-col items-start gap-4 text-[24px] text-left font-poppins">
                        <label className="flex items-center text-left">
                        <input
                            type="checkbox"
                            name="awareOfNothing"
                            className="mr-4 w-[20px] h-[20px]"
                            checked={checkboxValues.awareOfNothing}
                            onChange={handleCheckboxChange}
                        />
                        Nothing you need to be aware of
                        </label>
                        <label className="flex items-center text-left">
                        <input
                            type="checkbox"
                            name="unableToDoPhysicalActivities"
                            className="mr-4 w-[20px] h-[20px]"
                            checked={checkboxValues.unableToDoPhysicalActivities}
                            onChange={handleCheckboxChange}
                        />
                        Unable to do prolonged physical activities
                        </label>
                        <label className="flex items-center text-left">
                        <input
                            type="checkbox"
                            name="pregnancy"
                            className="mr-4 w-[20px] h-[20px]"
                            checked={checkboxValues.pregnancy}
                            onChange={handleCheckboxChange}
                        />
                        Pregnancy
                        </label>
                        <label className="flex items-center text-left">
                        <input
                            type="checkbox"
                            name="fearOfHeights"
                            className="mr-4 w-[20px] h-[20px]"
                            checked={checkboxValues.fearOfHeights}
                            onChange={handleCheckboxChange}
                        />
                        Severe fear of heights
                        </label>
                        <label className="flex items-center text-left">
                        <input
                            type="checkbox"
                            name="cantSwim"
                            className="mr-4 w-[20px] h-[20px]"
                            checked={checkboxValues.cantSwim}
                            onChange={handleCheckboxChange}
                        />
                        Can't swim
                        </label>
                        <label className="flex items-center text-left">
                        <input
                            type="checkbox"
                            name="seaSickness"
                            className="mr-4 w-[20px] h-[20px]"
                            checked={checkboxValues.seaSickness}
                            onChange={handleCheckboxChange}
                        />
                        Sea sickness
                        </label>
                        <label className="flex items-center text-left">
                        <input
                            type="checkbox"
                            name="claustrophobia"
                            className="mr-4 w-[20px] h-[20px]"
                            checked={checkboxValues.claustrophobia}
                            onChange={handleCheckboxChange}
                        />
                        Claustrophobia
                        </label>
                        <label className="flex items-center text-left mb-8">
                        <input
                            type="checkbox"
                            name="fearOfDogs"
                            className="mr-4 w-[20px] h-[20px]"
                            checked={checkboxValues.fearOfDogs}
                            onChange={handleCheckboxChange}
                        />
                        Fear of dogs
                        </label>
                    </div>
                </div>
            ),
            buttonText: "Done"
        },
        ...Array.from({ length: TOTAL_PAGES - 3 }, (_, i) => ({
            Number: i + 4,
            type: "text",
            Content: (
                <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-4 font-poppins">Page {i + 4}</h2>
                    <p className="text-lg text-gray-700 font-poppins">This is the content for page {i + 4}.</p>
                </div>
            ),
            buttonText: i === TOTAL_PAGES - 4 ? "Finish" : "Next"
        }))
    ];

    const handleNext = () => {
        if (currentPageIndex < TOTAL_PAGES - 1) {
            setCurrentPageIndex(prev => prev + 1);
        } else {
            navigate("/thankyou");
        }
    };

    useEffect(() => {
        const updateWidth = () => {
            if (lineRef.current) {
                const adjustedWidth = lineRef.current.offsetWidth - 70;
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
                <img src="/Logo_1.png" alt="Logo" className="pl-[40px] w-64 h-16 mr-auto" />
                <button onClick={() => navigate("/")} className="text-red-600 text-xl pr-[60px] font-bold hover:text-red-800 transition">
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
                    className="w-[60px] md:w-[90px] lg:w-[135px] h-[60px] md:h-[90px] lg:h-[120px] absolute top-1/2 transform -translate-y-1/2 left-4"
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
                    className="bg-[#A11616E5] hover:bg-[#003566] text-[#FCD2B1] font-poppins font-bold text-[20px] px-4 md:px-6 lg:px-8 py-2 rounded-full border border-1 border-[#FCD2B1] flex items-center gap-2 transition"
                    disabled={currentPageIndex === 2 && !isFormValid}
                >
                    {Pages[currentPageIndex].buttonText}
                    <FaArrowRightLong size={20} />
                </button>
            </div>

            {/* Page Counter */}
            <div className="text-center text-gray-600 text-sm mb-6">
                {currentPageIndex + 1} of {TOTAL_PAGES}
            </div>
        </div>
    );
}
