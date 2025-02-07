import { useContext } from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../Provider'
import styles from './CartPage.module.scss'

export function CartPage() {
	const { cart, setCart, cartTotalSum } = useContext(GlobalContext)

	const handleCartToggle = id => {
		setCart(cart.filter(item => item.id !== id))
	}

	const updateQuantity = (id, newQuantity) => {
		setCart(prev =>
			prev.map(item =>
				item.id === id ? { ...item, quantity: newQuantity } : item
			)
		)
	}

	return (
		<>
			<h1 className=' mt-5 text-3xl italic ml-10'>Корзина</h1>
			<div className='flex flex-col items-end'>
				<div className={styles.cart}>
					{cart.length !== 0 ? (
						cart.map(item => (
							<div key={item.id} className={styles.cardItem}>
								<Link
									className={styles.content}
									to={`/collection/knife/${item.id}`}
								>
									<img
										className={styles.image}
										src='card/knife.png'
										alt={item.name}
									/>
									<div className={styles.textContent}>
										<h3 className={styles.name}>{item.name}</h3>
										<p className={styles.price}>
											{(item.price * item.quantity).toFixed(2)} c
										</p>
									</div>
								</Link>
								<input
									className={styles.input}
									type='number'
									value={item.quantity}
									min={1}
									onChange={e => {
										const newQuantity = Number(e.target.value)
										updateQuantity(item.id, newQuantity)
									}}
								/>
								<RiDeleteBin6Line
									onClick={() => handleCartToggle(item.id)}
									className={styles.deleteBtn}
								/>
							</div>
						))
					) : (
						<p className={styles.emptyText}>Товаров нет</p>
					)}
				</div>
				<div className={styles.total}>
					<p className={styles.totalDesc}>Итого:</p>
					<p className={styles.totalPrice}>{cartTotalSum.toFixed(2)} c</p>
				</div>

				{cart.length !== 0 ? (
					<Link to='/order' className={styles.orderBtn}>
						<button>Оформить заказ</button>
					</Link>
				) : (
					<button className={styles.disabledOrderBtn}>Оформить заказ</button>
				)}
			</div>
		</>
	)
}
