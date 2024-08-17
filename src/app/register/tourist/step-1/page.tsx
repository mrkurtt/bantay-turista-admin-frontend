'use client';

import FormContainer from '@/components/Container/FormContainer';
import Container from '@/components/Container/LayoutContainer';
import FormStepper from '@/components/Stepper/FormStepper';
import { Button, Input } from '@nextui-org/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const RegisterTourist = () => {
	const [isVisible, setIsVisible] = React.useState(false);
	const toggleVisibility = () => setIsVisible(!isVisible);

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
						<Input variant="bordered" label="First Name" />
						<Input variant="bordered" label="Last Name" />
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">
						DATE OF BIRTH
						<span className="text-gray-600 font-light text-sm">MM/DD/YYYY</span>
					</p>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
						<Input variant="bordered" label="Month" />
						<Input variant="bordered" label="Day" />
						<Input variant="bordered" label="Year" />
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">PERMANENT ADDRESS</p>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
						<Input variant="bordered" label="Country" />
						<Input variant="bordered" label="Province" />
						<Input variant="bordered" label="City/Municipality" />
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">ACCOUNT DETAILS</p>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
						<Input variant="bordered" label="Username" />
						<Input variant="bordered" label="Email Address" />
						<Input
							label="Password"
							placeholder="Enter your password"
							variant="bordered"
							endContent={
								<button
									className="focus:outline-none"
									type="button"
									onClick={toggleVisibility}
									aria-label="toggle password visibility"
								>
									{isVisible ? (
										<IoMdEye className="text-primary" size={25} />
									) : (
										<IoMdEyeOff className="text-primary" size={25} />
									)}
								</button>
							}
							type={isVisible ? 'text' : 'password'}
						/>
						<Input
							label="Confirm Password"
							placeholder="Re-type your password"
							variant="bordered"
							endContent={
								<button
									className="focus:outline-none"
									type="button"
									onClick={toggleVisibility}
									aria-label="toggle password visibility"
								>
									{isVisible ? (
										<IoMdEye className="text-primary" size={25} />
									) : (
										<IoMdEyeOff className="text-primary" size={25} />
									)}
								</button>
							}
							type={isVisible ? 'text' : 'password'}
						/>
					</div>
				</div>
				<div className="w-full flex justify-end">
					<Link href={nextStep}>
						<Button variant="flat" className="bg-primary text-white">
							Continue
						</Button>
					</Link>
				</div>
			</FormContainer>
		</Container>
	);
};

export default RegisterTourist;
