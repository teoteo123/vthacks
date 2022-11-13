import { Transaction } from '@hashgraph/sdk'

import {
  Client,
  PrivateKey,
  AccountCreateTransaction,
  AccountBalanceQuery,
  Hbar,
  TransferTransaction,
} from '@hashgraph/sdk'

const accountId = process.env.MY_ACCOUNT_ID
const privateKey = process.env.MY_PRIVATE_KEY

function checkKeys() {
  if (accountId == null || privateKey == null) {
    throw new Error('Environment variables accountId and privateKey must be present')
  }
}

async function connnect() {
  const txn = await new Transaction()
}

async function getListings(): Promise<string[]> {
  return ['', '']
}

export function applyForListing(from: Date, to: Date) {
  const id = 1
  return 1
}

export function addListing(data: any) {
  const { propertyInfo, images, price } = data
  const { name, location, description } = propertyInfo

  

}

export { getListings }
