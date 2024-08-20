import EstablishmentNav from '@/components/Navbar/EstablishmentNav';
import TouristNav from '@/components/Navbar/TouristNav';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Establishment',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<EstablishmentNav /> {children}
		</div>
	);
}
