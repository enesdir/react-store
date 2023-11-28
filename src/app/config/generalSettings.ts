export const APP_NAME = 'React Store'
const email = 'author-email@gmail.com'

export const defaultMetaTags = {
	image: '/cover.png',
	description: 'Starter kit for modern web applications',
}

export const appErrorMessages = {
	app: {
		crash: {
			title: 'Oooops... Sorry, I guess, something went wrong. You can:',
			options: {
				email: `contact with author by this email - ${email}`,
				reset: 'Press here to reset the application',
			},
		},
	},
	loader: {
		fail: 'Hmmmmm, there is something wrong with this component loading process... Maybe trying later would be the best idea',
	},
	images: {
		failed: 'something went wrong during image loading :(',
	},
	404: 'Hey bro? What are you looking for?',
}
