import StarRatings from 'react-star-ratings'

export function Rating({ rating }) {
	return (
		<>
			<StarRatings
				rating={rating}
				starRatedColor='#e8aa31'
				numberOfStars={5}
				starDimension='22px'
				starSpacing='5px'
			/>
		</>
	)
}
