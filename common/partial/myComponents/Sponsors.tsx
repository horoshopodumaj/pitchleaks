import React, { FC, useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';
import SponsorsImage from '../../../assets/images/sponsors-img.png';
import Sber from '../../../assets/images/sber.png';
import Kasper from '../../../assets/images/kasper.png';
import Sk from '../../../assets/images/sk.png';
import Megafon from '../../../assets/images/megafon-sp.png';
import Carousel from '../../../components/bootstrap/Carousel';
import CarouselSlide from '../../../components/bootstrap/CarouselSlide';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import Button from '../../../components/bootstrap/Button';
import Image from 'next/image';
import Spinner from '../../../components/bootstrap/Spinner';
import { TColor } from '../../../type/color-type';
import { IPhilanthropistType } from '../../../type/philanthropist-type';
import { slidesForScreen } from '../../function/generateSlides';

type Props = {};

const colors: TColor[] = ['primary', 'secondary', 'info'];

// const sponsors: SponsorsType[] = [
// 	{ id: 1, image: Sber, desc: 'Корпорация', width: 113, height: 113 },
// 	{ id: 2, image: Kasper, desc: 'Инвестор', width: 200, height: 97 },
// 	{ id: 3, image: Sk, desc: 'Инвестор', width: 137, height: 119 },
// 	{ id: 4, image: Megafon, desc: 'Корпорация', width: 185, height: 151 },
// 	{ id: 5, image: Sber, desc: 'Корпорация', width: 113, height: 113 },
// 	{ id: 6, image: Kasper, desc: 'Инвестор', width: 200, height: 97 },
// 	{ id: 7, image: Sk, desc: 'Инвестор', width: 137, height: 119 },
// 	{ id: 8, image: Megafon, desc: 'Корпорация', width: 185, height: 151 },
// 	{ id: 9, image: Sber, desc: 'Корпорация', width: 113, height: 113 },
// 	{ id: 10, image: Kasper, desc: 'Инвестор', width: 200, height: 97 },
// 	{ id: 11, image: Sk, desc: 'Инвестор', width: 137, height: 119 },
// 	{ id: 12, image: Megafon, desc: 'Корпорация', width: 185, height: 151 },
// ];
const sponsors: IPhilanthropistType[] = [
	{ id: 1, image: Sber, desc: 'Корпорация' },
	{ id: 2, image: Kasper, desc: 'Инвестор' },
	{ id: 3, image: Sk, desc: 'Инвестор' },
	{ id: 4, image: Megafon, desc: 'Корпорация' },
	{ id: 5, image: Sber, desc: 'Корпорация' },
	{ id: 6, image: Kasper, desc: 'Инвестор' },
	{ id: 7, image: Sk, desc: 'Инвестор' },
	{ id: 8, image: Megafon, desc: 'Корпорация' },
	{ id: 9, image: Sber, desc: 'Корпорация' },
	{ id: 10, image: Kasper, desc: 'Инвестор' },
	{ id: 11, image: Sk, desc: 'Инвестор' },
	{ id: 12, image: Megafon, desc: 'Корпорация' },
];

const Sponsors: FC = (props: Props) => {
	const windowsWidth: number = useWindowSize().width;

	const [domLoaded, setDomLoaded] = useState<boolean>(false);

	useEffect(() => {
		setDomLoaded(true);
	}, []);

	return (
		<section className='forsponsors'>
			<div className='wrapper__titles'>
				<h2 className='fw-semibold titles m-0'>Акселераторам</h2>
			</div>
			<Card className='sponsors'>
				<CardBody className='sponsors__body'>
					<div className='sponsors-info d-flex'>
						{/* <Card className='sponsors-info__card'>
							<CardBody className='sponsors-info__body'> */}
						<div className='sponsors-info__body'>
							<img
								className='sponsors-info__img'
								src={SponsorsImage}
								alt='sponsors'
							/>
						</div>

						{/* </CardBody>
						</Card> */}
						<div className='sponsors-info__content'>
							<h3 className='sponsors-info__title'>
								Управляйте программами в несколько кликов
							</h3>
							<p className='sponsors-info__subtitle'>
								Создать программу, пригласить экспертов и трекеров, отобрать
								участников, разослать всем уведомления и выгрузить отчёт — звучит
								как большой объём работы, требующий много ресурсов. <br /> Питчликс
								помогает ускорить работу акселератора, автоматизируя множество
								рутинных операций.
							</p>
							<div className='sponsors-info__btns'>
								<Button className='sponsors-info__btn sponsors-info__btn-auth'>
									Записаться на демо
								</Button>
								{/* <Button className='sponsors-info__btn sponsors-info__btn-demo'>
									Запрос демо
								</Button> */}
							</div>
						</div>
					</div>
					{/* <div className='sponsors-carousel'>
						<h3 className='sponsors-carousel__maintitle'>
							Акселераторы использующие платформу
						</h3>
						<Carousel className='' interval={false}>
							{domLoaded
								? slidesForScreen(sponsors, windowsWidth, 'sponsors')
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

export default Sponsors;
