import "./LiveClock.css"
import { useContext, useEffect, useState } from "react";

function LiveClock() {
    const [time, setTime] = useState(new Date());
    const { timeFormat } = useContext();

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000)
        return () => {
            clearInterval(timer);
        }
    }, [time])

    return (
        <div className="bg">
            <video autoPlay loop muted> <source src="/Fireworks.mp4" type="video/mp4" />  Your browser does not support the video tag. </video>
            <div className="clock-container">
                {timeFormat ? time.toLocaleTimeString("en-GB") : time.toLocaleTimeString("en-US")}
            </div>
            <div className=""> </div>
        </div>
    )
}

export { LiveClock };