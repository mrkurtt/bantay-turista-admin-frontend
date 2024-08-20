import { IEmergencyContactProps } from '@/utils/interfaces';
import { Card, CardBody } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const EmergencyContactCard = ({
	agency_name,
	photo_url,
	phone_number,
}: IEmergencyContactProps) => {
	return (
		<Card>
			<CardBody className="px-4">
				<div className="flex gap-x-4">
					<div className="flex items-center">
						<div className="flex items-center w-12 h-12">
							<Image
								src={photo_url}
								alt="External Image"
								unoptimized
								width={100}
								height={100}
							/>
						</div>
					</div>

					<div className="mt-2">
						<h1 className="font-semibold text-lg text-primary">
							{agency_name}
						</h1>
						<p className="text-sm">{phone_number}</p>
					</div>
				</div>
			</CardBody>
		</Card>
	);
};

export default EmergencyContactCard;
