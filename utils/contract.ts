import {
  Client,
  AccountId,
  PrivateKey,
  FileCreateTransaction,
  FileAppendTransaction,
  ContractCreateTransaction,
  ContractFunctionParameters,
  ContractExecuteTransaction,
  AccountBalanceQuery,
  ContractCreateFlow,
  Key,
  ContractCallQuery,
} from '@hashgraph/sdk'
import { hethers } from '@hashgraph/hethers'

// @ts-ignore
import data from './RentingContract.json'
const defaultProvider = hethers.providers.getDefaultProvider('testnet')
const wallet = new hethers.Wallet(
  {
    account: hethers.utils.parseAccount('0.0.48870758'),
    privateKey: '0431e720ae3e9d8815acf957a68729a8406917ec2e974d30dc0e1fa00865eaca',
  },
  defaultProvider
)

const iface = new hethers.utils.Interface(data.abi)
// console.log(iface.format(hethers.utils.FormatTypes.full/**/));
export const contract = new hethers.Contract(
  '0x0000000000000000000000000000000002e9b861',
  iface.format(hethers.utils.FormatTypes.full),
  wallet
)
