import React from "react";
import { Home, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 bg-gray-950/95 backdrop-blur-md text-white shadow-2xl shadow-gray-950/70 border-b border-orange-900">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3 cursor-pointer">
            <Home className="w-8 h-8 text-orange-800 drop-shadow-lg"/>
            <h1 className="text-4xl font-extrabold tracking-widest uppercase">
              Bakhira <span className="">Store</span>
            </h1>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
