import { FEATURE } from '../../../data/feature.data'
import FeatureCard from '../../cards/FeatureCard/FeatureCard'
import styles from './Feature.module.scss'

export default function Feature() {
	return (
		<section className={styles.feature}>
			<ul className={styles.list}>
				{FEATURE.map(item => (
					<FeatureCard item={item} key={item.id} />
				))}
			</ul>
		</section>
	)
}
