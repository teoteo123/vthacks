import {Client, ContractCreateFlow} from "@hashgraph/sdk";

import {hethers} from '@hashgraph/hethers';


// @ts-ignore
import data from "./forge/out/RentingContract.sol/RentingContract.json";

const defaultProvider = hethers.providers.getDefaultProvider('testnet');
const wallet = new hethers.Wallet({
    account: hethers.utils.parseAccount("0.0.48870758"),
    privateKey: "0431e720ae3e9d8815acf957a68729a8406917ec2e974d30dc0e1fa00865eaca"
}, defaultProvider)

const iface = new hethers.utils.Interface(data.abi);
// console.log(iface.format(hethers.utils.FormatTypes.full/**/));
const contract = new hethers.Contract("0x0000000000000000000000000000000002e9b861", iface.format(hethers.utils.FormatTypes.full), wallet);


// import data from "./RentingContract.json";

async function upload_contract() {

    const client = Client.forTestnet().setOperator("0.0.48870757", "2ba3c5dc0799d699b2651eb97ab34c4b2f20fa9e208ea7fd7d818e367302fd4e");


    const contractCreate = new ContractCreateFlow()
        .setGas(100000)
        .setBytecode(data.bytecode.object)

//Sign the transaction with the client operator key and submit to a Hedera network
    const txResponse = contractCreate.execute(client);

//Get the receipt of the transaction
    const receipt = (await txResponse).getReceipt(client);

//Get the new contract ID
    const newContractId = (await receipt).contractId;

    console.log("The new contract ID is " + newContractId);
}

async function try_getting_listings() {
    const resp = await contract.getListings({gasLimit: 500_000});

    // const resp1  = await resp.wait();
    console.log(resp)

    // const transaction = new ContractExecuteTransaction({
    //     contractId: contract_id,
    //     gas: 10_000
    // })
}

async function create_listing() {
    // const client = Client.forTestnet().setOperator("0.0.48865742", "3e7c8a66af1af7208b5c342b6f09ea2b7b1f3a0ec4719f6dd1b315aa8310a5de");

    const contract_id = "0.0.48871114";

    // console.log(functionAbi)

    const property_info = [
        "Happy Hostel",
        "The Best Hostel",
        "504 Broce Dr, Blacksburg"
    ];

    const images = [];

    const price = 100;
    // console.log(await wallet.getAddress())
    const result = await contract.functions.addListing(property_info, images, price, {gasLimit: 500_000});
}

async function applyForListing() {
    const result = await contract.applyForListing(0, 0, 1, {gasLimit: 500_000})

    console.log(result)
}

async function getListingById() {
    const result = await contract.getListingById(0, {gasLimit: 500_000});
    console.log(result)
}

async function getApplicationsForListing() {
    const result = await contract.getApplicationsForListing(0, {gasLimit: 500_000});
    console.log(result)
}

async function approveApplication() {
    const result = await contract.approveApplication(0, 0, {gasLimit: 500_000});
    console.log(result)
}

upload_contract().then(() => {
}).catch(e => console.log(e))