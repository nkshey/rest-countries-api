import SearchInput from "../ui/SearchInput";
import SelectOptions from "../ui/SelectOptions";

function Filters({ search, setSearch, setRegion }) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mb-8 flex flex-col gap-10 px-4 pt-6 lg:mb-12 lg:flex-row lg:justify-between lg:pt-12"
    >
      <SearchInput search={search} setSearch={setSearch} />

      <SelectOptions setRegion={setRegion} />
    </form>
  );
}

export default Filters;
