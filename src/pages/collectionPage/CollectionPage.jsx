import { Collections } from '../../layout/collections/Collections'
import Sidebar from '../../layout/sideBar/SideBar'

const CollectionPage = () => {
	return (
		<div className='grid gap-5 grid-cols-sidebar mt-5'>
			<Sidebar />
			<Collections />
		</div>
	)
}

export default CollectionPage
