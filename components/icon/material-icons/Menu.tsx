import React, { SVGProps } from 'react';
//my
const SvgMenu = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg width='20' height='13' viewBox='0 0 20 13' fill='none' className='svg-icon' {...props}>
			<path
				d='M1.125 1.28442H13.5'
				stroke='#92989E'
				strokeWidth='1.6'
				strokeLinecap='round'
			/>
			<path
				d='M1.125 12.0344H13.5'
				stroke='#92989E'
				strokeWidth='1.6'
				strokeLinecap='round'
			/>
			<path
				d='M1.125 6.65942H9.875'
				stroke='#92989E'
				strokeWidth='1.6'
				strokeLinecap='round'
			/>
			<path
				d='M18.875 1.65942L13.8125 6.72192L18.875 11.7844'
				stroke='#92989E'
				strokeWidth='1.6'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default SvgMenu;
