'use client';

import GradientBtn from '@/components/Button/GradientBtn';
import FormContainer from '@/components/Container/FormContainer';
import Container from '@/components/Container/LayoutContainer';
import URLBasedImage from '@/components/Image/CustomImage';
import TextInput from '@/components/Input/TextInput';
import { useEstablishmentStore } from '@/stores/useEstablishmentStore';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/useAuthStore';
import isAuth from '@/components/isAuth';
import { getEstablishment, updateEstablishment } from '@/api/establishment.api';
import toast from 'react-hot-toast';
import { api } from '@/api/axios';

const UpdateProfile = () => {
	const router = useRouter();

	const [updateData, setUpdateData] = useState({});
	// const [establishment, setEstablishment] = useState({
	// 	establishment_name: '',
	// 	establishment_type: '',
	// 	city_municipality: '',
	// 	barangay: '',
	// 	complete_address: '',
	// 	contact_number: '',
	// 	email_address: '',
	// 	photo_url: '',
	// 	user_id: '',
	// });

	const {
		onUploadEstablishmentImage,
		establishmentRegData,
		uploadToCloudinary,
	} = useAuthStore((state) => state);

	// const {
	// 	getEstablishmentDetails,
	// 	establishmentDetails,
	// 	updateEstablishmentDetails,
	// } = useEstablishmentStore((state) => state);

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

		const updateEstablishmentResponse = await updateEstablishment(
			`${Cookies.get('establishment_id')}`,
			data
		);

		// console.log(updateEstablishmentResponse);

		if (updateEstablishmentResponse.status) {
			toast.success('Establishment updated successfully');
			router.push('/establishment');
		}
	};

	// useEffect(() => {
	// 	getEstablishmentDetails(`${Cookies.get('user_id')}`);
	// }, []);

	// useEffect(() => {
	// 	setEstablishment({
	// 		...establishment,
	// 		establishment_name: `${establishmentDetails?.establishment_name}`,
	// 		establishment_type: `${establishmentDetails?.establishment_type}`,
	// 		city_municipality: `${establishmentDetails?.city_municipality}`,
	// 		barangay: `${establishmentDetails?.barangay}`,
	// 		complete_address: `${establishmentDetails?.complete_address}`,
	// 		contact_number: `${establishmentDetails?.contact_number}`,
	// 		email_address: `${establishmentDetails?.email_address}`,
	// 		photo_url: `${establishmentDetails?.photo_url}`,
	// 		user_id: `${establishmentDetails?.user_id}`,
	// 	});
	// }, [establishmentDetails]);

	const [establishment, setEstablishment] = useState<any>({});
	const [estypes, setEstypes] = useState<Object[]>([]);

	const getEstablishmentInfo = async () => {
		const res = await getEstablishment(Cookies.get('establishment_id'));
		setEstablishment(res.data);
	};

	const getTypes = async () => {
		const res = await api.get('/establishment-type');
		setEstypes(res.data.data);
	};

	useEffect(() => {
		getTypes();
	}, []);

	useEffect(() => {
		getEstablishmentInfo();
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
				<URLBasedImage imageUrl={`${establishment?.photo_url}`} />
				<div className="my-8">
					<p className="font-semibold mb-2">PHOTO</p>
					<label
						className="block mb-2 text-sm text-gray-900 dark:text-white"
						htmlFor="file_input"
					>
						Please upload a photo for the establishment.
					</label>
					<div className="flex justify-center my-2"></div>
					<div className="flex flex-col items-center justify-center px-2 py-16 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
						{establishmentRegData.image && (
							<img
								src={establishmentRegData.image}
								alt="imagePreview"
								className="w-40"
							/>
						)}
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
							value={`${establishment?.name}`}
							label="Establishment Name"
							onChange={(e) => {
								setUpdateData({
									...updateData,
									name: e.target.value,
								});
								setEstablishment({
									...establishment,
									name: e.target.value,
								});
							}}
						/>
						<div className="w-full">
							<select
								title="selecttype"
								value={establishment?.type_id}
								onChange={(e) => {
									setUpdateData({
										...updateData,
										type_id: e.target.value,
									});
									setEstablishment({
										...establishment,
										type_id: e.target.value,
									});
								}}
								id="options"
								className="w-full p-2 py-4 border-2 border-gray-200 rounded-xl text-sm"
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
					<p className="font-semibold mb-2">LOCATION</p>
					<div className="grid grid-cols-1 mt-2 mb-2">
						<TextInput
							value={`${establishment?.address_1}`}
							label="Address 1"
							onChange={(e) => {
								setUpdateData({
									...updateData,
									address_1: e.target.value,
								});
								setEstablishment({
									...establishment,
									address_1: e.target.value,
								});
							}}
						/>
					</div>
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
				</div>

				<div className="my-8">
					<p className="font-semibold mb-2">OWNER DETAILS</p>
					<div className="grid grid-cols-1  lg:grid-cols-2 gap-2">
						<TextInput
							value={`${establishment?.owner_name}`}
							label="Owner Name"
							onChange={(e) => {
								setUpdateData({
									...updateData,
									owner_name: e.target.value,
								});
								setEstablishment({
									...establishment,
									owner_name: e.target.value,
								});
							}}
						/>
						<TextInput
							value={`${establishment?.owner_email}`}
							label="Owner Email"
							onChange={(e) => {
								setUpdateData({
									...updateData,
									owner_email: e.target.value,
								});
								setEstablishment({
									...establishment,
									owner_email: e.target.value,
								});
							}}
						/>
						<TextInput
							value={`${establishment?.owner_phone}`}
							label="Owner Phone"
							onChange={(e) => {
								setUpdateData({
									...updateData,
									owner_phone: e.target.value,
								});
								setEstablishment({
									...establishment,
									owner_phone: e.target.value,
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

export default isAuth(UpdateProfile);
