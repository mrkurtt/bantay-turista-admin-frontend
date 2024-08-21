import React from 'react';
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react';

interface IBreadCrumbsProps {
	location?: string;
}

const BreadCrumbs = ({ location }: IBreadCrumbsProps) => {
	return (
		<Breadcrumbs size="lg">
			<BreadcrumbItem>Home</BreadcrumbItem>
			<BreadcrumbItem>{location}</BreadcrumbItem>
		</Breadcrumbs>
	);
};

export default BreadCrumbs;
