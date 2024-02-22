import { useState } from "react";
import { SearchBar, ContinentSelector, SearchWrapper } from "components/index";

const continetsOptions = [
  { value: "africa", label: "Africa" },
  { value: "america", label: "America" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

export const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [region, setRegion] = useState("");

  const inputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <SearchWrapper>
      <SearchBar searchInput={searchInput} inputHandler={inputHandler} />
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
