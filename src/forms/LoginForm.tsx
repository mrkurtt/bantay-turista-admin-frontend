'use client';

import GradientBtn from '@/components/Button/GradientBtn';
import { Input } from '@nextui-org/react';
import React from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const LoginForm = () => {
	const [isVisible, setIsVisible] = React.useState(false);
	const toggleVisibility = () => setIsVisible(!isVisible);

	return (
		<div className="w-full bg-white p-4 rounded-md">
			<h1 className="text-center text-2xl mb-4 font-semibold text-primary">
				<span className="text-orange-600">Bantay</span> Turista
			</h1>
			<h1 className="text-center text-primary font-bold text-2xl">LOGIN</h1>
			<div className="flex flex-col my-8">
				<Input
					className="mb-4"
					label="Username"
					variant="bordered"
					// placeholder="Enter your username"
				/>
				{/* <Input label="Password" placeholder="Enter your password" /> */}
				<Input
					label="Password"
					variant="bordered"
					// placeholder="Enter your password"
					endContent={
						<button
							className="focus:outline-none"
							type="button"
							onClick={toggleVisibility}
							aria-label="toggle password visibility"
						>
							{isVisible ? (
								<IoMdEye className="text-primary" size={25} />
							) : (
								<IoMdEyeOff className="text-primary" size={25} />
							)}
						</button>
					}
					type={isVisible ? 'text' : 'password'}
				/>
			</div>
			<GradientBtn label="Login" fullWidth={true} />
		</div>
	);
};

export default LoginForm;
