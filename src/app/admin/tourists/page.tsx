'use client';

import TouristsTable from '@/components/Table/TouristsTable';
import isAuth from '@/components/isAuth';
import React from 'react';

const TouristList = () => {
	return (
		<div>
			<TouristsTable />
		</div>
	);
};

export default isAuth(TouristList);
