interface ButtonProps {
  children: React.ReactElement | string;
  version: 'primary' | 'secondary';
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  children,
  version = "primary",
  type = 'button',
  isDisabled = false,
  onClick
}: ButtonProps) => {
	return (
		<button
			type={type}
			disabled={isDisabled}
			className={`btn btn-${version}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default Button;
