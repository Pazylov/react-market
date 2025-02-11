import styles from './FeatureCard.module.scss'

export default function FeatureCard({ item }) {
	return (
		<li className={styles.card}>
			<h2 className={styles.title}>{item.title}</h2>
			<div className={styles.container}>
				<ul className={styles.list}>
					{item.list.map(text => (
						<li className={styles.item} key={text}>
							<span className={styles.itemMarker}></span>
							{text}
						</li>
					))}
				</ul>

				<img className={styles.img} src={item.img} alt={item.title} />
			</div>
		</li>
	)
}
