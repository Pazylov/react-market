import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '../../layout/footer/Footer'
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
			<ToastContainer />
			<div className='flex flex-col min-h-screen'>
				<Header />
				<main className='flex-1 container mx-auto px-4'>
					<Outlet />
				</main>
				<Footer />
			</div>
		</>
	)
}
