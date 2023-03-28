import React, { FC } from 'react';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import Button from '../../../components/bootstrap/Button';

type Props = {};

const Startups: FC = (props: Props) => {
	return (
		<section>
			<div className='wrapper__titles'>
				<h2 className='fw-semibold titles m-0'>Стартапам</h2>
			</div>
			<Card className='startups bg-l10-success'>
				<CardBody className='startups__body d-flex'>
					<div className='startups__content'>
						<h3 className='startups__title'>Найдите инвестора за 5 минут</h3>
						<p className='startups__subtitle mb-4'>
							Расскажите всем о вашем стартапе с помощью видео-питча — ролика
							позволяющего просто и быстро передать основную идею проекта. <br /> Пока
							мы настраиваем сайт, это можно сделать в нашем Telegram-канале.
						</p>
						<div className='startups__buttons d-flex'>
							<Button className='startups__btn '>Отправить видео-питч</Button>
							<Button className='startups__btn startups__btn--two '>
								Посетить группу{' '}
							</Button>
						</div>
					</div>

					<div className='startups__img'></div>
				</CardBody>
			</Card>
		</section>
	);
};

export default Startups;
