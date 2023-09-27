import PropTypes from 'prop-types'
import success from '../assets/congratulation.png'
import Button from './Button'
import { Link } from 'react-router-dom'
const SuccessModal = ({ onClose }) => {
	return (
		<div className="fixed inset-0 flex items-center justify-center z-50 ">
			{/* Overlay */}
			<div className="fixed inset-0 bg-register opacity-90"></div>

			{/* Modal */}
			<div className="relative z-10 bg-[rgba(255,255,255,0.01)] rounded-md  shadow-lg border border-secondary p-6">
				<div className='flex flex-col justify-center items-center'>
					<div>
						<img src={success} alt="success" />
					</div>

					<div>
						<div className='w-full text-center mx-auto'>
							<p className="text-white text-[32px] font-semibold">Congratulations <br />
								you have successfully Registered!</p>
							<p className='text-sm font-semibold text-white pb-2'>Yes, it was easy and you did it! <br />
								check your mail box for next step</p>
						</div>
					</div>

					<div className='w-full'>
						<Link to='/'>
							<Button text='Back' onClick={onClose} width='100%' />
						</Link>
					</div>
				</div>

			</div>
		</div>
	)
}

SuccessModal.propTypes = {
	onClose: PropTypes.func
}

export default SuccessModal