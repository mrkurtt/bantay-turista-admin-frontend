import { Card, CardBody, CardHeader } from '@nextui-org/react';
import React from 'react';
import Image from 'next/image';
import { ITouristSpotCardProps } from '@/utils/interfaces';

const TouristSpotCard = ({
	name,
	description,
	photo_url,
}: ITouristSpotCardProps) => {
	return (
		<Card>
			<CardBody>
				<Image
					src={photo_url}
					alt="External Image"
					unoptimized
					width={100}
					height={100}
					className="w-full h-full"
				/>

				<div className="mt-2">
					<h1 className="font-bold text-xl text-primary">{name}</h1>
					<p className="text-sm">{description}</p>
				</div>
			</CardBody>
		</Card>
	);
};

export default TouristSpotCard;
