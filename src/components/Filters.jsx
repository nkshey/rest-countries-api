import SearchInput from "../ui/SearchInput";
import SelectOptions from "../ui/SelectOptions";
import SortBy from "./SortBy";

function Filters({ search, setSearch, setRegion, setSortBy }) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mb-8 flex flex-col gap-10 px-4 pt-6 lg:mb-12 lg:flex-row lg:justify-between lg:pt-12"
    >
      <SearchInput search={search} setSearch={setSearch} />

      <div className="flex flex-col gap-2 md:flex-row md:gap-4 lg:flex-row-reverse">
        <SelectOptions setRegion={setRegion} />
        <SortBy setSortBy={setSortBy} />
      </div>
    </form>
  );
}

export default Filters;
