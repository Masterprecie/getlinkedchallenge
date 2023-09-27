import PropTypes from 'prop-types'

const Button = ({ text, onClick, width }) => {
	const buttonStyle = {
		width: width || "auto", // Use the provided width or "auto" as the default
	};
	return (
		<button
			style={buttonStyle}
			onClick={onClick}
			className='py-2 px-8 rounded-md bg-custom-gradient text-white'>{text}
		</button>
	)
}

Button.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func,
	width: PropTypes.string
}

export default Button