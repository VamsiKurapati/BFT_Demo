import React from 'react';

// Footer component

export default function Footer() {
    return (
        <>
            {/* Footer Section */}
            <footer className="bg-[#00474CE5] text-[#FFFFFF] py-10">
            <div className="container mx-auto px-12">
                <div className="flex flex-wrap justify-between">
                    {/* Logo and Info */}
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <img src="/logo.png" alt="BlindFold Trips Logo" className="h-12 mb-4" />
                        <img src="Footer.png" alt="Footer Image" className="h-[222px] w-[332px] -scale-x-100" />
                    </div>
                    
                    {/* Quick Links */}
                    <div className="w-full md:w-1/5 mb-6 md:mb-0">
                        <h4 className="font-archivo-black font-weight-400 text-[24px] mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-[18px] font-goudy font-weight-400">
                            <li><a href="/how_it_works" className="hover:text-red-200">How It Works?</a></li>
                            <li><a href="/why_us" className="hover:text-red-200">Why Us?</a></li>
                            <li><a href="/contact" className="hover:text-red-200">Contact Us</a></li>
                        </ul>
                    </div>
                    
                    {/* Legal Information */}
                    <div className="w-full md:w-1/5 mb-6 md:mb-0">
                        <h4 className="font-archivo-black font-weight-400 text-[24px] mb-4">Legal Information</h4>
                        <ul className="space-y-2 text-[18px] font-goudy font-weight-400">
                            <li><a href="/terms_of_service" className="hover:text-red-200">Terms of Service</a></li>
                            <li><a href="/refund_policy" className="hover:text-red-200">Refund Policy</a></li>
                            <li><a href="/privacy_policy" className="hover:text-red-200">Privacy Policy</a></li>
                        </ul>
                    </div>
                    
                    {/* Contact */}
                    <div className="w-full md:w-1/4">
                        <h4 className="font-archivo-black font-weight-400 text-[24px] mb-4">Contact</h4>
                        <ul className="space-y-2 text-[18px] font-goudy font-weight-400">
                            <li>Email: contact@blindfoldtrips.com</li>
                            <li>Phone: +1 (234) 567-8901</li>
                            <li>Address: 123-45, 1st Main, NE Galaxy, Republic</li>
                        </ul>
                    </div>
                </div>
                
                {/* Copyright */}
                <div className="mt-4 text-center text-[16px] font-goudy font-weight-400">
                    <p>© 2025 BlindFold Trips. All rights reserved.</p>
                </div>
            </div>
            </footer>
        </>
    )
}
