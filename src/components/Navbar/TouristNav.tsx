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
import { useAuthStore } from '@/stores/useAuthStore';
import { useRouter } from 'next/navigation';

const TouristNav = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const handleOpen = () => {
		onOpen();
	};

	const router = useRouter();
	const { onLogout } = useAuthStore((state) => state);

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

export default TouristNav;
