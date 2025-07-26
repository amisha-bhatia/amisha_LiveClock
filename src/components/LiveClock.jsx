import { DateContext, LanguageContext, TimeformatContext, VideoContext } from "../Context";
import "./LiveClock.css"
import { useContext, useEffect, useState } from "react";

function LiveClock() {
    const [time, setTime] = useState(new Date());
    const { timeFormat } = useContext(TimeformatContext);
    const { videoLink } = useContext(VideoContext);
    const { date } = useContext(DateContext);
    const { language } = useContext(LanguageContext);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg">
            <video key={videoLink} autoPlay loop muted>
                <source src={videoLink} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="clock-container">
                {timeFormat
                    ? time.toLocaleTimeString(language === "English" ? "en-GB" : "ja-JP")
                    : time.toLocaleTimeString(language === "English" ? "en-US" : "ja-JP")}
            </div>
            <div className={date ? "date" : "hide"}>
                {time.toLocaleDateString(language === "English" ? "en-US" : "ja-JP", { year: "numeric", month: "long", day: "numeric" })}
            </div>
        </div>
    );
}

export { LiveClock };
