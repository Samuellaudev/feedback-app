import { useState, useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm() {
	const [text, setText] = useState("");
	const [rating, setRating] = useState(10);
	const [btnIsDisabled, setBtnIsDisabled] = useState(true);
	const [message, setMessage] = useState("");
	const { addFeedback } = useContext(FeedbackContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.trim().length > 10) {
			const newFeedback = {
				text,
				rating,
			};

			addFeedback(newFeedback);

			setText("");
		}
	};

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
			<form onSubmit={handleSubmit}>
				<h2>How would you rate your service with us?</h2>
				<RatingSelect selectRating={(rating) => setRating(rating)} />
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
