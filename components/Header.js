import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import { getCategories } from "../lib/hygraph";
import Link from "next/link";
import { useRouter } from "next/router";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  const currentRoute = router.pathname;
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <nav className="flex w-full items-center justify-between px-10 h-20 bg-white text-gray-700 border-b border-gray-200 z-10">
      {isOpen ? <RemoveScrollBar /> : ""}
      <Link href="/">
        <a className="font-bold text-3xl">Atomics</a>
      </Link>
      <ul className="justify-center items-center px-5 flex-1 hidden md:flex">
        <Link href="/" className="cursor-pointer">
          <a
            className={`group transition font-semibold text-lg ${
              currentRoute === "/"
                ? "bg-gray-200 rounded-md mx-1 px-2 py-1"
                : "px-2"
            }`}
          >
            Home
          </a>
        </Link>
        <Link href="/ressource" className="cursor-pointer">
          <a
            className={`group transition font-semibold text-lg ${
              currentRoute === "/ressource"
                ? "bg-gray-200 rounded-md mx-1 px-2 py-1"
                : "px-2"
            }`}
          >
            Ressource
          </a>
        </Link>
        <Link href="/category" className="cursor-pointer">
          <a
            className={`group transition font-semibold text-lg ${
              currentRoute === "/category"
                ? "bg-gray-200 rounded-md mx-1 px-2 py-1"
                : "px-2"
            }`}
          >
            Categories
          </a>
        </Link>
      </ul>

      <button
        aria-label="menu-navbar"
        className="md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      {/* authentification */}
      <div className="space-x-2 hidden md:inline-block">
        <button className="font-bold">SignIn</button>
        <button className="text-white font-bold transition duration-500 ease inline-block hover:bg-slate-800 bg-slate-900 px-4 py-2 rounded-md">
          SignUp
        </button>
      </div>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default Header;
