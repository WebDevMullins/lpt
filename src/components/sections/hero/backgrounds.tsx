export function Grid({ children }: { children?: React.ReactNode }) {
	return (
		<div className='bg-grid-black/[0.1] dark:bg-grid-white/[.1] relative flex h-full w-full items-center justify-center bg-transparent'>
			{/* Radial gradient for the container to give a faded look */}
			<div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)] dark:bg-background'></div>
			{children}
		</div>
	)
}

export function GridSmall() {
	return (
		<div className='bg-grid-small-black/[0.1] dark:bg-grid-small-white/[0.1] relative flex h-full w-full items-center justify-center bg-transparent'>
			{/* Radial gradient for the container to give a faded look */}
			<div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)] dark:bg-background'></div>
		</div>
	)
}

export function Dot() {
	return (
		<div className='bg-dot-black/[0.2] dark:bg-dot-white/[0.2] relative flex h-full w-full items-center justify-center bg-transparent'>
			{/* Radial gradient for the container to give a faded look */}
			<div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)] dark:bg-background'></div>
		</div>
	)
}
