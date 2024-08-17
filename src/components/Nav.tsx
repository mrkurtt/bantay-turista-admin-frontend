import React from 'react';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
} from '@nextui-org/react';

const Nav = () => {
	return (
		<Navbar isBordered maxWidth="full">
			<NavbarBrand>
				<p className="font-bold sm:text-lg md:text-xl lg:text-2xl text-primary">
					<span className="text-orange-600">Bantay</span> Turista
				</p>
			</NavbarBrand>

			<NavbarContent justify="end">
				{/* <NavbarItem className="hidden lg:flex"></NavbarItem> */}
				<NavbarItem>
					<div className="flex gap-x-3">
						<Button
							as={Link}
							variant="bordered"
							href="/"
							className="text-primary border border-primary"
						>
							Login
						</Button>
						<Button
							as={Link}
							color="primary"
							href="/register"
							variant="flat"
							className="bg-gradient-to-r from-primary to-secondary text-white"
						>
							Register
						</Button>
					</div>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
};

export default Nav;
