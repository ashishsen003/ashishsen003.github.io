import Intro from "./components/Intro/intro";
import './app.css'
import Navbar from "./components/navBar/navbar";
import Skills from "./components/skills/skills";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Portfolio from "./components/portfolio/Portfolio";
import Stats from "./components/stats/Stats";
import ScrollUp from "./components/scrollup/ScrollUp";

{/* <Intro /> */}

function App() {
  return (
    <div className="App">
     <Navbar />
     <main className="main">
        <Header />
        <About />
        <Skills />
        <Portfolio />
        <Stats />
        <Contact />
     </main>
     <Footer />
     <ScrollUp />
    </div>
  );
}

export default App;
