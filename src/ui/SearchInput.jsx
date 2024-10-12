import SearchIcon from "../icons/SearchIcon";

function Input({ search, setSearch }) {
  return (
    <label htmlFor="search-input" className="relative lg:w-[30rem]">
      <SearchIcon
        className="pointer-events-none absolute left-8 top-1/2 -translate-y-1/2 stroke-[#c4c4c4] dark:stroke-white"
        stroke="dark:stroke-[red]"
      />

      <input
        id="search-input"
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => {
          const value = e.target.value;
          if (
            value === "" ||
            (/^[a-zA-Z-][a-zA-Z-\s]*$/.test(value) && !/\s{2,}/.test(value))
          ) {
            setSearch(value);
          }
        }}
        className="w-full rounded-[0.3125rem] px-[4.625rem] py-4 text-xs shadow-input placeholder:text-[#c4c4c4] focus:outline-none focus:outline-gray dark:bg-blue dark:placeholder:text-white lg:h-14 lg:text-[0.875rem]"
        autoComplete="off"
        spellCheck="false"
      />
    </label>
  );
}

export default Input;
