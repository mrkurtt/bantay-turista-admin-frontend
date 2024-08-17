import { Button } from '@nextui-org/react';
import React, { MouseEventHandler } from 'react';

interface IPlainBtnProps {
	label: string;
	fullWidth?: boolean;
	onClickHandler?: MouseEventHandler;
}

const PlainBtn = ({
	label,
	fullWidth = false,
	onClickHandler,
}: IPlainBtnProps) => {
	return (
		<Button
			onClick={onClickHandler}
			fullWidth={fullWidth}
			variant="flat"
			radius="sm"
		>
			{label}
		</Button>
	);
};

export default PlainBtn;
