import { BsCart3, BsWhatsapp } from "react-icons/bs";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import MovingTextBar from "./MovingTextBar ";
import StyleInjector from "./StylesInjector";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { getCartItemsCount } = useCart();
  const cartCount = getCartItemsCount();
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100 pb-1 z-30 fixed top-0 w-full transition-all delay-200">
        <MovingTextBar />
        <StyleInjector />
        <div className="px-6 md:px-12 lg:px-20">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className=" flex items-center justify-center gap-x-4">
              <Hamburger size={25} toggled={isOpen} toggle={setOpen} />
              <Link to="/" className="flex items-center">
                <img
                  src="/logowhite.png"
                  alt="Chasma Sansar"
                  className="h-24 w-auto object-contain hover:scale-105 transition-transform duration-200"
                />
              </Link>
            </div>

            {/* Cart and Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <a
                href="https://wa.me/9779821652909"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-2 text-green-500 hover:text-green-600 transition-colors duration-200 hover:scale-110 transform"
                title="Contact us on WhatsApp"
              >
                <BsWhatsapp className="h-7 w-7" />
              </a>

              {/* Cart Icon */}
              <Link to="/cart">
                <button className="relative p-2 text-gray-700 hover:text-brand-600 transition-colors duration-200">
                  <BsCart3 className="h-7 w-7" />
                  {cartCount > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-gradient-secondary rounded-full animate-pulse-glow">
                      {cartCount}
                    </span>
                  )}
                </button>
              </Link>

              <SignedOut>
                <SignInButton>
                  <button className="btn-gradient text-white hidden sm:block text-xs sm:text-base px-4 py-2 rounded-xl mr-4 shadow-lg hover:shadow-glow transition-all duration-300">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white/95 backdrop-blur-md z-50 shadow-2xl transform transition-transform duration-300 ease-in-out border-r border-gray-100  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={() => setOpen(false)}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-center">
              <img
                src="/logowhite.png"
                alt="Chasma Sansar"
                className="h-20 w-auto object-contain hover:scale-105 transition-transform duration-200"
              />
            </Link>
            <Hamburger
              size={25}
              className="flex items-center "
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>
          <div className="space-y-4">
            <Link
              to="/"
              className="block text-gray-600 hover:text-brand-600 hover:bg-gradient-to-r hover:from-brand-50 hover:to-brand-100 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200"
            >
              {" "}
              Home{" "}
            </Link>
            <Link
              to="/products"
              className="block text-gray-600 hover:text-brand-600 hover:bg-gradient-to-r hover:from-brand-50 hover:to-brand-100 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200"
            >
              {" "}
              Products
            </Link>
            <Link
              to="/cart"
              className="block text-gray-600 hover:text-brand-600 hover:bg-gradient-to-r hover:from-brand-50 hover:to-brand-100 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200"
            >
              {" "}
              Cart{" "}
            </Link>
            <a
              href="https://wa.me/9779821652909"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-green-600 hover:text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200"
            >
              <BsWhatsapp className="mr-3 h-5 w-5" />
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
