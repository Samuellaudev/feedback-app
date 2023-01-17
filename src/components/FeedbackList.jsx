import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList({ handleDelete }) {
	const { feedbacks } = useContext(FeedbackContext);

	if (!feedbacks || feedbacks.length === 0) {
		return <p>No Feedback Yet</p>;
	}

	//   With Framer-motion
	return (
		<div className="feedback-list">
			<AnimatePresence>
				{feedbacks.map((item) => {
					return (
						<motion.div
							key={item.id}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<FeedbackItem
								key={item.id}
								item={item}
								handleDelete={handleDelete}
							/>
						</motion.div>
					);
				})}
			</AnimatePresence>
		</div>
	);
}

export default FeedbackList;
