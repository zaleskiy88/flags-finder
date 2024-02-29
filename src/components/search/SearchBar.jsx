import { IoSearch } from "react-icons/io5";
import { SearchInput, InputContainer } from "components/index";

export const SearchBar = ({ searchInput, setSearchInput }) => {
  return (
    <InputContainer>
      <IoSearch />
      <SearchInput
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </InputContainer>
  );
};

//
