import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedbacks, setFeedbacks] = useState(FeedbackData);

	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {}, // when the icon is clicked, the content about that item will be put in here
		edit: false, // when the icon is clicked, it will change to 'true', which means we are in edit mode
	});

	// Add feedback
	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		setFeedbacks([newFeedback, ...feedbacks]);
	};

	// Delete feedback
	const deleteFeedback = (id) => {
		if (window.confirm(`Are you sure you want to delete id:${id}?`)) {
			setFeedbacks(feedbacks.filter((item) => item.id !== id));
		}
	};

	// Set item to be updated
	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true,
		});
	};

	return (
		<FeedbackContext.Provider
			value={{
				feedbacks,
				addFeedback,
				deleteFeedback,
				editFeedback,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
