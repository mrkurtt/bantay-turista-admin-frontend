'use client';

import FormContainer from '@/components/Container/FormContainer';
import Container from '@/components/Container/LayoutContainer';
import GradientBtn from '@/components/Button/GradientBtn';
import PasswordInput from '@/components/Input/PasswordInput';
import TextInput from '@/components/Input/TextInput';
import FormStepper from '@/components/Stepper/FormStepper';
import { Button, Input } from '@nextui-org/react';
import Link from 'next/link';
import React, { useState } from 'react';
import CustomDatePicker from '@/components/Dropdown/CustomDatePicker';

const Step1 = () => {
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');
	const handlePasswordChange = (newPassword: string) => {
		setPassword(newPassword);
	};

	const handleConfirmPasswordChange = (confirmPassword: string) => {
		setConfirmPassword(confirmPassword);
	};

	const nextStep = '/register/tourist/step-2';

	const steps = [
		{
			stepLabel: 'Step 1',
			stepDescription: 'Personal Info',
			completed: false,
		},
		{
			stepLabel: 'Step 2',
			stepDescription: 'Upload Photo',
			completed: false,
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
				<FormStepper steps={steps} currentStepIndex={0} />
				<div className="my-8">
					<p className="font-semibold mb-2">BASIC INFORMATION</p>
					<div className="grid grid-cols-1  lg:grid-cols-2 gap-2">
						<TextInput label="First Name" />
						<TextInput label="Last Name" />
					</div>
				</div>
				<div className="my-8 w-full">
					<p className="font-semibold mb-2">DATE OF BIRTH</p>
					<CustomDatePicker label="Birth Date" />
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">PERMANENT ADDRESS</p>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
						<TextInput label="Country" />
						<TextInput label="Province" />
						<TextInput label="City/Municipality" />
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">ACCOUNT DETAILS</p>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
						<TextInput label="Username" />
						<TextInput type="email" label="Email Address" />
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
				<div className="w-full flex justify-end">
					<Link href={nextStep}>
						<GradientBtn label="Continue" fullWidth={false} />
					</Link>
				</div>
			</FormContainer>
		</Container>
	);
};

export default Step1;
