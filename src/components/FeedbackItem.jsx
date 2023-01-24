import { useContext, useState } from "react";
import FeedbackContext from "../context/FeedbackContext";
import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import Button from "./shared/Button";
import Modal from "react-modal";

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

	// Open/close modal
	const openModal = () => setModalIsOpen(true);
	const closeModal = () => setModalIsOpen(false);

	return (
		<>
			<Card>
				<div className="num-display">{item.rating}</div>
				<div className="text-display">{item.text}</div>
				<button onClick={openModal} className="close">
					<FaTimes color="purple" />
				</button>
				<button onClick={() => editFeedback(item)} className="edit">
					<FaEdit color="purple" />
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
						onClick={() => deleteFeedback(item.id)}
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

export default FeedbackItem;

FeedbackItem.propTypes = {
	item: PropTypes.object.isRequired,
};
