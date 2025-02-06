export function InputCheckbox({ label, value, name, onChange }) {
	return (
		<div className='flex items-center'>
			<input
				value={value}
				className='size-4 mr-4'
				type='checkbox'
				name={name}
				onChange={onChange}
			/>
			<label className='text-base font-medium'>{label}</label>
		</div>
	)
}
