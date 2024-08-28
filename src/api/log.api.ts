import { ILog } from '@/utils/interfaces';
import { api } from './axios';
import { apiErrorHandler } from '@/utils/shared';
import { ILogTest } from '@/stores/useLogStore';

export const createLog = async (log: ILogTest) => {
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
