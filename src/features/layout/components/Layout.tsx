import type { ReactNode } from 'react'

import { Footer } from './footer/Footer'
import { Header } from './Header'

type LayoutProps = {
	children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	)
}
