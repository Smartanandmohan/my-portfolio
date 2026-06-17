'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-4 md:px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Logo + Name */}
        <Link
          href="#about-me"
          className="flex items-center"
        >
          <Image
            src="/brand-logo.png"
            alt="Logo"
            width={45}
            height={45}
            draggable={false}
            priority
            className="cursor-pointer w-[35px] h-[35px] md:w-[45px] md:h-[45px]"
          />
          <div className="hidden md:flex font-bold ml-[10px] text-gray-300 text-sm lg:text-base">Anand Mohan Dubey</div>
        </Link>

        {/* Web Navbar */}
        <div className="hidden lg:flex w-[500px] h-full flex-row items-center justify-between lg:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-cyan-500/30 bg-[#030014]/50 backdrop-blur-md mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 text-sm lg:text-base">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-cyan-400 transition"
              >
                {link.title}
              </Link>
            ))}


          </div>
        </div>

        {/* Social Icons (Web) */}
        <div className="hidden lg:flex flex-row gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-6 w-6 text-white" />
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button
          className="lg:hidden text-white focus:outline-none text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014]/95 backdrop-blur-md p-5 flex flex-col items-center text-gray-300 lg:hidden max-h-[calc(100vh-65px)] overflow-y-auto border-t border-cyan-500/20">
          {/* Links */}
          <div className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-cyan-400 transition text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}

          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-8 w-8 text-white" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};