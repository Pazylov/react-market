import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../layout/header/Header'
import { GlobalContext } from '../../Provider'
import { LoadingPage } from '../loading/LoadingPage'
import { NotFoundPage } from '../notFoundPage/notFoundPage'

export function HomePage() {
	const { loading, error } = useContext(GlobalContext)

	if (loading) return <LoadingPage />
	if (error) return <NotFoundPage />

	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}
