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
			<div className="p-4 sm:ml-64">
				<div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
					{children}
				</div>
			</div>
		</div>
	);
}
