import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
const deploy = async () => {
  const HellowWorld = await ethers.getContractFactory("HelloWorld");
  const hello = await HellowWorld.deploy();
  const deployedHello = await hello.deployed();
  return deployedHello;
};
// @ts-ignore
const sayHello = async (hello) => {
  console.log("say hello: ", await hello.hello());
};
deploy().then(sayHello);
