import { createComplaint, getComplaints } from '@/api/complaint.api';
import { IComplaint } from '@/utils/interfaces';
import { create } from 'zustand';
import Cookies from 'js-cookie';
import { apiResponseHandler } from '@/utils/shared';

export type ComplaintState = {
	complaints?: IComplaint[];
	complaint?: IComplaint;
	complaintLoading: boolean;
};

export type ComplaintActions = {
	sendComplaint: (complaint: IComplaint) => Promise<any>;
	getAllComplaints: () => Promise<any>;
};

export const useComplaintStore = create<ComplaintState & ComplaintActions>(
	(set) => ({
		complaints: [],
		complaint: {
			userId: '',
			description: '',
			resolved: false,
		},
		complaintLoading: false,
		sendComplaint: async (complaint: IComplaint) => {
			set(() => ({
				complaintLoading: true,
			}));

			const sendComplaintResponse = await createComplaint(complaint);
			apiResponseHandler(sendComplaintResponse);

			set(() => ({
				complaintLoading: false,
			}));

			return sendComplaintResponse;
		},
		getAllComplaints: async () => {
			set(() => ({
				complaintLoading: true,
			}));

			const getAllComplaintsResponse = await getComplaints();

			set(() => ({
				complaints: getAllComplaintsResponse.complaints,
			}));

			set(() => ({
				complaintLoading: false,
			}));

			return getAllComplaintsResponse;
		},
	})
);
