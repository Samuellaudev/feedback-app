import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import FeedbackContext from "../context/FeedbackContext";

function RatingSelect({ selectRating }) {
	const [selected, setSelected] = useState(10);
	const { feedbackEdit } = useContext(FeedbackContext);

	useEffect(() => {
		setSelected(feedbackEdit.item.rating);
	}, [feedbackEdit]);

  const handleChange = (e) => {
    const selectedRating = Number(e.target.value);
    setSelected(selectedRating);
    selectRating(selectedRating);
  };

  return (
    <ul className="rating">
      {[...Array(10)].map((_, index) => (
        <li key={index + 1}>
          <input
            type="radio"
            id={`num${index + 1}`}
            name="rating"
            value={index + 1}
            onChange={handleChange}
            checked={selected === index + 1}
          />
          <label htmlFor={`num${index + 1}`}>{index + 1}</label>
        </li>
      ))}
    </ul>
  );
}

RatingSelect.propTypes = {
  selectRating: PropTypes.func.isRequired,
};

export default RatingSelect;
