import React from 'react'
import TarangNavBar from '../components/TarangNavBar'
import ContactFooter from '../components/ContactFooter'
import TarangEventCard from '../components/TarangEventCard'

const TarangEvents = () => {
  return (
    <>
    <TarangNavBar isTarangLanding={false}/>
    {/* <div className="w-full h-[calc(100vh-17rem)] flex items-center justify-center">
        <div className='w-1/4 h-full'>Categories</div>
        <div className='w-1/4 h-full'>Events</div>
        <div className='w-1/2 h-full'>Event Deets</div>
    </div> */}
    <div className="events-grid">
      <TarangEventCard imgSrc="/tarang-events/dance_logo.png" eventName="Dance (Group + Synchro)" /> 
      <TarangEventCard imgSrc= "/tarang-events/bob_logo.png" eventName="Battle of Bands" /> 
      <TarangEventCard imgSrc= "/tarang-events/debate_logo.png" eventName="Debate" /> 
      <TarangEventCard imgSrc= "/tarang-events/drama.png" eventName="Drama Competition" /> 
      <TarangEventCard imgSrc= "/tarang-events/jam.png" eventName="Jam (Just a Minute)" /> 
      <TarangEventCard imgSrc= "/tarang-events/painting.png" eventName="Canvas Painting" /> 
      <TarangEventCard imgSrc= "/tarang-events/quiz.png" eventName="Quiz" /> 
      <TarangEventCard imgSrc= "/tarang-events/photography.png" eventName="Photography" /> 
      <TarangEventCard imgSrc= "/tarang-events/story.png" eventName="Story Writing" /> 
    </div>
    <ContactFooter />
    </>
  )
}

export default TarangEvents