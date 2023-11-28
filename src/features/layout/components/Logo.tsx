type LogoProps = {
	isBottom?: boolean
}
export const Logo = ({ isBottom }: LogoProps) => {
	if (isBottom) {
		return <img width={170} height={42} src='/assets/logos/bottomLogo.svg' alt='Our Logo Image' loading='lazy' />
	}
	return <img width={170} height={25} src='/assets/logos/headerLogo.svg' alt='Our Logo Image' loading='lazy' />
}
