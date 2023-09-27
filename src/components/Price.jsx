import winner from '../assets/winner.png'
import gold from '../assets/gold.png'
import silver from '../assets/silver.png'
import bronze from '../assets/bronze.png'
import star1 from '../assets/star1.png'
import star3 from '../assets/star3.png'
import star4 from '../assets/star4.png'

const Price = () => {
	return (
		<div className="lg:flex gap-10 w-full pb-20 bg-primary md:px-20 px-5 relative">
			<div className='lg:hidden block py-10  w-full  text-center'>
				<p className='text-xl font-bold text-white'>Prizes and</p>
				<p className='text-xl font-bold text-secondary'>Rewards</p>
				<p className='text-white text-xs'>Highlights of the prizes and rewards for winners and for participants.</p>
			</div>
			<div className="lg:w-[40%] lg:pt-[15%] w-full ">
				<img src={winner} alt="img" className='w-full h-full' />
			</div>

			<div className='lg:w-[60%] w-full'>
				<div className='lg:block hidden pt-20 pb-52 w-[82%] pl-[20%]'>
					<p className='text-[32px] font-bold text-white'>Prizes and</p>
					<p className='text-[32px] font-bold text-secondary'>Rewards</p>
					<p className='text-white'>Highlights of the prizes and rewards for winners and for participants.</p>
				</div>

				<div className='flex lg:gap-10 lg:mt-0 mt-32 gap-2 relative'>
					<div className='w-[32%] mb-5 border border-secondary rounded-md flex p-5 bg-[rgba(212,52,254,0.12)] justify-center items-center'>
						<div className='text-center lg:pt-24 pt-5'>
							<p className='text-white lg:text-[34px] text-xs font-bold lg:pb-1'>2nd</p>
							<p className='text-white lg:text-2xl text-xs font-semibold'>Runner</p>
							<p className='text-secondary lg:text-[32px] text-sm font-bold lg:pt-7 pt-3'>N300,000</p>
						</div>
					</div>

					<div className='w-[32%] mt-5 border border-secondary rounded-md flex p-5 bg-[rgba(212,52,254,0.12)] justify-center items-center'>
						<div className='text-center lg:pt-24 pt-2'>
							<p className='text-white lg:text-[34px] text-xs font-bold lg:pb-1'>1st</p>
							<p className='text-white lg:text-2xl text-xs font-semibold'>Winner</p>
							<p className='text-[#903AFF] lg:text-[32px] text-sm font-bold lg:pt-7 pt-3'>N400,000</p>
						</div>
					</div>

					<div className='w-[32%] mb-5 border border-secondary rounded-md flex p-5 bg-[rgba(212,52,254,0.12)] justify-center items-center'>
						<div className='text-center lg:pt-24 pt-5'>
							<p className='text-white lg:text-[34px] text-xs font-bold lg:pb-1'>3rd</p>
							<p className='text-white lg:text-2xl text-xs font-semibold'>Runner</p>
							<p className='text-secondary lg:text-[32px] text-sm font-bold lg:pt-7 pt-3'>N150,000</p>
						</div>
					</div>

					<div className='absolute lg:left-[29%] lg:top-[-70%] left-[33%] top-[-45%]'>
						<img src={gold} alt="icon" className='lg:w-full w-28' />
					</div>
					<div className='absolute left-[2%] top-[-30%]'>
						<img src={silver} alt="icon" className='lg:w-full w-20' />
					</div>
					<div className='absolute right-[2%] top-[-30%]'>
						<img src={bronze} alt="icon" className='lg:w-full w-20' />
					</div>
				</div>
			</div>

			<div className='absolute top-[10%] left-[22%]'>
				<img src={star1} alt="icon" className='lg:w-5 w-2' />
			</div>
			<div className='absolute top-[20%] right-[22%]'>
				<img src={star1} alt="icon" className='lg:w-5 w-2' />
			</div>
			<div className='absolute bottom-[5%] right-[22%]'>
				<img src={star3} alt="icon" className='lg:w-5 w-2' />
			</div>
			<div className='absolute top-[30%] left-[45%]'>
				<img src={star4} alt="icon" className='lg:w-5 w-2' />
			</div>
			<div className='absolute top-[70%] left-[35%]'>
				<img src={star4} alt="icon" className='lg:w-5 w-2' />
			</div>
			<div className='absolute bottom-[15%] left-[20%]'>
				<img src={star4} alt="icon" className='lg:w-5 w-2' />
			</div>
			<div className='absolute top-[40%] right-[5%]'>
				<img src={star4} alt="icon" className='lg:w-5 w-2' />
			</div>
		</div>
	)
}

export default Price