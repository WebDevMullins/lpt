export interface MainNavItem {
	title: string
	href: string
	dropdown?: DropdownNavItem[]
	disabled?: boolean
	external?: boolean
	label?: string
}

export interface SidebarNavItem extends MainNavItem {
	items: SidebarNavItem[]
}

export interface DropdownNavItem extends MainNavItem {
	// items: MainNavItem[]
	description?: string
}
