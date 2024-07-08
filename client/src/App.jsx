import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Login from './components/login/login'
import Navbar from "./components/navbar/navbar";

import { useRef } from "react";
function App() {
  const infoRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
    <Router>
      <Navbar infoRef={infoRef} contactRef={contactRef} />
      <main className="layout">
        <Routes>
          <Route path="/" element={<Home infoRef={infoRef} contactRef={contactRef} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer infoRef={infoRef} />
    </Router>
    </>
  );
}

export default App;
