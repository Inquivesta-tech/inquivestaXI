import { React, useEffect, useState } from "react";
import TarangNavBar from "../components/TarangNavBar";
// import Sponsors from "../components/Sponsors";
import ContactFooter from "../components/ContactFooter";
import Waves from "../components/Waves";


const Tarang = () => {
  
//   const scrollToAbout = () => {
//     console.log("Clicked")
//     window.scrollBy(0, window.innerHeight, "smooth");
//   }

//   useEffect(() => {
//     let heading = document.getElementById("heading");
//     let body = document.getElementById("about")
    
//     window.addEventListener('scroll', function() {
//         let value = window.scrollY/100;
//         console.log(value)
//         heading.style.opacity = 1.0/(value + 1);
//         // about.style.opacity = (value + 1);
//     })
// }, [])

  const [scrollVal, setScrollVal] = useState(0);

  window.addEventListener('scroll', () => {
    setScrollVal(window.scrollY / window.innerHeight);
  })

  return (
    <div>
      <TarangNavBar isTarangLanding={true}/>
      <section className="tarang-hero">
        <div className="hero-img">
        <h1 className="text-3xl">IISER Kolkata presents</h1>
          <img src="/tarang_logo.png" alt="Tarang Logo" />
        <h1 className="text-2xl"> a Cultural Meeting of the Kalyani Innovation Network </h1>
        <h1 className="text-2xl my-8"> 9th & 10th November, 2024</h1>
        {/* <a className="scroll-btn" href="#about"><span></span><span></span><span></span>Scroll</a> */}
        </div>
        <Waves />
      </section>
      <div id="about" className="flex items-center justify-center h-[calc(100vh-10rem)] z-15 tarang-about">
        <span className={scrollVal <= 0.80 ? "white-overlay" : "white-overlay scale0"}></span>
        <div className="w-3/5 h-fit flex items-center justify-center flex-col border-solid border-2 border-inherit rounded-3xl p-5 tarang-deets">
            <h1 className="text-5xl p-5">What is Tarang?</h1>
            <p className="text-lg p-5">Tarang is the science-based cultural meet of the Kalyani Innovation Network (KIN). The inaugural edition of the meet is scheduled this year, at IISER Kolkata. The institutes of the network shall compete in a tournament style format, for points. At the end of the meet, the institute with the most points shall be crowned champions. Scheduled on 9 and 10 November, there will be nine total events: Dance, Drama, Battle of Bands, Debate, JAM, Photography, Story Writing, Quiz and Canvas Painting. We hope to see you all on campus, participating or just chilling! There will be plenty of food stalls and attractions for you to enjoy!</p>
        </div>
      </div>
      {/* <Sponsors /> */}
      <ContactFooter />
    </div>
  );
};

export default Tarang;
