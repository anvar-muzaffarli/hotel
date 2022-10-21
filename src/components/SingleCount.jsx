import React from 'react'
import CountUp from 'react-countup';

const SingleCount = ({title,count}) => {
  return (
    <div className="singlecount">
        <CountUp end={count} duration={5} className="count" />
        <h3>{title}</h3>
    </div>
  )
}

export default SingleCount