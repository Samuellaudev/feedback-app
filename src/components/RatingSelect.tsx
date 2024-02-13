import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

interface SelectRatingProp {
  selectRating: (rating: number) => void
}

const RatingSelect = ({ selectRating }: SelectRatingProp) => {
	const [selected, setSelected] = useState<number>(10);
	const { feedbackEdit } = useContext(FeedbackContext);

	useEffect(() => {
		setSelected(feedbackEdit.item.rating);
	}, [feedbackEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

export default RatingSelect;
