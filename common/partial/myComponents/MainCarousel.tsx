import React, { FC } from 'react';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import Carousel from '../../../components/bootstrap/Carousel';
import CarouselSlide from '../../../components/bootstrap/CarouselSlide';

type Props = {};

const MainCarousel: FC = (props: Props) => {
	return (
		<Carousel className='carousel-main scroll-margin' id='home' interval={10000}>
			<CarouselSlide>
				<Card className='carousel-main__card'>
					<CardBody className='carousel-main__body d-flex'>
						<div className='carousel-main__content'>
							<h3 className='carousel-main__title fw-semibold'>Промо-баннер</h3>
							<p className='carousel-main__subtitle'>
								Информация о сервисе Питчликс доносящая суть сервиса для всех
								целевых аудиторий.
							</p>
						</div>
						<div className='carousel-main__img'></div>
					</CardBody>
				</Card>
			</CarouselSlide>
			<CarouselSlide>
				<Card className='carousel-main__card'>
					<CardBody className='carousel-main__body d-flex'>
						<div className='carousel-main__content'>
							<h3 className='carousel-main__title fw-semibold'>Промо-баннер 2</h3>
							<p className='carousel-main__subtitle'>
								Информация о сервисе Питчликс доносящая суть сервиса для всех
								целевых аудиторий.
							</p>
						</div>
						<div className='carousel-main__img'></div>
					</CardBody>
				</Card>
			</CarouselSlide>
			<CarouselSlide>
				<Card className='carousel-main__card'>
					<CardBody className='carousel-main__body d-flex'>
						<div className='carousel-main__content'>
							<h3 className='carousel-main__title fw-semibold'>Промо-баннер 3</h3>
							<p className='carousel-main__subtitle'>
								Информация о сервисе Питчликс доносящая суть сервиса для всех
								целевых аудиторий.
							</p>
						</div>
						<div className='carousel-main__img'></div>
					</CardBody>
				</Card>
			</CarouselSlide>
		</Carousel>
	);
};

export default MainCarousel;
