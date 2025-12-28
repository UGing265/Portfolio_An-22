import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/homepage/About";
import Contact from "./components/homepage/Contact";
import Footer from "./components/homepage/Footer";
import Hero from "./components/homepage/Hero";
import Navbar from "./components/homepage/Navbar"
import Project from "./components/homepage/Project";
import Roadmap from "./components/homepage/Roadmap";
import CommercialAviation from "./components/homepage/CommercialAviation";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main className="flex flex-col gap-12 md:gap-24">
              <Hero />
              <About />
              <Roadmap />
              <Project />
              <Contact />
            </main>
          } />
          <Route path="/commercial-aviation" element={<CommercialAviation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
