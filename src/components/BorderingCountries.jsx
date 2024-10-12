import { Link } from "react-router-dom";

function BorderingCountries({ currentCountryData, borderingCountries }) {
  return (
    <div className="lg:grid lg:grid-cols-[auto_1fr] lg:gap-4">
      <p className="mb-4 font-light lg:mb-0">
        <strong className="font-semi-bold">
          {currentCountryData.borders.length > 1
            ? "Border Countries: "
            : "Border Country: "}
        </strong>
        {currentCountryData.borders.length === 0 && (
          <span className="text-[#FF0800]">None</span>
        )}
      </p>

      <ul className="flex flex-wrap items-center gap-[0.625rem]">
        {borderingCountries.map((country, index) => (
          <li key={index}>
            <Link
              to={`/country/${country.name.common.toLowerCase().split(" ").join("-")}`}
              className="grid h-7 min-w-24 place-items-center rounded-sm bg-white px-4 text-center text-xs font-light shadow-button ring-2 ring-inset ring-white hover:bg-light-gray focus:outline-none focus:outline-gray dark:bg-blue dark:ring-blue hover:dark:bg-dark-blue lg:text-[0.875rem]"
            >
              {country.name.common}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BorderingCountries;
