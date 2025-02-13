import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../../Provider'
import styles from './OrderForm.module.scss'

export default function OrderForm() {
	const { setOrder, cart, setCart } = useContext(GlobalContext)
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()

	const onSubmit = data => {
		const newOrder = {
			id: Date.now(),
			...data,
			orders: cart,
			orderDate: new Date().toISOString(),
		}
		setOrder(prevOrders => [...prevOrders, newOrder])
		reset()
		setCart([])
		navigate('/')
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<div className={styles.container}>
				<input
					{...register('firstName', {
						required: {
							message: 'Необходимо заполнить «Имя»',
							value: true,
						},
						minLength: {
							value: 3,
							message: 'Не меньше (3) символов!',
						},
					})}
					className={styles.input}
					type='text'
					placeholder='*Имя:'
				/>
				{errors.firstName?.message && (
					<p className='ml-3 text-red-500 mt-1 italic'>
						{errors.firstName.message}
					</p>
				)}
			</div>

			<div className={styles.container}>
				<input
					{...register('lastName', {
						required: {
							message: 'Необходимо заполнить «Фамилия»',
							value: true,
						},
						minLength: {
							message: 'Не меньше (3) символов!',
							value: 3,
						},
					})}
					className={styles.input}
					type='text'
					placeholder='*Фамилия:'
				/>
				{errors.lastName?.message && (
					<p className='ml-3 text-red-500 mt-1 italic'>
						{errors.lastName.message}
					</p>
				)}
			</div>

			<div className={styles.container}>
				<input
					{...register('surName', {
						minLength: {
							message: 'Не меньше (3) символов!',
							value: 3,
						},
					})}
					className={styles.input}
					type='text'
					placeholder='Отчество:'
				/>
				{errors.surName?.message && (
					<p className='ml-3 text-red-500 mt-1 italic'>
						{errors.surName.message}
					</p>
				)}
			</div>

			<div className={styles.container}>
				<input
					{...register('address', {
						required: {
							message: 'Необходимо заполнить «Адрес доставки».',
							value: true,
						},
						minLength: {
							message: 'Не меньше (3) символов!',
							value: 2,
						},
					})}
					className={styles.input}
					type='text'
					placeholder='*Адрес доставки'
				/>
				{errors.address?.message && (
					<p className='ml-3 text-red-500 mt-1 italic'>
						{errors.address.message}
					</p>
				)}
			</div>

			<div className={styles.container}>
				<input
					{...register('phoneNumber', {
						required: {
							message: 'Необходимо заполнить «Номер телефона».',
							value: true,
						},
						pattern: {
							value: /^0\d{9}$/,
							message: 'Заполните в указанном формате (0555123456)',
						},
					})}
					className={styles.input}
					type='tel'
					placeholder='*Номер телефона: (0555123456)'
				/>
				{errors.phoneNumber?.message && (
					<p className='ml-3 text-red-500 mt-1 italic'>
						{errors.phoneNumber.message}
					</p>
				)}
			</div>

			<div className={styles.container}>
				<input
					{...register('email', {
						required: {
							message: 'Необходимо заполнить «Email».',
							value: true,
						},
						pattern: {
							value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
							message: 'Введите корректный email (example@mail.com)',
						},
					})}
					className={styles.input}
					type='email'
					placeholder='*Email:'
				/>
				{errors.email?.message && (
					<p className='ml-3 text-red-500 mt-1 italic'>
						{errors.email.message}
					</p>
				)}
			</div>

			<div className={styles.container}>
				<textarea
					{...register('comment', {
						minLength: {
							message: 'Не меньше (3) символов!',
							value: 3,
						},
					})}
					className={styles.input}
					placeholder='Комментарии'
				/>
				{errors.comment?.message && (
					<p className='ml-3 text-red-500 mt-1 italic'>
						{errors.comment.message}
					</p>
				)}
			</div>

			<button type='submit' className={styles.btn}>
				Отправить
			</button>
		</form>
	)
}
