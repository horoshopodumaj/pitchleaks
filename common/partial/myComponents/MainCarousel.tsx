import React, { FC, useEffect, useState } from 'react';

import { useWindowSize } from 'react-use';
import Image from 'next/image';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import Carousel from '../../../components/bootstrap/Carousel';
import CarouselSlide from '../../../components/bootstrap/CarouselSlide';
import BgOne from '../../../assets/images/bannerOne.png';
import BgOneMd from '../../../assets/images/bannerOneMd.png';
import BgOneSm from '../../../assets/images/bannerOneSm.png';

type Props = {};

const banners = [
	{
		id: 1,
		title: 'Питчим',
		subtitle: `Знакомим участников венчурного рынка друг с другом
	с помощью видео-питчей и структурированных анкет`,
		image: BgOne,
		imageMd: BgOneMd,
		imageSm: BgOneSm,
		bgColor: '#FEF8E3',
	},
	{
		id: 2,
		title: 'Скаутим',
		subtitle: `Предоставляем инвесторам и корпорациям инструменты скаутинга и экспертной оценки стартапов`,
		image: BgOne,
		imageMd: BgOneMd,
		imageSm: BgOneSm,
		bgColor: '#E3F2FF',
	},
	{
		id: 3,
		title: 'Бустим',
		subtitle: `Помогаем стартапам получить экспертизу,
		а акселераторам управлять полным циклом программ`,
		image: BgOne,
		imageMd: BgOneMd,
		imageSm: BgOneSm,
		bgColor: '#FBE9E8',
	},
];

const MainCarousel: FC = (props: Props) => {
	const windowsWidth: number = useWindowSize().width;

	const [domLoaded, setDomLoaded] = useState<boolean>(false);

	useEffect(() => {
		setDomLoaded(true);
	}, []);
	return (
		<Carousel className='carousel-main scroll-margin' id='home' interval={10000000000}>
			<CarouselSlide>
				<Card className='carousel-main__card'>
					<CardBody
						className='carousel-main__body d-flex'
						style={{ background: '#FEF8E3' }}>
						<div className='carousel-main__content'>
							<h3 className='carousel-main__title fw-semibold'>Питчим</h3>
							<p className='carousel-main__subtitle'>
								Знакомим участников венчурного рынка друг с другом с помощью
								видео-питчей и структурированных анкет
							</p>
						</div>
						<div
							className='carousel-main__img carousel-main__img--one'
							// style={{
							// 	backgroundImage: `${
							// 		domLoaded && windowsWidth > 769
							// 			? BgOne
							// 			: windowsWidth <= 575
							// 			? BgOneSm
							// 			: BgOneMd
							// 	}`,
							// }}
						>
							{/* <img
								src={
									domLoaded && windowsWidth > 769
										? BgOne
										: windowsWidth <= 575
										? BgOneSm
										: BgOneMd
								}
								alt='banner'
							/> */}
							{/* <Image
								src={
									domLoaded && windowsWidth > 769
										? BgOne
										: windowsWidth <= 575
										? BgOneSm
										: BgOneMd
								}
								alt='banner'
								width={
									domLoaded && windowsWidth > 769
										? 739
										: windowsWidth <= 575
										? 299
										: 704
								}
								height={
									domLoaded && windowsWidth > 769
										? 585
										: windowsWidth <= 575
										? 240
										: 585
								}
							/> */}
						</div>
					</CardBody>
				</Card>
			</CarouselSlide>
			<CarouselSlide>
				<Card className='carousel-main__card'>
					<CardBody
						className='carousel-main__body d-flex'
						style={{ background: '#E3F2FF' }}>
						<div className='carousel-main__content'>
							<h3 className='carousel-main__title fw-semibold'>Скаутим</h3>
							<p className='carousel-main__subtitle'>
								Предоставляем инвесторам и корпорациям инструменты скаутинга и
								экспертной оценки стартапов
							</p>
						</div>
						<div className='carousel-main__img carousel-main__img--two'></div>
					</CardBody>
				</Card>
			</CarouselSlide>
			<CarouselSlide>
				<Card className='carousel-main__card'>
					<CardBody
						className='carousel-main__body d-flex'
						style={{ background: '#FBE9E8' }}>
						<div className='carousel-main__content'>
							<h3 className='carousel-main__title fw-semibold'>Бустим</h3>
							<p className='carousel-main__subtitle'>
								Помогаем стартапам получить экспертизу, а акселераторам управлять
								полным циклом программ
							</p>
						</div>
						<div className='carousel-main__img carousel-main__img--three'></div>
					</CardBody>
				</Card>
			</CarouselSlide>
		</Carousel>
	);
};

export default MainCarousel;
