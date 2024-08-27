import { CalendarDate } from '@internationalized/date';

export const dateParser = (dateString: string | undefined) => {
	if (!dateString) return null;
	const [year, month, day] = dateString.split('-').map(Number);

	return new CalendarDate(year, month, day);
};
