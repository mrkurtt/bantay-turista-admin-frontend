'use client';

import React, { useEffect } from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import { useLogStore } from '@/stores/useLogStore';
import moment from 'moment';

const EntryLogsTable = () => {
	const { getAllLogs, logs } = useLogStore((state) => state);

	useEffect(() => {
		getAllLogs();
	}, []);

	return (
		<>
			<div className="mb-4">
				<BreadCrumbs />
			</div>

			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3">
								DATE
							</th>
							<th scope="col" className="px-6 py-3">
								TIME
							</th>
							<th scope="col" className="px-6 py-3">
								QR CODE
							</th>
							<th scope="col" className="px-6 py-3">
								TOURIST NAME
							</th>
							<th scope="col" className="px-6 py-3">
								ESTABLISHMENT
							</th>
						</tr>
					</thead>
					<tbody>
						{logs?.map((log, index) => (
							<tr
								key={`log-${index + 1}`}
								className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
							>
								<td className="px-6 py-4">
									{moment(log?.created_at).format('MMMM D, YYYY')}
								</td>
								<td className="px-6 py-4">
									{moment(log?.created_at).format('hh:mm A')}
								</td>
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									{log?.qr_code}
								</th>
								<td className="px-6 py-4">{log?.tourist?.name}</td>
								<td className="px-6 py-4">{log?.establishment?.name}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default EntryLogsTable;
