import React from 'react'
import reservimg from '../assets/svgs/reservimg.svg'
import rightArrow from '../assets/svgs/right.svg'
const ReserManagement = () => {
  return (
    <div className='row reservcontainer'>
        <div className="col-12 col-md-6 mb-5">
            <img src={reservimg} alt="" className='reservimg' />
        </div>
        <div className="col-12 col-md-6">
            <button className='pink-btn'>What we do ?</button>
            <h1>Reservations Management</h1>
        <p>Fusce placerat pretium mauris, vel sollicitudin elit lacinia vitae. Quisque sit amet nisi erat.</p>
            

            <div className="options mt-4">
                <div className="option d-flex">
                <button className='button active me-4'><img src={rightArrow} alt="" /></button>
                <p>Fusce placerat pretium mauris, vel sollicitudin elit lacinia vitae. Quisque sit amet nisi erat.</p>

                </div>
                <div className="option d-flex">
                <button className='button me-4'><img src={rightArrow} alt="" /></button>
                <p>Fusce placerat pretium mauris, vel sollicitudin elit lacinia vitae. Quisque sit amet nisi erat.</p>

                </div>
                <div className="option d-flex">
                <button className='button me-4'><img src={rightArrow} alt="" /></button>
                <p>Fusce placerat pretium mauris, vel sollicitudin elit lacinia vitae. Quisque sit amet nisi erat.</p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ReserManagement