import React from "react";

const Sidebar = ({ children, isOpen, setIsOpen }) => {
  return (
    <aside
      className={
        " fixed overflow-hidden md:hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0"
          : " transition-all delay-200 opacity-0 translate-x-full")
      }
    >
      <div
        className={
          " w-screen max-w-sm right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <div className="relative w-screen max-w-sm pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <header className="px-6 py-5 font-bold text-lg flex-1">
            <div className="flex-1 text-end">
              <button
                aria-label="menu-sidebar"
                onClick={() => {
                  setIsOpen(false);
                }}
                className=""
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
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </button>
            </div>
          </header>
          {children}
        </div>
      </div>
      <div
        className="w-screen h-full"
        onClick={() => {
          setIsOpen(false);
        }}
      ></div>
    </aside>
  );
};

export default Sidebar;
