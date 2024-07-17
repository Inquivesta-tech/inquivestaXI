import React from "react";
import TarangNavBar from "../components/TarangNavBar";
import Sponsors from "../components/Sponsors";
import ContactFooter from "../components/ContactFooter";

const Tarang = () => {
  return (
    <>
      <TarangNavBar isTarangLanding={true}/>
      <div className="flex items-center justify-center h-[calc(100vh-8rem)]">
        <div className="w-3/5 h-fit flex items-center justify-center flex-col border-solid border-2 border-inherit rounded-3xl p-5">
            <h1 className="text-5xl p-5">Why Tarang ?</h1>
            <p className="text-lg p-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum earum voluptas expedita quod veniam rerum quas aperiam quam nemo consequatur reprehenderit assumenda sequi delectus amet dolores, ullam necessitatibus illo tempora consequuntur quaerat sint? Expedita ab eveniet nulla libero suscipit aliquid, eligendi voluptatum velit, quaerat quisquam hic minima. Eaque temporibus explicabo ratione sint sunt voluptas id illum vero quod. Impedit culpa labore esse atque vel voluptatem tempore porro eos velit voluptates repellendus veritatis id ullam, cupiditate consectetur itaque autem. Explicabo voluptates pariatur voluptate facilis nisi neque dolor quod optio ullam reiciendis quasi minima sit esse natus exercitationem nostrum, quaerat ea? Incidunt.</p>
        </div>
      </div>
      <Sponsors />
      <ContactFooter />
    </>
  );
};

export default Tarang;
