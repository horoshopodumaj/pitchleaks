import Card, { CardBody } from '../../components/bootstrap/Card';
import CarouselSlide from '../../components/bootstrap/CarouselSlide';
import { IPhilanthropistType } from '../../type/philanthropist-type';
import { chunkArray } from './chunkArray';

export function slidesForScreen(
	sponsors: IPhilanthropistType[],
	windowsWidth: number,
	philanthropist: string,
): JSX.Element[] | undefined {
	const newArray: JSX.Element[] = [];

	let number = 0;
	if (windowsWidth > 576 && windowsWidth <= 1006) {
		number = 2;
	}
	if (windowsWidth > 1006) {
		number = 4;
	}
	if (windowsWidth <= 576) {
		number = 1;
	}
	const slides = chunkArray(sponsors, number);

	{
		slides.map((slide: IPhilanthropistType[], index: number) =>
			newArray.push(
				<CarouselSlide key={index}>
					<div className={`${philanthropist}-carousel__container  d-flex`}>
						{slide.map((slideItem: IPhilanthropistType) => (
							<Card
								key={slideItem.id}
								className={`${philanthropist}-carousel__card flex-fill`}>
								<CardBody
									className={`${philanthropist}-carousel__body d-flex flex-column align-items-center`}>
									<div className={`${philanthropist}-carousel__img-container`}>
										{/* <Image
                                            className='sponsors-carousel__img'
                                            src={slideItem.image}
                                            //width={slideItem.width}
                                            //height={slideItem.height}
                                            alt='1'
                                            layout='responsive'
                                            width={}
                                        /> */}
										<img
											className={`${philanthropist}-carousel__img`}
											src={slideItem.image}
											alt={`${philanthropist}`}
										/>
									</div>

									<p className={`${philanthropist}-carousel__title`}>
										{slideItem.desc}
									</p>
								</CardBody>
							</Card>
						))}
					</div>
				</CarouselSlide>,
			),
		);
	}

	return newArray;
}

// {
//     slides.map((slide: IPhilanthropistType[], index: number) =>
//         newArray.push(
//             <CarouselSlide key={index}>
//                 <div className={`${philanthropist}-carousel__container  d-flex`}>
//                     {slide.map((slideItem: IPhilanthropistType) => (
//                         <Card
//                             key={slideItem.id}
//                             className={`${philanthropist}-carousel__card flex-fill`}>
//                             <CardBody className={`${philanthropist}-carousel__body d-flex flex-column align-items-center`}>
//                                 <div className={`${philanthropist}-carousel__img-container`}>
//                                     {/* <Image
//                                         className='sponsors-carousel__img'
//                                         src={slideItem.image}
//                                         //width={slideItem.width}
//                                         //height={slideItem.height}
//                                         alt='1'
//                                         layout='responsive'
//                                         width={}
//                                     /> */}
//                                     <img
//                                         className='sponsors-carousel__img'
//                                         src={slideItem.image}
//                                         alt='sponsors'
//                                     />
//                                 </div>

//                                 <p className='sponsors-carousel__title'>
//                                     {slideItem.desc}
//                                 </p>
//                             </CardBody>
//                         </Card>
//                     ))}
//                 </div>
//             </CarouselSlide>,
//         ),
//     );
// }
