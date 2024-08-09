import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { Dot, Grid, GridSmall } from './backgrounds'

import { heroConfig } from '@/config/docs'

export default function Hero1(): JSX.Element {
	return (
		<section className='relative flex h-dvh w-full justify-center overflow-hidden pb-32 md:pb-64'>
			{/* Background Gradient */}
			<div className='absolute inset-0 -z-20 flex overflow-hidden'>
				{/* <Image
					src={heroBG}
					alt='Gradient Background'
					fill={true}
				/> */}

				{heroConfig.backgroundType === 'Grid' && <Grid />}
				{heroConfig.backgroundType === 'GridSmall' && <GridSmall />}
				{heroConfig.backgroundType === 'Dot' && <Dot />}
			</div>

			<div
				className='absolute inset-0 top-[60%] -z-10 mx-auto h-[30%] w-[50%] max-w-3xl rounded-full bg-primary/50 blur-[100px] sm:top-[50%]'
				aria-hidden='true'></div>
			<div className='absolute inset-0 -z-20 flex overflow-hidden'></div>

			{/* Hero Content */}
			<div className='container flex text-center'>
				<div className='flex w-full flex-col items-center justify-center gap-y-8'>
					<h1 className='text-pretty bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-5xl font-extrabold leading-none text-transparent md:text-6xl'>
						{heroConfig.heading}
					</h1>
					<p className='mx-auto max-w-sm text-lg sm:max-w-md md:max-w-lg'>
						{heroConfig.description}
					</p>
					<div className='mx-auto flex max-w-sm flex-col justify-center gap-4 sm:flex-row'>
						{heroConfig.buttons.map((button, index) => (
							<Button
								asChild
								key={index}
								variant={button.variant}
								className='rounded-2xl'
								data-aos='fade-up'>
								<Link href={button.href}>{button.text}</Link>
							</Button>
						))}
					</div>
				</div>
			</div>
			{/* Hero Image */}
			<div
				className='container absolute -bottom-2 z-10 mx-auto max-w-4xl'
				aria-hidden='true'>
				<div className='to-base-300/70 after:bg-base-100/30 dark:to-base-300/50 dark:after:bg-base-800/50 relative h-fit rounded-t-2xl bg-gradient-to-b from-primary to-40% after:absolute after:inset-0 after:rounded-t-[calc(1rem-1px)]'>
					<Image
						alt='logo'
						className='relative z-20 rounded-t-2xl p-1 md:p-2'
						decoding='async'
						height='938'
						loading='eager'
						src={''}
						width='1500'
					/>
				</div>
			</div>
		</section>
	)
}
