import { useState } from "react";
import { Link } from "react-router-dom";
import SmallImageLoadSkeleton from "../ui/SmallImageLoadSkeleton";

function CountryCard({ country }) {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const countryName = country.name.common.toLowerCase().split(" ").join("-");

  return (
    <li className="w-[16.5rem] overflow-hidden rounded-[0.3125rem] bg-white shadow-card transition-transform duration-100 hover:scale-[1.03] dark:bg-blue">
      <Link to={`/country/${countryName}`}>
        {isImageLoading && <SmallImageLoadSkeleton />}

        <img
          src={country.flags.png}
          alt={"flag of " + country.name.common}
          className={`h-40 w-full object-cover ${isImageLoading ? "hidden" : ""}`}
          onLoad={() => setIsImageLoading(false)}
        />

        <div className="p-6 pb-[2.875rem]">
          <h2 className="mb-4 text-[1.125rem] font-bold">
            {country.name.common}
          </h2>

          <div className="flex flex-col gap-2 text-[0.875rem] font-light leading-4">
            <p>
              <strong className="font-semi-bold">Population:</strong>{" "}
              {country.population.toLocaleString()}
            </p>

            <p>
              <strong className="font-semi-bold">Region:</strong>{" "}
              {country.region}
            </p>

            <p>
              <strong className="font-semi-bold">
                {country.capital.length > 1 ? "Capitals: " : "Capital: "}
              </strong>
              {country.capital.length === 0 ? (
                <span className="text-[#FF0800]">None</span>
              ) : (
                country.capital.join(", ")
              )}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default CountryCard;
