import Navbar from "../components/Navbar"
import registerImg from '../assets/registerImg.png'
import emoji1 from '../assets/emoji1.png'
import emoji2 from '../assets/emoji2.png'
import { useEffect, useState } from "react"
import Button from "../components/Button"
import axios from "axios"


const defaultValues = {
	email: '',
	phone_number: '',
	team_name: '',
	group_size: '',
	project_topic: '',
	category: '',
	privacy_poclicy_accepted: false,
}
const Register = () => {

	const baseUrl = "https://backend.getlinked.ai"

	const [formData, setFormData] = useState(defaultValues);
	const [categories, setCategories] = useState([]);


	const [formErrors, setFormErrors] = useState({});

	const handleChange = (e) => {
		const { name, value, type } = e.target;

		// Handles the checkbox separately to toggle its value
		if (type === 'checkbox') {
			setFormData((prevData) => ({
				...prevData,
				[name]: !prevData[name], // Toggle the value
			}));
		} else {
			// For other input types (text, number, etc.), set their values as usual
			setFormData((prevData) => ({
				...prevData,
				[name]: value,
			}));
		}
	};


	const handleSubmit = async (e) => {
		e.preventDefault();
		const errors = validateForm(formData);

		if (Object.keys(errors).length === 0) {
			try {
				const response = await axios.post(`${baseUrl}/hackathon/registration`, formData);
				if (response.status === 201) {
					console.log('Registration successful');

					const userData = response.data;

					console.log('User Data:', userData);
					setFormData(defaultValues);
				} else {
					console.error('Unexpected response:', response.status);
				}
			} catch (error) {
				console.error('Error:', error);
			}
		} else {
			setFormErrors(errors);
		}
	};

	const validateForm = (data) => {
		const errors = {};
		if (!data.team_name || !data.team_name.trim()) {
			errors.team_name = 'Team name is required.';
		}
		if (!data.phone_number || !data.phone_number.trim()) {
			errors.phone_number = 'Phone number is required.';
		}
		if (!data.email || !data.email.trim()) {
			errors.email = 'Email is required.';
		} else if (!isValidEmail(data.email)) {
			errors.email = 'Invalid email format.';
		}
		if (!data.project_topic || !data.project_topic.trim()) {
			errors.project_topic = 'Project topic is required.';
		}
		if (!data.category) {
			errors.category = 'Category is required.';
		}
		if (!data.group_size) {
			errors.group_size = 'Group size is required.';
		}
		if (!data.privacy_policy_accepted) {
			errors.privacy_policy_accepted =
				'You must accept the privacy policy to register.';
		}
		return errors;
	};


	const isValidEmail = (email) => {
		const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		return emailPattern.test(email);
	};


	const fetchCategoriesFromAPI = () => {

		axios
			.get(`${baseUrl}/hackathon/categories-list`)
			.then((response) => {
				// Assuming your API response returns an array of category objects
				setCategories(response.data);
			})
			.catch((error) => {
				console.error('Error fetching categories:', error);
			});
	};

	useEffect(() => {
		// Fetch categories from your API
		fetchCategoriesFromAPI();
	}, []);

	return (
		<div className="bg-primary pt-5 ">
			<Navbar />
			<div className="lg:flex justify-between">
				<div className="lg:w-[40%]">
					<img src={registerImg} alt="register" className=' w-full' />
				</div>

				<div className="lg:w-[60%]">
					<div className="w-full lg:bg-[rgba(255,255,255,0.03)] lg:shadow-custom rounded-md lg:p-16  ">
						<p className="text-3xl font-bold text-secondary pb-10">Register</p>
						<div className="flex gap-5 justify-start pb-5 items-baseline">
							<p className="text-white ">Be part of this movement!</p>
							<div className="flex ">
								<img src={emoji1} alt="emoji" />
								<img src={emoji2} alt="emoji" />
							</div>
						</div>

						<p className="font-bold text-2xl text-white pb-5" >CREATE YOUR ACCOUNT</p>

						<form className="grid grid-cols-2 gap-10">
							<div>
								<label htmlFor="teamName " className="text-white pb-2 block">Team&rsquo;s Name</label>
								<input
									type="text"
									id="teamName"
									name="team_name"
									value={formData.team_name}
									onChange={handleChange}
									placeholder="Enter the name of your group"
									className="text-white w-full  bg-[rgba(255,255,255,0.03)] border-white border outline-0 rounded-md p-3"
								/>
								{formErrors.team_name && (
									<span className="text-red-500">{formErrors.team_name}</span>
								)}
							</div>

							<div>
								<label htmlFor="phoneNumber " className="text-white pb-2 block">Phone Number</label>
								<input
									type="number"
									id='number'
									name="phone_number"
									value={formData.phone_number}
									onChange={handleChange}
									placeholder="Enter your phone number"
									className="text-white w-full  bg-[rgba(255,255,255,0.03)] border-white border outline-0 rounded-md p-3"
								/>
								{formErrors.phone_number && (
									<span className="text-red-500">{formErrors.phone_number}</span>
								)}
							</div>

							<div>
								<label htmlFor="email " className="text-white pb-2 block">Email</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									placeholder="Enter your email"
									className="text-white w-full  bg-[rgba(255,255,255,0.03)] border-white border outline-0 rounded-md p-3"
								/>
								{formErrors.email && (
									<span className="text-red-500">{formErrors.email}</span>
								)}
							</div>

							<div>
								<label htmlFor="projectTopic " className="text-white pb-2 block">Project Topic</label>
								<input
									type="text"
									id="projectTopic"
									name="project_topic"
									value={formData.project_topic}
									onChange={handleChange}
									placeholder="Enter your phone number"
									className="text-white w-full  bg-[rgba(255,255,255,0.03)] border-white border outline-0 rounded-md p-3"
								/>
								{formErrors.project_topic && (
									<span className="text-red-500">{formErrors.project_topic}</span>
								)}
							</div>

							<div>
								<label htmlFor="category " className="text-white pb-2 block">Category</label>
								<select
									name="category"
									id="category"
									value={formData.category}
									onChange={handleChange}
									className="text-white w-full  bg-[rgba(255,255,255,0.03)] border-white border outline-0 rounded-md p-3">
									<option value="">Select your category</option>
									{categories.map((category) => (
										<option key={category.id} value={category.id} className="bg-black">
											{category.name}
										</option>
									))}
								</select>
								{formErrors.category && (
									<span className="text-red-500">{formErrors.category}</span>
								)}
							</div>

							<div>
								<label htmlFor="groupSize " className="text-white pb-2 block">Group Size</label>
								<select
									name="group_size"
									id="groupSize"
									value={formData.group_size}
									onChange={handleChange}
									className="text-white w-full  bg-[rgba(255,255,255,0.03)] border-white border outline-0 rounded-md p-3">
									<option value="">Select</option>
									{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((size) => (
										<option key={size} value={size} className="bg-black">
											{size}
										</option>
									))}
								</select>
								{formErrors.group_size && (
									<span className="text-red-500">{formErrors.group_size}</span>
								)}
							</div>
							<p className="col-span-2 pb-0 mb-0 text-secondary">Please review your registration details before submitting</p>

							<div className="col-span-2 flex gap-5 text-white">
								<input type="checkbox"
									name="privacy_poclicy_accepted"
									onChange={handleChange}
								/>
								<p>I agreed with the event terms and conditions  and privacy policy</p>
							</div>

							<div className="col-span-2 text-center">
								<Button text='Register' onClick={handleSubmit} />
							</div>

						</form>

					</div>

				</div>

			</div>

		</div>

	)
}

export default Register