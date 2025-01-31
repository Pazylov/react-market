import { Main } from '../../layout/main/Main'
import Sidebar from '../../layout/sideBar/SideBar'

export function HomePage({ knives }) {
	return (
		<div className='grid gap-5 grid-cols-sidebar mt-5'>
			<Sidebar />
			<Main knives={knives} />
		</div>
	)
}
