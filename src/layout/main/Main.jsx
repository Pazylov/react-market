import { Card } from '../../components/card/Card'

export function Main({ knives }) {
	return (
		<ul className='grid gap-5 grid-cols-3'>
			{knives.map(knife => (
				<Card key={knife.id} knife={knife} />
			))}
		</ul>
	)
}
