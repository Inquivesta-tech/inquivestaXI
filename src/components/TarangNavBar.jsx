
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

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }
    
    return (
        <>
        <nav className="sticky top-0 mx-auto z-40 w-full border-gray-500 p-8 bg-black">
            
            {/* Main Nav */}
            <div className="flex items-center justify-between">
                <div className="text-white text-2xl font-bold"> 
                    <Link to="/tarang" className="h-16">
                        <img className="h-12" src="/tarang_logo.png" onClick={scrollToTop}></img>
                    </Link>
                </div>
                <ul className="hidden md:flex space-x-4">

                    <li><Link to="/tarang/events" className="text-white">Events</Link></li>
                    <li><a href={isTarangLanding ? "#about" : "/tarang/#about"} className="text-white">About</a></li>
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
        </>
    )
}

export default TarangNavBar