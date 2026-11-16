import { useState } from "react";
import { Link } from "react-router-dom";
import { Bot, GitBranch, Menu, X ,CircleUserRound } from "lucide-react";

const Navbar = ({ onMenuClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  

  return (
    <nav className="fixed top-0 left-0 w-full h-[84px]   bg-[#F1F5F9] text-black z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="h-21 flex items-center justify-between">
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800"
          >
            <Menu size={24} />
          </button>
          {/* Left Section */}
          <div className="flex items-center gap-6">
            <Link to="/" className="text-4xl font-extrabold tracking-tight">
              haki<span className="text-blue-500">.</span>
            </Link>

            <Link
              to="/chatbot"
              className="hidden sm:flex items-center gap-2 text-black hover:text-[#4B5563] transition"
            >
              <Bot size={21} />
              <div>
                <p className="text-sm text-black font-semibold">AI Chatbot</p>
                <p className="text-[10px] text-black">
                  Your smart assistant
                </p>
              </div>
            </Link>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-3">
            {/* Repository */}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold border border-gray-600 rounded-lg hover:bg-white hover:text-black transition"
            >
              <GitBranch size={17} />
              Create Repository
            </a>

            <div className="relative">
              <Link
                to="/login"
                className="px-5 py-2.5 text-sm font-semibold bg-white text-black rounded-lg hover:bg-gray-200 transition"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <CircleUserRound  size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-800 py-4 space-y-3">
            <Link
              to="/chatbot"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-white"
            >
              <Bot size={20} />
              AI Chatbot
            </Link>

            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-white text-black py-2.5 rounded-lg text-sm font-semibold"
            >
              Login
            </Link>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-gray-700 py-2.5 rounded-lg text-sm"
            >
              <GitBranch size={17} />
              Repository
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
