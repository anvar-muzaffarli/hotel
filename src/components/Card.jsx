import React from 'react'
import blanksvg from '../assets/svgs/blankImg.svg'


const Card = () => {
  return (
    <div className="card d-flex align-items-center p-4">
        <h1>Market Research</h1>
        <p>Quisque at arcu at turpis lobortis ultrices. Nullam et accumsan mauris. Nunc pellentesque in tellus.</p>
        <img src={blanksvg} alt="" />
    </div>
  )
}

export default Card