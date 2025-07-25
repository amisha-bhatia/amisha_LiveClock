import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Setting.css"
import { useState } from "react"
import { faCog, faTimes } from "@fortawesome/free-solid-svg-icons";

function Setting() {
    const [setting, setSetting] = useState(false);
    return (
        <>
            <div>
                <button onClick={() => setSetting(true)} className={setting ? "btn-show" : "btn-hide"}> <FontAwesomeIcon icon={faCog} > </FontAwesomeIcon> &nbsp; {setting ? "Setting" : ""}
                </button>
                <button onClick={() => setSetting(false)} className={setting ? "close-btn" : "hide"}> <FontAwesomeIcon icon={faTimes} > </FontAwesomeIcon> </button>

            </div>
            <ul className={setting ? "show" : "hide"}>
                <li> lantern </li>
                <li> ocean </li>
                <li> other </li>
                <li> other </li>
            </ul>
        </>
    )
}

export { Setting }