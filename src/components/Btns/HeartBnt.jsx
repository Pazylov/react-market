import { useContext, useEffect } from 'react'
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5'
import { GlobalContext } from '../../Provider'

export function HeartBnt({ product }) {
	const { favorite, setFavorite } = useContext(GlobalContext)

	useEffect(() => {
		localStorage.setItem('favorite', JSON.stringify(favorite))
	}, [favorite])

	const handleCartToggle = product => {
		const isInFavorite = favorite.some(item => item.id === product.id)

		if (isInFavorite) {
			setFavorite(prevCart => prevCart.filter(item => item.id !== product.id))
		} else {
			setFavorite(prevCart => [...prevCart, { ...product }])
		}
	}

	return (
		<button onClick={() => handleCartToggle(product)}>
			{favorite.some(item => item.id === product.id) ? (
				<IoHeartSharp className='size-7 text-whiskySour cursor-pointer' />
			) : (
				<IoHeartOutline className='size-7 text-whiskySour cursor-pointer' />
			)}
		</button>
	)
}
