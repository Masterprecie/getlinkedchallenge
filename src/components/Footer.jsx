import logo from '../assets/logo.png'
import line from '../assets/line.png'
import star1 from '../assets/star1.png'
import star4 from '../assets/star4.png'
import star3 from '../assets/star3.png'
import { FacebookIcon, InstagramIcon, LinkedInIcon, LocationIcon, PhoneIcon, TwitterIcon } from '../utils/Icons'
const Footer = () => {
	return (
		<div className="bg-[#100B20] w-full lg:px-32 px-10 py-14 relative">
			<div className='absolute bottom-[24%] right-[50%] '>
				<img src={star1} alt="icon" className='lg:w-4 w-2' />
			</div>
			<div className='absolute top-[25%] left-[3%] '>
				<img src={star4} alt="icon" className='lg:w-3 w-2' />
			</div>
			<div className='absolute bottom-[25%] right-[3%] '>
				<img src={star4} alt="icon" className='lg:w-3 w-2' />
			</div>
			<div className='absolute top-[22%] right-[28%] '>
				<img src={star3} alt="icon" className='lg:w-3 w-2' />
			</div>


			<div className="lg:flex justify-between gap-5">
				<div className="lg:w-[50%] w-full text-white">
					<div>
						<img src={logo} alt="logo" />
					</div>
					<p className='text-xs leading-5 pt-3 lg:pb-20 pb-10'>Getlinked Tech Hackathon is a technology innovation program
						established by a group of organizations with the aim of showcasing
						young and talented individuals in the field of technology
					</p>

					<div className='flex gap-5 items-center relative text-xs'>
						<div className='absolute top-0 lg:left-[16%] left-[30%]'>
							<img src={line} alt="icon" className='w-[1px] h-5' />
						</div>
						<p>Terms of Use</p>
						<p>Privacy Policy</p>
					</div>
				</div>

				<div className="lg:w-[25%] w-full text-white lg:flex justify-center pt-8 lg:pt-0">
					<div className=''>
						<p className='text-secondary font-semibold'>Useful Links</p>
						<ul className='text-xs space-y-4 pt-3'>
							<li>Overview</li>
							<li>Timeline</li>
							<li>FAQs</li>
							<li>Register</li>
							<li className='flex gap-2 items-center'>
								<p className='text-secondary font-semibold'>Follow us</p>
								<InstagramIcon />
								<TwitterIcon />
								<FacebookIcon />
								<LinkedInIcon />
							</li>
						</ul>
					</div>

				</div>

				<div className="lg:w-[15%] w-full text-white lg:flex pt-8 lg:pt-0">
					<div className=''>
						<p className='text-secondary font-semibold'>Contact Us</p>
						<ul className='text-xs space-y-4 pt-3'>
							<li className='flex items-center gap-3' >
								<PhoneIcon />
								<p>+234 679 81819</p>
							</li>
							<li className='flex gap-3 '>
								<LocationIcon />
								<p className='w-[65%]'>27,Alara Street
									Yaba 100012
									Lagos State
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className='text-center text-xs text-white pt-9'>
				<p>All rights reserved. © getlinked Ltd.</p>
			</div>

		</div>
	)
}

export default Footer