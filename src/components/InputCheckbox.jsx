export function InputCheckbox({ label, name, checked, onChange }) {
	return (
		<div className='flex items-center'>
			<input
				className='size-4 mr-4'
				type='checkbox'
				name={name}
				checked={checked}
				onChange={onChange}
			/>
			<label className='text-base font-medium'>{label}</label>
		</div>
	)
}
