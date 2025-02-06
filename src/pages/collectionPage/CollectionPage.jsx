import { useContext } from 'react'
import { Collections } from '../../layout/collections/Collections'
import Sidebar from '../../layout/sideBar/SideBar'
import { GlobalContext } from '../../Provider'

const CollectionPage = () => {
	const { inputRef, searchQuery, setSearchQuery } = useContext(GlobalContext)

	return (
		<div className='grid gap-5 grid-cols-sidebar mt-5'>
			<Sidebar />
			<div className='flex flex-col gap-5'>
				<input
					className=' py-2 px-5 font-medium text-sm outline-none w-[350px] h-auto border border-solid border-[#04040480] rounded-[3px] bg-[#07070708] placeholder:text-[#00000080]'
					ref={inputRef}
					type='search'
					placeholder='Поиск...'
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
				/>
				<Collections />
			</div>
		</div>
	)
}

export default CollectionPage
