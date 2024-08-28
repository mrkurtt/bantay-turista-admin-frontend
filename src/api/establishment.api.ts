import { apiErrorHandler } from '@/utils/shared';
import { api } from './axios';

export const getEstablishment = async (userId: string | undefined) => {
	try {
		const { data } = await api.get(`/establishment/${userId}`);
		return data;
	} catch (error: any) {
		return apiErrorHandler(error);
	}
};

export const getAllEstablishments = async () => {
	try {
		const { data } = await api.get(`/establishment`);
		return data;
	} catch (error: any) {
		return apiErrorHandler(error);
	}
};

export const updateEstablishment = async (
	userId: string,
	updateData: Object
) => {
	try {
		const { data } = await api.put(`/establishment/${userId}`, updateData);
		return data;
	} catch (error: any) {
		return apiErrorHandler(error);
	}
};
