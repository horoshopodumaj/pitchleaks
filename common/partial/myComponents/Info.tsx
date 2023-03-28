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
						<h3 className='auth__title'>Попробуйте бесплатно</h3>
						<p className='auth__subtitle'>
							Оставьте заявку и пользуйтесь всеми преимуществами Питчликс бесплатно на
							период бета-тестирования.
						</p>
						<p className='auth__subtitle'>
							Будем сообщать вам новости о развитии сервиса, а когда всё завертится,
							пришлём приглашение на регистрацию.
						</p>
						<Button className='auth__btn'>Оставить заявку</Button>
					</div>
				</CardBody>
			</Card>
			<Card className='contacts'>
				<CardBody className='contacts__body'>
					<div className='contacts__img'></div>
					<div className='contacts__content'>
						<h3 className='contacts__title'>Присоединяйтесь к сообществу!</h3>
						<p className='contacts__subtitle'>
							Вступайте в нашу группу в Telegram, где регулярно публикуются новые
							виде-питчи и новости венчурного рынка.
						</p>
						<p className='contacts__subtitle'>
							Остались вопросы? Напишите нам письмо или спросите в чате поддержки.
						</p>
						<Button className='contacts__btn contacts__btn-mail'>
							Перейти в Telegram
						</Button>
						<Button className='contacts__btn contacts__btn-telegram'>
							Написать письмо
						</Button>
					</div>
				</CardBody>
			</Card>
		</section>
	);
};

export default Info;
