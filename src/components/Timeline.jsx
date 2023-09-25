import num1 from '../assets/1.png';
import num2 from '../assets/2.png';
import num3 from '../assets/3.png';
import num4 from '../assets/4.png';
import num5 from '../assets/5.png';
import num6 from '../assets/6.png';
import star4 from '../assets/star4.png';
import star3 from '../assets/star3.png';
import star1 from '../assets/star1.png';
import MobileTimeline from './MobileTimeline';
import TimelineDates from './TimelineDates';

const Timeline = () => {
	return (
		<div className="py-20 bg-primary lg:px-20 px-10 relative">
			<div className="flex justify-center items-center lg:pb-32 pb-10">
				<div className="text-center text-white lg:w-[35%]">
					<p className='text-[32px] font-bold '>Timeline</p>
					<p>Here is the breakdown of the time we anticipate
						using for the upcoming event.
					</p>
				</div>
			</div>

			<div className="lg:flex items-center gap-6 relative" >
				<div className='lg:w-[44%] pl-10 lg:pl-0 lg:text-right'>
					<p className='lg:text-[24px] font-bold text-sm text-secondary'>Hackathon Announcement</p>
					<p className='text-white  leading-5 lg:leading-7 text-xs lg:text-base lg:pt-2 pb-5 lg:pb-0'>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
				</div>
				<TimelineDates imgSrc={num1} />
				<div className='lg:block hidden  w-[44%] relative text-secondary text-[24px] font-bold leading-7'>
					<p>November 18, 2023</p>
				</div>
				{/* Mobile */}
				<MobileTimeline imgSrc={num1} />
			</div>

			<div className="lg:flex flex-row-reverse items-center gap-6 relative lg:pt-20 pt-10" >
				<div className='lg:w-[44%] pl-10 lg:pl-0 '>
					<p className='lg:text-[24px] font-bold text-sm text-secondary'>Teams Registration begins</p>
					<p className='text-white  leading-5 lg:leading-7 text-xs lg:text-base lg:pt-2 pb-5 lg:pb-0'>Interested teams can now show their interest in the
						getlinked tech hackathon 1.0 2023 by proceeding to register</p>
				</div>

				<TimelineDates imgSrc={num2} />
				<div className='lg:block hidden w-[44%] relative text-secondary text-[24px] font-bold leading-7 text-right'>
					<p>November 18, 2023</p>
				</div>
				{/* Mobile */}
				<MobileTimeline imgSrc={num2} />
			</div>

			<div className="lg:flex items-center gap-6 relative lg:pt-20 pt-10" >
				<div className='lg:w-[44%] pl-10 lg:pl-0 lg:text-right'>
					<p className='lg:text-[24px] font-bold text-sm text-secondary'>Teams Registration ends</p>
					<p className='text-white leading-5 lg:leading-7  text-xs lg:text-base lg:pt-2 pb-10 lg:pb-0 '>Interested Participants are no longer Allowed to
						register</p>
				</div>

				<TimelineDates imgSrc={num3} />
				<div className='hidden lg:block lg:w-[44%] relative text-secondary text-[24px] font-bold leading-7 '>
					<p>November 18, 2023</p>
				</div>

				{/* Mobile */}
				<MobileTimeline imgSrc={num3} />
			</div>

			<div className="md:flex flex-row-reverse items-center gap-6 relative g:pt-20 pt-10" >
				<div className='lg:w-[44%] pl-10 lg:pl-0 '>
					<p className='lg:text-[24px] font-bold text-sm text-secondary'>Announcement of the accepted teams
						and ideas</p>
					<p className='text-white leading-5 lg:leading-7  text-xs lg:text-base lg:pt-2 pb-2 lg:pb-0'>All teams whom idea has been accepted into getlinked tech
						hackathon 1.0 2023 are formally announced</p>
				</div>

				<TimelineDates imgSrc={num4} />

				<div className='lg:block hidden w-[44%] relative text-secondary text-[24px] font-bold leading-7 text-right'>
					<p>November 18, 2023</p>
				</div>

				{/* Mobile */}
				<MobileTimeline imgSrc={num4} />
			</div>

			<div className="md:flex  items-center gap-6 relative lg:pt-20 pt-10" >
				<div className='lg:w-[44%] pl-10 lg:pl-0 lg:text-right'>
					<p className='lg:text-[24px] font-bold text-sm text-secondary'>Getlinked Hackathon 1.0 Offically Begins</p>
					<p className='text-white  leading-5 lg:leading-7 text-xs lg:text-base lg:pt-2 pb-2 lg:pb-0'>Accepted teams can now proceed to build their
						ground breaking skill driven solutions</p>
				</div>

				<TimelineDates imgSrc={num5} />

				<div className='lg:block hidden w-[44%] relative text-secondary text-[24px] font-bold leading-7'>
					<p>November 18, 2023</p>
				</div>

				{/* Mobile */}
				<MobileTimeline imgSrc={num5} />
			</div>

			<div className="md:flex flex-row-reverse items-center gap-6 relative lg:pt-20 pt-10" >
				<div className='lg:w-[44%] pl-10 lg:pl-0 '>
					<p className='lg:text-[24px] font-bold text-sm text-secondary'>Demo Day</p>
					<p className='text-white  leading-5 lg:leading-7 text-xs lg:text-base lg:pt-2 pb-2 lg:pb-0'>Teams get the opportunity to pitch their projects to judges.
						The winner of the hackathon will also be announced on
						this day</p>
				</div>

				<TimelineDates imgSrc={num6} />

				<div className='lg:block hidden w-[44%] relative text-secondary text-[24px] font-bold leading-7 text-right'>
					<p>November 18, 2023</p>
				</div>

				{/* Mobile */}
				<MobileTimeline imgSrc={num6} />
			</div>

			<div className='absolute top-[15%] left-[20%]'>
				<img src={star1} alt="icons" className='lg:w-5 w-3' />
			</div>
			<div className='absolute'>
				<img src={star3} alt="icons" className='lg:w-5 w-3' />
			</div>
			<div className='absolute top-[50%] right-[10%]'>
				<img src={star4} alt="icons" className='lg:w-5 w-3' />
			</div>

		</div>
	)
}

export default Timeline