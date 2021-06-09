import React from "react";

export default ({ isAuthed }) => (
  <div style={{ textAlign: "center", marginTop: 40 }}>
    <h1> You must click the button to log in. </h1>
    <button className="uk-button uk-button-primary" onClick={isAuthed}>
      Log In
    </button>
  </div>
);
