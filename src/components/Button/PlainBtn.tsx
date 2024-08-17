import { IPlainBtnProps } from '@/utils/interfaces';
import { Button } from '@nextui-org/react';
import React from 'react';

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
