import { useContext, useEffect } from 'react'
import { Card } from '../../components/card/Card'
import { GlobalContext } from '../../Provider'

export function Main() {
	const { cart, setCart, allKnives } = useContext(GlobalContext)

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

	return (
		<ul className='grid gap-5 grid-cols-3'>
			{allKnives.map(knife => (
				<Card key={knife.id} handleToggle={handleCartToggle} product={knife} />
			))}
		</ul>
	)
}
