import { Link, NavLink } from 'react-router-dom'

import { useContext } from 'react'
import { IoHeartOutline } from 'react-icons/io5'
import { Cart } from '../../components/cart/Cart'
import { GlobalContext } from '../../Provider'
import styles from './Header.module.scss'

export function Header() {
	const { favorite } = useContext(GlobalContext)

	return (
		<>
			<header className={styles.header}>
				<Link className={styles.logo} to='/'>
					<img src='/header/logo.png' alt='ZLATMAX' />
				</Link>

				<ul className={styles.navList}>
					<NavLink
						className={({ isActive }) =>
							isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
						}
						to='/'
					>
						HOME
					</NavLink>

					<NavLink
						className={({ isActive }) =>
							isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
						}
						to='/collection'
					>
						COLLECTION
					</NavLink>
				</ul>

				<div className={styles.container}>
					<Link to='favorite' className={styles.favorite}>
						<IoHeartOutline />
						<p className={styles.favoriteCount}>{favorite.length}</p>
					</Link>

					<Cart />
				</div>
			</header>
		</>
	)
}
