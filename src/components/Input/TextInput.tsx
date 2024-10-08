import { ITextInputProps } from '@/utils/interfaces';
import { Input } from '@nextui-org/react';
import React from 'react';

const TextInput = ({
	label,
	onChange,
	type = 'text',
	isReadOnly = false,
	name,
	value,
}: ITextInputProps) => {
	return (
		<Input
			name={name}
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
