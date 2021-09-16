import React from "react";
import "./form.css";
import Pay from "../../assets/images/pay.webp";
import { NavLink } from "react-router-dom";

const Form = () => {
  const clickedMe8 = () => {
    let targetBox = document.querySelector(".targetBox_8");
    targetBox.classList.toggle("Boxhidden__8");
  };

  const clickedMe7 = () => {
    let targetBox = document.querySelector(".targetBox_7");
    targetBox.classList.toggle("Boxhidden__7");
  };

  const clickedMe6 = () => {
    let targetBox = document.querySelector(".targetBox_6");
    targetBox.classList.toggle("Boxhidden__6");
  };

  const clickedMe5 = () => {
    let targetBox = document.querySelector(".targetBox_5");
    targetBox.classList.toggle("Boxhidden__5");
  };

  const clickedMe3 = () => {
    let targetBox = document.querySelector(".targetBox_3");
    targetBox.classList.toggle("Boxhidden__3");
  };

  const clickedMe2 = () => {
    let targetBox = document.querySelector(".targetBox_2");
    targetBox.classList.toggle("Boxhidden__2");
  };

  const GenerateClickHandler = (e) => {
    e.preventDefault();
    let para1 = document.querySelector(".para_1");
    let para2 = document.querySelector(".para_2");
    let para3 = document.querySelector(".para_3");
    let para4 = document.querySelector(".para_4");
    let para5 = document.querySelector(".para_5");
    let para6 = document.querySelector(".para_6");
    let para7 = document.querySelector(".para_7");

    const websiteaddress = document.querySelector("#websiteaddress");
    const company = document.querySelector("#company");
    const location = document.querySelector("#location");
    const email = document.querySelector("#email");
    const contactname = document.querySelector("#contactname");
    const contactEmail = document.querySelector("#contactEmail");
    const Done = document.querySelector("#Done");
    const ValidateInfo = document.querySelector(".ValidateInfo");

    if (websiteaddress.value === "") {
      para1.style.display = "block";
      websiteaddress.style.border = "1px solid rgb(224, 3, 3)";
    } else {
      para1.style.display = "none";
    }

    if (company.value === "") {
      company.style.border = "1px solid rgb(224, 3, 3)";
      para2.style.display = "block";
    } else {
      para2.style.display = "none";
    }

    if (location.value === "") {
      location.style.border = "1px solid rgb(224, 3, 3)";
      para3.style.display = "block";
    } else {
      para3.style.display = "none";
    }

    if (email.value === "") {
      email.style.border = "1px solid rgb(224, 3, 3)";
      para4.style.display = "block";
    } else {
      para4.style.display = "none";
    }

    if (contactname.value === "") {
      contactname.style.border = "1px solid rgb(224, 3, 3)";
      para5.style.display = "block";
    } else {
      para5.style.display = "none";
    }

    if (contactEmail.value === "") {
      contactEmail.style.border = "1px solid rgb(224, 3, 3)";
      para6.style.display = "block";
    } else {
      para6.style.display = "none";
    }

    if (!Done.checked) {
      Done.style.border = "1px solid rgb(224, 3, 3) !important";
      para7.style.display = "block";
      ValidateInfo.classList.remove("validate__none");
    } else {
      para7.style.display = "none";
      ValidateInfo.classList.add("validate__none");
    }
  };

  // FIRST CHECKBOX
  const checkBoxMarker1 = () => {
    const checkbox1 = document.querySelector("#checkbox____1");
    const checkBoxImg = document.querySelector(".checkbox___Img");
    checkbox1.style.visibility = "hidden";
    checkBoxImg.classList.add("checkBox_checked");
  };

  const Image1Clicked1 = () => {
    const checkbox1 = document.querySelector("#checkbox____1");
    const checkBoxImg = document.querySelector(".checkbox___Img");
    checkbox1.style.visibility = "visible";
    checkBoxImg.classList.remove("checkBox_checked");
    checkbox1.checked = false;
  };

  return (
    <>
      <div className="col offset-lg-2 col-lg-6 col-md-7 col-sm-12 RightCol">
        <div className="rightColInner">
          <form className="form">
            <div className="form__layer__1">
              <div className="form__items">
                <label htmlFor="websiteaddress">Website address*</label>
                <input type="text" id="websiteaddress" placeholder="https://" />
                <p className="danger__para para_1">
                  The website address format is invalid.
                </p>
              </div>

              <div className="twoCol__form__items">
                <div className="form__items__inner">
                  <label htmlFor="company">Company / Website Name*</label>
                  <input type="text" id="company" />
                  <p className="danger__para para_2">
                    Company name is required
                  </p>
                </div>
                <div className="form__items__inner">
                  <label htmlFor="location">Location (State or Country)*</label>
                  <input type="text" id="location" />
                  <p className="danger__para para_3">Location is required</p>
                </div>
              </div>

              <div className="form__items">
                <label htmlFor="email">Your Email Address*</label>
                <input type="text" id="email" />
                <p className="danger__para para_4">
                  The email field is required.
                </p>
              </div>
            </div>

            <div className="form__layer__2">
              <h5>Tailor your Privacy Policy</h5>
              <div className="checkBoxAreas">
                <div className="check__Box">
                  <input
                    type="checkbox"
                    id="checkbox____1"
                    className="checkBoxInput"
                     
                  />
                  <img
                    className="checkbox___Img"
                    onClick={Image1Clicked1}
                    src="https://img.icons8.com/material-outlined/24/4a90e2/checkmark--v1.png"
                  />
                  <div className="checkBox__content">
                    <h6>Log Data</h6>
                    <p>
                      Disclose that you automatically log "non-identifying"
                      browser and visitor statistics.
                    </p>
                  </div>
                </div>

                {/* BOX -- 2 */}
                <div className="check__Box">
                  <input type="checkbox" onClick={clickedMe2} />
                  <div className="checkBox__content">
                    <h6>My website collects device data.</h6>
                    <p>
                      Let users know your website collects data about their
                      device, as technical information.
                    </p>
                  </div>
                </div>

                <div className="targetBox_2 Boxhidden__2">
                  <h6>Types of information you ask for</h6>
                  <div className="targetBox_2_inner">
                    <div>
                      <div className="targetbox2_____inner">
                        <input type="checkbox" id="type" />
                        <label htmlFor="type">Device Type</label>
                      </div>

                      <div className="targetbox2_____inner">
                        <input type="checkbox" id="identifiers" />
                        <label htmlFor="identifiers">
                          Unique device identifiers
                        </label>
                      </div>

                      <div className="targetbox2_____inner">
                        <input type="checkbox" id="geo" />
                        <label htmlFor="geo">Geo-location data</label>
                      </div>
                    </div>

                    <div>
                      <div className="targetbox2_____inner">
                        <input type="checkbox" id="os" />
                        <label htmlFor="os">Operating System</label>
                      </div>

                      <div className="targetbox2_____inner">
                        <input type="checkbox" id="Devicesettings" />
                        <label htmlFor="Devicesettings">Device settings</label>
                      </div>

                      <div className="targetbox2_____inner">
                        <input type="checkbox" id="other" />
                        <label htmlFor="other">Other</label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* BOX -- 3 */}
                <div className="check__Box">
                  <input type="checkbox" onClick={clickedMe3} />
                  <div className="checkBox__content">
                    <h6>My website collects personal information</h6>
                    <p>
                      Let users know what type of personal information you
                      collect.
                    </p>
                  </div>
                </div>

                <div className="targetBox_3 Boxhidden__3">
                  <h6>Types of information you ask for</h6>
                  <div className="targetBox_3_inner">
                    <div>
                      <div className="targetbox3_____inner">
                        <input type="checkbox" id="name" />
                        <label htmlFor="name">Name</label>
                      </div>

                      <div className="targetbox3_____inner">
                        <input type="checkbox" id="socialMedia" />
                        <label htmlFor="socialMedia">
                          Social media profiles
                        </label>
                      </div>

                      <div className="targetbox3_____inner">
                        <input type="checkbox" id="phonee" />
                        <label htmlFor="phonee">Phone/mobile number</label>
                      </div>
                    </div>

                    <div>
                      <div className="targetbox3_____inner">
                        <input type="checkbox" id="email" />
                        <label htmlFor="email">Email</label>
                      </div>

                      <div className="targetbox3_____inner">
                        <input type="checkbox" id="DOB" />
                        <label htmlFor="DOB">Date of birth</label>
                      </div>

                      <div className="targetbox3_____inner">
                        <input type="checkbox" id="home" />
                        <label htmlFor="home">Home/mailing address</label>
                      </div>
                    </div>
                  </div>

                  <br />

                  <h6>What you use personal information for:</h6>
                  <div className="targetBox_3_inner">
                    <div>
                      <div className="targetbox3_____inner">
                        <input type="checkbox" id="experiences" />
                        <label htmlFor="experiences">
                          Personalising experiences
                        </label>
                      </div>

                      <div className="targetbox3_____inner">
                        <input type="checkbox" id="Analytics" />
                        <label htmlFor="Analytics">
                          Analytics & market research
                        </label>
                      </div>

                      <div className="targetbox3_____inner">
                        <input type="checkbox" id="Recruiting" />
                        <label htmlFor="Recruiting">Recruiting</label>
                      </div>

                      <div className="targetbox3_____inner">
                        <input type="checkbox" id="administration" />
                        <label htmlFor="administration">
                          Record keeping & administration
                        </label>
                      </div>

                      <div className="targetbox3_____inner">
                        <input type="checkbox" id="Compliance" />
                        <label htmlFor="Compliance">
                          Compliance & dispute resolution
                        </label>
                      </div>

                      <div className="targetbox3_____inner">
                        <input type="checkbox" id="Security" />
                        <label htmlFor="Security">
                          Security & fraud prevention
                        </label>
                      </div>

                      <div className="targetbox3_____inner">
                        <input type="checkbox" id="newsletters" />
                        <label htmlFor="newsletters">Email newsletters</label>
                      </div>
                    </div>

                    <div>
                      <div className="targetbox3_____inner">
                        <input type="checkbox" id="Contacting" />
                        <label htmlFor="Contacting">Contacting users</label>
                      </div>

                      <div className="targetbox3_____inner">
                        <input type="checkbox" id="Advertising" />
                        <label htmlFor="Advertising">
                          Advertising & marketing
                        </label>
                      </div>

                      <div className="targetbox3_____inner">
                        <input type="checkbox" id="Granting" />
                        <label htmlFor="Granting">
                          Granting access to the website
                        </label>
                      </div>

                      <div className="targetbox3_____inner">
                        <input type="checkbox" id="competitions" />
                        <label htmlFor="competitions">
                          Running competitions
                        </label>
                      </div>

                      <div className="targetbox3_____inner">
                        <input type="checkbox" id="attribution" />
                        <label htmlFor="attribution">Content attribution</label>
                      </div>

                      <div className="targetbox3_____inner">
                        <input type="checkbox" id="registration" />
                        <label htmlFor="registration">
                          User account registration
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* BOX -- 4 */}
                <div className="check__Box">
                  <input type="checkbox" />
                  <div className="checkBox__content">
                    <h6>My website uses third-party services.</h6>
                    <p>
                      Let users know your website connects to third-party
                      services collect information
                    </p>
                  </div>
                </div>

                {/* BOX -- 5 */}
                <div className="check__Box">
                  <input type="checkbox" onClick={clickedMe5} />
                  <div className="checkBox__content">
                    <h6>My website uses cookies.</h6>
                    <p>
                      Include a standard Cookie Policy, explaining what cookies
                      are and how they’re used.
                    </p>
                  </div>
                </div>
                <div className="targetBox_5 Boxhidden__5">
                  <div className="targetBox_5_inner">
                    <input type="checkbox" />
                    <div className="target5_rightSide">
                      <h6>Essential cookies</h6>
                      <p>eg. user logins, account management</p>
                    </div>
                  </div>

                  <div className="targetBox_5_inner">
                    <input type="checkbox" />
                    <div className="target5_rightSide">
                      <h6>Performance cookies</h6>
                      <p>eg. analytics, visitor tracking</p>
                    </div>
                  </div>

                  <div className="targetBox_5_inner">
                    <input type="checkbox" />
                    <div className="target5_rightSide">
                      <h6>Functionality cookies</h6>
                      <p>eg. language, timezone, enhanced content</p>
                    </div>
                  </div>

                  <div className="targetBox_5_inner">
                    <input type="checkbox" />
                    <div className="target5_rightSide">
                      <h6>Targeting/advertising cookies</h6>
                      <p>eg. content partners, banner networks</p>
                    </div>
                  </div>
                </div>

                {/* BOX -- 6 */}
                <div className="check__Box">
                  <input type="checkbox" onClick={clickedMe6} />
                  <div className="checkBox__content">
                    <h6>My website targets children under the age of 13.</h6>
                    <p>
                      Services aimed at children under the age of 13 are
                      required to meet certain criteria.
                    </p>
                  </div>
                </div>
                <div className="targetBox_6 Boxhidden__6">
                  <div className="targetBox_6_inner">
                    <input type="checkbox" id="term" checked />
                    <label htmlFor="term">
                      I accept that privacy disclosures aimed at children under
                      the age of 13.*
                    </label>
                  </div>
                  <div className="targetBox_6_inner">
                    <input type="checkbox" id="acknowledge" checked />
                    <label htmlFor="acknowledge">
                      I acknowledge that I am responsible for sourcing my own
                      Children’s Privacy policy*
                    </label>
                  </div>
                </div>

                {/* BOX -- 7 */}
                <div className="check__Box">
                  <input type="checkbox" onClick={clickedMe7} />
                  <div className="checkBox__content">
                    <h6>
                      My website accepts and/or publishes user-generated
                      content.
                    </h6>
                  </div>
                </div>
                <div className="targetBox_7 Boxhidden__7">
                  <input type="checkbox" />
                  <label htmlFor="comment">
                    My website allows users to leave comments.
                  </label>
                </div>

                {/* BOX -- 8 */}
                <div className="check__Box">
                  <input type="checkbox" onClick={clickedMe8} />
                  <div className="checkBox__content">
                    <h6>Data Footprint</h6>
                    <p>
                      Let users know where your data may be stored and/or
                      processed.
                    </p>
                  </div>
                </div>
                <div className="targetBox_8 Boxhidden__8">
                  <label htmlFor="countries">
                    Countries where your data is stored and/or processed:
                  </label>
                  <input
                    type="text"
                    placeholder="select one or more countries"
                  />
                </div>
              </div>
            </div>

            <div className="form__layer__3">
              <h6>Privacy Contact</h6>
              <p>
                Please supply the contact details that users may forward their
                privacy enquiries to:
              </p>
              <div className="form__layer__3__innerBox">
                <div className="form____inner__items">
                  <label htmlFor="contactname">Privacy Contact Name*</label>
                  <input type="text" id="contactname" />
                  <p className="danger__para para_5">Name is required</p>
                </div>

                <br />

                <div className="form____inner__items">
                  <label htmlFor="contactmethod">
                    Contact method for your Privacy Contact
                  </label>
                  <div className="layer__3__radio__selection__box">
                    <div className="selectionBox">
                      <input
                        type="radio"
                        name="contactmethod"
                        value="onlineform"
                      />
                      <label htmlFor="onlineform">Online form / page</label>
                    </div>

                    <div className="selectionBox">
                      <input type="radio" name="contactmethod" value="email" />
                      <label htmlFor="onlineform">Email / Phone</label>
                    </div>

                    <div className="selectionBox">
                      <input type="radio" name="contactmethod" value="other" />
                      <label htmlFor="onlineform">Other</label>
                    </div>
                  </div>

                  <input
                    type="text"
                    id="contactEmail"
                    placeholder="Add Email/Phone"
                  />
                  <p className="danger__para para_6">
                    Contact info must be a valid URL
                  </p>
                </div>
              </div>
            </div>

            <div className="form__layer__4">
              <p>
                DISCLAIMER: GetTerms policies are of a general nature. We
                encourage you to seek independent legal advice for adapting it
                to your own business practices. Being compliant with legislation
                means more than having a well-written privacy policy (learn
                more). GetTerms takes no responsibility for the use or actions
                taken, based on the contents of this website.
              </p>

              <div className="last___inputs">
                <div className="lastInputsBox">
                  <input type="checkbox" id="Done" />
                  <label htmlFor="Done">
                    I understand and agree to the GetTerms.io disclaimer.*
                  </label>
                </div>
                <p className="danger__para para_7 MainTermPara">
                  You must agree to the disclaimer in order to proceed.
                </p>

                <div className="lastInputsBox lastcutomTerms">
                  <input type="checkbox" id="Notify" />
                  <label htmlFor="Notify">
                    Notify me of policy updates and GetTerms improvements.
                  </label>
                </div>
              </div>

              <div className="ValidateInfo validate__none">
                <p>
                  Please review highlighted fields above to complete your policy
                </p>
              </div>

              <div className="last___btn" onClick={GenerateClickHandler}>
                <NavLink className="last___btn__inner" to="/pay">
                  <p>Generate Terms</p>
                  <button className="last___btn__btn">&#36;25.00</button>
                </NavLink>
              </div>

              <p className="infoPara">
                One time payment – 100% Money back guarantee
              </p>

              <div className="lastImage">
                <img src={Pay} className="img-fluid" alt="" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
