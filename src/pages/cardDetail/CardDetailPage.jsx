import { Link, useParams } from 'react-router-dom'
import { LoadingPage } from '../loading/LoadingPage'

import { IoHeartOutline } from 'react-icons/io5'
import { Rating } from '../../components/Rating'
import styles from './CardDetailPage.module.scss'

export function CardDetailPage({ knives }) {
	const { knifeId } = useParams()
	const knife = knives.find(knife => knife.id === parseInt(knifeId))

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
						src={knife?.image || '/public/cardDetail/01.jpg'}
						alt={knife.name}
					/>
					<ul className={styles.imagesList}>
						{knife.images.map(image => (
							<li className={styles.imagesItem} key={image}>
								<img src={image} alt={image} />
							</li>
						))}
					</ul>
				</div>
				<div className={styles.characteristic}>
					<div className={styles.topContent}>
						<div className={styles.topContainer}>
							<div className={styles.container}>
								<h2 className={styles.name}>{knife.name}</h2>
								<Rating className={styles.rating} rating={knife.rating} />
							</div>
							<IoHeartOutline className={styles.favorite} />
						</div>
						{knife.inStock ? (
							<p className={styles.inStockTrue}>В наличии</p>
						) : (
							<p className={styles.inStockFalse}>Нет в наличии</p>
						)}
					</div>

					<div className={styles.content}>
						<ul className={styles.contentList}>
							{knife.article ? (
								<li className={styles.item}>
									<h4 className={styles.itemTitle}>Артикул:</h4>
									<p className={styles.itemDesc}>{knife.article}</p>
								</li>
							) : (
								''
							)}
						</ul>
					</div>
					<div className={styles.bottomContent}></div>
				</div>
			</div>
			<div className={styles.desc}></div>
		</>
	)
}
