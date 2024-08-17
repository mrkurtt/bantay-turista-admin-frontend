'use client';

import FormContainer from '@/components/Container/FormContainer';
import Container from '@/components/Container/LayoutContainer';
import GradientBtn from '@/components/Button/GradientBtn';
import PasswordInput from '@/components/Input/PasswordInput';
import FormStepper from '@/components/Stepper/FormStepper';
import { Button, Input, Link } from '@nextui-org/react';
import React, { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import PlainBtn from '@/components/Button/PlainBtn';

const Step3 = () => {
	const [isVisible, setIsVisible] = useState(false);
	const toggleVisibility = () => setIsVisible(!isVisible);
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');

	const handlePasswordChange = (newPassword: string) => {
		setPassword(newPassword);
	};

	const handleConfirmPasswordChange = (confirmPassword: string) => {
		setConfirmPassword(confirmPassword);
	};

	const prevStep = '/register/tourist/step-2';

	const steps = [
		{
			stepLabel: 'Step 1',
			stepDescription: 'Personal Info',
			completed: true,
		},
		{
			stepLabel: 'Step 2',
			stepDescription: 'Upload Photo',
			completed: true,
		},
		{
			stepLabel: 'Step 3',
			stepDescription: 'Confirmation',
			completed: false,
		},
	];

	return (
		<Container>
			<div className="mb-4">
				<h1 className="font-bold text-xl">Create an Account</h1>
				<p>Please provide proper information below. </p>
			</div>
			<FormContainer>
				<FormStepper steps={steps} currentStepIndex={2} />
				<p>Please verify and confirm all the information you have provided.</p>
				<div className="my-8">
					<p className="font-semibold mb-2">BASIC INFORMATION</p>
					<div className="grid grid-cols-1  lg:grid-cols-2 gap-2">
						<Input radius="sm" variant="bordered" label="First Name" />
						<Input radius="sm" variant="bordered" label="Last Name" />
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">
						DATE OF BIRTH
						<span className="text-gray-600 font-light text-sm">MM/DD/YYYY</span>
					</p>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
						<Input radius="sm" variant="bordered" label="Month" />
						<Input radius="sm" variant="bordered" label="Day" />
						<Input radius="sm" variant="bordered" label="Year" />
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">PERMANENT ADDRESS</p>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
						<Input radius="sm" variant="bordered" label="Country" />
						<Input radius="sm" variant="bordered" label="Province" />
						<Input radius="sm" variant="bordered" label="City/Municipality" />
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">ACCOUNT DETAILS</p>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
						<Input radius="sm" variant="bordered" label="Username" />
						<Input radius="sm" variant="bordered" label="Email Address" />
						<PasswordInput
							label="Password"
							placeholder="Enter your password"
							value={password}
							onChange={handlePasswordChange}
						/>
						<PasswordInput
							label="Confirm Password"
							placeholder="Re-type your password"
							value={confirmPassword}
							onChange={handleConfirmPasswordChange}
						/>
					</div>
				</div>

				<div className="w-full flex justify-between">
					<Link href={prevStep}>
						<PlainBtn label="Back" />
					</Link>
					<GradientBtn label="Submit" fullWidth={false} />
				</div>
			</FormContainer>
		</Container>
	);
};

export default Step3;
