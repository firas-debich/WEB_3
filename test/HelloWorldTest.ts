import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
describe("hello world", () => {
  it("should say hello world", async () => {
    //1.setup
    //2.deploy our contract
    //3.call our functions to test
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const Hello = await HelloWorld.deploy();
    await Hello.deployed();
    expect(await Hello.hello()).to.equal("hello ,world");
  });
});
