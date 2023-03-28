import React, { useEffect, useState } from 'react';
import InvestorsImage from '../../../assets/images/investors-img.png';
import Mts from '../../../assets/images/mts.png';
import Kirov from '../../../assets/images/kirov.png';
import Contur from '../../../assets/images/contur.png';
import Yandex from '../../../assets/images/ya.png';
import Carousel from '../../../components/bootstrap/Carousel';
import CarouselSlide from '../../../components/bootstrap/CarouselSlide';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import Button from '../../../components/bootstrap/Button';
import { TColor } from '../../../type/color-type';
import { IPhilanthropistType } from '../../../type/philanthropist-type';
import { useWindowSize } from 'react-use';
import { slidesForScreen } from '../../function/generateSlides';
import Spinner from '../../../components/bootstrap/Spinner';

type Props = {};

const colors: TColor[] = ['primary', 'secondary', 'info'];

const investors: IPhilanthropistType[] = [
	{ id: 1, image: Mts, desc: 'Корпорация' },
	{ id: 2, image: Kirov, desc: 'Инвестор' },
	{ id: 3, image: Contur, desc: 'Инвестор' },
	{ id: 4, image: Yandex, desc: 'Корпорация' },
	{ id: 5, image: Mts, desc: 'Корпорация' },
	{ id: 6, image: Kirov, desc: 'Инвестор' },
	{ id: 7, image: Contur, desc: 'Инвестор' },
	{ id: 8, image: Yandex, desc: 'Корпорация' },
	{ id: 9, image: Mts, desc: 'Корпорация' },
	{ id: 10, image: Kirov, desc: 'Инвестор' },
	{ id: 11, image: Contur, desc: 'Инвестор' },
	{ id: 12, image: Yandex, desc: 'Корпорация' },
];

const Investors = (props: Props) => {
	const windowsWidth: number = useWindowSize().width;

	const [domLoaded, setDomLoaded] = useState<boolean>(false);

	useEffect(() => {
		setDomLoaded(true);
	}, []);

	return (
		<section className='forinvestors'>
			<div className='wrapper__titles'>
				<h2 className='fw-semibold titles m-0'>Инвесторам и корпорациям</h2>
			</div>
			<Card className='investors'>
				<CardBody className='investors__body'>
					<div className='investors-info d-flex'>
						{/* <Card className='investors-info__card'>
							<CardBody className='investors-info__body'> */}
						{/* <div className='investors-info__card'> */}
						<div className='investors-info__body'>
							<img
								className='investors-info__img'
								src={InvestorsImage}
								alt='investors'
							/>
						</div>
						{/* </div> */}

						{/* </CardBody>
						</Card> */}
						<div className='investors-info__content'>
							<h3 className='investors-info__title'>Стартапы как на ладони!</h3>
							<p className='investors-info__subtitle'>
								Знакомьтесь со стартапами с помощью привычных социальных механик —
								коротких видео-питчей, лайков и сообщении. <br /> Делитесь находками
								с коллегами, подключайте к оценке своих экспертов. <br /> Начните
								знакомство уже сейчас, в нашем Telegram-канале.
							</p>
							<div className='investors-info__btns'>
								<Button className='investors-info__btn investors-info__btn-auth'>
									Найти тот самый стартап
								</Button>
								{/* <Button className='investors-info__btn investors-info__btn-demo'>
									Запрос демо
								</Button> */}
							</div>
						</div>
					</div>
					{/* <div className='investors-carousel'>
						<h3 className='investors-carousel__maintitle'>
							Акселераторы использующие платформу
						</h3>
						<Carousel className='' interval={false}>
							{domLoaded
								? slidesForScreen(investors, windowsWidth, 'investors')
								: colors.map((color: TColor, index: number) => (
										<CarouselSlide key={colors[index]}>
											<div className='spinner-size text-center'>
												<Spinner color={color} size='4rem' />
											</div>
										</CarouselSlide>
								  ))}
						</Carousel>
					</div> */}
				</CardBody>
			</Card>
		</section>
	);
};

export default Investors;
