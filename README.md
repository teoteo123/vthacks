# HederaHaus

## Inspiration

Inspired by the Hashgraph model of Hedera to interact as a application to store decentralized data such as homes available on a marketplace, similar to Redfin.

## What it does

Currently, we allow the owners to post listings of their properties for rent. Renters can then apply for the property, specifying the start and end dates, and the owner can accept the application. The listings (including applications) are stored in a smart contract on the Hedera network. The owner can view the applications and accept them. The renter can find the listings and view them.

## How we built it

The smart contract was written in [Solidity](https://soliditylang.org) using the [Foundry toolkit](https://getfoundry.sh) and deployed to the [Hedera network](https://hedera.com). [React](https://reactjs.org)/[Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com) were used to develop the front-end.

## Challenges we ran into

- While having some Solidity experience, we had to learn how to interact with the Hedera network, deploy a smart contract and interact with it
- Only a portion of our team had experience with React and web development in general, so we had to learn a lot of new things
- Setting realistic goals was definitely a challenge: we had a lot of ideas, but we had to prioritize and focus on the basic functionality first

## Accomplishments that we're proud of

Ultimately deploying a smart contract and being able to interact with it from the UI was a huge accomplishment for us.

## What we learned

- New technologies: Solidity, Hedera, Foundry, React, Next.js, Tailwind CSS
- Working in a team with different skillsets and learning from each other
- Making plans and setting goals

## What's next for HederaHaus

- A more user-friendly UI, displaying the listings and applications in a more intuitive way
- Rating system for renters and owners
- Displaying the listings on a map
- Handling payments through the smart contract
- Adding more functionality to the smart contract, such as escrow, dispute resolution, etc.

## A section where we talk badly about Hedera

Over the weekend, Hedera 
