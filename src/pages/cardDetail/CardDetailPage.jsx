import { Link, useParams } from 'react-router-dom'
import { LoadingPage } from '../loading/LoadingPage'

import { useState } from 'react'
import { PiShoppingCartLight } from 'react-icons/pi'
import { HeartBnt } from '../../components/Btns/HeartBnt'
import { Rating } from '../../components/Rating'
import { Counter } from '../../components/Сounter'
import styles from './CardDetailPage.module.scss'

export function CardDetailPage({ knives }) {
	const { knifeId } = useParams()
	const knife = knives.find(knife => knife.id === parseInt(knifeId))

	const [count, setCount] = useState(1)

	const url = 'http://localhost:8000/static/images/knives/'

	if (!knife) {
		return (
			<p>
				нож не найден <Link to='/'>Назад</Link>{' '}
			</p>
		)
	}

	if (!knife || knife.length === 0) {
		return <LoadingPage />
	}

	return (
		<>
			<div className={styles.cardDetail}>
				<div className={styles.gallery}>
					<img
						className={styles.bigImage}
						src={`${url}${knife.image}`}
						alt={knife.name}
					/>
					<ul className={styles.imagesList}>
						{knife.images.map(image => (
							<li className={styles.imagesItem} key={image}>
								<img src={`${url}${image}`} alt={image} />
							</li>
						))}
					</ul>
				</div>

				<div className={styles.characteristic}>
					<div className={styles.topContent}>
						<div className={styles.topContainer}>
							<div className={styles.container}>
								<h2 className={styles.name}>{knife.name}</h2>
								<Rating
									className={styles.rating}
									rating={knife.rating}
									numberStarts={5}
									size={'20px'}
									spacing={'3px'}
								/>
							</div>
							<HeartBnt />
						</div>
						{knife.inStock ? (
							<p className={styles.inStockTrue}>В наличии</p>
						) : (
							<p className={styles.inStockFalse}>Нет в наличии</p>
						)}
					</div>

					<div className={styles.content}>
						<ul className={styles.contentList}>
							<li className={styles.item}>
								<h4 className={styles.itemTitle}>Артикул:</h4>
								<p className={styles.itemDesc}>{knife.article}</p>
							</li>
							<li className={styles.item}>
								<h4 className={styles.itemTitle}>Торговая марка:</h4>
								<p className={styles.itemDesc}>
									{knife.trademark} Торговая марка: Торговая марка: Торговая
									марка:
								</p>
							</li>
							<li className={styles.item}>
								<h4 className={styles.itemTitle}>Серия:</h4>
								<p className={styles.itemDesc}>{knife.series}</p>
							</li>
						</ul>
					</div>
					<div className={styles.bottomContent}>
						<h3 className={styles.price}>
							{(knife.price * count).toFixed(2)} c
						</h3>

						<div className={styles.bottomContainer}>
							<Counter count={count} setCount={setCount} />

							<button className={styles.btn}>
								В корзину
								<PiShoppingCartLight />
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.desc}>
				<h3 className={styles.descTitle}>Описание</h3>
				<p className={styles.descText}>{knife.description}</p>
			</div>
		</>
	)
}
