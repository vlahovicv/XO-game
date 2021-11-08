import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'
import logo from '../logo.png'

const Header = () => {
    return (
        <div className='ui secondary pointing menu hdr'>
            {/* <Link to='/' className='item'>Home</Link> */}
            <Link to='/'  className='item'>
                <img className='logo' src={logo} alt='vega'/>
            </Link>
            <div className='right menu'>
            <Link to='/' className='item'>All Games</Link>
            <Link to='/' className='item'>Create Loby</Link>
            <GoogleAuth />
            </div>
        </div>
    ) 
}

export default Header