import { useState } from "react";
import {
  HiMenu,
  HiX,
  HiChevronDown,
  HiHome,
} from "react-icons/hi";
import { Link } from "react-router";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const navItems = [
    {
      label: "About",
      items: [
        { name: "Team", href: "#team" },
        { name: "Vision", href: "#vision" },
        { name: "Careers", href: "#careers" },
      ],
    },
    {
      label: "Teachers",
      items: [
        { name: "College Section", href: "#college-section" },
        { name: "School Section", href: "#school-section" },
        { name: "primary Section", href: "#primary-section" },
      ],
    },
   
   
  ];

  return (
    <nav className=" bg-purple-300 shadow z-50">
      <div className="w-full mx-auto px-4 py-3 flex items-center justify-between">
        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center items-center space-x-10 w-full font-medium text-gray-800 text-lg">
          <li className="hover:text-pink-600 transition flex items-center gap-1 cursor-pointer">
            <Link to = "/" className="flex items-center gap-1" >
              <HiHome size={20} /> Home
            </Link>
           
          </li>

          {navItems.map(({ label, items }) => (
            <li key={label} className="relative group cursor-pointer">
              <div className="flex items-center gap-1 hover:text-pink-600 transition">
                {label} <HiChevronDown /> 
              </div>
              <ul className="absolute left-1/2 -translate-x-1/2 mt-2 w-44 bg-white shadow-xl rounded-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all origin-top z-50">
                {items.map(({ name, href }) => (
                  <li key={name} className="px-5 py-2 hover:bg-green-500 text-sm">
                    <a href={href} className="block w-full">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            
          ))}
          {/* stuff */}
           <li className="hover:text-pink-600 transition">
            <a href="#">Stuff</a>
          </li>
          {/* contact */}
          <li className="hover:text-pink-600 transition">
            <a href="#">Contact</a>
          </li>
        </ul>

        {/* Mobile Toggle Center */}
        <div className="md:hidden w-full flex justify-between">
          <button
            className="text-gray-800"
            onClick={() => setNavOpen(true)}
          >
            {/* Menu */}
           <span className="text-md font-bold hover:text-white hover:bg-violet-600 p-2 rounded-sm ">Menu</span>
          </button>
          <button
            className="text-gray-800"
            onClick={() => setNavOpen(true)}
          >
            <HiMenu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`absolute top-0 left-0 w-full bg-white transition-transform duration-300 ${
          navOpen ? "translate-y-0" : "-translate-y-full"
        } px-6 pt-20 pb-6 z-50 shadow-lg`}
      >
        {/* Close Icon */}
        <button
          className="absolute top-4 right-4 text-gray-800"
          onClick={() => setNavOpen(false)}
        >
          <HiX size={28} />
        </button>

       
        {/* Mobile Menu Items */}
        <ul className="flex flex-col items-center space-y-6 text-lg text-gray-800 font-medium">
          <li onClick={() => setNavOpen(false)} className="hover:text-pink-600 transition">
            <a href="#home" className="flex items-center gap-2">
              <HiHome size={20} /> Home
            </a>
          </li>

          {navItems.map(({ label, items }) => (
            <li key={label} className="text-center">
              <button
                onClick={() => toggleDropdown(label)}
                className="flex items-center gap-1 hover:text-pink-600 transition"
              >
                {label} <HiChevronDown />
              </button>
              {openDropdown === label && (
                <ul className="mt-3 space-y-2 text-sm">
                  {items.map(({ name, href }) => (
                    <li key={name}>
                      <a
                        href={href}
                        className="hover:text-pink-600 block"
                        onClick={() => setNavOpen(false)}
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="hover:text-pink-600 transition">
            <a href="#">Stuff</a>
          </li>
          <li className="hover:text-pink-600 transition">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
