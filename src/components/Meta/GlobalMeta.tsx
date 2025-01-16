import { APP_NAME } from '@/app/config/generalSettings'

export const GlobalMeta = () => {
	return (
		<>
			<meta charSet='UTF-8' />
			<meta name='description' content='Vite React MUI E-Commerce Application' />
			<meta name='application-name' content={APP_NAME} />
			<meta name='apple-mobile-web-app-capable' content='yes' />
			<meta name='apple-mobile-web-app-status-bar-style' content='default' />
			<meta name='apple-mobile-web-app-title' content={APP_NAME} />
			<meta name='format-detection' content='telephone=no' />
			<meta name='mobile-web-app-capable' content='yes' />
			<meta name='theme-color' content='#0059BC' />
		</>
	)
}
