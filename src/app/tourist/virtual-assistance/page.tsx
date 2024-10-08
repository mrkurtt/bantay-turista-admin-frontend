'use client';

import Container from '@/components/Container/LayoutContainer';
import EmergencyContacts from '@/components/VirtualAssistance/EmergencyContacts';
import TouristSpots from '@/components/VirtualAssistance/TouristSpots';
import isAuth from '@/components/isAuth';
import React from 'react';

const VirtualAssistance = () => {
	return (
		<Container>
			<div className="flex flex-col gap-y-8">
				<TouristSpots />
				<EmergencyContacts />
			</div>
		</Container>
	);
};

export default isAuth(VirtualAssistance);
