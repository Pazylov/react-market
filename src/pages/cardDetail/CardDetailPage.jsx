import { Link, useParams } from 'react-router-dom'
import { LoadingPage } from '../loading/LoadingPage'

import { useContext, useEffect } from 'react'
import { PiShoppingCartLight } from 'react-icons/pi'
import { HeartBnt } from '../../components/Btns/HeartBnt'
import { Rating } from '../../components/Rating'
import { GlobalContext } from '../../Provider'
import styles from './CardDetailPage.module.scss'

export function CardDetailPage() {
	const { allKnives, cart, setCart } = useContext(GlobalContext)

	const { productId } = useParams()
	const product = allKnives.find(knife => knife.id === parseInt(productId))

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	const url = 'http://localhost:8000/static/images/knives/'

	if (!product) {
		return (
			<p>
				нож не найден <Link to='/'>Назад</Link>{' '}
			</p>
		)
	}

	if (!product || product.length === 0) {
		return <LoadingPage />
	}

	const handleCartToggle = product => {
		const isInCart = cart.some(item => item.id === product.id)

		if (isInCart) {
			setCart(prevCart => prevCart.filter(item => item.id !== product.id))
		} else {
			setCart(prevCart => [...prevCart, { ...product }])
		}
	}

	return (
		<>
			<div className={styles.cardDetail}>
				<div className={styles.gallery}>
					<img
						className={styles.bigImage}
						src={`${url}${product.image}`}
						alt={product.name}
					/>
					<ul className={styles.imagesList}>
						{product.images.map(image => (
							<li className={styles.imagesItem} key={image}>
								<img src={`${url}${image}`} alt={image} />
							</li>
						))}
					</ul>
				</div>

				<div className={styles.characteristic}>
					<div className={styles.topContent}>
						<div className={styles.topContainer}>
							<div className={styles.container}>
								<h2 className={styles.name}>{product.name}</h2>
								<Rating
									className={styles.rating}
									rating={product.rating}
									numberStarts={5}
									size={'20px'}
									spacing={'3px'}
								/>
							</div>
							<HeartBnt product={product} />
						</div>
						{product.inStock ? (
							<p className={styles.inStockTrue}>В наличии</p>
						) : (
							<p className={styles.inStockFalse}>Нет в наличии</p>
						)}
					</div>

					<div className={styles.content}>
						<ul className={styles.contentList}>
							<li className={styles.item}>
								<h4 className={styles.itemTitle}>Артикул:</h4>
								<p className={styles.itemDesc}>{product.article}</p>
							</li>
							<li className={styles.item}>
								<h4 className={styles.itemTitle}>Торговая марка:</h4>
								<p className={styles.itemDesc}>
									{product.trademark} Торговая марка: Торговая марка: Торговая
									марка:
								</p>
							</li>
							<li className={styles.item}>
								<h4 className={styles.itemTitle}>Серия:</h4>
								<p className={styles.itemDesc}>{product.series}</p>
							</li>
						</ul>
					</div>
					<div className={styles.bottomContent}>
						<h3 className={styles.price}>{product.price.toFixed(2)} c</h3>

						<div className={styles.bottomContainer}>
							{product.inStock ? (
								<button
									onClick={() => handleCartToggle(product)}
									className={styles.btn}
								>
									{cart.some(item => item.id === product.id)
										? 'Удалить из корзины'
										: 'Добавить в корзину'}
									<PiShoppingCartLight />
								</button>
							) : (
								<button disabled className={styles.btn}>
									Нет в наличии
									<PiShoppingCartLight />
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className={styles.desc}>
				<h3 className={styles.descTitle}>Описание</h3>
				<p className={styles.descText}>{product.description}</p>
			</div>
		</>
	)
}
