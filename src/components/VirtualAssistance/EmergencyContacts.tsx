import React from 'react';
import FormContainer from '../Container/FormContainer';
import PageTitle from '../Text/PageTitle';
import EmergencyContactCard from './EmergencyContactCard';

const contacts = [
	{
		agency_name: 'Camiguin PPO',
		photo_url:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUTHnm9DGa165gBFHgm_0HQQ-Y3M4n9okIgw&s',
		phone_number: '+63 912 345 6789',
	},
	{
		agency_name: 'Bureau of Fire Protection (BFP)',
		photo_url:
			'https://scontent.fcgy2-4.fna.fbcdn.net/v/t39.30808-6/273563776_102469835707417_1983172708407470635_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=1lDHi47iJrkQ7kNvgFQ69KK&_nc_ht=scontent.fcgy2-4.fna&cb_e2o_trans=t&oh=00_AYCEP4UD2D6ajZfBS9XS65pEkT7urigBClTx1YXPxC3l7Q&oe=66CAADB1',
		phone_number: '+63 912 345 6789',
	},
	{
		agency_name: 'DRRM Operation Center',
		photo_url:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ5wyH38RCmMNWBMpa9aQ1c46bvf73zWGGI4A7iavctMKDztMDfTR_05Fc_xPVMVBGtlI',
		phone_number: '+63 912 345 6789',
	},
	{
		agency_name: 'Philippine Coast Guard',
		photo_url:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWbzov_zgWkLoYOXr1dDCEhxeCYL9O5Z5i6g&s',
		phone_number: '+63 912 345 6789',
	},
	{
		agency_name: 'Philippine Ports Authority',
		photo_url:
			'https://www.portcalls.com/wp-content/uploads/2020/10/PPA.png.webp',
		phone_number: '+63 912 345 6789',
	},
	{
		agency_name: 'Camiguin General Hospital',
		photo_url:
			'https://doctor-jobs-today-demo-bucket3.s3.ap-southeast-1.amazonaws.com/img/sites/4/2023/07/17035429/Camiguin-1.png',
		phone_number: '+63 912 345 6789',
	},
];

const EmergencyContacts = () => {
	return (
		<>
			<PageTitle title="Emergency Contacts" />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
				{contacts.map((contact, index) => (
					<EmergencyContactCard
						key={index}
						agency_name={contact.agency_name}
						phone_number={contact.phone_number}
						photo_url={contact.photo_url}
					/>
				))}
			</div>
		</>
	);
};

export default EmergencyContacts;
