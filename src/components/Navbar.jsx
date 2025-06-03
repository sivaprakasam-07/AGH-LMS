import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex items-center justify-between">
      {/* Left: Logo + Hamburger */}
      <div className="flex items-center gap-4">
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <img src="src/assets/AGH-logo.jpg" alt="Logo" className="h-10" />
      </div>

      {/* Center: Nav Links (hidden on mobile) */}
      <ul className="hidden md:flex gap-6 text-md text-black font-medium">
        <li className="cursor-pointer hover:text-red-500">Home</li>
        <li className="cursor-pointer hover:text-red-500">Requests</li>
        <li className="cursor-pointer hover:text-red-500 flex items-center">
          College Assessment
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </li>
        <li className="cursor-pointer hover:text-red-500">Leaderboard</li>
      </ul>

      {/* Right: User Info (hidden on small screens) */}
      <div className="hidden md:flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/150?img=32"
          alt="User"
          className="w-8 h-8 rounded-full"
        />
        <span className="text-md font-bold text-black">Muskan Verma</span>
        <button className="bg-[#F73442] text-white flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#e42534] transition">
          <span className="text-base font-medium">Logout</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-10v1"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg p-4 md:hidden z-50 ml-10">
          <ul className="flex flex-col gap-4 text-sm font-medium text-gray-800">
            <li className="cursor-pointer hover:text-red-500">Home</li>
            <li className="cursor-pointer hover:text-red-500">Requests</li>
            <li className="cursor-pointer hover:text-red-500">College Assessment</li>
            <li className="cursor-pointer hover:text-red-500">Leaderboard</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
