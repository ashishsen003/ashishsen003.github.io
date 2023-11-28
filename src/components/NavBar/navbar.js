import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu.png'
import contactImg from '../../assets/contact.png'
import { MdOutlineFileDownload } from "react-icons/md";
import {Link} from 'react-scroll'
import Resume from '../../assets/Resume.pdf'
import { TbMenuDeep } from "react-icons/tb";

// const Navbar = () => {
//   return (
//     <nav className='navbar'>
//       {/* <img src={logo} alt='logo' className='logo' /> */}
//       <h2>Ashish Kumar</h2>
//       <div className='desktopMenu'>
//         <a href='#' className='desktopMenuListItem'>Home</a>
//         <a href='#about' className='desktopMenuListItem'>About</a>
//         <a href='#skills' className='desktopMenuListItem'>Skills</a>
//         <a href='#portfolio' className='desktopMenuListItem'>Portfolio</a>
//         <a href='#contact' className='desktopMenuListItem'>Contact</a>
//       </div>
//       <a href={Resume} download className='btn btn-primary'>
//         Resume
//         <MdOutlineFileDownload className='desktopMenuImg' />
//       </a>
//     </nav>
//   )
// }

const Navbar = ()=>{
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className='navbar'>
     {/* <img src={logo} alt='logo' className='logo' /> */}
      <h2>Ashish Kumar</h2>
        <div className='desktopMenu'>
          <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={300} className='desktopMenuListItem'>Home</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={300} className='desktopMenuListItem'>About</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={300} className='desktopMenuListItem'>Skills</Link>
          <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={300} className='desktopMenuListItem'>Portfolio</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={300} className='desktopMenuListItem'>Contact</Link>
        </div>
          <a href={Resume} download className='btn btn-primary'>
            Resume
            <MdOutlineFileDownload className='desktopMenuImg' />
          </a>

          <TbMenuDeep className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
          {/* <img src={menu} alt='menu' className='mobMenu' /> */}
          <div className='navMenu' style={{display: showMenu ? 'flex' : 'none'}}>
          <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={300} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={300} className='listItem' onClick={()=>setShowMenu(false)}>About</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={300} className='listItem' onClick={()=>setShowMenu(false)}>Skills</Link>
          <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={300} className='listItem' onClick={()=>setShowMenu(false)}>Portfolio</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={300} className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar