import "@theme-toggles/react/css/Around.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Around } from "@theme-toggles/react";

export const PageHeader = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;

  @media screen and (min-width: 767px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const PageTitle = styled(Link).attrs({ to: "/" })`
  color: var(--colors-text);
  font-size: var(--fs-xm);
  font-weight: var(--fw-bold);
  text-decoration: none;

  @media screen and (min-width: 767px) {
    font-size: 24px;
  }
`;

export const ThemeSwitcherWrapper = styled.div`
  font-size: var(--fs-xs);
  cursor: pointer;
  text-transform: capitalize;

  @media screen and (min-width: 767px) {
    font-size: var(--fs-md);
  }
`;

export const ThemeSwitcher = styled(Around)`
  color: var(--colors-text);
  svg {
    width: 30px;
    height: 30px;
  }
`;
