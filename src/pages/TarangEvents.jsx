import React from 'react'
import TarangNavBar from '../components/TarangNavBar'
import ContactFooter from '../components/ContactFooter'

const TarangEvents = () => {
  return (
    <>
    <TarangNavBar isTarangLanding={false}/>
    <div className="w-full h-[calc(100vh-17rem)] flex items-center justify-center">
        <div className='w-1/4 h-full'>Categories</div>
        <div className='w-1/4 h-full'>Events</div>
        <div className='w-1/2 h-full'>Event Deets</div>
    </div>
    <ContactFooter />
    </>
  )
}

export default TarangEvents