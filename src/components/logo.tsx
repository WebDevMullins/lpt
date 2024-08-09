// import { companyInfo } from '@/config/docs'
import { companyInfo } from '@/config/docs'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
	return (
		<Link
			href='/'
			className='mr-6 flex items-center justify-center space-x-2'>
			<Image
				alt={`${companyInfo.name} Logo`}
				src={'/favicon.ico'}
				height={24}
				width={24}
			/>
			<span className='hidden font-bold sm:inline-block'>
				{companyInfo.name}
			</span>
		</Link>
	)
}

export default Logo
