'use client';
import React, { useEffect } from 'react';
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	getKeyValue,
} from '@nextui-org/react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import { useComplaintStore } from '@/stores/useComplaintStore';

const rows = [
	{
		key: '1',
		name: 'Tony Reichert',
		role: 'CEO',
		status: 'Active',
	},
	{
		key: '2',
		name: 'Zoey Lang',
		role: 'Technical Lead',
		status: 'Paused',
	},
	{
		key: '3',
		name: 'Jane Fisher',
		role: 'Senior Developer',
		status: 'Active',
	},
	{
		key: '4',
		name: 'William Howard',
		role: 'Community Manager',
		status: 'Vacation',
	},
];

const columns = [
	{
		key: 'name',
		label: 'NAME',
	},
	{
		key: 'role',
		label: 'ROLE',
	},
	{
		key: 'status',
		label: 'STATUS',
	},
];

const ComplaintsTable = () => {
	const { getAllComplaints, complaints } = useComplaintStore();
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
						{complaints?.map((complaint) => (
							<tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									{complaint?.tourist_id?.first_name} &nbsp;
									{complaint?.tourist_id?.last_name}
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
