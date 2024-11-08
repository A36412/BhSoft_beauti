import ImageCustom from "@components/ImageCustom";
import logoNavBarDark from "@assets/svgs/main_logo.svg";
import ButtonCustom from "@components/Button/ButtonCustom";
import logoNavBarLight from "@assets/images/footer_logo.png";
import { useLocation } from "react-router-dom"; 
interface NavBarProps {
  Logo?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ Logo = false }) => {
  const location = useLocation(); 

  return (
    <>
      <div className="md:max-lg:flex  lap:flex items-center w-full">
        <div className="flex w-full item-center ">
          <a href="/" className="w-full ">
            <ImageCustom
              className="tab:w-[12.5rem] lap:w-[16.125rem]"
              src={Logo ? logoNavBarLight : logoNavBarDark}
            />
          </a>
        </div>

        <div className="w-full max-md:hidden  md:flex md:justify-end md:max-lg:w-[70%] flex-row items-center ">
          <a
            className={` mr-[2.9375rem] text-[1rem] font-semibold leading-[1.5rem] tracking-[0.1em] ${
              Logo
                ? "text-white hover:text-white"
                : location.pathname === "/"
                ? "text-blackCustom "
                : "text-greyCustom hover:text-black"
            } `}
            href="/"
          >
            Home+
          </a>
          <a
            className={` mr-[2.9375rem] text-[1rem] font-semibold leading-[1.5rem] tracking-[0.1em] ${
              Logo
                ? "text-blueCustom hover:text-white"
                : location.pathname === "/about"
                ? "text-blackCustom "
                : "text-greyCustom hover:text-black"
            } `}
            href="/about"
          >
            About
          </a>
          <a
            className={` mr-[2.9375rem] text-[1rem] font-semibold leading-[1.5rem] tracking-[0.1em] ${
              Logo
                ? "text-blueCustom hover:text-white"
                : location.pathname === "/services"
                ? "text-blackCustom "
                : "text-greyCustom hover:text-black"
            } `}
            href="/services"
          >
            Service
          </a>
          <a
            className={` mr-[2.9375rem] text-[1rem] font-semibold leading-[1.5rem] tracking-[0.1em] ${
              Logo
                ? "text-blueCustom hover:text-white"
                : location.pathname === "/gallery"
                ? "text-blackCustom "
                : "text-greyCustom hover:text-black"
            } `}
            href="/gallery"
          >
            Gallery
          </a>
          <a
            className={` mr-[3.25rem] text-[1rem] font-semibold leading-[1.5rem] tracking-[0.1em] ${
              Logo
                ? "text-blueCustom hover:text-white"
                : location.pathname === "/blog"
                ? "text-blackCustom "
                : "text-greyCustom hover:text-black"
            } `}
            href="/blog"
          >
            Blog
          </a>
        </div>

        <a
          href="/contacts"
          className="flex flex-row lap:flex lap:w-[20%] lap:justify-end "
        >
          <ButtonCustom
            content="Contract"
            classButton="md:max-lg:py-[0.5rem] md:max-lg:px-[1rem] lap:py-[1rem] lap:px-[2.5rem]"
          />
        </a>
      </div>
    </>
  );
};
export default NavBar;
