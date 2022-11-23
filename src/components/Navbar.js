import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react"
import '../assets/scss/navbar.scss'
import Slogo from '../assets/icons/slogo.png'
const Navbar = () => {
const [mobile,setMobile]=useState(
  false)
function toggleMenu(){
    console.log(mobile)
    setMobile(!mobile)
}
useEffect(()=>{
    setMobile(mobile)
},[mobile])
  return (
    <>
    <header className={`header ${mobile?'mobile':''}`}>
    <FontAwesomeIcon icon={mobile?faX:faBars} className="icon-logo" onClick={toggleMenu}/>
    <nav className="logo-title">
      <h3>Soul Boosters</h3>
      <img className='slogo' src={Slogo} alt="Icon logo for soul boosters"/>
    </nav>
    <nav className="navbar-links">
        <ul className="list-links">
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='about'>About</NavLink>
            </li>
            <li>
                <NavLink to='stories'>Stories</NavLink>
            </li>
        </ul>
    </nav>
    <nav className="navbar-links">
      <ul className="list-links">
        <li>
          <NavLink to='themes'>Themes Of Climate Change</NavLink>
        </li>
        <li>
          <NavLink to='involve'>Get Involved</NavLink>
        </li>
        <li>
          <NavLink to='faq'>Faq</NavLink>
        </li>
      </ul>
    </nav>
    </header>
    </>
  )
}

export default Navbar