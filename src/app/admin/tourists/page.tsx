'use client';

import TouristsTable from '@/components/Table/TouristsTable';
import isAuth from '@/utils/isAuth';
import React from 'react';

const TouristList = () => {
	return (
		<div>
			<TouristsTable />
		</div>
	);
};

export default isAuth(TouristList);
