import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BOARD, CONTACT, PLACE, SCHOOL_NAME } from "../../utils/constants";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "../ui/sheet";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/learning", label: "Learning" },
    { path: "/career", label: "Career" },
    { path: "/sports", label: "Sports" },
    { path: "/events", label: "Events" },
    { path: "/news", label: "News" },
    { path: "/faculty", label: "Faculty" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <header className={`bg-white border-b border-gray-200 ${className}`}>
      <div className="bg-blue-900 w-full text-white text-sm px-4 py-2 hidden md:flex  justify-between items-center">
        <p>{PLACE}</p>
        <p>{CONTACT}</p>
      </div>
      <div className=" px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gray-300 flex items-center justify-center rounded">
              <span className="text-sm font-medium">Logo</span>
            </div>
            <div>
              <h1 className="text-[14px] sm:text-lg font-semibold text-gray-900 leading-tight">
                {SCHOOL_NAME}
              </h1>
              <p className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-wider">
                {BOARD}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:space-x-4 xl:space-x-8 text-[13px] xl:text-sm">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-gray-800 hover:text-blue-600 transition-colors duration-200 uppercase ${
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-gray-800 hover:text-blue-600">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </SheetTrigger>

              <SheetContent side="left" className="w-[80%] px-[20px] py-4">
                <div className="mb-2 flex items-center space-x-2 flex-wrap">
                  <div className="w-10 h-10 bg-gray-300 flex items-center justify-center rounded">
                    <span className="text-sm font-medium">Logo</span>
                  </div>
                  <div>
                    <h1 className="text-[16px] font-semibold text-gray-900">
                      {SCHOOL_NAME}
                    </h1>
                    <p className="text-[12px] text-gray-600 uppercase tracking-wide">
                      {BOARD}
                    </p>
                  </div>
                </div>

                <div className="mt-1 flex flex-col space-y-4">
                  {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <SheetClose asChild key={item.path}>
                        <Link
                          to={item.path}
                          className={`text-base font-medium uppercase ${
                            isActive ? "text-blue-600" : "text-gray-800"
                          } hover:text-blue-600 transition-colors`}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
