import { useContext, useEffect } from 'react'
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5'
import { GlobalContext } from '../../Provider'

export function HeartBnt({ product }) {
	const { favorite, setFavorite, successToFavorite, deleteFromFavorite } =
		useContext(GlobalContext)

	useEffect(() => {
		localStorage.setItem('favorite', JSON.stringify(favorite))
	}, [favorite])

	const handleFavoriteToggle = product => {
		const isInFavorite = favorite.some(item => item.id === product.id)

		if (isInFavorite) {
			setFavorite(prevFavorite =>
				prevFavorite.filter(item => item.id !== product.id)
			)
			deleteFromFavorite(product)
		} else {
			setFavorite(prevFavorite => [...prevFavorite, { ...product }])
			successToFavorite(product)
		}
	}

	return (
		<button onClick={() => handleFavoriteToggle(product)}>
			{favorite.some(item => item.id === product.id) ? (
				<IoHeartSharp className='size-5 xs:size-6 md:size-7 text-whiskySour cursor-pointer' />
			) : (
				<IoHeartOutline className='size-5 xs:size-6 md:size-7 text-whiskySour cursor-pointer' />
			)}
		</button>
	)
}
