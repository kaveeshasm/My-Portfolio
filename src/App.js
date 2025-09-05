import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <div className="bg-black pt-[4rem]">
      <Router>
      <NavBar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
      
      {/* <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    </Router>
    </div>
  );
}

export default App;
