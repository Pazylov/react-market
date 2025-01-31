export function Discount({ discount }) {
	return (
		<>
			{discount > 0 ? (
				<div className='w-[90px] h-[35px] absolute left-0 top-5 px-5 py-1 bg-whiskySour text-white text-center text-lg font-semibold'>
					-{discount}%
				</div>
			) : (
				''
			)}
		</>
	)
}
