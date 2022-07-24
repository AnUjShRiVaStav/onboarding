import React from "react";
import "./style.css";

const WelcomeScreen = () => {
  return (
    <div className="welcome">
      {/* <h1 className="heading">Eden</h1> */}
      <span className="wel_sub_heading">Welcome! First things first...</span>
      <span className="wel_content">You can always change them later.</span>
      <form className="form_container">
        <label className="full_name" htmlFor="name">
          Full Name
        </label>
        <input id="name" placeholder="Steve Jobs" />
        <label className="display_name" htmlFor="display_name">
          Display Name
        </label>
        <input id="display_name" placeholder="Steve" />
        <button className="btn" type="submit">
          {" "}
          Create Workspace
        </button>
      </form>
    </div>
  );
};

export default WelcomeScreen;
