'use client';

import FormContainer from '@/components/Container/FormContainer';
import Container from '@/components/Container/LayoutContainer';
import GradientBtn from '@/components/Button/GradientBtn';
import PasswordInput from '@/components/Input/PasswordInput';
import FormStepper from '@/components/Stepper/FormStepper';
import React, { useEffect, useState } from 'react';
import PlainBtn from '@/components/Button/PlainBtn';
import TextInput from '@/components/Input/TextInput';
import CustomDatePicker from '@/components/Dropdown/CustomDatePicker';
import Link from 'next/link';
import { useAuthStore } from '@/stores/useAuthStore';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const Step3 = () => {
	const {
		establishmentRegData,
		uploadToCloudinary,
		submitSignup,
		submitEstablishmentRegistration,
		establishmentRegLoading,
	} = useAuthStore((state) => state);

	const router = useRouter();

	const prevStep = '/register/establishment/step-2';

	const steps = [
		{
			stepLabel: 'Step 1',
			stepDescription: 'Establishment Info',
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

	const handleSubmit = async () => {
		if (
			establishmentRegData.password !== establishmentRegData.confirmPassword
		) {
			toast.error('Passwords do not match');
		} else {
			const photo_url = await uploadToCloudinary(
				establishmentRegData.imageFile!
			);

			const signupResponse = await submitSignup({
				username: establishmentRegData.username,
				password: establishmentRegData.password,
				role: 'establishment',
			});

			const createEstablishmentResponse = await submitEstablishmentRegistration(
				{
					establishment_name: establishmentRegData.establishmentName,
					establishment_type: establishmentRegData.establishmentType,
					city_municipality: establishmentRegData.cityMunicipality,
					barangay: establishmentRegData.barangay,
					complete_address: establishmentRegData.completeAddress,
					contact_number: establishmentRegData.contactNumber,
					email_address: establishmentRegData.emailAddress,
					photo_url: photo_url,
					user_id: signupResponse.userId,
				}
			);

			if (createEstablishmentResponse.success) {
				router.push('/');
				toast.success('Please login.');
			}
		}
	};

	return (
		<Container>
			<div className="mb-4">
				<h1 className="font-bold text-xl">Create an Account</h1>
				<p>Please check if all necessary information are correct.</p>
			</div>
			<FormContainer>
				<FormStepper steps={steps} currentStepIndex={2} />

				{/* <URLBasedImage imageUrl="https://i.pinimg.com/736x/73/f4/b4/73f4b44ed39cd152627199ccc31c0af1.jpg" /> */}
				<div className="flex justify-center ">
					<img
						src={establishmentRegData.image}
						alt="profile"
						className="w-48"
					/>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">BASIC INFORMATION</p>
					<div className="grid grid-cols-1  lg:grid-cols-2 gap-2">
						<TextInput
							label="Establishment Name"
							name="establishmentName"
							isReadOnly
							value={establishmentRegData.establishmentName}
						/>
						<TextInput
							label="Establishment Type"
							name="establishmentType"
							isReadOnly
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
							isReadOnly
							value={establishmentRegData.barangay}
						/>

						<TextInput
							label="Municipality"
							name="cityMunicipality"
							isReadOnly
							value={establishmentRegData.cityMunicipality}
						/>
					</div>
					<div className="grid grid-cols-1 mt-2">
						<TextInput
							label="Complete Address"
							name="completeAddress"
							isReadOnly
							value={establishmentRegData.completeAddress}
						/>
					</div>
				</div>
				<div className="my-8 w-full">
					<p className="font-semibold mb-2">CONTACT INFORMATION</p>
					<TextInput
						label="Contact Number"
						name="contactNumber"
						isReadOnly
						value={establishmentRegData.contactNumber}
					/>
				</div>

				<div className="my-8">
					<p className="font-semibold mb-2">ACCOUNT DETAILS</p>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
						<TextInput
							label="Username"
							name="username"
							isReadOnly
							value={establishmentRegData.username}
						/>
						<TextInput
							type="email"
							label="Email Address"
							name="emailAddress"
							isReadOnly
							value={establishmentRegData.emailAddress}
						/>
						<PasswordInput
							label="Password"
							placeholder="Enter your password"
							name="password"
							isReadOnly
							value={establishmentRegData.password}
						/>
						<PasswordInput
							label="Confirm Password"
							placeholder="Re-type your password"
							name="confirmPassword"
							isReadOnly
							value={establishmentRegData.confirmPassword}
						/>
					</div>
				</div>

				<div className="w-full flex justify-between">
					<PlainBtn as={Link} href={prevStep} label="Back" fullWidth={false} />
					<GradientBtn
						label="Submit"
						isLoading={establishmentRegLoading}
						fullWidth={false}
						onClickHandler={handleSubmit}
					/>
				</div>
			</FormContainer>
		</Container>
	);
};

export default Step3;
