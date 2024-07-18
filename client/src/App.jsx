import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Dashboard from "./components/dashboard/dashboard";
import Login from './components/login/login'
import Navbar from "./components/navbar/navbar";
import './App.css'

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
            <Route path="/home" element={<Home infoRef={infoRef} contactRef={contactRef} />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer infoRef={infoRef} />
      </Router>
    </>
  );
}

export default App;
