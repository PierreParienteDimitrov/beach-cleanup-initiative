import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const FilterMenu = () => {
	const options = [
		{ value: 'One', label: 'One', className: 'bg-red-100' },
		{ value: 'Two', label: 'Two', className: 'bg-red-100' },
		{ value: 'Three', label: 'Three', className: 'bg-red-100' },
	];
	const defaultOption = options[0];

	function onSelect() {
		alert('change');
	}

	return (
		<div className='w-screen h-64 bg-white p-8 flex flex-col'>
			<input
				type='text'
				id='search'
				placeholder='Search container number, container size and shipping lines'
				title='Type in a category'
				className='p-4 bg-gray-100 rounded-sm'
			/>
			<div className='md:mt-2 md:grid md:grid-flow-row md:grid-cols-4 md:grid-rows-4 md:gap-2'>
				<Dropdown
					options={options}
					onChange={onSelect}
					value={defaultOption}
					placeholder='Select an option'
					className='bg-red-100'
				/>
			</div>
		</div>
	);
};

export default FilterMenu;
