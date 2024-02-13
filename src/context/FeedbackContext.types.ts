export interface FeedbackProviderProps {
  children: React.ReactElement;
}

export interface Feedback {
  id: string;
  rating: number;
  text: string;
}

export interface FeedbackEdit {
  item: Feedback;
  edit: boolean;
}

export interface FeedbackContextType {
  feedbacks : Feedback[],
  feedbackEdit: FeedbackEdit,
  addFeedback: (newFeedback: Feedback) => void,
  deleteFeedback: (id: string) => void,
  editFeedback: (item: Feedback) => void,
  updateFeedback: (id: string, updatedItem: Feedback) => void,
}