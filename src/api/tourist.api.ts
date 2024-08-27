import { api } from './axios';
import { apiErrorHandler } from '@/utils/shared';

export const getTourist = async (userId: string | undefined) => {
	try {
		const { data } = await api.get(`/tourist/${userId}`);
		return data;
	} catch (error: any) {
		return apiErrorHandler(error);
	}
};

export const getAllTourists = async () => {
	try {
		const { data } = await api.get(`/tourist`);
		return data;
	} catch (error: any) {
		return apiErrorHandler(error);
	}
};

export const updateTourist = async (userId: string, updateData: Object) => {
	try {
		const { data } = await api.put(`/tourist/${userId}`, updateData);
		return data;
	} catch (error: any) {
		return apiErrorHandler(error);
	}
};
