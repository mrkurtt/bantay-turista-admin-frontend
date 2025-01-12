'use client';

import FormContainer from '@/components/Container/FormContainer';
import Container from '@/components/Container/LayoutContainer';
import GradientBtn from '@/components/Button/GradientBtn';
import PasswordInput from '@/components/Input/PasswordInput';
import FormStepper from '@/components/Stepper/FormStepper';
import React, { useEffect, useState } from 'react';
import PlainBtn from '@/components/Button/PlainBtn';
import TextInput from '@/components/Input/TextInput';
import Link from 'next/link';
import { useAuthStore } from '@/stores/useAuthStore';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { signup } from '@/api/auth.api';
import { api } from '@/api/axios';

const Step3 = () => {
	const { establishmentRegData, uploadToCloudinary, establishmentRegLoading } =
		useAuthStore((state) => state);

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

			const createEstablishmentResponse = await signup({
				name: establishmentRegData.establishmentName,
				type_id: establishmentRegData.type,
				city_municipality: establishmentRegData.cityMunicipality,
				barangay: establishmentRegData.barangay,
				address_1: establishmentRegData.address_1,
				contact_number: establishmentRegData.contactNumber,
				email: establishmentRegData.emailAddress,
				password: establishmentRegData.password,
				photo_url: photo_url,
				owner_name: establishmentRegData.owner_name,
				owner_email: establishmentRegData.owner_email,
				owner_phone: establishmentRegData.owner_phone,
				user_type: 2,
			});

			if (createEstablishmentResponse.status) {
				toast.success('Establishment registered successfully');
				router.push('/');
			} else {
				toast.error('Establishment registration failed');
			}
		}
	};

	const [estypes, setEstypes] = useState<Object[]>([]);

	const getTypes = async () => {
		const res = await api.get('/establishment-type');
		setEstypes(res.data.data);
	};

	useEffect(() => {
		getTypes();
	}, []);

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
						<div className="w-full">
							<select
								title="selecttype"
								value={establishmentRegData.type}
								id="options"
								disabled
								className="w-full p-2 border-2 border-gray-200 rounded-lg text-sm"
							>
								<option value={''}>Establishment Type</option>
								{estypes.map((estype: any) => (
									<option value={estype.id}>{estype.name}</option>
								))}
							</select>
						</div>
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">OWNER DETAILS</p>
					<div className="grid grid-cols-1  lg:grid-cols-2 gap-2">
						<TextInput
							label="Owner Name"
							name="owner_name"
							isReadOnly
							value={establishmentRegData.owner_name}
						/>
						<TextInput
							label="Owner Email"
							name="owner_email"
							isReadOnly
							value={establishmentRegData.owner_email}
						/>

						<TextInput
							label="Owner Phone Number"
							name="owner_phone"
							isReadOnly
							value={establishmentRegData.owner_phone}
						/>
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">LOCATION</p>
					<div className="grid grid-cols-1  lg:grid-cols-2 gap-2">
						<div className="grid grid-cols-1 mt-2">
							<TextInput
								label="Address 1"
								name="address_1"
								isReadOnly
								value={establishmentRegData.address_1}
							/>
						</div>
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
