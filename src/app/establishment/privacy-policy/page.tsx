'use client';

import PrivacyPolicy from '@/components/PrivacyPolicy';
import isAuth from '@/components/isAuth';
import React from 'react';

const EstablishmentPrivacyPolicy = () => {
	return <PrivacyPolicy />;
};

export default isAuth(EstablishmentPrivacyPolicy);
