import { Link } from 'react-router-dom'
import styles from './Card.module.scss'

export function Card() {
	return (
		<div className={styles.card}>
			<Link className={styles.image} /* to={`knife/${knife.id}`} */>
				<img src='card/knife.png' alt='01' />
			</Link>

			<div className={styles.content}>fgfsfgsd</div>
		</div>
	)
}
