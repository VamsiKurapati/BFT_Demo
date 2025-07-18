import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Country, State } from 'country-state-city';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { FaArrowRightLong } from "react-icons/fa6";
import ToastContainer from './ToastContainer';
import { toast } from 'react-toastify';
import { MdLocationOn, MdPerson } from 'react-icons/md';

const TOTAL_PAGES = 34;

const ImageCarousel = ({ images, alt, wrapperClass = "" }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-advance the carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1500);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className={`relative overflow-hidden ${wrapperClass}`}>
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`${alt} ${currentIndex + 1}`}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                />
            </AnimatePresence>
        </div>
    );
};

const Images = [
    ["/Questionnaire/1.jpg", "/Questionnaire/2.jpg", "/Questionnaire/3.jpg", "/Questionnaire/4.jpg"],
    ["/Questionnaire/5.jpg", "/Questionnaire/6.jpg", "/Questionnaire/7.jpg", "/Questionnaire/8.jpg"],
    ["/Questionnaire/9.jpg", "/Questionnaire/10.jpg", "/Questionnaire/11.jpg", "/Questionnaire/12.jpg"],
    ["/Questionnaire/13.jpg", "/Questionnaire/14.jpg", "/Questionnaire/15.jpg", "/Questionnaire/16.jpg"],
    ["/Questionnaire/17.jpg", "/Questionnaire/18.jpg", "/Questionnaire/19.jpg", "/Questionnaire/20.jpg"],
    ["/Questionnaire/21.jpg", "/Questionnaire/22.jpg", "/Questionnaire/23.jpg", "/Questionnaire/24.jpg"],
    ["/Questionnaire/25.jpg", "/Questionnaire/26.jpg", "/Questionnaire/27.jpg", "/Questionnaire/28.jpg"],
];

export default function Questionnaire() {
    const navigate = useNavigate();

    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [favouriteDestination, setFavouriteDestination] = useState("");
    const [travelerCount, setTravelerCount] = useState("1");
    const [customTravelerCount, setCustomTravelerCount] = useState("");
    const [specialOccasion, setSpecialOccasion] = useState("");
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
    const [budget, setBudget] = useState("");
    const [phone, setPhone] = useState('');
    const [preferredStartDateValue, setPreferredStartDateValue] = useState("");
    const [fixedStartDateValue, setFixedStartDateValue] = useState("");

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

        sameAirports: false,
        anyAirports: false,

        fDtN: false,
        fDfN: false,
        sDsN: false,
        userChoice: false,

        fixedStartDate: false,
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
            titles: ["notInterested", "openAndWilling", "curious", "excited", "superInterested"],
            autoMove: true,
            autoMoveKey: "Anything",
        },
        {
            name: "1",
            titles: ["notInterested1", "openAndWilling1", "curious1", "excited1", "superInterested1"],
            autoMove: true,
            autoMoveKey: "Anything",
        },
        {
            name: "2",
            titles: ["notInterested2", "openAndWilling2", "curious2", "excited2", "superInterested2"],
            autoMove: true,
            autoMoveKey: "Anything",
        },
        {
            name: "3",
            titles: ["notInterested3", "openAndWilling3", "curious3", "excited3", "superInterested3"],
            autoMove: true,
            autoMoveKey: "Anything",
        },
        {
            name: "4",
            titles: ["notInterested4", "openAndWilling4", "curious4", "excited4", "superInterested4"],
            autoMove: true,
            autoMoveKey: "Anything",
        },
        {
            name: "5",
            titles: ["notInterested5", "openAndWilling5", "curious5", "excited5", "superInterested5"],
            autoMove: true,
            autoMoveKey: "Anything",
        },
        {
            name: "6",
            titles: ["notInterested6", "openAndWilling6", "curious6", "excited6", "superInterested6"],
            autoMove: true,
            autoMoveKey: "Anything",
        },
        {
            name: "7",
            titles: ["qualityTime", "newDestination", "wellness", "specialOccasion"],
            autoMove: false,
            autoMoveKey: "Anything",
            holdKey: "specialOccasion",
        },
        {
            name: "8",
            titles: ["totalChill", "mostlyRelaxed", "aBitOfBoth", "prettyActive", "nonStopAdventure"],
            autoMove: true,
            autoMoveKey: "Anything",
        },
        {
            name: "9",
            titles: ["surpriseMe", "coolerClimate", "bringOnTheSunshine"],
            autoMove: true,
            autoMoveKey: "Anything",
        },
        {
            name: "10",
            titles: ["yes", "openToAnywhere", "internationalTrip"],
            autoMove: true,
            autoMoveKey: "Anything",
        },
        {
            name: "12",
            titles: ["sameAirports", "anyAirports"],
            autoMove: true,
            autoMoveKey: "Anything",
        },
        {
            name: "13",
            titles: ["sameAirports1", "anyAirports1"],
            autoMove: true,
            autoMoveKey: "Anything",
        },
        {
            name: "14",
            titles: ["fDtN", "fDfN", "sDsN", "userChoice"],
            autoMove: false,
            autoMoveKey: "userChoice",
            holdKey: "userChoice",
        },
        {
            name: "15",
            titles: ["preferredStartDate", "completelyFlexible", "fixedStartDate"],
            autoMove: false,
            autoMoveKey: "completelyFlexible",
        },
        {
            name: "16",
            titles: ["eitherIsFine", "exclusiveResidence", "hotel"],
            autoMove: true,
            autoMoveKey: "Anything",
        },
        {
            name: "17",
            titles: ["maxBudget", "increaseBy5000", "increaseBy7500", "increaseBy10000"],
            autoMove: true,
            autoMoveKey: "Anything",
        },
        {
            name: "19",
            titles: ["someoneIKnow", "influencer", "press", "randomCustomer", "paidAd"],
            autoMove: true,
            autoMoveKey: "Anything",
        },
    ];

    const exclusiveGroups = [
        {
            name: "0",
            titles: ["awareOfNothing", "unableToDoPhysicalActivities", "pregnancy", "fearOfHeights", "cantSwim", "seaSickness", "claustrophobia", "fearOfDogs"],
        },
        {
            name: "1",
            titles: ["comfortableWithAll", "noNatureWalk", "noHiking", "noBikingSegway", "noBoatTrips", "noSwimmingSnorkeling", "noKayakingSUP", "noRafting", "noSurfing", "noScubaDiving", "noCanyoningCaving", "noParagliding", "noHorseCamelRiding", "noWineTasting", "noBreweryTour", "noSpaContact"],
        },
        {
            name: "2",
            titles: ["none", "vegeterian", "vegan", "noAlcohol", "otherAllergies",],
        },
    ];

    const handleTravelerCountChange = (e) => {
        const value = e.target.value;
        setTravelerCount(value);
    };

    const handleCustomTravelerCountChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            const num = Number(value);
            if (num <= 0) {
                toast.error("Traveler count must be greater than 0.");
                return;
            }
            setCustomTravelerCount(num);
        } else {
            toast.error("Please enter a valid number for the traveler count.");
        }
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
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
    };

    const handleCountryChange = (event) => {
        const coun = countries.find(c => c.name === event.target.value);
        setSelectedCountryCode(coun?.isoCode || '');
        setSelectedCountry(coun?.name || '');
    }

    const handleStateChange = (event) => {
        const stat = event.target.value;
        setSelectedState(stat);
    }

    const handlepreferredStartDateChange = (event) => {
        const date = event.target.value;
        setPreferredStartDateValue(date);
    }

    const handlefixedStartDateChange = (event) => {
        const date = event.target.value;
        setFixedStartDateValue(date);
    }

    const handleNext = async () => {
        if (currentPageIndex < TOTAL_PAGES - 1) {
            setCurrentPageIndex(prev => prev + 1);
        } else {
            const success = await handleSave();
            if (success) {
                toast.success("Responses saved successfully!");
                setTimeout(() => {
                    navigate("/stay_tuned");
                }, 2000);
            } else {
                toast.error("Failed to save responses. Please try again.");
            }
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
                    const shouldAutoMove = group.holdKey === name ? false : group.autoMove || group.autoMoveKey === name;
                    if (shouldAutoMove) {
                        setTimeout(() => handleNext(), 300);
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
                    setTimeout(() => { handleNext() }, 300);
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

    const page2validator = () => {
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
        return checkboxValues["none"] || checkboxValues["vegeterian"] || checkboxValues["vegan"] || checkboxValues["noAlcohol"] || (checkboxValues["otherAllergies"] && otherAllergyDetails !== "");
    }

    const page8to14validator = (suffix) => {
        const keys = ["notInterested", "openAndWilling", "curious", "excited", "superInterested"];
        return () => {
            return keys.some(key => checkboxValues[`${key}${suffix}`]);
        };
    };

    const page16validator = () => {
        return checkboxValues["qualityTime"] || checkboxValues["newDestination"] || checkboxValues["wellness"] || (checkboxValues["specialOccasion"] && specialOccasion !== "");
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
        return favouriteDestination !== "" && avoidDestination !== "";
    }

    const page24validator = () => {
        return (selectedCountry != "") && (selectedState != "") && (selectedAirports != "") && (checkboxValues["sameAirports"] || checkboxValues["anyAirports"]);
    }

    const page25validator = () => {
        return checkboxValues["fDfN"] || checkboxValues["fDtN"] || checkboxValues["sDsN"] || (checkboxValues["userChoice"] && stayingDuration !== "");
    }

    const page26validator = () => {
        return (checkboxValues["preferredStartDate"] && preferredStartDateValue !== "") || checkboxValues["completelyFlexible"] || (checkboxValues["fixedStartDate"] && fixedStartDateValue !== "");
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
                    budget,
                    phone,
                    selectedCountry,
                    selectedState,
                    preferredStartDateValue,
                    fixedStartDateValue,
                    ...checkboxValues,
                }),
            });

            if (response.ok) {
                toast.success("Saved successfully!");
                return true;
            } else {
                toast.error("Failed to save. Please try again.");
                return false;
            }
        } catch (error) {
            toast.error("Something went wrong while saving.");
            return false;
        }
    };

    const Pages = [
        {
            Number: 1,
            type: "text",
            Content: (
                <div
                    className="w-full h-[100vh] flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-4 md:px-8 pb-8"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255,0.3), rgba(191, 231, 255, 0.2), rgba(96, 194, 255, 0.2))",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    {/* World map background - lower opacity and z-index to ensure gradient is visible */}
                    <img
                        src="/Questionnaire/Map.png"
                        alt="World Map"
                        className="absolute inset-0 w-full h-full lg:left-0 lg:top-[24px] lg:w-[70%] lg:h-[70%] object-cover opacity-20 pointer-events-none z-0"
                    />
                    {/* Left: Text Content (and Home.png on small screens) */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center items-start w-full md:max-w-xl">
                        {/* Home.png above text on small screens */}
                        <div className="block md:hidden w-full flex justify-center mb-4">
                            <div className="relative max-w-[320px] max-h-[240px] flex items-end justify-center">
                                <img
                                    src="/Questionnaire/Home.png"
                                    alt="Choose Your Trip Illustration"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                        <h1 className="font-lora text-[#003566] font-semibold text-[32px] md:text-[42px] lg:text-[52px] mb-4 text-left mt-4 md:mt-0">Welcome, explorer!</h1>
                        <p className="font-poppins text-[#000000BF] text-[18px] md:text-[22px] mb-2 text-left">
                            What you share here unlocks the journey meant just for you. Soon, the details will find their way to you.<br />
                            Unlock the first step to the unknown.
                        </p>
                        <div className="mt-6 mb-4">
                            <p className="font-poppins text-[#174D51] font-medium text-[16px] md:text-[20px] text-left">
                                Fill in the details, receive your surprise proposal - all for free. What happens next is up to you!
                            </p>
                        </div>
                        <button
                            onClick={handleNext}
                            className="mt-2 bg-[#003566] text-white font-poppins text-[16px] md:text-[20px] px-8 py-3 rounded-lg flex items-center gap-2 shadow-md transition"
                        >
                            Get Started
                            <FaArrowRightLong size={20} />
                        </button>
                    </div>
                    {/* Right: Illustration (hidden on small screens) */}
                    <div className="relative z-10 flex-1 flex-col items-center justify-center mt-10 md:mt-0 md:ml-8 hidden md:flex">
                        <div className="relative max-w-[593px] max-h-[439px] flex items-end justify-center">
                            <img
                                src="/Questionnaire/Home.png"
                                alt="Choose Your Trip Illustration"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            Number: 2,
            type: "text",
            Content: (
                <div
                    className="w-full h-full flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-4 md:px-8 pb-8"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255,0.3), rgba(191, 231, 255, 0.2), rgba(96, 194, 255, 0.2))",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    {/* World map background - lower opacity and z-index to ensure gradient is visible */}
                    <img
                        src="/Questionnaire/Map.png"
                        alt="World Map"
                        className="absolute inset-0 w-full h-full lg:left-0 lg:top-[24px] lg:w-[70%] lg:h-[70%] object-cover opacity-20 pointer-events-none z-0"
                    />
                    {/* Left: Main Content */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center items-start w-full md:max-w-xl">
                        {/* Blue box with heading and bullet points */}
                        <div className="bg-[#003566] rounded-2xl p-6 md:p-8 mb-8 w-full max-w-2xl border-1 border-[#182132] mt-8">
                            <h2 className="text-[#DFF3FF] font-semibold text-[20px] md:text-[24px] mb-4 font-poppins">Before we send you on a mystery ride, let's check if Blind Fold Trip is your vibe!</h2>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-white text-[16px] md:text-[20px] font-poppins">
                                    <MdLocationOn size={22} />
                                    Choose any airport across India to begin your trip.
                                </li>
                                <li className="flex items-start gap-3 text-white text-[16px] md:text-[20px] font-poppins">
                                    <MdPerson size={22} />
                                    Everyone is at least 10 years old with at least one person who is 18 or older.
                                </li>
                            </ul>
                        </div>
                        {/* Form Section */}
                        <div className="w-full max-w-2xl">
                            <label className="text-[#174D51] font-semibold text-[20px] md:text-[24px] mb-2 font-poppins">How many travelers are in your crew?</label>
                            <div className="flex items-center gap-4 mb-6">
                                <select
                                    value={travelerCount}
                                    onChange={handleTravelerCountChange}
                                    className="border border-[#B0B0B0] rounded-lg px-4 py-2 text-[18px] font-poppins focus:outline-none focus:ring-2 focus:ring-[#60C2FF]"
                                >
                                    {[...Array(10)].map((_, i) => (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    ))}
                                    <option value="other">Other</option>
                                </select>
                                {travelerCount === "other" && (
                                    <input
                                        type="number"
                                        min="1"
                                        value={customTravelerCount}
                                        onChange={handleCustomTravelerCountChange}
                                        placeholder="Enter number of travelers"
                                        className="w-[120px] border border-[#B0B0B0] rounded-lg px-4 py-2 text-[18px] font-poppins focus:outline-none focus:ring-2 focus:ring-[#60C2FF]"
                                    />
                                )}
                                <span className="text-[#5B5B5B] text-[16px] font-poppins italic">(If you're not sure, <span className="text-[#174D51]">start with 1</span>. You can always add more people later – after receiving your Blind Fold Trip Proposal.)</span>
                            </div>
                            <label className="text-[#174D51] font-semibold text-[20px] md:text-[24px] mb-2 font-poppins">Your Name, please!</label>
                            <input
                                type="text"
                                value={firstName}
                                onChange={handleFirstNameChange}
                                placeholder="Enter your name"
                                className="w-full border border-[#B0B0B0] rounded-lg px-4 py-3 text-[18px] font-poppins mb-8 focus:outline-none focus:ring-2 focus:ring-[#60C2FF]"
                            />
                            <button
                                onClick={handleNext}
                                disabled={!page2validator()}
                                className="bg-[#003566] text-white font-poppins text-[16px] md:text-[20px] px-8 py-3 rounded-lg flex items-center gap-2 shadow-md transition mt-2"
                            >
                                Let's go
                                <FaArrowRightLong size={20} />
                            </button>
                        </div>
                    </div>
                    {/* Right: Illustration (traveler with suitcase and globe) */}
                    <div className="relative z-10 flex-1 flex-col items-center justify-center mt-10 md:mt-0 md:ml-8 hidden md:flex">
                        <div className="relative max-w-[400px] max-h-[400px] flex items-end justify-center">
                            <img
                                src="/Questionnaire/Page-2.png"
                                alt="Traveler Illustration"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            ),
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
                            placeholder="E.g. Rohan"
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
                        Every BFT adventure is designed with beginners in mind and guided by seasoned experts. We'll always factor in any fears, phobias, or medical conditions you've shared with us.<br /><br />
                        <span className="text-[24px]">We'd love to gently nudge you out of your comfort zone—but are there any <span className="font-bold text-[#000000]">activities that are a definite no for you? </span><span className="text-[#A32727]">*</span></span><br /><br />
                        If you're unsure about an activity, don't say no to it!
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
                                    Don't Drink Alcohol
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
                        <ImageCarousel
                            images={Images[0]}
                            wrapperClass="w-[200px] md:w-[337px] h-[150px] md:h-[244px] rounded-lg mt-4 mb-4 bg-[#D9D9D9]"
                            alt="Page 8 Image Carousel"
                        />
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
                        <ImageCarousel
                            images={Images[1]}
                            wrapperClass="w-[200px] md:w-[337px] h-[150px] md:h-[244px] rounded-lg mt-4 mb-4 bg-[#D9D9D9]"
                            alt="Page 9 Image Carousel"
                        />
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
                        <ImageCarousel
                            images={Images[2]}
                            wrapperClass="w-[200px] md:w-[337px] h-[150px] md:h-[244px] rounded-lg mt-4 mb-4 bg-[#D9D9D9]"
                            alt="Page 10 Image Carousel"
                        />
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
                        <ImageCarousel
                            images={Images[3]}
                            wrapperClass="w-[200px] md:w-[337px] h-[150px] md:h-[244px] rounded-lg mt-4 mb-4 bg-[#D9D9D9]"
                            alt="Page 11 Image Carousel"
                        />
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
                        <ImageCarousel
                            images={Images[4]}
                            wrapperClass="w-[200px] md:w-[337px] h-[150px] md:h-[244px] rounded-lg mt-4 mb-4 bg-[#D9D9D9]"
                            alt="Page 12 Image Carousel"
                        />
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
                        <ImageCarousel
                            images={Images[5]}
                            wrapperClass="w-[200px] md:w-[337px] h-[150px] md:h-[244px] rounded-lg mt-4 mb-4 bg-[#D9D9D9]"
                            alt="Page 13 Image Carousel"
                        />
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
                        <ImageCarousel
                            images={Images[6]}
                            wrapperClass="w-[200px] md:w-[337px] h-[150px] md:h-[244px] rounded-lg mt-4 mb-4 bg-[#D9D9D9]"
                            alt="Page 14 Image Carousel"
                        />
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
                        What's the <span className="font-bold">#1 thing you're hoping for from this trip?</span> <span className="text-[#A32727]">*</span>
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
                        {checkboxValues.specialOccasion && (
                            <input
                                type="text"
                                name="specialOccasion"
                                placeholder="Please specify the occasion"
                                className="w-full px-4 py-3 border border-2 border-[#000000B2] bg-[#D9D9D966] rounded-lg font-poppins font-normal text-[24px] text-[#000000]"
                                value={specialOccasion}
                                onChange={(e) => setSpecialOccasion(e.target.value)}
                            />
                        )}
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
                            Surprise me—I'm easygoing!
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
                        Sun, snow, or something in between—you'll be ready for anything!<br /><br />
                        Two weeks before you jet off, we'll drop a live weather update and a custom packing list right into your inbox. No guesswork, just great outfits.
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
                        What kind of <span className="font-bold">vibes</span> are you hoping for in your surprise destination? <span className="text-[#A32727]">*</span><br /><br />
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
                            No, I'm open to anywhere
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
                        Where have you already been that you'd <span className="font-bold">prefer not to revisit? </span><span className="text-[#A32727]">*</span>
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
                        Our mission at BFT is to connect people with cultures far from their own. But let's be clear: <span className="font-bold">your safety is non-negotiable on any of our trips.</span>
                    </p>
                    <p className="font-poppins font-normal text-[24px] text-[#000000] text-center mb-4">
                        Any <span className="font-bold">destination types that wouldn't be safe or suitable for you?</span>
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
                            Hostile toward LGBTQ+ individuals
                        </label>

                        <label className="flex items-center text-left">
                            <input
                                type="checkbox"
                                name="hostilityBlack"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.hostilityBlack}
                                onChange={handleCheckboxChange}
                            />
                            Hostile toward Black travelers
                        </label>

                        <label className="flex items-center text-left">
                            <input
                                type="checkbox"
                                name="attitudeIslam"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.attitudeIslam}
                                onChange={handleCheckboxChange}
                            />
                            Unwelcoming to Muslims
                        </label>

                        <label className="flex items-center text-left">
                            <input
                                type="checkbox"
                                name="attitudeJewish"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.attitudeJewish}
                                onChange={handleCheckboxChange}
                            />
                            Unwelcoming to Jewish people
                        </label>

                        <label className="flex items-center text-left">
                            <input
                                type="checkbox"
                                name="hostilityIndigenous"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.hostilityIndigenous}
                                onChange={handleCheckboxChange}
                            />
                            Hostile toward Indigenous communities
                        </label>

                        <label className="flex items-center text-left">
                            <input
                                type="checkbox"
                                name="unsafeReligiousAttire"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.unsafeReligiousAttire}
                                onChange={handleCheckboxChange}
                            />
                            Unsafe for visible religious attire
                        </label>

                        <label className="flex items-center text-left">
                            <input
                                type="checkbox"
                                name="discriminatoryTrans"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.discriminatoryTrans}
                                onChange={handleCheckboxChange}
                            />
                            Discriminatory toward transgender people
                        </label>

                        <label className="flex items-center text-left">
                            <input
                                type="checkbox"
                                name="racialProfiling"
                                className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                checked={checkboxValues.racialProfiling}
                                onChange={handleCheckboxChange}
                            />
                            Known for racial profiling
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

                        <p className='font-poppins font-bold text-[24px] text-[#000000] text-left mt-8 mb-4'>
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
                                No, I'm open to anywhere
                            </label>
                        </div>
                    </div>
                </div>
            ),
            buttonText: "Done",
            Heading: "Chapter 3: The Must-Knows"
        },
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
                                    name="sDsN"
                                    className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                    checked={checkboxValues.sDsN}
                                    onChange={handleCheckboxChange}
                                />
                                7 Days / 6 Nights
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
                                    name="fixedStartDate"
                                    className="mr-4 w-[20px] h-[20px] text-[#FFFFFF] rounded-md"
                                    checked={checkboxValues.fixedStartDate}
                                    onChange={handleCheckboxChange}
                                />
                                I have a fixed start date
                            </label>
                            {checkboxValues.fixedStartDate && (
                                <div className="pl-8">
                                    <p className="font-poppins font-normal text-[#000000] text-[16px] sm:text-[20px] md:text-[24px] mb-2">
                                        What's your <span className="font-bold">fixed start date ? <span className="text-[#A32727]">*</span></span>
                                    </p>
                                    <input
                                        type="date"
                                        name="fixedStartDateValue"
                                        value={fixedStartDateValue || ""}
                                        onChange={handlefixedStartDateChange}
                                        className="border border-2 border-[#000000B2] bg-[#D9D9D966] rounded-lg px-4 py-2 text-black"
                                        min={new Date(Date.now() + 86400000).toISOString().split("T")[0]} // Tomorrow's date
                                    />
                                </div>
                            )}

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
                                        value={preferredStartDateValue || ""}
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
                                Whether it's a snug apartment with your own chill zone and kitchenette, or a comfy hotel with friendly reception and daily housekeeping—we've got you covered.<br /><br />
                            </p>
                            <p>
                                Wherever you land, expect:
                            </p>
                            <ul className="ml-5 list-disc pl-5">
                                <li>Prime locations close to the action</li>
                                <li>Sparkling clean, cozy, and totally safe</li>
                                <li>Your own private space (yes, with your own bathroom!)</li>
                                <li>Wi-Fi, towels, and toiletries—no need to pack 'em</li>
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
                            <span className="font-normal">What's</span> your total budget for a 7-day trip ? <span className="text-[#A32727]">*</span>
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
                                If we find the perfect experience for less, we'll automatically adjust your budget down—yes, really!<br /><br />
                                You can lock in your surprise trip with a flexible deposit, and pay the rest whenever you're ready—just make sure it's done at least 21 days before your trip.
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-4 text-[16px] sm:text-[20px] md:text-[24px] text-left font-normal font-poppins">
                            <div className="relative w-full">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[24px] text-[#000000] font-poppins">₹</span>
                                <input
                                    type="text"
                                    value={budget}
                                    onChange={handleBudgetChange}
                                    placeholder="38,999"
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
                            To send your BFT proposal, we'll need your OK on our Privacy Policy !!!! <span className="text-[#A32727]">*</span>
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

    const validators = {
        //Page 1 Intro
        //Page 2 Intro
        1: page2validator,
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
            <ToastContainer />

            {/* Header */}
            <div className="flex flex-col items-start justify-start px-6 pt-6">
                <img src="/Logo_1.png" alt="Logo" className="h-[52px] w-[240px]" />
            </div>

            {/* Page Content */}
            <div className="flex flex-col items-center justify-center">
                {Pages[currentPageIndex].Content || ''}
            </div>
        </div>
    );
}
