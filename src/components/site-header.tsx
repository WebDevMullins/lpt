// import {
// 	SignInButton,
// 	SignUpButton,
// 	SignedIn,
// 	SignedOut,
// 	UserButton
// } from '@clerk/nextjs'

// import { Button } from '@/components/ui/button'

import { MainNav } from '@/components/main-nav'
import { MobileNav } from '@/components/mobile-nav'
// import { ModeToggle } from '@/components/mode-toggle'

export function SiteHeader() {
	return (
		<header className='fixed top-0 z-50 mx-auto w-full items-center justify-center bg-transparent backdrop-blur-xl'>
			<div className='container flex h-16 max-w-screen-2xl items-center'>
				<MainNav />
				<MobileNav />
				<div className='flex h-full flex-1 items-center justify-between md:justify-end'>
					<div className='w-full flex-1 md:w-auto md:flex-none'>
						{/* <CommandMenu /> */}
					</div>
					{/* <nav className='flex items-center justify-center space-x-6'>
						<ModeToggle />
						<SignedOut>
							<SignInButton
								mode='modal'
								forceRedirectUrl={'/'}>
								<Button>Sign In</Button>
							</SignInButton>
							<SignUpButton
								mode='modal'
								forceRedirectUrl={'/'}>
								<Button variant={'secondary'}>Sign Up</Button>
							</SignUpButton>
						</SignedOut>
						<SignedIn>
							<UserButton />
						</SignedIn>
					</nav> */}
				</div>
			</div>
		</header>
	)
}
