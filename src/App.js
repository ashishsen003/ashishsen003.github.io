import Intro from "./components/Intro/intro";
import Navbar from "./components/NavBar/navbar";
import Skills from "./components/Skills/skills";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Header />
     {/* <Intro /> */}
     <About />
     <Skills />
     <Portfolio />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
