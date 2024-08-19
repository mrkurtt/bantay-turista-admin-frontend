import TouristNav from '@/components/Navbar/TouristNav';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: {
		template: '%s | Bantay Turista',
		default: 'Bantay Turista',
	},
	description: 'A Tourist Tracking System for Camiguin Island.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<TouristNav /> {children}
		</div>
	);
}
