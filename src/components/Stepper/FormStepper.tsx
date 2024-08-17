import { IStepperProps } from '@/utils/interfaces';
import Stepper from '@keyvaluesystems/react-stepper';
import React from 'react';

const FormStepper = ({ steps, currentStepIndex }: IStepperProps) => {
	return (
		<Stepper
			orientation="horizontal"
			steps={steps}
			currentStepIndex={currentStepIndex}
		/>
	);
};

export default FormStepper;
