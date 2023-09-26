import PropTypes from "prop-types";
import "./MSGComp.css";
import SuccessIcon from "../assets/icon-success.svg";
function MSGComp(props) {
  return (
    <div className="MSGBox">
      <img src={SuccessIcon} alt="" />
      <h1 className="MSGBox-Title">Thanks for subscribing!</h1>
      <p className="MSGBox-Para">
        A confirmation email has been sent to
        <span> {props.email}</span>. Please open it and click the button inside
        to confirm your subscription
      </p>
      <button className="MSGBox-Btn">Dismiss message</button>
    </div>
  );
}

MSGComp.propTypes = {
  email: PropTypes.string,
};
export default MSGComp;
