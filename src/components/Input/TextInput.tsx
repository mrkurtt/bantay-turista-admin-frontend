import { Input } from '@nextui-org/react';
import React from 'react';

interface ITextInputProps {
	label: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	type?: string;
	isReadOnly?: boolean;
	value?: string;
}

const TextInput = ({
	label,
	onChange,
	type = 'text',
	isReadOnly = false,
	value,
}: ITextInputProps) => {
	return (
		<Input
			type={type}
			isReadOnly={isReadOnly}
			onChange={onChange}
			radius="sm"
			value={value}
			variant="bordered"
			label={label}
		/>
	);
};

export default TextInput;
