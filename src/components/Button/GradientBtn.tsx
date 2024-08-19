import { IGradientBtnProps } from '@/utils/interfaces';
import { Button } from '@nextui-org/react';
import React from 'react';

const GradientBtn = ({
	label,
	fullWidth = false,
	onClickHandler,
}: IGradientBtnProps) => {
	return (
		<Button
			onClick={onClickHandler}
			fullWidth={fullWidth}
			variant="flat"
			radius="sm"
			className="bg-gradient-to-r from-primary to-secondary text-white"
		>
			{label}
		</Button>
	);
};

export default GradientBtn;
