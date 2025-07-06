import './App.css';
import About from './components/about';
import Navbar from './components/navbar';
import Skills from './components/skills';
import Experience from './components/experience';
import Projects from './components/projetcs';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
