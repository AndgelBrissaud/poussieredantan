import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Realisations from "./components/sections/Realisations";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import ParallaxSection from "./components/sections/ParallaxSection";

import Admin from "./pages/Admin";


function App() {


  const isAdmin =
    window.location.pathname.startsWith("/admin");



  if (isAdmin) {

    return <Admin />;

  }



  return (

    <div className="min-h-screen flex flex-col">

      <Header />

      <main className="flex-1">

        <Hero />

        <About />

        <Services />

        <ParallaxSection />

        <Realisations />

        <Contact />

      </main>

      <Footer />

    </div>

  );

}


export default App;