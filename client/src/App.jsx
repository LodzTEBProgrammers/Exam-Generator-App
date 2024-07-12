import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Login from './components/login/login'
import Navbar from "./components/navbar/navbar";
import { useRef } from "react";
import ProfileScreen from './components/temp/ProfileScreen';
// Znalazłem konflikt przez który nie da się dać routera w osobnym pliku. Idk dlaczego tak sie dzieje 


function App() {
  const infoRef = useRef(null);
  const contactRef = useRef(null);
  
  return (
    <>
      <Router>
        <Navbar infoRef={infoRef} contactRef={contactRef} />
        <main className="layout">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/user-profile' element={<ProfileScreen />} />
          </Routes>
        </main>
        <Footer infoRef={infoRef} />
      </Router>
    </>
  );
}

export default App;
