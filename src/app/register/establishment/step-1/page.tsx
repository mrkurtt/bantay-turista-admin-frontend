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
	const { establishmentRegData, updateERegData } = useAuthStore(
		(state) => state
	);

	const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		updateERegData(name, value);
	};

	const nextStep = '/register/establishment/step-2';

	const steps = [
		{
			stepLabel: 'Step 1',
			stepDescription: 'Establishment Info',
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
		if (
			establishmentRegData.password !== establishmentRegData.confirmPassword
		) {
			setMatch(false);
		} else {
			setMatch(true);
		}
	};

	useEffect(() => {
		checkPassword();
		console.log(match);
	}, [establishmentRegData.confirmPassword]);

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
							label="Establishment Name"
							name="establishmentName"
							onChange={handleFormChange}
							value={establishmentRegData.establishmentName}
						/>
						<TextInput
							label="Establishment Type"
							name="establishmentType"
							onChange={handleFormChange}
							value={establishmentRegData.establishmentType}
						/>
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">LOCATION</p>
					<div className="grid grid-cols-1  lg:grid-cols-2 gap-2">
						<TextInput
							label="Barangay"
							name="barangay"
							onChange={handleFormChange}
							value={establishmentRegData.barangay}
						/>

						<TextInput
							label="Municipality"
							name="cityMunicipality"
							onChange={handleFormChange}
							value={establishmentRegData.cityMunicipality}
						/>
					</div>
					<div className="grid grid-cols-1 mt-2">
						<TextInput
							label="Complete Address"
							name="completeAddress"
							onChange={handleFormChange}
							value={establishmentRegData.completeAddress}
						/>
					</div>
				</div>
				<div className="my-8 w-full">
					<p className="font-semibold mb-2">CONTACT INFORMATION</p>
					<TextInput
						label="Contact Number"
						name="contactNumber"
						onChange={handleFormChange}
						value={establishmentRegData.contactNumber}
					/>
				</div>

				<div className="my-8">
					<p className="font-semibold mb-2">ACCOUNT DETAILS</p>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
						<TextInput
							label="Username"
							name="username"
							onChange={handleFormChange}
							value={establishmentRegData.username}
						/>
						<TextInput
							type="email"
							label="Email Address"
							name="emailAddress"
							onChange={handleFormChange}
							value={establishmentRegData.emailAddress}
						/>
						<PasswordInput
							label="Password"
							placeholder="Enter your password"
							name="password"
							onChange={handleFormChange}
							value={establishmentRegData.password}
						/>
						<PasswordInput
							label="Confirm Password"
							placeholder="Re-type your password"
							name="confirmPassword"
							onChange={handleFormChange}
							value={establishmentRegData.confirmPassword}
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
