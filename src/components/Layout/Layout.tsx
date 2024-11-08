import {  useState } from "react";
import { Outlet,useLocation  } from "react-router-dom";
import { ArrowUpOutlined } from "@ant-design/icons";
import { LeftNavBar, NavBar } from "@components/Nav";
import Footer from "@components/Footer";

const Layout = () => {
  const location = useLocation(); 
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const openNavBar = () => setIsNavBarOpen(true);
  const closeNavBar = () => setIsNavBarOpen(false);
  const logoNavBarLight = location.pathname === "/infor";


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <>
      <div className="relative w-full">
        <button
          onClick={openNavBar}
          className="md:max-lg:hidden lap:hidden px-[1rem] py-[0.5rem] bg-blackCustom text-white rounded-md fixed top-4 left-4 z-50"
        >
          ☰
        </button>
        <div className="max-md:hidden z-20 absolute md:max-lg:pt-[2rem] md:max-des:pl-[2rem]  md:max-des:pr-[2rem] des:pl-[9.375rem] des:pr-[9.375rem] lap:top-[2.5rem]  w-full">
            <NavBar Logo={logoNavBarLight} />
          </div>
        <div className="md:hidden absolute tab:pl-0 xl:pl-[9.375rem] pr-[9.375rem] lap:top-[2.5rem]  w-full">
          {isNavBarOpen && (
            <LeftNavBar onClose={closeNavBar} isNavBarOpen={isNavBarOpen} />
          )}
       
        </div>
        <main className="tab:mb-[2.5rem] xl:mb-[6.25rem] w-full">
          <Outlet />
        </main>
        <Footer />
          <button
            onClick={scrollToTop}
            className="absolute max-tab:w-[1rem] max-md:bottom-[1.25rem]  md:max-lg:bottom-[5.25rem]  rounded-lg max-tab:right-[2.25rem] max-tab:h-[1.25rem]  lap:bottom-[10.625rem] w-[2.25rem]:h-[2.25rem] flex justify-center items-center lap:right-[4.063rem] tab:max-md:right-[1.25rem] md:max-lg:right-[1.25rem] bg-blink p-3 shadow-lg text-white hover:bg-opacity-90 transition"
          >
            <ArrowUpOutlined className="text-lg " />
          </button>
      </div>
    </>
  );
};

export default Layout;
