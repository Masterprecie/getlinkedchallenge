import rules from '../assets/rules.png'
import star3 from '../assets/star3.png'
import star4 from '../assets/star4.png'
import purple from '../assets/purple.png'
import { ElipseIcon } from '../utils/Icons'
const Rules = () => {
	return (
		<div className="flex lg:flex-row flex-col-reverse  items-center bg-primary lg:px-32 px-10 py-20 lg:py-0 relative overflow-hidden">
			<div className='absolute top-[-10%] left-[-10%] lg:top-[-10%] lg:left-[15%] '>
				<img src={purple} alt="icon" className='lg:w-1/2' />
			</div>

			<div className='absolute top-[10%] right-[-100%] lg:top-[0%] lg:right-[-60%]'>
				<img src={purple} alt="icon" className='lg:w-1/2' />
			</div>

			<div className='lg:w-1/2 w-full relative text-center lg:text-left'>
				<p className='text-[32px] font-bold text-white'>Rules and</p>
				<p className='text-[32px] font-bold text-secondary'>Guidelines</p>
				<p className='text-white text-sm leading-7'>Our tech hackathon is a melting pot of visionaries, and its purpose is as
					clear as day: to shape the future. Whether you&apos;re a coding genius, a
					design maverick, or a concept wizard, you&apos;ll have the chance to transform
					your ideas into reality. Solving real-world problems, pushing the boundaries
					of technology, and creating solutions that can change the world,
					that&apos;s what we&apos;re all about!</p>

				<div className='absolute lg:top-0 lg:right-[100px] right-0 top-[30%]'>
					<img src={star3} alt="icon" className='lg:w-5 w-3' />
				</div>
				<div className='absolute lg:bottom-[-80px] lg:right-0 left-10 '>
					<img src={star4} alt="icon" className='lg:w-5 w-3' />
				</div>

			</div>

			<div className='lg:w-1/2 w-full relative'>
				<img src={rules} alt="rules" className='relative z-10' />
				<div className='lg:hidden block absolute left-5 top-[45%] '>
					<img src={star4} alt="icon" className='w-3' />
				</div>
				<div className='hidden lg:block absolute right-[17%] top-[15%]'>
					<ElipseIcon />
				</div>
			</div>

		</div>
	)
}

export default Rules