import { useState } from 'react'
import { RiArrowDownWideFill, RiArrowUpWideFill } from 'react-icons/ri'
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
					{isOpen ? <RiArrowUpWideFill /> : <RiArrowDownWideFill />}
				</div>
			</div>
			{isOpen && <div className={styles.content}>{children}</div>}
		</div>
	)
}
