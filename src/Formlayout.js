import React, { useState } from "react";
import Left from "./components/leftSide/left";
import Form from "./components/form/form";
import Payment from './components/nextpage/payment';

const Formlayout = () => {
  const [step, setStep] = useState(1);

  const submitForm = () => {
    switch (step) {
      case 1:
        return (<Form step1Submit={ onSubmit }/>)
      case 2:
        return (<Payment />)
      default:
        return (<Form/>)
    }
  }

  const onSubmit = () => {
    setStep(2);
  }
  return (
    <div className="MAIN__section">
      <div className="container">
        <div className="row">
          <Left />
          {submitForm()}
        </div>
      </div>
    </div>
  );
};

export default Formlayout;
