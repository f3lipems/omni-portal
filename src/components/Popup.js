import React from "react";
import '../styles/Components.css'
import AudioFileContent from "./AudioFileContent";
import TextFileContent from "./TextFileContent";
const Popup = ({content, audio, onClose}) => {
    return (
        <div className="popup">
            <div className="popup-content">
                <button className="close-button" onClick={onClose}>
                    <i className="fas fa-times"></i> {/* Ícone X do Font Awesome */}
                </button>
        {/* Conteúdo do Blog */}
        <AudioFileContent audioUrl={audio} />
                <div className="center-content">
        <TextFileContent fileUrl={content} />
                </div>
            </div>
        </div>
    )
}

export default Popup;