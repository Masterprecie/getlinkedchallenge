import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import registerImg from '../assets/registerImg.png';
import emoji1 from '../assets/emoji1.png';
import emoji2 from '../assets/emoji2.png';
import Button from "../components/Button";
import axios from "axios";
import SuccessModal from "../components/SuccessModal";

const defaultValues = {
	email: "",
	phone_number: "",
	team_name: "",
	group_size: "",
	project_topic: "",
	category: "",
	privacy_poclicy_accepted: false,
};

const Register = () => {
	const baseUrl = "https://backend.getlinked.ai";

	const [formData, setFormData] = useState(defaultValues);
	const [categories, setCategories] = useState([]);
	const [validationErrors, setValidationErrors] = useState(defaultValues);

	const [showSuccessModal, setShowSuccessModal] = useState(false);

	const handleSuccessModalClose = () => {
		setShowSuccessModal(false);
	};

	const handleInputFocus = (fieldName) => {
		// Reset the validation error for the given field when it is focused
		setValidationErrors((prevErrors) => ({
			...prevErrors,
			[fieldName]: "",
		}));
	};

	const handleChange = (e) => {
		const { name, value, type } = e.target;

		if (type === 'checkbox') {
			setFormData((prevData) => ({
				...prevData,
				[name]: !prevData[name],
			}));
		} else {
			setFormData((prevData) => ({
				...prevData,
				[name]: value,
			}));
		}
	};


	const handleSubmit = async (e) => {
		e.preventDefault();

		const errors = {};
		if (formData.team_name.trim() === "") {
			errors.team_name = "Team name is required";
		}
		if (formData.phone_number.trim() === "") {
			errors.phone_number = "Phone number is required";
		}
		if (formData.email.trim() === "") {
			errors.email = "Email is required";
		}
		if (formData.project_topic.trim() === "") {
			errors.project_topic = "Project topic is required";
		}
		if (formData.category === "") {
			errors.category = "Category is required";
		}
		if (formData.group_size === "") {
			errors.group_size = "Group size is required";
		}
		if (!formData.privacy_poclicy_accepted) {
			errors.privacy_poclicy_accepted = "You must accept the privacy policy";
		}

		if (Object.keys(errors).length > 0) {
			setValidationErrors(errors);
			return;
		}

		setValidationErrors({});

		try {
			const modifiedFormData = {
				email: formData.email,
				phone_number: formData.phone_number,
				team_name: formData.team_name,
				group_size: parseInt(formData.group_size),
				project_topic: formData.project_topic,
				category: parseInt(formData.category),
				privacy_poclicy_accepted: formData.privacy_poclicy_accepted,
			};

			const response = await axios.post(`${baseUrl}/hackathon/registration`, modifiedFormData,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);

			console.log('Registration successful', response.data);

			setFormData(defaultValues);
			setShowSuccessModal(true);
		} catch (error) {
			console.error('Error:', error);
		}
	};

	const fetchCategoriesFromAPI = () => {
		axios
			.get(`${baseUrl}/hackathon/categories-list`)
			.then((response) => {
				setCategories(response.data);
			})
			.catch((error) => {
				console.error('Error fetching categories:', error);
			});
	};

	useEffect(() => {
		fetchCategoriesFromAPI();
	}, []);

	return (
		<div className="bg-primary pt-5 pb-10">
			<Navbar />
			<div className="lg:flex justify-between lg:px-32 px-5">
				<div className="lg:w-[40%] pt-16 hidden lg:block">
					<img src={registerImg} alt="register" className="w-full" />
				</div>

				<div className="lg:w-[60%]">
					<div className="w-full lg:bg-[rgba(255,255,255,0.03)] lg:shadow-custom rounded-md lg:p-10">
						<div className="text-center lg:text-left">
							<p className="text-3xl font-bold text-secondary pb-5">Register</p>
							<div className="flex gap-5 lg:justify-start pb-5 items-baseline justify-center">
								<p className="text-white ">Be part of this movement!</p>
								<div className="lg:flex hidden ">
									<img src={emoji1} alt="emoji" />
									<img src={emoji2} alt="emoji" />
								</div>
							</div>
						</div>

						<p className="font-bold text-xl text-white pb-5 text-center lg:text-left">CREATE YOUR ACCOUNT</p>

						<form className="lg:grid grid-cols-2 gap-5 space-y-5 lg:space-y-0">
							<div>
								<label htmlFor="teamName" className="text-white pb-1 block">Team&rsquo;s Name</label>
								<input
									type="text"
									id="teamName"
									name="team_name"
									value={formData.team_name}
									onChange={handleChange}
									onFocus={() => handleInputFocus("team_name")}
									placeholder="Enter the name of your group"
									className="text-white w-full bg-[rgba(255,255,255,0.03)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border-white border outline-0 rounded-md p-2"
								/>
								<div className="text-red-500">{validationErrors.team_name}</div>
							</div>

							<div>
								<label htmlFor="phoneNumber" className="text-white pb-1 block">Phone Number</label>
								<input
									type="number"
									id='number'
									name="phone_number"
									value={formData.phone_number}
									onChange={handleChange}
									onFocus={() => handleInputFocus("phone_number")}
									placeholder="Enter your phone number"
									className="text-white w-full bg-[rgba(255,255,255,0.03)] border-white border outline-0 rounded-md p-2 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
								/>
								<div className="text-red-500">{validationErrors.phone_number}</div>
							</div>

							<div>
								<label htmlFor="email" className="text-white pb-1 block">Email</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									onFocus={() => handleInputFocus("email")}
									placeholder="Enter your email"
									className="text-white w-full bg-[rgba(255,255,255,0.03)] border-white border outline-0 rounded-md p-2 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
								/>
								<div className="text-red-500">{validationErrors.email}</div>
							</div>

							<div>
								<label htmlFor="projectTopic" className="text-white pb-1 block">Project Topic</label>
								<input
									type="text"
									id="projectTopic"
									name="project_topic"
									value={formData.project_topic}
									onChange={handleChange}
									onFocus={() => handleInputFocus("project_topic")}
									placeholder="Enter your phone number"
									className="text-white w-full bg-[rgba(255,255,255,0.03)] border-white border outline-0 rounded-md p-2 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
								/>
								<div className="text-red-500">{validationErrors.project_topic}</div>
							</div>

							<div>
								<label htmlFor="category" className="text-white pb-1 block">Category</label>
								<select
									name="category"
									id="category"
									value={formData.category}
									onChange={handleChange}
									onFocus={() => handleInputFocus("category")}
									className="text-white w-full bg-[rgba(255,255,255,0.03)] border-white border outline-0 rounded-md p-2 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
									<option value="">Select your category</option>
									{categories.map((category) => (
										<option key={category.id} value={category.id} className="bg-black">
											{category.name}
										</option>
									))}
								</select>
								<div className="text-red-500">{validationErrors.category}</div>
							</div>

							<div>
								<label htmlFor="groupSize" className="text-white pb-1 block">Group Size</label>
								<select
									name="group_size"
									id="groupSize"
									value={formData.group_size}
									onChange={handleChange}
									onFocus={() => handleInputFocus("group_size")}
									className="text-white w-full bg-[rgba(255,255,255,0.03)] border-white border outline-0 rounded-md p-2 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
									<option value="">Select</option>
									{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((size) => (
										<option key={size} value={size} className="bg-black">
											{size}
										</option>
									))}
								</select>
								<div className="text-red-500">{validationErrors.group_size}</div>
							</div>
							<p className="col-span-2 pb-0 mb-0 text-secondary">Please review your registration details before submitting</p>

							<div className="col-span-2 flex gap-5 text-white">
								<input
									type="checkbox"
									name="privacy_poclicy_accepted"
									onChange={handleChange}
									onFocus={() => handleInputFocus("privacy_poclicy_accepted")}
								/>
								<p>I agreed with the event terms and conditions and privacy policy</p>
								<div className="text-red-500">{validationErrors.privacy_poclicy_accepted}</div>
							</div>

							<div className="col-span-2 text-center w-full">
								<Button text='Register' onClick={handleSubmit} width='100%' />
							</div>
						</form>
					</div>
				</div>
			</div>
			{/* Success Modal */}
			{showSuccessModal && (
				<SuccessModal onCLose={handleSuccessModalClose} />
			)}
		</div>

	);
};

export default Register;
