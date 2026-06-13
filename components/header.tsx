"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-zinc-800/50"
          : "bg-black"
      }`}
    >
      {/* Tailwind Custom Infinite Marquee Styles */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="text-lg font-bold text-white tracking-tight hover:text-purple-400 transition-colors"
          >
            CfxPlayers
          </a>

          {/* Navigation - Center */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Login Button */}
          <div className="hidden md:flex items-center">
            <a
              href="https://panel.cfxplayers.com"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-md transition-all"
            >
              Login
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-zinc-800/50"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://panel.cfxplayers.com"
                target="_blank"
                rel="noreferrer"
                className="mt-2 mx-4 flex items-center justify-center px-4 py-3 text-sm font-medium text-white bg-purple-600 rounded-md transition-all"
              >
                Login
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Scrolling White Bar - Placed Below the Navbar */}
      <div className="bg-white text-black border-t border-zinc-200 flex items-center overflow-hidden h-9 select-none w-full">
        <div className="flex whitespace-nowrap animate-marquee">
          {/* First instance of text */}
          <span className="text-xs sm:text-sm font-semibold tracking-wide pr-24">
            Join our new discord with all infomation about this project.{" "}
            <a
              href="https://discord.gg/WbzSbF39j8"
              target="_blank"
              rel="noreferrer"
              className="underline text-purple-700 hover:text-purple-900 font-bold ml-1 transition-colors"
            >
              Join now! https://discord.gg/WbzSbF39j8
            </a>
          </span>

          {/* Second cloned instance of text (Creates the seamless reappearing loop) */}
          <span
            className="text-xs sm:text-sm font-semibold tracking-wide pr-24"
            aria-hidden="true"
          >
            Join our new discord with all infomation about this project.{" "}
            <a
              href="https://discord.gg/WbzSbF39j8"
              target="_blank"
              rel="noreferrer"
              className="underline text-purple-700 hover:text-purple-900 font-bold ml-1 transition-colors"
            >
              Join now! https://discord.gg/WbzSbF39j8
            </a>
          </span>
        </div>
      </div>
    </motion.header>
  );
}
