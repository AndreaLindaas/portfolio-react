import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Layout />
      </BrowserRouter>
    </>
  );
}

export default App;
