import { useEffect, useRef, useState } from "react";
import ChevronUpIcon from "../icons/ChevronUpIcon";
import ChevronDownIcon from "../icons/ChevronDownIcon";

const options = [
  {
    label: "Default",
    value: "default",
  },
  {
    label: "Name (A-Z)",
    value: "nameAsc",
  },
  {
    label: "Name (Z-A)",
    value: "nameDesc",
  },
  {
    label: "Population (Asc)",
    value: "populationAsc",
  },
  {
    label: "Population (Desc)",
    value: "populationDesc",
  },
];

function SortBy({ setSortBy }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Default");
  const dropdownRef = useRef(null);

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

  useEffect(() => {
    const savedOption = localStorage.getItem("selectedSortBy");
    if (savedOption) {
      const { value, label } = JSON.parse(savedOption);
      setSortBy(value);
      setSelectedOption(label);
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        localStorage.removeItem("selectedSortBy");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [setSortBy]);

  function handleSort(value, text) {
    setSortBy(value);
    setSelectedOption(text);
    localStorage.setItem(
      "selectedSortBy",
      JSON.stringify({ value, label: text }),
    );
  }

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div className="relative w-40 lg:w-44" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex w-full cursor-pointer items-center justify-between rounded-[0.3125rem] bg-white py-3.5 pl-6 pr-5 shadow-input dark:bg-blue lg:h-14">
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
                onClick={() => handleSort(option.value, option.label)}
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

export default SortBy;
