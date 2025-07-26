import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Setting.css";
import { useContext, useState } from "react";
import { faCog, faTimes } from "@fortawesome/free-solid-svg-icons";
import { DateContext, LanguageContext, TimeformatContext, VideoContext } from "../Context";

function Setting() {
    const [setting, setSetting] = useState(false);
    const { timeFormat, setTimeformat } = useContext(TimeformatContext);
    const { date, setDate } = useContext(DateContext);
    const { language, setLanguage } = useContext(LanguageContext);
    const { setVideolink } = useContext(VideoContext);

    // For easy switching of labels
    const isEnglish = language === "English";

    return (
        <>
            <div className="setting-container">
                <button onClick={() => setSetting(prev => !prev)} className={`setting-icon ${setting ? "active" : ""}`}>
                    {setting ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faCog} />}
                </button>
            </div>

            <div className={`btn-wrapper ${setting ? "active" : ""}`}>
                <div> {setting ? (isEnglish ? "Settings" : "設定") : ""}</div>

                <button className={setting ? "setting-icon-show" : "hide"} onClick={() => setDate(prev => !prev)}>
                    {isEnglish ? (date ? "Hide Date" : "Show Date") : (date ? "日付を非表示" : "日付を表示")}
                </button>

                <button className={setting ? "setting-icon-show" : "hide"} onClick={() => setTimeformat(prev => !prev)}>
                    {isEnglish ? (timeFormat ? "Change to 24 Hour" : "Change to 12 Hour") : (timeFormat ? "24時間表示" : "12時間表示")}
                </button>

                <button className={setting ? "setting-icon-show" : "hide"} onClick={() => setLanguage(isEnglish ? "Japanese" : "English")}>
                    {isEnglish ? "Change to Japanese" : "英語に変更"}
                </button>

                <p>{isEnglish ? "Change background:" : "背景を変更:"}</p>
                <button className={setting ? "setting-icon-show" : "hide"} onClick={() => setVideolink("/Sunset.mp4")}>{isEnglish ? "Sunset" : "夕日"}</button>
                <button className={setting ? "setting-icon-show" : "hide"} onClick={() => setVideolink("/ClearSky.mp4")}>{isEnglish ? "Clear Sky" : "晴天"}</button>
                <button className={setting ? "setting-icon-show" : "hide"} onClick={() => setVideolink("/Birds.mp4")}>{isEnglish ? "Birds" : "鳥"}</button>
                <button className={setting ? "setting-icon-show" : "hide"} onClick={() => setVideolink("/Fireworks.mp4")}>{isEnglish ? "Fireworks" : "花火"}</button>
                <button className={setting ? "setting-icon-show" : "hide"} onClick={() => setVideolink("/Ocean.mp4")}>{isEnglish ? "Ocean" : "海"}</button>
            </div>
        </>
    );
}

export { Setting };
