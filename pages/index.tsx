import React, { useContext, useEffect } from 'react';
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { demoPagesMenu } from '../menu';
import { useTour } from '@reactour/tour';
import ThemeContext from '../context/themeContext';
import WithUs from '../common/partial/myComponents/WithUs';
import Startups from '../common/partial/myComponents/Startups';
import Info from '../common/partial/myComponents/Info';
import MainCarousel from '../common/partial/myComponents/MainCarousel';
import Sponsors from '../common/partial/myComponents/Sponsors';
import Investors from '../common/partial/myComponents/Investors';
import Pitches from '../common/partial/myComponents/Pitches';

const Index: NextPage = () => {
	const { mobileDesign } = useContext(ThemeContext);
	/**
	 * Tour Start
	 */
	const { setIsOpen } = useTour();
	useEffect(() => {
		if (
			typeof window !== 'undefined' &&
			localStorage.getItem('tourModalStarted') !== 'shown' &&
			!mobileDesign
		) {
			setTimeout(() => {
				setIsOpen(true);
				localStorage.setItem('tourModalStarted', 'shown');
			}, 3000);
		}
		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Head>
				<title>{demoPagesMenu.sales.subMenu.dashboard.text}</title>
			</Head>
			<div className='row w-100'>
				<div className='col-12 px-0'>
					<MainCarousel />
				</div>
				<div className='col-12 px-0'>
					<WithUs />
				</div>
				<div className='col-12 px-0'>
					<Startups />
				</div>
				<div className='col-12 px-0'>
					<Pitches />
				</div>
				<section id='participants' className='scroll-margin p-0 m-0'>
					<div className='col-12 px-0'>
						<Investors />
					</div>
				</section>
				<div className='col-12 px-0'>
					<Sponsors />
				</div>

				<div className='col-12 px-0 '>
					<Info />
				</div>
			</div>
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		// @ts-ignore
		...(await serverSideTranslations(locale, ['common', 'menu'])),
	},
});

export default Index;
