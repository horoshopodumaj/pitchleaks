import React from 'react';
import ContentLoader from 'react-content-loader';

type Props = {};

const Loader = (props: Props) => {
	return (
		<ContentLoader
			speed={2}
			width={1325}
			height={230}
			viewBox='0 0 1325 230'
			backgroundColor='#e4e2e2'
			foregroundColor='#d2cbcb'
			className='loader'
			{...props}>
			<rect x='0' y='15' rx='0' ry='0' width='1325' height='200' />
		</ContentLoader>
	);
};

export default Loader;
