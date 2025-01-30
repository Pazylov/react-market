import { PiShoppingCartLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import styles from './Cart.module.scss'

export function Cart() {
	return (
		<div className={styles.cart}>
			<Link to='cart' className={styles.icon}>
				<PiShoppingCartLight />
			</Link>

			<div className={styles.text}>
				<p className={styles.sum}>0 c.</p>
				<Link to='cart' className={styles.link}>
					Оформить заказ
				</Link>
			</div>
		</div>
	)
}
