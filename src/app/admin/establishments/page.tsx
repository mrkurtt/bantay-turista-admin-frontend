'use client';

import EstablishmentsTable from '@/components/Table/EstablishmentsTable';
import isAuth from '@/components/isAuth';
import React from 'react';

const EstablishmentList = () => {
	return (
		<div>
			<EstablishmentsTable />
		</div>
	);
};

export default isAuth(EstablishmentList);
