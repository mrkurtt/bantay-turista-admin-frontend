import GradientBtn from '@/components/GradientBtn';
import { Button, Card, CardBody, Input } from '@nextui-org/react';
import React from 'react';

const LoginForm = () => {
	return (
		<div className="bg-white w-[500px] p-4 rounded-md">
			<h1 className="text-center text-primary font-bold text-2xl">LOGIN</h1>
			<div className="flex flex-col my-8">
				<Input
					className="mb-4"
					label="Username"
					placeholder="Enter your username"
				/>
				<Input label="Password" placeholder="Enter your password" />
			</div>
			<GradientBtn label="Login" fullWidth={true} />
		</div>
	);
};

export default LoginForm;
