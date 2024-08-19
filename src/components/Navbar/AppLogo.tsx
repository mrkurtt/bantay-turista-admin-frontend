import Link from 'next/link';
import React from 'react';

const AppLogo = () => {
	return (
		<Link href="/">
			<p className="font-bold sm:text-lg md:text-xl lg:text-2xl text-primary">
				<span className="text-orange-600">Bantay</span> Turista
			</p>
		</Link>
	);
};

export default AppLogo;
