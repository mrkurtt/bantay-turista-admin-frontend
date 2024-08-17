import { Input } from '@nextui-org/react';
import React, { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

interface PasswordInputProps {
	label?: string;
	placeholder?: string;
	isReadOnly?: boolean;
	variant?: 'bordered' | 'filled' | 'underlined';
	value?: string;
	onChange?: (value: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
	label = 'Password',
	placeholder = 'Enter your password',
	isReadOnly = false,
	value,
	onChange,
}) => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [password, setPassword] = useState<string>(value || ''); // If value is passed, use it; otherwise, use internal state

	const toggleVisibility = () => setIsVisible(!isVisible);

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newPassword = e.target.value;
		setPassword(newPassword);

		if (onChange) {
			onChange(newPassword);
		}
	};

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
			value={password}
			onChange={handlePasswordChange}
		/>
	);
};

export default PasswordInput;
