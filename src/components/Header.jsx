import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DarkModeButton from "../ui/DarkModeButton";
import ScrollToTopButton from "../ui/ScrollToTopButton";

function Header({ darkMode, setDarkMode }) {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = document.querySelector("header").offsetHeight;
      if (window.scrollY > headerHeight) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="flex w-full justify-center bg-white px-4 py-[1.875rem] text-very-dark-blue shadow-header dark:bg-blue dark:text-white lg:py-6">
        <div className="flex w-full max-w-[80rem] justify-between">
          <Link
            to="/"
            className="cursor-pointer text-[0.875rem] font-bold lg:text-2xl"
          >
            Where in the world?
          </Link>

          <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </header>

      {showScrollButton && <ScrollToTopButton />}
    </>
  );
}

export default Header;
