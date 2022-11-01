const {
  frontEndContractsFile,
  frontEndAbiFile,
} = require("../helper-hardhat-config");
const fs = require("fs");
const { network } = require("hardhat");

async function main() {
  const b = await ethers.getContractFactory("BetSoccer");
  console.log("Deploying BetSoccer...");
  const l = await b.deploy();
  await l.deployed();
  console.log("lottery deployed to:", l.address);
  await updateAbi();
  console.log("lottery abi attached");
  await updateContractAddress(l.address);
  console.log("lottery deploy address attached");
}

async function updateAbi() {
  const l = await ethers.getContract("BetSoccer");
  fs.writeFileSync(
    frontEndAbiFile,
    l.interface.format(ethers.utils.FormatTypes.json)
  );
}

async function updateContractAddress(address) {
  fs.writeFileSync(frontEndContractsFile, JSON.stringify(address));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
