
import { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { FolderGit2,Settings,Info,Download,X,
} from "lucide-react";

const LeftSidebar = ({
  width,
  setWidth,
  mobileOpen,
  setMobileOpen,
}) => {
  const resizing = useRef(false);
  const location = useLocation();

  // Close sidebar after navigation on mobile
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Sidebar resize functionality
  const handleMouseDown = (e) => {
    if (window.innerWidth < 768) return;

    e.preventDefault();
    resizing.current = true;

    const handleMouseMove = (event) => {
      if (!resizing.current) return;

      const newWidth = Math.min(
        450,
        Math.max(180, event.clientX)
      );

      setWidth(newWidth);
    };

    const handleMouseUp = () => {
      resizing.current = false;

      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  // Active link styling
  const linkStyle = (path) => `
    flex items-center gap-3 px-3 py-3 rounded-lg
    transition duration-200
    ${
      location.pathname === path
        ? "bg-blue-500/10 text-blue-400"
        : "text-gray-400 hover:text-white hover:bg-gray-800"
    }
  `;

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 top-[84px] bg-black/60 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        style={{ width: `${width}px` }}
        className={`
          fixed left-0 top-[84px] bottom-0
          bg-[#F1F5F9] text-black
          z-50 overflow-y-auto overflow-x-hidden
          transition-transform duration-300
          md:transition-none
          ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >
        <div className="p-5">

          {/* Workspace Heading */}
          <div className="flex items-center justify-between mb-5">
            <p className="text-xm font-bold tracking-wider text-black">
              WORKSPACE
            </p>

            <button
              onClick={() => setMobileOpen(false)}
              className="md:hidden p-1 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Workspace Links */}
          <nav className="space-y-2">

            <Link to="/" className={linkStyle("/")}>
              <FolderGit2 size={19} className="shrink-0" />
              <span className="text-sm font-medium whitespace-nowrap">
                All Repository
              </span>
            </Link>

            <Link to="/setting" className={linkStyle("/setting")}>
              <Settings size={19} className="shrink-0" />
              <span className="text-sm font-medium whitespace-nowrap">
                Setting
              </span>
            </Link>

            <Link to="/about" className={linkStyle("/about")}>
              <Info size={19} className="shrink-0" />
              <span className="text-sm font-medium whitespace-nowrap">
                About Us
              </span>
            </Link>

          </nav>

          {/* Get Started */}
          <p className="text-xm font-bold tracking-wider text-black mt-9 mb-4">
            GET STARTED
          </p>

          <nav>
            <Link
              to="/import"
              className={linkStyle("/import")}
            >
              <Download size={19} className="shrink-0" />
              <span className="text-sm font-medium whitespace-nowrap">
                Import Repository
              </span>
            </Link>
          </nav>

        </div>

        {/* Desktop Resize Handle */}
        <div
          onMouseDown={handleMouseDown}
          className="
            hidden md:block
            absolute top-0 right-0
            w-1 h-full
            cursor-col-resize
            hover:bg-gray-400/40
            active:bg-gray-400/60
            transition-colors
            z-50
          "
          title="Drag to resize sidebar"
        />

      </aside>
    </>
  );
};

export default LeftSidebar;
