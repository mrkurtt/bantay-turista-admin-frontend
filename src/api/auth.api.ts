import axios from 'axios';
import { api } from './axios';
import { apiErrorHandler } from '@/utils/shared';
import { IEstablishment, ITourist, IUser } from '@/utils/interfaces';
import Cookies from 'js-cookie';

export const signup = async (user: IUser) => {
	try {
		const { data } = await api.post('/auth/signup', user);
		return data;
	} catch (error: any) {
		return apiErrorHandler(error);
	}
};

export const login = async (user: IUser) => {
	try {
		const { data } = await api.post('/auth/login', user);

		Cookies.set('access_token', data.token, {
			expires: 7,
			secure: true,
		});

		Cookies.set('user_id', data.user_id, {
			expires: 7,
			secure: true,
		});

		return data;
	} catch (error) {
		return apiErrorHandler(error);
	}
};

export const registerTourist = async (tourist: ITourist) => {
	try {
		const { data } = await api.post('/tourist', tourist);
		return data;
	} catch (error) {
		return apiErrorHandler(error);
	}
};

export const registerEstablishment = async (establishment: IEstablishment) => {
	try {
		const { data } = await api.post('/establishment', establishment);
		return data;
	} catch (error) {
		return apiErrorHandler(error);
	}
};
