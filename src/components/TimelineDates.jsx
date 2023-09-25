import line from '../assets/line.png';
import PropTypes from 'prop-types'
const TimelineDates = ({ imgSrc }) => {
	return (
		<>
			<div className='hidden w-[10%] relative lg:flex justify-center'>
				<div>
					<img src={imgSrc} alt="icon" />
				</div>
				<div className="w-full absolute top-[-10px] left-[50%] transform -translate-y-full">
					<img src={line} alt="icon" className='h-20 w-[2px]' />
				</div>
			</div>
		</>
	)
}
TimelineDates.propTypes = {
	imgSrc: PropTypes.string,
}
export default TimelineDates