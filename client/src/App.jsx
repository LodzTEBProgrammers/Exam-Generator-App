import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="layout">
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
