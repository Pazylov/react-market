import { TbCircleDotted } from 'react-icons/tb'
import styles from './LoadingPage.module.scss'

export function LoadingPage() {
	return (
		<div className={styles.loading}>
			<div className={styles.circle}>
				<TbCircleDotted className={styles.loadingCircle} />
			</div>
		</div>
	)
}
