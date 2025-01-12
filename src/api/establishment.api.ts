import { apiErrorHandler } from '@/utils/shared';
import { api } from './axios';

export const getEstablishment = async (id: string | undefined) => {
	try {
		const { data } = await api.get(`/establishment/${id}/profile`);
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

export const updateEstablishment = async (id: string, updateData: Object) => {
	try {
		const { data } = await api.put(
			`/establishment/${id}/profile/update`,
			updateData
		);
		return data;
	} catch (error: any) {
		return apiErrorHandler(error);
	}
};
