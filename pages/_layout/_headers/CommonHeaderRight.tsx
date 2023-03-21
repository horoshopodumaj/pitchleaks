import React, { FC, ReactNode, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'next-i18next';
import classNames from 'classnames';
import { useTour } from '@reactour/tour';
import Button, { IButtonProps } from '../../../components/bootstrap/Button';
import { HeaderRight } from '../../../layout/Header/Header';
import OffCanvas, {
	OffCanvasBody,
	OffCanvasHeader,
	OffCanvasTitle,
} from '../../../components/bootstrap/OffCanvas';
import Alert from '../../../components/bootstrap/Alert';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../components/bootstrap/Dropdown';
import Icon from '../../../components/icon/Icon';
import ThemeContext from '../../../context/themeContext';
import LANG, { getLangWithKey, ILang } from '../../../lang';
import showNotification from '../../../components/extras/showNotification';
import useDarkMode from '../../../hooks/useDarkMode';
import Popovers from '../../../components/bootstrap/Popovers';
import Spinner from '../../../components/bootstrap/Spinner';
import useMounted from '../../../hooks/useMounted';
import { useRouter } from 'next/router';
import Logo from '../../../assets/images/logo.svg';
import { WrapperContainer } from '../../../layout/Wrapper/Wrapper';
import Image from 'next/image';
import { useMeasure, useWindowSize } from 'react-use';
import Link from 'next/link';
import ScrollspyNav from '../../../components/bootstrap/ScrollspyNav';

interface ICommonHeaderRightProps {
	beforeChildren?: ReactNode;
	afterChildren?: ReactNode;
}
const CommonHeaderRight: FC<ICommonHeaderRightProps> = ({ beforeChildren, afterChildren }) => {
	const router = useRouter();
	const { darkModeStatus, setDarkModeStatus } = useDarkMode();

	const { fullScreenStatus, setFullScreenStatus, rightMenuStatus, setRightMenuStatus } =
		useContext(ThemeContext);
	const styledBtn: IButtonProps = {
		color: darkModeStatus ? 'dark' : 'light',
		hoverShadow: 'default',
		isLight: !darkModeStatus,
		size: 'lg',
	};

	const [offcanvasStatus, setOffcanvasStatus] = useState(false);

	const { i18n } = useTranslation();

	const changeLanguage = (lng: ILang['key']['lng']) => {
		i18n.changeLanguage(lng);
		router.push(router.pathname, router.pathname, { locale: lng });
		showNotification(
			<span className='d-flex align-items-center'>
				<Icon icon={getLangWithKey(lng)?.icon} size='lg' className='me-1' />
				<span>{`Language changed to ${getLangWithKey(lng)?.text}`}</span>
			</span>,
			'You updated the language of the site. (Only "Aside" was prepared as an example.)',
		);
	};

	const { mounted } = useMounted();

	const { setIsOpen } = useTour();

	const windowsWidth = useWindowSize().width;

	const [activeElementId, setActiveElementId] = useState(null);

	useEffect(() => {
		if (
			rightMenuStatus &&
			windowsWidth < Number(process.env.NEXT_PUBLIC_MOBILE_BREAKPOINT_SIZE)
		)
			document.body.classList.add('overflow-hidden');
		return () => {
			document.body.classList.remove('overflow-hidden');
		};
	});

	return (
		<HeaderRight className='full-header d-flex align-items-center'>
			<div className='full-header__logo'>
				<Link href='#home'>
					<Image
						className='full-header__img'
						src={Logo}
						alt='logo'
						width={203}
						height={77}
					/>
				</Link>
			</div>
			<Button
				aria-label='Close Menu'
				className='mobile-header-toggle full-header__close-btn'
				icon={'MenuClose'}
				onClick={() => {
					setRightMenuStatus(!rightMenuStatus);
				}}
			/>
			<ScrollspyNav
				items={['home', 'about', 'pitches', 'participants', 'contacts']}
				setActiveId={setActiveElementId}
				offset={1280}
			/>
			<Button
				aria-label='Toggle Aside'
				className='mobile-header-toggle header-mobile__btn header-mobile__close-btn'
				size='lg'
				icon={'MenuLeft'}
				onClick={() => {
					setRightMenuStatus(!rightMenuStatus);
				}}
			/>
			<nav className='full-header__nav'>
				<ul className='full-header__menu d-flex'>
					<li className='full-header__item'>
						<Button
							className='full-header__link'
							tag='a'
							to='#about'
							isActive={activeElementId === 'about'}>
							О проекте
						</Button>
					</li>
					<li className='full-header__item'>
						<Button
							className='full-header__link'
							tag='a'
							to='#pitches'
							isActive={activeElementId === 'pitches'}>
							Питчи
						</Button>
					</li>
					<li className='full-header__item'>
						<Button
							className='full-header__link'
							tag='a'
							to='#participants'
							isActive={activeElementId === 'participants'}>
							Участники
						</Button>
					</li>
					<li className='full-header__item'>
						<Button
							className='full-header__link'
							tag='a'
							to='#contacts'
							isActive={activeElementId === 'contacts'}>
							Контакты
						</Button>
					</li>
				</ul>
			</nav>
			<Link className='full-header__btn-link' href='#'>
				<Button className='full-header__btn bg-l10-info'>Войти</Button>
			</Link>
		</HeaderRight>
	);
};
CommonHeaderRight.propTypes = {
	beforeChildren: PropTypes.node,
	afterChildren: PropTypes.node,
};
CommonHeaderRight.defaultProps = {
	beforeChildren: null,
	afterChildren: null,
};

export default CommonHeaderRight;
