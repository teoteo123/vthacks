import { expect } from "chai";
import { ethers } from "hardhat";

describe("DRedfin", function () {
  it("Test contract", async function () {
    const ContractFactory = await ethers.getContractFactory("DRedfin");

    const instance = await ContractFactory.deploy();
    await instance.deployed();

    expect(await instance.name()).to.equal("DRedfin");
  });
});
