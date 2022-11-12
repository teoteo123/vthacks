export interface Listing {
	owner: string,
	propertyName: string,
	propertyDescription: string,
	address: string,
	images: string[],
	rentDates: number[][]
}

export interface Images {
	resources: Image[]
}

export interface Image {
	title: string,
	link: string,
	imageUrl: string,
}