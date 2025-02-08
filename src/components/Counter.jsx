export function Counter({ quantity, setQuantity }) {
	const decrement = () => {
		{
			quantity === 1 ? setQuantity(quantity) : setQuantity(quantity - 1)
		}
	}
	const increment = () => {
		setQuantity(quantity + 1)
	}

	return (
		<div className=' w-auto h-[50px] flex items-center'>
			<button
				onClick={decrement}
				className='py-[10px] px-5 text-center text-2xl font-medium text-white bg-accent rounded-l-[3px]'
			>
				-
			</button>
			<h5 className=' w-[70px] py-[10px] px-5 text-center text-2xl font-medium text-accent bg-[#d2d2d212]'>
				{quantity}
			</h5>
			<button
				onClick={increment}
				className='py-[10px] px-5 text-center text-2xl font-medium text-white bg-accent rounded-r-[3px]'
			>
				+
			</button>
		</div>
	)
}
