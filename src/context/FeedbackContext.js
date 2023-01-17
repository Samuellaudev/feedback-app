import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedbacks, setFeedbacks] = useState(FeedbackData);

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		setFeedbacks([newFeedback, ...feedbacks]);
	};

	const deleteFeedback = (id) => {
		if (window.confirm(`Are you sure you want to delete id:${id}?`)) {
			setFeedbacks(feedbacks.filter((item) => item.id !== id));
		}
	};

	return (
		<FeedbackContext.Provider
			value={{
				feedbacks,
				addFeedback,
				deleteFeedback,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
