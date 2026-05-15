"use client";

import { useState, useEffect } from "react";
import Logo from "../Logo/Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "about", label: "About Us", icon: "ℹ️" },
    { id: "courses", label: "Courses", icon: "📚" },
    { id: "contact", label: "Contact", icon: "📞" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => scrollToSection("home")}
          >
            <Logo />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100"
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`p-2 rounded-lg transition-all ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                title={item.label}
              >
                {item.icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
