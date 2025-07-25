import { TimeformatContext, VideoContext } from "../Context";
import "./LiveClock.css"
import { useContext, useEffect, useState } from "react";

function LiveClock() {
    const [time, setTime] = useState(new Date());
    const { timeFormat } = useContext(TimeformatContext);
    const { videoLink } = useContext(VideoContext);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000)
        return () => {
            clearInterval(timer);
        }
    }, [])

    return (
        <div className="bg">
            <video key={videoLink} autoPlay loop muted> <source src={videoLink} type="video/mp4" />  Your browser does not support the video tag. </video>
            <div className="clock-container">
                {timeFormat ? time.toLocaleTimeString("en-GB") : time.toLocaleTimeString("en-US")}
            </div>
            <div className="date"> </div>
        </div>
    )
}

export { LiveClock };