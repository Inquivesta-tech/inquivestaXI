import {React, useEffect} from 'react'

let var1, var2, var3, var4;

const Waves = () => {
    useEffect(() => {
        let wave1 = document.getElementById("wave1");
        let wave2 = document.getElementById("wave2");
        let wave3 = document.getElementById("wave3");
        let wave4 = document.getElementById("wave4");
        
        window.addEventListener('scroll', function() {
            let value = window.scrollY;

            wave1.style.backgroundPositionX = 400 + value * 2 + 'px';
            wave2.style.backgroundPositionX = 300 + value * -2 + 'px';
            wave3.style.backgroundPositionX = 200 + value * 2 + 'px';
            wave4.style.backgroundPositionX = 100 + value * -2 + 'px';
        })
    }, [])
    
  return (
    <div>
        <div className="wave" id="wave1" style={var1}></div>
        <div className="wave" id="wave2" style={var2}></div>
        <div className="wave" id="wave3" style={var3}></div>
        <div className="wave" id="wave4" style={var4}></div>
    </div>
  )
}

export default Waves