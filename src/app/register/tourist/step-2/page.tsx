'use client';

import FormContainer from '@/components/Container/FormContainer';
import Container from '@/components/Container/LayoutContainer';
import GradientBtn from '@/components/Button/GradientBtn';
import FormStepper from '@/components/Stepper/FormStepper';
import React, { useEffect, useState } from 'react';
import PlainBtn from '@/components/Button/PlainBtn';
import { useAuthStore } from '@/stores/useAuthStore';
import Link from 'next/link';

const Step2 = () => {
	const nextStep = '/register/tourist/step-3';
	const prevStep = '/register/tourist/step-1';
	const { touristRegData, onUploadTouristImage } = useAuthStore(
		(state) => state
	);

	const steps = [
		{
			stepLabel: 'Step 1',
			stepDescription: 'Personal Info',
			completed: true,
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
		console.log(touristRegData);
	}, [touristRegData]);

	return (
		<Container>
			<div className="mb-4">
				<h1 className="font-bold text-xl">Create an Account</h1>
				<p>Please provide proper information below. </p>
			</div>
			<FormContainer>
				<FormStepper steps={steps} currentStepIndex={1} />
				<div className="my-8">
					<p className="font-semibold mb-2">PHOTO</p>
					<label
						className="block mb-2 text-sm text-gray-900 dark:text-white"
						htmlFor="file_input"
					>
						Please upload a photo that shows your face.
					</label>
					<div className="flex flex-col items-center gap-y-3 px-2 py-16 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
						{touristRegData.image && (
							<img
								src={touristRegData.image}
								alt="imagePreview"
								className="w-40"
							/>
						)}
						<input
							className=""
							onChange={onUploadTouristImage}
							name="imageFile"
							id="file_input"
							type="file"
							value={touristRegData.image && undefined}
						/>
					</div>
				</div>

				<div className="flex justify-between">
					<PlainBtn as={Link} href={prevStep} label="Back" fullWidth={false} />
					<GradientBtn
						as={Link}
						href={nextStep}
						label="Continue"
						fullWidth={false}
					/>
				</div>
			</FormContainer>
		</Container>
	);
};

export default Step2;
