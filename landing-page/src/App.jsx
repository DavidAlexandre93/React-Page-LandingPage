import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={
              <>
                <h1>Error 404</h1>
              </>
            }
          />
        </Routes>
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;
