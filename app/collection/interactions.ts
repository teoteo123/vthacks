

import { contract } from '../../utils/contract'

/**
 * 
 * @returns
 *    listing info
 */
export async function getListingById(id: Number) {
  const result = await contract.getListingById(id, { gasLimit: 500_000 })
  return result
}

export async function getApplicationsForListing(id: Number) {
  const result = await contract.getApplicationsForListing(id, { gasLimit: 500_000 })
  return result
}

export async function approveApplication(listingId: Number, appplicationId=0) {
  const result = await contract.approveApplication(listingId, appplicationId, { gasLimit: 500_000 })
  console.log(result)
}

export async function getListings() {
  console.log('wahoo')
  const resp = await contract.getListings({ gasLimit: 500_000 })
  console.log(resp)
  return resp
}

export async function applyForListing(id: Number, from: Date, to: Date) {
  const fromYears = from.getFullYear() - 2022
  const fromIndex = fromYears * 365 + from.getMonth() * 30 + from.getDate()

  const toYears = to.getFullYear() - 2022
  const toIndex = toYears * 365 + from.getMonth() * 30 + to.getDate()

  const result = await contract.applyForListing(id, fromIndex, toIndex, { gasLimit: 500_000 })

  console.log(result)
}

export async function addListing(data: any) {
  const { propertyInfo, images, price } = data
  const { name, location, description } = propertyInfo

  const propertyInfoArr = [name, location, description]

  const result = await contract.functions.addListing(propertyInfoArr, images, price, {
    gasLimit: 500_000,
  })

  console.log(result)

}
