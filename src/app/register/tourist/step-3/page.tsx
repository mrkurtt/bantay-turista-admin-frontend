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
import TextInput from '@/components/Input/TextInput';
import Image from 'next/image';
import Mikha from '../../../../../public/mikha.jpg';
import CustomDatePicker from '@/components/Dropdown/CustomDatePicker';
import URLBasedImage from '@/components/Image/CustomImage';

const Step3 = () => {
	const [isVisible, setIsVisible] = useState(false);
	const toggleVisibility = () => setIsVisible(!isVisible);
	const [password, setPassword] = useState<string>('sdgdfgdfg');
	const [confirmPassword, setConfirmPassword] = useState<string>('fghdghdf');

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
				<p>Please check if all necessary information are correct.</p>
			</div>
			<FormContainer>
				<FormStepper steps={steps} currentStepIndex={2} />

				<URLBasedImage imageUrl="https://i.pinimg.com/736x/73/f4/b4/73f4b44ed39cd152627199ccc31c0af1.jpg" />

				<div className="my-8">
					<p className="font-semibold mb-2">BASIC INFORMATION</p>
					<div className="grid grid-cols-1  lg:grid-cols-2 gap-2">
						<TextInput
							value="Mikhaela Jimenea"
							isReadOnly={true}
							label="First Name"
						/>
						<TextInput value="Lim" isReadOnly={true} label="Last Name" />
						<TextInput isReadOnly value="Female" label="Gender" />
						<TextInput isReadOnly value="Filipino" label="Nationality" />
					</div>
				</div>
				<div className="my-8 w-full">
					<p className="font-semibold mb-2">DATE OF BIRTH</p>
					<CustomDatePicker label="Birth Date" isReadOnly />
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">PERMANENT ADDRESS</p>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
						<TextInput value="Philippines" isReadOnly={true} label="Country" />
						<TextInput value="Manila" isReadOnly={true} label="Province" />
						<TextInput
							value="San Juan"
							isReadOnly={true}
							label="City/Municipality"
						/>
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">ACCOUNT DETAILS</p>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
						<TextInput
							value="mikhalim1108"
							isReadOnly={true}
							label="Username"
						/>
						<TextInput
							value="mikha.lim@gmail.com"
							isReadOnly={true}
							label="Email Address"
						/>
						<PasswordInput
							label="Password"
							isReadOnly={true}
							placeholder="Enter your password"
							value={password}
							onChange={handlePasswordChange}
						/>
						<PasswordInput
							label="Confirm Password"
							isReadOnly={true}
							placeholder="Re-type your password"
							value={confirmPassword}
							onChange={handleConfirmPasswordChange}
						/>
					</div>
				</div>

				<div className="w-full flex justify-between">
					<Link href={prevStep}>
						<PlainBtn label="Back" fullWidth={false} />
					</Link>
					<GradientBtn label="Submit" fullWidth={false} />
				</div>
			</FormContainer>
		</Container>
	);
};

export default Step3;
