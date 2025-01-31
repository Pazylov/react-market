import { IoHeartOutline } from 'react-icons/io5'
import { PiShoppingCartLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { Rating } from '../Rating'
import styles from './Card.module.scss'

export function Card({ knife }) {
	return (
		<li className={styles.card}>
			{knife.discount > 0 ? (
				<div className={styles.discount}>-{knife.discount}%</div>
			) : (
				''
			)}

			<Link className={styles.image} to={`knife/${knife.id}`}>
				<img src='card/knife.png' alt='01' />
			</Link>

			<div className={styles.content}>
				<h3 className={styles.name}>{knife.name}</h3>
				<p className={styles.steel}>{knife.steel}</p>

				<Rating rating={knife.rating} />

				<div className={styles.container}>
					<h4 className={styles.price}>{knife.price} c</h4>
					<IoHeartOutline className={styles.favorite} />
				</div>
				<button className={styles.btn}>
					В корзину
					<PiShoppingCartLight />
				</button>
			</div>
		</li>
	)
}
