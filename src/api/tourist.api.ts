import { api } from './axios';
import { apiErrorHandler } from '@/utils/shared';

export const getTourist = async (id: string | undefined) => {
	try {
		const { data } = await api.get(`/tourist/${id}/profile`);
		return data;
	} catch (error: any) {
		return apiErrorHandler(error);
	}
};

export const getAllTourists = async () => {
	try {
		const { data } = await api.get(`/tourist/list`);
		return data;
	} catch (error: any) {
		return apiErrorHandler(error);
	}
};

export const updateTourist = async (id: string, updateData: Object) => {
	try {
		const { data } = await api.put(`/tourist/${id}/profile/update`, updateData);
		return data;
	} catch (error: any) {
		return apiErrorHandler(error);
	}
};
