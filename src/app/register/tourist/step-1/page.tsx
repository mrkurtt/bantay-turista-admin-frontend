'use client';

import FormContainer from '@/components/Container/FormContainer';
import Container from '@/components/Container/LayoutContainer';
import GradientBtn from '@/components/Button/GradientBtn';
import PasswordInput from '@/components/Input/PasswordInput';
import TextInput from '@/components/Input/TextInput';
import FormStepper from '@/components/Stepper/FormStepper';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import CustomDatePicker from '@/components/Dropdown/CustomDatePicker';
import { useAuthStore } from '@/stores/useAuthStore';
import toast from 'react-hot-toast';

const Step1 = () => {
	const { touristRegData, updateTRegData, updateTBirthdate } = useAuthStore(
		(state) => state
	);

	const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		updateTRegData(name, value);
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

	const [match, setMatch] = useState<boolean>(false);

	const checkPassword = () => {
		if (touristRegData.password !== touristRegData.confirmPassword) {
			setMatch(false);
		} else {
			setMatch(true);
		}
	};

	useEffect(() => {
		checkPassword();
		console.log(match);
	}, [touristRegData.confirmPassword]);

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
						<TextInput
							label="First Name"
							name="firstName"
							onChange={handleFormChange}
							value={touristRegData.firstName}
						/>
						<TextInput
							label="Last Name"
							name="lastName"
							onChange={handleFormChange}
							value={touristRegData.lastName}
						/>
						<TextInput
							label="Gender"
							name="gender"
							onChange={handleFormChange}
							value={touristRegData.gender}
						/>
						<TextInput
							label="Nationality"
							name="nationality"
							onChange={handleFormChange}
							value={touristRegData.nationality}
						/>
					</div>
				</div>
				<div className="my-8 w-full">
					<p className="font-semibold mb-2">DATE OF BIRTH</p>
					<CustomDatePicker
						label="Birth Date"
						name="birthdate"
						dateChangeHandler={updateTBirthdate}
						value={touristRegData.birthdate}
					/>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">PERMANENT ADDRESS</p>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
						<TextInput
							label="Country"
							name="country"
							onChange={handleFormChange}
							value={touristRegData.country}
						/>
						<TextInput
							label="Province"
							name="province"
							onChange={handleFormChange}
							value={touristRegData.province}
						/>
						<TextInput
							label="City/Municipality"
							name="municipality"
							onChange={handleFormChange}
							value={touristRegData.municipality}
						/>
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">ACCOUNT DETAILS</p>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
						<TextInput
							label="Username"
							name="username"
							onChange={handleFormChange}
							value={touristRegData.username}
						/>
						<TextInput
							type="email"
							label="Email Address"
							name="emailAddress"
							onChange={handleFormChange}
							value={touristRegData.emailAddress}
						/>
						<PasswordInput
							label="Password"
							placeholder="Enter your password"
							name="password"
							onChange={handleFormChange}
							value={touristRegData.password}
						/>
						<PasswordInput
							label="Confirm Password"
							placeholder="Re-type your password"
							name="confirmPassword"
							onChange={handleFormChange}
							value={touristRegData.confirmPassword}
						/>
						<p className="text-red-600 text-xs">
							{!match && 'Passwords do not match'}
						</p>
					</div>
				</div>
				<div className="w-full flex justify-end">
					<GradientBtn
						as={Link}
						href={nextStep}
						label="Continue"
						isDisabled={!match}
						fullWidth={false}
					/>
				</div>
			</FormContainer>
		</Container>
	);
};

export default Step1;
