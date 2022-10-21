import React from 'react'
import logo from '../assets/svgs/logo.svg'

const Footer = () => {
  return (
    <div className='row footer'>
        <div className="col-12 col-lg-5">
            <img src={logo} alt="" />
            <p>Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper.</p>
        </div>
        <div className="col-12 col-lg-2">
            <h1>Helpful Links</h1>
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">FAQ's</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
        </div>
        <div className="col-12 col-lg-2">
        <h1>Services</h1>
            <a href="#">Worldwide</a>
            <a href="#">Scalable</a>
            <a href="#">Modular</a>
            <a href="#">Connectivity</a>
            <a href="#">Corporate</a>
        </div>
        <div className="col-12 col-lg-3">
            <address>455 West Orchard Street 
Kings Mountain, NC 28086</address>
<p>Phone: (272) 211-7370</p>
<p>E-Mail: support@brand.com</p>
        </div>
        <div className="col-12">&copy; 2022 YourSite. All Rights Reserved</div>
    </div>
  )
}

export default Footer