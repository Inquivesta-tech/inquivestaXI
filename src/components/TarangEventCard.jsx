import React from 'react'

const TarangEventCard = ({imgSrc, eventName}) => {
  return (
    <div className='event-card'>
      <span></span><span></span><span></span><span></span>
      <img src={imgSrc} alt="" />
      { eventName }
    </div>
  )
}

export default TarangEventCard