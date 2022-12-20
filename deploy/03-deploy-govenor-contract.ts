import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import {
  VOTING_DELAY,
  VOTING_PERIOD,
  QUORUM_PERCENTAGE,
} from "../helper-hardhat-config";

const deployGovernorContract: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  const { getNamedAccounts, deployments } = hre;
  const { deploy, log, get } = deployments;
  const { deployer } = await getNamedAccounts();
  const goveranceToken = await get("GovernanceToken");
  const timeLock = await get("TimeLock");
  log("Deploying governor");
  const governorContract = await deploy("GovernorContract", {
    from: deployer,
    args: [
      goveranceToken.address,
      timeLock.address,
      QUORUM_PERCENTAGE,
      VOTING_PERIOD,
      VOTING_DELAY,
    ],
    log: true,
  });
  log(`GovernorContract at ${governorContract.address}`);
};

export default deployGovernorContract;
