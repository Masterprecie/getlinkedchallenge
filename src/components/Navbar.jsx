import { useState } from 'react';
import { CloseIcon, MenuIcon } from '../utils/Icons';
import { navLinks } from '../utils/data';
import { Link } from "react-router-dom";
import Button from './Button';
import logo from '../assets/logo.png'
const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="bg-primary py-5 lg:px-32 w-full px-5 relative z-30">
			<div className=" flex justify-between items-center">
				<div className="flex items-center">
					<img src={logo} alt="logo" />
				</div>
				{/* Desktop menu */}
				<ul className=" lg:flex hidden items-center gap-5">
					{navLinks.map((link) => {
						const { id, url, name } = link
						return (
							<li key={id} className="text-white">
								<Link to={url}>
									{name}
								</Link>
							</li>
						)
					})}
				</ul>
				<div className='lg:flex hidden'>
					<Link to='/register'>
						<Button text="Register" />
					</Link>
				</div>

				{/* Mobile menu button */}
				<div className="lg:hidden">
					<button
						onClick={toggleMenu}
						className="text-white hover:text-gray-300 focus:outline-none"
					>
						{isMenuOpen ? (
							<CloseIcon />
						) : (
							<MenuIcon />
						)}
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			<div
				className={`${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
					} lg:hidden fixed top-0 left-0 h-[100vh] w-3/4 bg-primary shadow-lg rounded-lg transform transition-transform ease-in-out duration-300 z-50`}
			>
				<div className="p-4 z-20 relative">
					{/* Close icon inside the mobile menu */}
					<button
						onClick={toggleMenu}
						className="text-white hover:text-gray-300 focus:outline-none absolute top-4 right-4"
					>
						<div className='border rounded-full border-secondary'>
							<CloseIcon />
						</div>
					</button>

					<ul className="p-4 mt-12 space-y-5 ">
						{navLinks.map((link) => {
							const { id, url, name } = link
							return (
								<li key={id} className="text-white">
									<Link to={url}>
										{name}
									</Link>
								</li>
							)
						})}
					</ul>
					<div className="flex lg:hidden">
						<Link to='/register'>
							<Button text="Register" />
						</Link>
					</div>
				</div>
			</div>


		</nav >
	);
};

export default Navbar;
