// src/components/NavbarDashboard.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Why Us?', path: '/why_us' },
  { label: 'How It Works?', path: '/how_it_works' },
  { label: 'Contact Us', path: '/contact' },
];

const NavbarDashboard = () => {
    const [loginDetails, setLoginDetails] = useState(JSON.parse(localStorage.getItem("loginDetails")) || null);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [showMenu, setShowMenu] = useState(false);

    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
            setShowMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        if (loginDetails) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [loginDetails]);

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("loginDetails");
        setLoginDetails(null);
        setIsLoggedIn(false);
        navigate('/');
    }

    return (
    <>
        <div className="container mx-auto px-4 py-8 flex justify-between items-center lg:pl-[48px] relative z-20">
            <div className="text-white text-2xl font-bold">
                <img src="/logo.png" alt="Logo" className="h-16" />
            </div>

            <div className="flex items-center">
                <nav className="hidden lg:flex">
                <ul className="flex gap-[12px] text-white font-goudy text-[20px] font-normal">
                    {navLinks.map((link) => (
                    <li key={link.path}>
                        <a
                        href={link.path}
                        className={`px-4 py-2 ${
                            location.pathname === link.path
                            ? 'bg-[#FFFFFFCC] text-black rounded-full'
                            : 'hover:text-gray-300'
                        }`}
                        >
                        {link.label}
                        </a>
                    </li>
                    ))}
                </ul>
                </nav>

                {!isLoggedIn ? (
                <div className="hidden lg:block ml-8 relative group">
                    <button
                    className="bg-[#A11716E5] text-[#FCD2B1] px-4 py-2 font-poppins font-bold rounded-full transition border border-1 group-hover:bg-[#003566] flex items-center"
                    style={{ borderColor: '#FCD2B1' }}
                    onClick={() => navigate('/login')}
                    >
                    Login / Register
                    <img
                        src="/Person.png"
                        alt="Person"
                        className="h-6 w-6 ml-2 absolute opacity-0 group-hover:opacity-100 group-hover:static transition-all duration-300"
                    />
                    </button>
                </div>
                ) : (
                <div className="hidden lg:block ml-8 relative group">
                    <button
                        className="bg-[#A11716E5] text-[#FCD2B1] px-8 py-2 font-poppins font-bold text-[20px] rounded-full transition border border-1 hover:bg-[#003566] flex items-center"
                        style={{ borderColor: '#FCD2B1' }}
                        onClick={() => setShowMenu(!showMenu)}
                    >
                    <img
                        src="/profile.png"
                        alt="profile"
                        className="h-[28px] w-[28px] mr-4 absolute opacity-0 group-hover:opacity-100 group-hover:static transition-all duration-300"
                    />
                    Profile
                    </button>

                    { showMenu && (
                    <div
                        ref={menuRef}
                        className="absolute top-full right-0 mt-2 w-72 bg-[#003566] text-white border-l-[6px] border-[#F5B501] rounded-2xl shadow-lg p-4 z-50"
                    >
                        <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <img
                                src={loginDetails.avatar || '/profile.png'}
                                alt="Avatar"
                                className="w-12 h-12 rounded-full mr-3"
                            />
                            <div>
                                <h3 className="font-bold text-lg">{loginDetails.name || 'John Doe'}</h3>
                                <p className="text-sm text-gray-200">{loginDetails.email || 'johndoe@gmail.com'}</p>
                            </div>
                        </div>
                        <button onClick={() => navigate('/profile/edit')}>
                            <img src="/edit.png" alt="edit" className="w-6 h-6" />
                        </button>
                        </div>

                        <hr className="border-gray-600 mb-2" />

                        <button
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#FFFFFF1A] rounded-lg transition"
                            onClick={() => {
                                setShowMenu(false);
                                navigate('/my-trips');
                            }}
                        >
                            <img src="/trips.png" alt="trips" className="w-6 h-6" />
                            My Trips
                        </button>

                        <button
                            className="w-full flex items-center gap-3 px-4 py-3 mt-2 hover:bg-[#FFFFFF1A] rounded-lg transition"
                            onClick={() => handleLogout()}
                            >
                            <img src="/logout.png" alt="logout" className="w-6 h-6" />
                            Logout
                        </button>
                    </div>
                    )}
                </div>
                )}

                <button
                className="lg:hidden ml-4 text-white focus:outline-none text-3xl"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                ☰
                </button>
            </div>
        </div>

        <AnimatePresence>
        {isMobileMenuOpen && (
            <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="absolute top-[100px] right-0 w-2/3 bg-[#FCD2B1] flex flex-col items-center py-6 z-20 lg:hidden overflow-hidden"
            >
            {navLinks.map((link) => (
                <a
                key={link.path}
                href={link.path}
                className={`text-lg py-2 px-6 ${
                    location.pathname === link.path
                    ? 'bg-[#FFFFFFCC] text-black rounded-full'
                    : 'text-white hover:text-gray-300'
                }`}
                >
                {link.label}
                </a>
            ))}

            {!isLoggedIn ? (
                <button
                className="mt-4 bg-[#A11716E5] text-[#FCD2B1] px-6 py-2 font-poppins font-bold rounded-full transition border border-1"
                style={{ borderColor: '#FCD2B1' }}
                onClick={() => navigate('/login')}
                >
                Login / Register
                </button>
            ) : (
                <div className="w-full px-6 mt-4">
                {/* Profile Toggle Button */}
                <button
                    className="w-3/4 sm:w-2/3 mx-auto flex items-center justify-center text-center bg-[#A11716E5] text-[#FCD2B1] px-4 py-2 font-poppins font-bold rounded-full transition border border-1 hover:bg-[#003566]"
                    style={{ borderColor: '#FCD2B1' }}
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <div className="flex items-center gap-2">
                    <img
                        src="/profile.png"
                        alt="profile"
                        className="h-6 w-6 rounded-full"
                    />
                    <span className="text-sm">Profile</span>
                    </div>
                </button>

                {/* Dropdown below profile */}
                {showMenu && (
                    <div className="mt-2 bg-[#003566] text-white border-l-[6px] border-[#F5B501] rounded-2xl shadow-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                        <img
                            src={loginDetails.avatar || '/profile.png'}
                            alt="Avatar"
                            className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                            <h3 className="font-bold text-base">
                            {loginDetails.name || 'John Doe'}
                            </h3>
                            <p className="text-xs text-gray-200">
                            {loginDetails.email || 'johndoe@gmail.com'}
                            </p>
                        </div>
                        </div>
                        <button onClick={() => navigate('/profile/edit')}>
                        <img src="/edit.png" alt="edit" className="w-5 h-5" />
                        </button>
                    </div>

                    <hr className="border-gray-600 mb-2" />

                    <button
                        className="w-full flex items-center gap-3 px-4 py-2 hover:bg-[#FFFFFF1A] rounded-lg transition text-sm"
                        onClick={() => {
                        setShowMenu(false);
                        navigate('/my-trips');
                        }}
                    >
                        <img src="/trips.png" alt="trips" className="w-5 h-5" />
                        My Trips
                    </button>

                    <button
                        className="w-full flex items-center gap-3 px-4 py-2 mt-2 hover:bg-[#FFFFFF1A] rounded-lg transition text-sm"
                        onClick={() => {
                        setShowMenu(false);
                        handleLogout();
                        }}
                    >
                        <img src="/logout.png" alt="logout" className="w-5 h-5" />
                        Logout
                    </button>
                    </div>
                )}
                </div>
            )}
            </motion.div>
        )}
        </AnimatePresence>
    </>
    );
};

export default NavbarDashboard;
