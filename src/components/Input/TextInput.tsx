import { Input } from '@nextui-org/react';
import React from 'react';

interface ITextInputProps {
	label: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	type?: string;
}

const TextInput = ({ label, onChange, type = 'text' }: ITextInputProps) => {
	return (
		<Input
			type={type}
			onChange={onChange}
			radius="sm"
			variant="bordered"
			label={label}
		/>
	);
};

export default TextInput;
