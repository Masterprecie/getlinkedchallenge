import privacy from '../assets/privacy.png'
import star1 from '../assets/star1.png'
import star4 from '../assets/star4.png'
import star3 from '../assets/star3.png'
import { CheckIcon, LockIcon } from '../utils/Icons'
import Button from './Button'
const Privacy = () => {
	return (
		<div className="lg:flex w-full items-center bg-primary lg:px-32 px-5 pb-20 relative">
			<div className='absolute bottom-[30%] left-[3%]'>
				<img src={star1} alt="icon" className='lg:w-5 w-3' />
			</div>
			<div className='absolute top-[28%] left-[48%]'>
				<img src={star1} alt="icon" className='lg:w-5 w-3' />
			</div>
			<div className='absolute top-[13%] left-[35%]'>
				<img src={star3} alt="icon" className='lg:w-5 w-3' />
			</div>
			<div className='absolute bottom-[13%] right-[8%]'>
				<img src={star3} alt="icon" className='lg:w-5 w-3' />
			</div>

			<div className='absolute bottom-[33%] right-[38%]'>
				<img src={star1} alt="icon" className='lg:w-3 w-2' />
			</div>
			<div className='absolute bottom-[21%] right-[43%]'>
				<img src={star4} alt="icon" className='lg:w-3 w-2' />
			</div>
			<div className='absolute top-[25%] right-[14%]'>
				<img src={star4} alt="icon" className='lg:w-3 w-2' />
			</div>

			<div className="lg:w-1/2 w-full lg:pt-32 pt-12" >
				<div className='pb-10 text-center lg:text-left'>
					<p className='text-2xl lg:text-[32px] font-bold text-white'>Privacy Policy and </p>
					<p className='text-2xl lg:text-[32px] font-bold text-secondary'>Terms</p>
					<p className='text-[rgba(255,255,255,0.75)] py-5 text-sm'>Last updated on September 12, 2023.</p>
					<p className='text-white leading-7 text-sm lg:w-[75%] w-full '>Below are our privacy & policy, which outline a lot of goodies.
						It’s our aim to always take of our participant</p>
				</div>

				<div className=' border border-secondary bg-[rgba(217,217,217,0.03)] lg:p-16 p-8 text-white '>
					<div >
						<p className='text-white leading-7 text-center text-sm lg:text-base pb-10'>At getlinked tech Hackathon 1.0, we value your privacy
							and are committed to protecting your personal information.
							This Privacy Policy outlines how we collect, use, disclose,
							and safeguard your data when you participate in our tech
							hackathon event. By participating in our event, you consent
							to the practices described in this policy.</p>

						<p className='text-secondary font-bold text-base'>Licensing Policy</p>
						<p className='text-sm lg:text-base'>Here are terms of our Standard License:</p>
					</div>
					<div className='flex gap-5 pt-3'>
						<div>
							<CheckIcon />
						</div>
						<div className='text-sm lg:text-base'>
							<p>The Standard License grants you a non-exclusive right to
								navigate and register for our event</p>
						</div>
					</div>
					<div className='flex gap-5 py-3'>
						<div>
							<CheckIcon />
						</div>
						<div className='text-sm lg:text-base'>
							<p>You are licensed to use the item available at any free source
								sites, for your project developement</p>
						</div>
					</div>

					<div className='text-center'>
						<Button text='Read More' />
					</div>

				</div>


			</div>
			<div className="relative lg:w-1/2 w-full pt-[30%]">
				<img src={privacy} alt="img" className='relative z-10' />
				<div className=' absolute top-[-16%] lg:top-[12%] left-[10%] '>
					<LockIcon />
				</div>

			</div>
		</div>
	)
}

export default Privacy