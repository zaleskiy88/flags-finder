import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Header, Main } from "components/index";
import { HomePage, Details, NotFound } from "pages/index";

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage countries={countries} setCountries={setCountries} />
            }
          />

          <Route path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
