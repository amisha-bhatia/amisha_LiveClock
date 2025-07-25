import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Setting.css"
import { useContext, useState } from "react"
import { faCog, faTimes } from "@fortawesome/free-solid-svg-icons";
import { DateContext, TimeformatContext, VideoContext } from "../Context";

function Setting() {
    const [setting, setSetting] = useState(false);
    const { timeFormat, setTimeformat } = useContext(TimeformatContext);
    const { date, setDate } = useContext(DateContext);
    const { setVideolink } = useContext(VideoContext);
    return (
        <>
            <div>
                <button onClick={() => setSetting(true)} className={setting ? "btn-show" : "btn-hide"}> <FontAwesomeIcon icon={faCog} > </FontAwesomeIcon> &nbsp; {setting ? "Setting" : ""}</button>
                <button onClick={() => setSetting(false)} className={setting ? "close-btn" : "hide"}> <FontAwesomeIcon icon={faTimes} > </FontAwesomeIcon> </button>
            </div>
            <div className="btn-wrapper">
                <button className={setting ? "show" : "hide"} onClick={() => setDate(true ? false : true)}> {date ? "Hide date" : "Show date"} </button>
                <button className={setting ? "show" : "hide"} onClick={() => setTimeformat(true ? false : true)} >{timeFormat ? "Change to 24 hour format" : "Change to 12 hour format"}</button>
                <button className={setting ? "show" : "hide"} onClick={() => setVideolink("/Fireworks.mp4")}> Fireworks </button>
                <button className={setting ? "show" : "hide"} onClick={() => setVideolink("/Sunset.mp4")}> Sunset </button>
                <button className={setting ? "show" : "hide"} onClick={() => setVideolink("/ClearSky.mp4")}> Clear sky </button>
                <button className={setting ? "show" : "hide"} onClick={() => setVideolink("/Birds.mp4")}> Birds </button>
                <button className={setting ? "show" : "hide"} onClick={() => setVideolink("/Ocean.mp4")}> Ocean </button>
            </div>
        </>
    )
}

export { Setting }