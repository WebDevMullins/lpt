import Hero1 from '@/components/sections/hero/hero1'
import Hero2 from '@/components/sections/hero/hero2'
import Hero3 from '@/components/sections/hero/hero3'

export default function HomePage() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center'>
			{/* <h1 className='text-pretty text-4xl font-extrabold tracking-tight sm:text-[5rem]'>
				Landscape Professionals of Texas
			</h1> */}
			<Hero1 />
			<Hero2 />
			<Hero3 />
		</main>
	)
}
