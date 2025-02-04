import { useContext } from 'react'
import { Accordion } from '../../components/accordion/Accordion'
import { InputCheckbox } from '../../components/InputCheckbox'

import { Rating } from '../../components/Rating'
import { GlobalContext } from '../../Provider'
import styles from './Sidebar.module.scss'

export default function Sidebar() {
	const { allSteel, allTrademark } = useContext(GlobalContext)
	const allRating = [5, 4, 3, 2, 1]

	return (
		<div className={styles.sidebar}>
			<Accordion title='Производство'>
				<ul className={styles.list}>
					{allTrademark.map(item => (
						<li key={item} className={styles.content}>
							<InputCheckbox type={'trademark'} label={item} value={item} />
							<p className={styles.productCount}>(250)</p>
						</li>
					))}
				</ul>
			</Accordion>

			<Accordion title='Сталь'>
				<ul className={styles.list}>
					{allSteel.map(item => (
						<li key={item} className={styles.content}>
							<InputCheckbox type={'steel'} label={item} value={item} />
							<p className={styles.productCount}>(250)</p>
						</li>
					))}
				</ul>
			</Accordion>

			<Accordion title='Рейтинг'>
				<ul className={styles.list}>
					{allRating.map(item => (
						<li className={styles.content} key={item}>
							<InputCheckbox
								type={'rating'}
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
