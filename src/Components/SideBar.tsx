import {
    ArrowRightOnRectangleIcon,
    Bars3Icon,
    BookOpenIcon,
    ChevronDownIcon,
    CloudIcon,
    CodeBracketIcon,
    Cog6ToothIcon,
    HomeIcon,
    PhoneIcon,
  } from "@heroicons/react/24/outline";
  import { useEffect, useRef, useState } from "react";
  
  const SideBar = () => {
    const [isSideBarVisible, setIsSideBarVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const isMobileRef = useRef(false);
  
    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
        const isMobileLocal = width < 768;
        setIsMobile(isMobileLocal);
        isMobileRef.current = isMobileLocal;
      };
  
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return (
      <div className="flex flex-col w-full md:w-64 bg-white md:h-screen border-r shadow-lg relative">

        
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <div className="flex items-center gap-3">
            <img src="/svg/logo.svg" alt="logo" className="w-8 h-8" />
            <h1 className="text-lg font-semibold text-gray-800">CodeAnt AI</h1>
          </div>
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-800"
            onClick={() => setIsSideBarVisible((prev) => !prev)}
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>


  
        {/* Sidebar Menu */}
        <div
          className={`absolute md:static top-16 md:top-0 left-0 w-full md:w-auto bg-white transition-all duration-300 overflow-hidden ${
            isMobile && !isSideBarVisible ? "h-0" : "h-auto"
          }`}
          style={{
            height: isMobile ? (isSideBarVisible ? "calc(100vh - 64px)" : "0px") : "100%",
          }}
        >


          <div className="flex flex-col h-full">



            {/* User Info */}
            <div className="flex flex-col items-center py-6 border-b">
              <span className="flex items-center gap-2 px-4 py-2 border rounded-full text-sm font-medium text-gray-600">
                AamirAyub...
                <ChevronDownIcon className="w-5 h-5" />
              </span>
            </div>


  
            {/* Navigation Links */}
            <nav className="flex-1 px-4 py-4 space-y-2">
              {[
                { name: "Repositories", icon: <HomeIcon />, link: "#" },
                { name: "AI Code Review", icon: <CodeBracketIcon />, link: "#" },
                { name: "Cloud Security", icon: <CloudIcon />, link: "#" },
                { name: "How to Use", icon: <BookOpenIcon />, link: "#" },
                { name: "Settings", icon: <Cog6ToothIcon />, link: "#" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition duration-200 text-gray-700 font-medium"
                >
                  <span className="w-6 h-6">{item.icon}</span>
                  <span>{item.name}</span>
                </a>
              ))}
            </nav>

  
            {/* Footer Links */}
            <div className="px-4 py-4 border-t">
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition duration-200 text-gray-700 font-medium"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>Support</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition duration-200 text-gray-700 font-medium"
              >
                <ArrowRightOnRectangleIcon className="w-5 h-5" />
                <span>Logout</span>
              </a>
            </div>


          </div>


        </div>
      </div>
    );
  };
  
  export default SideBar;
  