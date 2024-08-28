import Nav from '@/components/Navbar/Nav';
import React from 'react';

const Layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div>
			<Nav />
			{children}
		</div>
	);
};

export default Layout;
