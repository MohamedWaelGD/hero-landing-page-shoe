import React from "react";
import brand from "../../public/brand_logo.svg";

const Navbar = () => {
    return (
        <nav className="flex justify-between container mx-auto px-20 py-5">
            <img src={brand} />
            <ul className="list-none uppercase justify-center items-center sm:flex gap-3 md:gap-6 hidden">
                <li className="block font-semibold">
                    <a href="/">Menu</a>
                </li>
                <li className="block font-semibold">
                    <a href="/">Location</a>
                </li>
                <li className="block font-semibold">
                    <a href="/">About</a>
                </li>
                <li className="block font-semibold">
                    <a href="/">Contact</a>
                </li>
            </ul>
            <button className="bg-red-600 px-4 py-2 text-white font-semibold hidden sm:block">Login</button>
            <button className="sm:hidden flex flex-col gap-1 items-center justify-center w-8">
                <div className="w-full h-1 rounded bg-black"></div>
                <div className="w-full h-1 rounded bg-black"></div>
                <div className="w-full h-1 rounded bg-black"></div>
            </button>
        </nav>
    );
};

export default Navbar;
  