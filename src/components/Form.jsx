import PropTypes from "prop-types";
import "./Form.css";

function Form(props) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailRegex.test(props.email)) {
      props.handleSub(true);
    } else {
      props.handleMSG(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor="email" className={props.isError ? "error" : ""}>
        Email address
        <input
          className={props.isError ? "error" : ""}
          type="email"
          name="email"
          id="email"
          value={props.email}
          onChange={(e) => props.handleEmail((e.target.name = e.target.value))}
          placeholder="email@company.com"
        />
      </label>
      <button className="FormBtn">Subscribe to monthly newsletter</button>
    </form>
  );
}

Form.propTypes = {
  handleSub: PropTypes.func,
  handleMSG: PropTypes.func,
  handleEmail: PropTypes.func,
  isError: PropTypes.bool,
  email: PropTypes.string,
};
export default Form;
