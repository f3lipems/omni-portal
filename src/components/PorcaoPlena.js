import React, { useState } from "react";
import Popup from "./Popup";
import Card from "./Card";
import '../styles/PorcaoPlena.css'
const PorcaoPlena = ({header, text, data , content , audio}) => {
    const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
    return(
<div>

      <button onClick={openPopup}><Card title={header} header={data} text={text} /></button>
      {isPopupOpen && (
        <Popup
          content={content}
          audio={audio}
          onClose={closePopup}
        />
      )}
</div>
    );
}

export default PorcaoPlena;