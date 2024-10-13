import { useEffect, useRef, useState } from "react";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import ChevronUpIcon from "../icons/ChevronUpIcon";

const options = [
  {
    label: "All",
    value: "",
  },
  {
    label: "Europe",
    value: "europe",
  },
  {
    label: "Asia",
    value: "asia",
  },
  {
    label: "America",
    value: "americas",
  },
  {
    label: "Africa",
    value: "africa",
  },
  {
    label: "Oceania",
    value: "oceania",
  },
  {
    label: "Antarctica",
    value: "antarctic",
  },
];

function SelectOptions({ setRegion }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Filter by Region");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const savedOption = localStorage.getItem("selectedRegion");
    if (savedOption) {
      const { value, label } = JSON.parse(savedOption);
      setRegion(value);
      setSelectedOption(label);
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        localStorage.removeItem("selectedRegion");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [setRegion]);

  const handleSelect = (value, text) => {
    setRegion(value);
    setSelectedOption(text);
    setIsOpen(false);
    localStorage.setItem(
      "selectedRegion",
      JSON.stringify({ value, label: text }),
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        ref={dropdownRef}
        className="relative w-[12.5rem]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex w-full cursor-pointer items-center justify-between rounded-[0.3125rem] bg-white py-[0.875rem] pl-6 pr-5 shadow-input dark:bg-blue lg:h-14">
          <p className="text-xs leading-5 lg:text-[0.875rem]">
            {selectedOption}
          </p>
          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </div>

        {isOpen && (
          <ul className="absolute left-0 top-[calc(100%+0.25rem)] z-20 flex w-full flex-col rounded-[0.3125rem] bg-[white] px-2 py-2 text-xs shadow-input dark:bg-blue">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelect(option.value, option.label)}
                className="cursor-pointer rounded-[0.25rem] px-4 py-2 hover:bg-[#f5f5f5] dark:hover:bg-dark-blue lg:text-[0.875rem]"
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default SelectOptions;
