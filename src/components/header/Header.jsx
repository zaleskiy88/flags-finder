import { useState, useEffect } from "react";
import {
  Container,
  PageHeader,
  PageTitle,
  Wrapper,
  ThemeSwitcher,
} from "components/index";

import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";

export const Header = () => {
  const [theme, setTheme] = useState("light");

  const themeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <PageHeader>
      <Container>
        <Wrapper>
          <PageTitle>Where in the world?</PageTitle>
          <ThemeSwitcher onClick={themeToggle}>
            {theme === "light" ? <IoMoonOutline /> : <IoMoonSharp />}
            {theme} Theme
          </ThemeSwitcher>
        </Wrapper>
      </Container>
    </PageHeader>
  );
};
