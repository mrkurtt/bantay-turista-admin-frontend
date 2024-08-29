import React from 'react';
import PageTitle from '../Text/PageTitle';
import FormContainer from '../Container/FormContainer';
import TouristSpotCard from './TouristSpotCard';

const spots = [
	{
		name: 'White Island',
		description:
			'A pristine, uninhabited white sandbar offering stunning views of Mt. Hibok-Hibok.',
		photo_url:
			'https://www.nopostcode.com/wp-content/uploads/2022/05/White-Island-Camiguin-14.jpg',
	},
	{
		name: 'Katibawasan Falls',
		description:
			'A majestic waterfall cascading from 250 feet, surrounded by lush greenery.',
		photo_url:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQryoUJNgdDyd8-UecPVaA9y74Rm-K0b4usEw&s',
	},
	{
		name: 'Sunken Cemetery',
		description:
			'A cemetery submerged by volcanic activity, marked by a large cross rising from the sea.',
		photo_url:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2VC6HMmwVZjFN6_IcDXPF1l4S7lFcVwMiAw&s',
	},
	{
		name: 'Tuasan Falls',
		description:
			'A hidden waterfall with a serene, natural pool, perfect for swimming.',
		photo_url:
			'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/93/e5/a4/photo0jpg.jpg?w=600&h=500&s=1',
	},
	{
		name: 'Mantigue Island',
		description:
			'A small island with white sandy beaches and a rich marine sanctuary for snorkeling.',
		photo_url:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXx23072bNLuKqOUOjJO0_dZmyden2SLbXg&s',
	},
	{
		name: 'Ardent Hot Spring',
		description:
			'A natural hot spring nestled in a tropical forest, ideal for relaxation.',
		photo_url:
			'https://mambajao.gov.ph/wp-content/uploads/2022/09/ardent-1.jpg',
	},
	{
		name: 'Giant Clam Sanctuary',
		description:
			'A sanctuary home to giant clams and vibrant coral reefs, offering guided tours.',
		photo_url:
			'https://i.pinimg.com/736x/bf/ae/b1/bfaeb16d3d95a851f06d9677f3af9ffc.jpg',
	},
	{
		name: 'Guiob Church Ruins',
		description:
			'The remains of an old Spanish church destroyed by volcanic eruptions in the 1870s.',
		photo_url:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZz_xkGyOxz7qbMlqg-wRuE4iWVyQFARVChXo2eNB96-VkQ0jUNROzkKPTjL0ZVbJKWDU&usqp=CAU',
	},
	{
		name: 'Mt. Hibok-Hibok',
		description:
			'An active stratovolcano offering challenging hikes with rewarding views of the island.',
		photo_url:
			'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/8d/d2/69/mt-hibok-hibok.jpg?w=1200&h=-1&s=1',
	},
	{
		name: 'Sto. Niño Cold Spring',
		description:
			'A refreshing cold spring with crystal-clear waters and lush surroundings.',
		photo_url:
			'https://images.hive.blog/1200x630/https://cdn.liketu.com/media/godlovermel25/images/clhqacyqq00pr4nsz0qv43a5i_2/clhqacyqq00pr4nsz0qv43a5i_2.webp',
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
