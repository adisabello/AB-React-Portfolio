import React from 'react'
import NavBar from './NavBar'

function Header(){

    return (
        <div className='header'>
            <h1>My Name</h1>
            <div className='nav'>
            <NavBar/>
            </div>
        </div>
    )
}

export default Header;