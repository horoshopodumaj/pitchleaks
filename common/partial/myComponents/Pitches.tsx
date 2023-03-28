import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useWindowSize } from 'react-use';

import Card, { CardBody } from '../../../components/bootstrap/Card';
import Button from '../../../components/bootstrap/Button';
import Pitch from '../../../assets/images/pitch2.jpg';
import PitchSm from '../../../assets/images/pitch1-sm.jpg';
import Modal, { ModalBody, ModalHeader, ModalTitle } from '../../../components/bootstrap/Modal';
import ClampLines from 'react-clamp-lines';

type Props = {};

type TagsTypes = {
	id: number;
	tagName: string;
};
interface PitchesType {
	id: number;
	imageMd: string;
	imageSm: string;
	title: string;
	desc: string;
	trendTags: TagsTypes[];
	techTags: TagsTypes[];
	video: string;
}

const pitches: PitchesType[] = [
	{
		id: 1,
		imageMd: Pitch,
		imageSm: PitchSm,
		title: 'Nuro',
		desc: `Nuro — беспилотный автомобиль, поможет улучшить повседневную жизнь
    миллионов людей, обеспечив более безопасные улицы, более здоровую
    планету и более справедливый доступ к товарам, и в то же время
    вернуть людям время, которое они могут потратить на то,
    что действительно важно. Встречайте наш автономный автомобиль
    третьего поколения. `,
		trendTags: [
			{
				id: 1,
				tagName: '3D printing',
			},
			{
				id: 2,
				tagName: 'Adtech',
			},
			{
				id: 3,
				tagName: 'Advanced manufacturing',
			},
			{
				id: 4,
				tagName: 'tag4',
			},
			{
				id: 5,
				tagName: 'Artificial intelligence and machine learning (AI/ML)',
			},
			{
				id: 6,
				tagName: 'tag6',
			},
		],
		techTags: [
			{
				id: 1,
				tagName: '3D printing',
			},
			{
				id: 2,
				tagName: 'AI/ML',
			},
			{
				id: 3,
				tagName: 'Intelligent Automation',
			},
			{
				id: 4,
				tagName: 'IoT',
			},
			{
				id: 5,
				tagName: 'Hardware',
			},
			{
				id: 6,
				tagName: 'Payments and Transactions',
			},
		],
		video: `https://www.youtube.com/embed/C4h6wMCMpZ8`,
	},
	{
		id: 2,
		imageMd: Pitch,
		imageSm: PitchSm,
		title: 'Nuro 2',
		desc: `Nuro — беспилотный автомобиль, поможет улучшить повседневную жизнь
    миллионов людей, обеспечив более безопасные улицы, более здоровую
    планету и более справедливый доступ к товарам, и в то же время
    вернуть людям время, которое они могут потратить на то,
    что действительно важно. Встречайте наш автономный автомобиль
    третьего поколения.`,
		trendTags: [
			{
				id: 1,
				tagName: '3D printing',
			},
			{
				id: 2,
				tagName: 'Adtech',
			},
			{
				id: 3,
				tagName: 'Advanced manufacturing',
			},
			{
				id: 4,
				tagName: 'tag4',
			},
			{
				id: 5,
				tagName: 'Artificial intelligence and machine learning (AI/ML)',
			},
			{
				id: 6,
				tagName: 'tag6',
			},
		],
		techTags: [
			{
				id: 1,
				tagName: '3D printing',
			},
			{
				id: 2,
				tagName: 'AI/ML',
			},
			{
				id: 3,
				tagName: 'Intelligent Automation',
			},
			{
				id: 4,
				tagName: 'IoT',
			},
			{
				id: 5,
				tagName: 'Hardware',
			},
			{
				id: 6,
				tagName: 'Payments and Transactions',
			},
		],
		video: `https://www.youtube.com/embed/C4h6wMCMpZ8`,
	},
	{
		id: 3,
		imageMd: Pitch,
		imageSm: PitchSm,
		title: 'Nuro 3',
		desc: `Nuro — беспилотный автомобиль, поможет улучшить повседневную жизнь
    миллионов людей, обеспечив более безопасные улицы, более здоровую
    планету и более справедливый доступ к товарам, и в то же время
    вернуть людям время, которое они могут потратить на то,
    что действительно важно. Встречайте наш автономный автомобиль
    третьего поколения.`,
		trendTags: [
			{
				id: 1,
				tagName: '3D printing',
			},
			{
				id: 2,
				tagName: 'Adtech',
			},
			{
				id: 3,
				tagName: 'Advanced manufacturing',
			},
			{
				id: 4,
				tagName: 'tag4',
			},
			{
				id: 5,
				tagName: 'Artificial intelligence and machine learning (AI/ML)',
			},
			{
				id: 6,
				tagName: 'tag6',
			},
		],
		techTags: [
			{
				id: 1,
				tagName: '3D printing',
			},
			{
				id: 2,
				tagName: 'AI/ML',
			},
			{
				id: 3,
				tagName: 'Intelligent Automation',
			},
			{
				id: 4,
				tagName: 'IoT',
			},
			{
				id: 5,
				tagName: 'Hardware',
			},
			{
				id: 6,
				tagName: 'Payments and Transactions',
			},
		],
		video: `https://www.youtube.com/embed/C4h6wMCMpZ8`,
	},
];

const Pitches: FC = (props: Props) => {
	const [modalState, setModalState] = useState<boolean>(false);

	const [currentIndex, setCurrentIndex] = useState<number>(0);

	const windowsWidth: number = useWindowSize().width;

	const [domLoaded, setDomLoaded] = useState<boolean>(false);

	useEffect(() => {
		setDomLoaded(true);
	}, []);

	useEffect(() => {
		const lastIndex = pitches.length - 1;
		if (currentIndex > lastIndex) {
			setCurrentIndex(0);
		}
	}, [currentIndex, pitches]);

	return (
		<section id='pitches' className='pitches scroll-margin'>
			<div className='wrapper__titles'>
				<h2 className='fw-semibold titles m-0'>Лучшие питчи</h2>
			</div>
			<div className='pitches__container'>
				{pitches.map((pitch: PitchesType, pitchIndex: number) => {
					let position = 'nextSlide';
					if (pitchIndex === currentIndex) {
						position = 'activeSlide';
					}

					if (
						pitchIndex === currentIndex - 1 ||
						(currentIndex === 0 && pitchIndex === pitches.length - 1)
					) {
						position = 'lastSlide';
					}

					return (
						<div className={`pitches__wrapper d-flex  ${position}`} key={pitch.id}>
							<div className={`pitches__content video ${position}`}>
								<Card className={`pitches__video video ${position}`}>
									<CardBody className='video__body'>
										<div className='video__image'>
											<Image
												className=''
												width={domLoaded && windowsWidth >= 576 ? 429 : 301}
												height={
													domLoaded && windowsWidth >= 576 ? 700 : 541
												}
												src={
													domLoaded && windowsWidth >= 576
														? pitch.imageMd
														: pitch.imageSm
												}
												alt={pitch.title}
											/>
										</div>

										<Button
											className='video__play'
											icon={'PlayIcon'}
											onClick={() => setModalState(true)}></Button>
										<div className='video__group'>
											<Button
												className='video__reject'
												onClick={() =>
													setCurrentIndex((prevState) => prevState + 1)
												}
												icon={'RejectIcon'}></Button>
											<Button
												className='video__approve'
												onClick={() =>
													setCurrentIndex((prevState) => prevState + 1)
												}
												icon={'ApproveIcon'}></Button>
										</div>
									</CardBody>
								</Card>
								{/* <Button className='pitches__btn'>Посмотреть все питчи</Button> */}
							</div>
							<div className={`pitches__info ${position}`}>
								<Card className='pitches-card'>
									<CardBody className='pitches-card__body'>
										<h3 className='pitches-card__title'>{pitch.title}</h3>
										{/* <ClampLines
											text={pitch.desc}
											id='really-unique-id'
											lines={4}
											ellipsis='...'
											moreText='Expand'
											lessText='Collapse'
											className='pitches-card__desc'
											innerElement='p'
										/> */}
										<p className='pitches-card__desc'>{pitch.desc}</p>
										<div className='pitches-card__trends'>
											<h5 className='pitches-card__subtitle'>
												Технологические направления:
											</h5>
											<div className='pitches-card__tags'>
												{pitch.trendTags.map((trendTag: TagsTypes) => (
													<p className='tag tag__trend' key={trendTag.id}>
														{trendTag.tagName}
													</p>
												))}
											</div>
										</div>
										<div className='pitches-card__technologies'>
											<h5 className='pitches-card__subtitle'>Технологии:</h5>
											<div className='pitches-card__tags'>
												{pitch.techTags.map((techTag: TagsTypes) => (
													<p className='tag tag__tech ' key={techTag.id}>
														{techTag.tagName}
													</p>
												))}
											</div>
										</div>
										{/* <div className='pitches__btn-wrapper'>
											<Button className='pitches-card__btn'>
												Подробней о стартапе &gt;
											</Button>
										</div> */}
									</CardBody>
								</Card>
							</div>
						</div>
					);
				})}
			</div>
			<Modal
				setIsOpen={() => setModalState(!modalState)}
				isOpen={modalState}
				isCentered={true}
				size={'lg'}
				fullScreen={false}
				titleId='video-modal'>
				<ModalHeader setIsOpen={() => setModalState(!modalState)}>
					<ModalTitle className='startups__title' id='video-modal'>
						Meet Nuro
					</ModalTitle>
				</ModalHeader>
				<ModalBody className='text-center'>
					<div className='pitches__modal'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/C4h6wMCMpZ8'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowFullScreen></iframe>
					</div>
				</ModalBody>
			</Modal>
		</section>
	);
};

export default Pitches;
