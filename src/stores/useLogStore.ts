import { createLog, getLogs } from '@/api/log.api';
import { IEstablishment, ILog, ITourist } from '@/utils/interfaces';
import { create } from 'zustand';

export type LogState = {
	logs?: ILog[];
};

export type LogActions = {
	getAllLogs: () => Promise<any>;
	sendLog: (log: ILog) => Promise<any>;
};

export const useLogStore = create<LogState & LogActions>((set) => ({
	getAllLogs: async () => {
		const getLogsResponse = await getLogs();

		set(() => ({
			logs: getLogsResponse.logs,
		}));

		return getLogsResponse;
	},

	sendLog: async (log: ILog) => {
		const sendLogResponse = await createLog(log);

		return sendLogResponse;
	},
}));
