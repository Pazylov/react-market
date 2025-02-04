import { useState } from 'react'
import { RiArrowUpWideFill } from 'react-icons/ri'
import styles from './Accordion.module.scss'

export function Accordion({ title, children }) {
	const [isOpen, setIsOpen] = useState(true)

	const handleOpenAccordionToggle = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div>
			<div className={styles.accordion} onClick={handleOpenAccordionToggle}>
				<div className={styles.title}>
					{title}
					<RiArrowUpWideFill className={`${isOpen ? '' : 'rotate-180'}`} />
				</div>
			</div>
			{isOpen && <div className={styles.content}>{children}</div>}
		</div>
	)
}
