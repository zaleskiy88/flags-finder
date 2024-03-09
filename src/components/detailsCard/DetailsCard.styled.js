import styled from "styled-components";

export const DetailsPageSection = styled.section`
  padding-top: 16px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 0 auto;

  @media screen and (min-width: 767px) {
    padding-top: 32px;
  }
`;

export const DetailsArticle = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(100px, 560px);
  justify-content: center;
  gap: 44px;

  @media screen and (min-width: 1024px) {
    grid-template-columns: minmax(400px, 560px) 1fr;
    gap: 88px;
    height: 400px;
  }
`;

export const DetailsImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 16px;

  @media screen and (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DetailsTitle = styled.h2`
  font-weight: var(--fw-bold);
  font-size: 22px;
  color: var(--colors-text);
  margin: 0;
`;
export const DescriptionList = styled.ul``;
export const DescriptionItem = styled.li`
  font-family: var(--family);
  font-size: var(--fs-sm);
  font-weight: var(--fw-light);
  line-height: 2;
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

  margin: 0;
  margin-right: 15px;
`;

export const Meta = styled.div`
  padding-top: 32px;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;

  & > p {
    color: var(--colors-text);
    margin: 0;
    padding-top: 16px;
  }

  @media screen and (min-width: 1024px) {
    padding-top: 68px;
  }
`;
export const BordersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 16px;
`;
export const BordersItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 6px;
  width: 98px;

  line-height: normal;
  font-size: var(--fs-xs);

  border: none;
  box-shadow: var(--shadow);
  border-radius: 2px;

  background-color: var(--colors-ui-base);
  color: var(--colors-text);

  cursor: pointer;

  transition: all 0.15s linear;
  &:hover,
  &:focus {
    background-color: var(--colors-btn-hover);
  }
`;
