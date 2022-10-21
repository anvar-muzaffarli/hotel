import React from 'react'
import apple from '../assets/svgs/apple.svg'
import google from '../assets/svgs/google.svg'

const Download = () => {
  return (
    <div className='download-app'>
        <h1>Download app</h1>
        <p>Fusce placerat pretium mauris, vel sollicitudin elit lacinia vitae. Quisque sit amet nisi erat.</p>
        <div className="button-groups">
        <button><img src={apple} alt="" /> Download on the App Store</button>
        <button><img src={google} alt="" /> Download on the App Store</button>
        </div>
        
    </div>
  )
}

export default Download