import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
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
    <header className={`navbar-header ${mobile?'mobile':''}`}>
        <h5>Souul Boosters</h5>
    <nav className="navbar-links">
        <ul className="list-links">
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='listings'>Listings</NavLink>
            </li>
            <li>
                <NavLink to='login'>Login</NavLink>
            </li>
            {/* <li>
                <NavLink to='/bookings'>Bookings</NavLink>
            </li> */}
            <li>
                <NavLink to='about'>About</NavLink>
            </li>
            <li>
            <button className="contact-btn">Contact Us</button>
            </li>

        </ul>
    </nav>
    </header>
    <div className="spacer">
    &nbsp;
    </div>

    </>
  )
}

export default Navbar