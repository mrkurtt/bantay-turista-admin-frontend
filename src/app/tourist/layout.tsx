import TouristNav from '@/components/Navbar/TouristNav';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Tourist',
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
