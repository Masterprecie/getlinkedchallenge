import { useState } from "react"
import Button from "../components/Button"
import Navbar from "../components/Navbar"
import { BackIcon, FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "../utils/Icons"
import axios from 'axios'
import { Link } from "react-router-dom"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactUs = () => {

	const [first_name, setFirst_name] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [submitStatus, setSubmitStatus] = useState(null); // State to track form submission status

	const [nameError, setNameError] = useState('');
	const [emailError, setEmailError] = useState('');
	const [messageError, setMessageError] = useState('');

	const baseUrl = "https://backend.getlinked.ai"
	const handleSubmit = async (e) => {
		e.preventDefault();

		// Validate form inputs
		setNameError('');
		setEmailError('');
		setMessageError('');

		// Validate form inputs
		let isValid = true;

		if (!first_name) {
			setNameError('Name is required');
			isValid = false;
		}

		if (!email) {
			setEmailError('Email is required');
			isValid = false;
		}

		if (!message) {
			setMessageError('Message is required');
			isValid = false;
		}

		if (!isValid) {
			// If any field is missing, prevent form submission
			return;
		}

		const formData = {
			first_name,
			email,
			message,
		};

		try {
			const response = await axios.post(
				`${baseUrl}/hackathon/contact-form`,
				formData,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);

			if (response.status === 201) {
				console.log('Server response:', response.data);
				setSubmitStatus("success");
				setFirst_name('');
				setEmail('');
				setMessage('');

			} else {
				console.error('Error:', response.statusText);
			}
		} catch (error) {
			console.error('Error:', error);
		}
	};

	const { ref, inView } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});

	const containerVariants = {
		hidden: {
			opacity: 0,
			y: 50,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 1 },
		},
	};

	return (
		<motion.div
			ref={ref}
			variants={containerVariants}
			initial="hidden"
			animate={inView ? 'visible' : 'hidden'}
			className="bg-primary pt-5 "
		>
			<Navbar />
			<div className="lg:flex lg:px-32 px-5 justify-between lg:py-28 pb-10">
				<div className="lg:w-[20%] w-full text-white space-y-6 lg:block hidden">
					<p className="text-secondary font-semibold lg:text-[32px]">Get in touch</p>
					<p>Contact
						Information</p>

					<p>27,Alara Street
						Yaba 100012
						Lagos State</p>
					<p>Call Us : 07067981819</p>
					<p>we are open from Monday-Friday
						08:00am - 05:00pm</p>


					<p className="text-secondary font-semibold ">Share on</p>
					<div className="flex items-center gap-5">
						<InstagramIcon />
						<TwitterIcon />
						<FacebookIcon />
						<LinkedInIcon />
					</div>
				</div>

				<div className="lg:w-[60%] w-full">
					<div className="pb-5 lg:hidden block">
						<Link to='/'>
							<BackIcon />
						</Link>
					</div>
					<div className="w-full lg:bg-[rgba(255,255,255,0.03)] lg:shadow-custom rounded-md lg:p-16  ">
						<div className="text-secondary font-semibold text-xl pb-4">
							<p>Questions or need assistance?</p>
							<p>Let us know  about it!</p>
						</div>
						<form >
							<input
								type="text"
								id="name"
								name="name"
								value={first_name}
								onChange={(e) => {
									setFirst_name(e.target.value);
									setNameError('');
								}}
								placeholder="First Name"
								className="text-white w-full placeholder:text-white bg-[rgba(255,255,255,0.03)] border-white border outline-0 rounded-md p-3" />
							<span className="text-red-500">{nameError}</span>

							<input
								type="email"
								id="mail"
								name="mail"
								value={email}
								onChange={(e) => {
									setEmail(e.target.value)
									setEmailError('');
								}}
								placeholder="Mail"
								className=" text-white w-full placeholder:text-white bg-[rgba(255,255,255,0.03)] border-white border outline-0 rounded-md p-3 my-7" />
							<span className="text-red-500">{emailError}</span>
							<textarea
								value={message}
								onChange={(e) => {
									setMessage(e.target.value)
									setMessageError('')
								}}
								name="message"
								id="message" cols="30" rows="10" placeholder="Message" className="text-white w-full placeholder:text-white bg-[rgba(255,255,255,0.03)] border-white border outline-0 rounded-md p-3 mb-7"></textarea>
							<span className="text-red-500">{messageError}</span>
							<div className="text-center">
								<Button text='Submit' onClick={handleSubmit} />
							</div>

							{submitStatus === "success" && (
								<p className="text-green-500 text-center pt-3">Form submitted successfully!</p>
							)}
							{submitStatus === "error" && (
								<p className="text-red-500 text-center pt-3">An error occurred while submitting the form.</p>
							)}

						</form>

						<div className="lg:hidden block pt-5 text-center">
							<p className="text-secondary font-semibold pb-3 ">Share on</p>
							<div className="flex items-center justify-center gap-5">
								<InstagramIcon />
								<TwitterIcon />
								<FacebookIcon />
								<LinkedInIcon />
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default ContactUs