'use client';

import GradientBtn from '@/components/Button/GradientBtn';
import FormContainer from '@/components/Container/FormContainer';
import Container from '@/components/Container/LayoutContainer';
import URLBasedImage from '@/components/Image/CustomImage';
import TextInput from '@/components/Input/TextInput';
import PageTitle from '@/components/Text/PageTitle';
import { useEstablishmentStore } from '@/stores/useEstablishmentStore';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import isAuth from '@/components/isAuth';
import { getEstablishment } from '@/api/establishment.api';
import { api } from '@/api/axios';

const EstablishmentHome = () => {
	const [establishment, setEstablishment] = useState<any>({});

	const getEstablishmentInfo = async () => {
		const res = await getEstablishment(Cookies.get('establishment_id'));
		setEstablishment(res.data);
	};

	useEffect(() => {
		getEstablishmentInfo();
	}, []);

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
			<PageTitle title="Profile" />

			<FormContainer>
				<div className="flex justify-center">
					<div>
						<URLBasedImage imageUrl={`${establishment?.photo_url}`} />
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">BASIC INFORMATION</p>
					<div className="grid grid-cols-1  lg:grid-cols-2 gap-2">
						<TextInput
							value={establishment?.name}
							isReadOnly
							label="Establishment Name"
						/>

						<div className="w-full">
							<select
								title="selecttype"
								value={establishment?.type_id}
								id="options"
								disabled
								className="w-full p-2 py-4 border-2 border-gray-200 rounded-xl text-sm"
							>
								{/* <option value={''}>Establishment Type</option> */}
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
							value={establishment?.address_1}
							isReadOnly
							label="Address 1"
						/>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
						<TextInput
							value={establishment?.barangay}
							isReadOnly
							label="Barangay"
						/>
						<TextInput
							value={establishment?.city_municipality}
							isReadOnly
							label="Municipality"
						/>
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">OWNER DETAILS</p>
					<div className="grid grid-cols-1 mt-2 mb-2">
						<TextInput
							value={establishment?.owner_name}
							isReadOnly
							label="Owner Name"
						/>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
						<TextInput
							value={establishment?.owner_email}
							isReadOnly
							label="Owner Email"
						/>
						<TextInput
							value={establishment?.owner_phone}
							isReadOnly
							label="Owner Phone"
						/>
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">CONTACT INFORMATION</p>
					<div className="w-full">
						<TextInput
							value={establishment?.contact_number}
							isReadOnly
							label="Contact Number"
						/>
					</div>
				</div>

				<Link href={'/establishment/update-profile'}>
					<GradientBtn fullWidth label="Update Profile" />
				</Link>
			</FormContainer>
		</Container>
	);
};

export default isAuth(EstablishmentHome);
