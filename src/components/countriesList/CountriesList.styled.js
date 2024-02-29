import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding-top: 32px;
  padding-bottom: 65px;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 40px;

  @media screen and (min-width: 767px) {
    padding-top: 48px;
    padding-bottom: 48px;

    grid-template-columns: repeat(2, 1fr);
    grid-gap: 55px;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 75px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 75px;
  }
`;
