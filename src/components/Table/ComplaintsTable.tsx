'use client';

import React, { useEffect } from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import { useComplaintStore } from '@/stores/useComplaintStore';
import moment from 'moment';

const ComplaintsTable = () => {
	const { getAllComplaints, complaints } = useComplaintStore((state) => state);
	useEffect(() => {
		getAllComplaints();
	}, []);

	return (
		<>
			<div className="mb-4">
				<BreadCrumbs location="Complaints" />
			</div>

			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3">
								DATE SUBMITTED
							</th>
							<th scope="col" className="px-6 py-3">
								TOURIST NAME
							</th>
							<th scope="col" className="px-6 py-3">
								COMPLAINT
							</th>
							<th scope="col" className="px-6 py-3">
								STATUS
							</th>
						</tr>
					</thead>
					<tbody>
						{complaints?.map((complaint, index) => (
							<tr
								key={`complaint-${index + 1}`}
								className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
							>
								<td className="px-6 py-4">
									{moment(complaint?.created_at).format('MMMM d, YYYY')}
								</td>
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									{complaint?.tourist?.first_name} &nbsp;
									{complaint?.tourist?.last_name}
								</th>
								<td className="px-6 py-4">{complaint?.description}</td>
								<td className="px-6 py-4">
									{complaint?.resolved ? 'Resolved' : 'Pending'}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default ComplaintsTable;
