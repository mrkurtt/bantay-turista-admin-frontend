'use client';

import GradientBtn from '@/components/Button/GradientBtn';
import { useAuthStore } from '@/stores/useAuthStore';
import { Input } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const LoginForm = () => {
	const [isVisible, setIsVisible] = React.useState(false);
	const toggleVisibility = () => setIsVisible(!isVisible);

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const router = useRouter();

	const { loginLoading, submitLogin } = useAuthStore((state) => state);

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
					onChange={(e) => setUsername(e.target.value)}
				/>
				<Input
					label="Password"
					variant="bordered"
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
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<GradientBtn
				label="Login"
				fullWidth={true}
				isLoading={loginLoading}
				onClickHandler={async () =>
					await submitLogin({ username, password }).then((res) => {
						console.log(res);
						if (res.success) {
							router.push(`/${res.role}`);
						}
					})
				}
			/>
		</div>
	);
};

export default LoginForm;
