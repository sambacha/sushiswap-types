"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
const contracts_1 = require("@ethersproject/contracts");
class SushiMaker__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_factory, _bar, _sushi, _weth, overrides) {
        return super.deploy(_factory, _bar, _sushi, _weth, overrides || {});
    }
    getDeployTransaction(_factory, _bar, _sushi, _weth, overrides) {
        return super.getDeployTransaction(_factory, _bar, _sushi, _weth, overrides || {});
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
exports.SushiMaker__factory = SushiMaker__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_factory",
                type: "address",
            },
            {
                internalType: "address",
                name: "_bar",
                type: "address",
            },
            {
                internalType: "address",
                name: "_sushi",
                type: "address",
            },
            {
                internalType: "address",
                name: "_weth",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "bridge",
                type: "address",
            },
        ],
        name: "LogBridgeSet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "server",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "token0",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "token1",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount0",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount1",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amountSUSHI",
                type: "uint256",
            },
        ],
        name: "LogConvert",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        inputs: [],
        name: "bar",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "bridgeFor",
        outputs: [
            {
                internalType: "address",
                name: "bridge",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "claimOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token0",
                type: "address",
            },
            {
                internalType: "address",
                name: "token1",
                type: "address",
            },
        ],
        name: "convert",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "token0",
                type: "address[]",
            },
            {
                internalType: "address[]",
                name: "token1",
                type: "address[]",
            },
        ],
        name: "convertMultiple",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "factory",
        outputs: [
            {
                internalType: "contract IUniswapV2Factory",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "pendingOwner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "bridge",
                type: "address",
            },
        ],
        name: "setBridge",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
            {
                internalType: "bool",
                name: "direct",
                type: "bool",
            },
            {
                internalType: "bool",
                name: "renounce",
                type: "bool",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x61010060405234801561001157600080fd5b506040516117b23803806117b28339818101604052608081101561003457600080fd5b5080516020820151604080840151606090940151600080546001600160a01b0319163390811782559251949593949192917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36001600160601b0319606094851b811660805292841b831660a05290831b821660c05290911b1660e05260805160601c60a05160601c60c05160601c60e05160601c61164f610163600039806105b952806106d75280610cda5280610d175280610ebc5280610ef95280610f225280610f4f5280610f8c5280610fb552508061057c5280610c445280610c895280610d775280610dbc5280610e205280610e6552806110e852508061078e5280610cab5280610dde5280610e87528061110a52508061075b52806107b4528061113a525061164f6000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063a761a93911610066578063a761a939146101f7578063bd1b820c1461021d578063c45a01551461024b578063e30c397814610253578063febb0f7e1461025b5761009e565b8063078dfbe7146100a3578063303e6aa4146100db5780634e71e0c81461019d5780638da5cb5b146101a55780639d22ae8c146101c9575b600080fd5b6100d9600480360360608110156100b957600080fd5b506001600160a01b03813516906020810135151590604001351515610263565b005b6100d9600480360360408110156100f157600080fd5b81019060208101813564010000000081111561010c57600080fd5b82018360208201111561011e57600080fd5b8035906020019184602083028401116401000000008311171561014057600080fd5b91939092909160208101903564010000000081111561015e57600080fd5b82018360208201111561017057600080fd5b8035906020019184602083028401116401000000008311171561019257600080fd5b50909250905061039f565b6100d961044a565b6101ad61050c565b604080516001600160a01b039092168252519081900360200190f35b6100d9600480360360408110156101df57600080fd5b506001600160a01b038135811691602001351661051b565b6101ad6004803603602081101561020d57600080fd5b50356001600160a01b03166106b4565b6100d96004803603604081101561023357600080fd5b506001600160a01b03813581169160200135166106fc565b6101ad610759565b6101ad61077d565b6101ad61078c565b6000546001600160a01b031633146102c2576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b811561037e576001600160a01b0383161515806102dc5750805b610325576040805162461bcd60e51b81526020600482015260156024820152744f776e61626c653a207a65726f206164647265737360581b604482015290519081900360640190fd5b600080546040516001600160a01b03808716939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b03851617905561039a565b600180546001600160a01b0319166001600160a01b0385161790555b505050565b3332146103ee576040805162461bcd60e51b815260206004820152601860248201527753757368694d616b65723a206d7573742075736520454f4160401b604482015290519081900360640190fd5b8260005b818110156104425761043a86868381811061040957fe5b905060200201356001600160a01b031685858481811061042557fe5b905060200201356001600160a01b03166107b0565b6001016103f2565b505050505050565b6001546001600160a01b03163381146104aa576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316179055600180549091169055565b6000546001600160a01b031681565b6000546001600160a01b0316331461057a576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b0316141580156105ee57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b031614155b801561060c5750806001600160a01b0316826001600160a01b031614155b61065d576040805162461bcd60e51b815260206004820152601a60248201527f53757368694d616b65723a20496e76616c696420627269646765000000000000604482015290519081900360640190fd5b6001600160a01b0382811660008181526002602052604080822080546001600160a01b0319169486169485179055517f2e103aa707acc565f9a1547341914802b2bfe977fd79c595209f248ae4b006139190a35050565b6001600160a01b0380821660009081526002602052604090205416806106f757507f00000000000000000000000000000000000000000000000000000000000000005b919050565b33321461074b576040805162461bcd60e51b815260206004820152601860248201527753757368694d616b65723a206d7573742075736520454f4160401b604482015290519081900360640190fd5b61075582826107b0565b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6001546001600160a01b031681565b7f000000000000000000000000000000000000000000000000000000000000000081565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e6a4390584846040518363ffffffff1660e01b815260040180836001600160a01b03168152602001826001600160a01b031681526020019250505060206040518083038186803b15801561083057600080fd5b505afa158015610844573d6000803e3d6000fd5b505050506040513d602081101561085a57600080fd5b505190506001600160a01b0381166108b9576040805162461bcd60e51b815260206004820152601860248201527f53757368694d616b65723a20496e76616c696420706169720000000000000000604482015290519081900360640190fd5b61094781826001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561090a57600080fd5b505afa15801561091e573d6000803e3d6000fd5b505050506040513d602081101561093457600080fd5b50516001600160a01b0384169190610aae565b600080826001600160a01b03166389afcb44306040518263ffffffff1660e01b815260040180826001600160a01b031681526020019150506040805180830381600087803b15801561099857600080fd5b505af11580156109ac573d6000803e3d6000fd5b505050506040513d60408110156109c257600080fd5b50805160209182015160408051630dfe168160e01b815290519295509093506001600160a01b03861692630dfe168192600480840193829003018186803b158015610a0c57600080fd5b505afa158015610a20573d6000803e3d6000fd5b505050506040513d6020811015610a3657600080fd5b50516001600160a01b03868116911614610a4c57905b6001600160a01b03808516908616337fd06b1d7ed79b664d17472c6f6997b929f1abe463ccccb4e5b6a0038f2f730c158585610a8a8b8b8484610c18565b60408051938452602084019290925282820152519081900360600190a45050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b178152925182516000946060949389169392918291908083835b60208310610b2b5780518252601f199092019160209182019101610b0c565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610b8d576040519150601f19603f3d011682016040523d82523d6000602084013e610b92565b606091505b5091509150818015610bc0575080511580610bc05750808060200190516020811015610bbd57600080fd5b50515b610c11576040805162461bcd60e51b815260206004820152601a60248201527f5361666545524332303a205472616e73666572206661696c6564000000000000604482015290519081900360640190fd5b5050505050565b6000836001600160a01b0316856001600160a01b03161415610d75576000610c408484611089565b90507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316866001600160a01b03161415610cd857610cd06001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f000000000000000000000000000000000000000000000000000000000000000083610aae565b809150610d6f565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316866001600160a01b03161415610d4357610d3c7f0000000000000000000000000000000000000000000000000000000000000000826110e0565b9150610d6f565b6000610d4e876106b4565b9050610d5c87828430611135565b9150610d6b8182846000610c18565b9250505b50611081565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316856001600160a01b03161415610e1e57610e036001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f000000000000000000000000000000000000000000000000000000000000000085610aae565b610e1783610e1186856110e0565b90611089565b9050611081565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316846001600160a01b03161415610eba57610eac6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f000000000000000000000000000000000000000000000000000000000000000084610aae565b610e1782610e1187866110e0565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316856001600160a01b03161415610f4d57610e177f0000000000000000000000000000000000000000000000000000000000000000610f4885610e11887f00000000000000000000000000000000000000000000000000000000000000008830611135565b6110e0565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316846001600160a01b03161415610fdb57610e177f0000000000000000000000000000000000000000000000000000000000000000610f4884610e11897f00000000000000000000000000000000000000000000000000000000000000008930611135565b6000610fe6866106b4565b90506000610ff3866106b4565b9050856001600160a01b0316826001600160a01b0316141561102d5761102682876110208a868a30611135565b87610c18565b925061107e565b866001600160a01b0316816001600160a01b0316141561105e576110268782876110598a868a30611135565b610c18565b61107b828261106f8a868a30611135565b6110598a868a30611135565b92505b50505b949350505050565b818101818110156110da576040805162461bcd60e51b8152602060048201526016602482015275536166654d6174683a20416464204f766572666c6f7760501b604482015290519081900360640190fd5b92915050565b600061112e837f0000000000000000000000000000000000000000000000000000000000000000847f0000000000000000000000000000000000000000000000000000000000000000611135565b9392505050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e6a4390587876040518363ffffffff1660e01b815260040180836001600160a01b03168152602001826001600160a01b031681526020019250505060206040518083038186803b1580156111b657600080fd5b505afa1580156111ca573d6000803e3d6000fd5b505050506040513d60208110156111e057600080fd5b505190506001600160a01b03811661123f576040805162461bcd60e51b815260206004820152601a60248201527f53757368694d616b65723a2043616e6e6f7420636f6e76657274000000000000604482015290519081900360640190fd5b600080826001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561127b57600080fd5b505afa15801561128f573d6000803e3d6000fd5b505050506040513d60608110156112a557600080fd5b5080516020909101516dffffffffffffffffffffffffffff918216935016905060006112d3876103e56115b4565b9050836001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b15801561130e57600080fd5b505afa158015611322573d6000803e3d6000fd5b505050506040513d602081101561133857600080fd5b50516001600160a01b038a81169116141561147f5761135d81610e11856103e86115b4565b6113738361136d8a6103e56115b4565b906115b4565b8161137a57fe5b0494506113916001600160a01b038a168589610aae565b604080516000808252602082019283905263022c0d9f60e01b835260248201818152604483018990526001600160a01b038a81166064850152608060848501908152845160a48601819052918a169563022c0d9f958c948e9491939092909160c4850191908083838b5b838110156114135781810151838201526020016113fb565b50505050905090810190601f1680156114405780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b15801561146257600080fd5b505af1158015611476573d6000803e3d6000fd5b505050506115a8565b61148f81610e11846103e86115b4565b61149f8461136d8a6103e56115b4565b816114a657fe5b0494506114bd6001600160a01b038a168589610aae565b604080516000808252602082019283905263022c0d9f60e01b835260248201888152604483018290526001600160a01b038a81166064850152608060848501908152845160a48601819052918a169563022c0d9f958c95948e9491939092909160c4850191908083838a5b83811015611540578181015183820152602001611528565b50505050905090810190601f16801561156d5780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b15801561158f57600080fd5b505af11580156115a3573d6000803e3d6000fd5b505050505b50505050949350505050565b60008115806115cf575050808202828282816115cc57fe5b04145b6110da576040805162461bcd60e51b8152602060048201526016602482015275536166654d6174683a204d756c204f766572666c6f7760501b604482015290519081900360640190fdfea2646970667358221220fbf357103f25ffc1db4cc357623d01186df952d0c741c5077fc90a05a6f97faa64736f6c634300060c0033";
//# sourceMappingURL=SushiMaker__factory.js.map