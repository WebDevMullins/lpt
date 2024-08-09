import type { ButtonProps } from '@/components/ui/button'

export interface HeroConfig {
	backgroundType: 'Grid' | 'GridSmall' | 'Dot' | ''
	heading: string
	description: string
	buttons: SectionButton[]
}

export interface SectionButton extends ButtonProps {
	href: string
	text: string
}

export interface LogoCloudConfig {
	title: string
	logos: {
		name: string
		href: string
	}[]
}

export interface CTAConfig {
	title: string
	heading: string
	description: string
	button: SectionButton
}

export interface FAQConfig {
	title: string
	heading: string
	faq: {
		question: string
		answer: string
	}[]
}

export interface TestimonialConfig {
	title: string
	heading: string
	testimonials: {
		name: string
		title: string
		image: string
		content: string
	}[]
}

export interface PricingConfig {
	title: string
	heading: string
	cards: PricingCard[]
	singlePrice: SinglePricing
	table: PricingTable
}

interface PricingCard {
	title: string
	description: string
	monthlyPrice: number
	yearlyPrice: number
	features: string[]
}

interface SinglePricing {
	heading: string
	description: string
	features: string[]
	cardHeading: string
	price: number
	button: SectionButton
}

interface PricingTable {
	tableHeaders: PricingTableHeader[]
	section: Section[]
}

interface PricingTableHeader {
	title: string
	description: string
	monthlyPrice: number
	yearlyPrice: number
	data: string[]
}

interface Section {
	title: string
	rows: Row[]
}

export interface Row {
	title: string
	data: RowData[]
}

export type RowData = Record<number, string | boolean>

export interface FeatureConfig {
	header: FeatureHeading
	description?: string
	gridImages?: FeatureGridImages[]
	gridIcons?: FeatureGridIcons[]
	hero: FeatureHero
	card: FeatureCard[]
	imageSelector: FeatureImageSelector
	imageCards: FeatureImageCards[]
	dataCards: FeatureDataCard
}

interface FeatureHeading {
	title?: string
	heading?: string
}

interface FeatureGridImages {
	title: string
	heading: string
	description: string
	image: string
}
export interface FeatureGridIcons {
	title: string
	heading: string
	description: string
	icon: string
}

interface FeatureHero {
	title: string
	heading: string
	description: string
	image: string
}

interface FeatureCard {
	heading: string
	description: string
	icon: string
}

interface FeatureImageSelector {
	header: FeatureHeading
	features: FeatureData[]
}

interface FeatureData {
	description: string
	icon: string
	image: string
}

interface FeatureImageCards {
	heading: string
	description: string
	image: string
}

interface FeatureDataCard {
	header: FeatureHeading
	description: string
	features: FeatureDataCardFeature[]
}

interface FeatureDataCardFeature {
	data: string
	description: string
	icon: string
}
