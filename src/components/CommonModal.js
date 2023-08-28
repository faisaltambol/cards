import React, { useState } from "react";
export default function CommonModal({
  handleCloseModal,
 pictures,
 name,
 dob,
 phone,
 gender,
 email,


}) {
  return (
    <div className="App">
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-content">
            <img
              src={pictures}
              alt=""
              style={{ width: "100%" ,borderRadius:"40px"}}
            />
             <p>name:{name}</p>
             <p>dob:{dob}</p>
             <p>phone:{phone}</p>
             <p>gender:{gender}</p>
             <p>email:{email}</p>

           

            <button onClick={handleCloseModal} style={{backgroundColor:"lightgray",borderRadius:"10px",padding:" 6px 10px"}}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}