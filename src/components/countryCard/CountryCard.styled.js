import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.article`
  border-radius: var(--radii);
  background-color: var(--colors-ui-base);
  cursor: pointer;
  overflow: hidden;
  height: 336px;
`;

export const CardLink = styled(Link)`
  box-shadow: var(--shadow);
  border-radius: var(--radii);

  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.007);
    box-shadow: var(--shadow-hover);
  }
`;

export const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 160px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;

export const CardBody = styled.div`
  padding: 24px 24px 46px;
`;

export const CardTitle = styled.h3`
  margin: 0;
  color: var(--colors-text);
  font-size: var(--fs-lg);
  font-weight: var(--fw-bold);
`;

export const CardList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  padding: 16px 0 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CardListItem = styled.li`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-light);

  & > b {
    font-weight: var(--fw-bold);
  }
`;
