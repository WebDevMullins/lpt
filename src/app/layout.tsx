import { SiteHeader } from '@/components/site-header'
import { siteConfig } from '@/config/site'
import '@/styles/globals.css'

import { GeistSans } from 'geist/font/sans'
import { type Metadata } from 'next'

export const metadata: Metadata = {
	title: siteConfig.name,
	description: siteConfig.description,
	icons: [{ rel: 'icon', url: '/favicon.ico' }]
}

export default function RootLayout({
	children
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang='en'
			className={`${GeistSans.variable}`}>
			<body>
				<SiteHeader />
				{children}
			</body>
		</html>
	)
}
