import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function Header({ text, bgColor, textColor, cursorSymbol }) {
	const headerStyles = {
		backgroundColor: bgColor,
		color: textColor,
		cursor: cursorSymbol,
	};

	const navigate = useNavigate();

	const redirect = () => {
		console.log("hello");
		navigate("/");
	};

	return (
		<header style={headerStyles}>
			<div className="container">
				<h2 onClick={redirect}>{text}</h2>
			</div>
		</header>
	);
}

Header.defaultProps = {
	text: "Feedback UI",
	bgColor: "#3a7e5d",
	textColor: "#fff",
	cursorSymbol: "pointer",
};

Header.propTypes = {
	text: PropTypes.string,
	bgColor: PropTypes.string,
	textColor: PropTypes.string,
};

export default Header;
