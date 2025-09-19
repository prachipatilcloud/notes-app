import { useState } from "react";
import logo from "../../assets/logo.png";

export const Navbar = ({ onMenuToggle }) => {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200 px-4 py-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    {/* Mobile menu button */}
                    <button 
                        onClick={onMenuToggle}
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <span className="material-icons-outlined text-gray-600">
                            menu
                        </span>
                    </button>
                    
                    {/* Logo and title */}
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10">
                            <img className="w-full h-full rounded-lg" src={logo} alt="NoteCraft Logo" />
                        </div>
                        <h1 className="text-indigo-600 text-xl sm:text-2xl lg:text-3xl font-bold">
                            NoteCraft
                        </h1>
                    </div>
                </div>

                {/* Right side - Search or actions can be added here */}
                <div className="flex items-center gap-2">
                    {/* Optional: Add search or user menu here */}
                </div>
            </div>
        </header>
    );
};