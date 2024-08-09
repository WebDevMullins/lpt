import type { MainNavItem, SidebarNavItem } from '@/types/nav'
import type {
	CTAConfig,
	FAQConfig,
	FeatureConfig,
	HeroConfig,
	LogoCloudConfig,
	PricingConfig
} from '@/types/sections'
import {
	card,
	dataCards,
	gridIcons,
	gridImages,
	hero,
	imageCards,
	imageSelector
} from './features'

interface NavConfig {
	mainNav: MainNavItem[]
	sidebarNav: SidebarNavItem[]
}

export const companyInfo = {
	title: 'Company Name',
	email: 'company@email.com',
	image: '/logo.png',
	url: 'https://company.com'
}

export const navConfig: NavConfig = {
	mainNav: [
		{
			title: 'Services',
			href: '/services',
			dropdown: [
				{
					title: 'Landscape Management',
					href: '/landscape-management',
					description: 'Description of Landscape Management'
				},
				{
					title: 'Landscape Design & Installation',
					href: '/landscape-design-installation',
					description: 'Description of Landscape Design & Installation'
				},
				{
					title: 'Irrigation & Water Management',
					href: '/irrigation-water-management',
					description: 'Description of Irrigation & Water Management'
				},
				{
					title: 'Snow & Ice Management',
					href: '/snow-ice-management',
					description: 'Description of Snow & Ice Management'
				}
			]
		},
		{
			title: 'About Us',
			href: '/about-us'
		}
	],
	sidebarNav: [
		{
			title: 'Services',
			href: '/services',
			items: []
		},
		{
			title: 'About Us',
			href: '/about-us',
			items: []
		}
	]
}

export const footerConfig = {
	navConfig: navConfig,
	companyInfo: companyInfo,
	legalLinks: [
		{
			title: 'Contact',
			href: '/contact'
		},
		{
			title: 'Privacy Policy',
			href: '/privacy'
		},
		{
			title: 'Terms of Service',
			href: '/terms'
		}
	]
}

export const heroConfig: HeroConfig = {
	backgroundType: 'Dot', // Grid, GridSmall, Dot, or empty for no background
	heading: 'Headline Placeholder',
	description:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo ratione, mollitia ex temporibus consequatur, saepe adipisci labore delectus fuga iure dicta cumque recusandae accusamus aperiam sunt omnis veniam deleniti?',
	buttons: [
		{
			href: '/#',
			text: `Call to Action`,
			variant: 'default'
		},
		{
			href: '/#',
			text: `Call to Action`,
			variant: 'outline'
		}
	]
}

export const logoCloudConfig: LogoCloudConfig = {
	title: '',
	logos: [
		{
			name: 'Github',
			href: 'https://github.com'
		},
		{
			name: 'MongoDB',
			href: 'https://mongodb.com'
		},
		{
			name: 'Nextjs',
			href: 'https://nextjs.org'
		},
		{
			name: 'Prisma',
			href: 'https://prisma.com'
		},
		{
			name: 'Tailwindcss',
			href: 'https://tailwindcss.com'
		},
		{
			name: 'Vercel',
			href: 'https://vercel.com'
		}
	]
}

export const ctaConfig: CTAConfig = {
	title: 'Title Placeholder',
	heading: 'Heading Placeholder',
	description:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo ratione, mollitia ex temporibus consequatur, saepe adipisci labore delectus fuga iure dicta cumque recusandae accusamus aperiam sunt omnis veniam deleniti?',
	button: {
		text: 'Call to Action',
		href: '/#',
		variant: 'default'
	}
}

export const faqConfig: FAQConfig = {
	title: 'FAQ',
	heading: 'Frequently Asked Questions',
	faq: [
		{
			question: 'Question 1?',
			answer:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eum nostrum eaque nisi corrupti tenetur hic officia omnis sed pariatur, numquam quod quibusdam iste veniam similique nemo minus consequuntur qui.'
		},
		{
			question: 'Question 2?',
			answer:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eum nostrum eaque nisi corrupti tenetur hic officia omnis sed pariatur, numquam quod quibusdam iste veniam similique nemo minus consequuntur qui.'
		},
		{
			question: 'Question 3?',
			answer:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eum nostrum eaque nisi corrupti tenetur hic officia omnis sed pariatur, numquam quod quibusdam iste veniam similique nemo minus consequuntur qui.'
		},
		{
			question: 'Question 4?',
			answer:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eum nostrum eaque nisi corrupti tenetur hic officia omnis sed pariatur, numquam quod quibusdam iste veniam similique nemo minus consequuntur qui.'
		},
		{
			question: 'Question 5?',
			answer:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eum nostrum eaque nisi corrupti tenetur hic officia omnis sed pariatur, numquam quod quibusdam iste veniam similique nemo minus consequuntur qui.'
		},
		{
			question: 'Question 6?',
			answer:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eum nostrum eaque nisi corrupti tenetur hic officia omnis sed pariatur, numquam quod quibusdam iste veniam similique nemo minus consequuntur qui.'
		}
	]
}

export const testimonialConfig = {
	title: 'Testimonials',
	heading: 'Heading Placeholder',
	testimonials: [
		{
			name: 'First Last Name',
			title: 'Title, Company Name',
			image: 'https://i.pravatar.cc/?img=1',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
		},
		{
			name: 'First Last Name',
			title: 'Title, Company Name',
			image: 'https://i.pravatar.cc/?img=7',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
		},
		{
			name: 'First Last Name',
			title: 'Title, Company Name',
			image: 'https://i.pravatar.cc/?img=3',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
		},
		{
			name: 'First Last Name',
			title: 'Title, Company Name',
			image: 'https://i.pravatar.cc/?img=8',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
		},
		{
			name: 'First Last Name',
			title: 'Title, Company Name',
			image: 'https://i.pravatar.cc/?img=5',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
		},
		{
			name: 'First Last Name',
			title: 'Title, Company Name',
			image: 'https://i.pravatar.cc/?img=6',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
		}
	]
}

export const pricingConfig: PricingConfig = {
	title: 'Title Placeholder',
	heading: 'Heading Placeholder',
	cards: [
		{
			title: 'Basic',
			description: 'For startups & small businesses',
			monthlyPrice: 12,
			yearlyPrice: 100,
			features: [
				'All features',
				'1 user',
				'5 GB cloud storage',
				'100 GB bandwidth',
				'Support'
			]
		},
		{
			title: 'Professional',
			description: 'For medium-sized businesses',
			monthlyPrice: 24,
			yearlyPrice: 200,
			features: [
				'All features',
				'5 users',
				'50 GB cloud storage',
				'1 TB bandwidth',
				'Priority upport'
			]
		},
		{
			title: 'Enterprise',
			description: 'For large businesses',
			monthlyPrice: 36,
			yearlyPrice: 300,
			features: [
				'All features',
				'unlimited users',
				'500 GB cloud storage',
				'Unlimited bandwidth',
				'Enhanced priority support',
				'API access'
			]
		}
	],
	singlePrice: {
		heading: 'Heading Placeholder',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sit aliquam eveniet exercitationem dolor tempore quas explicabo saepe voluptas tempora!',
		features: [
			'All features',
			'1 user',
			'5 GB cloud storage',
			'100 GB bandwidth',
			'Support',
			'Discord Channel Access'
		],
		cardHeading: 'Heading Placeholder',
		price: 12,
		button: {
			text: 'Call to Action',
			href: '/#',
			variant: 'default'
		}
	},
	table: {
		tableHeaders: [
			{
				title: 'Basic',
				description: 'For startups & small businesses',
				monthlyPrice: 12,
				yearlyPrice: 100,
				data: [
					'All features',
					'1 user',
					'5 GB cloud storage',
					'100 GB bandwidth',
					'Support'
				]
			},
			{
				title: 'Professional',
				description: 'For medium-sized businesses',
				monthlyPrice: 24,
				yearlyPrice: 200,
				data: [
					'All features',
					'5 users',
					'50 GB cloud storage',
					'1 TB bandwidth',
					'Priority upport'
				]
			},
			{
				title: 'Enterprise',
				description: 'For large businesses',
				monthlyPrice: 36,
				yearlyPrice: 300,
				data: [
					'All features',
					'unlimited users',
					'500 GB cloud storage',
					'Unlimited bandwidth',
					'Enhanced priority support',
					'API access'
				]
			}
		],
		section: [
			{
				title: 'Features',
				rows: [
					{
						title: 'Integrations',
						data: [{ 1: true, 2: true, 3: true }]
					},
					{
						title: 'Connect to DB',
						data: [{ 1: true, 2: true, 3: true }]
					},
					{
						title: 'Import/Export',
						data: [{ 1: false, 2: true, 3: true }]
					},
					{
						title: 'Team Members',
						data: [{ 1: false, 2: 'Up to 5 users', 3: 'Up to 20 users' }]
					},
					{
						title: 'Data Storage',
						data: [{ 1: '5 GB', 2: '50 GB', 3: '1 TB' }]
					}
				]
			},
			{
				title: 'Reporting',
				rows: [
					{
						title: 'Basic',
						data: [{ 1: true, 2: true, 3: true }]
					},
					{
						title: 'Advanced',
						data: [{ 1: false, 2: true, 3: true }]
					},
					{
						title: 'Professional',
						data: [{ 1: false, 2: true, 3: true }]
					},
					{
						title: 'Custom',
						data: [{ 1: false, 2: false, 3: true }]
					}
				]
			},
			{
				title: 'Support',
				rows: [
					{
						title: 'Email',
						data: [{ 1: true, 2: true, 3: true }]
					},
					{
						title: 'Priority',
						data: [{ 1: false, 2: true, 3: true }]
					},
					{
						title: 'Onboarding',
						data: [{ 1: false, 2: false, 3: true }]
					}
				]
			}
		]
	}
}

export const featureConfig: FeatureConfig = {
	header: {
		title: 'Title Placeholder',
		heading: 'Heading Placeholder'
	},
	gridImages: gridImages,
	gridIcons: gridIcons,
	hero: hero,
	card: card,
	imageSelector: imageSelector,
	imageCards: imageCards,
	dataCards: dataCards
}
