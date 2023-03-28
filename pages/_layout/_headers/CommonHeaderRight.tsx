import React, { FC, ReactNode, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button, { IButtonProps } from '../../../components/bootstrap/Button';
import { HeaderRight } from '../../../layout/Header/Header';
import ThemeContext from '../../../context/themeContext';
import useDarkMode from '../../../hooks/useDarkMode';
import useMounted from '../../../hooks/useMounted';
import { useRouter } from 'next/router';
import Logo from '../../../assets/images/logo-protect.svg';
import Image from 'next/image';
import { useWindowSize } from 'react-use';
import Link from 'next/link';
import ScrollspyNav from '../../../components/bootstrap/ScrollspyNav';

interface ICommonHeaderRightProps {
	beforeChildren?: ReactNode;
	afterChildren?: ReactNode;
}
const CommonHeaderRight: FC<ICommonHeaderRightProps> = ({ beforeChildren, afterChildren }) => {
	const { darkModeStatus, setDarkModeStatus } = useDarkMode();

	const { fullScreenStatus, setFullScreenStatus, rightMenuStatus, setRightMenuStatus } =
		useContext(ThemeContext);
	const styledBtn: IButtonProps = {
		color: darkModeStatus ? 'dark' : 'light',
		hoverShadow: 'default',
		isLight: !darkModeStatus,
		size: 'lg',
	};

	const { mounted } = useMounted();

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
						width={253}
						height={100}
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
					{/* <li className='full-header__item'>
						<Button
							className='full-header__link'
							tag='a'
							to='#pitches'
							isActive={activeElementId === 'pitches'}>
							Питчи
						</Button>
					</li> */}
					<li className='full-header__item'>
						<Button
							className='full-header__link'
							tag='a'
							to='#participants'
							isActive={activeElementId === 'participants'}>
							Стартапам
						</Button>
					</li>
					<li className='full-header__item'>
						<Button
							className='full-header__link'
							tag='a'
							to='#participants'
							isActive={activeElementId === 'participants'}>
							Инвесторам
						</Button>
					</li>
					<li className='full-header__item'>
						<Button
							className='full-header__link'
							tag='a'
							to='#participants'
							isActive={activeElementId === 'participants'}>
							Акселераторам
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
			{/* <Link className='full-header__btn-link' href='#' >
				<Button className='full-header__btn bg-l10-info'>Войти</Button>
			</Link> */}
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
