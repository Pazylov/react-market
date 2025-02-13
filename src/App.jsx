import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './layout/scrollToTop/ScrollToTop'
import { CardDetailPage } from './pages/cardDetail/CardDetailPage'
import { CartPage } from './pages/cartPage/CartPage'
import CollectionPage from './pages/collectionPage/CollectionPage'
import { FavoritePage } from './pages/favoritePage/FavoritePage'
import { HomePage } from './pages/homePage/HomePage'
import Main from './pages/main/Main'
import OrderPage from './pages/orderPage/OrderPage'

export function App() {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<HomePage />}>
					<Route index element={<Main />} />

					<Route path='collection' element={<CollectionPage />} />

					<Route
						path='collection/knife/:productId'
						element={<CardDetailPage />}
					/>

					<Route path='cart' element={<CartPage />} />

					<Route path='favorite' element={<FavoritePage />} />

					<Route path='order' element={<OrderPage />} />
				</Route>
			</Routes>
		</>
	)
}
