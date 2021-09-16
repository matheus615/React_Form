import React from "react";
import "./payment.css";
import Pay from "../../assets/images/payment.jpeg";
import PayPal from "../../assets/images/paypal.jpeg";

const Form = () => {
  return (
    <div className="col offset-lg-2 col-lg-6 col-md-7 col-sm-12 RightCol_payment">
      <div className="rightColInner_pay">
        <form className="form">
          <div className="form__layer__1">
            <center>
              <b>Secure Payment</b>
              <p className="howpay">How would you like to pay?</p>
            </center>
            <div className="pay___btn">
              <p>Pay via credit card</p>
            </div>
            <div className="paymentImage">
              <img src={Pay} className="img-fluid" alt="" />
            </div>
            <div className="paypal___btn">
              <h5 className="payfont">Pay With</h5>
              <img
                src={PayPal}
                className="img-fluid"
                alt="paypal"
                className="paypal_img"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
