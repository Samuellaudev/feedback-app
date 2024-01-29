import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FeedbackData from "../data/FeedbackData";

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedbacks, setFeedbacks] = useState(FeedbackData);
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuid();
		setFeedbacks([newFeedback, ...feedbacks]);
	};

	const deleteFeedback = (id) => {
		setFeedbacks(feedbacks.filter((item) => item.id !== id));
        toast.success("Deleted successfully");
	};

	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true,
		});
	};

	const updateFeedback = (id, updItem) => {
		setFeedbacks(
			feedbacks.map((item) =>
				item.id === id ? { ...item, ...updItem } : item
			)
		);
	};

	return (
		<FeedbackContext.Provider
			value={{
				feedbacks,
				feedbackEdit,
				addFeedback,
				deleteFeedback,
				editFeedback,
				updateFeedback,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
