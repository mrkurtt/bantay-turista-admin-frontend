'use client';
import { IGradientBtnProps } from '@/utils/interfaces';
import { Button } from '@nextui-org/react';
import React from 'react';

const GradientBtn = ({
	label,
	fullWidth = false,
	isLoading = false,
	as,
	href,
	onClickHandler,
	isDisabled = false,
}: IGradientBtnProps) => {
	return (
		<Button
			onClick={onClickHandler}
			as={as}
			isDisabled={isDisabled}
			href={href}
			fullWidth={fullWidth}
			variant="flat"
			radius="sm"
			isLoading={isLoading}
			className="bg-gradient-to-r from-primary to-secondary text-white"
		>
			{label}
		</Button>
	);
};

export default GradientBtn;
