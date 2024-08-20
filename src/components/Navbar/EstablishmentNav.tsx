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

const EstablishmentNav = () => {
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
						<Link href="/establishment" className="text-gray-600 text-sm">
							Home
						</Link>
						<Link
							href="/establishment/privacy-policy"
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

export default EstablishmentNav;
