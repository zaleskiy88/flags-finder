import { useState, useEffect } from "react";
import {
  Container,
  PageHeader,
  PageTitle,
  Wrapper,
  ThemeSwitcherWrapper,
  ThemeSwitcher,
} from "components/index";

export const Header = () => {
  const [theme, setTheme] = useState("light");
  const [toggled, setToggled] = useState(false);

  const themeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setToggled(!toggled);
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <PageHeader>
      <Container>
        <Wrapper>
          <PageTitle>Where in the world?</PageTitle>
          <ThemeSwitcherWrapper>
            <ThemeSwitcher toggled={toggled} toggle={themeToggle} />
          </ThemeSwitcherWrapper>
        </Wrapper>
      </Container>
    </PageHeader>
  );
};
