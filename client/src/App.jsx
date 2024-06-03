import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import { useRef } from "react";
function App() {
  const infoRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar infoRef={infoRef} contactRef={contactRef} />
      <main className="layout">
        <Home  infoRef={infoRef} contactRef={contactRef}  />
      </main>
      <Footer />
    </>
  );
}

export default App;
