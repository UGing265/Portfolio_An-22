import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"
import Roadmap from "./components/Roadmap";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </div>
  );

}

export default App;
