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
import { useRef, useState } from "react";

{/* <Intro /> */}

function App() {

  const menuRef = useRef()
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = (e)=>{
    // console.log(menuRef.current, e.target);
    // if(menuRef.current !== e.target){
    //   setShowMenu(false)
    //   // onClose() 
    // }
  }

  return (
    <div className="App" ref={menuRef} onClick={closeMenu}>
     <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
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
