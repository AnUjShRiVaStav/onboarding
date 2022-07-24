import React from "react";
import "./style.css";

const FinalScreen = () => {
  return (
    <div className="final_screen">
      {/* <h1 className="heading">Eden</h1> */}

      <div className="tick_icon">
        <i class="fa-solid fa-check"></i>{" "}
      </div>

      <p className="sub_heading">Congratulation, Eren!</p>
      <p className="content">You have completed onboardings, you can start using the Eden!</p>
      <button type="primary" className="btn">
        Launch Eden
      </button>
    </div>
  );
};

export default FinalScreen;
