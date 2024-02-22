import { Container, MainWrapper } from "components/index";

export const Main = ({ children }) => {
  return (
    <MainWrapper>
      <Container>{children}</Container>
    </MainWrapper>
  );
};
