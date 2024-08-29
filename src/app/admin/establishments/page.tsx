'use client';

import EstablishmentsTable from '@/components/Table/EstablishmentsTable';
import isAuth from '@/utils/isAuth';
import React from 'react';

const EstablishmentList = () => {
	return (
		<div>
			<EstablishmentsTable />
		</div>
	);
};

export default isAuth(EstablishmentList);
