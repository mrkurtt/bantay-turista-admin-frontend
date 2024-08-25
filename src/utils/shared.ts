import axios from 'axios';
import toast from 'react-hot-toast';

export const apiErrorHandler = (error: any) => {
	if (axios.isAxiosError(error)) {
		const response = error.response!;
		return response.data;
	}

	return error;
};

export const apiResponseHandler = (response: any) => {
	console.log(response);
	if (!response.success) {
		toast.error(response.message);
	} else if (response.success) {
		toast.success(response.message);
	}
};
