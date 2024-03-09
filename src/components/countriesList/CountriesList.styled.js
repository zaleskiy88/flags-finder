import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding-top: 32px;
  padding-bottom: 65px;

  display: grid;
  grid-template-columns: repeat(1, minmax(300px, 336px));
  justify-content: center;
  grid-gap: 40px;

  @media screen and (min-width: 767px) {
    padding-top: 48px;
    padding-bottom: 48px;

    grid-template-columns: repeat(2, minmax(300px, 336px));
    grid-gap: 55px;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 74px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, minmax(250px, 336px));
    grid-gap: 74px;
  }
`;
