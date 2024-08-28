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
import CustomModal from '@/components/Modal/CustomModal';
import GradientBtn from '@/components/Button/GradientBtn';
import AppLogo from './AppLogo';
import PlainBtn from '../Button/PlainBtn';

const Nav = () => {
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
					<div className="flex gap-x-3">
						<Button
							as={Link}
							variant="bordered"
							href="/"
							radius="sm"
							className="text-primary border border-primary"
						>
							Login
						</Button>
						<Button
							as={Link}
							color="primary"
							onPress={() => handleOpen()}
							variant="flat"
							radius="sm"
							className="bg-gradient-to-r from-primary to-secondary text-white"
						>
							Register
						</Button>
						<PlainBtn as={Link} href="/test" label="Test Entry Log" />
					</div>
				</NavbarItem>
			</NavbarContent>
			<CustomModal
				isOpen={isOpen}
				onClose={onClose}
				title="Select User Type"
				body={
					<>
						<div className="flex flex-col gap-y-4">
							<Link href={'/register/tourist/step-1'}>
								<GradientBtn label="Tourist" fullWidth={true} />
							</Link>
							<Link href={'/register/establishment/step-1'}>
								<GradientBtn label="Establishment" fullWidth={true} />
							</Link>
						</div>
					</>
				}
			/>
		</Navbar>
	);
};

export default Nav;
