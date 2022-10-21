import React from 'react'
import SingleCount from './SingleCount'
import feedbackData from '../feedback.json'
const Countsection = () => {
  return (
    <div className='countupsection row'>
        {
            feedbackData.map((item,index) => (
                <div key={index} className="col-12 col-md-12 col-lg-3">
                      <SingleCount title={item.title} count={item.count} />
                </div>
            ))
        }
        
    </div>
  )
}

export default Countsection