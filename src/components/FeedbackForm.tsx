import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { toast } from "react-toastify";

function FeedbackForm() {
	const [text, setText] = useState("");
	const [rating, setRating] = useState(10);
	const [btnIsDisabled, setBtnIsDisabled] = useState(true);
	const [message, setMessage] = useState("");
	const { addFeedback, updateFeedback, feedbackEdit } =
		useContext(FeedbackContext);

	useEffect(() => {
		if (feedbackEdit.edit) {
			setBtnIsDisabled(false);
			setText(feedbackEdit.item.text);
			setRating(feedbackEdit.item.rating);
		}
	}, [feedbackEdit]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

		if (text.trim().length > 10) {
      const newFeedback = {
        id: uuid(),
				text,
				rating,
			};

			if (feedbackEdit.edit) {
				updateFeedback(feedbackEdit.item.id, newFeedback);
        toast.success("Edited successfully");
			} else {
				addFeedback(newFeedback);
			}

			setText("");
		}
	};

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;

    if (!inputText) {
      setBtnIsDisabled(true);
      setMessage('');
    } else if (inputText.trim().length < 10) {
      setBtnIsDisabled(true);
      setMessage("Text must be greater than 10 characters");
    } else {
      setBtnIsDisabled(false);
      setMessage('');
    }

    setText(inputText);
  };

	return (
		<Card>
      <>
        <form onSubmit={handleSubmit}>
          <h2>How would you rate your service with us?</h2>
          <RatingSelect selectRating={(rating) => setRating(rating)} />
          <div className="input-group">
            <input onChange={handleTextChange} type="text" value={text} />
            <Button type="submit" version='primary' isDisabled={btnIsDisabled}>
              Send
            </Button>
          </div>
        </form>
        { message && <div className="message">{ message }</div> }
      </>
		</Card>
	);
}

FeedbackForm.propTypes = {
	text: PropTypes.string,
};

export default FeedbackForm;
