import React from "react";
import Left from "./components/leftSide/left";
import Payment from "./components/nextpage/payment";

const Paylayout = () => {
  return (
    <div className="MAIN__section">
      <div className="container">
        <div className="row">
          <Left />
          <Payment />
        </div>
      </div>
    </div>
  );
};

export default Paylayout;
