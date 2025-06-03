const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2 ml-2">
        <img src="src/assets/AGH-logo.jpg" alt="Logo" className="h-10" />
      </div>
    <ul className="flex gap-6 text-md text-black ml-18 font-medium">
        <li className="cursor-pointer hover:text-red-500">Home</li>
        <li className="cursor-pointer hover:text-red-500">Requests</li>
        <li className="cursor-pointer hover:text-red-500 flex items-center">
            College Assessment
            <svg
                className="w-4 h-4 ml-1 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        </li>
        <li className="cursor-pointer hover:text-red-500">Leaderboard</li>
    </ul>
    {/* User Info */}
      <div className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/150?img=32"
          alt="User"
          className="w-8 h-8 rounded-full"
        />
        <span className="text-md font-bold text-black mr-2">Muskan Verma</span>
        {/* Styled Logout Button */}
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
    </nav>
  );
};

export default Navbar;
