'use client';

import { useAuthStore } from '@/stores/useAuthStore';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

const isAuthenticated = false;

export default function isAuth(Component: any) {
	// const {checkAuth, isAuthenticated} = useAuthStore()

	return function IsAuth(props: any) {
		const auth = isAuthenticated;

		useEffect(() => {
			if (!auth) {
				return redirect('/');
			}
		}, []);

		if (!auth) {
			return null;
		}

		return <Component {...props} />;
	};
}
