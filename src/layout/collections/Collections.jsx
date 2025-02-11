import { useContext, useEffect } from 'react'
import { Card } from '../../components/cards/collectionCard/Card'
import { LoadingPage } from '../../pages/loading/LoadingPage'
import { NotFoundPage } from '../../pages/notFoundPage/notFoundPage'
import { GlobalContext } from '../../Provider'

export function Collections() {
	const { cart, setCart, allKnives, knivesLoading, KnivesError } =
		useContext(GlobalContext)

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	const handleCartToggle = product => {
		const isInCart = cart.some(item => item.id === product.id)

		if (isInCart) {
			setCart(prevCart => prevCart.filter(item => item.id !== product.id))
		} else {
			setCart(prevCart => [...prevCart, { ...product, quantity: 1 }])
		}
	}

	if (knivesLoading) return <LoadingPage />
	if (KnivesError) return <NotFoundPage />

	return (
		<ul className='grid gap-5 justify-center sm:grid-cols-2 xl:grid-cols-3 '>
			{allKnives && allKnives.length !== 0 ? (
				allKnives.map(knife => (
					<Card
						key={knife.id}
						handleToggle={handleCartToggle}
						product={knife}
					/>
				))
			) : (
				<p className='mt-3 md:mt-5 text-sm sm:text-base md:text-lg font-medium'>
					Товаров нет
				</p>
			)}
		</ul>
	)
}
