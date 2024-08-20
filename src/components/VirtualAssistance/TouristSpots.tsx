import React from 'react';
import PageTitle from '../Text/PageTitle';
import FormContainer from '../Container/FormContainer';
import TouristSpotCard from './TouristSpotCard';

const spots = [
	{
		_id: '66bd5566679f7c8e5e24031a',
		name: 'Sunset Beach',
		description: 'A beautiful beach with stunning sunsets.',
		photo_url: 'https://gttp.imgix.net/223693/x/0/',
		createdAt: '2024-08-15T01:09:58.757Z',
		updatedAt: '2024-08-15T01:09:58.757Z',
		__v: 0,
	},
	{
		_id: '66bd55c6679f7c8e5e240326',
		name: 'Mountain View',
		description:
			'A serene spot offering panoramic views of the surrounding mountains.',
		photo_url: 'https://gttp.imgix.net/223693/x/0/',
		createdAt: '2024-08-15T01:11:34.890Z',
		updatedAt: '2024-08-15T01:11:34.890Z',
		__v: 0,
	},
	{
		_id: '66bd55f1679f7c8e5e240329',
		name: 'Old Town Square',
		description:
			'A historic square in the heart of the city, known for its beautiful architecture and historical significance.',
		photo_url: 'https://gttp.imgix.net/223693/x/0/',
		createdAt: '2024-08-15T01:12:17.612Z',
		updatedAt: '2024-08-15T01:12:17.612Z',
		__v: 0,
	},
	{
		_id: '66bd55fa679f7c8e5e24032b',
		name: 'Lake View',
		description:
			'A serene lake with crystal-clear waters, perfect for kayaking and picnicking.',
		photo_url: 'https://gttp.imgix.net/223693/x/0/',
		createdAt: '2024-08-15T01:12:26.160Z',
		updatedAt: '2024-08-15T01:13:00.599Z',
		__v: 0,
	},
	{
		_id: '66bd5627679f7c8e5e240331',
		name: 'Crystal Lake',
		description:
			'A serene lake with crystal-clear waters, perfect for kayaking and picnicking.',
		photo_url: 'https://gttp.imgix.net/223693/x/0/',
		createdAt: '2024-08-15T01:13:11.946Z',
		updatedAt: '2024-08-15T01:13:11.946Z',
		__v: 0,
	},
	{
		_id: '66bd5627679f7c8e5e240331',
		name: 'Crystal Lake',
		description:
			'A serene lake with crystal-clear waters, perfect for kayaking and picnicking.',
		photo_url: 'https://gttp.imgix.net/223693/x/0/',
		createdAt: '2024-08-15T01:13:11.946Z',
		updatedAt: '2024-08-15T01:13:11.946Z',
		__v: 0,
	},
];

const TouristSpots = () => {
	return (
		<>
			<PageTitle title="Tourist Spots" />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
				{spots.map((spot, index) => (
					<TouristSpotCard
						key={index}
						name={spot.name}
						description={spot.description}
						photo_url={spot.photo_url}
					/>
				))}
			</div>
		</>
	);
};

export default TouristSpots;
