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

  function Landing() {
    return (
      <>
        <Navbar infoRef={infoRef} contactRef={contactRef} />
        <Home infoRef={infoRef} contactRef={contactRef} />
        <Footer />
      </>
    );
  }

  function LoginPage() {
    return (
      <>
        <Navbar infoRef={infoRef} contactRef={contactRef} />
        <Login />
      </>
    )
  }
  
  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
