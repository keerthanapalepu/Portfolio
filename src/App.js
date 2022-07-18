import "./App.css";
// import Title from "./components/Title";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Tech from "./components/Tech";
import Contact from "./components/Contact";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      {/* <Title /> */}
      <Skills />
      <Tech />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
