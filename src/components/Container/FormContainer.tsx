import React from 'react';

const FormContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="w-full p-4 sm:p-8 md:p-12 lg:p-16 bg-white rounded-lg">
			{children}
		</div>
	);
};

export default FormContainer;
