import { React, useEffect, useState } from "react";
import TarangNavBar from "../components/TarangNavBar";
// import Sponsors from "../components/Sponsors";
import ContactFooter from "../components/ContactFooter";
import PastSponsors from "../components/PastSponsors";
import PastHighlights from "../components/PastHighlights";
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
        <h1 className="text-3xl hero-head">IISER Kolkata presents</h1>
          <img src="/inq11-compressed.png" alt="Tarang Logo" loading="lazy"/>
        <h1 className="text-2xl hero-subhead"> The annual Science fest of IISER Kolkata</h1>
        <h1 className="text-2xl my-8 hero-dates"> 9th, 10th and 11th February, 2025</h1>
        {/* <a className="scroll-btn" href="#about"><span></span><span></span><span></span>Scroll</a> */}
        </div>
        <Waves />
      </section>
      <div id="past-sponsors" className="flex items-center justify-center h-screen w-full bg-white">
        <PastSponsors />
      </div>
      <div id="past-highlights" className="flex items-center justify-center h-screen w-full bg-black">
        <PastHighlights />
      </div>
      <div id="about" className="flex items-center justify-center h-[calc(100vh-15rem)] z-15 tarang-about">
        <div className="h-fit flex items-center justify-center flex-col p-5 tarang-deets">
            <h1 className="text-5xl p-5">About Inquivesta</h1>
            <p className="text-lg px-5 py-2">
              Inquivesta, which is hosted by the students of IISER Kolkata, is the
              first and one of the largest science college festivals in India. It was created
              in 2011 with the aim of promoting science in an entertaining and engaging
              manner to a wider audience. Since then, Inquivesta has successfully
              organized ten editions.</p>

              <p  className="text-lg px-5 py-2">These editions have included a variety of events that showcase
              science, technology, and innovation, as well as workshops, guest lectures,
              celebrity appearances, and engaging competitions in fine arts, sports, and
              adventure. </p>

              <p className="text-lg px-5 py-2">Inquivesta attracts a diverse audience ranging from school and
              college students to working professionals. Inquivesta has experienced over
              2000 participants, and footfalls of over 8000, in previous editions. It truly
              creates a very festive atmosphere with the star studded performances,
              creative events and enthusiastic participation.</p>
        </div>
      </div>
      {/* <Sponsors /> */}
      <ContactFooter />
    </div>
  );
};

export default Tarang;
