import { useContext } from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../Provider'
import styles from './CartPage.module.scss'

export function CartPage() {
	const { cart, setCart, cartTotalSum } = useContext(GlobalContext)

	const url = 'http://localhost:8000/static/images/knives/'

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
			<h1 className='mt-5 text-3xl italic ml-10 text-whiskySour font-medium tracking-[2px]'>
				Корзина
			</h1>
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
										src={`${url}${item.image}`}
										alt={item.name}
									/>
									<div className={styles.textContent}>
										<h3 className={styles.name}>{item.name}</h3>
										<p className={styles.price}>
											{(item.price * item.quantity).toFixed(2)} c
										</p>
									</div>
								</Link>
								<div className={styles.container}>
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
							</div>
						))
					) : (
						<p className={styles.emptyText}>Товаров нет</p>
					)}
				</div>
				<div className={styles.total}>
					<p className={styles.totalDesc}>Итого сумма заказа:</p>
					<p className={styles.totalPrice}>{cartTotalSum.toFixed(2)} c</p>
				</div>

				{cart.length === 0 || cartTotalSum === 0 ? (
					<button className={styles.disabledOrderBtn}>Оформить заказ</button>
				) : (
					<Link to='/order' className={styles.orderBtn}>
						<button>Оформить заказ</button>
					</Link>
				)}
			</div>
		</>
	)
}
