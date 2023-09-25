import Button from "./Button"
import heroImg from "../assets/heroImg.png"
import heroBall from "../assets/heroBall.png"
import star from "../assets/star.png"
import bulb from "../assets/bulb.png"
import chain from "../assets/chain.png"
import purple from "../assets/purple.png"
import purple2 from "../assets/purple2.png"
import bomb from "../assets/bomb.png"
import { HeroIcon, HeroIconMobile } from "../utils/Icons"
import { Link } from "react-router-dom"
const Hero = () => {
	return (
		<div className="bg-primary z-20 lg:pl-32 lg:px-0 px-10 h-full relative">
			{/* bg-shadow */}
			<div className="absolute lg:top-[-35%] lg:left-[2%] top-[-5%]  left-0">
				<img src={purple} alt="bg" className='lg:w-[80%] w-full' />
			</div>

			<div className="lg:text-right text-center lg:pr-10 relative py-6">
				<p className="text-white italic font-bold lg:text-[36px] text-sm">Igniting a Revolution in HR Innovation</p>
				<div className="lg:block hidden absolute lg:bottom-[8%] lg:right-[3%] bottom-[10%] right-5">
					<HeroIcon />
				</div>
				<div className="block lg:hidden absolute lg:bottom-[15%] lg:right-[3%] bottom-[23%] right-3">
					<HeroIconMobile />
				</div>

				<div className="absolute lg:left-[3%] lg:bottom-3 left-[20%] bottom-[-45%]">
					<img src={star} alt="star" className='lg:w-full w-3' />
				</div>
			</div>
			<div className="lg:flex items-center hidden absolute right-[40%] top-[38%] z-20">
				<div>
					<img src={chain} alt="chain" />
				</div>

				<div>
					<img src={bomb} alt="chain" />
				</div>
			</div>

			<div className=" lg:flex relative">
				<div className="relative lg:w-1/2 w-full text-center lg:text-left text-white pt-10 lg:pt-20">
					<div className="absolute lg:right-[12%] lg:top-[5%] right-[16%] top-[6%] ">
						<img src={bulb} alt="bulb" className='lg:w-full w-5' />
					</div>
					<p className="font-bold lg:text-7xl text-[30px] ">getlinked Tech</p>
					<div className='flex lg:block justify-center'>
						<div>
							<p className="font-bold lg:text-7xl text-[30px]" >Hackathon <span className="text-secondary">1.0</span></p>
						</div>
						<div className="flex items-center lg:hidden">
							<div>
								<img src={chain} alt="chain" className='w-8' />
							</div>

							<div>
								<img src={bomb} alt="chain" className='w-7' />
							</div>
						</div>
					</div>

					<p className="text-xl my-5 leading-9">Participate in getlinked tech Hackathon 2023 stand
						a chance to win a Big prize
					</p>

					<div>
						<Link to='/register'>
							<Button text="Register" />
						</Link>
					</div>

					<div className="text-white justify-center lg:justify-start flex gap-5 text-6xl font-mono pt-8">
						<p>00<sub className="text-sm">H</sub>  </p>
						<p>00<sub className="text-sm">M</sub>  </p>
						<p>00<sub className="text-sm">S</sub>  </p>
					</div>
				</div>

				<div className="lg:w-1/2 w-full pt-5 lg:pt-0 relative">
					<div className="absolute  opacity-80 z-20 right-[20%]">
						<img src={heroBall} alt="" />
					</div>
					<div className="z-10">
						<img src={heroImg} alt="heroImg" className="w-full" />
					</div>
				</div>
				<div className="absolute hidden md:block top-[-30%] left-[50%]">
					<img src={purple2} alt="icon" />
				</div>
			</div>

		</div>
	)
}

export default Hero