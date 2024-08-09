'use client'

// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
import * as React from 'react'

import Logo from '@/components/logo'

import { navConfig } from '@/config/docs'
import { cn } from '@/lib/utils'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuTrigger
} from './ui/navigation-menu'

export function MainNav() {
	// const pathname = usePathname()

	return (
		<div className='mr-4 hidden md:flex'>
			<Logo />
			{/* <nav className='flex items-center gap-4 text-sm lg:gap-6'>
				{navConfig.mainNav.map((item) => (
					<Link
						key={item.title}
						href={item.href}
						className={cn(
							'transition-colors hover:text-foreground/80',
							pathname === `${item.href}`
								? 'text-foreground'
								: 'text-foreground/70'
						)}>
						{item.title}
					</Link>
				))}
			</nav> */}
			<NavigationMenu>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Services</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
							{navConfig.mainNav[0]?.dropdown?.map((component) => (
								<ListItem
									key={component.title}
									title={component.title}
									href={component.href}>
									{component.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenu>
		</div>
	)
}

const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...props}>
					<div className='text-sm font-medium leading-none'>{title}</div>
					<p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = 'ListItem'
