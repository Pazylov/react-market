import { useState } from 'react'
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5'

export function HeartBnt() {
	const [change, setChange] = useState(true)

	const handleChangeToggle = () => {
		setChange(!change)
	}

	return (
		<button onClick={handleChangeToggle}>
			{change ? (
				<IoHeartOutline className='size-7 text-whiskySour cursor-pointer' />
			) : (
				<IoHeartSharp className='size-7 text-whiskySour cursor-pointer' />
			)}
		</button>
	)
}
