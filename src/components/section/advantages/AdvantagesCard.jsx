export default function AdvantagesCard({ item }) {
	return (
		<li className='w-auto h-auto flex flex-col gap-5 justify-center items-center'>
			<img className='w-auto h-16' src={item.img} alt='img' />
			<p className='font-semibold text-xl text-center text-white'>
				{item.text}
			</p>
		</li>
	)
}
