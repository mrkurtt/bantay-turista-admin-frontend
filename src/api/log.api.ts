import { ILog } from '@/utils/interfaces';
import { api } from './axios';
import { apiErrorHandler } from '@/utils/shared';

export const createLog = async (log: ILog) => {
	try {
		const { data } = await api.post(`/log`, log);

		return data;
	} catch (error: any) {
		return apiErrorHandler(error);
	}
};

export const getLogs = async () => {
	try {
		const { data } = await api.get(`/log`);

		return data;
	} catch (error: any) {
		return apiErrorHandler(error);
	}
};
