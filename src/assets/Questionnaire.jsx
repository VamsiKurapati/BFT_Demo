import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
import { gsap } from "gsap";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Country, State } from 'country-state-city';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import car from "/car.png";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const TOTAL_PAGES = 34;

export default function Questionnaire() {
    const carRef = useRef(null);
    const lineRef = useRef(null);
    const [lineWidth, setLineWidth] = useState(0);
    const navigate = useNavigate();

    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [favouriteDestination, setFavouriteDestination] = useState("");
    const [travelerCount, setTravelerCount] = useState("");
    const [customTravelerCount, setCustomTravelerCount] = useState("");
    const [firstName, setFirstName] = useState("");
    const [otherAllergyDetails, setOtherAllergyDetails] = useState("");
    const [avoidDestination, setAvoidDestination] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCountryCode, setSelectedCountryCode] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [stayingDuration, setStayingDuration] = useState("");
    const [airports, setAirports] = useState([]);
    const [selectedAirports, setSelectedAirports] = useState([]);
    // const [selectedAirports1, setSelectedAirports1] = useState([]);
    const [budget, setBudget] = useState("");
    const [phone, setPhone] = useState('');
    const [preferredStartDate, setPreferredStartDate] = useState("");

    const [checkboxValues, setCheckboxValues] = useState({
        awareOfNothing: false,
        unableToDoPhysicalActivities: false,
        pregnancy: false,
        fearOfHeights: false,
        cantSwim: false,
        seaSickness: false,
        claustrophobia: false,
        fearOfDogs: false,

        comfortableWithAll: false,
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
        
        unsafeFemale: false,
        hostilityLGBTQ: false,
        hostilityBlack: false,
        attitudeIslam: false,
        attitudeJewish: false,
        hostilityIndigenous: false,
        unsafeReligiousAttire: false,
        discriminatoryTrans: false,
        racialProfiling: false,

        // india: false,
        // otherCountry: false,
        
        sameAirports: false,
        anyAirports: false,

        // sameAirports1: false,
        // anyAirports1: false,

        fDtN: false,
        fDfN: false,
        sDfN: false,
        userChoice: false,
        
        preferredStartDate: false,
        completelyFlexible: false,
        
        eitherIsFine: false,
        exclusiveResidence: false,
        hotel: false,
        
        maxBudget: false,
        increaseBy5000: false,
        increaseBy7500: false,
        increaseBy10000: false,
        
        yesCurious: false,
        // notCurious: false,
        
        someoneIKnow: false,
        influencer: false,
        press: false,
        randomCustomer: false,
        paidAd: false,
        
        agree: false,
    });

    const groups = [
        {
            name: "0",
            titles: ["notInterested","openAndWilling","curious" , "excited", "superInterested"],
        },
        {
            name: "1",
            titles: ["notInterested1","openAndWilling1","curious1" , "excited1", "superInterested1"],
        },
        {
            name: "2",
            titles: ["notInterested2","openAndWilling2","curious2" , "excited2", "superInterested2"],
        },
        {
            name: "3",
            titles: ["notInterested3","openAndWilling3","curious3" , "excited3", "superInterested3"],
        },
        {
            name: "4",
            titles: ["notInterested4","openAndWilling4","curious4" , "excited4", "superInterested4"],
        },
        {
            name: "5",
            titles: ["notInterested5","openAndWilling5","curious5" , "excited5", "superInterested5"],
        },
        {
            name: "6",
            titles: ["notInterested6","openAndWilling6","curious6" , "excited6", "superInterested6"],
        },
        {
            name: "7",
            titles: ["qualityTime", "newDestination", "wellness", "specialOccasion"],
        },
        {
            name: "8",
            titles: ["totalChill", "mostlyRelaxed", "aBitOfBoth", "prettyActive", "nonStopAdventure"],
        },
        {
            name: "9",
            titles: ["surpriseMe", "coolerClimate", "bringOnTheSunshine"],
        },
        {
            name: "10",
            titles: ["yes", "openToAnywhere", "internationalTrip"],
        },
        {
            name: "11",
            titles: ["india, otherCountry"],
        },
        {
            name: "12",
            titles: ["sameAirports", "anyAirports"],
        },
        {
            name: "13",
            titles: ["sameAirports1", "anyAirports1"],
        },
        {
            name: "14",
            titles: ["fDtN", "fDfN", "sDfN","userChoice"],
        },
        {
            name: "15",
            titles: ["preferredStartDate", "completelyFlexible"],
            autoMove: false,
            autoMoveKey: "completelyFlexible",
        },
        {
            name: "16",
            titles: ["eitherIsFine", "exclusiveResidence", "hotel"],
        },
        {
            name: "17",
            titles: ["maxBudget", "increaseBy5000", "increaseBy7500", "increaseBy10000"],
        },
        // {
        //     name: "18",
        //     titles: ["yesCurious", "notCurious"],
        // },
        {
            name: "19",
            titles: ["someoneIKnow", "influencer", "press", "randomCustomer", "paidAd"],
        },
    ];

    const exclusiveGroups = [
        {
            name: "0",
            titles: [ "awareOfNothing", "unableToDoPhysicalActivities", "pregnancy", "fearOfHeights","cantSwim", "seaSickness", "claustrophobia", "fearOfDogs" ],
        },
        {
            name: "1",
            titles: [ "comfortableWithAll", "noNatureWalk", "noHiking", "noBikingSegway", "noBoatTrips", "noSwimmingSnorkeling", "noKayakingSUP", "noRafting", "noSurfing", "noScubaDiving", "noCanyoningCaving", "noParagliding", "noHorseCamelRiding", "noWineTasting", "noBreweryTour", "noSpaContact" ],
        },
        {
            name: "2",
            titles: [ "none", "vegeterian", "vegan", "noAlcohol", "otherAllergies", ],
        },
    ];

    const handleTravelerCountChange = (e) => {
        const value = e.target.value;
        setTravelerCount(value);
        // updateFormData({ travelerCount: Number(e.target.value) }); // Uncomment if you use form data globally
    };

    const handleCustomTravelerCountChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            const num = Number(value);
            if (num <= 0) {
                alert("Traveler count must be greater than 0.");
                return;
            }

            setCustomTravelerCount(num);
            // updateFormData({ travelerCount: Number(value) }); // Uncomment if you use form data globally
        } else {
            // If the input is not a valid number, you can handle it here (e.g., show an error message)
            console.error("Invalid input for traveler count");
            alert("Please enter a valid number for the traveler count.");
        }
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
        // updateFormData({ firstName: e.target.value }); // Uncomment if you use form data globally
    };

    const handleOtherAllergyDetailsChange = (e) => {
        setOtherAllergyDetails(e.target.value);
    }

    const handlefavouriteDestinationChange = (event) => {
        const favs = event.target.value;
        setFavouriteDestination(favs);
    }

    const handleAvoidDestinationChange = (event) => {
        const destination = event.target.value;
        setAvoidDestination(destination);
        // updateFormData({ avoidDestination }); // Uncomment if you use form data globally
    };

    const handleCountryChange = (event) => {
        const coun = countries.find(c=> c.name === event.target.value);
        setSelectedCountryCode(coun?.isoCode || '');
        setSelectedCountry(coun?.name || '');
    }

    const handleStateChange = (event) => {
        const stat = event.target.value;
        setSelectedState(stat);
    }

    const handlepreferredStartDateChange = (event) => {
        const date = event.target.value;
        console.log("Date:",date);
        setPreferredStartDate(date);
    }

    const handleNext = async () => {
        if (currentPageIndex < TOTAL_PAGES - 1) {
            setCurrentPageIndex(prev => prev + 1);
        } else {
            const success = await handleSave();
            if (success) {
                // console.log("Responses save successful...")
                setTimeout(() => {
                    navigate("/stay_tuned");
                }, 1500);
            } else {
            alert("Failed to save responses. Please try again.");
            }
        }
    };

    const handlePrev = () => {
        if (currentPageIndex > 0) {
            setCurrentPageIndex(prev => prev - 1);
        }
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;

        setCheckboxValues((prev) => {
            const newValues = { ...prev };

            // Check if it's in a single-select group
            const group = groups.find(g => g.titles.includes(name));
            if (group) {
                if (checked) {
                    group.titles.forEach(title => {
                        newValues[title] = title === name;
                    });
                    // If the group has an autoMoveKey, check if it should auto-move
                    if (group.autoMove && group.autoMoveKey && newValues[group.autoMoveKey]) {
                        // If the autoMoveKey is checked, move to the next page after a short delay
                        setTimeout(() => {handleNext()}, 300);
                    }
                } else {
                    newValues[name] = false;
                }
                return newValues;
            }

            // Check if it's in an exclusive group
            const exclusiveGroup = exclusiveGroups.find(g => g.titles.includes(name));
            if (exclusiveGroup) {
                const first = exclusiveGroup.titles[0];

                if (name === first && checked) {
                    // First option checked → uncheck all others
                    exclusiveGroup.titles.forEach(title => {
                        newValues[title] = title === first;
                    });
                    setTimeout(() => {handleNext()}, 300);
                } else if (name === first && !checked) {
                    // First option unchecked → just uncheck it
                    newValues[name] = false;
                } else {
                    // Other option checked → uncheck first
                    newValues[name] = checked;
                    newValues[first] = false;
                }
                return newValues;
            }

            // Not in any group → update normally
            return { ...prev, [name]: checked };
        });
    };

    const handleStayingDurationChange = (event) => {
        const val = event.target.value;
        setStayingDuration(val);
    }

    const handleBudgetChange = (e) => {
        const rawValue = e.target.value.replace(/,/g, '');
        if (!/^\d*$/.test(rawValue)) return; // block non-numeric input
        setBudget(Number(rawValue).toLocaleString('en-IN'));
    };

    const handleSetPhone = (val) => {
        setPhone(val);
    };

    const page3validator = () =>{
        return firstName.trim() !== "" && (travelerCount !== "" && (travelerCount !== "other" || customTravelerCount !== ""));
    }

    const page5validator = () => {
        return checkboxValues["awareOfNothing"] || checkboxValues["unableToDoPhysicalActivities"] || checkboxValues["pregnancy"] || checkboxValues["fearOfHeights"] || checkboxValues["cantSwim"] || checkboxValues["seaSickness"] || checkboxValues["claustrophobia"] || checkboxValues["fearOfDogs"];
    }

    const page6validator = () => {
        const keysToCheck = [
            "comfortableWithAll",
            "noNatureWalk",
            "noHiking",
            "noBikingSegway",
            "noBoatTrips",
            "noSwimmingSnorkeling",
            "noKayakingSUP",
            "noRafting",
            "noSurfing",
            "noScubaDiving",
            "noCanyoningCaving",
            "noParagliding",
            "noHorseCamelRiding",
            "noWineTasting",
            "noBreweryTour",
            "noSpaContact"
        ];
        return keysToCheck.some((key) => checkboxValues[key]);
    };

    const page7validator = () => {
        return checkboxValues["none"] || checkboxValues["vegeterian"] || checkboxValues["vegan"] || checkboxValues["noAlcohol"] || (checkboxValues["otherAllergies"] && otherAllergyDetails!=="");
    }

    const page8to14validator = (suffix) => {
        const keys = ["notInterested", "openAndWilling", "curious", "excited", "superInterested"];
        return () => {
            return keys.some(key => checkboxValues[`${key}${suffix}`]);
        };
    };

    const page16validator = () => {
        return checkboxValues["qualityTime"] || checkboxValues["newDestination"] || checkboxValues["wellness"] || checkboxValues["specialOccasion"];
    };

    const page17validator = () => {
        return checkboxValues["totalChill"] || checkboxValues["mostlyRelaxed"] || checkboxValues["aBitOfBoth"] || checkboxValues["prettyActive"] || checkboxValues["nonStopAdventure"];
    }

    const page18validator = () => {
        return checkboxValues["surpriseMe"] || checkboxValues["coolerClimate"] || checkboxValues["bringOnTheSunshine"];
    }

    const page19validator = () => {
        const keysToCheck = [
            "vibrantUrbanLife",
            "creativeArtsyVibes",
            "lushGreenLandscapes",
            "photogenic",
            "budgetFriendlyAdventures",
            "mountainous",
            "calmSereneEscapes",
            "eyeCatchingArchitecture",
            "sandyBeaches"
        ];

        const checkedCount = keysToCheck.reduce((count, key) => {
            return checkboxValues[key] ? count + 1 : count;
        }, 0);

        return checkedCount >= 2 && checkedCount <= 5;
    };

    const page20validator = () => {
        return checkboxValues["yes"] || checkboxValues["openToAnywhere"] || checkboxValues["internationalTrip"];
    }

    const page21validator = () => {
        return favouriteDestination!=="" && avoidDestination!=="";
    }

    const page24validator = () => {
        // return (checkboxValues["india"] || (checkboxValues["otherCountry"] && country!="")) && (selectedAirports!="") && (checkboxValues["sameAirports"] || checkboxValues["anyAirports"]);
        return (selectedCountry!="") && (selectedState!="") && (selectedAirports!="") && (checkboxValues["sameAirports"] || checkboxValues["anyAirports"]);
    }

    // const page25validator = () => {
    //     return (selectedState!="") && (selectedAirports1!="") && (checkboxValues["sameAirports1"] || checkboxValues["anyAirports1"]);
    // }

    const page25validator = () => {
        return checkboxValues["fDfN"] || checkboxValues["fDtN"] || checkboxValues["sDfN"] || ( checkboxValues["userChoice"] && stayingDuration!=="") ;
    }

    const page26validator = () => {
        return (checkboxValues["preferredStartDate"] && preferredStartDate!=="") || checkboxValues["completelyFlexible"];
    }

    const page27validator = () => {
        return checkboxValues["eitherIsFine"] || checkboxValues["exclusiveResidence"] || checkboxValues["hotel"];
    }

    const page28validator = () => {
        const numericBudget = Number(budget.replace(/,/g, ''));
        return numericBudget > 0;
    };

    const page29validator = () => {
        return checkboxValues["maxBudget"] || checkboxValues["increaseBy5000"] || checkboxValues["increaseBy7500"] || checkboxValues["increaseBy10000"];
    }

    const page31validator = (val) => {
        try {
            const phoneNumber = parsePhoneNumberFromString(`+${val}`);
            return (phoneNumber ? phoneNumber.isValid() : false);
        } catch (err) {
            return false;
        }
    }

    const page32validator = () => {
        // return checkboxValues["yesCurious"] || checkboxValues["notCurious"];
        return checkboxValues["yesCurious"];
    }

    const page33validator = () => {
        return checkboxValues["someoneIKnow"] || checkboxValues["influencer"] || checkboxValues["press"] || checkboxValues["randomCustomer"] || checkboxValues["paidAd"];
    }

    const page34validator = () => {
        return checkboxValues["agree"];
    }

    const handleSave = async () => {
        let finalTravelerCount = travelerCount;
        if (travelerCount === "other") {
            finalTravelerCount = customTravelerCount;
        }
        finalTravelerCount = Number(finalTravelerCount);

        try {
            const response = await fetch("https://bft-backend.vercel.app/api/data/saveData", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    travelerCount: finalTravelerCount,
                    firstName,
                    favouriteDestination,
                    avoidDestination,
                    stayingDuration,
                    otherAllergyDetails,
                    selectedAirports,
                    // selectedAirports1,
                    budget,
                    phone,
                    selectedCountry,
                    selectedState,
                    preferredStartDate,
                    ...checkboxValues,
                }),
            });

            if (response.ok) {
                alert("Saved successfully!");
                return true;
            } else {
                alert("Failed to save. Please try again.");
                return false;
            }
        } catch (error) {
            console.error("Save failed:", error);
            alert("Something went wrong while saving.");
            return false;
        }
    };

    const Pages = [
        {
            Number: 1,
            type: "text",
            Content: (
                <div className='w-full sm:w-[90%] md:w-[75%] lg:w-[60%] flex flex-col items-center'>
                    <h1 className='font-titan-one font-normal text-[36px] text-[#000000E5] text-center mb-4'>
                        Blind Fold Trips Questionnaire
                    </h1>
                    <p className='font-poppins font-normal text-[24px] text-[#000000BF] text-center mb-4'>
                        <span className="font-bold text-[#000000]">Welcome, explorer.</span> What you share here unlocks the journey meant just for you. Soon, the details will find their way to you.
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
                            <span className="font-titan-one text-[32px] text-[#000000BF]">01.</span>  Choose any airport across India to begin your trip.
                        </p>
                        <p className='font-poppins font-normal text-[24px] text-[#000000] text-left mb-4'>
                            <span className="font-titan-one text-[32px] text-[#000000BF]">02.</span>  Everyone is at least 10 years old with at least one person who is 18 or older.
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
                            <span className="font-titan-one font-normal text-[32px] text-[#000000BF]">01.</span> How many travelers are in your crew ? <span className="text-[#A32727]">*</span>
                        </h2>
                        <p className='font-poppins font-normal text-[20px] text-[#000000BF] text-left mb-4'>
                            If you're <span className="font-bold text-[#000000]">not sure, start with 1</span>. You can always add more people later—after receiving your Blind Fold Trip Proposal.
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
                                <option value="other">Other</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <svg className="w-5 h-5 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                        {travelerCount === "other" && (
                            <input
                                type="number"
                                min="1"
                                value={customTravelerCount}
                                onChange={handleCustomTravelerCountChange}
                                placeholder="Enter number of travelers"
                                className="w-full mt-3 px-4 py-2 border border-2 border-[#000000B2] bg-[#D9D9D966] rounded-lg font-poppins font-normal text-[24px] text-[#000000]"
                                required
                            />
                        )}
                    </div>
                    <div className="w-full mb-8">
                        <h2 className='font-poppins font-normal text-[24px] text-[#000000BF] text-left mb-4'>
                            <span className="font-titan-one text-[32px]">02.</span> Your <span className="font-bold text-[#000000]">first name</span>, please <span className="text-[#A32626]">*</span>
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
            buttonText: "Done"
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
                <div className="w-full sm:w-[90%] md:w-[75%] lg:w-[567px] flex flex-col items-center">
                    <p className="font-poppins font-normal text-[20px] text-[#000000BF] text-left mb-4">
                        With BFT, the world becomes your playground for adventure and self-discovery.<br /><br />
                        <span className="text-[24px]">We totally get that <span className="font-bold text-[#000000]">fears, phobias, or medical conditions</span> can affect your travel experience. Is there <span className="font-bold text-[#000000]">anything we should keep in mind? </span><span className="text-[#A32727]">*</span></span>
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

                        {!checkboxValues["awareOfNothing"] && (
                            <>
                            <div className="w-full h-[1px] bg-gray-300 my-2"></div>
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
                            </>
                        )}
                    </div>
                </div>
            ),
            buttonText: "Done",
            Heading: "Chapter 1: You & Your Getaway Style"
        },
        {
            Number: 6,
            type: "text",
            Content: (
                <div className="w-full sm:w-[90%] md:w-[75%] lg:w-[567px] flex flex-col items-center">
                    <p className="font-poppins font-normal text-[20px] text-[#000000BF] text-left mb-4">
                        Every BFT adventure is designed with beginners in mind and guided by seasoned experts. We’ll always factor in any fears, phobias, or medical conditions you’ve shared with us.<br /><br />
                        <span className="text-[24px]">We’d love to gently nudge you out of your comfort zone—but are there any <span className="font-bold text-[#000000]">activities that are a definite no for you? </span><span className="text-[#A32727]">*</span></span><br /><br />
                        If you’re unsure about an activity, don't say no to it!
                    </p>
                    <div className="flex flex-col items-start gap-4 text-[16px] sm:text-[20px] md:text-[24px] text-left font-poppins">
                        <label className="flex items-center text-left">
                            <input
                            type="checkbox"
                            name="comfortableWithAll"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.comfortableWithAll}
                            onChange={handleCheckboxChange}
                            />
                            Comfortable with them all
                        </label>

                        {!checkboxValues["comfortableWithAll"] && (
                            <>
                            <div className="w-full h-[1px] bg-gray-300 my-2"></div>
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
                            </>
                        )}
                    </div>
                </div>
            ),
            buttonText: "Done",
            Heading: "Chapter 1: You & Your Getaway Style"
        },
        {
            Number: 7,
            type: "text",
            Content: (
                <div className="w-full sm:w-[90%] md:w-[75%] lg:w-[567px] flex flex-col items-center">
                    <p className="font-poppins font-normal text-[24px] text-[#000000] text-left mb-4">
                        Do you follow <span className="font-bold text-[#000000]">any dietary preferences or restrictions</span> we should consider for foodie stops? <span className="text-[#A32727]">*</span>
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

                        {!checkboxValues.none && (
                            <>
                            <div className="w-full h-[1px] bg-gray-300 my-2"></div>
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

                            {checkboxValues.otherAllergies && (
                                <input
                                type="text"
                                name="otherAllergyDetails"
                                className="mt-2 p-2 mb-4 border rounded bg-[#D9D9D966]"
                                placeholder="Please specify"
                                value={otherAllergyDetails}
                                onChange={handleOtherAllergyDetailsChange}
                                />
                            )}
                            </>
                        )}
                    </div>
                </div>
            ),
            buttonText: "Done",
            Heading: "Chapter 1: You & Your Getaway Style"
        },
        {
            Number: 8,
            type: "text",
            Content: (
                <div className="w-full flex flex-col items-center">
                    <p className="font-poppins font-normal text-[24px] text-[#000000] text-left mr-12 md:mr-20 mb-4">
                        How much do you enjoy <span className="font-bold">outdoor adventures? </span><span className="text-[#A32727]">*</span>
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
            buttonText: "Done",
            Heading: "Chapter 1: You & Your Getaway Style"
        },
        {
            Number: 9,
            type: "text",
            Content: (
                <div className="w-full flex flex-col items-center">
                    <p className="font-poppins font-normal text-[24px] text-[#000000] text-left mr-14 md:mr-28 mb-4">
                        How do you feel about being <span className="font-bold">out in nature? </span><span className="text-[#A32727]">*</span>
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
            buttonText: "Done",
            Heading: "Chapter 1: You & Your Getaway Style"
        },
        {
            Number: 10,
            type: "text",
            Content: (
                <div className="w-full flex flex-col items-center">
                    <p className="font-poppins font-normal text-[24px] text-[#000000] text-left mr-14 md:mr-28 mb-4">
                        Strolling through <span className="font-bold">charming little towns—</span> love it or leave it? <span className="text-[#A32727]">*</span>
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
            buttonText: "Done",
            Heading: "Chapter 1: You & Your Getaway Style"
        },
        {
            Number: 11,
            type: "text",
            Content: (
                <div className="w-full flex flex-col items-center">
                    <p className="font-poppins font-normal text-[24px] text-[#000000] text-left mr-14 md:mr-28 mb-4">
                        Seeing <span className="font-bold">iconic landmarks—</span> must-do or pass? <span className="text-[#A32727]">*</span>
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
            buttonText: "Done",
            Heading: "Chapter 1: You & Your Getaway Style"
        },
        {
            Number: 12,
            type: "text",
            Content: (
                <div className="w-full flex flex-col items-center">
                    <p className="font-poppins font-normal text-[24px] text-[#000000] text-left mr-14 md:mr-28 mb-4">
                        Exploring <span className="font-bold">places rich in history—</span> your thing? <span className="text-[#A32727]">*</span>
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
            buttonText: "Done",
            Heading: "Chapter 1: You & Your Getaway Style"
        },
        {
            Number: 13,
            type: "text",
            Content: (
                <div className="w-full flex flex-col items-center">
                    <p className="font-poppins font-normal text-[24px] text-[#000000] text-left mr-12 sm:mr-14 md:mr-48 mb-4">
                        <span className="font-bold">Art and museum </span> visits—yay or nay? <span className="text-[#A32727]">*</span>
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
            buttonText: "Done",
            Heading: "Chapter 1: You & Your Getaway Style"
        },
        {
            Number: 14,
            type: "text",
            Content: (
                <div className="w-full flex flex-col items-center">
                    <p className="font-poppins font-normal text-[24px] text-[#000000] text-left mr-14 md:mr-28 mb-4">
                        Sampling <span className="font-bold">delicious local food—</span> how excited are you? <span className="text-[#A32727]">*</span>
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
            buttonText: "Done",
            Heading: "Chapter 1: You & Your Getaway Style"
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
                        What’s the <span className="font-bold">#1 thing you’re hoping for from this trip?</span> <span className="text-[#A32727]">*</span>
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
            buttonText: "Done",
            Heading: "Chapter 2: Your Mystery Trip Begins"
        },
        {
            Number: 17,
            type: "text",
            Content: (
                <div className="w-full flex flex-col items-start px-4 sm:px-8 md:px-32 lg:px-64">
                    <p className="font-poppins font-normal text-[24px] text-[#000000] text-center mb-4">
                       How <span className="font-bold text-[#000000]">active or chill</span> do you want your <span className="font-bold">trip</span> to be? <span className="text-[#A32727]">*</span>
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
            buttonText: "Done",
            Heading: "Chapter 2: Your Mystery Trip Begins"
        },
        {
            Number: 18,
            type: "text",
            Content: (
                <div className="w-full flex flex-col items-start px-4 sm:px-8 md:px-32 lg:px-64">
                    <div className="flex flex-col items-start mb-4">
                        <p className="font-poppins font-normal text-[24px] text-[#000000] text-left">
                        Got a <span className="text-[#000000] font-bold">temperature preference</span> for your trip? <span className="text-[#A32727]">*</span>
                        </p>
                        <p className="text-[#000000BF] mt-2 text-[20px]">Warm = Above 15°C / 60°F</p>
                        <p className="text-[#000000BF] mt-2 text-[20px]">Cool = Below 15°C / 60°F</p>
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
            buttonText: "Done",
            Heading: "Chapter 2: Your Mystery Trip Begins"
        },
        {
            Number: 19,
            type: "text",
            Content: (
                <div className="w-full flex flex-col items-start px-4 sm:px-8 md:px-32 lg:px-64">
                    <p className="font-poppins font-normal text-[24px] text-[#000000] text-left mb-4">
                        What kind of <span className="font-bold">vibes</span> are you hoping for in your surprise destination? <span className="text-[#A32727]">*</span><br /> <br/>
                        <span className="text-[#000000BF] text-[20px]">Make between 2 and 5 choices.</span>
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
            buttonText: "Done",
            Heading: "Chapter 2: Your Mystery Trip Begins"
        },
        {
            Number: 20,
            type: "text",
            Content: (
                <div className="w-full flex flex-col items-start px-4 sm:px-8 md:px-32 lg:px-64">
                    <p className="font-poppins font-normal text-[24px] text-[#000000] text-left mb-4">
                        Is there a <span className="font-bold">dream destination or state on your list</span> you'd love to land? <span className="text-[#A32727]">*</span>
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
            buttonText: "Done",
            Heading: "Chapter 2: Your Mystery Trip Begins"
        },
        {
            Number: 21,
            type: "form",
            Content: (
                <div className="w-full flex flex-col items-center px-4 sm:px-8 md:px-32 lg:px-64">
                    <p className="font-poppins font-normal text-[24px] text-[#000000] text-center mb-4">
                        Which <span className="font-bold">Places / Countries</span> are <span className="font-bold">on your bucket list? </span><span className="text-[#A32727]">*</span> 
                    </p>
                    <input
                        type="text"
                        value={favouriteDestination}
                        onChange={handlefavouriteDestinationChange}
                        placeholder="e.g. Paris, France"
                        className="w-[90%] md:w-[50%] px-4 py-3 border border-2 border-[#000000B2] bg-[#D9D9D966] rounded-lg font-poppins font-normal text-[24px] text-[#000000]"
                    />
                    <p className='font-poppins font-normal text-[20px] text-[#000000] text-left mt-8 mb-4'>
                        Where have you already been that you’d <span className="font-bold">prefer not to revisit? </span><span className="text-[#A32727]">*</span>
                    </p>
                    <input
                        type="text"
                        value={avoidDestination}
                        onChange={handleAvoidDestinationChange}
                        placeholder="e.g. Paris, France"
                        className="w-[90%] md:w-[50%] px-4 py-3 border border-2 border-[#000000B2] bg-[#D9D9D966] rounded-lg font-poppins font-normal text-[24px] text-[#000000]"
                    />
                </div>
            ),
            buttonText: "Done",
            Heading: "Chapter 2: Your Mystery Trip Begins"
        },
        {
            Number: 22,
            type: "form",
            Content: (
                <div className="w-full flex flex-col items-center px-4 sm:px-8 md:px-32 lg:px-64">
                    <p className="font-poppins font-normal text-[20px] text-[#000000BF] text-center mb-4">
                        Our mission at BFT is to connect people with cultures far from their own. But let’s be clear: <span className="font-bold">your safety is non-negotiable on any of our trips.</span>
                    </p>
                    <p className="font-poppins font-normal text-[24px] text-[#000000] text-center mb-4">
                        Any <span className="font-bold">destination types that wouldn’t be safe or suitable for you? </span><span className="text-[#A32727]">*</span>
                    </p>
                    <div className="flex flex-col items-start gap-4 text-[16px] mb-4 sm:text-[20px] md:text-[24px] text-left font-normal font-poppins">
                        <label className="flex items-center text-left">
                        <input
                            type="checkbox"
                            name="unsafeFemale"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.unsafeFemale}
                            onChange={handleCheckboxChange}
                        />
                            Considered unsafe for solo female travellers
                        </label>

                        <label className="flex items-center text-left">
                        <input
                            type="checkbox"
                            name="hostilityLGBTQ"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.hostilityLGBTQ}
                            onChange={handleCheckboxChange}
                        />
                            Regular instances of hostility towards the LGBTQ community
                        </label>

                        <label className="flex items-center text-left">
                        <input
                            type="checkbox"
                            name="hostilityBlack"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.hostilityBlack}
                            onChange={handleCheckboxChange}
                        />
                            Regular instances of hostility towards the Black community
                        </label>

                        <label className="flex items-center text-left">
                        <input
                            type="checkbox"
                            name="attitudeIslam"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.attitudeIslam}
                            onChange={handleCheckboxChange}
                        />
                            Unfavourable attitude towards followers of Islam
                        </label>

                        <label className="flex items-center text-left">
                        <input
                            type="checkbox"
                            name="attitudeJewish"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.attitudeJewish}
                            onChange={handleCheckboxChange}
                        />
                            Unfavourable attitude towards people of Jewish faith
                        </label>

                        <label className="flex items-center text-left">
                        <input
                            type="checkbox"
                            name="hostilityIndigenous"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.hostilityIndigenous}
                            onChange={handleCheckboxChange}
                        />
                            Regular instances of hostility towards Indigenous communities
                        </label>

                        <label className="flex items-center text-left">
                        <input
                            type="checkbox"
                            name="unsafeReligiousAttire"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.unsafeReligiousAttire}
                            onChange={handleCheckboxChange}
                        />
                            Considered unsafe for people with visible religious attire
                        </label>

                        <label className="flex items-center text-left">
                        <input
                            type="checkbox"
                            name="discriminatoryTrans"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.discriminatoryTrans}
                            onChange={handleCheckboxChange}
                        />
                            Discriminatory laws or policies against transgender individuals
                        </label>

                        <label className="flex items-center text-left">
                        <input
                            type="checkbox"
                            name="racialProfiling"
                            className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                            checked={checkboxValues.racialProfiling}
                            onChange={handleCheckboxChange}
                        />
                            Known for racial profiling by law enforcement
                        </label>
                    </div>
                </div>
            ),
            buttonText: "Done",
            Heading: "Chapter 2: Your Mystery Trip Begins"
        },
        {
            Number: 23,
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
        {
            Number: 24,
            type: "text",
            Content: (
                <div className="w-full sm:w-[90%] md:w-[75%] lg:w-[50%] flex flex-col items-center">
                    <div className="w-full mb-8">
                        <p className='font-poppins font-bold text-[24px] text-[#000000] text-left mb-4'>
                            <span className="font-normal">Which</span> Country will you be flying out from ? <span className="text-[#A32727]">*</span>
                        </p>

                        {/* <div className="flex flex-col items-start gap-4 text-[16px] sm:text-[20px] md:text-[24px] text-left font-normal font-poppins mb-8">
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="india"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.india}
                                onChange={handleCheckboxChange}
                                />
                                India
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="otherCountry"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.otherCountry}
                                onChange={handleCheckboxChange}
                                />
                                Other Country
                            </label>
                            
                            {checkboxValues["otherCountry"] && (
                                <input
                                    type="text"
                                    value={country}
                                    onChange={handleCountryChange}
                                    placeholder="Name of the Country"
                                    className="w-full px-4 py-3 border border-2 border-[#000000B2] bg-[#D9D9D966] rounded-lg font-poppins font-normal text-[12px] sm:text-[16px] md:text-[24px] text-[#000000]"
                                />
                            )}

                            
                        </div> */}
                        {/* <select
                            value={selectedCountry}
                            onChange={handleCountryChange}
                            className="mt-2 w-full sm:w-[436px] h-[50px] px-4 py-3 border border-[#000000B2] bg-[#D9D9D966] rounded-lg font-poppins font-normal text-[12px] sm:text-[16px] md:text-[24px] text-[#000000]"
                            >
                            <option value="">Select Country</option>
                            {countries.map((country) => (
                                <option key={country.isoCode} value={country.name}>
                                {country.name}
                                </option>
                            ))}
                        </select> */}

                        <Select
                            options={countries.map((country) => ({
                                value: country.name,
                                label: country.name,
                            }))}
                            value={
                                selectedCountry
                                ? { value: selectedCountry, label: selectedCountry }
                                : null
                            }
                            onChange={(selectedOption) =>
                                handleCountryChange({ target: { value: selectedOption?.value || '' } })
                            }
                            placeholder="Select Country"
                            className="w-full sm:w-[436px] text-left font-poppins"
                            styles={{
                                control: (base) => ({
                                ...base,
                                height: 'auto',
                                minHeight: '50px',
                                backgroundColor: '#D9D9D966',
                                border: '2px solid #000000B2',
                                borderRadius: '8px',
                                fontSize: '24px',
                                fontFamily: 'poppins',
                                }),
                                placeholder: (base) => ({
                                ...base,
                                color: '#000000BF',
                                fontSize: '24px',
                                fontFamily: 'poppins',
                                }),
                                singleValue: (base) => ({
                                ...base,
                                color: '#000000',
                                fontFamily: 'poppins',
                                fontSize: '24px',
                                }),
                                menu: (base) => ({
                                ...base,
                                fontFamily: 'poppins',
                                fontSize: '20px',
                                }),
                                option: (base, state) => ({
                                ...base,
                                backgroundColor: state.isFocused ? '#CCCCCC' : 'white',
                                color: '#000000',
                                cursor: 'pointer',
                                fontFamily: 'poppins',
                                }),
                            }}
                        />

                        <p className='font-poppins font-bold text-[24px] text-[#000000] text-left MT-8 mb-4'>
                            <span className="font-normal">Which</span> State will you be flying out from ? <span className="text-[#A32727]">*</span>
                        </p>

                        <Select
                            options={states.map((state) => ({
                                value: state.name,
                                label: state.name,
                            }))}
                            value={
                                selectedState
                                ? { value: selectedState, label: selectedState }
                                : null
                            }
                            onChange={(selectedOption) =>
                                handleStateChange({ target: { value: selectedOption?.value || '' } })
                            }
                            placeholder="Select State"
                            className="w-full sm:w-[436px] text-left font-poppins mt-2"
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    height: 'auto',
                                    minHeight: '50px',
                                    backgroundColor: '#D9D9D966',
                                    border: '2px solid #000000B2',
                                    borderRadius: '8px',
                                    fontSize: '24px',
                                    fontFamily: 'poppins',
                                }),
                                placeholder: (base) => ({
                                    ...base,
                                    color: '#000000BF',
                                    fontSize: '24px',
                                    fontFamily: 'poppins',
                                }),
                                singleValue: (base) => ({
                                    ...base,
                                    color: '#000000',
                                    fontFamily: 'poppins',
                                    fontSize: '24px',
                                }),
                                menu: (base) => ({
                                    ...base,
                                    fontFamily: 'poppins',
                                    fontSize: '20px',
                                }),
                                option: (base, state) => ({
                                    ...base,
                                    backgroundColor: state.isFocused ? '#CCCCCC' : 'white',
                                    color: '#000000',
                                    cursor: 'pointer',
                                    fontFamily: 'poppins',
                                }),
                            }}
                        />

                        <p className='font-poppins font-bold text-[24px] text-[#000000] text-left mt-8 mb-4'>
                            <span className="font-normal">Which</span> airports can you depart from ? <span className="text-[#A32727]">*</span>
                        </p>

                        <Select
                            isMulti
                            options={airports}
                            value={selectedAirports}
                            onChange={setSelectedAirports}
                            className="w-full sm:w-[436px] text-left font-poppins"
                            placeholder="Select"
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    height: 'auto',
                                    minHeight: '50px',
                                    backgroundColor: '#D9D9D966',
                                    border: '2px solid #000000B2',
                                    borderRadius: '8px',
                                    fontSize: '24px',
                                    fontFamily: 'poppins',
                                    overflowX: 'auto', // this won't help unless container is changed
                                }),
                                valueContainer: (base) => ({
                                    ...base,
                                    display: 'flex',
                                    flexWrap: 'nowrap', // key line
                                    overflowX: 'auto',
                                    scrollbarWidth: 'thin',
                                    maxWidth: '100%',
                                }),
                                multiValue: (base) => ({
                                    ...base,
                                    backgroundColor: '#CCCCCC',
                                    borderRadius: '0.25rem',
                                    fontSize: '24px',
                                    marginRight: '4px',
                                    whiteSpace: 'nowrap',
                                }),
                                multiValueLabel: (base) => ({
                                    ...base,
                                    color: '#000000BF',
                                    fontFamily: 'poppins',
                                }),
                                placeholder: (base) => ({
                                    ...base,
                                    color: '#000000BF',
                                    fontSize: '24px',
                                    fontFamily: 'poppins',
                                }),
                            }}
                        />

                        <p className='font-poppins font-normal text-[24px] text-[#000000] text-left mb-4 mt-8'>
                            Do you need to <span className="font-bold">fly in and out of the same airport</span> (e.g., if you're leaving your car there)? <span className="text-[#A32727]">*</span>
                        </p>
                        
                        <div className="flex flex-col items-start gap-4 text-[16px] sm:text-[20px] md:text-[24px] text-left font-normal font-poppins">
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="sameAirports"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.sameAirports}
                                onChange={handleCheckboxChange}
                                />
                                Yes
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="anyAirports"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.anyAirports}
                                onChange={handleCheckboxChange}
                                />
                                No, I’m open to anywhere
                            </label>
                        </div>
                    </div>
                </div>
            ),
            buttonText: "Done",
            Heading: "Chapter 3: The Must-Knows"
        },
        // {
        //     Number: 25,
        //     type: "text",
        //     Content: (
        //         <div className="w-full sm:w-[90%] md:w-[75%] lg:w-[50%] flex flex-col items-center">
        //             <div className="w-full mb-8">
        //                 <p className='font-poppins font-bold text-[24px] text-[#000000] text-left mb-4'>
        //                     <span className="font-normal">Which</span> State will you be flying out from ? <span className="text-[#A32727]">*</span>
        //                 </p>

        //                 {/* <div className="flex flex-col items-start gap-4 text-[16px] sm:text-[20px] md:text-[24px] text-left font-normal font-poppins mb-8">
        //                     <label className="flex items-center text-left">
        //                         <input
        //                         type="checkbox"
        //                         name="india"
        //                         className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
        //                         checked={checkboxValues.india}
        //                         onChange={handleCheckboxChange}
        //                         />
        //                         India
        //                     </label>
        //                     <label className="flex items-center text-left">
        //                         <input
        //                         type="checkbox"
        //                         name="otherCountry"
        //                         className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
        //                         checked={checkboxValues.otherCountry}
        //                         onChange={handleCheckboxChange}
        //                         />
        //                         Other Country
        //                     </label>
                            
        //                     {checkboxValues["otherCountry"] && (
        //                         <input
        //                             type="text"
        //                             value={country}
        //                             onChange={handleCountryChange}
        //                             placeholder="Name of the Country"
        //                             className="w-full px-4 py-3 border border-2 border-[#000000B2] bg-[#D9D9D966] rounded-lg font-poppins font-normal text-[12px] sm:text-[16px] md:text-[24px] text-[#000000]"
        //                         />
        //                     )}

                            
        //                 </div> */}
        //                 {/* <select
        //                     value={selectedState}
        //                     onChange={handleStateChange}
        //                     className="mt-2 w-full sm:w-[436px] h-[50px] px-4 py-3 border border-[#000000B2] bg-[#D9D9D966] rounded-lg font-poppins font-normal text-[12px] sm:text-[16px] md:text-[24px] text-[#000000]"
        //                     >
        //                     <option value="">Select State</option>
        //                     {states.map((state) => (
        //                         <option key={state.isoCode} value={state.name}>
        //                         {state.name}
        //                         </option>
        //                     ))}
        //                 </select> */}

        //                 <Select
        //                     options={states.map((state) => ({
        //                         value: state.name,
        //                         label: state.name,
        //                     }))}
        //                     value={
        //                         selectedState
        //                         ? { value: selectedState, label: selectedState }
        //                         : null
        //                     }
        //                     onChange={(selectedOption) =>
        //                         handleStateChange({ target: { value: selectedOption?.value || '' } })
        //                     }
        //                     placeholder="Select State"
        //                     className="w-full sm:w-[436px] text-left font-poppins mt-2"
        //                     styles={{
        //                         control: (base) => ({
        //                             ...base,
        //                             height: 'auto',
        //                             minHeight: '50px',
        //                             backgroundColor: '#D9D9D966',
        //                             border: '2px solid #000000B2',
        //                             borderRadius: '8px',
        //                             fontSize: '24px',
        //                             fontFamily: 'poppins',
        //                         }),
        //                         placeholder: (base) => ({
        //                             ...base,
        //                             color: '#000000BF',
        //                             fontSize: '24px',
        //                             fontFamily: 'poppins',
        //                         }),
        //                         singleValue: (base) => ({
        //                             ...base,
        //                             color: '#000000',
        //                             fontFamily: 'poppins',
        //                             fontSize: '24px',
        //                         }),
        //                         menu: (base) => ({
        //                             ...base,
        //                             fontFamily: 'poppins',
        //                             fontSize: '20px',
        //                         }),
        //                         option: (base, state) => ({
        //                             ...base,
        //                             backgroundColor: state.isFocused ? '#CCCCCC' : 'white',
        //                             color: '#000000',
        //                             cursor: 'pointer',
        //                             fontFamily: 'poppins',
        //                         }),
        //                     }}
        //                 />

        //                 <p className='font-poppins font-bold text-[24px] text-[#000000] text-left mt-8 mb-4'>
        //                     <span className="font-normal">Which</span> airports can you depart from ? <span className="text-[#A32727]">*</span>
        //                 </p>

        //                 <Select
        //                     isMulti
        //                     options={airports}
        //                     value={selectedAirports1}
        //                     onChange={setSelectedAirports1}
        //                     className="w-full sm:w-[436px] text-left font-poppins"
        //                     placeholder="Select"
        //                     styles={{
        //                         control: (base) => ({
        //                             ...base,
        //                             height: 'auto',
        //                             minHeight: '50px',
        //                             backgroundColor: '#D9D9D966',
        //                             border: '2px solid #000000B2',
        //                             borderRadius: '8px',
        //                             fontSize: '24px',
        //                             fontFamily: 'poppins',
        //                             overflowX: 'auto', // this won't help unless container is changed
        //                         }),
        //                         valueContainer: (base) => ({
        //                             ...base,
        //                             display: 'flex',
        //                             flexWrap: 'nowrap', // key line
        //                             overflowX: 'auto',
        //                             scrollbarWidth: 'thin',
        //                             maxWidth: '100%',
        //                         }),
        //                         multiValue: (base) => ({
        //                             ...base,
        //                             backgroundColor: '#CCCCCC',
        //                             borderRadius: '0.25rem',
        //                             fontSize: '24px',
        //                             marginRight: '4px',
        //                             whiteSpace: 'nowrap',
        //                         }),
        //                         multiValueLabel: (base) => ({
        //                             ...base,
        //                             color: '#000000BF',
        //                             fontFamily: 'poppins',
        //                         }),
        //                         placeholder: (base) => ({
        //                             ...base,
        //                             color: '#000000BF',
        //                             fontSize: '24px',
        //                             fontFamily: 'poppins',
        //                         }),
        //                     }}
        //                 />

        //                 <p className='font-poppins font-normal text-[24px] text-[#000000] text-left mb-4 mt-8'>
        //                     Do you need to <span className="font-bold">fly in and out of the same airport</span> (e.g., if you're leaving your car there)? <span className="text-[#A32727]">*</span>
        //                 </p>
                        
        //                 <div className="flex flex-col items-start gap-4 text-[16px] sm:text-[20px] md:text-[24px] text-left font-normal font-poppins">
        //                     <label className="flex items-center text-left">
        //                         <input
        //                         type="checkbox"
        //                         name="sameAirports1"
        //                         className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
        //                         checked={checkboxValues.sameAirports1}
        //                         onChange={handleCheckboxChange}
        //                         />
        //                         Yes
        //                     </label>
        //                     <label className="flex items-center text-left">
        //                         <input
        //                         type="checkbox"
        //                         name="anyAirports1"
        //                         className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
        //                         checked={checkboxValues.anyAirports1}
        //                         onChange={handleCheckboxChange}
        //                         />
        //                         No, I’m open to anywhere
        //                     </label>
        //                 </div>
        //             </div>
        //         </div>
        //     ),
        //     buttonText: "Done",
        //     Heading: "Chapter 3: The Must-Knows"
        // },
        {
            Number: 25,
            type: "text",
            Content: (
                <div className='w-full sm:w-[90%] md:w-[75%] lg:w-[50%] flex flex-col items-start px-4'>
                    <div className="w-full mb-8">
                        <p className='font-poppins font-bold text-[24px] text-[#000000] text-left mb-4'>
                            How long would you like to be away for ? <span className="text-[#A32727]">*</span>
                        </p>
                        <div className="flex flex-col items-start gap-4 text-[16px] sm:text-[20px] md:text-[24px] text-left font-normal font-poppins">
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="fDtN"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.fDtN}
                                onChange={handleCheckboxChange}
                                />
                                4 Days / 3 Nights
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="fDfN"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.fDfN}
                                onChange={handleCheckboxChange}
                                />
                                5 Days / 4 Nights
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="sDfN"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.sDfN}
                                onChange={handleCheckboxChange}
                                />
                                7 Days / 5 Nights
                            </label>
                            <label className="flex items-center text-left mb-2">
                                <input
                                type="checkbox"
                                name="userChoice"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.userChoice}
                                onChange={handleCheckboxChange}
                                />
                                Others
                            </label>
                            {checkboxValues["userChoice"] && (
                                <input
                                    type="text"
                                    value={stayingDuration}
                                    onChange={handleStayingDurationChange}
                                    placeholder="Enter No.of Day and Nights"
                                    className="w-full px-4 py-3 border border-2 border-[#000000B2] bg-[#D9D9D966] rounded-lg font-poppins font-normal text-[12px] sm:text-[16px] md:text-[24px] text-[#000000]"
                                />
                            )}
                        </div>
                    </div>
                </div>
            ),
            buttonText: "Done",
            Heading: "Chapter 3: The Must-Knows"
        },
        {
            Number: 26,
            type: "text",
            Content: (
                <div className='w-full sm:w-[90%] md:w-[75%] lg:w-[50%] flex flex-col items-start px-4'>
                    <div className="w-full mb-8">
                        <p className='font-poppins font-bold text-[24px] text-[#000000] text-left mb-4'>
                            Thinking of your trip dates, which of these is true? <span className="text-[#A32727]">*</span>
                        </p>
                        <div className="flex flex-col items-start gap-4 text-[16px] sm:text-[20px] md:text-[24px] text-left font-normal font-poppins">
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="preferredStartDate"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.preferredStartDate}
                                onChange={handleCheckboxChange}
                                />
                                I have a preferred start date, but can be flexible by +/- 1 day
                            </label>
                            {checkboxValues.preferredStartDate && (
                                <div className="pl-8">
                                    <p className="font-poppins font-normal text-[#000000] text-[16px] sm:text-[20px] md:text-[24px] mb-2">
                                        What's your <span className="font-bold">preferred start date ? <span className="text-[#A32727]">*</span></span>
                                    </p>
                                    <input
                                        type="date"
                                        name="preferredStartDateValue"
                                        value={preferredStartDate || ""}
                                        onChange={handlepreferredStartDateChange}
                                        className="border border-2 border-[#000000B2] bg-[#D9D9D966] rounded-lg px-4 py-2 text-black"
                                        min={new Date(Date.now() + 86400000).toISOString().split("T")[0]} // Tomorrow's date
                                    />
                                </div>
                            )}
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="completelyFlexible"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.completelyFlexible}
                                onChange={handleCheckboxChange}
                                />
                                I'm completely flexible and want to go on the best value dates
                            </label>
                        </div>
                    </div>
                </div>
            ),
            buttonText: "Done",
            Heading: "Chapter 3: The Must-Knows"
        },
        {
            Number: 27,
            type: "text",
            Content: (
                <div className='w-full sm:w-[90%] md:w-[75%] lg:w-[50%] flex flex-col items-start px-4'>
                    <div className="w-full mb-8">
                        <p className='font-poppins font-bold text-[24px] text-[#000000] text-left mb-4'>
                            <span className="font-normal">Would you rather</span> stay in a private apartment or a hotel ? <span className="text-[#A32727]">*</span>
                        </p>
                        <div className="font-poppins font-normal text-[20px] text-[#000000BF] text-left mb-4">
                            <p>
                                Stay your way!<br /><br />
                                Whether it’s a snug apartment with your own chill zone and kitchenette, or a comfy hotel with friendly reception and daily housekeeping—we’ve got you covered.<br /><br />
                            </p>
                            <p>
                                Wherever you land, expect:
                            </p>
                            <ul className="ml-5 list-disc pl-5">
                                <li>Prime locations close to the action</li>
                                <li>Sparkling clean, cozy, and totally safe</li>
                                <li>Your own private space (yes, with your own bathroom!)</li>
                                <li>Wi-Fi, towels, and toiletries—no need to pack ‘em</li>
                                <li>Top-rated 3-star spots (fancy an upgrade? 4-star+ awaits!)</li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-start gap-4 text-[16px] sm:text-[20px] md:text-[24px] text-left font-normal font-poppins">
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="eitherIsFine"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.eitherIsFine}
                                onChange={handleCheckboxChange}
                                />
                                Either is fine
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="exclusiveResidence"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.exclusiveResidence}
                                onChange={handleCheckboxChange}
                                />
                                Exclusive residence
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="hotel"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.hotel}
                                onChange={handleCheckboxChange}
                                />
                                Hotel
                            </label>
                        </div>
                    </div>
                </div>
            ),
            buttonText: "Done",
            Heading: "Chapter 3: The Must-Knows"
        },
        {
            Number: 28,
            type: "text",
            Content: (
                <div className='w-full sm:w-[90%] md:w-[75%] lg:w-[50%] flex flex-col items-start px-4'>
                    <div className="w-full mb-8">
                        <p className='font-poppins font-bold text-[24px] text-[#000000] text-left mb-4'>
                            <span className="font-normal">What’s</span> your total budget for a 7-day trip ? <span className="text-[#A32727]">*</span>
                        </p>
                        <div className="font-poppins font-normal text-[20px] text-[#000000BF] text-left mb-4">
                            <p>
                                What's Included in Your Budget:
                            </p>
                            <ul className="ml-5 list-disc pl-5 mt-1 mb-4">
                                <li>Round-trip flights (with 2 carry-on bags)</li>
                                <li>Curated stays for 4 nights</li>
                                <li>Unique, authentic experiences)</li>
                                <li>Internal travel within the destination (if needed)</li>
                                <li>Full travel protection</li>
                            </ul>
                            <p>
                                Most solo travellers set a budget of ₹88,000 for a 5-day trip, with a minimum starting at ₹78,000.<br /><br />
                                If we find the perfect experience for less, we’ll automatically adjust your budget down—yes, really!<br /><br />
                                You can lock in your surprise trip with a flexible deposit, and pay the rest whenever you’re ready—just make sure it's done at least 21 days before your trip.
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-4 text-[16px] sm:text-[20px] md:text-[24px] text-left font-normal font-poppins">
                            <div className="relative w-full">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[24px] text-[#000000] font-poppins">₹</span>
                                <input
                                    type="text"
                                    value={budget}
                                    onChange={handleBudgetChange}
                                    placeholder="90,000"
                                    className="w-full pl-10 pr-4 py-3 border-2 border-[#000000B2] bg-[#D9D9D966] rounded-lg font-poppins font-normal text-[24px] text-[#000000]"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ),
            buttonText: "Done",
            Heading: "Chapter 3: The Must-Knows"
        },
        {
            Number: 29,
            type: "text",
            Content: (
                <div className='w-full sm:w-[90%] md:w-[75%] lg:w-[50%] flex flex-col items-start px-4'>
                    <div className="w-full mb-8">
                        <p className='font-poppins font-normal text-[24px] text-[#000000] text-left mb-4'>
                            We'll do our best to budget your trip to this amount, but <span className="font-bold">would you be willing to increase it ? </span><span className="text-[#A32727]">*</span>
                        </p>
                        <p className="font-poppins font-normal text-left mb-4 text-[20px] text-[#000000BF]">
                            This is in case flights to your best destination are more expensive than usual.
                        </p>
                        <div className="flex flex-col items-start gap-4 text-[16px] sm:text-[20px] md:text-[24px] text-left font-normal font-poppins">
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="maxBudget"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.maxBudget}
                                onChange={handleCheckboxChange}
                                />
                                Nope, that's my max budget
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="increaseBy5000"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.increaseBy5000}
                                onChange={handleCheckboxChange}
                                />
                                Yes, increase it by ₹5000
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="increaseBy7500"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.increaseBy7500}
                                onChange={handleCheckboxChange}
                                />
                                Yes, increase it by ₹7500
                            </label>
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="increaseBy10000"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.increaseBy10000}
                                onChange={handleCheckboxChange}
                                />
                                Yes, increase it by ₹10000
                            </label>
                        </div>
                    </div>
                </div>
            ),
            buttonText: "Done",
            Heading: "Chapter 3: The Must-Knows"
        },
        {
            Number: 30,
            type: "text",
            Content: (
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="text-center mr-8">
                        <p className="font-poppins font-bold text-[40px] text-[#A42828]">
                            Final Touch: You!
                        </p>
                    </div>
                    <img
                        src="/final-touch.png"
                        alt="Final Touch"
                        className="w-[249px] h-[241px] mt-4 mb-4"
                    />
                </div>
            ),
            buttonText: "Continue"
        },
        {
            Number: 31,
            type: "form",
            Content: (
                <div className="w-full sm:w-[90%] md:w-[75%] lg:w-[50%] flex flex-col items-start px-4">
                    <div className="w-full mb-8">
                        <p className="font-poppins font-normal text-[24px] text-[#000000] mb-2">
                            What's the <span className="font-bold">best number to reach you ? </span><span className="text-[#A32727]">*</span>
                        </p>
                        <p className="font-poppins font-normal text-[20px] text-[#000000BF] mb-8">
                            This is where we'll send your free Journey Proposal.
                        </p>

                        <div className="w-full flex justify-center">
                            <PhoneInput
                                country={'in'}
                                value={phone}
                                onChange={handleSetPhone}
                                inputProps={{
                                    name: 'phone',
                                    required: true,
                                    autoFocus: true,
                                    placeholder: "Enter your mobile number"
                                }}
                                inputStyle={{
                                    width: "100%",
                                    paddingLeft: "56px",
                                    height: "50px",
                                    backgroundColor: "#D9D9D966",
                                    fontSize: "20px",
                                    color: "#000000",
                                    border: "2px solid #000000B2",
                                    borderRadius: "10px",
                                    boxSizing: "border-box"
                                }}
                                containerStyle={{
                                    width: "436px"
                                }}
                                dropdownStyle={{
                                    maxHeight: "200px",
                                    overflowY: "auto",
                                    zIndex: 99999
                                }}
                                buttonStyle={{
                                    height: "50px",
                                    border: "2px solid #000000B2",
                                    borderRadius: "10px 0 0 10px",
                                    boxSizing: "border-box"
                                }}
                                containerClass="w-[436px] mx-auto"
                            />
                        </div>
                    </div>
                </div>
            ),
            buttonText: "Done",
            Heading: "Final Touch: You!"
        },
        {
            Number: 32,
            type: "text",
            Content: (
                <div className='w-full sm:w-[90%] md:w-[75%] lg:w-[50%] flex flex-col items-start px-4'>
                    <div className="w-full mb-8">
                        <p className='font-poppins font-normal text-[24px] text-[#000000] text-left mb-4'>
                            P.S. Want to <span className="font-bold">get Culture Curious and The Explorer in your inbox ? </span><span className="text-[#A32727]">*</span>
                        </p>
                        <p className="font-poppins font-normal text-left mb-4 text-[20px] text-[#000000BF]">
                            As a travel lover, you'll enjoy reading them! If not, you can easily  unsubscribe with one click. We'll never share your email either.
                        </p>
                        <div className="flex flex-col items-start gap-4 text-[16px] sm:text-[20px] md:text-[24px] text-left font-normal font-poppins">
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="yesCurious"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.yesCurious}
                                onChange={handleCheckboxChange}
                                />
                                I Agree
                            </label>
                            {/* <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="notCurious"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.notCurious}
                                onChange={handleCheckboxChange}
                                />
                                No
                            </label> */}
                        </div>
                    </div>
                </div>
            ),
            buttonText: "Done",
            Heading: "Final Touch: You!"
        },
        {
            Number: 33,
            type: "text",
            Content: (
                <div className='w-full sm:w-[90%] md:w-[75%] lg:w-[50%] flex flex-col items-start px-4'>
                    <div className="w-full mb-8">
                        <p className='font-poppins font-bold text-[24px] text-[#000000] text-left mb-4'>
                            How did you first hear about BFT ? <span className="text-[#A32727]">*</span>
                        </p>
                        <div className="flex flex-col items-start gap-4 text-[16px] sm:text-[20px] md:text-[24px] text-left font-normal font-poppins">
                            <label className="flex items-center text-left">
                                <input
                                    type="checkbox"
                                    name="someoneIKnow"
                                    className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                    checked={checkboxValues.someoneIKnow}
                                    onChange={handleCheckboxChange}
                                />
                                Someone I know IRL
                                </label>

                                <label className="flex items-center text-left">
                                    <input
                                        type="checkbox"
                                        name="influencer"
                                        className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                        checked={checkboxValues.influencer}
                                        onChange={handleCheckboxChange}
                                    />
                                    Influencer
                                </label>

                                <label className="flex items-center text-left">
                                    <input
                                        type="checkbox"
                                        name="press"
                                        className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                        checked={checkboxValues.press}
                                        onChange={handleCheckboxChange}
                                    />
                                    Press / blog feature
                                </label>

                                <label className="flex items-center text-left">
                                    <input
                                        type="checkbox"
                                        name="randomCustomer"
                                        className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                        checked={checkboxValues.randomCustomer}
                                        onChange={handleCheckboxChange}
                                    />
                                    Random BFT customer online
                                </label>

                                <label className="flex items-center text-left">
                                    <input
                                        type="checkbox"
                                        name="paidAd"
                                        className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                        checked={checkboxValues.paidAd}
                                        onChange={handleCheckboxChange}
                                    />
                                    Paid ad from @blind fold trips (Facebook / Instagram)
                                </label>
                        </div>
                    </div>
                </div>
            ),
            buttonText: "Done",
            Heading: "Final Touch: You!"
        },
        {
            Number: 34,
            type: "text",
            Content: (
                <div className='w-full sm:w-[90%] md:w-[75%] lg:w-[50%] flex flex-col items-start px-4'>
                    <div className="w-full mb-8">
                        <p className='font-poppins font-bold text-[24px] text-[#000000] text-left mb-4'>
                            To send your BFT proposal, we’ll need your OK on our Privacy Policy !!!! <span className="text-[#A32727]">*</span>
                        </p>
                        <p className="font-poppins font-normal text-left text-[20px] text-[#000000BF]">
                            We don't misuse your data.
                        </p>
                        <p className="font-poppins font-normal text-left mb-4 text-[20px] text-[#000000BF]">
                            Full policy <a href="/privacy_policy" className="text-[#1059E0] font-bold">here</a>.
                        </p>
                        <div className="flex flex-col items-start gap-4 text-[16px] sm:text-[20px] md:text-[24px] text-left font-normal font-poppins">
                            <label className="flex items-center text-left">
                                <input
                                type="checkbox"
                                name="agree"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.agree}
                                onChange={handleCheckboxChange}
                                />
                                I Agree
                            </label>
                        </div>
                    </div>
                </div>
            ),
            buttonText: "Done",
            Heading: "Final Touch: You!"
        },
    ];

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
        const allCountries = Country.getAllCountries();
        setCountries(allCountries);
    }, []);

    useEffect(() => {
        if (selectedCountryCode) {
            const stateList = State.getStatesOfCountry(selectedCountryCode);
            setStates(stateList);
        }
    }, [selectedCountryCode]);

    useEffect(() => {
        fetch('https://bft-backend.vercel.app/api/data/airportsData') // Replace with your actual backend URL if deployed
        .then((res) => res.json())
        .then((data) => setAirports(data))
        .catch((err) => console.error('Failed to fetch airport data', err));
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
        //Page 1 Intro
        //Page 2 Intro
        2: page3validator,
        //Page 4 - Chapter-1
        4: page5validator,
        5: page6validator,
        6: page7validator,
        7: page8to14validator(""),
        8: page8to14validator("1"),
        9: page8to14validator("2"),
        10: page8to14validator("3"),
        11: page8to14validator("4"),
        12: page8to14validator("5"),
        13: page8to14validator("6"),
        //Page 15 - Chapter-2
        15: page16validator,
        16: page17validator,
        17: page18validator,
        18: page19validator,
        19: page20validator,
        20: page21validator,
        //Page 22 - No validation required
        //Page 23 - Chapter-3
        23: page24validator,
        24: page25validator,
        25: page26validator,
        26: page27validator,
        27: page28validator,
        28: page29validator,
        //Page 30 - Final Touch
        30: () => page31validator(phone),
        31: page32validator,
        32: page33validator,
        33: page34validator,
    };

    const currentValidator = validators[currentPageIndex];
    const isDisabled = currentValidator ? !currentValidator() : false;

    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/* Header */}
            <div className="flex flex-col justify-end items-end pt-[56px] px-6 py-4 border-b shadow-sm">
                <img src="/Logo_1.png" alt="Logo" className="pl-[40px] w-[242px] h-[53px] mr-auto" />
                {currentPageIndex===0 ? (
                    <button onClick={() => navigate("/")} className="text-red-600 text-xl pr-[60px] font-bold hover:text-red-800 transition">
                        <IoCloseCircleOutline size={30} />
                    </button>
                ) : (
                    <p className="font-poppins font-bold text-[#A42828] text-[20px] md:text-[24px] md:pr-[60px]">
                        {Pages[currentPageIndex].Heading}
                    </p>
                )}
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
                    className="w-[60px] md:w-[75px] h-[60px] md:h-[60px] absolute top-1/2 transform -translate-y-1/2 left-4"
                />
            </div>

            {/* Page Content */}
            <div className="flex-grow flex flex-col justify-center items-center px-6 text-center text-[#000000]">
                {Pages[currentPageIndex].Content || ''}
            </div>

            {/* Navigation Button */}
            <div className="w-[100px] md:w-full mt-8 px-6 pb-8 mb-4 flex flex-col sm:flex-col md:flex-row justify-center gap-4">
                {/* Back Button */}
                {currentPageIndex > 0 && (
                    <button
                        onClick={handlePrev}
                        className="bg-[#A11616E5] hover:bg-[#003566] text-[#FCD2B1] font-poppins font-bold text-[20px] px-4 md:px-6 lg:px-8 py-2 rounded-full border border-[#FCD2B1] flex items-center justify-center gap-2 transition"
                    >
                        <FaArrowLeftLong size={20} />
                        Back
                    </button>
                )}

                {/* Next Button */}
                <button
                    onClick={handleNext}
                    className="bg-[#A11616E5] hover:bg-[#003566] text-[#FCD2B1] font-poppins font-bold text-[20px] px-4 md:px-6 lg:px-8 py-2 rounded-full border border-[#FCD2B1] flex items-center justify-center gap-2 transition"
                    disabled={isDisabled}
                >
                    {Pages[currentPageIndex].buttonText}
                    <FaArrowRightLong size={20} />
                </button>
            </div>

            {/* Page Counter */}
            {/* <div className="text-center text-gray-600 text-sm mb-6">
                {currentPageIndex + 1} of {TOTAL_PAGES}
            </div> */}
        </div>
    );
}
