import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import ToastContainer from './ToastContainer';
import { toast } from 'react-toastify';

export default function Footer() {
    const [email, setEmail] = useState("");

    const validEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async () => {
        try {
            const res = await fetch("https://bft-backend.vercel.app/api/data/saveEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (res.ok) {
                console.log("Email submitted successfully!");
                setEmail("");
                toast.success("Thanks for subscribing");
                return true;
            } else {
                toast.error("Please try again.");
                return false;
            }
        } catch (err) {
            console.error("Error submitting email:", err.message);
            toast.error("Please try again...");
        }
    };

    return (
        <>
            {/* Footer Section */}
            <footer className="bg-[#00474CE5] text-[#FFFFFF] py-10">
                <div className="container mx-auto px-12 md:hidden">
                    <div className="flex flex-col sm:flex-row sm:flex-col md:flex-row lg:flex-row justify-between items-center md:items-start lg:items-start">
                        {/* Logo and Info */}
                        <div className="w-full sm:w-full md:w-1/2 lg:w-1/4 mb-6 sm:mb-0 flex flex-col items-center text-center">
                            <img src="/logo.png" alt="BlindFold Trips Logo" className="h-12 mb-4" />
                            <img src="Footer.png" alt="Footer Image" className="h-[222px] w-[332px] hidden md:block -scale-x-100" />
                        </div>
                    </div>

                    {/* For screens >= sm and <= md, Quick Links and Legal Information in 2 rows */}
                    <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between items-center md:items-start lg:items-start mt-0 sm:mt-6">
                        {/* Quick Links */}
                        <div className="w-full sm:w-full md:w-1/2 lg:w-1/4 mb-6 sm:mb-0 flex flex-col items-center text-center">
                            <h4 className="font-archivo-black font-normal text-[24px] mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-[18px] font-goudy font-normal">
                                <li><a href="/how_it_works" className="hover:text-red-200">How It Works?</a></li>
                                <li><a href="/why_us" className="hover:text-red-200">Why Us?</a></li>
                                <li><a href="/contact" className="hover:text-red-200">Contact Us</a></li>
                            </ul>
                        </div>

                        {/* Legal Information */}
                        <div className="w-full sm:w-full md:w-1/2 lg:w-1/4 mb-6 sm:mb-0 flex flex-col items-center text-center">
                            <h4 className="font-archivo-black font-normal text-[24px] mb-4">Legal Information</h4>
                            <ul className="space-y-2 text-[18px] font-goudy font-normal">
                                <li><a href="/terms_of_service" className="hover:text-red-200">Terms of Service</a></li>
                                <li><a href="/refund_policy" className="hover:text-red-200">Refund Policy</a></li>
                                <li><a href="/privacy_policy" className="hover:text-red-200">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="w-full sm:w-full md:w-1/2 lg:w-1/5 sm:flex sm:flex-col items-center text-center mt-6">
                        <h4 className="font-archivo-black font-normal text-[24px]">Subscribe to Our Newsletter</h4>
                        <p className="font-poppins font-light text-[#FFFFFF] text-[12px]">Get surprise travel inspiration, updates & offers straight to your inbox.</p>
                        <div className="flex items-center w-full bg-transparent border border-white rounded-full px-4 py-2 mt-4">
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email"
                                className="flex-1 bg-transparent outline-none text-white placeholder-white/60"
                            />
                            <button
                                type="submit"
                                disabled={!validEmail(email)}
                                onClick={handleSubmit}
                                className={`p-2 ml-2 transition-transform duration-200 ${!validEmail(email) ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
                                    }`}
                            >
                                <img src="/send-icon.png" alt="Send" className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="flex gap-6 mt-6 text-white text-2xl">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF className="hover:text-amber-400 transition-colors duration-200" />
                            </a>
                            <a href="https://www.instagram.com/blind_fold_trips?igsh=OXR2amV0NWx6bnpv" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="hover:text-amber-400 transition-colors duration-200" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaXTwitter className="hover:text-amber-400 transition-colors duration-200" />
                            </a>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-4 text-center text-[16px] font-goudy font-normal">
                        <p>© 2025 BlindFold Trips. All rights reserved.</p>
                    </div>
                </div>

                <div className="container mx-auto px-8 hidden md:block">
                    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between items-center md:items-start lg:items-start">
                        {/* Logo and Info */}
                        <div className="w-full sm:w-full md:w-1/2 lg:w-1/4 mb-6 sm:mb-0 flex flex-col items-center text-center">
                            <img src="/logo.png" alt="BlindFold Trips Logo" className="h-12 mb-4" />
                            <img src="Footer.png" alt="Footer Image" className="h-[222px] w-[332px] hidden md:block -scale-x-100" />
                        </div>

                        {/* Quick Links */}
                        <div className="w-full sm:w-full md:w-1/2 lg:w-1/5 mb-6 sm:mb-0 flex flex-col items-center text-center">
                            <h4 className="font-archivo-black font-normal text-[24px] mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-[18px] font-goudy font-normal">
                                <li><a href="/how_it_works" className="hover:text-red-200">How It Works?</a></li>
                                <li><a href="/why_us" className="hover:text-red-200">Why Us?</a></li>
                                <li><a href="/contact" className="hover:text-red-200">Contact Us</a></li>
                            </ul>
                        </div>

                        {/* Legal Information */}
                        <div className="w-full sm:w-full md:w-1/2 lg:w-1/5 mb-6 sm:mb-0 flex flex-col items-center text-center">
                            <h4 className="font-archivo-black font-normal text-[24px] mb-4">Legal Information</h4>
                            <ul className="space-y-2 text-[18px] font-goudy font-normal">
                                <li><a href="/terms_of_service" className="hover:text-red-200">Terms of Service</a></li>
                                <li><a href="/refund_policy" className="hover:text-red-200">Refund Policy</a></li>
                                <li><a href="/privacy_policy" className="hover:text-red-200">Privacy Policy</a></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="w-full sm:w-full md:w-1/2 lg:w-1/4 sm:flex sm:flex-col items-center text-center">
                            <h4 className="font-archivo-black font-normal text-[24px]">Subscribe to Our Newsletter</h4>
                            <p className="font-poppins font-light text-[#FFFFFF] text-[12px]">Get surprise travel inspiration, updates & offers straight to your inbox.</p>
                            <div className="flex items-center w-full bg-transparent border border-white rounded-full px-4 py-2 mt-4">
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email"
                                    className="flex-1 bg-transparent outline-none text-white placeholder-white/60"
                                />
                                <button
                                    type="submit"
                                    disabled={!validEmail(email)}
                                    onClick={handleSubmit}
                                    className={`p-2 ml-2 transition-transform duration-200 ${!validEmail(email) ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
                                        }`}
                                >
                                    <img src="/send-icon.png" alt="Send" className="w-6 h-6" />
                                </button>
                            </div>
                            <div className="flex gap-6 mt-6 text-white text-2xl">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FaFacebookF className="hover:text-amber-400 transition-colors duration-200" />
                                </a>
                                <a href="https://www.instagram.com/blind_fold_trips?igsh=OXR2amV0NWx6bnpv" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="hover:text-amber-400 transition-colors duration-200" />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <FaXTwitter className="hover:text-amber-400 transition-colors duration-200" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-4 text-left text-[16px] font-goudy font-normal">
                        <p>© 2025 BlindFold Trips. All rights reserved.</p>
                    </div>
                </div>
            </footer>
            <ToastContainer />
        </>
    )
}
