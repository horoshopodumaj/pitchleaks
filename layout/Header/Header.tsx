import React, { FC, ReactElement, ReactNode, useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useMeasure, useWindowSize } from 'react-use';
import ThemeContext from '../../context/themeContext';
import Button from '../../components/bootstrap/Button';
import Portal from '../Portal/Portal';
import useDarkMode from '../../hooks/useDarkMode';
import useMounted from '../../hooks/useMounted';
import Mounted from '../../components/Mounted';
import useRoot from '../../hooks/useRoot';
import { WrapperContainer } from '../Wrapper/Wrapper';
import Logo from '../../assets/images/logo-protect.svg';
import LogoSm from '../../assets/images/logo-sm.svg';
import Image from 'next/image';
import Link from 'next/link';

interface IHeaderLeftProps {
	children: ReactNode;
	className?: string;
}
export const HeaderLeft: FC<IHeaderLeftProps> = ({ children, className }) => {
	return <div className={classNames('header-left', 'col-md', className)}>{children}</div>;
};
HeaderLeft.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
HeaderLeft.defaultProps = {
	className: undefined,
};

interface IHeaderRightProps {
	children: ReactNode;
	className?: string;
}
export const HeaderRight: FC<IHeaderRightProps> = ({ children, className }) => {
	const [ref, { height }] = useMeasure<HTMLDivElement>();

	const root = useRoot();
	root?.style.setProperty('--header-right-height', `${height}px`);

	return (
		<div ref={ref} className={classNames('header-right', 'col-md-auto', className)}>
			{children}
		</div>
	);
};
HeaderRight.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
HeaderRight.defaultProps = {
	className: undefined,
};

interface IHeaderProps {
	children: ReactElement<IHeaderLeftProps> | ReactElement<IHeaderRightProps> | ReactNode;
	hasLeftMobileMenu?: boolean;
	hasRightMobileMenu?: boolean;
}
const Header: FC<IHeaderProps> = ({ children, hasLeftMobileMenu, hasRightMobileMenu }) => {
	const { themeStatus } = useDarkMode();
	const { mounted } = useMounted();

	const windowsWidth = useWindowSize().width;
	const [refMobileHeader, sizeMobileHeader] = useMeasure<HTMLDivElement>();
	const [refHeader, sizeHeader] = useMeasure<HTMLDivElement>();

	const [root, setRoot] = useState<any>(null);
	useEffect(() => {
		if (mounted) {
			setRoot(document.documentElement);
		}
	}, [mounted]);
	root?.style.setProperty('--mobile-header-height', `${sizeMobileHeader.height}px`);
	root?.style.setProperty('--header-height', `${sizeHeader.height}px`);

	const {
		asideStatus,
		setAsideStatus,
		leftMenuStatus,
		setLeftMenuStatus,
		rightMenuStatus,
		setRightMenuStatus,
	} = useContext(ThemeContext);

	useEffect(() => {
		if (
			(asideStatus || leftMenuStatus || rightMenuStatus) &&
			windowsWidth < Number(process.env.NEXT_PUBLIC_MOBILE_BREAKPOINT_SIZE)
		)
			document.body.classList.add('overflow-hidden');
		return () => {
			document.body.classList.remove('overflow-hidden');
		};
	});

	return (
		<Mounted>
			<header ref={refMobileHeader} className='mobile-header header-mobile'>
				<div className='header-mobile__container'>
					<div className='row flex-column'>
						<div className='col d-flex justify-content-end p-0 align-items-center'>
							{/* aside button */}
							{/* <Button
								aria-label='Toggle Aside'
								className='mobile-header-toggle header-mobile__btn'
								size='lg'
								color={asideStatus ? 'primary' : themeStatus}
								isLight={asideStatus}
								icon={'MenuLeft'}
								onClick={() => {
									setAsideStatus(!asideStatus);
									setLeftMenuStatus(false);
									setRightMenuStatus(false);
								}}
							/> */}

							{hasRightMobileMenu && (
								<Button
									aria-label='Toggle Right Menu'
									className='mobile-header-toggle header-mobile__btn'
									size='lg'
									color={rightMenuStatus ? 'primary' : themeStatus}
									isLight={rightMenuStatus}
									icon={'Menu'}
									onClick={() => {
										setAsideStatus(false);
										setLeftMenuStatus(false);
										setRightMenuStatus(!rightMenuStatus);
									}}
								/>
							)}
						</div>

						<div className='col-12 px-0 d-flex align-items-center justify-content-center position-relative'>
							<div className='full-header__logo header-mobile__logo'>
								<Link href='#home'>
									<Image
										className='full-header__img header-mobile__img-md'
										width={windowsWidth >= 610 ? 253 : 200}
										height={windowsWidth >= 610 ? 100 : 80}
										src={Logo}
										alt={'logo'}
									/>
								</Link>
							</div>
							{/* <Link href='#'>
								<Button className='full-header__btn header-mobile__button bg-l10-info'>
									Войти
								</Button>
							</Link> */}
						</div>
					</div>
				</div>
			</header>
			<header
				ref={refHeader}
				className={classNames('header', {
					'header-left-open': leftMenuStatus,
					'header-right-open': rightMenuStatus,
				})}>
				<WrapperContainer>
					{children}
					{(leftMenuStatus || rightMenuStatus) && (
						<Portal>
							<div
								role='presentation'
								className={classNames('header-overlay', {
									'header-overlay-left-menu': leftMenuStatus,
									'header-overlay-right-menu': rightMenuStatus,
								})}
								onClick={() => {
									setAsideStatus(false);
									setLeftMenuStatus(false);
									setRightMenuStatus(false);
								}}
							/>
						</Portal>
					)}
				</WrapperContainer>
			</header>
		</Mounted>
	);
};
Header.propTypes = {
	children: PropTypes.node.isRequired,
	hasLeftMobileMenu: PropTypes.bool,
	hasRightMobileMenu: PropTypes.bool,
};
Header.defaultProps = {
	hasLeftMobileMenu: true,
	hasRightMobileMenu: true,
};

export default Header;
