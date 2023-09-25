import { useState } from 'react';
import PropTypes from 'prop-types'
const FaqItem = ({ question, answer }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="mb-4 border-b-2 border-b-secondary py-1">
			<div className="flex justify-between items-center font-normal text-white">
				<h3 className="text-sm font-semibold ">{question}</h3>
				<button
					onClick={toggleOpen}
					className="text-secondary mr-2 focus:outline-none text-3xl"
				>
					{isOpen ? '-' : '+'}
				</button>
			</div>
			{isOpen && <p className="mt-2 text-white text-sm">{answer}</p>}
		</div>
	);
};

FaqItem.propTypes = {
	question: PropTypes.string,
	answer: PropTypes.string,
}

export default FaqItem;
