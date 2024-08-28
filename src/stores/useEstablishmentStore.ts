import {
	getAllEstablishments,
	getEstablishment,
	updateEstablishment,
} from '@/api/establishment.api';
import { IEstablishment } from '@/utils/interfaces';
import { apiResponseHandler } from '@/utils/shared';
import { create } from 'zustand';

export type EstablishmentState = {
	establishments?: IEstablishment[];
	establishmentDetails?: IEstablishment;
	isLoading?: boolean;
};

export type EstablishmentActions = {
	getEstablishmentDetails: (userId: string | undefined) => Promise<any>;
	getEstablishments: () => Promise<any>;
	updateEstablishmentDetails: (
		establishmentId: string,
		updateData: Object
	) => Promise<any>;
};

export const useEstablishmentStore = create<
	EstablishmentState & EstablishmentActions
>((set) => ({
	getEstablishmentDetails: async (userId: string | undefined) => {
		const establishmentData = await getEstablishment(userId);
		// apiResponseHandler(establishmentData);

		set(() => ({
			establishmentDetails: establishmentData.establishment,
		}));

		return establishmentData;
	},
	getEstablishments: async () => {
		const allEstablishments = await getAllEstablishments();
		apiResponseHandler(allEstablishments);

		set(() => ({
			establishments: allEstablishments,
		}));

		return allEstablishments;
	},

	updateEstablishmentDetails: async (
		establishmentId: string,
		updateData: Object
	) => {
		set(() => ({
			isLoading: true,
		}));

		const updatedEstablishment = await updateEstablishment(
			establishmentId,
			updateData
		);
		apiResponseHandler(updatedEstablishment);

		set(() => ({
			isLoading: false,
		}));
		return updatedEstablishment;
	},
}));
