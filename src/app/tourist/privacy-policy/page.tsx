'use client';

import PrivacyPolicy from '@/components/PrivacyPolicy';
import isAuth from '@/utils/isAuth';
import React from 'react';

const TouristPrivacyPolicy = () => {
	return <PrivacyPolicy />;
};

export default isAuth(TouristPrivacyPolicy);
