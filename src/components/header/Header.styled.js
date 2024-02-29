import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageHeader = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 30px;
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

export const ThemeSwitcher = styled.div`
  color: var(--colors-text);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: var(--fs-xs);
  cursor: pointer;
  text-transform: capitalize;

  @media screen and (min-width: 767px) {
    font-size: var(--fs-md);
  }
`;
