import { useState } from 'react';

interface NavbarProps {
   setPageState: React.Dispatch<React.SetStateAction<string>>  
}

function Navbar ({setPageState}:NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        className="p-2 focus:outline-none"
        onClick={toggleMenu}
      >
        <div className="w-6 h-0.5 bg-black mb-1"></div>
        <div className="w-6 h-0.5 bg-black mb-1"></div>
        <div className="w-6 h-0.5 bg-black"></div>
      </button>

      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white z-10 transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          className="p-4 text-left"
          onClick={toggleMenu}
        >
          &larr; Back
        </button>
        <nav className="mt-8">
          <ul>
            <li className="p-4 hover:bg-gray-700 cursor-pointer" onClick={()=>{toggleMenu; setPageState("MainPage")}}>Main Page</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer" onClick={()=>{toggleMenu; setPageState("Points")}}>Points</li>
          </ul>
        </nav>
      </div>

      {/* Overlay to close the menu */}
      {menuOpen && (
        <div
          className="fixed inset-0"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
