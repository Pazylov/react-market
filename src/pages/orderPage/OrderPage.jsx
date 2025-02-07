import styles from './OrderPage.module.scss'

export default function OrderPage() {
	return (
		<div className={styles.order}>
			<form className={styles.form}>
				<input
					className=' py-2 px-5 font-medium text-sm outline-none w-[300px] sm:w-[350px] h-auto border border-solid border-[#04040480] rounded-[3px] bg-[#07070708] placeholder:text-[#00000080]'
					type='text'
					placeholder='Введите имя:'
				/>
				<input
					className=' py-2 px-5 font-medium text-sm outline-none w-[300px] sm:w-[350px] h-auto border border-solid border-[#04040480] rounded-[3px] bg-[#07070708] placeholder:text-[#00000080]'
					type='email'
					placeholder='Введите email:'
				/>

				<button className={styles.btn}>Подтвердить заказ</button>
			</form>
		</div>
	)
}
