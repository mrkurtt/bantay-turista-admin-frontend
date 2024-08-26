import {
	login,
	registerEstablishment,
	registerTourist,
	signup,
} from '@/api/auth.api';
import { IEstablishment, ITourist, IUser } from '@/utils/interfaces';
import { apiResponseHandler } from '@/utils/shared';
import { DateValue } from '@nextui-org/react';
import { create } from 'zustand';

export type AuthState = {
	loginLoading: boolean;
	signupLoading: boolean;
	touristRegLoading: boolean;
	establishmentRegLoading: boolean;
	t_regData: Object;
	e_regData: Object;
	r_username?: string;
	r_password?: string;
};

export type AuthActions = {
	submitLogin: (user: IUser) => Promise<any>;
	submitSignup: (user: IUser) => Promise<any>;
	submitTouristRegistration: (tourist: ITourist) => Promise<any>;
	submitEstablishmentRegistration: (
		establishment: IEstablishment
	) => Promise<any>;
	updateTRegData: (key: any, value: any) => void;
	updateTBirthdate: (value: DateValue) => void;
};

export const useAuthStore = create<AuthState & AuthActions>((set) => ({
	t_regData: {
		t_firstName: '',
		t_lastName: '',
		t_gender: '',
		t_nationality: '',
		t_birthdate: '',
		t_country: '',
		t_province: '',
		t_municipality: '',
		t_photoUrl: '',
		t_emailAddress: '',
		t_username: '',
		t_password: '',
		t_confirmPassword: '',
	},
	e_regData: {
		e_name: '',
		e_type: '',
		t_gender: '',
		t_nationality: '',
		t_birthdate: '',
		t_country: '',
		t_province: '',
		t_municipality: '',
	},

	r_username: '',
	r_password: '',

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

	updateTRegData: (key: any, value: any) => {
		set((state) => ({
			t_regData: {
				...state.t_regData,
				[key]: value,
			},
		}));
	},

	updateTBirthdate: (value) => {
		set((state) => ({
			t_regData: {
				...state.t_regData,
				t_birthdate: value,
			},
		}));
	},
}));
