import { useState } from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import Button from "./shared/Button";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnIsDisabled, setBtnIsDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    if (text === "") {
      setBtnIsDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length < 9) {
      setBtnIsDisabled(true);
      setMessage("Text must be greater than 10 characters");
    } else {
      setBtnIsDisabled(false);
      setMessage(null);
    }

    setText(e.target.value);
  };
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* todo - rating select component */}
        <div className="input-group">
          <input onChange={handleChange} type="text" value={text} />
          <Button type="submit" isDisabled={btnIsDisabled}>
            Send
          </Button>
        </div>
      </form>
      {message && <div className="message">{message}</div>}
    </Card>
  );
}

FeedbackForm.propTypes = {
  text: PropTypes.string,
};

export default FeedbackForm;
