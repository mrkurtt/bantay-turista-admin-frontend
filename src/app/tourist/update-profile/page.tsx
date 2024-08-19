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
				<URLBasedImage imageUrl="https://i.pinimg.com/736x/73/f4/b4/73f4b44ed39cd152627199ccc31c0af1.jpg" />
				<div className="my-8">
					<p className="font-semibold mb-2">PHOTO</p>
					<label
						className="block mb-2 text-sm text-gray-900 dark:text-white"
						htmlFor="file_input"
					>
						Please upload a photo that shows your face.
					</label>
					<div className="flex justify-center px-2 py-16 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
						<input className="" id="file_input" type="file" />
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">BASIC INFORMATION</p>
					<div className="grid grid-cols-1  lg:grid-cols-2 gap-2">
						<TextInput
							onChange={(e) => setFname(e.target.value)}
							value={fname}
							label="First Name"
						/>
						<TextInput label="Last Name" />
						<TextInput label="Gender" value="Female" />
						<TextInput value="Filipino" label="Nationality" />
					</div>
				</div>
				<div className="my-8 w-full">
					<p className="font-semibold mb-2">DATE OF BIRTH</p>
					<CustomDatePicker label="Birth Date" />
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">PERMANENT ADDRESS</p>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
						<TextInput label="Country" />
						<TextInput label="Province" />
						<TextInput label="City/Municipality" />
					</div>
				</div>
				<GradientBtn label="Save Changes" fullWidth />
			</FormContainer>
		</Container>
	);
};

export default UpdateProfile;
