import { useContext } from 'react'
import { PiShoppingCartLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../../Provider'
import { HeartBnt } from '../../Btns/HeartBnt'
import { Discount } from '../../Discount'
import { Rating } from '../../Rating'
import styles from './Card.module.scss'

export function Card({ product }) {
	const { cart, setCart, successToCart, deleteFromCart } =
		useContext(GlobalContext)

	const url = 'http://localhost:8000/static/images/knives/'

	const handleCartToggle = product => {
		const isInCart = cart.some(item => item.id === product.id)

		if (isInCart) {
			setCart(prevCart => prevCart.filter(item => item.id !== product.id))
			deleteFromCart(product)
		} else {
			setCart(prevCart => [...prevCart, { ...product, quantity: 1 }])
			successToCart(product)
		}
	}

	return (
		<li className={styles.card}>
			<Discount discount={product.discount} />

			<Link className={styles.image} to={`/collection/knife/${product.id}`}>
				<img src={`${url}${product.image}`} alt={product.name} />
			</Link>

			<div className={styles.content}>
				<h3 className={styles.name}>{product.name}</h3>

				<div className={styles.characteristic}>
					<p className={styles.title}>Сталь:</p>
					<p className={styles.desc}>{product.steel}</p>
				</div>

				<div className={styles.characteristic}>
					<p className={styles.title}>Производство:</p>
					<p className={styles.desc}>{product.trademark}</p>
				</div>

				<Rating
					rating={product.rating}
					numberStarts={5}
					size={'18px'}
					spacing={'3px'}
				/>

				<div className={styles.container}>
					<h4 className={styles.price}>{product.price.toFixed(2)} c</h4>

					<HeartBnt product={product} />
				</div>

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
					<p className={styles.disabledBtn}>Нет в наличии</p>
				)}
			</div>
		</li>
	)
}
