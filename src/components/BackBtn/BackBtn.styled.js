import styled from "styled-components";

export const BackBtn = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 6px 23px;
  margin-bottom: 64px;

  line-height: 143%;
  font-size: var(--fs-sm);

  border: none;
  box-shadow: var(--shadow);
  border-radius: var(--radii);

  background-color: var(--colors-ui-base);
  color: var(--colors-text);

  cursor: pointer;

  @media screen and (min-width: 767px) {
    margin-bottom: 80px;
    padding: 10px 36px;
  }
`;
