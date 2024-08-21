'use client';

import React from 'react';
import AppLogo from './AppLogo';
import PlainBtn from '../Button/PlainBtn';
import { GiSchoolBag } from 'react-icons/gi';
import { FaStoreAlt } from 'react-icons/fa';
import { IoQrCode } from 'react-icons/io5';
import { IoMdPin } from 'react-icons/io';
import { FaSquarePhone } from 'react-icons/fa6';
import { TbMessageReportFilled } from 'react-icons/tb';

const sidebarItems = [
	{
		title: 'Entry Logs',
		icon: <IoQrCode size={20} className="text-primary" />,
		href: '/admin',
	},
	{
		title: 'Tourists',
		icon: <GiSchoolBag size={20} className="text-primary" />,
		href: '/admin/tourists',
	},
	{
		title: 'Establishments',
		icon: <FaStoreAlt size={20} className="text-primary" />,
		href: '/admin/establishments',
	},
	{
		title: 'VA: Tourist Spots',
		icon: <IoMdPin size={20} className="text-primary" />,
		href: '/admin/tourist-spots',
	},
	{
		title: 'VA: Emergency Contacts',
		icon: <FaSquarePhone size={20} className="text-primary" />,
		href: '/admin/emergency-contacts',
	},
	{
		title: 'Complaints',
		icon: <TbMessageReportFilled size={20} className="text-primary" />,
		href: '/admin/complaints',
	},
];

const AdminNav = () => {
	return (
		<div>
			<nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
				<div className="px-3 py-3 lg:px-5 lg:pl-3">
					<div className="flex items-center justify-between">
						<div className="flex items-center justify-start rtl:justify-end">
							<button
								data-drawer-target="logo-sidebar"
								data-drawer-toggle="logo-sidebar"
								aria-controls="logo-sidebar"
								type="button"
								className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							>
								<span className="sr-only">Open sidebar</span>
								<svg
									className="w-6 h-6"
									aria-hidden="true"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										clipRule="evenodd"
										fillRule="evenodd"
										d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
									></path>
								</svg>
							</button>

							<AppLogo />
						</div>
						<div className="flex items-center">
							<div className="flex items-center ms-3">
								<div>
									<PlainBtn label="Logout" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>

			<aside
				id="logo-sidebar"
				className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
				aria-label="Sidebar"
			>
				<div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
					<ul className="space-y-2 font-medium">
						{sidebarItems.map((sidebarItem, index) => (
							<li key={index}>
								<a
									href={sidebarItem.href}
									className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
								>
									{sidebarItem.icon}
									<span className="ms-3 text-sm">{sidebarItem.title}</span>
								</a>
							</li>
						))}
					</ul>
				</div>
			</aside>
		</div>
	);
};

export default AdminNav;
