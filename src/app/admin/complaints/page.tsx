'use client';

import ComplaintsTable from '@/components/Table/ComplaintsTable';
import isAuth from '@/utils/isAuth';
import React from 'react';

const ComplaintsList = () => {
	return (
		<div>
			<ComplaintsTable />
		</div>
	);
};

export default isAuth(ComplaintsList);
