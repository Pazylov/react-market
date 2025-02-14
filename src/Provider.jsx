import axios from 'axios'
import { debounce } from 'lodash'
import { createContext, useCallback, useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'

export const GlobalContext = createContext()

export const GlobalPRovider = ({ children }) => {
	const [allKnives, setAllKnives] = useState([])
	const [allSteel, setAllSteel] = useState(null)
	const [allTrademark, setAllTrademark] = useState(null)

	const [allKnivesFromMain, setAllKnivesFromMain] = useState(null)
	const allRating = [5, 4, 3, 2, 1]

	const inputRef = useRef(null)

	const [searchQuery, setSearchQuery] = useState('')
	const [filterByTrademark, setFilterByTrademark] = useState([])
	const [filterBySteel, setFilterBySteel] = useState([])
	const [filterByRating, setFilterByRating] = useState([])
	const [filterByInStock, setFilterByInStock] = useState('')

	const [cartTotalSum, setCartTotalSum] = useState(0)

	const [order, setOrder] = useState(() => {
		const savedOrder = localStorage.getItem('order')
		return savedOrder ? JSON.parse(savedOrder) : []
	})

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

	const fetchData = useCallback(
		debounce(async (query, filters, controller) => {
			try {
				setKnivesLoading(true)
				setKnivesError(null)

				const url = 'http://localhost:8000/api/product'
				const queryParams = new URLSearchParams()

				if (filters.trademark?.length)
					queryParams.append('trademark', JSON.stringify(filters.trademark))

				if (filters.steel?.length)
					queryParams.append('steel', JSON.stringify(filters.steel))

				if (filters.rating?.length)
					queryParams.append('rating', JSON.stringify(filters.rating))

				if (filters.inStock !== undefined)
					queryParams.append('inStock', filters.inStock)

				if (query) queryParams.append('searchText', query)

				const queryString = queryParams.toString()
				const response = await axios.get(`${url}/knives?${queryString}`, {
					signal: controller.signal,
				})

				setAllKnives(response.data)
			} catch (error) {
				if (!axios.isCancel(error)) {
					setKnivesError(error)
				}
			} finally {
				setKnivesLoading(false)
			}
		}, 500),
		[setKnivesLoading, setKnivesError, setAllKnives]
	)

	useEffect(() => {
		return () => {
			fetchData.cancel()
		}
	}, [fetchData])

	useEffect(() => {
		const controller = new AbortController()
		fetchData(
			searchQuery,
			{
				trademark: filterByTrademark,
				steel: filterBySteel,
				rating: filterByRating,
				inStock: filterByInStock,
			},
			controller
		)

		return () => {
			controller.abort()
			fetchData.cancel()
		}
	}, [
		searchQuery,
		filterByTrademark,
		filterBySteel,
		filterByRating,
		filterByInStock,
	])

	useEffect(() => {
		const url = 'http://localhost:8000/api/product'
		const fetchData = async () => {
			try {
				const [response1, response2, response3] = await Promise.all([
					axios.get(`${url}/steel`),
					axios.get(`${url}/trademark`),
					axios.get(`${url}/knives`),
				])
				setAllSteel(response1.data)
				setAllTrademark(response2.data)
				setAllKnivesFromMain(response3.data)
			} catch (error) {
				setError(error)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [])

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus()
		}
	}, [searchQuery])

	useEffect(() => {
		const total = cart.reduce(
			(sum, item) => sum + item.price * item.quantity,
			0
		)
		setCartTotalSum(total)
	}, [cart])

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	useEffect(() => {
		localStorage.setItem('order', JSON.stringify(order))
	}, [order])

	const successOrder = () => {
		toast.success('Успешно отправлено!', {
			position: 'top-right',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
		})
	}

	const successToCart = ({ name }) => {
		toast.success(`"${name}" Успешное добавлено в корзину!`, {
			position: 'top-right',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
		})
	}

	const successToFavorite = ({ name }) => {
		toast.success(`"${name}" Успешное добавлено в избранное!`, {
			position: 'top-right',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
		})
	}

	const deleteFromCart = ({ name }) => {
		toast.error(`"${name}" Успешное удален из корзину!`, {
			position: 'top-right',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
		})
	}

	const deleteFromFavorite = ({ name }) => {
		toast.error(`"${name}" Успешное удален из избранных!`, {
			position: 'top-right',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
		})
	}

	const value = {
		allKnives,
		allSteel,
		allTrademark,
		allRating,

		allKnivesFromMain,

		inputRef,

		order,
		setOrder,

		searchQuery,
		setSearchQuery,
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

		successOrder,
		successToCart,
		deleteFromCart,
		successToFavorite,
		deleteFromFavorite,
	}

	return (
		<GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
	)
}
