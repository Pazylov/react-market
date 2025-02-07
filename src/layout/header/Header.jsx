import { Link, NavLink } from 'react-router-dom'

import { useContext, useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
import { IoClose, IoHeartOutline } from 'react-icons/io5'
import { Cart } from '../../components/cart/Cart'
import { GlobalContext } from '../../Provider'
import styles from './Header.module.scss'

export function Header() {
	const { favorite } = useContext(GlobalContext)

	const [visible, setVisible] = useState(false)

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

					<HiOutlineMenu
						onClick={() => setVisible(true)}
						className={styles.smMenuBtn}
					/>
				</div>

				<div
					className={
						visible ? styles.smMenu : `${styles.smMenu} ${styles.none}`
					}
				>
					<div className={styles.smContainer}>
						<div onClick={() => setVisible(false)} className={styles.backBtn}>
							<IoClose />
							<p>Close</p>
						</div>
						<NavLink
							onClick={() => setVisible(false)}
							className={({ isActive }) =>
								isActive ? `${styles.smNav} ${styles.active}` : styles.smNav
							}
							to='/'
						>
							HOME
						</NavLink>
						<NavLink
							onClick={() => setVisible(false)}
							className={({ isActive }) =>
								isActive ? `${styles.smNav} ${styles.active}` : styles.smNav
							}
							to='/collection'
						>
							COLLECTION
						</NavLink>
					</div>
				</div>
			</header>
		</>
	)
}
