'use client';

import React, { useEffect } from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import { useEstablishmentStore } from '@/stores/useEstablishmentStore';

const EstablishmentsTable = () => {
	const { getEstablishments, establishments } = useEstablishmentStore();

	useEffect(() => {
		getEstablishments();
	}, []);

	return (
		<>
			<div className="mb-4">
				<BreadCrumbs location="Establishments" />
			</div>

			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3">
								PHOTO
							</th>
							<th scope="col" className="px-6 py-3">
								NAME
							</th>
							<th scope="col" className="px-6 py-3">
								TYPE
							</th>
							<th scope="col" className="px-6 py-3">
								MUNICIPALITY
							</th>
							<th scope="col" className="px-6 py-3">
								BARANGAY
							</th>
							<th scope="col" className="px-6 py-3">
								COMPLETE ADDRESS
							</th>
							<th scope="col" className="px-6 py-3">
								CONTACT NUMBER
							</th>
							<th scope="col" className="px-6 py-3">
								EMAIL ADDRESS
							</th>
						</tr>
					</thead>
					<tbody>
						{establishments?.map((establishment) => (
							<tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
								<td className="px-6 py-4">
									<img src={`${establishment?.photo_url}`} alt="tourist" />
								</td>
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									{establishment?.establishment_name}
								</th>
								<td className="px-6 py-4">
									{establishment?.establishment_type}
								</td>
								<td className="px-6 py-4">
									{establishment?.city_municipality}
								</td>
								<td className="px-6 py-4">{establishment?.barangay}</td>
								<td className="px-6 py-4">{establishment?.complete_address}</td>
								<td className="px-6 py-4">{establishment?.contact_number}</td>
								<td className="px-6 py-4">{establishment?.email_address}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default EstablishmentsTable;
