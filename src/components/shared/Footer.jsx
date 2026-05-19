import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[var(--color-primary)] text-white mt-10">
        <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-3">
            <h1 className="text-2xl font-bold text-secondary">StudyNook</h1>
            <p className="text-gray-300 text-sm">
              Find quiet study rooms, book instantly, and boost your
              productivity.
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="font-semibold mb-3 text-secondary">Quick Links</h2>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/rooms">Rooms</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div className="space-y-3">
            <h2 className="font-semibold text-secondary">Contact</h2>
            <p className="text-gray-300 text-sm">
              Email: support@studynook.com
            </p>
            <p className="text-gray-300 text-sm">Phone: +880 123 456 789</p>

            <div className="flex gap-4 pt-2 text-xl">
              <FaFacebook className="hover:text-secondary cursor-pointer" />
              <FaInstagram className="hover:text-secondary cursor-pointer" />
              <FaLinkedin className="hover:text-secondary cursor-pointer" />
              <FaXTwitter className="hover:text-secondary cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 text-center py-4 text-gray-400 text-sm">
          &copy; 2026 StudyNook. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
