import { PiShoppingCartLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { HeartBnt } from '../Btns/HeartBnt'
import { Discount } from '../Discount'
import { Rating } from '../Rating'
import styles from './Card.module.scss'

export function Card({ knife }) {
	return (
		<li className={styles.card}>
			<Discount discount={knife.discount} />

			<Link className={styles.image} to={`knife/${knife.id}`}>
				<img src='card/knife.png' alt='01' />
			</Link>

			<div className={styles.content}>
				<h3 className={styles.name}>{knife.name}</h3>
				<p className={styles.steel}>{knife.steel}</p>

				<Rating
					rating={knife.rating}
					numberStarts={5}
					size={'22px'}
					spacing={'5px'}
				/>

				<div className={styles.container}>
					<h4 className={styles.price}>{knife.price.toFixed(2)} c</h4>

					<HeartBnt />
				</div>
				<button className={styles.btn}>
					В корзину
					<PiShoppingCartLight />
				</button>
			</div>
		</li>
	)
}
