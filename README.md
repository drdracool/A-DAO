# A-DAO


We will deploy an ERC20 token that we will use to govern our DAO.
We will deploy a Timelock contract that we will use to give a buffer between executing proposals.
Note: The timelock is the contract that will handle all the money, ownerships, etc
We will deploy our Governence contract
Note: The Governance contract is in charge of proposals and such, but the Timelock executes!
We will deploy a simple Box contract, which will be owned by our governance process! (aka, our timelock contract).
We will propose a new value to be added to our Box contract.
We will then vote on that proposal.
We will then queue the proposal to be executed.
Then, we will execute it!
