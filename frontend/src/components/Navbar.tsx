import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.scss'



export default function Navbar(){

    const [navbarExpanded, setNavbarExpanded] = useState(false)


    return(
        <div className='main-container'>
         
        <nav className={`Navbar ${navbarExpanded ? "Navbar--expanded" : ""}`}>
            <button className = "Navbar__toggler" id="nav-bar-button" onClick={() => setNavbarExpanded(!navbarExpanded)} >
            <FontAwesomeIcon icon={faBars}/>
            </button>   
        </nav>
        <div className='Navbar__links'>
        <ul>
          <li>
            <NavLink to="/Posts" className={({isActive}) => `Navbar__link ${isActive ? "Navbar__link--active" : ""}`} >Posts</NavLink>
           </li>
           <li>
            <NavLink to="/Users"  className={({isActive}) => `Navbar__link ${isActive ? "Navbar__link--active" : ""}`}>Users</NavLink>
          </li>
          <li>
            <NavLink to="/users/create"  className={({isActive}) => `Navbar__link ${isActive ? "Navbar__link--active" : ""}`}>Create a new user</NavLink>
          </li>
           <li>
            <NavLink to="2">Profile</NavLink>
          </li>
        </ul>
        </div>
     
        </div>
    )
}