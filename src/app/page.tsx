import { Button, Input } from '@nextui-org/react';

import { bgGradient } from '@/utils/color';
import LoginForm from '@/forms/LoginForm';
import Nav from '@/components/Navbar/Nav';
import Container from '@/components/Container/LayoutContainer';

export default function Home() {
	return (
		<main>
			<Nav />
			<div className="bg-camiguin w-full px-[10px] sm:px-[100px] md:px-[200px]  lg:px-[400px] h-screen flex justify-center items-center">
				<LoginForm />
			</div>
		</main>
	);
}
