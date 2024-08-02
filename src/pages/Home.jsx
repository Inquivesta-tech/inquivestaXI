import React from 'react'
import NavBar from '../components/NavBar'
import ContactFooter from '../components/ContactFooter'
import Timer from '../components/Timer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <div className='h-[70vh]'> 
        <Timer />
        <div className='flex flex-col justify-center items-center'>
          <div className='text-3xl'>Something is cooking...</div>
          <div className='text-2xl'>But first check out:</div> 
          <button className='p-5 rounded-xl bg-sky-500 hover:bg-sky-700 mt-5 h-15'><Link to='/tarang'>Tarang 2k24</Link></button>
        </div>
      </div>
      <ContactFooter />
    </div>
  )
}

export default Home