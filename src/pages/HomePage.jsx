import { useState } from "react";
import CountryList from "../components/CountryList";
import Filters from "../components/Filters";

function HomePage() {
  const [search, setSearch] = useState("");
  const [regions, setRegion] = useState("");

  return (
    <>
      <Filters
        search={search}
        setSearch={setSearch}
        regions={regions}
        setRegion={setRegion}
      />
      <CountryList search={search} regions={regions} />
    </>
  );
}

export default HomePage;
