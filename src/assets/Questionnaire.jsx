import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import car from "/car.png";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

const TOTAL_PAGES = 36;

export default function Questionnaire() {
    const carRef = useRef(null);
    const lineRef = useRef(null);
    const [lineWidth, setLineWidth] = useState(0);
    const navigate = useNavigate();

    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [selectedState, setSelectedState] = useState("");
    const [travelerCount, setTravelerCount] = useState(1);
    const [firstName, setFirstName] = useState("");
    const [avoidDestination, setAvoidDestination] = useState("");
    const [checkboxValues, setCheckboxValues] = useState({
        awareOfNothing: false,
        unableToDoPhysicalActivities: false,
        pregnancy: false,
        fearOfHeights: false,
        cantSwim: false,
        seaSickness: false,
        claustrophobia: false,
        fearOfDogs: false,
        noNatureWalk: false,
        noHiking: false,
        noBikingSegway: false,
        noBoatTrips: false,
        noSwimmingSnorkeling: false,
        noKayakingSUP: false,
        noRafting: false,
        noSurfing: false,
        noScubaDiving: false,
        noCanyoningCaving: false,
        noParagliding: false,
        noHorseCamelRiding: false,
        noWineTasting: false,
        noBreweryTour: false,
        noSpaContact: false,
        none: false,
        vegeterian: false,
        vegan: false,
        noAlcohol: false,
        otherAllergies: false,
        notInterested: false,
        openAndWilling: false,
        curious: false,
        excited: false,
        superInterested: false,
        notInterested1: false,
        openAndWilling1: false,
        curious1: false,
        excited1: false,
        superInterested1: false,
        notInterested2: false,
        openAndWilling2: false,
        curious2: false,
        excited2: false,
        superInterested2: false,
        notInterested3: false,
        openAndWilling3: false,
        curious3: false,
        excited3: false,
        superInterested3: false,
        notInterested4: false,
        openAndWilling4: false,
        curious4: false,
        excited4: false,
        superInterested4: false,
        notInterested5: false,
        openAndWilling5: false,
        curious5: false,
        excited5: false,
        superInterested5: false,
        notInterested6: false,
        openAndWilling6: false,
        curious6: false,
        excited6: false,
        superInterested6: false,
        qualityTime: false,
        newDestination: false,
        wellness: false,
        specialOccasion: false,
        totalChill: false,
        mostlyRelaxed: false,
        aBitOfBoth: false,
        prettyActive: false,
        nonStopAdventure: false,
        surpriseMe: false,
        coolerClimate: false,
        bringOnTheSunshine: false,
        vibrantUrbanLife: false,
        creativeArtsyVibes: false,
        lushGreenLandscapes: false,
        photogenic: false,
        budgetFriendlyAdventures: false,
        mountainous: false,
        calmSereneEscapes: false,
        eyeCatchingArchitecture: false,
        sandyBeaches: false,
        yes: false,
        openToAnywhere: false,
        internationalTrip: false,
    });

    const handleTravelerCountChange = (e) => {
        setTravelerCount(Number(e.target.value));
        // updateFormData({ travelerCount: Number(e.target.value) }); // Uncomment if you use form data globally
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
        // updateFormData({ firstName: e.target.value }); // Uncomment if you use form data globally
    };

    const isFormValid = () =>{
        return firstName.trim() !== "" && travelerCount > 0;
    }

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
            setCheckboxValues((prevState) => ({
            ...prevState,
            [name]: checked,
        }));
    };

    const handlestateSelectionChange = (event) => {
        const state = event.target.value;
        setSelectedState(state);
        // updateFormData({ selectedState }); // Uncomment if you use form data globally
    };

    const handleAvoidDestinationChange = (event) => {
        const destination = event.target.value;
        setAvoidDestination(destination);
        // updateFormData({ avoidDestination }); // Uncomment if you use form data globally
    };

    const isFormValid1 = () => {
        return selectedState !== "";
    }

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
                    <p className="font-poppins font-normal text-[20px] text-[#000000BF] text-left mb-4">
                        With BFT, the world becomes your playground for adventure and self-discovery.<br /><br />
                        We totally get that <span className="font-bold">fears, phobias, or medical conditions</span> can affect your travel experience. Is there <span className="font-bold">anything we should keep in mind?</span>
                    </p>
                    <div className="flex flex-col items-start gap-4 text-[16px] sm:text-[20px] md:text-[24px] text-left font-poppins">
                        <label className="flex items-center text-left">
                        <input
                            type="checkbox"
                            name="awareOfNothing"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.awareOfNothing}
                            onChange={handleCheckboxChange}
                        />
                        Nothing you need to be aware of
                        </label>
                        <label className="flex items-center text-left">
                        <input
                            type="checkbox"
                            name="unableToDoPhysicalActivities"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.unableToDoPhysicalActivities}
                            onChange={handleCheckboxChange}
                        />
                        Unable to do prolonged physical activities
                        </label>
                        <label className="flex items-center text-left">
                        <input
                            type="checkbox"
                            name="pregnancy"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.pregnancy}
                            onChange={handleCheckboxChange}
                        />
                        Pregnancy
                        </label>
                        <label className="flex items-center text-left">
                        <input
                            type="checkbox"
                            name="fearOfHeights"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.fearOfHeights}
                            onChange={handleCheckboxChange}
                        />
                        Severe fear of heights
                        </label>
                        <label className="flex items-center text-left">
                        <input
                            type="checkbox"
                            name="cantSwim"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.cantSwim}
                            onChange={handleCheckboxChange}
                        />
                        Can't swim
                        </label>
                        <label className="flex items-center text-left">
                        <input
                            type="checkbox"
                            name="seaSickness"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.seaSickness}
                            onChange={handleCheckboxChange}
                        />
                        Sea sickness
                        </label>
                        <label className="flex items-center text-left">
                        <input
                            type="checkbox"
                            name="claustrophobia"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.claustrophobia}
                            onChange={handleCheckboxChange}
                        />
                        Claustrophobia
                        </label>
                        <label className="flex items-center text-left mb-8">
                        <input
                            type="checkbox"
                            name="fearOfDogs"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
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
        {
            Number: 6,
            type: "text",
            Content: (
                <div className="w-full sm:w-[90%] md:w-[75%] lg:w-[40%] flex flex-col items-center">
                    <p className="font-poppins font-normal text-[20px] text-[#000000BF] text-left mb-4">
                        Every BFT adventure is designed with beginners in mind and guided by seasoned experts. We’ll always factor in any fears, phobias, or medical conditions you’ve shared with us.<br /><br />
                        We’d love to gently nudge you out of your comfort zone—but are there any <span className="font-bold text-[#000000]">activities that are a definite no for you?</span><br /><br />
                        If you’re unsure about an activity, don't say no to it!
                    </p>
                    <div className="flex flex-col items-start gap-4 text-[16px] sm:text-[20px] md:text-[24px] text-left font-poppins">
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="noNatureWalk"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.noNatureWalk}
                            onChange={handleCheckboxChange}
                            />
                            No to nature walk
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="noHiking"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.noHiking}
                            onChange={handleCheckboxChange}
                            />
                            No to hiking
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="noBikingSegway"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.noBikingSegway}
                            onChange={handleCheckboxChange}
                            />
                            No to biking/Segway
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="noBoatTrips"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.noBoatTrips}
                            onChange={handleCheckboxChange}
                            />
                            No to boat trips
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="noSwimmingSnorkeling"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.noSwimmingSnorkeling}
                            onChange={handleCheckboxChange}
                            />
                            No to swimming/snorkeling
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="noKayakingSUP"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.noKayakingSUP}
                            onChange={handleCheckboxChange}
                            />
                            No to kayaking/SUP
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="noRafting"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.noRafting}
                            onChange={handleCheckboxChange}
                            />
                            No to rafting
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="noSurfing"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.noSurfing}
                            onChange={handleCheckboxChange}
                            />
                            No to surfing
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="noScubaDiving"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.noScubaDiving}
                            onChange={handleCheckboxChange}
                            />
                            No to scuba diving
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="noCanyoningCaving"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.noCanyoningCaving}
                            onChange={handleCheckboxChange}
                            />
                            No to canyoning/caving
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="noParagliding"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.noParagliding}
                            onChange={handleCheckboxChange}
                            />
                            No to paragliding
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="noHorseCamelRiding"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.noHorseCamelRiding}
                            onChange={handleCheckboxChange}
                            />
                            No to horse riding/camel riding
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="noWineTasting"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.noWineTasting}
                            onChange={handleCheckboxChange}
                            />
                            No to wine tasting
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="noBreweryTour"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.noBreweryTour}
                            onChange={handleCheckboxChange}
                            />
                            No to brewery/distillery tour
                        </label>
                        <label className="flex items-center text-left mb-8">
                            <input
                            type="checkbox"
                            name="noSpaContact"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.noSpaContact}
                            onChange={handleCheckboxChange}
                            />
                            No to spa treatments with physical contact
                        </label>
                    </div>
                </div>
            ),
            buttonText: "Done"
        },
        {
            Number: 7,
            type: "text",
            Content: (
                <div className="w-full sm:w-[90%] md:w-[75%] lg:w-[40%] flex flex-col items-center">
                    <p className="font-poppins font-normal text-[20px] text-[#000000] text-left mb-4">
                        Do you follow <span className="font-bold">any dietary preferences or restrictions</span> we should consider for foodie stops? *
                    </p>
                    <div className="flex flex-col items-start gap-4 text-[16px] sm:text-[20px] md:text-[24px] text-left font-poppins">
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="none"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.none}
                            onChange={handleCheckboxChange}
                            />
                            None
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="vegeterian"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.vegeterian}
                            onChange={handleCheckboxChange}
                            />
                            Vegetarian
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="vegan"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.vegan}
                            onChange={handleCheckboxChange}
                            />
                            Vegan
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="noAlcohol"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.noAlcohol}
                            onChange={handleCheckboxChange}
                            />
                            Don’t Drink Alcohol
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="otherAllergies"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.otherAllergies}
                            onChange={handleCheckboxChange}
                            />
                            Other allergies or dietary restrictions
                        </label>
                    </div>
                </div>
            ),
            buttonText: "Done"
        },
        {
            Number: 8,
            type: "text",
            Content: (
                <div className="w-full flex flex-col items-center">
                    <p className="font-poppins font-normal text-[24px] text-[#000000] text-left mr-12 md:mr-20 mb-4">
                        How much do you enjoy <span className="font-bold">outdoor adventures?</span>
                    </p>
                    <div className="flex flex-row items-center gap-4 sm:gap-8 lg:gap-12 mb-4">
                        <div className="flex flex-col items-start gap-4 text-[16px] sm:text-[20px] md:text-[24px] text-left font-normal font-poppins">
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="notInterested"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.notInterested}
                                onChange={handleCheckboxChange}
                                />
                                Not interested
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="openAndWilling"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.openAndWilling}
                                onChange={handleCheckboxChange}
                                />
                                Open & willing
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="curious"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.curious}
                                onChange={handleCheckboxChange}
                                />
                                Curious
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="excited"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.excited}
                                onChange={handleCheckboxChange}
                                />
                                Excited
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="superInterested"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.superInterested}
                                onChange={handleCheckboxChange}
                                />
                                Super interested
                            </label>
                        </div>
                        <img src="/page-8.jpg" alt="Page 8" className="w-[200px] md:w-[337px] h-[150px] md:h-[244px] rounded-lg mt-4 mb-4 bg-[#D9D9D9]" />
                    </div>
                </div>
            ),
            buttonText: "Done"
        },
        {
            Number: 9,
            type: "text",
            Content: (
                <div className="w-full flex flex-col items-center">
                    <p className="font-poppins font-normal text-[24px] text-[#000000] text-left mr-14 md:mr-28 mb-4">
                        How do you feel about being <span className="font-bold">out in nature?</span>
                    </p>
                    <div className="flex flex-row items-center gap-4 sm:gap-8 lg:gap-12 mb-4">
                        <div className="flex flex-col items-start gap-4 text-[16px] sm:text-[20px] md:text-[24px] text-left font-normal font-poppins">
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="notInterested1"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.notInterested1}
                                onChange={handleCheckboxChange}
                                />
                                Not interested
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="openAndWilling1"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.openAndWilling1}
                                onChange={handleCheckboxChange}
                                />
                                Open & willing
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="curious1"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.curious1}
                                onChange={handleCheckboxChange}
                                />
                                Curious
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="excited1"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.excited1}
                                onChange={handleCheckboxChange}
                                />
                                Excited
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="superInterested1"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.superInterested1}
                                onChange={handleCheckboxChange}
                                />
                                Super interested
                            </label>
                        </div>
                        <img src="/page-9.jpg" alt="Page 9" className="w-[200px] md:w-[337px] h-[150px] md:h-[244px] rounded-lg mt-4 mb-4 bg-[#D9D9D9]" />
                    </div>
                </div>
            ),
            buttonText: "Done"
        },
        {
            Number: 10,
            type: "text",
            Content: (
                <div className="w-full flex flex-col items-center">
                    <p className="font-poppins font-normal text-[24px] text-[#000000] text-left mr-14 md:mr-28 mb-4">
                        Strolling through <span className="font-bold">charming little towns—</span> love it or leave it? 
                    </p>
                    <div className="flex flex-row items-center gap-4 sm:gap-8 lg:gap-12 mb-4">
                        <div className="flex flex-col items-start gap-4 text-[16px] sm:text-[20px] md:text-[24px] text-left font-normal font-poppins">
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="notInterested2"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.notInterested2}
                                onChange={handleCheckboxChange}
                                />
                                Not interested
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="openAndWilling2"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.openAndWilling2}
                                onChange={handleCheckboxChange}
                                />
                                Open & willing
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="curious2"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.curious2}
                                onChange={handleCheckboxChange}
                                />
                                Curious
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="excited2"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.excited2}
                                onChange={handleCheckboxChange}
                                />
                                Excited
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="superInterested2"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.superInterested2}
                                onChange={handleCheckboxChange}
                                />
                                Super interested
                            </label>
                        </div>
                        <img src="/page-10.jpg" alt="Page 10" className="w-[200px] md:w-[337px] h-[150px] md:h-[244px] rounded-lg mt-4 mb-4 bg-[#D9D9D9]" />
                    </div>
                </div>
            ),
            buttonText: "Done"
        },
        {
            Number: 11,
            type: "text",
            Content: (
                <div className="w-full flex flex-col items-center">
                    <p className="font-poppins font-normal text-[24px] text-[#000000] text-left mr-14 md:mr-28 mb-4">
                        Seeing <span className="font-bold">iconic landmarks—</span> must-do or pass?
                    </p>
                    <div className="flex flex-row items-center gap-4 sm:gap-8 lg:gap-12 mb-4">
                        <div className="flex flex-col items-start gap-4 text-[16px] sm:text-[20px] md:text-[24px] text-left font-normal font-poppins">
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="notInterested3"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.notInterested3}
                                onChange={handleCheckboxChange}
                                />
                                Not interested
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="openAndWilling3"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.openAndWilling3}
                                onChange={handleCheckboxChange}
                                />
                                Open & willing
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="curious3"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.curious3}
                                onChange={handleCheckboxChange}
                                />
                                Curious
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="excited3"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.excited3}
                                onChange={handleCheckboxChange}
                                />
                                Excited
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="superInterested3"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.superInterested3}
                                onChange={handleCheckboxChange}
                                />
                                Super interested
                            </label>
                        </div>
                        <img src="/page-11.jpg" alt="Page 11" className="w-[200px] md:w-[337px] h-[150px] md:h-[244px] rounded-lg mt-4 mb-4 bg-[#D9D9D9]" />
                    </div>
                </div>
            ),
            buttonText: "Done"
        },
        {
            Number: 12,
            type: "text",
            Content: (
                <div className="w-full flex flex-col items-center">
                    <p className="font-poppins font-normal text-[24px] text-[#000000] text-left mr-14 md:mr-28 mb-4">
                        Exploring <span className="font-bold">places rich in history—</span> your thing? 
                    </p>
                    <div className="flex flex-row items-center gap-4 sm:gap-8 lg:gap-12 mb-4">
                        <div className="flex flex-col items-start gap-4 text-[16px] sm:text-[20px] md:text-[24px] text-left font-normal font-poppins">
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="notInterested4"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.notInterested4}
                                onChange={handleCheckboxChange}
                                />
                                Not interested
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="openAndWilling4"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.openAndWilling4}
                                onChange={handleCheckboxChange}
                                />
                                Open & willing
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="curious4"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.curious4}
                                onChange={handleCheckboxChange}
                                />
                                Curious
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="excited4"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.excited4}
                                onChange={handleCheckboxChange}
                                />
                                Excited
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="superInterested4"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.superInterested4}
                                onChange={handleCheckboxChange}
                                />
                                Super interested
                            </label>
                        </div>
                        <img src="/page-12.jpg" alt="Page 12" className="w-[200px] md:w-[337px] h-[150px] md:h-[244px] rounded-lg mt-4 mb-4 bg-[#D9D9D9]" />
                    </div>
                </div>
            ),
            buttonText: "Done"
        },
        {
            Number: 13,
            type: "text",
            Content: (
                <div className="w-full flex flex-col items-center">
                    <p className="font-poppins font-normal text-[24px] text-[#000000] text-left mr-12 sm:mr-14 md:mr-48 mb-4">
                        <span className="font-bold">Art and museum </span> visits—yay or nay?
                    </p>
                    <div className="flex flex-row items-center gap-4 sm:gap-8 lg:gap-12 mb-4">
                        <div className="flex flex-col items-start gap-4 text-[16px] sm:text-[20px] md:text-[24px] text-left font-normal font-poppins">
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="notInterested5"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.notInterested5}
                                onChange={handleCheckboxChange}
                                />
                                Not interested
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="openAndWilling5"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.openAndWilling5}
                                onChange={handleCheckboxChange}
                                />
                                Open & willing
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="curious5"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.curious5}
                                onChange={handleCheckboxChange}
                                />
                                Curious
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="excited5"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.excited5}
                                onChange={handleCheckboxChange}
                                />
                                Excited
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="superInterested5"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.superInterested5}
                                onChange={handleCheckboxChange}
                                />
                                Super interested
                            </label>
                        </div>
                        <img src="/page-13.jpg" alt="Page 13" className="w-[200px] md:w-[337px] h-[150px] md:h-[244px] rounded-lg mt-4 mb-4 bg-[#D9D9D9]" />
                    </div>
                </div>
            ),
            buttonText: "Done"
        },
        {
            Number: 14,
            type: "text",
            Content: (
                <div className="w-full flex flex-col items-center">
                    <p className="font-poppins font-normal text-[24px] text-[#000000] text-left mr-14 md:mr-28 mb-4">
                        Sampling <span className="font-bold">delicious local food—</span> how excited are you?
                    </p>
                    <div className="flex flex-row items-center gap-4 sm:gap-8 lg:gap-12 mb-4">
                        <div className="flex flex-col items-start gap-4 text-[16px] sm:text-[20px] md:text-[24px] text-left font-normal font-poppins">
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="notInterested6"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.notInterested6}
                                onChange={handleCheckboxChange}
                                />
                                Not interested
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="openAndWilling6"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.openAndWilling6}
                                onChange={handleCheckboxChange}
                                />
                                Open & willing
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="curious6"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.curious6}
                                onChange={handleCheckboxChange}
                                />
                                Curious
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="excited6"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.excited6}
                                onChange={handleCheckboxChange}
                                />
                                Excited
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="superInterested6"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.superInterested6}
                                onChange={handleCheckboxChange}
                                />
                                Super interested
                            </label>
                        </div>
                        <img src="/page-14.jpg" alt="Page 14" className="w-[200px] md:w-[337px] h-[150px] md:h-[244px] rounded-lg mt-4 mb-4 bg-[#D9D9D9]" />
                    </div>
                </div>
            ),
            buttonText: "Done"
        },
        {
            Number: 15,
            type: "text",
            Content: (
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="text-center mr-8">
                        <p className="font-poppins font-bold text-[40px] text-[#A42828]">
                            Chapter 2: Your Mystery Trip Begins
                        </p>
                    </div>
                    <img
                        src="/chapter-2.png"
                        alt="Chapter 2"
                        className="w-[249px] h-[241px] mt-4 mb-4"
                    />
                </div>
            ),
            buttonText: "Continue"
        },
        {
            Number: 16,
            type: "text",
            Content: (
                <div className="w-full flex flex-col items-start px-4 sm:px-8 md:px-32 lg:px-64">
                    <p className="font-poppins font-normal text-[24px] text-[#000000] text-center mb-4">
                        What’s the <span className="font-bold">#1 thing you’re hoping for from this trip? *</span>
                    </p>
                    <div className="flex flex-col items-start gap-4 text-[16px] sm:text-[20px] md:text-[24px] text-left font-normal font-poppins">
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="qualityTime"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.qualityTime}
                            onChange={handleCheckboxChange}
                            />
                            Quality time together / by myself
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="newDestination"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.newDestination}
                            onChange={handleCheckboxChange}
                            />
                            Visit a new destination
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="wellness"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.wellness}
                            onChange={handleCheckboxChange}
                            />
                            Emotional wellness
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="specialOccasion"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.specialOccasion}
                            onChange={handleCheckboxChange}
                            />
                            Celebrate a special occasion
                        </label>
                    </div>
                </div>
            ),
            buttonText: "Done"
        },
        {
            Number: 17,
            type: "text",
            Content: (
                <div className="w-full flex flex-col items-start px-4 sm:px-8 md:px-32 lg:px-64">
                    <p className="font-poppins font-normal text-[24px] text-[#000000] text-center mb-4">
                       How <span className="font-bold">active or chill</span> do you want your <span className="font-bold">trip</span> to be?
                    </p>
                    <div className="flex flex-col items-start gap-4 text-[16px] sm:text-[20px] md:text-[24px] text-left font-normal font-poppins">
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="totalChill"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.totalChill}
                            onChange={handleCheckboxChange}
                            />
                            <div>
                                Total Chill<br />
                                <span className="text-[12px] sm:text-[16px] md:text-[20px] text-[#000000BF] text-left font-normal font-poppins">
                                    - Hammocks, slow strolls, sunset views
                                </span>
                            </div>
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="mostlyRelaxed"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.mostlyRelaxed}
                            onChange={handleCheckboxChange}
                            />
                            <div>
                                Mostly Relaxed<br />
                                <span className="text-[12px] sm:text-[16px] md:text-[20px] text-[#000000BF] text-left font-normal font-poppins">
                                    - Spa days, short walks, beach lounging
                                </span>
                            </div>
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="aBitOfBoth"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.aBitOfBoth}
                            onChange={handleCheckboxChange}
                            />
                            <div>
                                A Bit of Both<br />
                                <span className="text-[12px] sm:text-[16px] md:text-[20px] text-[#000000BF] text-left font-normal font-poppins">
                                    - Easy hikes, local exploring, café hopping
                                </span>
                            </div>
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="prettyActive"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.prettyActive}
                            onChange={handleCheckboxChange}
                            />
                            <div>
                                Pretty Active<br />
                                <span className="text-[12px] sm:text-[16px] md:text-[20px] text-[#000000BF] text-left font-normal font-poppins">
                                    - Long walks, full-day tours, some adventure
                                </span>
                            </div>
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="nonStopAdventure"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.nonStopAdventure}
                            onChange={handleCheckboxChange}
                            />
                            <div className="mb-4">
                                Non-Stop Adventure<br />
                                <span className="text-[12px] sm:text-[16px] md:text-[20px] text-[#000000BF] text-left font-normal font-poppins">
                                    - Trekking, biking, packed itinerary, thrill-packed days
                                </span>
                            </div>
                        </label>
                    </div>
                </div>
            ),
            buttonText: "Done"
        },
        {
            Number: 18,
            type: "text",
            Content: (
                <div className="w-full flex flex-col items-start px-4 sm:px-8 md:px-32 lg:px-64">
                    <div className="flex flex-col items-start mb-4">
                        <p className="font-poppins font-normal text-[24px] text-[#000000BF] text-left">
                        Got a <span className="text-[#000000] font-bold">temperature preference</span> for your trip?
                        </p>
                        <p className="mt-2 text-[20px]">Warm = Above 15°C / 60°F</p>
                        <p className="mt-2 text-[20px]">Cool = Below 15°C / 60°F</p>
                    </div>
                    <div className="flex flex-col items-start gap-4 text-[16px] sm:text-[20px] md:text-[24px] text-left font-normal font-poppins">
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="surpriseMe"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.surpriseMe}
                            onChange={handleCheckboxChange}
                            />
                            Surprise me—I’m easygoing!
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="coolerClimate"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.coolerClimate}
                            onChange={handleCheckboxChange}
                            />
                            Cooler climates, please!
                        </label>
                        <label className="flex items-center text-left mb-4">
                            <input
                            type="checkbox"
                            name="bringOnTheSunshine"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.bringOnTheSunshine}
                            onChange={handleCheckboxChange}
                            />
                            Bring on the sunshine!
                        </label>
                    </div>
                    <p className="font-poppins font-normal text-[20px] text-[#000000BF] text-left mb-4">
                        Sun, snow, or something in between—you’ll be ready for anything!<br /><br />
                        Two weeks before you jet off, we’ll drop a live weather update and a custom packing list right into your inbox. No guesswork, just great outfits.
                    </p>
                </div>
            ),
            buttonText: "Done"
        },
        {
            Number: 19,
            type: "text",
            Content: (
                <div className="w-full flex flex-col items-start px-4 sm:px-8 md:px-32 lg:px-64">
                    <p className="font-poppins font-normal text-[24px] text-[#000000BF] text-left mb-4">
                        What kind of <span className="text-[#000000] font-bold">vibes</span> are you hoping for in your surprise destination?<br /> <br/>
                        <span className="text-[20px]">Make between 2 and 5 choices.</span>
                    </p>
                    <div className="flex flex-col items-start gap-4 text-[16px] sm:text-[20px] md:text-[24px] text-left font-normal font-poppins">
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="vibrantUrbanLife"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.vibrantUrbanLife}
                            onChange={handleCheckboxChange}
                            />
                            Vibrant urban life
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="creativeArtsyVibes"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.creativeArtsyVibes}
                            onChange={handleCheckboxChange}
                            />
                            Creative and artsy vibes
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="lushGreenLandscapes"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.lushGreenLandscapes}
                            onChange={handleCheckboxChange}
                            />
                            Lush green landscapes
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="photogenic"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.photogenic}
                            onChange={handleCheckboxChange}
                            />
                            Photogenic
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="budgetFriendlyAdventures"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.budgetFriendlyAdventures}
                            onChange={handleCheckboxChange}
                            />
                            Budget-friendly adventures
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="mountainous"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.mountainous}
                            onChange={handleCheckboxChange}
                            />
                            Mountainous
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="calmSereneEscapes"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.calmSereneEscapes}
                            onChange={handleCheckboxChange}
                            />
                            Calm and serene escapes
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="eyeCatchingArchitecture"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.eyeCatchingArchitecture}
                            onChange={handleCheckboxChange}
                            />
                            Eye-catching architecture
                        </label>
                        <label className="flex items-center text-left mb-4">
                            <input
                            type="checkbox"
                            name="sandyBeaches"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.sandyBeaches}
                            onChange={handleCheckboxChange}
                            />
                            Sandy beaches
                        </label>
                    </div>
                </div>
            ),
            buttonText: "Done"
        },
        {
            Number: 20,
            type: "text",
            Content: (
                <div className="w-full flex flex-col items-start px-4 sm:px-8 md:px-32 lg:px-64">
                    <p className="font-poppins font-normal text-[24px] text-[#000000BF] text-left mb-4">
                        Is there a <span className="text-[#000000] font-bold">dream destination or state on your list</span> you'd love to land? 
                    </p>
                    <div className="flex flex-col items-start gap-4 text-[16px] sm:text-[20px] md:text-[24px] text-left font-normal font-poppins">
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="yes"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.yes}
                            onChange={handleCheckboxChange}
                            />
                            Yes
                        </label>
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="openToAnywhere"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.openToAnywhere}
                            onChange={handleCheckboxChange}
                            />
                            No, I’m open to anywhere
                        </label>
                        <label className="flex items-center text-left mb-4">
                            <input
                            type="checkbox"
                            name="internationalTrip"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.internationalTrip}
                            onChange={handleCheckboxChange}
                            />
                            International Trip
                        </label>
                    </div>
                </div>
            ),
            buttonText: "Done"
        },
        {
            Number: 21,
            type: "form",
            Content: (
                <div className="w-full flex flex-col items-center px-4 sm:px-8 md:px-32 lg:px-64">
                    <p className="font-poppins font-normal text-[24px] text-[#000000BF] text-center mb-4">
                        Which <span className="font-bold">States</span> are <span className="text-[#000000] font-bold">on your bucket list?</span> 
                    </p>
                    <div className="relative w-[250px]">
                        <select
                            value={selectedState}
                            onChange={handlestateSelectionChange}
                            className="w-full px-4 py-2 border border-2 border-[#000000B2] rounded-lg appearance-none bg-[#D9D9D966] font-poppins font-bold text-[#000000] text-[20px]"
                        >
                            <option value="">Select</option>
                            {[
                            "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
                            "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
                            "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
                            "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
                            "Uttar Pradesh", "Uttarakhand", "West Bengal"
                            ].map((state, index) => (
                            <option key={index} value={state}>
                                {state}
                            </option>
                            ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg className="w-5 h-5 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
            ),
            buttonText: "Done"
        },
        {
            Number: 22,
            type: "form",
            Content: (
                <div className="w-full flex flex-col items-center px-4 sm:px-8 md:px-32 lg:px-64">
                    <p className="font-poppins font-normal text-[24px] text-[#000000BF] text-center mb-4">
                        Our mission at BFT is to connect people with cultures far from their own. But let’s be clear: <span className="font-bold">your safety is non-negotiable on any of our trips.</span>
                    </p>
                    <p className="font-poppins font-normal text-[24px] text-[#000000BF] text-center mb-4">
                        Any <span className="font-bold">destination types that wouldn’t be safe or suitable for you?</span>
                    </p>
                    <div className="relative w-[250px]">
                        <select
                            value={selectedState}
                            onChange={handlestateSelectionChange}
                            className="w-full px-4 py-2 border border-2 border-[#000000B2] rounded-lg appearance-none bg-[#D9D9D966] font-poppins font-bold text-[#000000] text-[20px]"
                        >
                            <option value="">Select</option>
                            {[
                            "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
                            "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
                            "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
                            "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
                            "Uttar Pradesh", "Uttarakhand", "West Bengal"
                            ].map((state, index) => (
                            <option key={index} value={state}>
                                {state}
                            </option>
                            ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg className="w-5 h-5 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
            ),
            buttonText: "Done"
        },
        {
            Number: 23,
            type: "form",
            Content: (
                <div className='w-full sm:w-[90%] md:w-[75%] lg:w-[50%] flex flex-col items-start px-4'>
                    <div className="w-full mb-8">
                        <p className='font-poppins font-normal text-[20px] text-[#000000BF] text-left mb-4'>
                            Where have you already been that you’d <span className="font-bold">prefer not to revisit?</span>
                        </p>
                        <input
                            type="text"
                            value={avoidDestination}
                            onChange={handleAvoidDestinationChange}
                            placeholder="e.g. Paris, France"
                            className="w-full px-4 py-3 border border-2 border-[#000000B2] bg-[#D9D9D966] rounded-lg font-poppins font-normal text-[24px] text-[#000000]"
                        />
                    </div>
                </div>
            ),
            buttonText: "Next"
        },
        {
            Number: 24,
            type: "text",
            Content: (
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="text-center mr-8">
                        <p className="font-poppins font-bold text-[40px] text-[#A42828]">
                            Chapter 3: The Must-Knows
                        </p>
                    </div>
                    <img
                        src="/chapter-3.png"
                        alt="Chapter 3"
                        className="w-[249px] h-[241px] mt-4 mb-4"
                    />
                </div>
            ),
            buttonText: "Continue"
        },
        ...Array.from({ length: TOTAL_PAGES - 21 }, (_, i) => ({
            Number: i + 1,
            type: "text",
            Content: (
                <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-4 font-poppins">Page {i + 1}</h2>
                    <p className="text-lg text-gray-700 font-poppins">This is the content for page {i + 1}.</p>
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

    const validators = {
        2: isFormValid,
        20: isFormValid1,
        // add more: [pageIndex]: validationFunction
    };

    const currentValidator = validators[currentPageIndex];
    const isDisabled = currentValidator ? !currentValidator() : false;

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
                    // disabled={(currentPageIndex === 2 && !isFormValid) || (currentPageIndex === 21 && !isFormValid1())}
                    disabled={isDisabled}
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
