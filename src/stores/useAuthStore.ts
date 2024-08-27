import {
	EstablishmentRegData,
	IEstablishment,
	ITourist,
	IUser,
	TRegData,
} from '@/utils/interfaces';
import { apiResponseHandler } from '@/utils/shared';
import { DateValue } from '@nextui-org/react';
import { create } from 'zustand';
import {
	login,
	registerEstablishment,
	registerTourist,
	signup,
	uploadImage,
} from '@/api/auth.api';

export type AuthState = {
	loginLoading: boolean;
	signupLoading: boolean;
	touristRegLoading: boolean;
	establishmentRegLoading: boolean;
	touristRegData: TRegData;
	establishmentRegData: EstablishmentRegData;
};

export type AuthActions = {
	submitLogin: (user: IUser) => Promise<any>;
	submitSignup: (user: IUser) => Promise<any>;
	submitTouristRegistration: (tourist: ITourist) => Promise<any>;
	submitEstablishmentRegistration: (
		establishment: IEstablishment
	) => Promise<any>;
	updateTRegData: (key: any, value: any) => void;
	updateERegData: (key: any, value: any) => void;
	// updateTBirthdate: (value: DateValue) => void;
	onUploadTouristImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onUploadEstablishmentImage: (
		event: React.ChangeEvent<HTMLInputElement>
	) => void;
	uploadToCloudinary: (file: File) => Promise<any>;
};

export const useAuthStore = create<AuthState & AuthActions>((set) => ({
	touristRegData: {
		firstName: '',
		lastName: '',
		gender: '',
		nationality: '',
		birthdate: '',
		country: '',
		image: undefined,
		imageFile: undefined,
		province: '',
		municipality: '',
		photoUrl: '',
		emailAddress: '',
		username: '',
		password: '',
		confirmPassword: '',
	},

	establishmentRegData: {
		establishmentName: '',
		establishmentType: '',
		cityMunicipality: '',
		barangay: '',
		completeAddress: '',
		contactNumber: '',
		image: undefined,
		imageFile: undefined,
		emailAddress: '',
		photoUrl: '',
		username: '',
		password: '',
		confirmPassword: '',
	},

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
			touristRegData: {
				...state.touristRegData,
				[key]: value,
			},
		}));
	},

	updateERegData: (key: any, value: any) => {
		set((state) => ({
			establishmentRegData: {
				...state.establishmentRegData,
				[key]: value,
			},
		}));
	},

	// updateTBirthdate: (value) => {
	// 	set((state) => ({
	// 		touristRegData: {
	// 			...state.touristRegData,
	// 			birthdate: value,
	// 		},
	// 	}));
	// },

	onUploadTouristImage: (event: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = event.target;

		if (files && files[0]) {
			set((state) => ({
				touristRegData: {
					...state.touristRegData,
					imageFile: files[0],
				},
			}));

			set((state) => ({
				touristRegData: {
					...state.touristRegData,
					image: URL.createObjectURL(files[0]),
				},
			}));
		}
	},

	onUploadEstablishmentImage: (event: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = event.target;

		if (files && files[0]) {
			set((state) => ({
				establishmentRegData: {
					...state.establishmentRegData,
					imageFile: files[0],
				},
			}));

			set((state) => ({
				establishmentRegData: {
					...state.establishmentRegData,
					image: URL.createObjectURL(files[0]),
				},
			}));
		}
	},

	uploadToCloudinary: (file: File) => {
		const url = uploadImage(file);
		return url;
	},
}));
