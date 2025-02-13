import OrderForm from '../../components/forms/orderForm/OrderForm'
import styles from './OrderPage.module.scss'

export default function OrderPage() {
	return (
		<div className={styles.order}>
			<h1 className={styles.title}>Оформление заказа</h1>
			<OrderForm />
		</div>
	)
}
