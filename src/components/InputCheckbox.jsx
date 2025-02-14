export function InputCheckbox({ label, value, onChange, checked }) {
	return (
		<div className='flex items-center'>
			<input
				value={value}
				className='md:size-4 size-3 md:mr-4 mr-3'
				type='checkbox'
				onChange={onChange}
				checked={checked}
			/>
			<label className='md:text-base text-xs font-medium'>{label}</label>
		</div>
	)
}
