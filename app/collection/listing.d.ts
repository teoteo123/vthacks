export interface Listing {
	owner: string,
	propertyName: string,
	propertyDescription: string,
	address: string,
	images: string[],
	rentDates: number[][]
}