import _ from 'lodash'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../../Provider'
import { LoadingPage } from '../../../pages/loading/LoadingPage'

import 'swiper/css/bundle'

import { GoArrowRight } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { Card } from '../../cards/collectionCard/Card'
import styles from './Bestsellers.module.scss'

export default function Bestsellers() {
	const { allKnives } = useContext(GlobalContext)
	const [bestsellers, setBestsellers] = useState(null)

	useEffect(() => {
		if (allKnives.length > 0) {
			const bestseller = _(allKnives)
				.filter(
					knife =>
						knife.rating === 5 && knife.inStock === true && knife.discount === 0
				)
				.take(4)
				.value()

			setBestsellers(bestseller)
		}
	}, [allKnives])

	if (!bestsellers) return <LoadingPage />

	return (
		<section className={styles.bestsellers}>
			<div className={styles.container}>
				<h3 className={styles.title}>Хиты продаж</h3>
				<Link className={styles.link} to={'/collection'}>
					Перейти в коллекции
					<GoArrowRight />
				</Link>
			</div>
			<ul className={styles.list}>
				{bestsellers.map(knife => (
					<Card key={knife.id} product={knife} />
				))}
			</ul>
		</section>
	)
}
