import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useState } from "react";

import GoBackButton from "../ui/GoBackButton";
import CountryDetails from "../components/CountryDetails";
import CountryExtraDetails from "../components/CountryExtraDetails";
import BorderingCountries from "../components/BorderingCountries";
import GoHomeButton from "../ui/GoHomeButton";
import BigImageLoadSekeleton from "../ui/BigImageLoadSekeleton";

function CountryPage() {
  const [isImageLoading, setIsImageLoading] = useState(true);

  const params = useParams();
  const currentCountryName = params.countryName
    .split("-")
    .map((word) => word.toLowerCase())
    .join(" ");

  const {
    data: countriesFullData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["countriesFull"],
    queryFn: () =>
      fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,subregion,tld,currencies,borders,languages,cca3",
      ).then((res) => res.json()),
  });

  if (isLoading)
    return (
      <div className="flex min-h-[calc(100dvh-5.0625rem)] items-center justify-center py-6">
        <div className="loader"></div>
      </div>
    );

  if (error) return <div>There was an error fetching the country data.</div>;

  const [currentCountryData] =
    countriesFullData.filter(
      (country) =>
        country.name.common.toLowerCase().replace("-", " ") ===
        currentCountryName,
    ) || [];

  if (!currentCountryData) {
    throw new Error("Country not found");
  }

  const nativeNames = [
    ...new Set(
      Object.values(currentCountryData.name.nativeName).map(
        (name) => name.common,
      ),
    ),
  ];

  const currencies = Object.values(currentCountryData.currencies).map(
    (currency) => currency.name,
  );

  const languages = Object.values(currentCountryData.languages);

  const borderingCountries = countriesFullData.filter((country) =>
    currentCountryData.borders.includes(country.cca3),
  );

  return (
    <section className="w-full px-7 pb-11 pt-10 lg:pb-14 lg:pt-20">
      <div className="mb-16 flex items-center gap-4 lg:mb-20">
        <GoHomeButton />
        <GoBackButton />
      </div>

      <div className="flex w-full flex-col items-center lg:items-start">
        <div className="lg:flex lg:w-full lg:items-center lg:gap-36">
          {isImageLoading && <BigImageLoadSekeleton />}

          <img
            src={currentCountryData.flags.svg}
            alt={"flag of " + currentCountryData.name.common}
            className={`mx-auto mb-11 rounded-[0.3125rem] object-cover lg:m-0 lg:h-[25rem] lg:w-[35rem] lg:rounded-[0.625rem] ${isImageLoading ? "hidden" : ""}`}
            onLoad={() => setIsImageLoading(false)}
          />

          <div className="max-w-80 lg:max-w-none lg:flex-grow">
            <h2 className="mb-4 text-[1.375rem] font-bold lg:mb-6 lg:text-[2rem]">
              {currentCountryData.name.common}
            </h2>

            <div className="lg:mb-[4.75rem] lg:flex lg:justify-between lg:gap-7">
              <CountryDetails
                currentCountryData={currentCountryData}
                nativeNames={nativeNames}
              />

              <CountryExtraDetails
                currentCountryData={currentCountryData}
                currencies={currencies}
                languages={languages}
              />
            </div>

            <BorderingCountries
              currentCountryData={currentCountryData}
              borderingCountries={borderingCountries}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountryPage;
