import React from "react";
import Left from "./components/leftSide/left";
import Form from "./components/form/form";

const Formlayout = () => {
  return (
    <div className="MAIN__section">
      <div className="container">
        <div className="row">
          <Left />
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Formlayout;
