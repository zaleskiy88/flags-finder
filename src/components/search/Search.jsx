import { useState, useEffect } from "react";
import { SearchBar, ContinentSelector, SearchWrapper } from "components/index";

const continetsOptions = [
  { value: "africa", label: "Africa" },
  { value: "america", label: "America" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

export const Search = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    const regionValue = region?.value || "";
    onSearch(searchInput, regionValue);

    // eslint-disable-next-line
  }, [searchInput, region]);

  return (
    <SearchWrapper>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <ContinentSelector
        options={continetsOptions}
        placeholder="Filter by region"
        isClearable={true}
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </SearchWrapper>
  );
};
