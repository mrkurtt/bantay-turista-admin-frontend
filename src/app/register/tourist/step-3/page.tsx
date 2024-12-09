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
		touristRegData,
		uploadToCloudinary,
		submitSignup,
		submitTouristRegistration,
		touristRegLoading,
	} = useAuthStore((state) => state);

	const router = useRouter();

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

	const handleSubmit = async () => {
		if (touristRegData.password !== touristRegData.confirmPassword) {
			toast.error('Passwords do not match');
		} else {
			const photo_url = await uploadToCloudinary(touristRegData.imageFile!);

			const signupResponse = await submitSignup({
				email: touristRegData.email,
				password: touristRegData.password,
				user_type: 1,
				role: 'tourist',
			});

			const createTouristResponse = await submitTouristRegistration({
				first_name: touristRegData.first_name,
				last_name: touristRegData.last_name,
				email_address: touristRegData.email,
				gender: touristRegData.gender,
				nationality: touristRegData.nationality,
				date_of_birth: touristRegData.date_of_birth,
				country: touristRegData.country,
				state_province: touristRegData.state_province,
				city_municipality: touristRegData.city_municipality,
				photo_url,
				user_id: signupResponse.userId,
			});

			if (createTouristResponse.success) {
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
					<img src={touristRegData.image} alt="profile" className="w-48" />
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">BASIC INFORMATION</p>
					<div className="grid grid-cols-1  lg:grid-cols-2 gap-2">
						<TextInput
							value={touristRegData.first_name}
							isReadOnly={true}
							label="First Name"
						/>
						<TextInput
							value={touristRegData.last_name}
							isReadOnly={true}
							label="Last Name"
						/>
						<TextInput
							value={touristRegData.gender}
							isReadOnly
							label="Gender"
						/>
						<TextInput
							isReadOnly
							value={touristRegData.nationality}
							label="Nationality"
						/>
					</div>
				</div>
				<div className="my-8 w-full">
					<p className="font-semibold mb-2">DATE OF BIRTH</p>
					<TextInput
						isReadOnly
						label="Birth Date"
						value={touristRegData.date_of_birth}
					/>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">PERMANENT ADDRESS</p>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
						<TextInput
							value={touristRegData.country}
							isReadOnly={true}
							label="Country"
						/>
						<TextInput
							value={touristRegData.state_province}
							isReadOnly={true}
							label="Province"
						/>
						<TextInput
							value={touristRegData.city_municipality}
							isReadOnly={true}
							label="City/Municipality"
						/>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-2">
						<TextInput
							value={touristRegData.address_1}
							isReadOnly={true}
							label="Address 1"
						/>
						<TextInput
							value={touristRegData.address_2}
							isReadOnly={true}
							label="Address 2"
						/>
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">ACCOUNT DETAILS</p>
					<div className="grid grid-cols-1 gap-2 mb-2">
						<TextInput
							value={touristRegData.contact_number}
							isReadOnly={true}
							label="Contact Number"
						/>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
						<TextInput
							value={touristRegData.username}
							isReadOnly={true}
							label="Username"
						/>
						<TextInput
							value={touristRegData.email}
							isReadOnly={true}
							label="Email Address"
						/>
						<PasswordInput
							label="Password"
							isReadOnly={true}
							placeholder="Enter your password"
							value={touristRegData.password}
						/>
						<PasswordInput
							label="Confirm Password"
							isReadOnly={true}
							placeholder="Re-type your password"
							value={touristRegData.confirmPassword}
						/>
					</div>
				</div>

				<div className="w-full flex justify-between">
					<PlainBtn as={Link} href={prevStep} label="Back" fullWidth={false} />
					<GradientBtn
						label="Submit"
						isLoading={touristRegLoading}
						fullWidth={false}
						onClickHandler={handleSubmit}
					/>
				</div>
			</FormContainer>
		</Container>
	);
};

export default Step3;
