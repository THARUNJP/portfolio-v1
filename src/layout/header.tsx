"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

type NavItem = {
  href: string;
  label: string;
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("Home");

  const navItems: NavItem[] = [
    { href: "#Home", label: "Home" },
    { href: "#About", label: "About" },
    { href: "#Portofolio", label: "Portofolio" },
    { href: "#Contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems
        .map((item) => {
          const section = document.querySelector(item.href) as HTMLElement | null;

          if (section) {
            return {
              id: item.href.replace("#", ""),
              offset: section.offsetTop - 550,
              height: section.offsetHeight,
            };
          }
          return null;
        })
        .filter((sec): sec is { id: string; offset: number; height: number } => Boolean(sec));

      const currentPosition = window.scrollY;

      const active = sections.find(
        (sec) =>
          currentPosition >= sec.offset &&
          currentPosition < sec.offset + sec.height
      );

      if (active) {
        setActiveSection(active.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const section = document.querySelector(href) as HTMLElement | null;

    if (section) {
      const top = section.offsetTop - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 bg-black 
        ${scrolled ? "shadow-lg" : "shadow-none"}
      `}
    >
      <div className="mx-auto px-[5%] sm:px-[5%] lg:px-[10%]">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#Home"
              onClick={(e) => scrollToSection(e, "#Home")}
              className="text-white text-xl font-bold"
            >
              Tharun
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-8 flex items-center space-x-8">
              {navItems.map((item) => {
                const active = activeSection === item.href.substring(1);

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="group relative px-1 py-2 text-sm font-medium"
                  >
                    <span
                      className={`relative transition-colors duration-300 ${
                        active
                          ? "text-white font-semibold"
                          : "text-gray-300 group-hover:text-white"
                      }`}
                    >
                      {item.label}
                    </span>

                    <span
                      className={`absolute bottom-0 left-0 w-full h-[2px] bg-white transition-transform duration-300 origin-left 
                        ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                      `}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative p-2 text-gray-300 hover:text-white transition-transform duration-300`}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out bg-black border-t border-white/10 
          ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}
        `}
      >
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item, index) => {
            const active = activeSection === item.href.substring(1);

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`block px-4 py-3 text-lg font-medium transition-all duration-300 
                  ${active ? "text-white font-semibold" : "text-gray-300 hover:text-white"}
                `}
                style={{
                  transitionDelay: `${index * 90}ms`,
                  transform: isOpen ? "translateX(0)" : "translateX(40px)",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};


export default Header;
