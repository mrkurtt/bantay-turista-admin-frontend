import GradientBtn from '@/components/Button/GradientBtn';
import FormContainer from '@/components/Container/FormContainer';
import Container from '@/components/Container/LayoutContainer';
import PageTitle from '@/components/Text/PageTitle';
import { Textarea } from '@nextui-org/react';
import React from 'react';

const Complaints = () => {
	return (
		<Container>
			<FormContainer>
				<PageTitle title="Complaint" />
				<div className="flex flex-col gap-y-6">
					<Textarea
						label="Complaint Description"
						placeholder="State your complaint."
					/>
					<GradientBtn fullWidth label="Submit Complaint" />
				</div>
			</FormContainer>
		</Container>
	);
};

export default Complaints;
