import React from 'react';

const Container = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="w-full px-4 sm:px-24 md:px-32 lg:px-64 pt-4 pb-12">
			{children}
		</div>
	);
};

export default Container;
