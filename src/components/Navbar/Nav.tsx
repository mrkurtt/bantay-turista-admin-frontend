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

const Nav = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const handleOpen = () => {
		onOpen();
	};

	return (
		<Navbar isBordered maxWidth="full">
			<NavbarBrand>
				<Link href="/">
					<p className="font-bold sm:text-lg md:text-xl lg:text-2xl text-primary">
						<span className="text-orange-600">Bantay</span> Turista
					</p>
				</Link>
			</NavbarBrand>

			<NavbarContent justify="end">
				{/* <NavbarItem className="hidden lg:flex"></NavbarItem> */}
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
							<Link href={'/register/establishment'}>
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
