import React from 'react';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import Button from '../../../components/bootstrap/Button';

type Props = {};

const Info = (props: Props) => {
	return (
		<section className='info d-flex scroll-margin' id='contacts'>
			<Card className='auth'>
				<CardBody className='auth__body'>
					<div className='auth__img'></div>
					<div className='auth__content'>
						<h3 className='auth__title'>
							Больше возможностей
							<br />
							после регистрации
						</h3>
						<Button className='auth__btn'>Зарегистрироваться</Button>
					</div>
				</CardBody>
			</Card>
			<Card className='contacts'>
				<CardBody className='contacts__body'>
					<div className='contacts__img'></div>
					<div className='contacts__content'>
						<h3 className='contacts__title'>Блок с контактной информацией</h3>
						<p className='contacts__subtitle'>
							Призыв к действию связаться, задать вопросы, оставить заявку уже сейчас.
						</p>
						<Button className='contacts__btn contacts__btn-mail'>
							Написать письмо
						</Button>
						<Button className='contacts__btn contacts__btn-telegram'>
							Задать вопрос в Telegram
						</Button>
					</div>
				</CardBody>
			</Card>
		</section>
	);
};

export default Info;
