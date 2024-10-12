import { useMediaQuery } from "react-responsive";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";

function DarkModeButton({ darkMode, setDarkMode }) {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <button
      className="group flex items-center gap-2"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? (
        <SunIcon
          className="translate-y-[1px] transition-colors duration-200 group-hover:fill-white"
          width={isLargeScreen ? "18" : "14.5"}
          height={isLargeScreen ? "18" : "14.5"}
        />
      ) : (
        <MoonIcon
          className="transition-colors duration-200 group-hover:fill-very-dark-blue"
          width={isLargeScreen ? "18" : "14.5"}
          height={isLargeScreen ? "18" : "14.5"}
        />
      )}

      <span className="text-xs font-semi-bold lg:text-base">
        {darkMode ? "Light" : "Dark"} Mode
      </span>
    </button>
  );
}

export default DarkModeButton;
