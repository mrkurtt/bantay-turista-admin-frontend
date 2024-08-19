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
						<Link
							href="/tourist/privacy-policy"
							className="text-gray-600 text-sm"
						>
							Privacy Policy
						</Link>
						{/* <Button
							as={Link}
							variant="bordered"
							href="/tourist"
							radius="sm"
							className="text-primary border border-primary"
						>
							Home
						</Button>
						<Button
							as={Link}
							color="primary"
							onPress={() => handleOpen()}
							variant="flat"
							radius="sm"
							className="bg-gradient-to-r from-primary to-secondary text-white"
						>
							Virtual Assistance
						</Button> */}
					</div>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
};

export default TouristNav;
