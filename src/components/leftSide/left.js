import React from "react";
import "./left.css";
import Img1 from "../../assets/images/bg.png";

const Left = () => {
  return (
      <div className="col col-lg-4 col-md-5 col-sm-12 leftCol">
        <div className="leftCol__inner__1">
          <h1>Standard $25 </h1>
          <div className="iconsBoxes">
            <div className="inner__iconBox">
              <div className="iconBox">
                <ion-icon
                  name="checkmark-circle"
                  className="tick__icon"
                ></ion-icon>
                <p>Personalised Privacy Policy</p>
              </div>
              <div className="iconBox">
                <ion-icon
                  name="checkmark-circle"
                  className="tick__icon"
                ></ion-icon>
                <p>Generic Privacy Policy</p>
              </div>
            </div>

            <div className="inner__iconBox">
              <div className="iconBox">
                <ion-icon
                  name="checkmark-circle"
                  className="tick__icon"
                ></ion-icon>
                <p>Cookie Policy</p>
              </div>
              <div className="iconBox">
                <ion-icon
                  name="checkmark-circle"
                  className="tick__icon"
                ></ion-icon>
                <p>Terms of Service Document</p>
              </div>
            </div>

            <div className="inner__iconBox">
              <div className="iconBox">
                <ion-icon
                  name="checkmark-circle"
                  className="tick__icon"
                ></ion-icon>
                <p>Text Version</p>
              </div>
              <div className="iconBox">
                <ion-icon
                  name="checkmark-circle"
                  className="tick__icon"
                ></ion-icon>
                <p>HTML Version</p>
              </div>
            </div>
          </div>
        </div>

        <div className="leftCol__inner__2">
          <p>
            “Super quick and just what I needed, didn't have to spend more than
            5 minutes creating and deploying my privacy policy which is how it
            should be.”
          </p>
          <div className="name__ratingBox">
            <h6>Matthew</h6>
            <div className="starBox">
              <ion-icon name="star" className="StarIcon"></ion-icon>
              <ion-icon name="star" className="StarIcon"></ion-icon>
              <ion-icon name="star" className="StarIcon"></ion-icon>
              <ion-icon name="star" className="StarIcon"></ion-icon>
              <ion-icon name="star" className="StarIcon"></ion-icon>
            </div>
          </div>
          <img src={Img1} className="img-fluid" alt="bg" />
        </div>
      </div>
  );
};

export default Left;
