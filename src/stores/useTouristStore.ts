import { getAllTourists, getTourist, updateTourist } from '@/api/tourist.api';
import { ITourist } from '@/utils/interfaces';
import { apiResponseHandler } from '@/utils/shared';
import { create } from 'zustand';

export type TouristState = {
	tourists?: ITourist[];
	touristDetails?: ITourist;
	isLoading?: boolean;
};

export type TouristActions = {
	getTouristDetails: (userId: string | undefined) => Promise<any>;
	getTourists: () => Promise<any>;
	updateTouristDetails: (touristId: string, updateData: Object) => Promise<any>;
};

export const useTouristStore = create<TouristState & TouristActions>((set) => ({
	getTourists: async () => {
		const allTourists = await getAllTourists();
		apiResponseHandler(allTourists);

		set(() => ({
			tourists: allTourists,
		}));

		return allTourists;
	},

	getTouristDetails: async (userId: string | undefined) => {
		const touristData = await getTourist(userId);
		// apiResponseHandler(touristData);

		set(() => ({
			touristDetails: touristData.tourist,
		}));

		return touristData;
	},

	updateTouristDetails: async (touristId: string, updateData: Object) => {
		set(() => ({
			isLoading: true,
		}));

		const updatedTourist = await updateTourist(touristId, updateData);
		apiResponseHandler(updatedTourist);

		set(() => ({
			isLoading: false,
		}));
		return updatedTourist;
	},
}));
