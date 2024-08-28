'use client';

import GradientBtn from '@/components/Button/GradientBtn';
import FormContainer from '@/components/Container/FormContainer';
import Container from '@/components/Container/LayoutContainer';
import CustomDatePicker from '@/components/Dropdown/CustomDatePicker';
import URLBasedImage from '@/components/Image/CustomImage';
import TextInput from '@/components/Input/TextInput';
import { useEstablishmentStore } from '@/stores/useEstablishmentStore';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/useAuthStore';

const UpdateProfile = () => {
	const router = useRouter();

	const [updateData, setUpdateData] = useState({});
	const [establishment, setEstablishment] = useState({
		establishment_name: '',
		establishment_type: '',
		city_municipality: '',
		barangay: '',
		complete_address: '',
		contact_number: '',
		email_address: '',
		photo_url: '',
		user_id: '',
	});

	const {
		onUploadEstablishmentImage,
		establishmentRegData,
		uploadToCloudinary,
	} = useAuthStore();

	const {
		getEstablishmentDetails,
		establishmentDetails,
		updateEstablishmentDetails,
	} = useEstablishmentStore();

	const handleSubmit = async () => {
		let data = { ...updateData };

		if (establishmentRegData.image) {
			await uploadToCloudinary(establishmentRegData.imageFile!).then((res) => {
				data = {
					...updateData,
					photo_url: res,
				};
			});
		}

		const updateEstablishmentResponse = await updateEstablishmentDetails(
			`${Cookies.get('user_id')}`,
			data
		);

		console.log(updateEstablishmentResponse);

		if (updateEstablishmentResponse.success) {
			router.push('/establishment');
		}
	};

	useEffect(() => {
		getEstablishmentDetails(`${Cookies.get('user_id')}`);
	}, []);

	useEffect(() => {
		setEstablishment({
			...establishment,
			establishment_name: `${establishmentDetails?.establishment_name}`,
			establishment_type: `${establishmentDetails?.establishment_type}`,
			city_municipality: `${establishmentDetails?.city_municipality}`,
			barangay: `${establishmentDetails?.barangay}`,
			complete_address: `${establishmentDetails?.complete_address}`,
			contact_number: `${establishmentDetails?.contact_number}`,
			email_address: `${establishmentDetails?.email_address}`,
			photo_url: `${establishmentDetails?.photo_url}`,
			user_id: `${establishmentDetails?.user_id}`,
		});
	}, [establishmentDetails]);

	useEffect(() => {
		console.log(updateData);
	}, [updateData]);

	return (
		<Container>
			<div className="mb-4">
				<h1 className="font-bold text-xl">Update Profile</h1>
				<p>Please provide proper information below. </p>
			</div>
			<FormContainer>
				<URLBasedImage imageUrl={`${establishment?.photo_url}`} />
				<div className="my-8">
					<p className="font-semibold mb-2">PHOTO</p>
					<label
						className="block mb-2 text-sm text-gray-900 dark:text-white"
						htmlFor="file_input"
					>
						Please upload a photo for the establishment.
					</label>
					<div className="flex justify-center my-2">
						{establishmentRegData.image && (
							<img
								src={establishmentRegData.image}
								alt="imagePreview"
								className="w-40"
							/>
						)}
					</div>
					<div className="flex justify-center px-2 py-16 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
						<input
							onChange={onUploadEstablishmentImage}
							className=""
							id="file_input"
							type="file"
						/>
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">BASIC INFORMATION</p>
					<div className="grid grid-cols-1  lg:grid-cols-2 gap-2">
						<TextInput
							value={`${establishment?.establishment_name}`}
							label="Establishment Name"
							onChange={(e) => {
								setUpdateData({
									...updateData,
									establishment_name: e.target.value,
								});
								setEstablishment({
									...establishment,
									establishment_name: e.target.value,
								});
							}}
						/>
						<TextInput
							value={`${establishment?.establishment_type}`}
							label="Establishment Type"
							onChange={(e) => {
								setUpdateData({
									...updateData,
									establishment_type: e.target.value,
								});
								setEstablishment({
									...establishment,
									establishment_type: e.target.value,
								});
							}}
						/>
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">LOCATION</p>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
						<TextInput
							value={`${establishment?.barangay}`}
							label="Barangay"
							onChange={(e) => {
								setUpdateData({
									...updateData,
									barangay: e.target.value,
								});
								setEstablishment({
									...establishment,
									barangay: e.target.value,
								});
							}}
						/>
						<TextInput
							value={`${establishment?.city_municipality}`}
							label="Municipality"
							onChange={(e) => {
								setUpdateData({
									...updateData,
									city_municipality: e.target.value,
								});
								setEstablishment({
									...establishment,
									city_municipality: e.target.value,
								});
							}}
						/>
					</div>
					<div className="grid grid-cols-1 mt-2">
						<TextInput
							value={`${establishment?.complete_address}`}
							label="Complete Address"
							onChange={(e) => {
								setUpdateData({
									...updateData,
									complete_address: e.target.value,
								});
								setEstablishment({
									...establishment,
									complete_address: e.target.value,
								});
							}}
						/>
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">CONTACT INFORMATION</p>
					<div className="w-full">
						<TextInput
							value={`${establishment?.contact_number}`}
							label="Contact Number"
							onChange={(e) => {
								setUpdateData({
									...updateData,
									contact_number: e.target.value,
								});
								setEstablishment({
									...establishment,
									contact_number: e.target.value,
								});
							}}
						/>
					</div>
				</div>
				<GradientBtn
					label="Save Changes"
					fullWidth
					onClickHandler={handleSubmit}
				/>
			</FormContainer>
		</Container>
	);
};

export default UpdateProfile;
