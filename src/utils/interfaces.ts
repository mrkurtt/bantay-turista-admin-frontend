import {
	CalendarDate,
	CalendarDateTime,
	ZonedDateTime,
} from '@internationalized/date';
import { As, DateValue } from '@nextui-org/react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { MouseEventHandler } from 'react';

export interface IUser {
	name?: string;
	email?: string;
	password?: string;
	user_type?: number;
	role?: 'tourist' | 'establishment' | 'admin';
}

interface LogTouristDetails {
	id: number;
	name: string;
}

interface LogEstablishmentDetails {
	id: number;
	name: string;
}

export interface ILog {
	tourist_id?: ITourist;
	establishment_id?: IEstablishment;
	qr_code?: string;
	created_at?: string;
	tourist?: LogTouristDetails;
	establishment?: LogEstablishmentDetails;
}

export interface ITourist {
	_id?: string;
	first_name: string;
	last_name: string;
	email_address: string;
	gender: string;
	nationality: string;
	date_of_birth: string;
	country: string;
	state_province: string;
	city_municipality: string;
	photo_url: string;
	user_id: string;
	qr_code?: string;
}

export interface IEstablishment {
	_id?: string;
	name: string;
	establishment_type: string;
	city_municipality: string;
	barangay: string;
	complete_address: string;
	contact_number: string;
	email_address: string;
	photo_url: string;
	user_id: string;
	owner_name: string;
	owner_email: string;
	owner_phone: string;
}

interface ComplaintTouristDetails {
	first_name: string;
	last_name: string;
}

export interface IComplaint {
	userId?: string;
	description?: string;
	tourist?: ComplaintTouristDetails;
	resolved?: boolean;
	created_at?: string;
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
	first_name: string;
	last_name: string;
	gender: string;
	nationality: string;
	date_of_birth: string;
	address_1: string;
	address_2: string;
	contact_number: string;
	country: string;
	state_province: string;
	city_municipality: string;
	photoUrl: string;
	image: string | undefined;
	imageFile: File | undefined;
	email: string;
	username: string;
	password: string;
	confirmPassword: string;
}

export interface EstablishmentRegData {
	establishmentName: string;
	establishmentType: string;
	cityMunicipality: string;
	barangay: string;
	contactNumber: string;
	emailAddress: string;
	address_1: string;
	username: string;
	password: string;
	image: string | undefined;
	imageFile: File | undefined;
	confirmPassword: string;
	photoUrl: string;
	owner_name: string;
	owner_email: string;
	owner_phone: string;
	type: number | undefined;
}
