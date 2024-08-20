import { IPageTitleProps } from '@/utils/interfaces';
import React from 'react';

const PageTitle = ({ title }: IPageTitleProps) => {
	return (
		<div className="flex justify-center">
			<h1 className="text-gray-700 font-bold text-2xl mb-4">{title}</h1>
		</div>
	);
};

export default PageTitle;
