import {
	CalendarDate,
	CalendarDateTime,
	ZonedDateTime,
} from '@internationalized/date';
import { As, DateValue } from '@nextui-org/react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { MouseEventHandler } from 'react';

export interface IUser {
	username?: string;
	password?: string;
	role?: 'tourist' | 'establishment' | 'admin';
}

export interface ILog {
	tourist_id?: ITourist;
	establishment_id?: IEstablishment;
	createdAt?: string;
}

export interface ITourist {
	first_name: string;
	last_name: string;
	email_address: string;
	gender: string;
	nationality: string;
	birthdate: string;
	country: string;
	province: string;
	city_municipality: string;
	photo_url: string;
	user_id: string;
	qr_code?: string;
}

export interface IEstablishment {
	establishment_name: string;
	establishment_type: string;
	city_municipality: string;
	barangay: string;
	complete_address: string;
	contact_number: string;
	email_address: string;
	photo_url: string;
	user_id: string;
}

export interface IComplaint {
	userId?: string;
	description?: string;
	tourist_id?: ITourist;
	resolved?: boolean;
}

export interface IGradientBtnProps {
	label: string;
	isDisabled?: boolean;
	fullWidth?: boolean;
	isLoading?: boolean;
	onClickHandler?: MouseEventHandler;
	as?: As<any> | undefined;
	href?: string;
}

export interface IPlainBtnProps extends IGradientBtnProps {}

export interface IPasswordInputProps {
	label?: string;
	placeholder?: string;
	isReadOnly?: boolean;
	variant?: 'bordered' | 'filled' | 'underlined';
	value?: string;
	name?: string | undefined;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ITextInputProps {
	label: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	type?: string;
	isReadOnly?: boolean;
	name?: string | undefined;
	value?: string;
}

export interface IModalProps {
	title: string;
	body: React.ReactNode;
	footer?: React.ReactNode;
	isOpen: boolean;
	onClose: () => void;
}

export interface Step {
	stepLabel: string;
	stepDescription: string;
	completed: boolean;
}

export interface IStepperProps {
	steps: Step[];
	currentStepIndex: number;
}

export interface IDatePickerProps {
	label: string;
	name?: string | undefined;
	isReadOnly?: boolean;
	value?: ZonedDateTime | CalendarDate | CalendarDateTime | undefined | null;
	dateChangeHandler?: (
		value: ZonedDateTime | CalendarDate | CalendarDateTime | undefined | null
	) => void;
}

export interface IURLBasedImageProps {
	imageUrl: string | StaticImport;
}

export interface ITouristRegFormProps {
	steps: Step[];
	currentStepIndex: number;
	passwordHandler?: React.ChangeEventHandler<HTMLInputElement>;
	confirmPasswordHandler?: React.ChangeEventHandler<HTMLInputElement>;
	nextStep: string;
}

export interface IPageTitleProps {
	title: string;
}

export interface IEmergencyContactProps {
	agency_name: string;
	photo_url: string;
	phone_number: string;
}

export interface ITouristSpotCardProps {
	name: string;
	description: string;
	photo_url: string;
}

export interface TRegData {
	firstName: string;
	lastName: string;
	gender: string;
	nationality: string;
	birthdate: string;
	country: string;
	province: string;
	municipality: string;
	photoUrl: string;
	image: string | undefined;
	imageFile: File | undefined;
	emailAddress: string;
	username: string;
	password: string;
	confirmPassword: string;
}

export interface EstablishmentRegData {
	establishmentName: string;
	establishmentType: string;
	cityMunicipality: string;
	barangay: string;
	completeAddress: string;
	contactNumber: string;
	emailAddress: string;
	username: string;
	password: string;
	image: string | undefined;
	imageFile: File | undefined;
	confirmPassword: string;
	photoUrl: string;
}
