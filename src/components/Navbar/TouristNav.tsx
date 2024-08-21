'use client';

import React from 'react';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
	useDisclosure,
} from '@nextui-org/react';
import AppLogo from './AppLogo';

const TouristNav = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const handleOpen = () => {
		onOpen();
	};

	return (
		<Navbar isBordered maxWidth="full">
			<NavbarBrand>
				<AppLogo />
			</NavbarBrand>

			<NavbarContent justify="end">
				<NavbarItem>
					<div className="flex gap-x-4 ">
						<Link href="/tourist" className="text-gray-600 text-sm">
							Home
						</Link>
						<Link
							href="/tourist/virtual-assistance"
							className="text-gray-600 text-sm"
						>
							Virtual Assistance
						</Link>
						<Link href="/tourist/complaints" className="text-gray-600 text-sm">
							Complaints
						</Link>
						<Link
							href="/tourist/privacy-policy"
							className="text-gray-600 text-sm"
						>
							Privacy Policy
						</Link>
					</div>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
};

export default TouristNav;
