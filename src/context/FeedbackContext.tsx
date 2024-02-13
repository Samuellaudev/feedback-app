import React, { createContext, useState } from "react";
import { FeedbackContextType, FeedbackProviderProps, Feedback, FeedbackEdit } from './FeedbackContext.types';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FeedbackData from "../data/FeedbackData";

export const FeedbackContext = createContext<FeedbackContextType>({
  feedbacks: [],
  feedbackEdit: {
    item: {
      id: '',
      rating: 0,
      text: ''
    },
		edit: false,
  },
  addFeedback: () => {},
  deleteFeedback: () => {},
  editFeedback: () => {},
  updateFeedback: () => {},
});

export const FeedbackProvider = ({ children }: FeedbackProviderProps) => {
	const [feedbacks, setFeedbacks] = useState<Feedback[]>(FeedbackData);
	const [feedbackEdit, setFeedbackEdit] = useState<FeedbackEdit>({
    item: {
      id: '',
      rating: 0,
      text: ''
    },
		edit: false,
	});

	const addFeedback = (newFeedback: Feedback) => {
		setFeedbacks([newFeedback, ...feedbacks]);
	};

	const deleteFeedback = (id: string) => {
		setFeedbacks(feedbacks.filter((item) => item.id !== id));
        toast.success("Deleted successfully");
	};

	const editFeedback = (item: Feedback) => {
		setFeedbackEdit({
			item,
			edit: true,
		});
	};

	const updateFeedback = (id: string, updatedItem: Feedback) => {
		setFeedbacks(
			feedbacks.map((item) =>
				item.id === id ? { ...item, ...updatedItem } : item
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
