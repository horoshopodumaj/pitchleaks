import React, { FC } from 'react';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import Startup from '../../../assets/images/startup.svg';
import Investors from '../../../assets/images/investors.svg';
import Accelerators from '../../../assets/images/accelerators.svg';

type Props = {};

const WithUs: FC = (props: Props) => {
	return (
		<Card className='withus scroll-margin' id='about'>
			<CardBody className='withus__body'>
				<h2 className='fw-semibold titles m-0 pb-4'>С нами уже</h2>
				<div className='withus__container d-flex gap-style flex-column flex-sm-row'>
					<Card
						className='withus__card flex-fill shadow-none mb-0'
						style={{ backgroundColor: '#E0F6F6' }}>
						<CardBody className='withus__card-body'>
							<div className='withus__card-content row row-cols-auto gap-19 flex-nowrap align-items-center align-items-sm-start'>
								<div className='withus__card-imgwrap withus__card-imgwrap--padding col ps-3 pe-0'>
									<img className='withus__card-img' src={Startup} alt='banner1' />
								</div>
								<div className='withus__card-text col ps-0 pe-3 text-center mt-14'>
									<h4 className='withus__card-title text-success fw-semibold  mb-0'>
										100+
									</h4>
									<p className='withus__card-subtitle text-success fw-semibold  mb-0'>
										стартапов
									</p>
								</div>
							</div>
						</CardBody>
					</Card>
					<Card
						className='withus__card flex-fill shadow-none mb-0'
						style={{ backgroundColor: '#E3F2FF' }}>
						<CardBody className='withus__card-body'>
							<div className='withus__card-content row row-cols-auto gap-19 flex-nowrap align-items-center align-items-sm-start'>
								<div className='withus__card-imgwrap col ps-3 pe-0'>
									<img
										className='withus__card-img'
										src={Investors}
										alt='banner2'
									/>
								</div>
								<div className='withus__card-text col ps-0 pe-3 text-center mt-14'>
									<h4 className='withus__card-title text-info fw-semibold  mb-0'>
										20
									</h4>
									<p className='withus__card-subtitle text-info fw-semibold mb-0'>
										инвесторов
										<br /> и корпораций
									</p>
								</div>
							</div>
						</CardBody>
					</Card>
					<Card
						className='withus__card flex-fill shadow-none mb-0'
						style={{ backgroundColor: '#FBE9E8' }}>
						<CardBody className='withus__card-body'>
							<div className='withus__card-content row row-cols-auto gap-19 flex-nowrap  align-items-center align-items-sm-start'>
								<div className='withus__card-imgwrap col ps-3 pe-0'>
									<img
										className='withus__card-img'
										src={Accelerators}
										alt='banner3'
									/>
								</div>
								<div className='withus__card-text col ps-0 pe-3 text-center mt-14'>
									<h4 className='withus__card-title text-danger fw-semibold  mb-0'>
										17
									</h4>
									<p className='withus__card-subtitle text-danger fw-semibold  mb-0'>
										акселераторов
									</p>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
			</CardBody>
		</Card>
	);
};

export default WithUs;
