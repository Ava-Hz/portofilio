import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./navbar";
import Skills from "./Skills";
import Work from "./Work";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      
    </div>
  );
}

export default App;
