import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Login from './components/login/login';
import Dashboard from "./components/dashboard/dashboard";
import Navbar from "./components/navbar/navbar";
import { useRef } from "react";
import ProtectedRoute from './ProtectedRoute';
import './App.css';
import { useSelector } from 'react-redux';
import Loading from './components/loading/loading';
import QuestionLibrary from './components/dashboard/exams/QuestionLibrary/QuestionLibrary';

function App() {
  const infoRef = useRef(null);
  const contactRef = useRef(null);
  const { loading } = useSelector(state => state.auth);

  // Wrapper for Suspense fallback
  
  function Landing() {
    if(loading){
      return <Loading/>
    }
      return (
        <>
          <Navbar infoRef={infoRef} contactRef={contactRef} />
          <Home infoRef={infoRef} contactRef={contactRef} />
          <Footer />
        </>
      );
    
  }

  function LoginPage() {
    if(loading){
      return <Loading/>
    }
      return (
        <>
          <Navbar infoRef={infoRef} contactRef={contactRef} />
          <Login />
        </>
      );
    
  }

  return (
    <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />}>
             <Route path='questionLibary' element={<QuestionLibrary/>} />
            </Route>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
