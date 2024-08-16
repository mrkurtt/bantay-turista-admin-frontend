import { Button, Input } from '@nextui-org/react';

import { bgGradient } from '@/utils/color';
import LoginForm from '@/forms/LoginForm';

export default function Home() {
	return (
		<main>
			<div className="bg-camiguin w-full h-screen flex justify-center items-center">
				<LoginForm />

				{/* <div className="bg-white w-[500px] p-8 rounded-md">
					<h1 className="text-center text-primary font-bold text-2xl">LOGIN</h1>
					<div className="flex flex-col my-8">
						<Input
							className="mb-4"
							label="Username"
							placeholder="Enter your username"
						/>
						<Input label="Password" placeholder="Enter your password" />
					</div>
					<Button
						className={`bg-gradient-to-r from-primary to-secondary text-white`}
						fullWidth
					>
						Login
					</Button>
				</div> */}
			</div>
		</main>
	);
}
