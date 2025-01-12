'use client';

import GradientBtn from '@/components/Button/GradientBtn';
import FormContainer from '@/components/Container/FormContainer';
import Container from '@/components/Container/LayoutContainer';
import CustomDatePicker from '@/components/Dropdown/CustomDatePicker';
import URLBasedImage from '@/components/Image/CustomImage';
import TextInput from '@/components/Input/TextInput';
import { useTouristStore } from '@/stores/useTouristStore';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useAuthStore } from '@/stores/useAuthStore';
import { useRouter } from 'next/navigation';
import isAuth from '@/components/isAuth';
import { getTourist, updateTourist } from '@/api/tourist.api';
import toast from 'react-hot-toast';

const UpdateProfile = () => {
	const router = useRouter();

	const { getTouristDetails, touristDetails, updateTouristDetails, isLoading } =
		useTouristStore((state) => state);

	const { onUploadTouristImage, touristRegData, uploadToCloudinary } =
		useAuthStore((state) => state);

	const handleSubmit = async () => {
		let data = { ...updateData };

		if (touristRegData.image) {
			await uploadToCloudinary(touristRegData.imageFile!).then((res) => {
				data = {
					...updateData,
					photo_url: res,
				};
			});
		}

		const updateTouristResponse = await updateTourist(
			`${Cookies.get('tourist_id')}`,
			data
		);

		// const updateTouristResponse = await updateTouristDetails(
		// 	`${Cookies.get('user_id')}`,
		// 	data
		// );

		if (updateTouristResponse.status) {
			toast.success('Tourist updated successfully');
			router.push('/tourist');
		} else {
			toast.error('Tourist update failed');
		}
	};

	const [tourist, setTourist] = useState<any>({});
	const [updateData, setUpdateData] = useState({});

	const getTouristInfo = async () => {
		const res = await getTourist(Cookies.get('tourist_id'));
		setTourist(res.data);
	};

	useEffect(() => {
		getTouristInfo();
	}, []);

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
				<URLBasedImage imageUrl={`${tourist?.photo_url}`} />
				<div className="my-8">
					<label
						className="block mb-2 text-sm text-gray-900 dark:text-white"
						htmlFor="file_input"
					>
						Please upload a photo that shows your face.
					</label>
					<p className="font-semibold mb-2">PHOTO</p>
					<div className="flex justify-center my-2"></div>

					<div className="flex flex-col items-center justify-center px-2 py-16 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
						{touristRegData.image && (
							<img
								src={touristRegData.image}
								alt="imagePreview"
								className="w-40"
							/>
						)}
						<input
							onChange={onUploadTouristImage}
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
							onChange={(e) => {
								setUpdateData({
									...updateData,
									first_name: e.target.value,
								});
								setTourist({
									...tourist,
									first_name: e.target.value,
								});
							}}
							value={tourist.first_name}
							label="First Name"
						/>
						<TextInput
							onChange={(e) => {
								setUpdateData({
									...updateData,
									last_name: e.target.value,
								});
								setTourist({
									...tourist,
									last_name: e.target.value,
								});
							}}
							value={tourist?.last_name}
							label="Last Name"
						/>
						<TextInput
							onChange={(e) => {
								setUpdateData({
									...updateData,
									gender: e.target.value,
								});
								setTourist({
									...tourist,
									gender: e.target.value,
								});
							}}
							value={tourist?.gender}
							label="Gender"
						/>
						<TextInput
							onChange={(e) => {
								setUpdateData({
									...updateData,
									nationality: e.target.value,
								});
								setTourist({
									...tourist,
									nationality: e.target.value,
								});
							}}
							value={tourist?.nationality}
							label="Nationality"
						/>
					</div>
				</div>
				<div className="my-8 w-full">
					<p className="font-semibold mb-2">DATE OF BIRTH</p>

					<input
						className="w-full p-2 py-4 border-2 border-gray-200 rounded-xl text-sm"
						title="birthdate"
						type="date"
						onChange={(e) =>
							setUpdateData({
								...updateData,
								date_of_birth: e.target.value,
							})
						}
						id="birthday"
						placeholder={tourist?.date_of_birth}
						name="birthday"
					/>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">PERMANENT ADDRESS</p>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
						<TextInput
							onChange={(e) => {
								setUpdateData({
									...updateData,
									address_1: e.target.value,
								});
								setTourist({
									...tourist,
									address_1: e.target.value,
								});
							}}
							value={tourist?.address_1}
							label="Address 1"
						/>
						<TextInput
							onChange={(e) => {
								setUpdateData({
									...updateData,
									address_2: e.target.value,
								});
								setTourist({
									...tourist,
									address_2: e.target.value,
								});
							}}
							value={tourist?.address_2}
							label="Address 2"
						/>
						<TextInput
							onChange={(e) => {
								setUpdateData({
									...updateData,
									country: e.target.value,
								});
								setTourist({
									...tourist,
									country: e.target.value,
								});
							}}
							value={tourist?.country}
							label="Country"
						/>
						<TextInput
							onChange={(e) => {
								setUpdateData({
									...updateData,
									state_province: e.target.value,
								});
								setTourist({
									...tourist,
									state_province: e.target.value,
								});
							}}
							value={tourist?.state_province}
							label="Province"
						/>
						<TextInput
							onChange={(e) => {
								setUpdateData({
									...updateData,
									city_municipality: e.target.value,
								});
								setTourist({
									...tourist,
									city_municipality: e.target.value,
								});
							}}
							value={tourist?.city_municipality}
							label="City/Municipality"
						/>
					</div>
				</div>
				<GradientBtn
					isLoading={isLoading}
					label="Save Changes"
					fullWidth
					onClickHandler={handleSubmit}
				/>
			</FormContainer>
		</Container>
	);
};

export default isAuth(UpdateProfile);
