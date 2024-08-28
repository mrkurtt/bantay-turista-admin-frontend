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
import PlainBtn from '../Button/PlainBtn';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/useAuthStore';

const EstablishmentNav = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const handleOpen = () => {
		onOpen();
	};

	const router = useRouter();
	const { onLogout } = useAuthStore();

	const handleLogout = () => {
		onLogout();
		router.push('/');
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
				<NavbarItem>
					<div className="flex items-center">
						<div className="flex items-center ms-3">
							<div>
								<PlainBtn onClickHandler={handleLogout} label="Logout" />
							</div>
						</div>
					</div>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
};

export default EstablishmentNav;
