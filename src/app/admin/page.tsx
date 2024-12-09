'use client';

import EntryLogsTable from '@/components/Table/EntryLogsTable';
import isAuth from '@/components/isAuth';
import React from 'react';

const AdminHome = () => {
	return (
		<div>
			<EntryLogsTable />
		</div>
	);
};

export default isAuth(AdminHome);
