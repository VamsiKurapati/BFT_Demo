import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboardIcon, X } from "lucide-react";

const DashNav = () => {
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();

    const navLinks = [
        { path: "home", label: "Home" },
        { path: "why_us", label: "Why Us" },
        { path: "how_it_works", label: "How It Works" },
        { path: "contact", label: "Contact Us" },
        { path: "login_register", label: "Login/Register" },
    ];

    return (
        <nav className="flex items-center justify-between w-full h-[10rem] shadow-md px-16 max-lg:px-2 font-goudy z-20"
            style={{backgroundImage: "url('/home.jpg')"}}
        >
            {/* Logo Section */}
            <div className="flex items-center space-x-3 pl-6 sm:pl-12 md:pl-0">
                <img src="/logo.png" alt="Logo" className="h-[3rem] w-[3rem] transition-transform duration-300 hover:scale-110" />
            </div>

            {/* Hamburger Icon */}
            <div className="lg:hidden pr-6">
                {showMenu ? (
                    <X className="h-8 w-8 text-gray-800 cursor-pointer" onClick={() => setShowMenu(false)} />
                ) : (
                    <LayoutDashboardIcon className="h-8 w-8 text-[#3B5998] cursor-pointer" onClick={() => setShowMenu(true)} />
                )}
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center max-md:space-x-4 space-x-6">
                {navLinks.map(({ path, label }) => (
                    <Link
                        key={path}
                        to={`/${path}`}
                        className={`text-[16px] font-normal hover:text-[#E20D0D] transition-colors duration-300 ${
                            location.pathname === `/${path}` ? "text-[#3B5998] hover:text-[#3B5998] font-semibold text-[24px]" : "text-gray-800"
                        } `}
                    >
                        {label}
                    </Link>
                ))}
            </div>

            {/* Dropdown Menu (Mobile) */}
            {showMenu && (
                <div className="absolute top-[6rem] right-0 w-full max-w-[320px] bg-blue-100 shadow-lg lg:hidden z-50">
                    <ul className="flex flex-col space-y-3 py-4">
                        {navLinks.map(({ path, label }) => (
                            <li key={path}>
                                <Link
                                    to={`/${path}`}
                                    className={`block text-center text-lg hover:text-[#E20D0D] py-2 transition ${
                                        location.pathname === `/${path}` ? "text-[#3B5998] hover:text-[#3B5998] text-[28px] font-semibold" : "text-[#000000]"
                                    }`}
                                    onClick={() => setShowMenu(false)}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default DashNav;
