import { useState } from "react";
import CountryList from "../components/CountryList";
import Filters from "../components/Filters";

function HomePage() {
  const [search, setSearch] = useState("");
  const [regions, setRegion] = useState("");
  const [sortBy, setSortBy] = useState("");
  console.log(sortBy);

  return (
    <>
      <Filters
        search={search}
        setSearch={setSearch}
        setRegion={setRegion}
        setSortBy={setSortBy}
      />
      <CountryList search={search} regions={regions} sortBy={sortBy} />
    </>
  );
}

export default HomePage;
