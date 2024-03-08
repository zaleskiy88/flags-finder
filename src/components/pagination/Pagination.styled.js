import styled from "styled-components";
import { screenWidth } from "utils/index";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${screenWidth < 767 ? "25px  " : "50px"};
`;

export const PaginationList = styled.ul`
  display: flex;
  gap: 8px;
`;

export const PaginateBtn = styled.button`
  border: none;

  box-shadow: var(--shadow);
  border-radius: var(--radii);

  background-color: var(--colors-ui-base);
  color: var(--colors-text);

  cursor: pointer;

  &:active {
    background-color: #007bff;
    color: #fff;
  }
`;

export const PaginationBtn = styled.button`
  padding: 6px 8px;
  font-size: var(--fs-sm);

  border: none;
  box-shadow: var(--shadow);
  border-radius: var(--radii);

  background-color: var(--colors-ui-base);
  color: var(--colors-text);

  cursor: pointer;

  &:active {
    background-color: #007bff;
    color: #fff;
  }
`;

export const ActiveButton = styled.button`
  padding: 6px 8px;
  font-size: var(--fs-sm);

  border: none;
  box-shadow: var(--shadow);
  border-radius: var(--radii);

  background-color: var(--colors-active);
  color: hsl(200, 15%, 8%);

  cursor: pointer;
`;
