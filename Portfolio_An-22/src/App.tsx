import About from "./components/homepage/About";
import Contact from "./components/homepage/Contact";
import Footer from "./components/homepage/Footer";
import Hero from "./components/homepage/Hero";
import Navbar from "./components/homepage/Navbar"
import Project from "./components/homepage/project";
import Roadmap from "./components/homepage/Roadmap";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Roadmap />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );

}

export default App;
