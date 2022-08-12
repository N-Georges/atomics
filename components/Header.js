import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import { getCategories } from "../lib/hygraph";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  const currentRoute = router.pathname;
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  const { data: session, status } = useSession();

  const loading = status === "loading";

  if (loading) return null;
  return (
    <>
      <nav className=" w-full hidden md:inline-flex items-center justify-between px-10 h-20 bg-white text-gray-700 border-b border-gray-200 z-10">
        {isOpen ? <RemoveScrollBar /> : ""}
        <Link href="/">
          <a className="font-bold text-3xl">Atomics</a>
        </Link>
        <ul className="justify-end items-center px-5 flex-1 hidden md:flex">
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
        {/* nav mobile bottom */}
      </nav>
      <div className="bg-white md:hidden w-full h-16 px-6 py-2 flex justify-between text-gray-font fixed bottom-0 shadow-lg z-40 border-t border-gray-99">
        <Link href="/" className="flex">
          <a className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span>Home</span>
          </a>
        </Link>
        <Link href="/ressource">
          <a className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            <span>Ressource</span>
          </a>
        </Link>
        <Link href="/category">
          <a className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            <span>Categories</span>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Header;
