import styled from "styled-components";

export const InputContainer = styled.div`
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  display: flex;
  gap: 26px;
  padding: 19px 0 19px 32px;
  align-items: center;
  color: var(--colors-text);
  border-radius: var(--radii);

  @media screen and (min-width: 767px) {
    width: 480px;
  }
`;

export const SearchInput = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country...",
})`
  font-size: var(--fs-xs);
  width: 100%;
  border: none;
  outline: none;
  background-color: var(--color-ui-base);
  color: var(--colors-text);

  &::placeholder {
    color: var(--colors-text);
  }
  //remove "clear" button in webkit
  &::-webkit-search-cancel-button {
    appearance: none;
  }

  @media screen and (min-width: 767px) {
    font-size: var(--fs-sm);
  }
`;
