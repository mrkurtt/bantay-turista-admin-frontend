'use client';

import ContactsTable from '@/components/Table/ContactsTable';
import isAuth from '@/utils/isAuth';
import React from 'react';

const EmergencyContactList = () => {
	return (
		<div>
			<ContactsTable />
		</div>
	);
};

export default isAuth(EmergencyContactList);
