"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
const contracts_1 = require("@ethersproject/contracts");
class RewarderMock__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_rewardMultiplier, _rewardToken, overrides) {
        return super.deploy(_rewardMultiplier, _rewardToken, overrides || {});
    }
    getDeployTransaction(_rewardMultiplier, _rewardToken, overrides) {
        return super.getDeployTransaction(_rewardMultiplier, _rewardToken, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new contracts_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.RewarderMock__factory = RewarderMock__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_rewardMultiplier",
                type: "uint256",
            },
            {
                internalType: "contract IERC20",
                name: "_rewardToken",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "sushiAmount",
                type: "uint256",
            },
        ],
        name: "onSushiReward",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "pid",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "sushiAmount",
                type: "uint256",
            },
        ],
        name: "pendingTokens",
        outputs: [
            {
                internalType: "contract IERC20[]",
                name: "rewardTokens",
                type: "address[]",
            },
            {
                internalType: "uint256[]",
                name: "rewardAmounts",
                type: "uint256[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60c060405234801561001057600080fd5b5060405161061a38038061061a8339818101604052604081101561003357600080fd5b5080516020909101516080829052606081901b6001600160601b03191660a0526001600160a01b031661058d61008d6000398061017d528061022b528061026452806102ba52508061014b5280610332525061058d6000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063bb6cc2ef1461003b578063d63b3c491461006f575b600080fd5b61006d6004803603606081101561005157600080fd5b508035906001600160a01b03602082013516906040013561013a565b005b6100a16004803603606081101561008557600080fd5b508035906001600160a01b036020820135169060400135610292565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156100e55781810151838201526020016100cd565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561012457818101518382015260200161010c565b5050505090500194505050505060405180910390f35b6000670de0b6b3a764000061016f837f0000000000000000000000000000000000000000000000000000000000000000610382565b8161017657fe5b04905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156101e857600080fd5b505afa1580156101fc573d6000803e3d6000fd5b505050506040513d602081101561021257600080fd5b5051905080821115610257576102526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001685836103f4565b61028b565b61028b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001685846103f4565b5050505050565b60408051600180825281830190925260609182918291602080830190803683370190505090507f0000000000000000000000000000000000000000000000000000000000000000816000815181106102e657fe5b6001600160a01b039290921660209283029190910190910152604080516001808252818301909252606091816020016020820280368337019050509050670de0b6b3a7640000610356867f0000000000000000000000000000000000000000000000000000000000000000610382565b8161035d57fe5b048160008151811061036b57fe5b602090810291909101015290969095509350505050565b600081158061039d5750508082028282828161039a57fe5b04145b6103ee576040805162461bcd60e51b815260206004820152601860248201527f426f72696e674d6174683a204d756c204f766572666c6f770000000000000000604482015290519081900360640190fd5b92915050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b178152925182516000946060949389169392918291908083835b602083106104715780518252601f199092019160209182019101610452565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146104d3576040519150601f19603f3d011682016040523d82523d6000602084013e6104d8565b606091505b5091509150818015610506575080511580610506575080806020019051602081101561050357600080fd5b50515b61028b576040805162461bcd60e51b815260206004820152601c60248201527f426f72696e6745524332303a205472616e73666572206661696c656400000000604482015290519081900360640190fdfea264697066735822122054c53004e52f5d3e20043c0473e4fdf896749aa6853df45adcc71083f3a3a3c264736f6c634300060c0033";
//# sourceMappingURL=RewarderMock__factory.js.map