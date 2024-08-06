import { React, useEffect } from "react";
import TarangNavBar from "../components/TarangNavBar";
import Sponsors from "../components/Sponsors";
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
  window.onload = () => {
  const aboutTarang = document.querySelector(".white-overlay");
  window.addEventListener('scroll', () => {
    let value = window.scrollY;
    if ((value / window.innerHeight) > 0.80 ) {
      aboutTarang.classList.add("scale0");
    } else {
      aboutTarang.classList.remove("scale0");
    }
  })
}

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
        <span className="white-overlay"></span>
        <div className="w-3/5 h-fit flex items-center justify-center flex-col border-solid border-2 border-inherit rounded-3xl p-5 tarang-deets">
            <h1 className="text-5xl p-5">Why Tarang? </h1>
            <p className="text-lg p-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum earum voluptas expedita quod veniam rerum quas aperiam quam nemo consequatur reprehenderit assumenda sequi delectus amet dolores, ullam necessitatibus illo tempora consequuntur quaerat sint? Expedita ab eveniet nulla libero suscipit aliquid, eligendi voluptatum velit, quaerat quisquam hic minima. Eaque temporibus explicabo ratione sint sunt voluptas id illum vero quod. Impedit culpa labore esse atque vel voluptatem tempore porro eos velit voluptates repellendus veritatis id ullam, cupiditate consectetur itaque autem. Explicabo voluptates pariatur voluptate facilis nisi neque dolor quod optio ullam reiciendis quasi minima sit esse natus exercitationem nostrum, quaerat ea? Incidunt.</p>
        </div>
      </div>
      {/* <Sponsors /> */}
      <ContactFooter />
    </div>
  );
};

export default Tarang;
