'use client';

import GradientBtn from '@/components/Button/GradientBtn';
import FormContainer from '@/components/Container/FormContainer';
import Container from '@/components/Container/LayoutContainer';
import CustomDatePicker from '@/components/Dropdown/CustomDatePicker';
import URLBasedImage from '@/components/Image/CustomImage';
import TextInput from '@/components/Input/TextInput';
import PageTitle from '@/components/Text/PageTitle';
import { useTouristStore } from '@/stores/useTouristStore';
import { useQRCode } from 'next-qrcode';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { dateParser } from '@/utils/helper';
import isAuth from '@/components/isAuth';

const TouristHome = () => {
	const { Canvas, Image } = useQRCode();
	const [qrcode, setQrCode] = useState('BTUDYDK31J');

	const { getTouristDetails, touristDetails } = useTouristStore(
		(state) => state
	);

	const downloadQRCode = () => {
		const canvas = document.getElementById('qr-code') as HTMLCanvasElement;
		if (canvas) {
			const pngUrl = canvas
				.toDataURL('image/png')
				.replace('image/png', 'image/octet-stream');

			let downloadLink = document.createElement('a');
			downloadLink.href = pngUrl;
			downloadLink.download = `${qrcode}.png`; // Set the download file name
			document.body.appendChild(downloadLink);
			downloadLink.click();
			document.body.removeChild(downloadLink);
		}
	};

	useEffect(() => {
		getTouristDetails(Cookies.get('user_id'));
	}, []);

	return (
		<Container>
			<PageTitle title="Profile" />

			<FormContainer>
				<div className="flex justify-between items-start">
					<div>
						<URLBasedImage imageUrl={`${touristDetails?.photo_url}`} />
					</div>
					<div className="flex flex-col items-center justify-center gap-y-2">
						<div className="border p-4 rounded-sm">
							<Image
								text={`${touristDetails?.qr_code}`}
								options={{
									type: 'image/png',
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
						<p className="font-semibold text-primary">{`${touristDetails?.qr_code}`}</p>
					</div>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">BASIC INFORMATION</p>
					<div className="grid grid-cols-1  lg:grid-cols-2 gap-2">
						<TextInput
							value={touristDetails?.first_name}
							isReadOnly={true}
							label="First Name"
						/>
						<TextInput
							value={touristDetails?.last_name}
							isReadOnly={true}
							label="Last Name"
						/>
						<TextInput
							value={touristDetails?.gender}
							isReadOnly={true}
							label="Gender"
						/>
						<TextInput
							value={touristDetails?.nationality}
							isReadOnly={true}
							label="Nationality"
						/>
					</div>
				</div>
				<div className="my-8 w-full">
					<p className="font-semibold mb-2">DATE OF BIRTH</p>
					<TextInput
						value={touristDetails?.birthdate}
						isReadOnly={true}
						label="Birth Day"
					/>
				</div>
				<div className="my-8">
					<p className="font-semibold mb-2">PERMANENT ADDRESS</p>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
						<TextInput
							value={touristDetails?.country}
							isReadOnly={true}
							label="Country"
						/>
						<TextInput
							value={touristDetails?.province}
							isReadOnly={true}
							label="Province"
						/>
						<TextInput
							value={touristDetails?.city_municipality}
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

export default isAuth(TouristHome);
