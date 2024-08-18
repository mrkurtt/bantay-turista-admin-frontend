import React from 'react';
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Button,
} from '@nextui-org/react';

interface DropdownProps {
	options: string[];
	label: string;
	selected: string;
	onSelectionChange: (value: string) => void;
}

const DynamicDropdown: React.FC<DropdownProps> = ({
	options,
	label,
	selected,
	onSelectionChange,
}) => {
	const [selectedKey, setSelectedKey] = React.useState(new Set([selected]));

	const selectedValue = React.useMemo(
		() => Array.from(selectedKey).join(', ').replaceAll('_', ' '),
		[selectedKey]
	);

	const handleSelectionChange = (keys: any) => {
		const selectedOption = Array.from(keys).join(', ');
		setSelectedKey(new Set([selectedOption]));
		onSelectionChange(selectedOption);
	};

	return (
		<Dropdown>
			<DropdownTrigger>
				<Button variant="bordered" className="capitalize">
					{selectedValue || label}
				</Button>
			</DropdownTrigger>
			<DropdownMenu
				className="max-h-[300px] overflow-y-auto"
				aria-label={`Select ${label}`}
				variant="flat"
				disallowEmptySelection
				selectionMode="single"
				selectedKeys={selectedKey}
				onSelectionChange={handleSelectionChange}
			>
				{options.map((option) => (
					<DropdownItem key={option}>{option}</DropdownItem>
				))}
			</DropdownMenu>
		</Dropdown>
	);
};

export default DynamicDropdown;
