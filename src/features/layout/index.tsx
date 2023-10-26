import type { ReactNode } from 'react'

import Footer from './footer/Footer'
import { Header } from './Header'

type LayoutProps = {
	children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	)
}

export default Layout
