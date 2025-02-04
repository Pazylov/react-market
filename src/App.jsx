import { Route, Routes } from 'react-router-dom'
import { Header } from './layout/header/Header'
import { CardDetailPage } from './pages/cardDetail/CardDetailPage'
import { CartPage } from './pages/cartPage/CartPage'
import { FavoritePage } from './pages/favoritePage/FavoritePage'
import { HomePage } from './pages/homePage/HomePage'

export function App() {
	return (
		<div className='container mx-auto px-4'>
			<Routes>
				<Route path='/' element={<Header />}>
					<Route index element={<HomePage />} />

					<Route path='knife/:productId' element={<CardDetailPage />} />

					<Route path='cart' element={<CartPage />} />

					<Route path='favorite' element={<FavoritePage />} />
				</Route>
			</Routes>
		</div>
	)
}
