import React from "react";
import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedbacks }) {
  if (!feedbacks || feedbacks.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedbacks.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

FeedbackList.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
