import React from "react";
import "./style.css";

const SetUpHome = () => {
  return (
    <div className="setup">
      {/* <h1>Eden</h1> */}
      <span className="setup_sub_head">Let's set up a home for all your work</span>
      <span className="setup_content">You can always create another workspace later.</span>
      <form className="form_container">
        <label className="full_name">Workspace Name</label>
        <input placeholder="Eden" />
        <label className="display_name">
          Workspace URL<span className="option">(optional)</span>
        </label>
        <div className="work_space">
          <div className="work">www.eden.com/</div>
          <input placeholder="Example" />
        </div>
        <button type="submit" className="btn">
          {" "}
          Create Workspace
        </button>
      </form>
    </div>
  );
};

export default SetUpHome;
