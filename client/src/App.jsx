import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Login from './components/login/login'
import Navbar from "./components/navbar/navbar";
import { useRef } from "react";
import Faq from "./components/faq/faq";
// Znalazłem konflikt przez który nie da się dać routera w osobnym pliku. Idk dlaczego tak sie dzieje 


function App() {
  const infoRef = useRef(null);
  const contactRef = useRef(null);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home infoRef={infoRef} contactRef={contactRef}/>,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: "/faq",
      element:<Faq/>
    }
  ]);
  return (
    <>
      <Navbar infoRef={infoRef} contactRef={contactRef} />

        <main className="layout">
        <RouterProvider router={router}/>
        </main>
      <Footer infoRef={infoRef} />
    </>
  );
}

export default App;
