import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const GlobalContext = createContext()

export const GlobalPRovider = ({ children }) => {
	const [allKnives, setAllKnives] = useState([])
	const [allSteel, setAllSteel] = useState(null)
	const [allTrademark, setAllTrademark] = useState(null)
	const allRating = [5, 4, 3, 2, 1]

	const [filterByTrademark, setFilterByTrademark] = useState([])
	const [filterBySteel, setFilterBySteel] = useState([])
	const [filterByRating, setFilterByRating] = useState([])
	const [filterByInStock, setFilterByInStock] = useState('')

	const [cartTotalSum, setCartTotalSum] = useState(0)

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

	const [knivesLoading, setKnivesLoading] = useState(true)
	const [KnivesError, setKnivesError] = useState(null)

	useEffect(() => {
		const url = 'http://localhost:8000/api/product'
		const fetchData = async () => {
			try {
				const [response1, response2] = await Promise.all([
					axios.get(`${url}/steel`),
					axios.get(`${url}/trademark`),
				])
				setAllSteel(response1.data)
				setAllTrademark(response2.data)
			} catch (error) {
				setError(error)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [])

	useEffect(() => {
		const url = 'http://localhost:8000/api/product'
		const controller = new AbortController()

		const fetchData = async () => {
			try {
				const queryParams = new URLSearchParams()

				if (filterByTrademark && filterByTrademark.length) {
					queryParams.append('trademark', JSON.stringify(filterByTrademark))
				}

				if (filterBySteel && filterBySteel.length) {
					queryParams.append('steel', JSON.stringify(filterBySteel))
				}

				if (filterByRating && filterByRating.length) {
					queryParams.append('rating', JSON.stringify(filterByRating))
				}

				if (filterByInStock !== undefined) {
					queryParams.append('inStock', filterByInStock)
				}

				const queryString = queryParams.toString()

				const response = await axios.get(`${url}/knives?${queryString}`, {
					signal: controller.signal,
				})

				setAllKnives(response.data)
			} catch (error) {
				if (axios.isCancel(error)) {
					// console.log('Запрос отменен')
				} else {
					setKnivesError(error)
				}
			} finally {
				setKnivesLoading(false)
			}
		}

		fetchData()
		return () => controller.abort()
	}, [filterByTrademark, filterBySteel, filterByRating, filterByInStock])

	useEffect(() => {
		const total = cart.reduce((sum, item) => sum + item.price, 0)
		setCartTotalSum(total)
	}, [cart])

	const value = {
		allKnives,
		allSteel,
		allTrademark,
		allRating,

		filterByTrademark,
		setFilterByTrademark,
		filterBySteel,
		setFilterBySteel,
		filterByRating,
		setFilterByRating,
		filterByInStock,
		setFilterByInStock,

		cartTotalSum,

		cart,
		setCart,
		favorite,
		setFavorite,

		loading,
		error,
		knivesLoading,
		KnivesError,
	}

	return (
		<GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
	)
}
