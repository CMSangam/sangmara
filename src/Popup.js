import React from 'react';
import './Popup.css';

function Popup({ isOpen, closePopup, children }) {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay" >
      <div className="popup" style={{color: 'white', backgroundColor: 'black'}}>
        <button className="close-button" onClick={closePopup} style={{color: 'white', backgroundColor: 'black'}}>
          &times;
        </button>
        <div>
        {children}
        </div>
      </div>
    </div>
  );
}

export default Popup;
