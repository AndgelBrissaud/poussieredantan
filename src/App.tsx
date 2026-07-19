import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Realisations from "./components/sections/Realisations";
import About from "./components/sections/About";


function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Realisations />
      </main>
      <Footer />
    </div>
  );
}


export default App;