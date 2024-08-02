import { React, useEffect } from "react";
import TarangNavBar from "../components/TarangNavBar";
import Sponsors from "../components/Sponsors";
import ContactFooter from "../components/ContactFooter";
import Waves from "../components/Waves";


const Tarang = () => {
  
  const scrollToAbout = () => {
    console.log("Clicked")
    window.scrollBy(0, window.innerHeight, "smooth");
  }

  useEffect(() => {
    let heading = document.getElementById("heading");
    let body = document.getElementById("about")
    
    window.addEventListener('scroll', function() {
        let value = window.scrollY/100;
        console.log(value)
        heading.style.opacity = 1.0/(value + 1);
        // about.style.opacity = (value + 1);
    })
}, [])

  return (
    <div>
      <TarangNavBar isTarangLanding={true}/>
      <section>
        <div className="fixed flex-col items-center justify-center h-50vh w-50% top-1/4 left-[7.5vw] bg-black rounded-3xl p-10 heading" id="heading">
        <div className="text-3xl">Get ready for</div>
        <div className="text-7xl">TARANG 2K24</div>
        <div className="text-3xl mt-10">Check out the <button className="z-10" onClick={scrollToAbout}>details</button> below...</div>
        </div>
        <Waves />
      </section>
      <div id="about" className="flex items-center justify-center h-[100vh] bg-white z-15">
        <div className="w-3/5 h-fit flex items-center justify-center flex-col border-solid border-2 border-inherit rounded-3xl p-5 bg-black">
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
