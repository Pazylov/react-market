import { Accordion } from '../../components/accordion/Accordion'
import { InputCheckbox } from '../../components/InputCheckbox'

import styles from './Sidebar.module.scss'

export default function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<Accordion title='Производство'>
				<div className={styles.content}>
					<InputCheckbox label={'АиР'} />
					<p className={styles.productCount}></p>
				</div>
			</Accordion>
		</div>
	)
}
