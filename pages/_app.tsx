import '../styles/styles.scss';
import type { AppProps } from 'next/app';
import { ThemeContextProvider } from '../context/themeContext';
import { getOS } from '../helpers/helpers';
import Portal from '../layout/Portal/Portal';
import { ReactNotifications } from 'react-notifications-component';
import Wrapper from '../layout/Wrapper/Wrapper';
import { appWithTranslation } from 'next-i18next';
import App from '../layout/App/App';
import Footer from '../layout/Footer/Footer';
import HeaderRoutes from '../layout/Header/HeaderRoutes';

const MyApp = ({ Component, pageProps }: AppProps) => {
	getOS();

	return (
		<ThemeContextProvider>
			<App>
				<HeaderRoutes />
				<Wrapper>
					<Component {...pageProps} />
				</Wrapper>
				<Footer />
			</App>
			<Portal id='portal-notification'>
				<ReactNotifications />
			</Portal>
		</ThemeContextProvider>
	);
};

export default appWithTranslation(MyApp /*, nextI18NextConfig */);
