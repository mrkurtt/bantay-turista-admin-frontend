import AdminNav from '@/components/Navbar/AdminNav';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Admin',
};

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<AdminNav />
			<div className="p-4 sm:ml-64 bg-gray-100 h-screen">
				<div className="p-4 border-2 border-gray-200 bg-white border-dashed rounded-lg mt-14">
					{children}
				</div>
			</div>
		</div>
	);
}
