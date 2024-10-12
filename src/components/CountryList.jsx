import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import CountryCard from "./CountryCard";

const INITIAL_COUNTRIES_TO_SHOW = 20;
const COUNTRIES_TO_LOAD_ON_CLICK = 20;

function CountryList({ search, regions }) {
  const [countriesToShow, setCountriesToShow] = useState(
    INITIAL_COUNTRIES_TO_SHOW,
  );

  const {
    data: countries,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["countries"],
    queryFn: () =>
      fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital",
      ).then((res) => res.json()),
  });

  const filteredCountries = useMemo(() => {
    return countries
      ?.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase()),
      )
      .filter((country) => {
        return regions.length === 0
          ? country
          : regions.includes(country.region.toLowerCase());
      });
  }, [countries, search, regions]);

  if (isLoading)
    return (
      <div className="flex justify-center pt-8 md:pt-12">
        <div className="loader"></div>
      </div>
    );
  if (error) return <p>There was an error loading countries.</p>;

  const visibleCountries = filteredCountries?.slice(0, countriesToShow);

  const handleLoadMore = () => {
    setCountriesToShow((prev) => prev + COUNTRIES_TO_LOAD_ON_CLICK);
  };

  return (
    <section className="px-4 pb-6">
      {filteredCountries?.length === 0 ? (
        <p>No countries found.</p>
      ) : (
        <>
          <ul className="flex flex-wrap justify-center gap-10 xl-plus:justify-start xl-plus:gap-[4.625rem]">
            {visibleCountries?.map((country, index) => (
              <CountryCard country={country} key={index} />
            ))}
          </ul>

          {visibleCountries?.length < filteredCountries?.length && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleLoadMore}
                className="rounded bg-white px-4 py-2 text-[0.875rem] text-very-dark-blue shadow-button transition-colors duration-100 hover:bg-blue hover:text-white dark:bg-blue dark:text-white dark:hover:bg-white dark:hover:text-very-dark-blue"
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default CountryList;
