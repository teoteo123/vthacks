export interface Listing {
	owner: string
	propertyInfo: PropertyInfo
	price: Number
	images: string[]
	rentDates: number[][]
}

interface PropertyInfo {
	name: string
	description: string
	location: string
}

export interface Images {
	resources: Image[]
}

export interface Image {
	title: string,
	link: string,
	imageUrl: string,
}