import { Link, Outlet } from 'react-router-dom'
import { LoadingPage } from '../../pages/loading/LoadingPage'
import { NotFoundPage } from '../../pages/notFoundPage/notFoundPage'

import { useContext } from 'react'
import { IoHeartOutline } from 'react-icons/io5'
import { Cart } from '../../components/cart/Cart'
import { Input } from '../../components/Input'
import { GlobalContext } from '../../Provider'
import styles from './Header.module.scss'

export function Header() {
	const { loading, error, favorite } = useContext(GlobalContext)

	if (loading) return <LoadingPage />
	if (error) return <NotFoundPage />

	return (
		<>
			<header className={styles.header}>
				<Link className={styles.logo} to='/'>
					<img src='/header/logo.png' alt='ZLATMAX' />
				</Link>

				<form>
					<Input type={'search'} placeholder={'Поиск'} />
				</form>

				<div className={styles.container}>
					<Link to='favorite' className={styles.favorite}>
						<IoHeartOutline />
						<p className={styles.favoriteCount}>{favorite.length}</p>
					</Link>

					<Cart />
				</div>
			</header>
			<Outlet />
		</>
	)
}
