import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import rules from '../assets/rules.png';
import star3 from '../assets/star3.png';
import star4 from '../assets/star4.png';
import purple from '../assets/purple.png';
import { ElipseIcon } from '../utils/Icons';

const Rules = () => {
	const containerVariants = {
		hidden: {
			opacity: 0
		},
		visible: {
			opacity: 1,
			transition: { duration: 2 }
		}
	};

	const imageVariants = {
		hidden: {
			x: -100
		},
		visible: {
			x: 0,
			transition: { duration: 1 }
		}
	};

	const textVariants = {
		hidden: {
			x: 100
		},
		visible: {
			x: 0,
			transition: { duration: 3 }
		}
	};

	const [ref, inView] = useInView({
		threshold: 0.5, // Trigger animation when component is 50% in view
		triggerOnce: true // Only trigger animation once
	});

	return (
		<div ref={ref} className="flex lg:flex-row flex-col-reverse items-center bg-primary lg:px-32 px-5 py-20 lg:py-0 relative overflow-hidden">
			<motion.div
				className='absolute top-[-10%] left-[-10%] lg:top-[-10%] lg:left-[15%]'
				variants={imageVariants}
				initial="hidden"
				animate={inView ? "visible" : "hidden"}
			>
				<img src={purple} alt="icon" className='lg:w-1/2' />
			</motion.div>

			<motion.div
				className='absolute top-[10%] right-[-100%] lg:top-[0%] lg:right-[-60%]'
				variants={imageVariants}
				initial="hidden"
				animate={inView ? "visible" : "hidden"}
			>
				<img src={purple} alt="icon" className='lg:w-1/2' />
			</motion.div>

			<motion.div
				className='lg:w-1/2 w-full relative text-center lg:text-left'
				variants={textVariants}
				initial="hidden"
				animate={inView ? "visible" : "hidden"}
			>
				<p className='text-2xl lg:text-[32px] font-bold text-white'>Rules and</p>
				<p className='text-2xl lg:text-[32px] font-bold text-secondary'>Guidelines</p>
				<p className='text-white text-sm leading-7'>Our tech hackathon is a melting pot of visionaries, and its purpose is as
					clear as day: to shape the future. Whether you&apos;re a coding genius, a
					design maverick, or a concept wizard, you&apos;ll have the chance to transform
					your ideas into reality. Solving real-world problems, pushing the boundaries
					of technology, and creating solutions that can change the world,
					that&apos;s what we&apos;re all about!</p>

				<motion.div
					className='absolute lg:top-0 lg:right-[100px] right-0 top-[30%]'
					variants={imageVariants}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
				>
					<img src={star3} alt="icon" className='lg:w-5 w-3' />
				</motion.div>
				<motion.div
					className='absolute lg:bottom-[-80px] lg:right-0 left-10'
					variants={imageVariants}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
				>
					<img src={star4} alt="icon" className='lg:w-5 w-3' />
				</motion.div>

			</motion.div>

			<motion.div
				className='lg:w-1/2 w-full relative'
				variants={containerVariants}
				initial="hidden"
				animate={inView ? "visible" : "hidden"}
			>
				<img src={rules} alt="rules" className='relative z-10' />
				<motion.div
					className='lg:hidden block absolute left-5 top-[45%]'
					variants={imageVariants}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
				>
					<img src={star4} alt="icon" className='w-3' />
				</motion.div>
				<motion.div
					className='hidden lg:block absolute right-[17%] top-[15%]'
					variants={imageVariants}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
				>
					<ElipseIcon />
				</motion.div>
			</motion.div>

		</div>
	);
};

export default Rules;