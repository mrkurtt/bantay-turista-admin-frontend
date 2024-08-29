'use client';

import GradientBtn from '@/components/Button/GradientBtn';
import FormContainer from '@/components/Container/FormContainer';
import Container from '@/components/Container/LayoutContainer';
import URLBasedImage from '@/components/Image/CustomImage';
import TextInput from '@/components/Input/TextInput';
import PageTitle from '@/components/Text/PageTitle';
import { useEstablishmentStore } from '@/stores/useEstablishmentStore';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import isAuth from '@/utils/isAuth';

const EstablishmentHome = () => {
	const { getEstablishmentDetails, establishmentDetails } =
		useEstablishmentStore();

	useEffect(() => {
		getEstablishmentDetails(`${Cookies.get('user_id')}`);
		console.log(establishmentDetails);
	}, []);

	return (
		<Container>
			<PageTitle title="Profile" />

			<FormContainer>
				<div className="flex justify-center">
					<div>
						<URLBasedImage imageUrl={`${establishmentDetails?.photo_url}`} />
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">BASIC INFORMATION</p>
					<div className="grid grid-cols-1  lg:grid-cols-2 gap-2">
						<TextInput
							value={establishmentDetails?.establishment_name}
							isReadOnly
							label="Establishment Name"
						/>
						<TextInput
							value={establishmentDetails?.establishment_type}
							isReadOnly
							label="Establishment Type"
						/>
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">LOCATION</p>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
						<TextInput
							value={establishmentDetails?.barangay}
							isReadOnly
							label="Barangay"
						/>
						<TextInput
							value={establishmentDetails?.city_municipality}
							isReadOnly
							label="Municipality"
						/>
					</div>
					<div className="grid grid-cols-1 mt-2">
						<TextInput
							value={establishmentDetails?.complete_address}
							isReadOnly
							label="Complete Address"
						/>
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">CONTACT INFORMATION</p>
					<div className="w-full">
						<TextInput
							value={establishmentDetails?.contact_number}
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
