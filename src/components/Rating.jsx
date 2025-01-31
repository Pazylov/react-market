import StarRatings from 'react-star-ratings'

export function Rating({ rating, numberStarts, size, spacing }) {
	return (
		<>
			<StarRatings
				rating={rating}
				starRatedColor='#e8aa31'
				numberOfStars={numberStarts}
				starDimension={size}
				starSpacing={spacing}
			/>
		</>
	)
}
