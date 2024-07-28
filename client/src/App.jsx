import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Login from './components/login/login';
import Dashboard from "./components/dashboard/dashboard";
import Navbar from "./components/navbar/navbar";
import { useRef } from "react";
import ProfileScreen from './components/temp/ProfileScreen';
import ProtectedRoute from './ProtectedRoute';
import './App.css'
import { useSelector } from 'react-redux';
import Loading from './components/loading/loading';
// Znalazłem konflikt przez który nie da się dać routera w osobnym pliku. Idk dlaczego tak sie dzieje 

function App() {
  const infoRef = useRef(null);
  const contactRef = useRef(null);
  const {loading} = useSelector(state=>state.auth)
  function Landing() {
    if(loading){
      return <Loading/>
    }else{
        return (
      <>
        <Navbar infoRef={infoRef} contactRef={contactRef} />
        <Home infoRef={infoRef} contactRef={contactRef} />
        <Footer />
      </>
    ); 
    }
 
  }

  function LoginPage() {
    if(loading){
      return <Loading/>
    }else{
    return (
      <>
        <Navbar infoRef={infoRef} contactRef={contactRef} />
        <Login />
      </>
    )
  }
  }
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path='/user-profile' element={<ProfileScreen />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
