'use client';

import GradientBtn from '@/components/Button/GradientBtn';
import FormContainer from '@/components/Container/FormContainer';
import Container from '@/components/Container/LayoutContainer';
import PageTitle from '@/components/Text/PageTitle';
import { useComplaintStore } from '@/stores/useComplaintStore';
import { Textarea } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import isAuth from '@/utils/isAuth';

const Complaints = () => {
	const [complaint, setComplaint] = useState('');
	const { sendComplaint, complaintLoading } = useComplaintStore();

	const handleSubmit = async () => {
		if (complaint !== '') {
			const sendComplaintResponse = await sendComplaint({
				userId: `${Cookies.get('user_id')}`,
				description: complaint,
				resolved: false,
			});

			setComplaint('');
		}
	};

	return (
		<Container>
			<PageTitle title="Complaint" />
			<FormContainer>
				<div className="flex flex-col gap-y-6">
					<Textarea
						onValueChange={setComplaint}
						label="Complaint Description"
						placeholder="State your complaint."
						value={complaint}
					/>
					<GradientBtn
						onClickHandler={handleSubmit}
						isLoading={complaintLoading}
						fullWidth
						label="Submit Complaint"
					/>
				</div>
			</FormContainer>
		</Container>
	);
};

export default isAuth(Complaints);
