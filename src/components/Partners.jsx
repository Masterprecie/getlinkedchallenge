import star1 from '../assets/star1.png'
import star2 from '../assets/star2.png'
import star4 from '../assets/star4.png'
import { partners } from '../utils/data'
import line from '../assets/line.png'
import line2 from '../assets/line2.png'
const Partners = () => {
	return (
		<div className="bg-primary w-full lg:px-20 px-5 py-20 relative">
			<div className=" w-full flex justify-center items-center  text-white  leading-7">
				<div className="lg:w-1/2  w-full text-center">
					<p className="lg:text-[32px] text-2xl font-bold pb-4">Partners and Sponsors</p>
					<p className='lg:text-base text-sm'>Getlinked Hackathon 1.0 is honored to have the following major
						companies as its partners and sponsors
					</p>
				</div>
			</div>

			<div className="border rounded-md border-secondary lg:p-20 px-5 relative mt-16  lg:py-32 py-10">
				<div className='absolute top-[23%] left-[35%]'>
					<img src={line} alt="icon" className='w-[2px] h-16 lg:h-24' />
				</div>
				<div className='absolute top-[23%] left-[65%]'>
					<img src={line} alt="icon" className='w-[2px] h-16 lg:h-24' />
				</div>
				<div className='absolute bottom-[20%] left-[35%]'>
					<img src={line} alt="icon" className='w-[2px] h-16 lg:h-24' />
				</div>
				<div className='absolute bottom-[20%] left-[65%]'>
					<img src={line} alt="icon" className='w-[2px] h-16 lg:h-24' />
				</div>
				<div className='absolute top-[52%] left-[68%]'>
					<img src={line2} alt="icon" className='h-[2px] w-20 lg:w-[18rem]' />
				</div>
				<div className='absolute top-[52%] left-[38%]'>
					<img src={line2} alt="icon" className='h-[2px] w-20 lg:w-[18rem]' />
				</div>
				<div className='absolute top-[52%] left-[8%]'>
					<img src={line2} alt="icon" className='h-[2px] w-20 lg:w-[18rem]' />
				</div>


				<div className="flex flex-wrap justify-between space-y-5">
					{partners.map((data) => {
						const { id, img } = data
						return (
							<div key={id} className='w-[30%] pb-5 flex items-center justify-center'>
								<div>
									<img src={img} alt="logo" />
								</div>
							</div>
						)
					})}

				</div>

			</div>

			<div className='absolute top-[23%] left-[12%]'>
				<img src={star1} alt="icon" className='lg:w-5 w-2' />
			</div>
			<div className='absolute top-[40%] left-[58%]'>
				<img src={star2} alt="icon" className='lg:w-5 w-2' />
			</div>
			<div className='absolute bottom-[13%] left-[58%]'>
				<img src={star4} alt="icon" className='lg:w-5 w-2' />
			</div>

		</div>
	)
}

export default Partners