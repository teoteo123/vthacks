import { Transaction } from '@hashgraph/sdk'

import {
  Client,
  PrivateKey,
  AccountCreateTransaction,
  AccountBalanceQuery,
  Hbar,
  TransferTransaction,
} from '@hashgraph/sdk'

require('dotenv').config()

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

export {}
