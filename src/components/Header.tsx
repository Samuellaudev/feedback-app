import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  text?: string;
  bgColor?: string;
  textColor?: string;
  cursorSymbol?: string;
}

const Header = ({
  text = "Feedback Ui",
  bgColor = "#3a7e5d",
  textColor = "#fff",
  cursorSymbol = "pointer"
}: HeaderProps) => {
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

export default Header;