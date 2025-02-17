import { useContext } from 'react'
import { PiShoppingCartLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../Provider'
import styles from './Cart.module.scss'

export function Cart() {
	const { cart, cartTotalSum } = useContext(GlobalContext)

	return (
		<div className={styles.cart}>
			<Link to='cart' className={styles.icon}>
				<PiShoppingCartLight />
				<p className={styles.productCount}>{cart.length}</p>
			</Link>

			<div className={styles.text}>
				<p className={styles.sum}>{cartTotalSum.toFixed(2)} c.</p>
				<Link to='cart' className={styles.link}>
					Корзина
				</Link>
			</div>
		</div>
	)
}
