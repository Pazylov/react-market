import { useContext } from 'react'
import { GlobalContext } from '../Provider'

export function Counter({ count, setCount }) {
	const { cart, setCart } = useContext(GlobalContext)

	const decrement = () => {
		{
			count === 1 ? setCount(count) : setCount(count - 1)
		}
	}
	const increment = () => {
		setCount(count + 1)
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
				{count}
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
