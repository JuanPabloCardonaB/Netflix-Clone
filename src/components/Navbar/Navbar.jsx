import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-left'>
            <img src= {logo} alt=''></img>

            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse my languages</li>
            </ul>
        </div>
        <div className='navbar-right'>
            <div className='icons-container'>
                <img src={search_icon} alt = '' className='icons'></img>
                <p>Kids</p>
                <img src = {bell_icon} alt='' className='icons'></img>
            </div>
            <div className='navbar-profile'>
                <img src = {profile_img} alt = '' className='profile-picture'></img>
                <img src = {caret_icon} alt=''></img>
                <div className="dropdown">
                      <p onClick = {() => {logout()}} >Sign Out of Neflix</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
