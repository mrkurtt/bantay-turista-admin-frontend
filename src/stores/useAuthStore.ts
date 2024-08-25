import {
	login,
	registerEstablishment,
	registerTourist,
	signup,
} from '@/api/auth.api';
import { IEstablishment, ITourist, IUser } from '@/utils/interfaces';
import { apiResponseHandler } from '@/utils/shared';
import { create } from 'zustand';

export type AuthState = {
	loginLoading: boolean;
	signupLoading: boolean;
	touristRegLoading: boolean;
	establishmentRegLoading: boolean;
};

export type AuthActions = {
	submitLogin: (user: IUser) => Promise<any>;
	submitSignup: (user: IUser) => Promise<any>;
	submitTouristRegistration: (tourist: ITourist) => Promise<any>;
	submitEstablishmentRegistration: (
		establishment: IEstablishment
	) => Promise<any>;
};

export const useAuthStore = create<AuthState & AuthActions>((set) => ({
	loginLoading: false,
	signupLoading: false,
	touristRegLoading: false,
	establishmentRegLoading: false,

	submitLogin: async (user: IUser) => {
		set(() => ({
			loginLoading: true,
		}));

		const authenticatedUser = await login(user);

		apiResponseHandler(authenticatedUser);

		set(() => ({
			loginLoading: false,
		}));

		return authenticatedUser;
	},

	submitSignup: async (user: IUser) => {
		set(() => ({
			signupLoading: true,
		}));

		const newUser = await signup(user);

		apiResponseHandler(newUser);

		set(() => ({
			signupLoading: false,
		}));

		return newUser;
	},

	submitTouristRegistration: async (tourist: ITourist) => {
		set(() => ({
			touristRegLoading: true,
		}));

		const newTourist = await registerTourist(tourist);
		apiResponseHandler(newTourist);

		set(() => ({
			touristRegLoading: false,
		}));

		return newTourist;
	},

	submitEstablishmentRegistration: async (establishment: IEstablishment) => {
		set(() => ({
			establishmentRegLoading: true,
		}));

		const newEstablishment = await registerEstablishment(establishment);
		apiResponseHandler(newEstablishment);

		set(() => ({
			establishmentRegLoading: false,
		}));

		return newEstablishment;
	},
}));
