import Stepper from '@keyvaluesystems/react-stepper';
import React from 'react';

interface Step {
	stepLabel: string;
	stepDescription: string;
	completed: boolean;
}

interface IStepperProps {
	steps: Step[];
	currentStepIndex: number;
}

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
