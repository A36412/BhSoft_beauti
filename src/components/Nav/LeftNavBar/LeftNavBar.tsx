import logo from "@assets/images/footer_logo.png";
import ImageCustom from "@components/ImageCustom";
import { useLocation } from "react-router-dom";

const LeftNavBar: React.FC<{ onClose?: () => void; isNavBarOpen: boolean }> = ({
  onClose,
  isNavBarOpen,
}) => {
  const location = useLocation();

  const HandleOnClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      <div
        className={`h-full xl:hidden ${
          isNavBarOpen ? "w-[15rem]" : "w-0"
        } transition-all duration-300 bg-blackCustom text-white flex flex-col items-start p-4 fixed top-0 left-0 z-50 overflow-hidden`}
      >
        <button
          onClick={HandleOnClose}
          className="self-end mb-4 text-white text-xl"
        >
          ✕
        </button>

        <div className="mb-8">
          <a href="/">
            <ImageCustom src={logo} alt="Logo" className="w-[10rem] h-auto" />
          </a>
        </div>

        <nav className="flex flex-col w-full">
          <a
            className={`py-2 px-4 text-[1rem] active:bg-gray-700 rounded-md ${
              location.pathname === "/"
                ? "text-white  font-semibold"
                : "text-blueCustom"
            }`}
            href="/"
          >
            Home
          </a>
          <a
            className={`py-2 px-4 font-semibold text-[1rem] active:bg-gray-700 rounded-md ${
              location.pathname === "/about"
                ? "text-white  font-semibold"
                : "text-blueCustom"
            }`}
            href="/about"
          >
            About
          </a>
          <a
            className={`py-2 px-4 font-semibold text-[1rem] active:bg-gray-700 rounded-md ${
              location.pathname === "/services"
                ? "text-white  font-semibold"
                : "text-blueCustom"
            }`}
            href="/services"
          >
            Services
          </a>
          <a
            className={`py-2 px-4 font-semibold text-[1rem] active:bg-gray-700 rounded-md ${
              location.pathname === "/gallery"
                ? "text-white  font-semibold"
                : "text-blueCustom"
            }`}
            href="/gallery"
          >
            Gallery
          </a>
          <a
            className={`py-2 px-4 font-semibold text-[1rem] active:bg-gray-700 rounded-md ${
              location.pathname === "/blog"
                ? "text-white  font-semibold"
                : "text-blueCustom"
            }`}
            href="/blog"
          >
            Blog
          </a>
          <a
            className={`py-2 px-4 font-semibold text-[1rem] active:bg-gray-700 rounded-md ${
              location.pathname === "/contacts"
                ? "text-white  font-semibold"
                : "text-blueCustom"
            }`}
            href="/contacts"
          >
            Contact
          </a>
        </nav>
      </div>
    </>
  );
};

export default LeftNavBar;
