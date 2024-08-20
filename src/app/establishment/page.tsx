'use client';

import GradientBtn from '@/components/Button/GradientBtn';
import PlainBtn from '@/components/Button/PlainBtn';
import FormContainer from '@/components/Container/FormContainer';
import Container from '@/components/Container/LayoutContainer';
import CustomDatePicker from '@/components/Dropdown/CustomDatePicker';
import URLBasedImage from '@/components/Image/CustomImage';
import TextInput from '@/components/Input/TextInput';
import PageTitle from '@/components/Text/PageTitle';
import { Button } from '@nextui-org/react';
import { useQRCode } from 'next-qrcode';
import Link from 'next/link';
import React from 'react';

const TouristHome = () => {
	const { Canvas } = useQRCode();

	return (
		<Container>
			<PageTitle title="Profile" />

			<FormContainer>
				<div className="flex justify-center">
					<div>
						<URLBasedImage imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhdpV469iCed-OlZ1wpJnhpEcNB4-_Fh6QA&s" />
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">BASIC INFORMATION</p>
					<div className="grid grid-cols-1  lg:grid-cols-2 gap-2">
						<TextInput
							value="Tea Street"
							isReadOnly
							label="Establishment Name"
						/>
						<TextInput
							value="Cafe/Coffee Shop"
							isReadOnly
							label="Establishment Type"
						/>
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">LOCATION</p>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
						<TextInput value="Poblacion" isReadOnly label="Barangay" />
						<TextInput value="Sagay" isReadOnly label="Municipality" />
					</div>
					<div className="grid grid-cols-1 mt-2">
						<TextInput
							value="Chiu Bldg., Poblacion, Sagay, Camiguin"
							isReadOnly
							label="Complete Address"
						/>
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">CONTACT INFORMATION</p>
					<div className="w-full">
						<TextInput value="09567891234" isReadOnly label="Contact Number" />
					</div>
				</div>

				<Link href={'/establishment/update-profile'}>
					<GradientBtn fullWidth label="Update Profile" />
				</Link>
			</FormContainer>
		</Container>
	);
};

export default TouristHome;
