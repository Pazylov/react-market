import { Main } from '../../layout/main/Main'
import Sidebar from '../../layout/sideBar/SideBar'

export function HomePage() {
	return (
		<div className='grid gap-5 grid-cols-sidebar'>
			<Sidebar />
			<Main />
		</div>
	)
}
