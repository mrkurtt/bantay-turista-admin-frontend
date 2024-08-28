import { createLog, getLogs } from '@/api/log.api';
import { IEstablishment, ILog, ITourist } from '@/utils/interfaces';
import { apiResponseHandler } from '@/utils/shared';
import { create } from 'zustand';

interface ILogTest {
	tourist_id?: string;
	establishment_id?: string;
}

export type LogState = {
	logs?: ILog[];
	selectedTourist?: string;
	selectedEstablishment?: string;
};

export type LogActions = {
	getAllLogs: () => Promise<any>;
	sendLog: (log: ILogTest) => Promise<any>;
	onSelectTourist: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	onSelectEstablishment: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const useLogStore = create<LogState & LogActions>((set) => ({
	getAllLogs: async () => {
		const getLogsResponse = await getLogs();

		set(() => ({
			logs: getLogsResponse.logs,
		}));

		return getLogsResponse;
	},

	sendLog: async (log: ILogTest) => {
		const sendLogResponse = await createLog(log);
		apiResponseHandler(sendLogResponse);
		set(() => ({
			selectedTourist: '',
			selectedEstablishment: '',
		}));

		return sendLogResponse;
	},

	onSelectTourist: (event: React.ChangeEvent<HTMLSelectElement>) => {
		set(() => ({
			selectedTourist: event.target.value,
		}));
	},

	onSelectEstablishment: (event: React.ChangeEvent<HTMLSelectElement>) => {
		set(() => ({
			selectedEstablishment: event.target.value,
		}));
	},
}));
