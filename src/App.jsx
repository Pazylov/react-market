import axios from 'axios'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './layout/header/Header'
import { CardDetailPage } from './pages/cardDetail/CardDetailPage'
import { CartPage } from './pages/cartPage/CartPage'
import { FavoritePage } from './pages/favoritePage/FavoritePage'
import { HomePage } from './pages/homePage/HomePage'

export function App() {
	const [knives, setKnives] = useState(null)
	const [steel, setSteel] = useState(null)
	const [trademark, setTrademark] = useState(null)

	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	const BASE_URL = 'http://localhost:8000/api/product'

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [response1, response2, response3] = await Promise.all([
					axios.get(`${BASE_URL}/knives`),
					axios.get(`${BASE_URL}/steel`),
					axios.get(`${BASE_URL}/trademark`),
				])
				setKnives(response1.data)
				setSteel(response2.data)
				setTrademark(response3.data)
			} catch (error) {
				setError(error)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [])

	return (
		<div className='container mx-auto px-4'>
			<Routes>
				<Route path='/' element={<Header loading={loading} error={error} />}>
					<Route
						index
						element={
							<HomePage knives={knives} steel={steel} trademark={trademark} />
						}
					/>

					<Route
						path='knife/:knifeId'
						element={<CardDetailPage knives={knives} />}
					/>

					<Route path='cart' element={<CartPage />} />

					<Route path='favorite' element={<FavoritePage />} />
				</Route>
			</Routes>
		</div>
	)
}
