import React, { useState } from "react";
import "./popUp.css";

export default function popUp({ onDelete, setPopUpId }) {
  const  onYes=()=>{
    onDelete()
    setPopUpId(null)
  }
  
  return (
    <div>
      <div className="popUpContainer active ">
        <div className="inner">
          <p>Are you sure you want to delete?</p>
          <div className="buttons">
            <button className="popUpBtn" id="btnYes" onClick={onYes}>
              yes
            </button>
            <button className="popUpBtn" id="btnNo" onClick={(e) => {
                setPopUpId(null)
            }}>
              no
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
