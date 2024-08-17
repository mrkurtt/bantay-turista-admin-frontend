import React from 'react';
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
} from '@nextui-org/react';
import { IModalProps } from '@/utils/interfaces';

const CustomModal = ({ title, body, isOpen, onClose, footer }: IModalProps) => {
	return (
		<Modal size={'lg'} isOpen={isOpen} onClose={onClose}>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
						<ModalBody>{body}</ModalBody>
						<ModalFooter>{footer}</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
};

export default CustomModal;
