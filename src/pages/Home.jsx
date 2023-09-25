import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Intro from "../components/Intro"
import Rules from "../components/Rules"
import Criteria from "../components/Criteria"
import Faq from "../components/Faq"
import Timeline from "../components/Timeline"
import Price from "../components/Price"
import Partners from "../components/Partners"
import Privacy from "../components/Privacy"
import Footer from "../components/Footer"

const Home = () => {
	return (
		<div className="bg-primary ">
			<Navbar />
			<div className=" border-t border-[rgba(255,255,255,0.18)]" />
			<Hero />
			<div className=" border-t border-[rgba(255,255,255,0.18)]" />
			<Intro />
			<div className=" border-t border-[rgba(255,255,255,0.18)]" />
			<Rules />
			<div className=" border-t border-[rgba(255,255,255,0.18)]" />
			<Criteria />
			<div className=" border-t border-[rgba(255,255,255,0.18)]" />
			<Faq />
			<div className=" border-t border-[rgba(255,255,255,0.18)]" />
			<Timeline />
			<div className=" border-t border-[rgba(255,255,255,0.18)]" />
			<Price />
			<div className=" border-t border-[rgba(255,255,255,0.18)]" />
			<Partners />
			<div className=" border-t border-[rgba(255,255,255,0.18)]" />
			<Privacy />
			<Footer />










		</div>
	)
}

export default Home