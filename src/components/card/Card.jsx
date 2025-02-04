import { useContext } from 'react'
import { PiShoppingCartLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../Provider'
import { HeartBnt } from '../Btns/HeartBnt'
import { Discount } from '../Discount'
import { Rating } from '../Rating'
import styles from './Card.module.scss'

export function Card({ product, handleToggle }) {
	const { cart } = useContext(GlobalContext)

	return (
		<li className={styles.card}>
			<Discount discount={product.discount} />

			<Link className={styles.image} to={`knife/${product.id}`}>
				<img src='card/knife.png' alt='01' />
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
					size={'22px'}
					spacing={'5px'}
				/>

				<div className={styles.container}>
					<h4 className={styles.price}>{product.price.toFixed(2)} c</h4>

					<HeartBnt product={product} />
				</div>
				<button onClick={() => handleToggle(product)} className={styles.btn}>
					{cart.some(item => item.id === product.id)
						? 'Удалить из корзины'
						: 'Добавить в корзину'}
					<PiShoppingCartLight />
				</button>
			</div>
		</li>
	)
}
