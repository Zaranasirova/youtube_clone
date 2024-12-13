import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  if (isHomePage) {
    const body = document.getElementsByTagName("body")[0];
    body.style.overflow = "hidden";
    body.style.height = "100%";
  } else {
    const body = document.getElementsByTagName("body")[0];
    body.style.overflow = "";
    body.style.height = "";
  }
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
