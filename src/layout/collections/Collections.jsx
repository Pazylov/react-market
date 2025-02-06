import { useContext, useEffect } from 'react'
import { Card } from '../../components/card/Card'
import { LoadingPage } from '../../pages/loading/LoadingPage'
import { NotFoundPage } from '../../pages/notFoundPage/notFoundPage'
import { GlobalContext } from '../../Provider'

export function Collections() {
	const { cart, setCart, allKnives, knivesLoading, KnivesError } =
		useContext(GlobalContext)

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	if (knivesLoading) return <LoadingPage />
	if (KnivesError) return <NotFoundPage />

	const handleCartToggle = product => {
		const isInCart = cart.some(item => item.id === product.id)

		if (isInCart) {
			setCart(prevCart => prevCart.filter(item => item.id !== product.id))
		} else {
			setCart(prevCart => [...prevCart, { ...product }])
		}
	}

	return (
		<ul className='grid gap-5 grid-cols-3'>
			{allKnives && allKnives.length !== 0 ? (
				allKnives.map(knife => (
					<Card
						key={knife.id}
						handleToggle={handleCartToggle}
						product={knife}
					/>
				))
			) : (
				<p>Товаров нет</p>
			)}
		</ul>
	)
}
