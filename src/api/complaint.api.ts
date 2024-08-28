import { IComplaint } from '@/utils/interfaces';
import { api } from './axios';
import { apiErrorHandler } from '@/utils/shared';

export const createComplaint = async (complaint: IComplaint) => {
	try {
		const { data } = await api.post(
			`/complaint/${complaint.userId}`,
			complaint
		);

		return data;
	} catch (error: any) {
		return apiErrorHandler(error);
	}
};

export const getComplaints = async () => {
	try {
		const { data } = await api.get(`/complaint`);

		return data;
	} catch (error: any) {
		return apiErrorHandler(error);
	}
};
