import React from 'react'
import NavBar from '../components/NavBar'
import TarangNavBar from '../components/TarangNavBar'
import ContactFooter from '../components/ContactFooter'

const Register = () => {
  return (
    <>
    <TarangNavBar isTarangLanding={false}/>
    <div className="h-[calc(100vh-17rem)]">Register</div>
    <ContactFooter />
    </>
  )
}

export default Register