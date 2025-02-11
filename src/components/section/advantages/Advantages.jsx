import { ADVANTAGES_ITEMS } from '../../../data/advantages.data'
import AdvantagesCard from './AdvantagesCard'

export default function Advantages() {
	return (
		<ul className='grid grid-cols-4 gap-16 list-none justify-between'>
			{ADVANTAGES_ITEMS.map(item => (
				<AdvantagesCard key={item.id} item={item} />
			))}
		</ul>
	)
}
