'use client';

import FormContainer from '@/components/Container/FormContainer';
import Container from '@/components/Container/LayoutContainer';
import GradientBtn from '@/components/Button/GradientBtn';
import PasswordInput from '@/components/Input/PasswordInput';
import TextInput from '@/components/Input/TextInput';
import FormStepper from '@/components/Stepper/FormStepper';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useAuthStore } from '@/stores/useAuthStore';
import CustomDatePicker from '@/components/Dropdown/CustomDatePicker';

const Step1 = () => {
	const { touristRegData, updateTRegData } = useAuthStore((state) => state);

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
							name="first_name"
							onChange={handleFormChange}
							value={touristRegData.first_name}
						/>
						<TextInput
							label="Last Name"
							name="last_name"
							onChange={handleFormChange}
							value={touristRegData.last_name}
						/>
						<div className="w-full">
							<select
								title="selecttype"
								value={touristRegData.gender}
								onChange={(e) => updateTRegData('gender', e.target.value)}
								id="options"
								className="w-full p-2 py-4 border-2 border-gray-200 rounded-xl text-sm"
							>
								<option value={''}>Gender</option>
								{['Male', 'Female', 'Prefer not to say'].map((estype: any) => (
									<option value={estype}>{estype}</option>
								))}
							</select>
						</div>
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
					<input
						className="w-full p-2 py-4 border-2 border-gray-200 rounded-xl text-sm"
						title="birthdate"
						type="date"
						onChange={(e) => updateTRegData('date_of_birth', e.target.value)}
						id="birthday"
						value={touristRegData.date_of_birth}
						name="birthday"
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
							name="state_province"
							onChange={handleFormChange}
							value={touristRegData.state_province}
						/>
						<TextInput
							label="City/Municipality"
							name="city_municipality"
							onChange={handleFormChange}
							value={touristRegData.city_municipality}
						/>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-2">
						<TextInput
							label="Address 1"
							name="address_1"
							onChange={handleFormChange}
							value={touristRegData.address_1}
						/>
						<TextInput
							label="Address 2"
							name="address_2"
							onChange={handleFormChange}
							value={touristRegData.address_2}
						/>
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">ACCOUNT DETAILS</p>

					<div className="grid grid-cols-1 gap-2 mb-2">
						<TextInput
							label="Contact Number"
							name="contact_number"
							onChange={handleFormChange}
							value={touristRegData.contact_number}
						/>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
						<TextInput
							type="email"
							label="Email Address"
							name="email"
							onChange={handleFormChange}
							value={touristRegData.email}
						/>
						<PasswordInput
							label="Password (must be at least 8 characters long)"
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
