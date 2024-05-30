import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="layout lg:w-8/12 mx-auto">
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
