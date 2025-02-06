import { useContext } from 'react'
import { Accordion } from '../../components/accordion/Accordion'
import { InputCheckbox } from '../../components/InputCheckbox'

import { Rating } from '../../components/Rating'
import { GlobalContext } from '../../Provider'
import styles from './Sidebar.module.scss'

export default function Sidebar() {
	const {
		allSteel,
		allTrademark,
		allRating,

		filterByTrademark,
		setFilterByTrademark,
		filterBySteel,
		setFilterBySteel,
		filterByRating,
		setFilterByRating,
		filterByInStock,
		setFilterByInStock,
	} = useContext(GlobalContext)

	const toggleFilterByTrademark = e => {
		const value = e.target.value

		if (filterByTrademark.includes(value)) {
			setFilterByTrademark(prev => prev.filter(item => item !== value))
		} else {
			setFilterByTrademark(prev => [...prev, value])
		}
	}

	const toggleFilterBySteel = e => {
		const value = e.target.value

		if (filterBySteel.includes(value)) {
			setFilterBySteel(prev => prev.filter(item => item !== value))
		} else {
			setFilterBySteel(prev => [...prev, value])
		}
	}

	const toggleFilterByRating = e => {
		const value = Number(e.target.value)

		if (filterByRating.includes(value)) {
			setFilterByRating(prev => prev.filter(item => item !== value))
		} else {
			setFilterByRating(prev => [...prev, value])
		}
	}

	const toggleFilterByInStock = () => {
		if (filterByInStock === '') {
			setFilterByInStock(true)
		} else {
			setFilterByInStock('')
		}
	}

	return (
		<div className={styles.sidebar}>
			<Accordion title='Товары в наличии'>
				<ul className={styles.list}>
					<li className={styles.content}>
						<InputCheckbox
							onChange={toggleFilterByInStock}
							label={'Товары в наличии'}
							value={true}
						/>
					</li>
				</ul>
			</Accordion>

			<Accordion title='Производство'>
				<ul className={styles.list}>
					{allTrademark.map(item => (
						<li key={item} className={styles.content}>
							<InputCheckbox
								onChange={toggleFilterByTrademark}
								label={item}
								value={item}
							/>
						</li>
					))}
				</ul>
			</Accordion>

			<Accordion title='Сталь'>
				<ul className={styles.list}>
					{allSteel.map(item => (
						<li key={item} className={styles.content}>
							<InputCheckbox
								onChange={toggleFilterBySteel}
								label={item}
								value={item}
							/>
						</li>
					))}
				</ul>
			</Accordion>

			<Accordion title='Рейтинг'>
				<ul className={styles.list}>
					{allRating.map(item => (
						<li className={styles.content} key={item}>
							<InputCheckbox
								onChange={toggleFilterByRating}
								value={item}
								label={
									<Rating
										rating={item}
										numberStarts={item}
										size={'20px'}
										spacing={'5px'}
									/>
								}
							/>
							<p className='text-base font-medium'>{item}/5</p>
						</li>
					))}
				</ul>
			</Accordion>
		</div>
	)
}
