import _ from 'lodash'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../../Provider'
import { LoadingPage } from '../../../pages/loading/LoadingPage'

import 'swiper/css/bundle'

import { GoArrowRight } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { Card } from '../../cards/collectionCard/Card'
import styles from './Stock.module.scss'

export default function Stock() {
	const { allKnivesFromMain } = useContext(GlobalContext)
	const [stocks, setStocks] = useState(null)

	useEffect(() => {
		if (allKnivesFromMain.length > 0) {
			const stock = _(allKnivesFromMain)
				.filter(knife => knife.inStock === true && knife.discount === 50)
				.take(4)
				.value()

			setStocks(stock)
		}
	}, [allKnivesFromMain])

	if (!stocks) return <LoadingPage />

	return (
		<section className={styles.stock}>
			<div className={styles.container}>
				<h3 className={styles.title}>Акции</h3>
				<Link className={styles.link} to={'/collection'}>
					Перейти в коллекции
					<GoArrowRight />
				</Link>
			</div>
			<ul className={styles.list}>
				{stocks.map(knife => (
					<Card key={knife.id} product={knife} />
				))}
			</ul>
		</section>
	)
}
