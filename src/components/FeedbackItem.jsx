import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./shared/Card";

function FeedbackItem({ item }) {
	const { deleteFeedback } = useContext(FeedbackContext);

	return (
		<Card>
			<div className="num-display">{item.rating}</div>
			<div className="text-display">{item.text}</div>
			<button onClick={() => deleteFeedback(item.id)}>
				<FaTimes color="purple" />
			</button>
		</Card>
	);
}

export default FeedbackItem;

FeedbackItem.propTypes = {
	item: PropTypes.object.isRequired,
};
