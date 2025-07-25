import "./LiveClock.css"
import { useEffect, useState } from "react";

function LiveClock() {
    const [time, setTime] = useState(new Date());

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
            <div className="clock-container">
                {time.toLocaleTimeString("en-GB")}
            </div>
        </div>
    )
}

export { LiveClock };