
import React, { useState } from "react"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const navMenuOpen = <FontAwesomeIcon icon={faBars} />
const navMenuClose = <FontAwesomeIcon icon={faX} />

function TarangNavBar({ isTarangLanding }){

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }  
    
    return (
        <>
        <nav className="sticky top-0 mx-auto z-40 w-full border-gray-500 p-8 bg-black">
            
            {/* Main Nav */}
            <div className="flex items-center justify-between">
                <div className="text-white text-2xl font-bold"> 
                    <Link to="/tarang" className="h-16">TARANG</Link>
                </div>
                <ul className="hidden md:flex space-x-4">
                    <li><a href={isTarangLanding ? "#sponsors" : "/tarang/#sponsors"} className="text-white">Sponsors</a></li>
                    <li><Link to="/tarang/events" className="text-white">Events</Link></li>
                    <li><Link to="/tarang/register" className="text-white">Register</Link></li>
                </ul>

                <div className="md:hidden">
                    <button className="text-white" onClick={toggleMenu}>
                    {isMenuOpen ? navMenuClose : navMenuOpen}
                    </button>
                </div>
            </div>


            {/* Mob Nav */}
            {isMenuOpen ? (
                <ul className="grid md:hidden justify-items-center">
                <li className="py-2"><Link to="/tarang/#sponsors" className="text-white">Sponsors</Link></li>
                <li className="py-2"><Link to="/tarang/events" className="text-white">Events</Link></li>
                <li className="py-2"><Link to="/tarang/register" className="text-white">Register</Link></li>
            </ul>
            ) : null}

        </nav>   
        <hr className="h-[2px] bg-white" />
        </>
    )
}

export default TarangNavBar