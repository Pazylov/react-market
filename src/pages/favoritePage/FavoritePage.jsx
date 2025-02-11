import { useContext } from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../Provider'

import { PiShoppingCartLight } from 'react-icons/pi'
import styles from './FavoritePage.module.scss'

export function FavoritePage() {
	const { cart, setCart, favorite, setFavorite } = useContext(GlobalContext)
	const url = 'http://localhost:8000/static/images/knives/'

	const handleFavoriteToggle = id => {
		setFavorite(favorite.filter(item => item.id !== id))
	}

	const handleCartToggle = product => {
		const isInCart = cart.some(item => item.id === product.id)

		if (isInCart) {
			setCart(prevCart => prevCart.filter(item => item.id !== product.id))
		} else {
			setCart(prevCart => [...prevCart, { ...product, quantity: 1 }])
		}
	}

	return (
		<>
			<h1 className=' mt-5 text-3xl italic ml-10 text-whiskySour font-medium tracking-[2px]'>
				Избранные
			</h1>
			<div className='flex flex-col items-end'>
				<div className={styles.favorite}>
					{favorite.length > 0 ? (
						favorite.map(item => (
							<div key={item.id} className={styles.cardItem}>
								<div className={styles.content}>
									<Link
										className={styles.image}
										to={`/collection/knife/${item.id}`}
									>
										<img src={`${url}${item.image}`} alt={item.name} />
									</Link>
									<div className={styles.textContent}>
										<Link to={`/collection/knife/${item.id}`}>
											<h3 className={styles.name}>{item.name}</h3>
											<p className={styles.price}>{item.price.toFixed(2)} c</p>
										</Link>

										{item.inStock ? (
											<button
												className={styles.addCartBtn}
												onClick={() => handleCartToggle(item)}
											>
												{cart.some(i => i.id === item.id)
													? 'Удалить из корзины'
													: 'Добавить в корзину'}
												<PiShoppingCartLight />
											</button>
										) : (
											<p className={styles.disabledCartBtn}>Нет в наличии</p>
										)}
									</div>
								</div>

								<RiDeleteBin6Line
									onClick={() => handleFavoriteToggle(item.id)}
									className={styles.deleteBtn}
								/>
							</div>
						))
					) : (
						<p className={styles.emptyText}>Товаров нет</p>
					)}
				</div>
			</div>
		</>
	)
}
