import React from 'react';
import { DatePicker } from '@nextui-org/react';
import { IDatePickerProps } from '@/utils/interfaces';

const CustomDatePicker = ({
	label,
	isReadOnly = false,
	name,
	dateChangeHandler,
}: IDatePickerProps) => {
	return (
		<div className="w-full flex flex-row gap-4">
			<DatePicker
				name={name}
				onChange={dateChangeHandler}
				label={label}
				variant="bordered"
				radius="sm"
				isReadOnly={isReadOnly}
				showMonthAndYearPickers
			/>
		</div>
	);
};

export default CustomDatePicker;
