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

export const uploadImage = async (file: File) => {
	try {
		const data = new FormData();

		data.append('file', file);
		data.append(
			'upload_preset',
			`${process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}`
		);

		try {
			let cloudName = `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}`;
			let resourceType = 'image';
			let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

			const res = await axios.post(api, data);
			const { secure_url } = res.data;
			console.log(secure_url);

			return secure_url;
		} catch (error) {
			console.error(error);
		}
	} catch (error) {
		return apiErrorHandler(error);
	}
};
