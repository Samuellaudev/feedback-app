import { useState } from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";

function FeedbackForm() {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* todo - rating select component */}
        <div className="input-group">
          <input onChange={handleChange} type="text" value={text} />
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
