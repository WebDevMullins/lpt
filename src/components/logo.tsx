// import { companyInfo } from '@/config/docs'
import { siteConfig } from '@/config/site'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
	return (
		<Link
			href='/'
			className='mr-6 flex items-center justify-center space-x-2'>
			<Image
				alt={`${siteConfig.name} Logo`}
				src={'/favicon.ico'}
				height={24}
				width={24}
			/>
			<span className='hidden font-bold sm:inline-block'>
				{siteConfig.name}
			</span>
		</Link>
	)
}

export default Logo
