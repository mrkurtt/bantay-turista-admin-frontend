import { Button } from '@nextui-org/react';
import React, { MouseEventHandler } from 'react';

interface IGradientBtnProps {
	label: string;
	fullWidth: boolean;
	onClickHandler?: MouseEventHandler;
}

const GradientBtn = ({
	label,
	fullWidth,
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
