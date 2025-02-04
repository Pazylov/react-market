import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const GlobalContext = createContext()

export const GlobalPRovider = ({ children }) => {
	const [allKnives, setAllKnives] = useState(null)
	const [allSteel, setAllSteel] = useState(null)
	const [allTrademark, setAllTrademark] = useState(null)

	const [cart, setCart] = useState(() => {
		const savedCart = localStorage.getItem('cart')
		return savedCart ? JSON.parse(savedCart) : []
	})

	const [favorite, setFavorite] = useState(() => {
		const savedFavorite = localStorage.getItem('favorite')
		return savedFavorite ? JSON.parse(savedFavorite) : []
	})

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
				setAllKnives(response1.data)
				setAllSteel(response2.data)
				setAllTrademark(response3.data)
			} catch (error) {
				setError(error)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [])

	const value = {
		allKnives,
		allSteel,
		allTrademark,

		cart,
		setCart,
		favorite,
		setFavorite,

		loading,
		error,
	}

	return (
		<GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
	)
}
