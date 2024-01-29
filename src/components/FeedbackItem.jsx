import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";
import Modal from "react-modal";

import FeedbackContext from "../context/FeedbackContext";
import Card from "./shared/Card";
import Button from "./shared/Button";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

Modal.setAppElement("#root");

function FeedbackItem({ item }) {
	const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

	const [modalIsOpen, setModalIsOpen] = useState(false);

	const openModal = () => setModalIsOpen(true);
	const closeModal = () => setModalIsOpen(false);

  const handleEditFeedback = () => editFeedback(item)
  const handleDeleteFeedback = () => deleteFeedback(item.id)

	return (
		<>
			<Card>
				<div className="num-display">{item.rating}</div>
				<div className="text-display">{item.text}</div>
				<button onClick={openModal} className="close">
					<FaTimes color="gray" />
				</button>
				<button onClick={handleEditFeedback} className="edit">
					<FaEdit color="gray" />
				</button>
			</Card>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Delete feedback"
				overlayClassName="modal-overlay"
			>
				<div className="modal-text">
					Are you sure you want to delete this feedback?
				</div>
				<div className="button-group">
					<Button
						version="primary"
						onClick={handleDeleteFeedback}
					>
						Yes
					</Button>
					<Button version="secondary" onClick={closeModal}>
						No
					</Button>
				</div>
			</Modal>
		</>
	);
}
FeedbackItem.propTypes = {
	item: PropTypes.object.isRequired,
};

export default FeedbackItem;
