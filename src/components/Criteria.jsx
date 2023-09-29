import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import criteriaImg from '../assets/criteria.png';
import { criteria } from '../utils/data';
import Button from './Button';
import star2 from '../assets/star2.png';
import star3 from '../assets/star3.png';
import star4 from '../assets/star4.png';
import { ElipseIcon } from '../utils/Icons';
import purple from "../assets/purple.png";

const Criteria = () => {
	const containerVariants = {
		hidden: {
			opacity: 0
		},
		visible: {
			opacity: 1,
			transition: { duration: 1 }
		}
	};

	const imageVariants = {
		hidden: {
			x: -50
		},
		visible: {
			x: 0,
			transition: { duration: 1 }
		}
	};


	const [ref, inView] = useInView({
		threshold: 0.3, // Trigger animation when component is 50% in view
		triggerOnce: true // Only trigger animation once
	});

	return (
		<div ref={ref} className="lg:flex items-center py-16 bg-primary lg:px-32 px-5 relative overflow-hidden">
			<div className="absolute lg:top-[30%] lg:left-[2%] top-[5%]  left-0">
				<img src={purple} alt="bg" className='lg:w-[80%] w-full' />
			</div>

			<div className='absolute bottom-[-10%] right-[-100%] lg:bottom-[0%] lg:right-[-60%]'>
				<img src={purple} alt="icon" className='lg:w-1/2' />
			</div>


			<div className=' lg:pt-[20%] relative'>
				<div className='absolute left-20 top-[170px]'>
					<ElipseIcon />
				</div>
				<div className='z-10 relative'>
					<motion.img
						src={criteriaImg}
						alt="criteria"
						className='w-full'
						variants={imageVariants}
						initial="hidden"
						animate={inView ? "visible" : "hidden"}
					/>
					<div className='absolute lg:top-[-80px] lg:left-[130px] top-[-10%] left-[50%]'>
						<motion.img
							src={star2}
							alt="icon"
							className='w-3 lg:w-5'
							variants={imageVariants}
							initial="hidden"
							animate={inView ? "visible" : "hidden"}
						/>
					</div>
					<div className='absolute lg:top-[300px] lg:right-[250px] top-[50%] right-[45%]'>
						<motion.img
							src={star3}
							alt="icon"
							className='w-3 lg:w-5'
							variants={imageVariants}
							initial="hidden"
							animate={inView ? "visible" : "hidden"}
						/>
					</div>
					<div className='lg:block hidden absolute lg:bottom-[20px] lg:right-20 bottom-0 right-0'>
						<motion.img
							src={star4}
							alt="icon"
							className='w-3 lg:w-5'
							variants={imageVariants}
							initial="hidden"
							animate={inView ? "visible" : "hidden"}
						/>
					</div>
				</div>
			</div>

			<motion.div
				className='lg:w-1/2 w-full text-center lg:text-left relative'
				variants={containerVariants}
				initial="hidden"
				animate={inView ? "visible" : "hidden"}
			>
				<p className='text-2xl lg:text-[32px] font-bold text-white'>Judging Criteria</p>
				<p className='text-2xl lg:text-[32px] font-bold text-secondary'>Key attributes</p>
				{criteria.map((data) => {
					const { id, name, content } = data
					return (
						<div key={id}>
							<p className='text-white text-sm leading-7 py-2'><span className='text-tertiary text-base'>{name} </span>{content}
							</p>
						</div>
					)
				})}

				<div className='pt-5'>
					<Button text='Read More' />
				</div>

			</motion.div>

		</div>
	);
};

export default Criteria;