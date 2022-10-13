import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar(){
    return (
        <div>            
            <ul>
                <li> <NavLink exact to="/about" activeClassName="active" exact>About</NavLink></li>
                <li> <NavLink exact to="/resume" activeClassName="active">Resume</NavLink></li>
                <li> <NavLink exact to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
                <li> <NavLink exact to="/contacts" activeClassName="active">Contacts</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar;