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
	if (response.status || response.success) {
		toast.success(response.message);
	} else {
		toast.error(response.message);
	}
};
