import styled from "styled-components";
import Select from "react-select";

export const ContinentSelector = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: "var(--colors-ui-base)",
      color: "var(--colors-text)",
      borderRadius: "var(--radii)",
      padding: "0",
      border: "none",
      boxShadow: "var(--shadow)",
      height: "56px",
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "var(--radii)",
      boxShadow: "var(--shadow)",
    }),
    menuList: (provided) => ({
      ...provided,
      paddingTop: 0,
      paddingBottom: 0,
      borderRadius: "0.1rem",
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      color: "var(--colors-text)",
      backgroundColor: state.isSelected
        ? "var(--colors-bg)"
        : "var(--colors-ui-base)",
    }),
  },
})`
  margin-top: 40px;
  width: 200px;
  font-family: var(--family);
  font-size: var(--fs-xs);

  & > * {
    box-shadow: var(--shadow);
  }

  & * {
    color: var(--colors-text) !important;
  }

  & > div.css-menu {
    background-color: var(--colors-ui-base);
  }
  @media screen and (min-width: 767px) {
    font-size: var(--fs-sm);
    margin-top: 0;
  }
`;
