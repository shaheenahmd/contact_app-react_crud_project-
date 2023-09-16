import React from 'react'
import './Header.scss'
import {FaCircleUser} from 'react-icons/fa6'



const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
            <h2>USER'S INVENTORY</h2>
        </div>
        <div className="user">
            <FaCircleUser className='user-icon'/>
        </div>
    </div>
  )
}

export default Header