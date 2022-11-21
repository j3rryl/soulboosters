import { NavLink } from "react-router-dom"
import '../assets/scss/navbar.scss'
const Navbar = () => {
  return (
    <>
    <header className="header">
        <h3>Soul Boosters</h3>
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
          <NavLink to='themes'>Themes</NavLink>
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