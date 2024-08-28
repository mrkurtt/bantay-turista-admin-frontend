'use client';

import GradientBtn from '@/components/Button/GradientBtn';
import FormContainer from '@/components/Container/FormContainer';
import Container from '@/components/Container/LayoutContainer';
import PageTitle from '@/components/Text/PageTitle';
import { useEstablishmentStore } from '@/stores/useEstablishmentStore';
import { useLogStore } from '@/stores/useLogStore';
import { useTouristStore } from '@/stores/useTouristStore';
import React, { useEffect } from 'react';

const Test = () => {
	const {
		sendLog,
		onSelectTourist,
		onSelectEstablishment,
		selectedTourist,
		selectedEstablishment,
	} = useLogStore();
	const { getTourists, tourists } = useTouristStore();
	const { getEstablishments, establishments } = useEstablishmentStore();

	useEffect(() => {
		getTourists();
		getEstablishments();
	}, []);

	useEffect(() => {
		console.log(selectedTourist);
		console.log(selectedEstablishment);
	}, [selectedTourist, selectedEstablishment]);

	return (
		<Container>
			<PageTitle title="Test QR Code" />
			<FormContainer>
				<div className="">
					<form className="my-4 max-w-sm mx-auto">
						<label
							htmlFor="tourists"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Select Tourist
						</label>
						<select
							onChange={onSelectTourist}
							id="tourists"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						>
							<option selected>Choose tourist</option>
							{tourists?.map((tourist) => (
								<option value={tourist?._id}>
									{tourist?.first_name} {tourist?.last_name}
								</option>
							))}
						</select>
					</form>
					<form className="my-4 max-w-sm mx-auto">
						<label
							htmlFor="establishment"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Select Establishment
						</label>
						<select
							onChange={onSelectEstablishment}
							id="establishment"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						>
							<option selected>Choose establishment</option>
							{establishments?.map((establishment) => (
								<option value={establishment?._id}>
									{establishment?.establishment_name} - &nbsp;
									{establishment?.establishment_type}
								</option>
							))}
						</select>
					</form>
					<div className="flex justify-center mt-6">
						<GradientBtn
							onClickHandler={() =>
								sendLog({
									tourist_id: `${selectedTourist}`,
									establishment_id: `${selectedEstablishment}`,
								})
							}
							label="Send Entry Log"
						/>
					</div>
				</div>
			</FormContainer>
		</Container>
	);
};

export default Test;
