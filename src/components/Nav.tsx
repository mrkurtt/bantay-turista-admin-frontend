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
				<p className="font-bold text-2xl text-primary">
					<span className="text-orange-600">Bantay</span> Turista
				</p>
			</NavbarBrand>

			<NavbarContent justify="end">
				<NavbarItem className="hidden lg:flex">
					<Link href="/">Login</Link>
				</NavbarItem>
				<NavbarItem>
					<Button
						as={Link}
						color="primary"
						href="/register"
						variant="flat"
						className="bg-gradient-to-r from-primary to-secondary text-white"
					>
						Register
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
};

export default Nav;
