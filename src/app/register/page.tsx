import GradientBtn from '@/components/GradientBtn';
import { Card, CardBody } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

const Register = () => {
	return (
		<div className="w-full h-screen flex items-center justify-center bg-camiguin">
			<div className="bg-white w-[500px] p-4 rounded-md">
				<p className="text-center text-2xl font-bold text-primary mb-6">
					Select User
				</p>
				<div className="flex flex-col gap-y-4">
					<Link href={'/register/tourist'}>
						<GradientBtn label="Tourist" fullWidth={true} />
					</Link>
					<Link href={'/register/establishment'}>
						<GradientBtn label="Establishment" fullWidth={true} />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Register;
