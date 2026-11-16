
import LeftSidebar from "../Components/LeftSidebar";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const LandingPage = () => {
  const [sidebarWidth, setSidebarWidth] = useState(256);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      className=" min-h-screen text-gray-900 bg-white   [background-image:radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:20px_20px] "
    >
      <Navbar onMenuClick={() => setMobileOpen(!mobileOpen)} />

      <LeftSidebar width={sidebarWidth} 
      setWidth={setSidebarWidth}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <main
        className="  min-h-screen pt-[84px] min-w-0 transition-[margin] duration-200  md:ml-[var(--sidebar-width)]   bg-transparent "
        style={{ "--sidebar-width": `${sidebarWidth}px` }}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default LandingPage;
