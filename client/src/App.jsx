import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Navbar from "./components/navbar/navbar";
import useCustomRefs from "./CustomRefs.jsx";

function App() {
  const refs = useCustomRefs();
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home infoRef={refs.infoRef} contactRef={refs.contactRef}/>,
    },
    {
      path: '/login',
      element: <Login />,
    }
  ]);

  return (
    <>
      <Navbar infoRef={refs.infoRef} contactRef={refs.contactRef} />
        <main className="layout">
          <RouterProvider router={router}/>
        </main>
      <Footer />
    </>
  );
}

export default App;
