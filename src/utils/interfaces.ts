import { MouseEventHandler } from 'react';

export interface IGradientBtnProps {
	label: string;
	fullWidth?: boolean;
	onClickHandler?: MouseEventHandler;
}

export interface IPlainBtnProps extends IGradientBtnProps {}

export interface IPasswordInputProps {
	label?: string;
	placeholder?: string;
	isReadOnly?: boolean;
	variant?: 'bordered' | 'filled' | 'underlined';
	value?: string;
	onChange?: (value: string) => void;
}

export interface ITextInputProps {
	label: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	type?: string;
	isReadOnly?: boolean;
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
	isReadOnly?: boolean;
}

export interface IURLBasedImageProps {
	imageUrl: string;
}
