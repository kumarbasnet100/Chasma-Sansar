import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-10 px-5 py-10 text-white bg-secondary">
        <div className="w-full lg:w-96">
          <h2 className="text-lg font-bold">Chasma Sansar</h2>
          <h1 className="text-2xl font-bold mt-2">Purpose and Functionality</h1>
          <p className="mt-2">
            Glasses play a crucial role in eye health. Regular eye check-ups and
            the right prescription ensure optimal vision, preventing eye strain,
            headaches, and other related issues.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold">SHOP</h2>
          <ul className="mt-2 space-y-1">
            <Link to="/products">
              <li>All collections</li>
            </Link>
            <Link to="/products">
              <li>All products</li>
            </Link>
            <Link to="/cart">
              <li>My Cart</li>
            </Link>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold">ACCOUNT</h2>
          <ul className="mt-2 space-y-1">
            <Link>
              <li>About us</li>
            </Link>
            <Link>
              <li>Contact</li>
            </Link>
            <Link>
              <li>Privacy Policy</li>
            </Link>
            <Link>
              <li>Faq</li>
            </Link>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold">SHARE</h2>
          <p className="mt-2 w-full lg:w-96">
            Social sharing describes when social media users broadcast web
            content on a social network to their connections
          </p>
          <div className="flex mt-4 space-x-2">
            <div className="bg-accent p-2 rounded">
              <Link to="#">
                <svg
                  class="w-5 h-5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Link>
            </div>
            <div className="bg-accent p-2 rounded">
              <Link to="#">
                <svg
                  class="w-5 h-5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Link>
            </div>
            <div className="bg-accent p-2 rounded">
              <Link to="#">
                <svg
                  class="w-5 h-5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class=" text-gray-400 font-normal py-8 px-5 flex flex-col md:flex-row items-center gap-4">
        <span className="text-center">
          Copyright © 2025 Chasma Sansar. All right reserved. Developed by{" "}
          <span class="text-black py-1 hover:text-custom-red cursor-pointer">
            {" "}
            Kumar Basnet
          </span>
        </span>
        <span class="flex gap-4">
          <span class="border-r border-gray-300 pr-4">Terms & Conditions</span>
          <span>Policy</span>
        </span>
      </div>
    </>
  );
}

export default Footer;
