import styled from "styled-components";

export const PaginationWrapper = styled.div`
  /* display: flex;
  padding-top: 30px;
  padding-bottom: 30px; */

  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const PaginationList = styled.ul`
  display: flex;
  gap: 8px;
`;

export const PaginationBtn = styled.button`
  /* margin: 0 5px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  background-color: #f2f2f2;
  color: #333;
  cursor: pointer; */
  padding: 6px 8px;
  font-size: var(--fs-sm);

  border: none;
  box-shadow: var(--shadow);
  border-radius: var(--radii);

  background-color: var(--colors-ui-base);
  color: var(--colors-text);
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
