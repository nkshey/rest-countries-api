function CountryDetails({ currentCountryData, nativeNames }) {
  return (
    <ul className="mb-[2.625rem] flex flex-col gap-3 text-[0.875rem] font-light lg:mb-0 lg:gap-2.5 lg:text-base">
      <li>
        <strong className="font-semi-bold">
          {nativeNames.length > 1 ? "Native Names: " : "Native Name: "}
        </strong>
        {nativeNames.join(", ")}
      </li>

      <li>
        <strong className="font-semi-bold">Population: </strong>
        {currentCountryData.population}
      </li>

      <li>
        <strong className="font-semi-bold">Region: </strong>
        {currentCountryData.region || (
          <span className="text-[#FF0800]">None</span>
        )}
      </li>

      <li>
        <strong className="font-semi-bold">Sub Region: </strong>
        {currentCountryData.subregion || (
          <span className="text-[#FF0800]">None</span>
        )}
      </li>

      <li>
        <strong className="font-semi-bold">
          {currentCountryData.capital.length > 1 ? "Capitals: " : "Capital: "}
        </strong>
        {currentCountryData.capital.join(", ") || (
          <span className="text-[#FF0800]">None</span>
        )}
      </li>
    </ul>
  );
}

export default CountryDetails;
