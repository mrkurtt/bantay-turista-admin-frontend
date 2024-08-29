'use client';

import EntryLogsTable from '@/components/Table/EntryLogsTable';
import isAuth from '@/utils/isAuth';
import React from 'react';

const AdminHome = () => {
	return (
		<div>
			<EntryLogsTable />
		</div>
	);
};

export default isAuth(AdminHome);
