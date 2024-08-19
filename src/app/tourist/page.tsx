'use client';

import GradientBtn from '@/components/Button/GradientBtn';
import PlainBtn from '@/components/Button/PlainBtn';
import FormContainer from '@/components/Container/FormContainer';
import Container from '@/components/Container/LayoutContainer';
import CustomDatePicker from '@/components/Dropdown/CustomDatePicker';
import URLBasedImage from '@/components/Image/CustomImage';
import TextInput from '@/components/Input/TextInput';
import { Button } from '@nextui-org/react';
import { useQRCode } from 'next-qrcode';
import Link from 'next/link';
import React from 'react';

const TouristHome = () => {
	const { Canvas } = useQRCode();

	return (
		<Container>
			<div className="flex justify-center">
				<h1 className="text-gray-700 font-bold text-2xl mb-4">Profile</h1>
			</div>

			<FormContainer>
				<div className="flex justify-between items-start">
					<div>
						<URLBasedImage imageUrl="https://i.pinimg.com/736x/73/f4/b4/73f4b44ed39cd152627199ccc31c0af1.jpg" />
					</div>
					<div className="flex flex-col items-center justify-center gap-y-2">
						<div className="border p-4 rounded-sm">
							<Canvas
								text={'BTUDYDK31J'}
								options={{
									type: 'image/jpeg',
									quality: 0.3,
									errorCorrectionLevel: 'M',
									margin: 3,
									scale: 4,
									width: 150,
									color: {
										dark: '#233484',
										light: '#FFFFFF',
									},
								}}
							/>
						</div>
						<PlainBtn fullWidth label="Download" />
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">BASIC INFORMATION</p>
					<div className="grid grid-cols-1  lg:grid-cols-2 gap-2">
						<TextInput
							value="Mikhaela Jimenea"
							isReadOnly={true}
							label="First Name"
						/>
						<TextInput value="Lim" isReadOnly={true} label="Last Name" />
						<TextInput isReadOnly={true} label="Gender" value="Female" />
						<TextInput value="Filipino" isReadOnly={true} label="Nationality" />
					</div>
				</div>
				<div className="my-8 w-full">
					<p className="font-semibold mb-2">DATE OF BIRTH</p>
					<CustomDatePicker label="Birth Date" isReadOnly />
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">PERMANENT ADDRESS</p>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
						<TextInput value="Philippines" isReadOnly={true} label="Country" />
						<TextInput value="Manila" isReadOnly={true} label="Province" />
						<TextInput
							value="San Juan"
							isReadOnly={true}
							label="City/Municipality"
						/>
					</div>
				</div>
				<Link href={'/tourist/update-profile'}>
					<GradientBtn fullWidth label="Update Profile" />
				</Link>
			</FormContainer>
		</Container>
	);
};

export default TouristHome;
