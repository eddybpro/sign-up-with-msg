import Form from "./Form";
import MobImg from "../assets/illustration-sign-up-mobile.svg";
import DesKImg from "../assets/illustration-sign-up-desktop.svg";
import ListIcon from "../assets/icon-list.svg";
import { useState } from "react";
import "./MainCom.css";
import MSGComp from "./MSGComp";

function MainCom() {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const [showMSG, setShowMSG] = useState(false);

  const handleEmail = (eml) => {
    setEmail(eml);
  };

  const handleSubmit = (data) => {
    setIsError(data);
  };

  const handleMSG = (data) => {
    setShowMSG(data);
  };

  return (
    <main>
      {!showMSG && (
        <div className="Container">
          <div className="Container-ImgBox">
            <picture>
              <source media="(max-width:768px)" srcSet={MobImg} />
              <source media="(min-width:769px)" srcSet={DesKImg} />
              <img src={MobImg} alt="illustration" />
            </picture>
          </div>
          <div className="Container-TxtBox">
            <h1 className="Container-TxtBox-Title">Stay updated!</h1>
            <p className="Container-TxtBox-Para">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="Container-TxtBox-List">
              <li>
                <img src={ListIcon} alt="" />
                <p>Product discovery and building what matters</p>
              </li>
              <li>
                <img src={ListIcon} alt="" />
                <p>Measuring to ensure updates are a success</p>
              </li>
              <li>
                <img src={ListIcon} alt="" />
                <p>And much more! </p>
              </li>
            </ul>
            <Form
              handleEmail={handleEmail}
              email={email}
              handleSub={handleSubmit}
              isError={isError}
              handleMSG={handleMSG}
            />
          </div>
        </div>
      )}
      {showMSG && <MSGComp email={email} />}
    </main>
  );
}
export default MainCom;
