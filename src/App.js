import { Route, Routes } from "react-router-dom";
import { Header, Main } from "components/index";
import { HomePage, Details, NotFound } from "pages/index";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
