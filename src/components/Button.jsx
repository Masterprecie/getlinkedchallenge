import PropTypes from 'prop-types'

const Button = ({ text, onClick }) => {
	return (
		<button
			onClick={onClick}
			className='py-2 px-8 rounded-md bg-custom-gradient text-white'>{text}
		</button>
	)
}

Button.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func
}

export default Button