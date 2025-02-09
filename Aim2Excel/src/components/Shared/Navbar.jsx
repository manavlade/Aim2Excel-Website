"use client";

import { useState } from "react";
import { PhoneCall, Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-lg px-20 py-4 mb-5 sticky top-0">
            <div className="flex justify-between items-center ">
                {/* Logo */}
                <h1 className="text-xl font-bold">Aim2Excel</h1>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex gap-6 text-gray-700 font-medium">
                    <li className="hover:text-blue-500 cursor-pointer">Home</li>
                    <li className="hover:text-blue-500 cursor-pointer">About Us</li>
                    <li className="hover:text-blue-500 cursor-pointer">Our Services</li>
                    <li className="hover:text-blue-500 cursor-pointer">Portfolio</li>
                    <li className="hover:text-blue-500 cursor-pointer">Our Process</li>
                    <li className="hover:text-blue-500 cursor-pointer">Client Reviews</li>
                    <li className="hover:text-blue-500 cursor-pointer">Our Team</li>
                </ul>

                {/* Contact Button */}
                <div className="hidden lg:block">
                    <Button className="bg-blue-500" >
                        Contact Us
                        <PhoneCall className="ml-2 w-5 h-5" />
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden flex items-center text-gray-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="lg:hidden flex flex-col items-center bg-white py-5 shadow-md"
                    >
                        <ul className="flex flex-col gap-4 text-gray-700 text-lg">
                            <li className="hover:text-blue-500 cursor-pointer">Home</li>
                            <li className="hover:text-blue-500 cursor-pointer">About Us</li>
                            <li className="hover:text-blue-500 cursor-pointer">Our Services</li>
                            <li className="hover:text-blue-500 cursor-pointer">Portfolio</li>
                            <li className="hover:text-blue-500 cursor-pointer">Our Process</li>
                            <li className="hover:text-blue-500 cursor-pointer">Client Reviews</li>
                            <li className="hover:text-blue-500 cursor-pointer">Our Team</li>
                        </ul>

                        <Button className="mt-4 bg-blue-500">
                            Contact Us
                            <PhoneCall className="ml-2 w-5 h-5" />
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
