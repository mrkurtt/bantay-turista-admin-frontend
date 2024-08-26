import { IPasswordInputProps } from '@/utils/interfaces';
import { Input } from '@nextui-org/react';
import React, { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const PasswordInput: React.FC<IPasswordInputProps> = ({
	label = 'Password',
	placeholder = 'Enter your password',
	isReadOnly = false,
	value,
	name,
	onChange,
}) => {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const toggleVisibility = () => setIsVisible(!isVisible);

	return (
		<Input
			label={label}
			placeholder={placeholder}
			isReadOnly={isReadOnly}
			radius="sm"
			variant={'bordered'}
			endContent={
				<button
					className="focus:outline-none"
					type="button"
					onClick={toggleVisibility}
					aria-label="toggle password visibility"
				>
					{isVisible ? (
						<IoMdEye className="text-primary" size={20} />
					) : (
						<IoMdEyeOff className="text-primary" size={20} />
					)}
				</button>
			}
			type={isVisible ? 'text' : 'password'}
			name={name}
			onChange={onChange}
		/>
	);
};

export default PasswordInput;
