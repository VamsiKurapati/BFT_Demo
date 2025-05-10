import React from 'react';

export default function Footer() {
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
                    <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between items-center md:items-start lg:items-start mt-6">
                        {/* Quick Links */}
                        <div className="w-full sm:w-full md:w-1/2 lg:w-1/4 mb-6 sm:mb-0 flex flex-col items-center text-center">
                            <h4 className="font-archivo-black font-weight-400 text-[24px] mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-[18px] font-goudy font-weight-400">
                                <li><a href="/how_it_works" className="hover:text-red-200">How It Works?</a></li>
                                <li><a href="/why_us" className="hover:text-red-200">Why Us?</a></li>
                                <li><a href="/contact" className="hover:text-red-200">Contact Us</a></li>
                            </ul>
                        </div>
                        
                        {/* Legal Information */}
                        <div className="w-full sm:w-full md:w-1/2 lg:w-1/4 mb-6 sm:mb-0 flex flex-col items-center text-center">
                            <h4 className="font-archivo-black font-weight-400 text-[24px] mb-4">Legal Information</h4>
                            <ul className="space-y-2 text-[18px] font-goudy font-weight-400">
                                <li><a href="/terms_of_service" className="hover:text-red-200">Terms of Service</a></li>
                                <li><a href="/refund_policy" className="hover:text-red-200">Refund Policy</a></li>
                                <li><a href="/privacy_policy" className="hover:text-red-200">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="w-full sm:w-full md:w-1/2 lg:w-1/5 sm:flex sm:flex-col items-center text-center md:mt-6">
                        <h4 className="font-archivo-black font-weight-400 text-[24px] mb-4">Contact</h4>
                        <ul className="space-y-2 text-[18px] font-goudy font-weight-400">
                            <li>Email: contact@blindfoldtrips.com</li>
                            <li>Phone: +1 (234) 567-8901</li>
                            <li>Address: 123-45, 1st Main, NE Galaxy, Republic</li>
                        </ul>
                    </div>
                    
                    {/* Copyright */}
                    <div className="mt-4 text-center text-[16px] font-goudy font-weight-400">
                        <p>© 2025 BlindFold Trips. All rights reserved.</p>
                    </div>
                </div>
                <div className="container mx-auto px-12 hidden md:block">
                    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between items-center md:items-start lg:items-start">
                        {/* Logo and Info */}
                        <div className="w-full sm:w-full md:w-1/2 lg:w-1/4 mb-6 sm:mb-0 flex flex-col items-center text-center">
                            <img src="/logo.png" alt="BlindFold Trips Logo" className="h-12 mb-4" />
                            <img src="Footer.png" alt="Footer Image" className="h-[222px] w-[332px] hidden md:block -scale-x-100" />
                        </div>
                        
                        {/* Quick Links */}
                        <div className="w-full sm:w-full md:w-1/2 lg:w-1/5 mb-6 sm:mb-0 flex flex-col items-center text-center">
                            <h4 className="font-archivo-black font-weight-400 text-[24px] mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-[18px] font-goudy font-weight-400">
                                <li><a href="/how_it_works" className="hover:text-red-200">How It Works?</a></li>
                                <li><a href="/why_us" className="hover:text-red-200">Why Us?</a></li>
                                <li><a href="/contact" className="hover:text-red-200">Contact Us</a></li>
                            </ul>
                        </div>
                        
                        {/* Legal Information */}
                        <div className="w-full sm:w-full md:w-1/2 lg:w-1/5 mb-6 sm:mb-0 flex flex-col items-center text-center">
                            <h4 className="font-archivo-black font-weight-400 text-[24px] mb-4">Legal Information</h4>
                            <ul className="space-y-2 text-[18px] font-goudy font-weight-400">
                                <li><a href="/terms_of_service" className="hover:text-red-200">Terms of Service</a></li>
                                <li><a href="/refund_policy" className="hover:text-red-200">Refund Policy</a></li>
                                <li><a href="/privacy_policy" className="hover:text-red-200">Privacy Policy</a></li>
                            </ul>
                        </div>
                        
                        {/* Contact */}
                        <div className="w-full sm:w-full md:w-1/2 lg:w-1/4 sm:flex sm:flex-col items-center text-center">
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
