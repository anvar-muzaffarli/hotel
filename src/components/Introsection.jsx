import React from 'react'
import MovingText from 'react-moving-text'
import rightImg from '../assets/svgs/intro-img.svg'
import wave from '../assets/svgs/wave.svg'
import playBtn from '../assets/svgs/playbtn.svg'
import pulse from '../assets/svgs/playbtnPulls.svg'

const Introsection = () => {
  return (
    <div className='introsection row container-fluid'>
    <div className="introsection-left col-12 col-md-6 col-lg-6">

    <MovingText
     type="fadeInFromTop"
     duration="1000ms"
     delay="0s"
     direction="normal"
     timing="ease"
     iteration="1"
     fillMode="none">
      <h1 className='mb-4'>Simple online hotel management system</h1>
    </MovingText>

    <MovingText
      type="fadeInFromBottom"
      duration="1000ms"
      delay="0s"
      direction="normal"
      timing="ease"
      iteration="1"
      fillMode="none">
        <p>Maecenas sed ligula ut dui pharetra aliquet. Vestibulum eget orci libero. Sed est sem, mollis nec lectus nec, varius suscipit ligula. </p>
    </MovingText>
        

        <div className="button-groups d-flex align-items-center">
            <button className='button'>About us</button>
            <button><img src={playBtn} alt="" /></button>
            <span>Watch Video</span>
        </div>
    </div>

    <div className="introsection-right col-12 col-md-6 col-lg-6">
        <img src={rightImg} alt="" className='rightimg' />
        <img src={pulse} className="pulse" />
    </div>
    </div>
  )
}

export default Introsection