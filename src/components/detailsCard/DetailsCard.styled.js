import styled from "styled-components";

export const DetailsPageWrapper = styled.div`
  padding: 0 10px;
  margin: 0 auto;
`;

export const DetailsImg = styled.img`
  display: block;
  min-width: 280px;
  max-width: 320px;
  width: 100%;
`;

export const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const DetailsTitle = styled.h2`
  font-weight: var(--fw-bold);
  font-size: 22px;
  color: var(--colors-text);
`;
export const DescriptionList = styled.ul``;
export const DescriptionItem = styled.li`
  font-family: var(--family);
  font-size: var(--fs-sm);
  font-weight: var(--fw-light);
  line-height: 2.28571;
  color: var(--colors-text);

  & > b {
    font-weight: var(--fw-normal);
  }
`;

export const BordersTitle = styled.h3`
  font-size: var(--fs-md);
  color: var(--colors-text);
  line-height: 1.5;
  font-weight: var(--fw-normal);
`;
export const BordersList = styled.ul``;
export const BordersItem = styled.li``;
