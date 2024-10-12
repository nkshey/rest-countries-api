function CountryExtraDetails({ currentCountryData, currencies, languages }) {
  return (
    <ul className="mb-[2.375rem] flex flex-col gap-3 text-[0.875rem] font-light lg:mb-0 lg:gap-2.5 lg:text-base">
      <li>
        <strong className="font-semi-bold">Top Level Domain: </strong>
        {currentCountryData.tld[0] || (
          <span className="text-[#FF0800]">None</span>
        )}
      </li>

      <li>
        <strong className="font-semi-bold">
          {currencies.length > 1 ? "Currencies: " : "Currency: "}
        </strong>
        {currencies.join(", ")}
      </li>

      <li>
        <strong className="font-semi-bold">
          {languages.length > 1 ? "Languages: " : "Language: "}
        </strong>
        {languages.join(", ")}
      </li>
    </ul>
  );
}

export default CountryExtraDetails;
