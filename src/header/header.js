import React from 'react'
import './header.css'
import headImage from '../images/container-fluid.png'


function Header() {
  return (
    <div>
        <div className="main1">
            <img id='bigImg' src={headImage} alt="" />
        </div>
       
    </div>
  )
}

export default Header