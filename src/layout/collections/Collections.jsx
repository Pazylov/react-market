import { useContext } from 'react'
import { Card } from '../../components/cards/collectionCard/Card'
import { LoadingPage } from '../../pages/loading/LoadingPage'
import { NotFoundPage } from '../../pages/notFoundPage/notFoundPage'
import { GlobalContext } from '../../Provider'

export function Collections() {
	const { allKnives, knivesLoading, KnivesError } = useContext(GlobalContext)

	if (knivesLoading) return <LoadingPage />
	if (KnivesError) return <NotFoundPage />

	return (
		<ul className='grid gap-5 justify-center sm:grid-cols-2 xl:grid-cols-3 '>
			{allKnives && allKnives.length !== 0 ? (
				allKnives.map(knife => <Card key={knife.id} product={knife} />)
			) : (
				<p className='mt-3 md:mt-5 text-sm sm:text-base md:text-lg font-medium'>
					Товаров нет
				</p>
			)}
		</ul>
	)
}
