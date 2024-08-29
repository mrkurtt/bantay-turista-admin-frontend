'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

const isAuth = (WrappedComponent: React.ComponentType<any>) => {
	const ProtectRoute: React.FC = (props) => {
		const router = useRouter();
		const pathname = usePathname();

		console.log(pathname.split('/'));

		let isAuthenticated = false;
		const token = Cookies.get('access_token');
		const role = Cookies.get('role');

		if (token) {
			isAuthenticated = true;
		}

		useEffect(() => {
			if (!isAuthenticated) {
				router.push('/');
			} else if (token && role !== undefined) {
				if (pathname.split('/').length < 3) {
					router.push(`/${role}`);
				} else {
					router.push(`${pathname}`);
				}
			}
		}, [isAuthenticated]);

		return <WrappedComponent {...props} />;
	};

	ProtectRoute.displayName = `isAuth(${
		WrappedComponent.displayName || WrappedComponent.name
	})`;

	return ProtectRoute;
};

export default isAuth;
