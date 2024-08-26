'use client';

import FormContainer from '@/components/Container/FormContainer';
import Container from '@/components/Container/LayoutContainer';
import GradientBtn from '@/components/Button/GradientBtn';
import PasswordInput from '@/components/Input/PasswordInput';
import TextInput from '@/components/Input/TextInput';
import FormStepper from '@/components/Stepper/FormStepper';
import { Button, Input } from '@nextui-org/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import CustomDatePicker from '@/components/Dropdown/CustomDatePicker';
import { useAuthStore } from '@/stores/useAuthStore';

const Step1 = () => {
	const { t_regData, updateTRegData, updateTBirthdate } = useAuthStore(
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

	useEffect(() => {
		console.log(t_regData);
	}, [t_regData]);

	return (
		<Container>
			<div className="mb-4">
				<h1 className="font-bold text-xl">Create an Account</h1>
				<p>Please provide proper information below. </p>
			</div>
			<FormContainer>
				<FormStepper steps={steps} currentStepIndex={0} />
				{JSON.stringify(t_regData)}
				<div className="my-8">
					<p className="font-semibold mb-2">BASIC INFORMATION</p>
					<div className="grid grid-cols-1  lg:grid-cols-2 gap-2">
						<TextInput
							label="First Name"
							name="t_firstName"
							onChange={handleFormChange}
						/>
						<TextInput
							label="Last Name"
							name="t_lastName"
							onChange={handleFormChange}
						/>
						<TextInput
							label="Gender"
							name="t_gender"
							onChange={handleFormChange}
						/>
						<TextInput
							label="Nationality"
							name="t_nationality"
							onChange={handleFormChange}
						/>
					</div>
				</div>
				<div className="my-8 w-full">
					<p className="font-semibold mb-2">DATE OF BIRTH</p>
					<CustomDatePicker
						label="Birth Date"
						name="t_birthdate"
						dateChangeHandler={updateTBirthdate}
					/>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">PERMANENT ADDRESS</p>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
						<TextInput
							label="Country"
							name="t_country"
							onChange={handleFormChange}
						/>
						<TextInput
							label="Province"
							name="t_province"
							onChange={handleFormChange}
						/>
						<TextInput
							label="City/Municipality"
							name="t_municipality"
							onChange={handleFormChange}
						/>
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">ACCOUNT DETAILS</p>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
						<TextInput
							label="Username"
							name="t_username"
							onChange={handleFormChange}
						/>
						<TextInput
							type="email"
							label="Email Address"
							name="t_emailAddress"
							onChange={handleFormChange}
						/>
						<PasswordInput
							label="Password"
							placeholder="Enter your password"
							name="t_password"
							onChange={handleFormChange}
						/>
						<PasswordInput
							label="Confirm Password"
							placeholder="Re-type your password"
							onChange={handleFormChange}
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
