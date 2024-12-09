'use client';

import SpotsTable from '@/components/Table/SpotsTable';
import isAuth from '@/components/isAuth';
import React from 'react';

const TouristSpotList = () => {
	return (
		<div>
			<SpotsTable />
		</div>
	);
};

export default isAuth(TouristSpotList);
