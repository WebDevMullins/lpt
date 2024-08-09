import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { Dot, Grid, GridSmall } from './backgrounds'

import { heroConfig } from '@/config/docs'

export default function Hero2(): JSX.Element {
	return (
		<section className='relative flex h-dvh w-full items-center overflow-hidden'>
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
				className='absolute inset-0 bottom-1/2 -z-10 mx-auto aspect-square w-[65%] max-w-5xl -translate-y-2/3 rounded-full bg-primary/50 blur-[100px]'
				aria-hidden='true'></div>

			{/* Hero Content */}
			<div className='container text-center'>
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
		</section>
	)
}
