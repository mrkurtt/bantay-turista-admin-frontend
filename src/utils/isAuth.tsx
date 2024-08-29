'use client';

import { redirect, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { useAuthStore } from '@/stores/useAuthStore';

const isAuth = (WrappedComponent: React.ComponentType<any>) => {
	const ProtectRoute: React.FC = (props) => {
		const router = useRouter();

		let isAuthenticated = false;
		const token = Cookies.get('access_token');
		const role = Cookies.get('role');

		if (token) {
			isAuthenticated = true;
		}

		useEffect(() => {
			if (!isAuthenticated) {
				router.push('/');
			} else {
				router.push(`/${role}`);
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
