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
import Swal from 'sweetalert2';

const TOTAL_PAGES = 31;

export default function Questionnaire() {
    const navigate = useNavigate();
    const isNavigating = useRef(false);

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
        noSafetyConcerns: false,

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

    const [dropdownOpen, setDropdownOpen] = useState(false);

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
        {
            name: "3",
            titles: ["noSafetyConcerns", "unsafeFemale", "hostilityLGBTQ", "hostilityBlack", "attitudeIslam", "attitudeJewish", "hostilityIndigenous", "unsafeReligiousAttire", "discriminatoryTrans", "racialProfiling"],
        }
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
        if (isNavigating.current) {
            return;
        }

        if (currentPageIndex < TOTAL_PAGES - 1) {
            isNavigating.current = true;
            setCurrentPageIndex(prev => prev + 1);

            // Reset the flag after a short delay
            setTimeout(() => {
                isNavigating.current = false;
            }, 100);
        } else {
            toast.error("Something went wrong. Please try again.");
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
                        setTimeout(() => {
                            if (!isNavigating.current) {
                                handleNext();
                            }
                        }, 300);
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
                    setTimeout(() => {
                        if (!isNavigating.current) {
                            handleNext();
                        }
                    }, 300);
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

            // Check if it's airport preference
            if (name === "sameAirports") {
                if (checked) {
                    newValues["sameAirports"] = true;
                    newValues["anyAirports"] = false;
                } else {
                    newValues["sameAirports"] = false;
                }
                return newValues;
            } else if (name === "anyAirports") {
                if (checked) {
                    newValues["anyAirports"] = true;
                    newValues["sameAirports"] = false;
                } else {
                    newValues["anyAirports"] = false;
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



    // Chapter-1
    const page4validator = () => {
        return checkboxValues["awareOfNothing"] || checkboxValues["unableToDoPhysicalActivities"] || checkboxValues["pregnancy"] || checkboxValues["fearOfHeights"] || checkboxValues["cantSwim"] || checkboxValues["seaSickness"] || checkboxValues["claustrophobia"] || checkboxValues["fearOfDogs"];
    }

    const page5validator = () => {
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

    const page6validator = () => {
        return checkboxValues["none"] || checkboxValues["vegeterian"] || checkboxValues["vegan"] || checkboxValues["noAlcohol"] || (checkboxValues["otherAllergies"] && otherAllergyDetails !== "");
    }

    const page7to13validator = (suffix) => {
        const keys = ["notInterested", "openAndWilling", "curious", "excited", "superInterested"];
        return () => {
            return keys.some(key => checkboxValues[`${key}${suffix}`]);
        };
    };



    // Chapter-2
    const page14validator = () => {
        return checkboxValues["qualityTime"] || checkboxValues["newDestination"] || checkboxValues["wellness"] || (checkboxValues["specialOccasion"] && specialOccasion !== "");
    };

    const page15validator = () => {
        return checkboxValues["totalChill"] || checkboxValues["mostlyRelaxed"] || checkboxValues["aBitOfBoth"] || checkboxValues["prettyActive"] || checkboxValues["nonStopAdventure"];
    }

    const page16validator = () => {
        return checkboxValues["surpriseMe"] || checkboxValues["coolerClimate"] || checkboxValues["bringOnTheSunshine"];
    }

    const page17validator = () => {
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

    const page18validator = () => {
        return checkboxValues["yes"] || checkboxValues["openToAnywhere"] || checkboxValues["internationalTrip"];
    }

    const page19validator = () => {
        return favouriteDestination !== "" && avoidDestination !== "";
    }

    const page20validator = () => {
        return checkboxValues["noSafetyConcerns"] || checkboxValues["unsafeFemale"] || checkboxValues["hostilityLGBTQ"] || checkboxValues["hostilityBlack"] || checkboxValues["attitudeIslam"] || checkboxValues["attitudeJewish"] || checkboxValues["hostilityIndigenous"] || checkboxValues["unsafeReligiousAttire"] || checkboxValues["discriminatoryTrans"] || checkboxValues["racialProfiling"];
    }



    // Chapter-3 
    const page21validator = () => {
        return (selectedCountry !== "") && (selectedState !== "") && (selectedAirports.length > 0) && (checkboxValues["sameAirports"] || checkboxValues["anyAirports"]);
    }

    const page22validator = () => {
        return checkboxValues["fDfN"] || checkboxValues["fDtN"] || checkboxValues["sDsN"] || (checkboxValues["userChoice"] && stayingDuration !== "");
    }

    const page23validator = () => {
        return (checkboxValues["preferredStartDate"] && preferredStartDateValue !== "") || checkboxValues["completelyFlexible"] || (checkboxValues["fixedStartDate"] && fixedStartDateValue !== "");
    }

    const page24validator = () => {
        return checkboxValues["eitherIsFine"] || checkboxValues["exclusiveResidence"] || checkboxValues["hotel"];
    }

    const page25validator = () => {
        const numericBudget = Number(budget.replace(/,/g, ''));
        return numericBudget > 0;
    };

    const page26validator = () => {
        return checkboxValues["maxBudget"] || checkboxValues["increaseBy5000"] || checkboxValues["increaseBy7500"] || checkboxValues["increaseBy10000"];
    }



    // Chapter-4
    const page27validator = (val) => {
        try {
            const phoneNumber = parsePhoneNumberFromString(`+${val}`);
            return (phoneNumber ? phoneNumber.isValid() : false);
        } catch (err) {
            return false;
        }
    }

    const page28validator = () => {
        return checkboxValues["yesCurious"];
    }

    const page29validator = () => {
        return checkboxValues["someoneIKnow"] || checkboxValues["influencer"] || checkboxValues["press"] || checkboxValues["randomCustomer"] || checkboxValues["paidAd"];
    }

    const page30validator = () => {
        return checkboxValues["agree"];
    }

    const handleSave = async () => {
        const result = await Swal.fire({
            title: 'Confirmation',
            text: "Do you want to submit your responses?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        });

        if (result.isConfirmed) {
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
                    toast.success("Responses saved successfully!");
                    setFavouriteDestination("");
                    setTravelerCount("1");
                    setCustomTravelerCount("");
                    setSpecialOccasion("");
                    setFirstName("");
                    setOtherAllergyDetails("");
                    setAvoidDestination("");
                    setSelectedCountry("");
                    setSelectedCountryCode("");
                    setSelectedState("");
                    setSelectedAirports("");
                    setStayingDuration("");
                    setBudget("");
                    setPhone("");
                    setPreferredStartDateValue("");
                    setFixedStartDateValue("");
                    setCheckboxValues({});
                    localStorage.removeItem("questionnaireData");
                    handleNext();
                } else {
                    toast.error("Something went wrong. Please try again.");
                }
            } catch (error) {
                toast.error("Something went wrong. Please try again.");
            }
        }
    };

    const noValidation = () => {
        return true;
    }

    const validators = {
        //0: Page 1 Intro
        0: noValidation,
        1: page2validator,
        //2: Page 3 - Shows clickable chapters
        2: noValidation,
        //Chapter 1
        3: page4validator,
        4: page5validator,
        5: page6validator,
        6: page7to13validator(""),
        7: page7to13validator("1"),
        8: page7to13validator("2"),
        9: page7to13validator("3"),
        10: page7to13validator("4"),
        11: page7to13validator("5"),
        12: page7to13validator("6"),
        //Chapter 2
        13: page14validator,
        14: page15validator,
        15: page16validator,
        16: page17validator,
        17: page18validator,
        18: page19validator,
        19: page20validator,
        //Chapter 3
        20: page21validator,
        21: page22validator,
        22: page23validator,
        23: page24validator,
        24: page25validator,
        25: page26validator,
        //Chapter 4
        26: () => page27validator(phone),
        27: page28validator,
        28: page29validator,
        29: page30validator,
    };

    // --- Chapter Navigation Click Handlers ---
    const chapterPageIndexes = [3, 13, 20, 26];
    const numberOfPagesInChapters = [10, 7, 6, 4];

    const chapterValidators = [
        () => true, // Chapter 1 always accessible
        () => {
            // Check if all pages in Chapter 1 (pages 3-12) are valid
            for (let i = 3; i < 13; i++) {
                //console.log("i = ", i);
                if (validators[i] && !validators[i]()) {
                    //console.log('Validation failed for page', i);
                    return false;
                }
            }
            return true;
        },
        () => {
            // Check if all pages in Chapter 2 (pages 13-19) are valid
            for (let i = 13; i < 20; i++) {
                if (validators[i] && !validators[i]()) {
                    //console.log('Validation failed for page - ', i);
                    return false;
                }
            }
            return true;
        },
        () => {
            // Check if all pages in Chapter 3 (pages 20-25) are valid
            for (let i = 20; i < 26; i++) {
                if (validators[i] && !validators[i]()) {
                    //console.log('Validation failed for page = ', i);
                    return false;
                }
            }
            return true;
        }
    ];

    const handleChapterClick = (chapterIdx) => {
        // Only allow if all previous chapters are valid
        //console.log("chapterIdx = ", chapterIdx);

        // Check if all previous chapters are completed
        for (let i = 0; i < chapterIdx; i++) {
            if (!chapterValidators[i]()) {
                //console.log("Please complete previous chapters before proceeding.");
                toast.error("Please complete previous chapters before proceeding.");
                return;
            }
        }

        // Additional check: if trying to access Chapter 2 or later, ensure Chapter 1 is fully completed
        if (chapterIdx >= 1) {
            // Check if all pages in Chapter 1 (pages 3-12) are valid
            for (let i = 3; i < 13; i++) {
                if (validators[i] && !validators[i]()) {
                    //console.log('Chapter 1 not completed - validation failed for page', i);
                    toast.error("Please complete Chapter 1 before proceeding to other chapters.");
                    return;
                }
            }
        }

        setCurrentPageIndex(chapterPageIndexes[chapterIdx]);
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
            type: "form",
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
                            <div className="flex flex-col">
                                <label className="text-[#174D51] font-semibold text-[20px] md:text-[24px] mb-2 font-poppins">Your Name, please!</label>
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={handleFirstNameChange}
                                    placeholder="Enter your name"
                                    className="w-full max-w-[350px] border border-[#B0B0B0] rounded-lg px-4 py-3 text-[18px] font-poppins mb-8 focus:outline-none focus:ring-2 focus:ring-[#60C2FF]"
                                />
                            </div>
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
            type: "text",
            Content: (
                <div className="relative w-full min-h-[100vh] flex flex-col items-center justify-center px-2 md:px-8 py-8 overflow-hidden"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255,0.3), rgba(191, 231, 255, 0.2), rgba(96, 194, 255, 0.2))",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    {/* World map background */}
                    <img
                        src="/Questionnaire/Map.png"
                        alt="World Map"
                        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none z-0"
                    />
                    {/* Headline */}
                    <h2 className="relative z-10 text-[#0A3761] font-bold text-[22px] md:text-[28px] text-center mb-10 font-lora">
                        Navigate through different chapters to reach your destination
                    </h2>
                    {/* Progress line with icons */}
                    <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
                        {/* Dotted line */}
                        <div className="w-full flex items-center justify-between mb-2">
                            {/* Plane icons as clickable buttons */}
                            {[0, 1, 2, 3].map((i) => (
                                <button
                                    key={i}
                                    onClick={() => handleChapterClick(i)}
                                    aria-label={`Go to Chapter ${i + 1}`}
                                    className={`focus:outline-none transition-transform active:scale-95 flex flex-col items-center w-1/4 group ${i === 0 || chapterValidators[i]() ? 'cursor-pointer' : ''}`}
                                    // disabled={!chapterValidators[i]()}
                                    type="button"
                                >
                                    <div className="relative flex flex-col items-center">
                                        <div className="bg-[#FFE6B0] rounded-full w-16 h-16 flex items-center justify-center shadow-md border-2 border-[#FFF6E0] z-10 mt-2 group-hover:scale-105 group-focus:scale-105 transition-transform">
                                            <img src="/Questionnaire/Page-3.png" alt="plane" className="w-8 h-8 object-contain" />
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                        {/* Dotted line behind icons */}
                        <div className="absolute left-0 right-0 top-8 w-full h-0 border-t-4 border-dashed border-[#174D51] z-0" style={{ top: '2.5rem' }}></div>
                        {/* Chapter labels */}
                        <div className="w-full flex items-start justify-between mt-8">
                            <div className="flex flex-col items-center w-1/4">
                                <span className="font-bold text-[#0A3761] text-lg md:text-xl font-lora">Chapter 1</span>
                                <span className="font-poppins text-[#0A3761] text-base md:text-lg text-center mt-1">You & Your Getaway Style</span>
                            </div>
                            <div className="flex flex-col items-center w-1/4">
                                <span className="font-bold text-[#6B6B6B] text-lg md:text-xl font-lora">Chapter 2</span>
                                <span className="font-poppins text-[#6B6B6B] text-base md:text-lg text-center mt-1">Your Mystery Trip Begins</span>
                            </div>
                            <div className="flex flex-col items-center w-1/4">
                                <span className="font-bold text-[#6B6B6B] text-lg md:text-xl font-lora">Chapter 3</span>
                                <span className="font-poppins text-[#6B6B6B] text-base md:text-lg text-center mt-1">The Must Knows</span>
                            </div>
                            <div className="flex flex-col items-center w-1/4">
                                <span className="font-bold text-[#6B6B6B] text-lg md:text-xl font-lora">Chapter 4</span>
                                <span className="font-poppins text-[#6B6B6B] text-base md:text-lg text-center mt-1">The Final Touch: You</span>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },


        // Chapter 1: You & Your Getaway Style
        {
            Number: 4,
            type: "text",
            Content: (
                <div
                    className="w-full h-full flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-4 md:px-8 pb-8"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255,0.3), rgba(191, 231, 255, 0.2), rgba(2, 107, 205, 0.3))",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    {/* Left: Main Content */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center items-start w-full md:max-w-xl">
                        {/* Introductory text */}
                        <p className="font-poppins text-[#000000BF] text-[18px] md:text-[20px] mb-6 text-left italic w-full">
                            With BFT, the world becomes your playground for adventure and self-discovery.
                        </p>
                        {/* Main question */}
                        <h2 className="font-poppins text-[#003566] text-[22px] md:text-[26px] mb-6 text-left">
                            We totally get that <span className="font-semibold">fears, phobias, or medical conditions</span> can affect your travel experience. Is there <span className="font-semibold">anything we should keep in mind?</span> *
                        </h2>
                        {/* Checkboxes */}
                        <div className="flex flex-col items-start gap-4 text-[16px] md:text-[18px] text-left font-poppins w-full mb-4">
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="awareOfNothing"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.awareOfNothing}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Nothing you need to be aware of</span>
                            </label>
                            {!checkboxValues["awareOfNothing"] && (
                                <>
                                    <div className="w-full h-[1px] bg-gray-300 my-2"></div>
                                    <label className="flex items-start text-left w-full cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="unableToDoPhysicalActivities"
                                            className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                            checked={checkboxValues.unableToDoPhysicalActivities}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Unable to do Prolonged Physical Activities</span>
                                    </label>
                                    <label className="flex items-start text-left w-full cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="pregnancy"
                                            className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                            checked={checkboxValues.pregnancy}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Pregnancy</span>
                                    </label>
                                    <label className="flex items-start text-left w-full cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="severeFearOfHeights"
                                            className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                            checked={checkboxValues.fearOfHeights}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Severe fear of heights</span>
                                    </label>
                                    <label className="flex items-start text-left w-full cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="cantSwim"
                                            className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                            checked={checkboxValues.cantSwim}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Can't swim</span>
                                    </label>
                                    <label className="flex items-start text-left w-full cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="seaSickness"
                                            className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                            checked={checkboxValues.seaSickness}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Sea sickness</span>
                                    </label>
                                    <label className="flex items-start text-left w-full cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="claustrophobia"
                                            className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                            checked={checkboxValues.claustrophobia}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Claustrophobia</span>
                                    </label>
                                    <label className="flex items-start text-left w-full cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="fearOfDogs"
                                            className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                            checked={checkboxValues.fearOfDogs}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Fear of dogs</span>
                                    </label>
                                </>
                            )}
                        </div>

                        <button
                            onClick={() => handleNext()}
                            disabled={!page4validator()}
                            className="bg-[#003566] text-white font-poppins text-[16px] md:text-[20px] px-8 py-3 rounded-lg flex items-center gap-2 shadow-md transition mt-2"
                        >
                            Next <FaArrowRightLong size={20} />
                        </button>
                    </div>
                    {/* Right: Illustration (traveler with suitcase and map pin) */}
                    <div className="relative z-10 flex-1 flex-col items-center justify-center mt-10 md:mt-0 md:ml-8 hidden md:flex">
                        <div className="relative max-w-[400px] max-h-[400px] flex items-end justify-center">
                            <img
                                src="/Questionnaire/Image_1.png"
                                alt="Traveler with suitcase and map pin"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            Number: 5,
            type: "text",
            Content: (
                <div
                    className="w-full h-full flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-4 md:px-8 pb-8"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255,0.3), rgba(191, 231, 255, 0.2), rgba(2, 107, 205, 0.3))",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    {/* Left: Main Content */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center items-start w-full md:max-w-xl">
                        {/* Introductory text */}
                        <p className="font-poppins text-[#000000BF] text-[18px] md:text-[20px] mb-6 text-left italic w-full">
                            Every BFT adventure is designed with beginners in mind and guided by seasoned experts. We'll always factor in any fears, phobias, or medical conditions you've shared with us.
                        </p>
                        {/* Main question */}
                        <h2 className="font-poppins text-[#003566] text-[22px] md:text-[26px] mb-6 text-left">
                            We'd love to gently nudge you out of your comfort zone—but are there any <span className="font-bold">activities that are a definite no for you?</span> *
                        </h2>
                        <p className="font-poppins text-[#000000BF] text-[16px] md:text-[18px] mb-6 text-left italic">
                            If you're unsure about an activity, don't say no to it!
                        </p>
                        {/* Checkboxes */}
                        <div className="flex flex-col items-start gap-4 text-[16px] md:text-[18px] text-left font-poppins w-full mb-4">
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="comfortableWithAll"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.comfortableWithAll}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Comfortable with them all</span>
                            </label>

                            {!checkboxValues["comfortableWithAll"] && (
                                <>
                                    <div className="w-full h-[1px] bg-gray-300 my-2"></div>
                                    <label className="flex items-start text-left w-full cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="noNatureWalk"
                                            className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                            checked={checkboxValues.noNatureWalk}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">No to nature walk</span>
                                    </label>
                                    <label className="flex items-start text-left w-full cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="noHiking"
                                            className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                            checked={checkboxValues.noHiking}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">No to hiking</span>
                                    </label>
                                    <label className="flex items-start text-left w-full cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="noBikingSegway"
                                            className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                            checked={checkboxValues.noBikingSegway}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">No to biking/Segway</span>
                                    </label>
                                    <label className="flex items-start text-left w-full cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="noBoatTrips"
                                            className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                            checked={checkboxValues.noBoatTrips}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">No to boat trips</span>
                                    </label>
                                    <label className="flex items-start text-left w-full cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="noSwimmingSnorkeling"
                                            className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                            checked={checkboxValues.noSwimmingSnorkeling}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">No to swimming/snorkeling</span>
                                    </label>
                                    <label className="flex items-start text-left w-full cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="noKayakingSUP"
                                            className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                            checked={checkboxValues.noKayakingSUP}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">No to kayaking/SUP</span>
                                    </label>
                                    <label className="flex items-start text-left w-full cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="noRafting"
                                            className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                            checked={checkboxValues.noRafting}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">No to rafting</span>
                                    </label>
                                    <label className="flex items-start text-left w-full cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="noSurfing"
                                            className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                            checked={checkboxValues.noSurfing}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">No to surfing</span>
                                    </label>
                                    <label className="flex items-start text-left w-full cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="noScubaDiving"
                                            className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                            checked={checkboxValues.noScubaDiving}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">No to scuba diving</span>
                                    </label>
                                    <label className="flex items-start text-left w-full cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="noCanyoningCaving"
                                            className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                            checked={checkboxValues.noCanyoningCaving}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">No to canyoning/caving</span>
                                    </label>
                                    <label className="flex items-start text-left w-full cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="noParagliding"
                                            className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                            checked={checkboxValues.noParagliding}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">No to paragliding</span>
                                    </label>
                                    <label className="flex items-start text-left w-full cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="noHorseCamelRiding"
                                            className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                            checked={checkboxValues.noHorseCamelRiding}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">No to horse riding/camel riding</span>
                                    </label>
                                    <label className="flex items-start text-left w-full cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="noWineTasting"
                                            className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                            checked={checkboxValues.noWineTasting}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">No to wine tasting</span>
                                    </label>
                                    <label className="flex items-start text-left w-full cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="noBreweryTour"
                                            className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                            checked={checkboxValues.noBreweryTour}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">No to brewery/distillery tour</span>
                                    </label>
                                    <label className="flex items-start text-left w-full cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="noSpaContact"
                                            className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                            checked={checkboxValues.noSpaContact}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">No to spa treatments with physical contact</span>
                                    </label>
                                </>
                            )}
                        </div>

                        <button
                            onClick={() => handleNext()}
                            disabled={!page5validator()}
                            className="bg-[#003566] text-white font-poppins text-[16px] md:text-[20px] px-8 py-3 rounded-lg flex items-center gap-2 shadow-md transition mt-2"
                        >
                            Next <FaArrowRightLong size={20} />
                        </button>
                    </div>
                    {/* Right: Illustration */}
                    <div className="relative z-10 flex-1 flex-col items-center justify-center mt-10 md:mt-0 md:ml-8 hidden md:flex">
                        <div className="relative max-w-[400px] max-h-[400px] flex items-end justify-center">
                            <img
                                src="/Questionnaire/Image_2.png"
                                alt="Activity preferences illustration"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            Number: 6,
            type: "text",
            Content: (
                <div
                    className="w-full h-full flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-4 md:px-8 pb-8"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255,0.3), rgba(191, 231, 255, 0.2), rgba(2, 107, 205, 0.3))",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    {/* Left: Main Content */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center items-start w-full md:max-w-xl">
                        {/* Main question */}
                        <h2 className="font-poppins text-[#003566] text-[22px] md:text-[26px] mb-6 text-left">
                            Do you follow <span className="font-bold">any dietary preferences or restrictions</span> we should consider for foodie stops? *
                        </h2>
                        {/* Checkboxes */}
                        <div className="flex flex-col items-start gap-4 text-[16px] md:text-[18px] text-left font-poppins w-full mb-4">
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="none"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.none}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">None</span>
                            </label>

                            {!checkboxValues.none && (
                                <>
                                    <div className="w-full h-[1px] bg-gray-300 my-2"></div>
                                    <label className="flex items-start text-left w-full cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="vegeterian"
                                            className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                            checked={checkboxValues.vegeterian}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Vegetarian</span>
                                    </label>
                                    <label className="flex items-start text-left w-full cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="vegan"
                                            className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                            checked={checkboxValues.vegan}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Vegan</span>
                                    </label>
                                    <label className="flex items-start text-left w-full cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="noAlcohol"
                                            className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                            checked={checkboxValues.noAlcohol}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Don't Drink Alcohol</span>
                                    </label>
                                    <label className="flex items-start text-left w-full cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="otherAllergies"
                                            className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                            checked={checkboxValues.otherAllergies}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Other allergies or dietary restrictions</span>
                                    </label>

                                    {checkboxValues.otherAllergies && (
                                        <input
                                            type="text"
                                            name="otherAllergyDetails"
                                            className="mt-2 p-2 mb-4 border rounded bg-[#D9D9D966] w-full"
                                            placeholder="Please specify"
                                            value={otherAllergyDetails}
                                            onChange={handleOtherAllergyDetailsChange}
                                        />
                                    )}
                                </>
                            )}
                        </div>

                        <button
                            onClick={() => handleNext()}
                            disabled={!page6validator()}
                            className="bg-[#003566] text-white font-poppins text-[16px] md:text-[20px] px-8 py-3 rounded-lg flex items-center gap-2 shadow-md transition mt-2"
                        >
                            Next <FaArrowRightLong size={20} />
                        </button>
                    </div>
                    {/* Right: Illustration */}
                    <div className="relative z-10 flex-1 flex-col items-center justify-center mt-10 md:mt-0 md:ml-8 hidden md:flex">
                        <div className="relative max-w-[400px] max-h-[400px] flex items-end justify-center">
                            <img
                                src="/Questionnaire/Image_3.png"
                                alt="Dietary preferences illustration"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            Number: 7,
            type: "text",
            Content: (
                <div
                    className="w-full h-full flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-4 md:px-8 pb-8"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255,0.3), rgba(191, 231, 255, 0.2), rgba(2, 107, 205, 0.3))",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    {/* Left: Main Content */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center items-start w-full md:max-w-xl">
                        <h2 className="font-poppins text-[#003566] text-[22px] md:text-[26px] mb-6 text-left">
                            How much do you enjoy <span className="font-bold">outdoor adventures?</span> *
                        </h2>
                        <div className="flex flex-col items-start gap-4 text-[16px] md:text-[18px] text-left font-poppins w-full mb-4">
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="notInterested"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.notInterested}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Not interested</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="openAndWilling"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.openAndWilling}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Open & willing</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="curious"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.curious}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Curious</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="excited"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.excited}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Excited</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="superInterested"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.superInterested}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Super interested</span>
                            </label>
                        </div>
                        <button
                            onClick={() => handleNext()}
                            disabled={!page7to13validator("")()}
                            className="bg-[#003566] text-white font-poppins text-[16px] md:text-[20px] px-8 py-3 rounded-lg flex items-center gap-2 shadow-md transition mt-2"
                        >
                            Next <FaArrowRightLong size={20} />
                        </button>
                    </div>
                    {/* Right: Illustration */}
                    <div className="relative z-10 flex-1 flex-col items-center justify-center mt-10 md:mt-0 md:ml-8 hidden md:flex">
                        <div className="relative max-w-[400px] max-h-[400px] flex items-end justify-center">
                            <img
                                src="/Questionnaire/Image_4.png"
                                alt="Outdoor adventures illustration"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            Number: 8,
            type: "text",
            Content: (
                <div
                    className="w-full h-full flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-4 md:px-8 pb-8"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255,0.3), rgba(191, 231, 255, 0.2), rgba(2, 107, 205, 0.3))",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    {/* Left: Main Content */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center items-start w-full md:max-w-xl">
                        <h2 className="font-poppins text-[#003566] text-[22px] md:text-[26px] mb-6 text-left">
                            How do you feel about being <span className="font-bold">out in nature?</span> *
                        </h2>
                        <div className="flex flex-col items-start gap-4 text-[16px] md:text-[18px] text-left font-poppins w-full mb-4">
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="notInterested1"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.notInterested1}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Not interested</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="openAndWilling1"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.openAndWilling1}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Open & willing</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="curious1"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.curious1}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Curious</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="excited1"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.excited1}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Excited</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="superInterested1"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.superInterested1}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Super interested</span>
                            </label>
                        </div>
                        <button
                            onClick={() => handleNext()}
                            disabled={!page7to13validator("1")()}
                            className="bg-[#003566] text-white font-poppins text-[16px] md:text-[20px] px-8 py-3 rounded-lg flex items-center gap-2 shadow-md transition mt-2"
                        >
                            Next <FaArrowRightLong size={20} />
                        </button>
                    </div>
                    {/* Right: Illustration */}
                    <div className="relative z-10 flex-1 flex-col items-center justify-center mt-10 md:mt-0 md:ml-8 hidden md:flex">
                        <div className="relative max-w-[400px] max-h-[400px] flex items-end justify-center">
                            <img
                                src="/Questionnaire/Image_1.png"
                                alt="Nature illustration"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            Number: 9,
            type: "text",
            Content: (
                <div
                    className="w-full h-full flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-4 md:px-8 pb-8"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255,0.3), rgba(191, 231, 255, 0.2), rgba(2, 107, 205, 0.3))",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    {/* Left: Main Content */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center items-start w-full md:max-w-xl">
                        <h2 className="font-poppins text-[#003566] text-[22px] md:text-[26px] mb-6 text-left">
                            Strolling through <span className="font-bold">charming little towns—</span> love it or leave it? *
                        </h2>
                        <div className="flex flex-col items-start gap-4 text-[16px] md:text-[18px] text-left font-poppins w-full mb-4">
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="notInterested2"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.notInterested2}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Not interested</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="openAndWilling2"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.openAndWilling2}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Open & willing</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="curious2"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.curious2}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Curious</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="excited2"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.excited2}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Excited</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="superInterested2"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.superInterested2}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Super interested</span>
                            </label>
                        </div>
                        <button
                            onClick={() => handleNext()}
                            disabled={!page7to13validator("2")()}
                            className="bg-[#003566] text-white font-poppins text-[16px] md:text-[20px] px-8 py-3 rounded-lg flex items-center gap-2 shadow-md transition mt-2"
                        >
                            Next <FaArrowRightLong size={20} />
                        </button>
                    </div>
                    {/* Right: Illustration */}
                    <div className="relative z-10 flex-1 flex-col items-center justify-center mt-10 md:mt-0 md:ml-8 hidden md:flex">
                        <div className="relative max-w-[400px] max-h-[400px] flex items-end justify-center">
                            <img
                                src="/Questionnaire/Image_2.png"
                                alt="Charming towns illustration"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            Number: 10,
            type: "text",
            Content: (
                <div
                    className="w-full h-full flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-4 md:px-8 pb-8"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255,0.3), rgba(191, 231, 255, 0.2), rgba(2, 107, 205, 0.3))",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    {/* Left: Main Content */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center items-start w-full md:max-w-xl">
                        <h2 className="font-poppins text-[#003566] text-[22px] md:text-[26px] mb-6 text-left">
                            Seeing <span className="font-bold">iconic landmarks—</span> must-do or pass? *
                        </h2>
                        <div className="flex flex-col items-start gap-4 text-[16px] md:text-[18px] text-left font-poppins w-full mb-4">
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="notInterested3"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.notInterested3}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Not interested</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="openAndWilling3"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.openAndWilling3}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Open & willing</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="curious3"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.curious3}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Curious</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="excited3"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.excited3}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Excited</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="superInterested3"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.superInterested3}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Super interested</span>
                            </label>
                        </div>
                        <button
                            onClick={() => handleNext()}
                            disabled={!page7to13validator("3")()}
                            className="bg-[#003566] text-white font-poppins text-[16px] md:text-[20px] px-8 py-3 rounded-lg flex items-center gap-2 shadow-md transition mt-2"
                        >
                            Next <FaArrowRightLong size={20} />
                        </button>
                    </div>
                    {/* Right: Illustration */}
                    <div className="relative z-10 flex-1 flex-col items-center justify-center mt-10 md:mt-0 md:ml-8 hidden md:flex">
                        <div className="relative max-w-[400px] max-h-[400px] flex items-end justify-center">
                            <img
                                src="/Questionnaire/Image_3.png"
                                alt="Landmarks illustration"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            Number: 11,
            type: "text",
            Content: (
                <div
                    className="w-full h-full flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-4 md:px-8 pb-8"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255,0.3), rgba(191, 231, 255, 0.2), rgba(2, 107, 205, 0.3))",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    {/* Left: Main Content */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center items-start w-full md:max-w-xl">
                        <h2 className="font-poppins text-[#003566] text-[22px] md:text-[26px] mb-6 text-left">
                            Exploring <span className="font-bold">places rich in history—</span> your thing? *
                        </h2>
                        <div className="flex flex-col items-start gap-4 text-[16px] md:text-[18px] text-left font-poppins w-full mb-4">
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="notInterested4"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.notInterested4}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Not interested</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="openAndWilling4"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.openAndWilling4}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Open & willing</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="curious4"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.curious4}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Curious</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="excited4"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.excited4}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Excited</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="superInterested4"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.superInterested4}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Super interested</span>
                            </label>
                        </div>
                        <button
                            onClick={() => handleNext()}
                            disabled={!page7to13validator("4")()}
                            className="bg-[#003566] text-white font-poppins text-[16px] md:text-[20px] px-8 py-3 rounded-lg flex items-center gap-2 shadow-md transition mt-2"
                        >
                            Next <FaArrowRightLong size={20} />
                        </button>
                    </div>
                    {/* Right: Illustration */}
                    <div className="relative z-10 flex-1 flex-col items-center justify-center mt-10 md:mt-0 md:ml-8 hidden md:flex">
                        <div className="relative max-w-[400px] max-h-[400px] flex items-end justify-center">
                            <img
                                src="/Questionnaire/Image_4.png"
                                alt="History illustration"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            Number: 12,
            type: "text",
            Content: (
                <div
                    className="w-full h-full flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-4 md:px-8 pb-8"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255,0.3), rgba(191, 231, 255, 0.2), rgba(2, 107, 205, 0.3))",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    {/* Left: Main Content */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center items-start w-full md:max-w-xl">
                        <h2 className="font-poppins text-[#003566] text-[22px] md:text-[26px] mb-6 text-left">
                            <span className="font-bold">Art and museum </span> visits—yay or nay? *
                        </h2>
                        <div className="flex flex-col items-start gap-4 text-[16px] md:text-[18px] text-left font-poppins w-full mb-4">
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="notInterested5"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.notInterested5}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Not interested</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="openAndWilling5"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.openAndWilling5}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Open & willing</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="curious5"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.curious5}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Curious</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="excited5"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.excited5}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Excited</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="superInterested5"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.superInterested5}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Super interested</span>
                            </label>
                        </div>
                        <button
                            onClick={() => handleNext()}
                            disabled={!page7to13validator("5")()}
                            className="bg-[#003566] text-white font-poppins text-[16px] md:text-[20px] px-8 py-3 rounded-lg flex items-center gap-2 shadow-md transition mt-2"
                        >
                            Next <FaArrowRightLong size={20} />
                        </button>
                    </div>
                    {/* Right: Illustration */}
                    <div className="relative z-10 flex-1 flex-col items-center justify-center mt-10 md:mt-0 md:ml-8 hidden md:flex">
                        <div className="relative max-w-[400px] max-h-[400px] flex items-end justify-center">
                            <img
                                src="/Questionnaire/Image_1.png"
                                alt="Art and museum illustration"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            Number: 13,
            type: "text",
            Content: (
                <div
                    className="w-full h-full flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-4 md:px-8 pb-8"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255,0.3), rgba(191, 231, 255, 0.2), rgba(2, 107, 205, 0.3))",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    {/* Left: Main Content */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center items-start w-full md:max-w-xl">
                        <h2 className="font-poppins text-[#003566] text-[22px] md:text-[26px] mb-6 text-left">
                            Sampling <span className="font-bold">delicious local food—</span> how excited are you? *
                        </h2>
                        <div className="flex flex-col items-start gap-4 text-[16px] md:text-[18px] text-left font-poppins w-full mb-4">
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="notInterested6"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.notInterested6}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Not interested</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="openAndWilling6"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.openAndWilling6}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Open & willing</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="curious6"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.curious6}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Curious</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="excited6"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.excited6}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Excited</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="superInterested6"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.superInterested6}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Super interested</span>
                            </label>
                        </div>
                        <button
                            onClick={() => handleNext()}
                            disabled={!page7to13validator("6")()}
                            className="bg-[#003566] text-white font-poppins text-[16px] md:text-[20px] px-8 py-3 rounded-lg flex items-center gap-2 shadow-md transition mt-2"
                        >
                            Next <FaArrowRightLong size={20} />
                        </button>
                    </div>
                    {/* Right: Illustration */}
                    <div className="relative z-10 flex-1 flex-col items-center justify-center mt-10 md:mt-0 md:ml-8 hidden md:flex">
                        <div className="relative max-w-[400px] max-h-[400px] flex items-end justify-center">
                            <img
                                src="/Questionnaire/Image_2.png"
                                alt="Local food illustration"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            ),
        },


        // Chapter 2: Your Mystery Trip Begins
        {
            Number: 14,
            type: "text",
            Content: (
                <div
                    className="w-full h-full flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-4 md:px-8 pb-8"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255,0.3), rgba(191, 231, 255, 0.2), rgba(38, 240, 255, 0.3))",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    {/* Left: Main Content */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center items-start w-full md:max-w-xl">
                        <h2 className="font-poppins text-[#174D51] text-[22px] md:text-[26px] mb-6 text-left">
                            What's the <span className="font-bold">#1 thing you're hoping for from this trip?</span> *
                        </h2>
                        <div className="flex flex-col items-start gap-4 text-[16px] md:text-[18px] text-left font-poppins w-full mb-4">
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="qualityTime"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.qualityTime}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Quality time together / by myself</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="newDestination"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.newDestination}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Visit a new destination</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="wellness"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.wellness}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Emotional wellness</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="specialOccasion"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.specialOccasion}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Celebrate a special occasion</span>
                            </label>
                            {checkboxValues.specialOccasion && (
                                <input
                                    type="text"
                                    name="specialOccasion"
                                    placeholder="Please specify the occasion"
                                    className="mt-2 p-2 mb-4 border rounded bg-[#FFFFFF] w-full max-w-[300px]"
                                    value={specialOccasion}
                                    onChange={(e) => setSpecialOccasion(e.target.value)}
                                />
                            )}
                        </div>
                        <button
                            onClick={() => handleNext()}
                            disabled={!page14validator()}
                            className="bg-[#003566] text-white font-poppins text-[16px] md:text-[20px] px-8 py-3 rounded-lg flex items-center gap-2 shadow-md transition mt-2"
                        >
                            Next <FaArrowRightLong size={20} />
                        </button>
                    </div>
                    {/* Right: Illustration */}
                    <div className="relative z-10 flex-1 flex-col items-center justify-center mt-10 md:mt-0 md:ml-8 hidden md:flex">
                        <div className="relative max-w-[400px] max-h-[400px] flex items-end justify-center">
                            <img
                                src="/Questionnaire/Image_1.png"
                                alt="Trip hopes illustration"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            Number: 15,
            type: "text",
            Content: (
                <div
                    className="w-full h-full flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-4 md:px-8 pb-8"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255,0.3), rgba(191, 231, 255, 0.2), rgba(38, 240, 255, 0.3))",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    {/* Left: Main Content */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center items-start w-full md:max-w-xl">
                        <h2 className="font-poppins text-[#174D51] text-[22px] md:text-[26px] mb-6 text-left">
                            How <span className="font-bold text-[#000000]">active or chill</span> do you want your <span className="font-bold">trip</span> to be? *
                        </h2>
                        <div className="flex flex-col items-start gap-4 text-[16px] md:text-[18px] text-left font-poppins w-full mb-4">
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="totalChill"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.totalChill}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Total Chill<br /><span className='text-[12px] sm:text-[16px] md:text-[20px] text-[#000000BF]'>- Hammocks, slow strolls, sunset views</span></span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="mostlyRelaxed"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.mostlyRelaxed}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Mostly Relaxed<br /><span className='text-[12px] sm:text-[16px] md:text-[20px] text-[#000000BF]'>- Spa days, short walks, beach lounging</span></span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="aBitOfBoth"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.aBitOfBoth}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">A Bit of Both<br /><span className='text-[12px] sm:text-[16px] md:text-[20px] text-[#000000BF]'>- Easy hikes, local exploring, café hopping</span></span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="prettyActive"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.prettyActive}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Pretty Active<br /><span className='text-[12px] sm:text-[16px] md:text-[20px] text-[#000000BF]'>- Long walks, full-day tours, some adventure</span></span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer mb-4">
                                <input
                                    type="checkbox"
                                    name="nonStopAdventure"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.nonStopAdventure}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Non-Stop Adventure<br /><span className='text-[12px] sm:text-[16px] md:text-[20px] text-[#000000BF]'>- Trekking, biking, packed itinerary, thrill-packed days</span></span>
                            </label>
                        </div>
                        <button
                            onClick={() => handleNext()}
                            disabled={!page15validator()}
                            className="bg-[#003566] text-white font-poppins text-[16px] md:text-[20px] px-8 py-3 rounded-lg flex items-center gap-2 shadow-md transition mt-2"
                        >
                            Next <FaArrowRightLong size={20} />
                        </button>
                    </div>
                    {/* Right: Illustration */}
                    <div className="relative z-10 flex-1 flex-col items-center justify-center mt-10 md:mt-0 md:ml-8 hidden md:flex">
                        <div className="relative max-w-[400px] max-h-[400px] flex items-end justify-center">
                            <img
                                src="/Questionnaire/Image_2.png"
                                alt="Trip activity illustration"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            Number: 16,
            type: "text",
            Content: (
                <div
                    className="w-full h-full flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-4 md:px-8 pb-8"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255,0.3), rgba(191, 231, 255, 0.2), rgba(38, 240, 255, 0.3))",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    {/* Left: Main Content */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center items-start w-full md:max-w-xl">
                        <h2 className="font-poppins text-[#174D51] text-[22px] md:text-[26px] mb-6 text-left">
                            Got a <span className="font-bold text-[#000000]">temperature preference</span> for your trip? *
                        </h2>
                        <p className="text-[#000000BF] mt-2 text-[20px]">Warm = Above 15°C / 60°F</p>
                        <p className="text-[#000000BF] mt-2 text-[20px]">Cool = Below 15°C / 60°F</p>
                        <div className="flex flex-col items-start gap-4 text-[16px] md:text-[18px] text-left font-poppins w-full mb-4 mt-4">
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="surpriseMe"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.surpriseMe}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Surprise me—I'm easygoing!</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="coolerClimate"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.coolerClimate}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Cooler climates, please!</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer mb-4">
                                <input
                                    type="checkbox"
                                    name="bringOnTheSunshine"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.bringOnTheSunshine}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Bring on the sunshine!</span>
                            </label>
                        </div>
                        <p className="font-poppins font-normal text-[20px] text-[#000000BF] text-left mb-4">
                            Sun, snow, or something in between—you'll be ready for anything!<br /><br />
                            Two weeks before you jet off, we'll drop a live weather update and a custom packing list right into your inbox. No guesswork, just great outfits.
                        </p>
                        <button
                            onClick={() => handleNext()}
                            disabled={!page16validator()}
                            className="bg-[#003566] text-white font-poppins text-[16px] md:text-[20px] px-8 py-3 rounded-lg flex items-center gap-2 shadow-md transition mt-2"
                        >
                            Next <FaArrowRightLong size={20} />
                        </button>
                    </div>
                    {/* Right: Illustration */}
                    <div className="relative z-10 flex-1 flex-col items-center justify-center mt-10 md:mt-0 md:ml-8 hidden md:flex">
                        <div className="relative max-w-[400px] max-h-[400px] flex items-end justify-center">
                            <img
                                src="/Questionnaire/Image_3.png"
                                alt="Temperature preference illustration"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            Number: 17,
            type: "text",
            Content: (
                <div
                    className="w-full h-full flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-4 md:px-8 pb-8"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255,0.3), rgba(191, 231, 255, 0.2), rgba(38, 240, 255, 0.3))",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    {/* Left: Main Content */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center items-start w-full md:max-w-xl">
                        <h2 className="font-poppins text-[#174D51] text-[22px] md:text-[26px] mb-6 text-left">
                            What kind of <span className="font-bold">vibes</span> are you hoping for in your surprise destination? *
                        </h2>
                        <p className="text-[#000000BF] text-[20px] mb-2">Make between 2 and 5 choices.</p>
                        <div className="flex flex-col items-start gap-4 text-[16px] md:text-[18px] text-left font-poppins w-full mb-4">
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="vibrantUrbanLife"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.vibrantUrbanLife}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Vibrant urban life</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="creativeArtsyVibes"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.creativeArtsyVibes}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Creative and artsy vibes</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="lushGreenLandscapes"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.lushGreenLandscapes}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Lush green landscapes</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="photogenic"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.photogenic}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Photogenic</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="budgetFriendlyAdventures"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.budgetFriendlyAdventures}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Budget-friendly adventures</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="mountainous"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.mountainous}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Mountainous</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="calmSereneEscapes"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.calmSereneEscapes}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Calm and serene escapes</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="eyeCatchingArchitecture"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.eyeCatchingArchitecture}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Eye-catching architecture</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer mb-4">
                                <input
                                    type="checkbox"
                                    name="sandyBeaches"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.sandyBeaches}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Sandy beaches</span>
                            </label>
                        </div>
                        <button
                            onClick={() => handleNext()}
                            disabled={!page17validator()}
                            className="bg-[#003566] text-white font-poppins text-[16px] md:text-[20px] px-8 py-3 rounded-lg flex items-center gap-2 shadow-md transition mt-2"
                        >
                            Next <FaArrowRightLong size={20} />
                        </button>
                    </div>
                    {/* Right: Illustration */}
                    <div className="relative z-10 flex-1 flex-col items-center justify-center mt-10 md:mt-0 md:ml-8 hidden md:flex">
                        <div className="relative max-w-[400px] max-h-[400px] flex items-end justify-center">
                            <img
                                src="/Questionnaire/Image_4.png"
                                alt="Vibes illustration"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            Number: 18,
            type: "text",
            Content: (
                <div
                    className="w-full h-full flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-4 md:px-8 pb-8"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255,0.3), rgba(191, 231, 255, 0.2), rgba(38, 240, 255, 0.3))",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    {/* Left: Main Content */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center items-start w-full md:max-w-xl">
                        <h2 className="font-poppins text-[#174D51] text-[22px] md:text-[26px] mb-6 text-left">
                            Is there a <span className="font-bold">dream destination or state on your list</span> you'd love to land? *
                        </h2>
                        <div className="flex flex-col items-start gap-4 text-[16px] md:text-[18px] text-left font-poppins w-full mb-4">
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="yes"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.yes}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Yes</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="openToAnywhere"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.openToAnywhere}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">No, I'm open to anywhere</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer mb-4">
                                <input
                                    type="checkbox"
                                    name="internationalTrip"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.internationalTrip}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">International Trip</span>
                            </label>
                        </div>
                        <button
                            onClick={() => handleNext()}
                            disabled={!page18validator()}
                            className="bg-[#003566] text-white font-poppins text-[16px] md:text-[20px] px-8 py-3 rounded-lg flex items-center gap-2 shadow-md transition mt-2"
                        >
                            Next <FaArrowRightLong size={20} />
                        </button>
                    </div>
                    {/* Right: Illustration */}
                    <div className="relative z-10 flex-1 flex-col items-center justify-center mt-10 md:mt-0 md:ml-8 hidden md:flex">
                        <div className="relative max-w-[400px] max-h-[400px] flex items-end justify-center">
                            <img
                                src="/Questionnaire/Image_1.png"
                                alt="Dream destination illustration"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            Number: 19,
            type: "form",
            Content: (
                <div
                    className="w-full h-full flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-4 md:px-8 pb-8"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255,0.3), rgba(191, 231, 255, 0.2), rgba(38, 240, 255, 0.3))",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    {/* Left: Main Content */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center items-start w-full md:max-w-xl">
                        <h2 className="font-poppins text-[#174D51] text-[22px] md:text-[26px] mb-6 text-left">
                            Which <span className="font-bold">Places / Countries</span> are <span className="font-bold">on your bucket list?</span> *
                        </h2>
                        <input
                            type="text"
                            value={favouriteDestination}
                            onChange={handlefavouriteDestinationChange}
                            placeholder="e.g. Paris, France"
                            className="w-full max-w-[350px] px-4 py-3 border border-2 border-[#000000B2] bg-[#FFFFFF] rounded-lg font-poppins font-normal text-[24px] text-[#000000] mb-4"
                        />
                        <h2 className="font-poppins text-[#174D51] text-[22px] md:text-[26px] mb-6 text-left">
                            Where have you already been that you'd <span className="font-bold">prefer not to revisit?</span> *
                        </h2>
                        <input
                            type="text"
                            value={avoidDestination}
                            onChange={handleAvoidDestinationChange}
                            placeholder="e.g. Paris, France"
                            className="w-full max-w-[350px] px-4 py-3 border border-2 border-[#000000B2] bg-[#FFFFFF] rounded-lg font-poppins font-normal text-[24px] text-[#000000] mb-4"
                        />
                        <button
                            onClick={() => handleNext()}
                            disabled={!page19validator()}
                            className="bg-[#003566] text-white font-poppins text-[16px] md:text-[20px] px-8 py-3 rounded-lg flex items-center gap-2 shadow-md transition mt-2"
                        >
                            Next <FaArrowRightLong size={20} />
                        </button>
                    </div>
                    {/* Right: Illustration */}
                    <div className="relative z-10 flex-1 flex-col items-center justify-center mt-10 md:mt-0 md:ml-8 hidden md:flex">
                        <div className="relative max-w-[400px] max-h-[400px] flex items-end justify-center">
                            <img
                                src="/Questionnaire/Image_2.png"
                                alt="Bucket list illustration"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            Number: 20,
            type: "form",
            Content: (
                <div
                    className="w-full h-full flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-4 md:px-8 pb-8"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255,0.3), rgba(191, 231, 255, 0.2), rgba(38, 240, 255, 0.3))",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    {/* Left: Main Content */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center items-start w-full md:max-w-xl">
                        <h2 className="font-poppins text-[#174D51] text-[22px] md:text-[26px] mb-6 text-left">
                            Any <span className="font-bold">destination types that wouldn't be safe or suitable for you?</span>
                        </h2>
                        <div className="flex flex-col items-start gap-4 text-[16px] md:text-[18px] text-left font-poppins w-full mb-4">
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="unsafeFemale"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.unsafeFemale}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Considered unsafe for solo female travellers</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="hostilityLGBTQ"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.hostilityLGBTQ}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Hostile toward LGBTQ+ individuals</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="hostilityBlack"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.hostilityBlack}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Hostile toward Black travelers</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="attitudeIslam"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.attitudeIslam}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Unwelcoming to Muslims</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="attitudeJewish"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.attitudeJewish}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Unwelcoming to Jews</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="hostilityIndigenous"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.hostilityIndigenous}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Hostile toward Indigenous travelers</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="unsafeReligiousAttire"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.unsafeReligiousAttire}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Unwelcoming to religious attire</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="discriminatoryTrans"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.discriminatoryTrans}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Discriminatory toward transgender travelers</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="racialProfiling"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.racialProfiling}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Racial profiling</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="noSafetyConcerns"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.noSafetyConcerns}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">None of the above</span>
                            </label>
                        </div>
                        <button
                            onClick={() => handleNext()}
                            disabled={!page20validator()}
                            className="bg-[#003566] text-white font-poppins text-[16px] md:text-[20px] px-8 py-3 rounded-lg flex items-center gap-2 shadow-md transition mt-2"
                        >
                            Next <FaArrowRightLong size={20} />
                        </button>
                    </div>
                    {/* Right: Illustration */}
                    <div className="relative z-10 flex-1 flex-col items-center justify-center mt-10 md:mt-0 md:ml-8 hidden md:flex">
                        <div className="relative max-w-[400px] max-h-[400px] flex items-end justify-center">
                            <img
                                src="/Questionnaire/Image_3.png"
                                alt="Safety illustration"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            ),
        },


        // Chapter 3: Your Mystery Trip Begins
        {
            Number: 21,
            type: "text",
            Content: (
                <div
                    className="w-full h-full flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-4 md:px-8 pb-8"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255,0.3), rgba(191, 231, 255, 0.2), rgba(2, 107, 205, 0.3))",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    {/* Left: Main Content */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center items-start w-full md:max-w-xl">
                        <h2 className="font-poppins text-[#174D51] text-[22px] md:text-[26px] mb-6 text-left">
                            <span className="font-normal">Which</span> Country will you be flying out from? *
                        </h2>
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
                            className="w-full max-w-[350px] text-left font-poppins mb-4"
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    height: 'auto',
                                    minHeight: '50px',
                                    backgroundColor: '#FFFFFF',
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

                        <h2 className="font-poppins text-[#174D51] text-[22px] md:text-[26px] mb-6 text-left">
                            <span className="font-normal">Which</span> State will you be flying out from? *
                        </h2>

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
                            className="w-full max-w-[350px] text-left font-poppins mb-4"
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    height: 'auto',
                                    minHeight: '50px',
                                    backgroundColor: '#FFFFFF',
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

                        <h2 className="font-poppins text-[#174D51] text-[22px] md:text-[26px] mb-6 text-left">
                            <span className="font-normal">Which</span> airports can you depart from? *
                        </h2>

                        <Select
                            isMulti
                            options={airports}
                            value={selectedAirports}
                            onChange={setSelectedAirports}
                            className="w-full max-w-[350px] text-left font-poppins mb-4"
                            placeholder="Select"
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    height: 'auto',
                                    minHeight: '50px',
                                    backgroundColor: '#FFFFFF',
                                    border: '2px solid #000000B2',
                                    borderRadius: '8px',
                                    fontSize: '24px',
                                    fontFamily: 'poppins',
                                    overflowX: 'auto',
                                }),
                                valueContainer: (base) => ({
                                    ...base,
                                    display: 'flex',
                                    flexWrap: 'nowrap',
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

                        <h2 className="font-poppins text-[#174D51] text-[22px] md:text-[26px] mb-6 text-left">
                            Do you need to <span className="font-bold">fly in and out of the same airport</span> (e.g., if you're leaving your car there)? *
                        </h2>

                        <div className="flex flex-col items-start gap-4 text-[16px] md:text-[18px] text-left font-poppins w-full mb-4">
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="sameAirports"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.sameAirports}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Yes</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="anyAirports"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.anyAirports}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">No, I'm open to anywhere</span>
                            </label>
                        </div>
                        <button
                            onClick={() => handleNext()}
                            disabled={!page21validator()}
                            className="bg-[#003566] text-white font-poppins text-[16px] md:text-[20px] px-8 py-3 rounded-lg flex items-center gap-2 shadow-md transition mt-2"
                        >
                            Next <FaArrowRightLong size={20} />
                        </button>
                    </div>
                    {/* Right: Illustration */}
                    <div className="relative z-10 flex-1 flex-col items-center justify-center mt-10 md:mt-0 md:ml-8 hidden md:flex">
                        <div className="relative max-w-[400px] max-h-[400px] flex items-end justify-center">
                            <img
                                src="/Questionnaire/Image_1.png"
                                alt="Country selection illustration"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            Number: 22,
            type: "text",
            Content: (
                <div
                    className="w-full h-full flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-4 md:px-8 pb-8"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255,0.3), rgba(191, 231, 255, 0.2), rgba(2, 107, 205, 0.3))",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    {/* Left: Main Content */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center items-start w-full md:max-w-xl">
                        <h2 className="font-poppins text-[#174D51] text-[22px] md:text-[26px] mb-6 text-left">
                            How long would you like to be away for? *
                        </h2>
                        <div className="flex flex-col items-start gap-4 text-[16px] md:text-[18px] text-left font-poppins w-full mb-4">
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="fDtN"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.fDtN}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">4 Days / 3 Nights</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="fDfN"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.fDfN}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">5 Days / 4 Nights</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="sDsN"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.sDsN}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">7 Days / 6 Nights</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer mb-2">
                                <input
                                    type="checkbox"
                                    name="userChoice"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.userChoice}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Others</span>
                            </label>
                            {checkboxValues["userChoice"] && (
                                <input
                                    type="text"
                                    value={stayingDuration}
                                    onChange={handleStayingDurationChange}
                                    placeholder="Enter No.of Day and Nights"
                                    className="w-full max-w-[350px] px-4 py-3 border border-2 border-[#000000B2] bg-[#FFFFFF] rounded-lg font-poppins font-normal text-[12px] sm:text-[16px] md:text-[24px] text-[#000000] mb-4"
                                />
                            )}
                        </div>
                        <button
                            onClick={() => handleNext()}
                            disabled={!page22validator()}
                            className="bg-[#003566] text-white font-poppins text-[16px] md:text-[20px] px-8 py-3 rounded-lg flex items-center gap-2 shadow-md transition mt-2"
                        >
                            Next <FaArrowRightLong size={20} />
                        </button>
                    </div>
                    {/* Right: Illustration */}
                    <div className="relative z-10 flex-1 flex-col items-center justify-center mt-10 md:mt-0 md:ml-8 hidden md:flex">
                        <div className="relative max-w-[400px] max-h-[400px] flex items-end justify-center">
                            <img
                                src="/Questionnaire/Image_2.png"
                                alt="Trip duration illustration"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            Number: 23,
            type: "text",
            Content: (
                <div
                    className="w-full h-full flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-4 md:px-8 pb-8"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255,0.3), rgba(191, 231, 255, 0.2), rgba(2, 107, 205, 0.3))",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    {/* Left: Main Content */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center items-start w-full md:max-w-xl">
                        <h2 className="font-poppins text-[#174D51] text-[22px] md:text-[26px] mb-6 text-left">
                            Thinking of your trip dates, which of these is true? *
                        </h2>
                        <div className="flex flex-col items-start gap-4 text-[16px] md:text-[18px] text-left font-poppins w-full mb-4">
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="fixedStartDate"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.fixedStartDate}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">I have a fixed start date</span>
                            </label>
                            {checkboxValues.fixedStartDate && (
                                <div className="pl-8 mb-4">
                                    <p className="font-poppins font-normal text-[#000000] text-[16px] sm:text-[20px] md:text-[24px] mb-2">
                                        What's your <span className="font-bold">fixed start date? *</span>
                                    </p>
                                    <input
                                        type="date"
                                        name="fixedStartDateValue"
                                        value={fixedStartDateValue || ""}
                                        onChange={handlefixedStartDateChange}
                                        className="border border-2 border-[#000000B2] bg-[#FFFFFF] rounded-lg px-4 py-2 text-black"
                                        min={new Date(Date.now() + 86400000).toISOString().split("T")[0]} // Tomorrow's date
                                    />
                                </div>
                            )}

                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="preferredStartDate"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.preferredStartDate}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">I have a preferred start date, but can be flexible by +/- 1 day</span>
                            </label>
                            {checkboxValues.preferredStartDate && (
                                <div className="pl-8 mb-4">
                                    <p className="font-poppins font-normal text-[#000000] text-[16px] sm:text-[20px] md:text-[24px] mb-2">
                                        What's your <span className="font-bold">preferred start date? *</span>
                                    </p>
                                    <input
                                        type="date"
                                        name="preferredStartDateValue"
                                        value={preferredStartDateValue || ""}
                                        onChange={handlepreferredStartDateChange}
                                        className="border border-2 border-[#000000B2] bg-[#FFFFFF] rounded-lg px-4 py-2 text-black"
                                        min={new Date(Date.now() + 86400000).toISOString().split("T")[0]} // Tomorrow's date
                                    />
                                </div>
                            )}
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="completelyFlexible"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.completelyFlexible}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">I'm completely flexible and want to go on the best value dates</span>
                            </label>
                        </div>
                        <button
                            onClick={() => handleNext()}
                            disabled={!page23validator()}
                            className="bg-[#003566] text-white font-poppins text-[16px] md:text-[20px] px-8 py-3 rounded-lg flex items-center gap-2 shadow-md transition mt-2"
                        >
                            Next <FaArrowRightLong size={20} />
                        </button>
                    </div>
                    {/* Right: Illustration */}
                    <div className="relative z-10 flex-1 flex-col items-center justify-center mt-10 md:mt-0 md:ml-8 hidden md:flex">
                        <div className="relative max-w-[400px] max-h-[400px] flex items-end justify-center">
                            <img
                                src="/Questionnaire/Image_3.png"
                                alt="Trip dates illustration"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            Number: 24,
            type: "text",
            Content: (
                <div
                    className="w-full h-full flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-4 md:px-8 pb-8"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255,0.3), rgba(191, 231, 255, 0.2), rgba(2, 107, 205, 0.3))",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    {/* Left: Main Content */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center items-start w-full md:max-w-xl">
                        <h2 className="font-poppins text-[#174D51] text-[22px] md:text-[26px] mb-6 text-left">
                            <span className="font-normal">Would you rather</span> stay in a private apartment or a hotel? *
                        </h2>
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
                        <div className="flex flex-col items-start gap-4 text-[16px] md:text-[18px] text-left font-poppins w-full mb-4">
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="eitherIsFine"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.eitherIsFine}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Either is fine</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="exclusiveResidence"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.exclusiveResidence}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Exclusive residence</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="hotel"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.hotel}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Hotel</span>
                            </label>
                        </div>
                        <button
                            onClick={() => handleNext()}
                            disabled={!page24validator()}
                            className="bg-[#003566] text-white font-poppins text-[16px] md:text-[20px] px-8 py-3 rounded-lg flex items-center gap-2 shadow-md transition mt-2"
                        >
                            Next <FaArrowRightLong size={20} />
                        </button>
                    </div>
                    {/* Right: Illustration */}
                    <div className="relative z-10 flex-1 flex-col items-center justify-center mt-10 md:mt-0 md:ml-8 hidden md:flex">
                        <div className="relative max-w-[400px] max-h-[400px] flex items-end justify-center">
                            <img
                                src="/Questionnaire/Image_4.png"
                                alt="Accommodation illustration"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            Number: 25,
            type: "text",
            Content: (
                <div
                    className="w-full h-full flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-4 md:px-8 pb-8"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255,0.3), rgba(191, 231, 255, 0.2), rgba(2, 107, 205, 0.3))",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    {/* Left: Main Content */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center items-start w-full md:max-w-xl">
                        <h2 className="font-poppins text-[#174D51] text-[22px] md:text-[26px] mb-6 text-left">
                            <span className="font-normal">What's</span> your total budget for a 7-day trip? *
                        </h2>
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
                        <div className="flex flex-col items-start gap-4 text-[16px] md:text-[18px] text-left font-poppins w-full mb-4">
                            <div className="relative w-full">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[24px] text-[#000000] font-poppins">₹</span>
                                <input
                                    type="text"
                                    value={budget}
                                    onChange={handleBudgetChange}
                                    placeholder="38,999"
                                    className="w-full max-w-[350px] pl-10 pr-4 py-3 border-2 border-[#000000B2] bg-[#FFFFFF] rounded-lg font-poppins font-normal text-[24px] text-[#000000]"
                                    required
                                />
                            </div>
                        </div>
                        <button
                            onClick={() => handleNext()}
                            disabled={!page25validator()}
                            className="bg-[#003566] text-white font-poppins text-[16px] md:text-[20px] px-8 py-3 rounded-lg flex items-center gap-2 shadow-md transition mt-2"
                        >
                            Next <FaArrowRightLong size={20} />
                        </button>
                    </div>
                    {/* Right: Illustration */}
                    <div className="relative z-10 flex-1 flex-col items-center justify-center mt-10 md:mt-0 md:ml-8 hidden md:flex">
                        <div className="relative max-w-[400px] max-h-[400px] flex items-end justify-center">
                            <img
                                src="/Questionnaire/Image_1.png"
                                alt="Budget illustration"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            Number: 26,
            type: "text",
            Content: (
                <div
                    className="w-full h-full flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-4 md:px-8 pb-8"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255,0.3), rgba(191, 231, 255, 0.2), rgba(2, 107, 205, 0.3))",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    {/* Left: Main Content */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center items-start w-full md:max-w-xl">
                        <h2 className="font-poppins text-[#174D51] text-[22px] md:text-[26px] mb-6 text-left">
                            We'll do our best to budget your trip to this amount, but <span className="font-bold">would you be willing to increase it?</span> *
                        </h2>
                        <p className="font-poppins font-normal text-left mb-4 text-[20px] text-[#000000BF]">
                            This is in case flights to your best destination are more expensive than usual.
                        </p>
                        <div className="flex flex-col items-start gap-4 text-[16px] md:text-[18px] text-left font-poppins w-full mb-4">
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="maxBudget"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.maxBudget}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Nope, that's my max budget</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="increaseBy5000"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.increaseBy5000}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Yes, increase it by ₹5000</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="increaseBy7500"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.increaseBy7500}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Yes, increase it by ₹7500</span>
                            </label>
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="increaseBy10000"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.increaseBy10000}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Yes, increase it by ₹10000</span>
                            </label>
                        </div>
                        <button
                            onClick={() => handleNext()}
                            disabled={!page26validator()}
                            className="bg-[#003566] text-white font-poppins text-[16px] md:text-[20px] px-8 py-3 rounded-lg flex items-center gap-2 shadow-md transition mt-2"
                        >
                            Next <FaArrowRightLong size={20} />
                        </button>
                    </div>
                    {/* Right: Illustration */}
                    <div className="relative z-10 flex-1 flex-col items-center justify-center mt-10 md:mt-0 md:ml-8 hidden md:flex">
                        <div className="relative max-w-[400px] max-h-[400px] flex items-end justify-center">
                            <img
                                src="/Questionnaire/Image_2.png"
                                alt="Budget flexibility illustration"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            ),
        },


        // Chapter 4: The Final Touch: You!
        {
            Number: 27,
            type: "form",
            Content: (
                <div
                    className="w-full h-full flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-4 md:px-8 pb-8"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255,0.3), rgba(191, 231, 255, 0.2), rgba(38, 240, 255, 0.3))",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    {/* Left: Main Content */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center items-start w-full md:max-w-xl">
                        <h2 className="font-poppins text-[#174D51] text-[22px] md:text-[26px] mb-6 text-left">
                            What's the <span className="font-bold">best number to reach you?</span> *
                        </h2>
                        <p className="font-poppins font-normal text-[20px] text-[#000000BF] mb-8">
                            This is where we'll send your free Journey Proposal.
                        </p>

                        <div className="w-full mb-4">
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
                                    backgroundColor: "#FFFFFF",
                                    fontSize: "20px",
                                    color: "#000000",
                                    border: "2px solid #000000B2",
                                    borderRadius: "10px",
                                    boxSizing: "border-box"
                                }}
                                containerStyle={{
                                    width: "100%"
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
                                containerClass="w-full max-w-[350px]"
                            />
                        </div>
                        <button
                            onClick={() => handleNext()}
                            disabled={!page27validator(phone)}
                            className="bg-[#003566] text-white font-poppins text-[16px] md:text-[20px] px-8 py-3 rounded-lg flex items-center gap-2 shadow-md transition mt-2"
                        >
                            Next <FaArrowRightLong size={20} />
                        </button>
                    </div>
                    {/* Right: Illustration */}
                    <div className="relative z-10 flex-1 flex-col items-center justify-center mt-10 md:mt-0 md:ml-8 hidden md:flex">
                        <div className="relative max-w-[400px] max-h-[400px] flex items-end justify-center">
                            <img
                                src="/Questionnaire/Image_1.png"
                                alt="Contact information illustration"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            Number: 28,
            type: "text",
            Content: (
                <div
                    className="w-full h-full flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-4 md:px-8 pb-8"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255,0.3), rgba(191, 231, 255, 0.2), rgba(38, 240, 255, 0.3))",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    {/* Left: Main Content */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center items-start w-full md:max-w-xl">
                        <h2 className="font-poppins text-[#174D51] text-[22px] md:text-[26px] mb-6 text-left">
                            P.S. Want to <span className="font-bold">get Culture Curious and The Explorer in your inbox?</span> *
                        </h2>
                        <p className="font-poppins font-normal text-left mb-4 text-[20px] text-[#000000BF]">
                            As a travel lover, you'll enjoy reading them! If not, you can easily unsubscribe with one click. We'll never share your email either.
                        </p>
                        <div className="flex flex-col items-start gap-4 text-[16px] md:text-[18px] text-left font-poppins w-full mb-4">
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="yesCurious"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.yesCurious}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">I Agree</span>
                            </label>
                        </div>
                        <button
                            onClick={() => handleNext()}
                            disabled={!page28validator()}
                            className="bg-[#003566] text-white font-poppins text-[16px] md:text-[20px] px-8 py-3 rounded-lg flex items-center gap-2 shadow-md transition mt-2"
                        >
                            Next <FaArrowRightLong size={20} />
                        </button>
                    </div>
                    {/* Right: Illustration */}
                    <div className="relative z-10 flex-1 flex-col items-center justify-center mt-10 md:mt-0 md:ml-8 hidden md:flex">
                        <div className="relative max-w-[400px] max-h-[400px] flex items-end justify-center">
                            <img
                                src="/Questionnaire/Image_2.png"
                                alt="Newsletter subscription illustration"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            Number: 29,
            type: "text",
            Content: (
                <div
                    className="w-full h-full flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-4 md:px-8 pb-8"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255,0.3), rgba(191, 231, 255, 0.2), rgba(38, 240, 255, 0.3))",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    {/* Left: Main Content */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center items-start w-full md:max-w-xl">
                        <h2 className="font-poppins text-[#174D51] text-[22px] md:text-[26px] mb-6 text-left">
                            How did you first hear about BFT? *
                        </h2>
                        <div className="flex flex-col items-start gap-4 text-[16px] md:text-[18px] text-left font-poppins w-full mb-4">
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="someoneIKnow"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.someoneIKnow}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Someone I know IRL</span>
                            </label>

                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="influencer"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.influencer}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Influencer</span>
                            </label>

                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="press"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.press}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Press / blog feature</span>
                            </label>

                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="randomCustomer"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.randomCustomer}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Random BFT customer online</span>
                            </label>

                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="paidAd"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.paidAd}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">Paid ad from @blind fold trips (Facebook / Instagram)</span>
                            </label>
                        </div>
                        <button
                            onClick={() => handleNext()}
                            disabled={!page29validator()}
                            className="bg-[#003566] text-white font-poppins text-[16px] md:text-[20px] px-8 py-3 rounded-lg flex items-center gap-2 shadow-md transition mt-2"
                        >
                            Next <FaArrowRightLong size={20} />
                        </button>
                    </div>
                    {/* Right: Illustration */}
                    <div className="relative z-10 flex-1 flex-col items-center justify-center mt-10 md:mt-0 md:ml-8 hidden md:flex">
                        <div className="relative max-w-[400px] max-h-[400px] flex items-end justify-center">
                            <img
                                src="/Questionnaire/Image_3.png"
                                alt="How did you hear about us illustration"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            Number: 30,
            type: "text",
            Content: (
                <div
                    className="w-full h-full flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-4 md:px-8 pb-8"
                    style={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255,0.3), rgba(191, 231, 255, 0.2), rgba(38, 240, 255, 0.3))",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    {/* Left: Main Content */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center items-start w-full md:max-w-xl">
                        <h2 className="font-poppins text-[#174D51] text-[22px] md:text-[26px] mb-6 text-left">
                            To send your BFT proposal, we'll need your OK on our Privacy Policy! *
                        </h2>
                        <p className="font-poppins font-normal text-left text-[20px] text-[#000000BF] mb-2">
                            We don't misuse your data.
                        </p>
                        <p className="font-poppins font-normal text-left mb-4 text-[20px] text-[#000000BF]">
                            Full policy <a href="/privacy_policy" className="text-[#1059E0] font-bold">here</a>.
                        </p>
                        <div className="flex flex-col items-start gap-4 text-[16px] md:text-[18px] text-left font-poppins w-full mb-4">
                            <label className="flex items-start text-left w-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="agree"
                                    className="mr-4 w-5 h-5 md:w-6 md:h-6 text-[#5B5B5B] rounded-md shrink-0 mt-1 lg:mt-[6px]"
                                    checked={checkboxValues.agree}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="font-poppins text-[#5B5B5B] text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed">I Agree</span>
                            </label>
                        </div>
                        <button
                            onClick={() => handleSave()}
                            disabled={!page30validator()}
                            className="bg-[#003566] text-white font-poppins text-[16px] md:text-[20px] px-8 py-3 rounded-lg flex items-center gap-2 shadow-md transition mt-2"
                        >
                            Next <FaArrowRightLong size={20} />
                        </button>
                    </div>
                    {/* Right: Illustration */}
                    <div className="relative z-10 flex-1 flex-col items-center justify-center mt-10 md:mt-0 md:ml-8 hidden md:flex">
                        <div className="relative max-w-[400px] max-h-[400px] flex items-end justify-center">
                            <img
                                src="/Questionnaire/Image_4.png"
                                alt="Privacy policy illustration"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            Number: 31,
            type: "text",
            Content: (
                <div className="flex flex-col min-h-screen mt-8">
                    {/* Centered Content */}
                    <div className="flex flex-1 flex-col items-center justify-center text-center">
                        <h1 className="font-poppins font-semibold text-[28px] md:text-[36px] text-[#003566]">Stay tuned!</h1>
                        <p className="font-poppins text-[20px] text-[#174D51] mb-2">Your blindfolded adventure is on its way!</p>
                        <button
                            className="bg-[#174D51] text-white font-poppins text-[16px] md:text-[20px] px-8 py-3 rounded-lg flex items-center gap-2 shadow-md transition mt-2"
                            onClick={() => navigate('/')}
                        >
                            Go back Home
                        </button>
                        <div className="w-full flex justify-center">
                            <img
                                src="/Questionnaire/Stay_Tuned.jpg"
                                alt="Travelers Illustration"
                                className="max-w-3xl w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            ),
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

    const hasFetchedAirports = useRef(false);

    useEffect(() => {
        if (!hasFetchedAirports.current) {
            fetch('https://bft-backend.vercel.app/api/data/airportsData')
                .then((res) => res.json())
                .then((data) => setAirports(data))
                .catch((err) => console.error('Failed to fetch airport data', err));
            hasFetchedAirports.current = true;
        }
    }, []);

    // Ref to track if confirmation dialog has been shown
    const hasShownConfirmation = useRef(false);

    // LocalStorage Autosave/Restore with improvements
    useEffect(() => {
        // On mount, check for saved progress
        const saved = localStorage.getItem("bft_questionnaire_progress");
        if (saved && !hasShownConfirmation.current) {
            try {
                const data = JSON.parse(saved);

                // Validate data structure before restoring
                if (data && typeof data === 'object' && data.currentPageIndex !== undefined) {
                    hasShownConfirmation.current = true; // Mark as shown

                    if (window.confirm("You have unsaved progress. Do you want to continue where you left off?")) {
                        // Restore all relevant state with validation
                        setCurrentPageIndex(Math.min(data.currentPageIndex || 0, TOTAL_PAGES - 1));
                        setFavouriteDestination(data.favouriteDestination || "");
                        setTravelerCount(data.travelerCount || "1");
                        setCustomTravelerCount(data.customTravelerCount || "");
                        setSpecialOccasion(data.specialOccasion || "");
                        setFirstName(data.firstName || "");
                        setOtherAllergyDetails(data.otherAllergyDetails || "");
                        setAvoidDestination(data.avoidDestination || "");
                        setSelectedCountry(data.selectedCountry || "");
                        setSelectedCountryCode(data.selectedCountryCode || "");
                        setSelectedState(data.selectedState || "");
                        setStayingDuration(data.stayingDuration || "");
                        setAirports(Array.isArray(data.airports) ? data.airports : []);
                        setSelectedAirports(Array.isArray(data.selectedAirports) ? data.selectedAirports : []);
                        setBudget(data.budget || "");
                        setPhone(data.phone || "");
                        setPreferredStartDateValue(data.preferredStartDateValue || "");
                        setFixedStartDateValue(data.fixedStartDateValue || "");
                        setCheckboxValues(data.checkboxValues || {});
                    } else {
                        localStorage.removeItem("bft_questionnaire_progress");
                        resetAllState();
                    }
                } else {
                    // Invalid data structure, clear it
                    localStorage.removeItem("bft_questionnaire_progress");
                    resetAllState();
                }
            } catch (error) {
                console.error("Error parsing saved progress:", error);
                localStorage.removeItem("bft_questionnaire_progress");
                resetAllState();
            }
        }
    }, []);

    // Helper function to reset all state
    const resetAllState = () => {
        setCurrentPageIndex(0);
        setFavouriteDestination("");
        setTravelerCount("1");
        setCustomTravelerCount("");
        setSpecialOccasion("");
        setFirstName("");
        setOtherAllergyDetails("");
        setAvoidDestination("");
        setSelectedCountry("");
        setSelectedCountryCode("");
        setSelectedState("");
        setStayingDuration("");
        setAirports([]);
        setSelectedAirports([]);
        setBudget("");
        setPhone("");
        setPreferredStartDateValue("");
        setFixedStartDateValue("");
        setCheckboxValues({});
    };

    // Debounced save progress to localStorage
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            try {
                const data = {
                    currentPageIndex,
                    favouriteDestination,
                    travelerCount,
                    customTravelerCount,
                    specialOccasion,
                    firstName,
                    otherAllergyDetails,
                    avoidDestination,
                    selectedCountry,
                    selectedCountryCode,
                    selectedState,
                    stayingDuration,
                    airports,
                    selectedAirports,
                    budget,
                    phone,
                    preferredStartDateValue,
                    fixedStartDateValue,
                    checkboxValues,
                };

                // Only save if we have meaningful data
                if (currentPageIndex > 0 || Object.keys(checkboxValues).some(key => checkboxValues[key])) {
                    localStorage.setItem("bft_questionnaire_progress", JSON.stringify(data));
                }
            } catch (error) {
                console.error("Error saving progress:", error);
                // Clear corrupted data
                localStorage.removeItem("bft_questionnaire_progress");
            }
        }, 1000); // Debounce for 1 second

        return () => clearTimeout(timeoutId);
    }, [currentPageIndex, favouriteDestination, travelerCount, customTravelerCount, specialOccasion, firstName, otherAllergyDetails, avoidDestination, selectedCountry, selectedCountryCode, selectedState, stayingDuration, airports, selectedAirports, budget, phone, preferredStartDateValue, fixedStartDateValue, checkboxValues]);

    return (
        <div className="min-h-screen flex flex-col bg-white overflow-y-auto">
            <ToastContainer />

            {/* Header */}
            <div className="flex flex-col items-start justify-start px-6 pt-6">
                <img src="/Logo_1.png" alt="Logo" className="h-[52px] w-[240px]" />
            </div>

            {/* Dropdown to select chapter */}
            {currentPageIndex > 2 && currentPageIndex < 30 && (
                <div className="flex flex-col items-start justify-center px-6 pt-6 mb-8 bg-white">
                    <div className="relative">
                        <button
                            className="flex items-center gap-3 rounded-lg p-3 border-2 border-[#003566] text-[#003566] text-[16px] md:text-[20px] font-poppins font-semibold bg-white w-full"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            <img src="/Questionnaire/Icon.png" alt="Chapter Icon" className="w-6 h-6" />
                            <span>
                                {currentPageIndex >= 3 && currentPageIndex < 13 && "Chapter 1: You & Your Getaway Style"}
                                {currentPageIndex >= 13 && currentPageIndex < 20 && "Chapter 2: Your Mystery Trip Begins"}
                                {currentPageIndex >= 20 && currentPageIndex < 26 && "Chapter 3: The Must-Knows"}
                                {currentPageIndex >= 26 && "Chapter 4: The Final Touch: You!"}
                            </span>
                            <svg className="w-5 h-5 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {dropdownOpen && (
                            <div className="absolute top-full left-0 right-0 bg-white border-2 border-[#003566] rounded-lg mt-1 z-50 shadow-lg">
                                {[
                                    {
                                        id: 0,
                                        title: "Chapter 1: You & Your Getaway Style",
                                        validator: () => true, // Chapter 1 is always accessible
                                        isLast: false
                                    },
                                    {
                                        id: 1,
                                        title: "Chapter 2: Your Mystery Trip Begins",
                                        validator: chapterValidators[1],
                                        isLast: false
                                    },
                                    {
                                        id: 2,
                                        title: "Chapter 3: The Must-Knows",
                                        validator: chapterValidators[2],
                                        isLast: false
                                    },
                                    {
                                        id: 3,
                                        title: "Chapter 4: The Final Touch: You!",
                                        validator: chapterValidators[3],
                                        isLast: true
                                    }
                                ].map((chapter, index) => (
                                    <div
                                        key={chapter.id}
                                        className={`flex items-center gap-3 p-3 ${!chapter.isLast ? 'border-b border-gray-200' : ''} ${chapter.validator() ? 'hover:bg-gray-100 cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
                                        onClick={() => {
                                            if (chapter.validator()) {
                                                handleChapterClick(chapter.id);
                                                setDropdownOpen(false);
                                            }
                                        }}
                                    >
                                        <img src="/Questionnaire/Icon.png" alt={`Chapter ${chapter.id + 1}`} className="w-6 h-6" />
                                        <span className="text-[#003566] font-poppins font-semibold">{chapter.title}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Circle buttons to select the question */}
            {currentPageIndex > 2 && currentPageIndex < 30 && (
                <div className="flex flex-col items-start justify-center px-6 pb-6 mb-8 bg-white">
                    <div className="flex flex-row items-center justify-center gap-2 xs:gap-4">
                        {(() => {
                            // Determine which chapter we're in and get the number of pages
                            let chapterIndex = 0;
                            let pageOffset = 0;

                            if (currentPageIndex >= 3 && currentPageIndex < 13) {
                                chapterIndex = 0; // Chapter 1
                                pageOffset = 3;
                            } else if (currentPageIndex >= 13 && currentPageIndex < 20) {
                                chapterIndex = 1; // Chapter 2
                                pageOffset = 13;
                            } else if (currentPageIndex >= 20 && currentPageIndex < 26) {
                                chapterIndex = 2; // Chapter 3
                                pageOffset = 20;
                            } else if (currentPageIndex >= 26) {
                                chapterIndex = 3; // Chapter 4
                                pageOffset = 26;
                            }

                            const numberOfPages = numberOfPagesInChapters[chapterIndex];
                            const currentPageInChapter = currentPageIndex - pageOffset;

                            return Array.from({ length: numberOfPages }, (_, i) => (
                                <button
                                    key={i}
                                    disabled={(() => {
                                        // Check if any previous page in this chapter is unfilled
                                        for (let j = 0; j < i; j++) {
                                            if (!validators[pageOffset + j]()) {
                                                return true; // Disable if previous page is unfilled
                                            }
                                        }
                                        return false; // Enable if all previous pages are filled
                                    })()}
                                    className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                                        // Check if button should be disabled
                                        (() => {
                                            for (let j = 0; j < i; j++) {
                                                if (!validators[pageOffset + j]()) {
                                                    return true; // Disabled
                                                }
                                            }
                                            return false; // Enabled
                                        })()
                                            ? 'cursor-not-allowed'
                                            : 'cursor-pointer'
                                        } ${
                                        // Chapters 1,3 (even chapters) - use #003566
                                        chapterIndex % 2 === 0 && (i === currentPageInChapter || validators[pageOffset + i]())
                                            ? 'bg-[#003566] text-white'
                                            : chapterIndex % 2 === 0
                                                ? 'bg-[#D4D4D4] text-[#000000] hover:bg-[#003566] hover:text-white'
                                                : ''
                                        } ${
                                        // Chapters 2,4 (odd chapters) - use #174D51
                                        chapterIndex % 2 === 1 && (i === currentPageInChapter || validators[pageOffset + i]())
                                            ? 'bg-[#174D51] text-white'
                                            : chapterIndex % 2 === 1
                                                ? 'bg-[#D4D4D4] text-[#000000] hover:bg-[#174D51] hover:text-white'
                                                : ''
                                        }`}
                                    onClick={() => {
                                        // Only allow click if all previous pages are filled
                                        let canClick = true;
                                        for (let j = 0; j < i; j++) {
                                            if (!validators[pageOffset + j]()) {
                                                canClick = false;
                                                break;
                                            }
                                        }
                                        if (canClick) {
                                            setCurrentPageIndex(pageOffset + i);
                                        }
                                    }}
                                >
                                    <span className="font-poppins font-semibold text-sm">{i + 1}</span>
                                </button>
                            ));
                        })()}
                    </div>
                </div>
            )}

            {/* Page Content */}
            <div className="flex flex-col items-center justify-center">
                {Pages[currentPageIndex].Content || ''}
            </div>
        </div>
    );
}
