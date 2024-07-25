import { React, useState, useRef, useEffect} from 'react'


const Timer = () => {

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const revealDate = new Date('31 October 2024 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = revealDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000* 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0){
                clearInterval(interval.current)
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

            // console.log(days, minutes, hours, seconds)
        }, 1000); 
    }

    useEffect(() => {
        startTimer();
    });
  
  
  
    return (
       
    <div>
        <div className="flex items-center justify-center mt-20 mb-20">
        <div className="w-3/5 h-fit flex items-center justify-center flex-col p-5">
            <p className="text-xl md:text-5xl p-5">{timerDays} : {timerHours} : {timerMinutes} : {timerSeconds}</p>
        </div>
      </div>
    </div>
  )
}

export default Timer