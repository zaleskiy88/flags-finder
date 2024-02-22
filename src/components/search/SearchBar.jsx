import { IoSearch } from "react-icons/io5";
import { SearchInput, InputContainer } from "components/index";

export const SearchBar = ({ inputHandler, searchInput }) => {
  return (
    <InputContainer>
      <IoSearch />
      <SearchInput onChange={inputHandler} value={searchInput} />
    </InputContainer>
  );
};
