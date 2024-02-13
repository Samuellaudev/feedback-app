import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedbacks } = useContext(FeedbackContext);

  const totalFeedbacks = feedbacks.length;

  const averageRating = totalFeedbacks
    ? (
        feedbacks.reduce((total, feedback) => total + feedback.rating, 0) /
        totalFeedbacks
      ).toFixed(1).replace(/[.,]0$/, "")
    : 0;

  return (
    <div className="feedback-stats">
      <h4>{totalFeedbacks} {totalFeedbacks === 1 ? 'Review' : 'Reviews'}</h4>
      <h4>Average Rating: {averageRating}</h4>
    </div>
  );
}

export default FeedbackStats;
