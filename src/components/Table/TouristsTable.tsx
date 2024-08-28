'use client';

import React, { useEffect } from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import { useTouristStore } from '@/stores/useTouristStore';

const TouristsTable = () => {
	const { getTourists, tourists } = useTouristStore();

	useEffect(() => {
		getTourists();
	}, []);

	return (
		<>
			<div className="mb-4">
				<BreadCrumbs location="Tourists" />
			</div>

			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3">
								QR CODE
							</th>
							<th scope="col" className="px-6 py-3">
								PHOTO
							</th>
							<th scope="col" className="px-6 py-3">
								FIRST NAME
							</th>
							<th scope="col" className="px-6 py-3">
								LAST NAME
							</th>
							<th scope="col" className="px-6 py-3">
								GENDER
							</th>
							<th scope="col" className="px-6 py-3">
								BIRTHDATE
							</th>
							<th scope="col" className="px-6 py-3">
								NATIONALITY
							</th>
							<th scope="col" className="px-6 py-3">
								COUNTRY
							</th>
							<th scope="col" className="px-6 py-3">
								PROVINCE
							</th>
							<th scope="col" className="px-6 py-3">
								CITY/MUNICIPALITY
							</th>
						</tr>
					</thead>
					<tbody>
						{tourists?.map((tourist) => (
							<tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									{tourist?.qr_code}
								</th>
								<td className="px-6 py-4">
									<img src={`${tourist?.photo_url}`} alt="tourist" />
								</td>
								<td className="px-6 py-4">{tourist?.first_name}</td>
								<td className="px-6 py-4">{tourist?.last_name}</td>
								<td className="px-6 py-4">{tourist?.gender}</td>
								<td className="px-6 py-4">{tourist?.birthdate}</td>
								<td className="px-6 py-4">{tourist?.nationality}</td>
								<td className="px-6 py-4">{tourist?.country}</td>
								<td className="px-6 py-4">{tourist?.province}</td>
								<td className="px-6 py-4">{tourist?.city_municipality}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default TouristsTable;
