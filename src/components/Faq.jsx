import faq from '../assets/faq.png'
import question from '../assets/question.png'
import star2 from '../assets/star2.png'
import star3 from '../assets/star3.png'
import star4 from '../assets/star4.png'
import FaqItem from './FaqItem'
const Faq = () => {
	return (
		<div className="lg:flex items-center py-20  bg-primary lg:px-32 px-10 relative">
			<div className='absolute lg:top-[8%] lg:left-[8%]'>
				<img src={star2} alt="star" className='lg:w-5 w-3' />
			</div>
			<div className="lg:w-1/2 w-full ">
				<div className='text-center'>
					<p className='text-[32px] font-bold text-white'>Frequently Ask</p>
					<p className='text-[32px] font-bold text-secondary'>Question</p>
					<p className='text-white font-normal leading-7 py-5'>We got answers to the questions that you might
						want to ask about getlinked Hackathon 1.0
					</p>
				</div>

				<FaqItem
					question="Can I work on a project I started before the hackathon?"
					answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
				/>
				<FaqItem
					question="What happens if I need help during the hackathon?"
					answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
				/>
				<FaqItem
					question="What happens if I don't have an idea for a project?"
					answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
				/>
				<FaqItem
					question="Can I join a team or do I have to come with one?"
					answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
				/>
				<FaqItem
					question="What happens after the hackathon ends"
					answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
				/>
				<FaqItem
					question="Can I work on a project I started before the hackathon?"
					answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
				/>
			</div>

			<div className="lg:w-1/2 w-full relative lg:pt-10 pt-20">
				<img src={faq} alt="faq" className='w-full h-full' />
				<div className='absolute lg:top-[-8%] lg:right-[60%]  top-[7%] right-[55%]'>
					<img src={question} alt="question" />
				</div>
				<div className='absolute lg:top-0 lg:left-[13%] top-[15%] left-[8%]'>
					<img src={question} alt="question" />
				</div>
				<div className='absolute lg:top-0 lg:right-[40%] top-[15%] right-[30%]'>
					<img src={question} alt="question" />
				</div>
				<div className='absolute lg:top-[5%] lg:right-[50%] top-[15%] right-[50%]'>
					<img src={star2} alt="star" className='lg:w-5 w-3' />
				</div>
				<div className='absolute lg:top-[23%] lg:left-[20%] top-[45%] left-[20%]'>
					<img src={star2} alt="star" className='lg:w-5 w-3' />
				</div>
				<div className='absolute lg:bottom-0 lg:right-[20%] bottom-0 right-[20%]'>
					<img src={star4} alt="star" className='lg:w-5 w-3' />
				</div>
				<div className='absolute lg:bottom-[45%] lg:left-[10%] bottom-[40%] left-[15%]'>
					<img src={star3} alt="star" className='lg:w-5 w-3' />
				</div>
			</div>

		</div>
	)
}

export default Faq