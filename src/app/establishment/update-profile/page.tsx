'use client';

import GradientBtn from '@/components/Button/GradientBtn';
import FormContainer from '@/components/Container/FormContainer';
import Container from '@/components/Container/LayoutContainer';
import CustomDatePicker from '@/components/Dropdown/CustomDatePicker';
import URLBasedImage from '@/components/Image/CustomImage';
import TextInput from '@/components/Input/TextInput';
import React, { useEffect, useState } from 'react';

const UpdateProfile = () => {
	const [fname, setFname] = useState('');

	useEffect(() => {
		console.log(fname);
	}, [fname]);

	useEffect(() => {
		setFname('Mikhaela');
	}, []);

	return (
		<Container>
			<div className="mb-4">
				<h1 className="font-bold text-xl">Update Profile</h1>
				<p>Please provide proper information below. </p>
			</div>
			<FormContainer>
				<URLBasedImage imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhdpV469iCed-OlZ1wpJnhpEcNB4-_Fh6QA&s" />
				<div className="my-8">
					<p className="font-semibold mb-2">PHOTO</p>
					<label
						className="block mb-2 text-sm text-gray-900 dark:text-white"
						htmlFor="file_input"
					>
						Please upload a photo for the establishment.
					</label>
					<div className="flex justify-center px-2 py-16 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
						<input className="" id="file_input" type="file" />
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">BASIC INFORMATION</p>
					<div className="grid grid-cols-1  lg:grid-cols-2 gap-2">
						<TextInput value="Tea Street" label="Establishment Name" />
						<TextInput value="Cafe/Coffee Shop" label="Establishment Type" />
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">LOCATION</p>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
						<TextInput value="Poblacion" label="Barangay" />
						<TextInput value="Sagay" label="Municipality" />
					</div>
					<div className="grid grid-cols-1 mt-2">
						<TextInput
							value="Chiu Bldg., Poblacion, Sagay, Camiguin"
							label="Complete Address"
						/>
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">CONTACT INFORMATION</p>
					<div className="w-full">
						<TextInput value="09567891234" label="Contact Number" />
					</div>
				</div>
				<GradientBtn label="Save Changes" fullWidth />
			</FormContainer>
		</Container>
	);
};

export default UpdateProfile;
