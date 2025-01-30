export function Input({ type = 'text', placeholder, value, onChange }) {
	return (
		<input
			className=' py-2 px-5 font-medium text-sm outline-none w-[350px] h-auto border border-solid border-[#04040480] rounded-[3px] bg-[#07070708] placeholder:text-[#00000080]'
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	)
}
