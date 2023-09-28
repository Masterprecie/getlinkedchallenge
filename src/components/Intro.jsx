import idea from '../assets/idea.png'
import star1 from '../assets/star1.png'
import star2 from '../assets/star2.png'
import arrow from '../assets/arrow.png'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Intro = () => {
	const containerVariants = {
		hidden: {
			opacity: 0
		},
		visible: {
			opacity: 1,
			transition: { duration: 3 }
		}
	};

	const imageVariants = {
		hidden: {
			x: -100
		},
		visible: {
			x: 0,
			transition: { duration: 2 }
		}
	};

	const textVariants = {
		hidden: {
			x: 100
		},
		visible: {
			x: 0,
			transition: { duration: 4 }
		}
	};

	const [ref, inView] = useInView({
		threshold: 0.5, // Trigger animation when component is 50% in view
		triggerOnce: true // Only trigger animation once
	});

	return (
		<div ref={ref}>
			<motion.div
				className="lg:flex items-center py-16 bg-primary lg:px-32 px-5 relative"
				variants={containerVariants}
				initial="hidden"
				animate={inView ? "visible" : "hidden"}
			>
				<motion.div
					className="lg:w-1/2 w-full relative"
					variants={imageVariants}
				>
					<img src={idea} alt="idea" />
					<div className='absolute lg:left-0 lg:top-[180px] left-[6%] top-[35%]'>
						<img src={star2} alt="star2" className='lg:w-full w-3' />
					</div>
					<div className='absolute lg:right-20 lg:bottom-[-30px] right-[45%]'>
						<img src={arrow} alt="arrow" className='lg:w-full w-10' />
					</div>
				</motion.div>

				<motion.div
					className="lg:w-1/2 w-full relative pt-10 lg:pt-0 text-center lg:text-left"
					variants={textVariants}
				>
					<p className='text-2xl lg:text-[32px] font-bold text-white'>Introduction to getlinked</p>
					<p className='text-2xl lg:text-[32px] font-bold text-secondary'>tech Hackathon 1.0</p>
					<p className='text-white text-sm leading-7'>Our tech hackathon is a melting pot of visionaries, and its purpose is as
						clear as day: to shape the future. Whether you&apos;re a coding genius, a
						design maverick, or a concept wizard, you&apos;ll have the chance to transform
						your ideas into reality. Solving real-world problems, pushing the boundaries
						of technology, and creating solutions that can change the world,
						that&apos;s what we&apos;re all about!
					</p>
					<div className='absolute lg:right-0 lg:top-5 top-[20%] right-0'>
						<img src={star1} alt="star1" className='lg:w-full w-3' />
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Intro;