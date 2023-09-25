import PropTypes from 'prop-types'
import line from '../assets/line.png';
const MobileTimeline = ({ imgSrc }) => {
	return (

		< div className='lg:hidden  flex' >
			<div className='w-[10%] relative flex justify-center'>
				<div>
					<img src={imgSrc} alt="icon" className='lg:w-full w-7' />
				</div>
				<div className="w-full absolute top-[-10px] left-[50%] transform -translate-y-full">
					<img src={line} alt="icon" className='lg:h-20 h-[90px] w-[2px]' />
				</div>
			</div>

			<div className='lg:w-[44%] relative text-secondary lg:text-[24px] lg:pl-0 pl-[5%] text-sm font-bold leading-7 '>
				<p>November 18, 2023</p>
			</div>
		</div >
	)
}
MobileTimeline.propTypes = {
	imgSrc: PropTypes.string,
}
export default MobileTimeline