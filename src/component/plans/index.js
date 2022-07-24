import React, { useState } from "react";
import "./style.css";

const Plans = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="plan">
      {/* <h1 className="p_heading">Eden</h1> */}
      <span className="p_sub_heading">How are planning to use Eden</span>
      <span className="p_content">We'll streamline your setup experience accordingly.</span>

      <div className="p_card">
        <div className="card">
          <i className="fa-solid fa-user user_icon "></i>
          <span className="card_head"> For myself</span>
          <span className="card_content">Write better. Think more clearly. Stay organized</span>
        </div>
        <div className="card">
          <i className="fa-solid fa-users public_icon "></i>
          <span className="card_head">With my team</span>
          <span className="card_content">Wikis, docs, tasks & projects, all in one place.</span>
        </div>
      </div>

      <button className="btn">Create Workspace</button>
    </div>
  );
};

export default Plans;
