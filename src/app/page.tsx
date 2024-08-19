import { Button, Input } from '@nextui-org/react';

import { bgGradient } from '@/utils/color';
import LoginForm from '@/forms/LoginForm';
import Nav from '@/components/Navbar/Nav';
import Container from '@/components/Container/LayoutContainer';

export default function Home() {
	return (
		<main>
			<Nav />
			<div className="bg-camiguin w-full h-screen flex justify-center items-center">
				<Container>
					<LoginForm />
				</Container>
			</div>
		</main>
	);
}
