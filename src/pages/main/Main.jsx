import { Link } from 'react-router-dom'
import Advantages from '../../components/section/advantages/Advantages'
import Feature from '../../components/section/feature/Feature'
import Stars from '../../components/Stars'
import styles from './Main.module.scss'

export default function Main() {
	const LINE = [1, 2, 3, 4]

	return (
		<>
			<section>
				<div className={styles.mainBgImage}></div>
				<div className={styles.decorLine}>
					{LINE.map(item => (
						<li key={item} className={styles.item}>
							<span className={styles.line}></span>
							<span className={styles.line}></span>
						</li>
					))}
				</div>
				<div className={styles.bg}></div>

				<div className={styles.mainContent}>
					<div className={styles.left}>
						<h1 className={styles.title}>Интернет магазин сертифицированных</h1>
						<h3 className={styles.subTitle}>златоустовских ножей</h3>
						<p className={styles.text}>
							Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине
							представлен наиболее широкий выбор Златоустовских ножей от
							Златоустовских Оружейных Фабрик и компаний, мы являемся
							официальными поставщиками.
						</p>

						<Link to='/collection' className={styles.link}>
							Подробнее
						</Link>
					</div>
					<div className={styles.right}>
						<img
							className={styles.knivesImg}
							src='/main/knives.png'
							alt='Knives'
						/>
						<div className={styles.circleBlur}></div>
						<div className={styles.halfCircle}>
							<svg
								width='318'
								height='424'
								viewBox='0 0 318 424'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M1.13595 394.216C101.578 452.356 230.012 417.853 288.002 317.151C331.017 242.453 323.19 152.313 275.285 87.0114C258.608 64.2774 237.074 44.5538 211.136 29.5398C163.076 1.72024 108.607 -4.88845 58.5129 6.81675'
									stroke='white'
									strokeOpacity='0.5'
									strokeWidth='2'
								/>
							</svg>
						</div>
						<div className={styles.star1}>
							<Stars />
						</div>
						<div className={styles.star2}>
							<Stars />
						</div>
						<div className={styles.star3}>
							<Stars />
						</div>
					</div>
				</div>
				<div className='pt-[600px]'>
					<Advantages />
				</div>
			</section>

			<Feature />
		</>
	)
}
