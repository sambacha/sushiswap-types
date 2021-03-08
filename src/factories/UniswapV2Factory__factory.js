"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
const contracts_1 = require("@ethersproject/contracts");
class UniswapV2Factory__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_feeToSetter, overrides) {
        return super.deploy(_feeToSetter, overrides || {});
    }
    getDeployTransaction(_feeToSetter, overrides) {
        return super.getDeployTransaction(_feeToSetter, overrides || {});
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
exports.UniswapV2Factory__factory = UniswapV2Factory__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_feeToSetter",
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
                internalType: "address",
                name: "pair",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "PairCreated",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "allPairs",
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
        name: "allPairsLength",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "tokenA",
                type: "address",
            },
            {
                internalType: "address",
                name: "tokenB",
                type: "address",
            },
        ],
        name: "createPair",
        outputs: [
            {
                internalType: "address",
                name: "pair",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "feeTo",
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
        name: "feeToSetter",
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
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "getPair",
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
        name: "migrator",
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
        name: "pairCodeHash",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_feeTo",
                type: "address",
            },
        ],
        name: "setFeeTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_feeToSetter",
                type: "address",
            },
        ],
        name: "setFeeToSetter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_migrator",
                type: "address",
            },
        ],
        name: "setMigrator",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50604051612c63380380612c638339818101604052602081101561003357600080fd5b5051600180546001600160a01b0319166001600160a01b03909216919091179055612c00806100636000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80637cd07e47116100715780637cd07e47146101395780639aab924814610141578063a2e74af614610149578063c9c653961461016f578063e6a439051461019d578063f46901ed146101cb576100a9565b8063017e7e58146100ae578063094b7415146100d25780631e3dd18b146100da57806323cf3118146100f7578063574f2ba31461011f575b600080fd5b6100b66101f1565b604080516001600160a01b039092168252519081900360200190f35b6100b6610200565b6100b6600480360360208110156100f057600080fd5b503561020f565b61011d6004803603602081101561010d57600080fd5b50356001600160a01b0316610236565b005b6101276102ae565b60408051918252519081900360200190f35b6100b66102b4565b6101276102c3565b61011d6004803603602081101561015f57600080fd5b50356001600160a01b03166102f5565b6100b66004803603604081101561018557600080fd5b506001600160a01b038135811691602001351661036d565b6100b6600480360360408110156101b357600080fd5b506001600160a01b0381358116916020013516610698565b61011d600480360360208110156101e157600080fd5b50356001600160a01b03166106be565b6000546001600160a01b031681565b6001546001600160a01b031681565b6004818154811061021c57fe5b6000918252602090912001546001600160a01b0316905081565b6001546001600160a01b0316331461028c576040805162461bcd60e51b81526020600482015260146024820152732ab734b9bbb0b82b191d102327a92124a22222a760611b604482015290519081900360640190fd5b600280546001600160a01b0319166001600160a01b0392909216919091179055565b60045490565b6002546001600160a01b031681565b6000604051806020016102d590610736565b6020820181038252601f19601f8201166040525080519060200120905090565b6001546001600160a01b0316331461034b576040805162461bcd60e51b81526020600482015260146024820152732ab734b9bbb0b82b191d102327a92124a22222a760611b604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000816001600160a01b0316836001600160a01b031614156103d6576040805162461bcd60e51b815260206004820152601e60248201527f556e697377617056323a204944454e544943414c5f4144445245535345530000604482015290519081900360640190fd5b600080836001600160a01b0316856001600160a01b0316106103f95783856103fc565b84845b90925090506001600160a01b03821661045c576040805162461bcd60e51b815260206004820152601760248201527f556e697377617056323a205a45524f5f41444452455353000000000000000000604482015290519081900360640190fd5b6001600160a01b038281166000908152600360209081526040808320858516845290915290205416156104cf576040805162461bcd60e51b8152602060048201526016602482015275556e697377617056323a20504149525f45584953545360501b604482015290519081900360640190fd5b6060604051806020016104e190610736565b6020820181038252601f19601f8201166040525090506000838360405160200180836001600160a01b031660601b8152601401826001600160a01b031660601b815260140192505050604051602081830303815290604052805190602001209050808251602084016000f59450846001600160a01b031663485cc95585856040518363ffffffff1660e01b815260040180836001600160a01b03168152602001826001600160a01b0316815260200192505050600060405180830381600087803b1580156105ae57600080fd5b505af11580156105c2573d6000803e3d6000fd5b505050506001600160a01b0384811660008181526003602081815260408084208987168086529083528185208054978d166001600160a01b031998891681179091559383528185208686528352818520805488168517905560048054600181018255958190527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b90950180549097168417909655925483519283529082015281517f0d3648bd0f6ba80134a33ba9275ac585d9d315f0ad8355cddefde31afa28d0e9929181900390910190a35050505092915050565b60036020908152600092835260408084209091529082529020546001600160a01b031681565b6001546001600160a01b03163314610714576040805162461bcd60e51b81526020600482015260146024820152732ab734b9bbb0b82b191d102327a92124a22222a760611b604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b612487806107448339019056fe60806040526001600c5534801561001557600080fd5b50604080518082018252601281527129bab9b434a9bbb0b8102628102a37b5b2b760711b6020918201528151808301835260018152603160f81b9082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527fefbffe65652a145845c9bc8d0532945be6b9830fe1e9966c887bd298e551ac83818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c09091019092528151910120600355600580546001600160a01b03191633179055612377806101106000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80636a627842116100f9578063ba9a7a5611610097578063d21220a711610071578063d21220a714610534578063d505accf1461053c578063dd62ed3e1461058d578063fff6cae9146105bb576101a9565b8063ba9a7a56146104fe578063bc25cf7714610506578063c45a01551461052c576101a9565b80637ecebe00116100d35780637ecebe001461046557806389afcb441461048b57806395d89b41146104ca578063a9059cbb146104d2576101a9565b80636a6278421461041157806370a08231146104375780637464fc3d1461045d576101a9565b806323b872dd116101665780633644e515116101405780633644e515146103cb578063485cc955146103d35780635909c0d5146104015780635a3d549314610409576101a9565b806323b872dd1461036f57806330adf81f146103a5578063313ce567146103ad576101a9565b8063022c0d9f146101ae57806306fdde031461023c5780630902f1ac146102b9578063095ea7b3146102f15780630dfe16811461033157806318160ddd14610355575b600080fd5b61023a600480360360808110156101c457600080fd5b8135916020810135916001600160a01b0360408301351691908101906080810160608201356401000000008111156101fb57600080fd5b82018360208201111561020d57600080fd5b8035906020019184600183028401116401000000008311171561022f57600080fd5b5090925090506105c3565b005b610244610acb565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561027e578181015183820152602001610266565b50505050905090810190601f1680156102ab5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102c1610af9565b604080516001600160701b03948516815292909316602083015263ffffffff168183015290519081900360600190f35b61031d6004803603604081101561030757600080fd5b506001600160a01b038135169060200135610b23565b604080519115158252519081900360200190f35b610339610b3a565b604080516001600160a01b039092168252519081900360200190f35b61035d610b49565b60408051918252519081900360200190f35b61031d6004803603606081101561038557600080fd5b506001600160a01b03813581169160208101359091169060400135610b4f565b61035d610be3565b6103b5610c07565b6040805160ff9092168252519081900360200190f35b61035d610c0c565b61023a600480360360408110156103e957600080fd5b506001600160a01b0381358116916020013516610c12565b61035d610c96565b61035d610c9c565b61035d6004803603602081101561042757600080fd5b50356001600160a01b0316610ca2565b61035d6004803603602081101561044d57600080fd5b50356001600160a01b031661111e565b61035d611130565b61035d6004803603602081101561047b57600080fd5b50356001600160a01b0316611136565b6104b1600480360360208110156104a157600080fd5b50356001600160a01b0316611148565b6040805192835260208301919091528051918290030190f35b6102446114dc565b61031d600480360360408110156104e857600080fd5b506001600160a01b0381351690602001356114fb565b61035d611508565b61023a6004803603602081101561051c57600080fd5b50356001600160a01b031661150e565b610339611680565b61033961168f565b61023a600480360360e081101561055257600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c0013561169e565b61035d600480360360408110156105a357600080fd5b506001600160a01b03813581169160200135166118a0565b61023a6118bd565b600c5460011461060e576040805162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c55841515806106215750600084115b61065c5760405162461bcd60e51b81526004018080602001828103825260258152602001806122886025913960400191505060405180910390fd5b600080610667610af9565b5091509150816001600160701b03168710801561068c5750806001600160701b031686105b6106c75760405162461bcd60e51b81526004018080602001828103825260218152602001806122d16021913960400191505060405180910390fd5b60065460075460009182916001600160a01b039182169190811690891682148015906107055750806001600160a01b0316896001600160a01b031614155b61074e576040805162461bcd60e51b8152602060048201526015602482015274556e697377617056323a20494e56414c49445f544f60581b604482015290519081900360640190fd5b8a1561075f5761075f828a8d611a1f565b891561077057610770818a8c611a1f565b861561082257886001600160a01b03166310d1e85c338d8d8c8c6040518663ffffffff1660e01b815260040180866001600160a01b03168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b15801561080957600080fd5b505af115801561081d573d6000803e3d6000fd5b505050505b604080516370a0823160e01b815230600482015290516001600160a01b038416916370a08231916024808301926020929190829003018186803b15801561086857600080fd5b505afa15801561087c573d6000803e3d6000fd5b505050506040513d602081101561089257600080fd5b5051604080516370a0823160e01b815230600482015290519195506001600160a01b038316916370a0823191602480820192602092909190829003018186803b1580156108de57600080fd5b505afa1580156108f2573d6000803e3d6000fd5b505050506040513d602081101561090857600080fd5b5051925060009150506001600160701b0385168a9003831161092b57600061093a565b89856001600160701b03160383035b9050600089856001600160701b0316038311610957576000610966565b89856001600160701b03160383035b905060008211806109775750600081115b6109b25760405162461bcd60e51b81526004018080602001828103825260248152602001806122ad6024913960400191505060405180910390fd5b60006109d46109c2846003611bb9565b6109ce876103e8611bb9565b90611c1c565b905060006109e66109c2846003611bb9565b9050610a0b620f4240610a056001600160701b038b8116908b16611bb9565b90611bb9565b610a158383611bb9565b1015610a57576040805162461bcd60e51b815260206004820152600c60248201526b556e697377617056323a204b60a01b604482015290519081900360640190fd5b5050610a6584848888611c6c565b60408051838152602081018390528082018d9052606081018c905290516001600160a01b038b169133917fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229181900360800190a350506001600c55505050505050505050565b6040518060400160405280601281526020017129bab9b434a9bbb0b8102628102a37b5b2b760711b81525081565b6008546001600160701b0380821692600160701b830490911691600160e01b900463ffffffff1690565b6000610b30338484611e2b565b5060015b92915050565b6006546001600160a01b031681565b60005481565b6001600160a01b038316600090815260026020908152604080832033845290915281205460001914610bce576001600160a01b0384166000908152600260209081526040808320338452909152902054610ba99083611c1c565b6001600160a01b03851660009081526002602090815260408083203384529091529020555b610bd9848484611e8d565b5060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b60035481565b6005546001600160a01b03163314610c68576040805162461bcd60e51b81526020600482015260146024820152732ab734b9bbb0b82b191d102327a92124a22222a760611b604482015290519081900360640190fd5b600680546001600160a01b039384166001600160a01b03199182161790915560078054929093169116179055565b60095481565b600a5481565b6000600c54600114610cef576040805162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c81905580610cff610af9565b50600654604080516370a0823160e01b815230600482015290519395509193506000926001600160a01b03909116916370a08231916024808301926020929190829003018186803b158015610d5357600080fd5b505afa158015610d67573d6000803e3d6000fd5b505050506040513d6020811015610d7d57600080fd5b5051600754604080516370a0823160e01b815230600482015290519293506000926001600160a01b03909216916370a0823191602480820192602092909190829003018186803b158015610dd057600080fd5b505afa158015610de4573d6000803e3d6000fd5b505050506040513d6020811015610dfa57600080fd5b505190506000610e13836001600160701b038716611c1c565b90506000610e2a836001600160701b038716611c1c565b90506000610e388787611f3b565b6000549091508061100f5760055460408051637cd07e4760e01b815290516000926001600160a01b031691637cd07e47916004808301926020929190829003018186803b158015610e8857600080fd5b505afa158015610e9c573d6000803e3d6000fd5b505050506040513d6020811015610eb257600080fd5b50519050336001600160a01b0382161415610f8d57806001600160a01b03166340dc0e376040518163ffffffff1660e01b815260040160206040518083038186803b158015610f0057600080fd5b505afa158015610f14573d6000803e3d6000fd5b505050506040513d6020811015610f2a57600080fd5b505199508915801590610f3f57506000198a14155b610f88576040805162461bcd60e51b81526020600482015260156024820152744261642064657369726564206c697175696469747960581b604482015290519081900360640190fd5b611009565b6001600160a01b03811615610fe2576040805162461bcd60e51b815260206004820152601660248201527526bab9ba103737ba103430bb329036b4b3b930ba37b960511b604482015290519081900360640190fd5b610ffa6103e86109ce610ff58888611bb9565b61207b565b995061100960006103e86120cd565b50611052565b61104f6001600160701b0389166110268684611bb9565b8161102d57fe5b046001600160701b0389166110428685611bb9565b8161104957fe5b04612157565b98505b600089116110915760405162461bcd60e51b815260040180806020018281038252602881526020018061231a6028913960400191505060405180910390fd5b61109b8a8a6120cd565b6110a786868a8a611c6c565b81156110d1576008546110cd906001600160701b0380821691600160701b900416611bb9565b600b555b6040805185815260208101859052815133927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a250506001600c5550949695505050505050565b60016020526000908152604090205481565b600b5481565b60046020526000908152604090205481565b600080600c54600114611196576040805162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c819055806111a6610af9565b50600654600754604080516370a0823160e01b815230600482015290519496509294506001600160a01b039182169391169160009184916370a08231916024808301926020929190829003018186803b15801561120257600080fd5b505afa158015611216573d6000803e3d6000fd5b505050506040513d602081101561122c57600080fd5b5051604080516370a0823160e01b815230600482015290519192506000916001600160a01b038516916370a08231916024808301926020929190829003018186803b15801561127a57600080fd5b505afa15801561128e573d6000803e3d6000fd5b505050506040513d60208110156112a457600080fd5b5051306000908152600160205260408120549192506112c38888611f3b565b600054909150806112d48487611bb9565b816112db57fe5b049a50806112e98486611bb9565b816112f057fe5b04995060008b118015611303575060008a115b61133e5760405162461bcd60e51b81526004018080602001828103825260288152602001806122f26028913960400191505060405180910390fd5b611348308461216f565b611353878d8d611a1f565b61135e868d8c611a1f565b604080516370a0823160e01b815230600482015290516001600160a01b038916916370a08231916024808301926020929190829003018186803b1580156113a457600080fd5b505afa1580156113b8573d6000803e3d6000fd5b505050506040513d60208110156113ce57600080fd5b5051604080516370a0823160e01b815230600482015290519196506001600160a01b038816916370a0823191602480820192602092909190829003018186803b15801561141a57600080fd5b505afa15801561142e573d6000803e3d6000fd5b505050506040513d602081101561144457600080fd5b5051935061145485858b8b611c6c565b811561147e5760085461147a906001600160701b0380821691600160701b900416611bb9565b600b555b604080518c8152602081018c905281516001600160a01b038f169233927fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496929081900390910190a35050505050505050506001600c81905550915091565b604051806040016040528060038152602001620534c560ec1b81525081565b6000610b30338484611e8d565b6103e881565b600c54600114611559576040805162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c55600654600754600854604080516370a0823160e01b815230600482015290516001600160a01b03948516949093169261160292859287926115fd926001600160701b03169185916370a0823191602480820192602092909190829003018186803b1580156115cb57600080fd5b505afa1580156115df573d6000803e3d6000fd5b505050506040513d60208110156115f557600080fd5b505190611c1c565b611a1f565b61167681846115fd6008600e9054906101000a90046001600160701b03166001600160701b0316856001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156115cb57600080fd5b50506001600c5550565b6005546001600160a01b031681565b6007546001600160a01b031681565b428410156116e8576040805162461bcd60e51b8152602060048201526012602482015271155b9a5cddd85c158c8e881156141254915160721b604482015290519081900360640190fd5b6003546001600160a01b0380891660008181526004602090815260408083208054600180820190925582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958d166060860152608085018c905260a085019590955260c08085018b90528151808603909101815260e08501825280519083012061190160f01b6101008601526101028501969096526101228085019690965280518085039096018652610142840180825286519683019690962095839052610162840180825286905260ff89166101828501526101a284018890526101c28401879052519193926101e280820193601f1981019281900390910190855afa158015611803573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906118395750886001600160a01b0316816001600160a01b0316145b61188a576040805162461bcd60e51b815260206004820152601c60248201527f556e697377617056323a20494e56414c49445f5349474e415455524500000000604482015290519081900360640190fd5b611895898989611e2b565b505050505050505050565b600260209081526000928352604080842090915290825290205481565b600c54600114611908576040805162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c55600654604080516370a0823160e01b81523060048201529051611a18926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561195957600080fd5b505afa15801561196d573d6000803e3d6000fd5b505050506040513d602081101561198357600080fd5b5051600754604080516370a0823160e01b815230600482015290516001600160a01b03909216916370a0823191602480820192602092909190829003018186803b1580156119d057600080fd5b505afa1580156119e4573d6000803e3d6000fd5b505050506040513d60208110156119fa57600080fd5b50516008546001600160701b0380821691600160701b900416611c6c565b6001600c55565b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b1781529251815160009460609489169392918291908083835b60208310611acc5780518252601f199092019160209182019101611aad565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611b2e576040519150601f19603f3d011682016040523d82523d6000602084013e611b33565b606091505b5091509150818015611b61575080511580611b615750808060200190516020811015611b5e57600080fd5b50515b611bb2576040805162461bcd60e51b815260206004820152601a60248201527f556e697377617056323a205452414e534645525f4641494c4544000000000000604482015290519081900360640190fd5b5050505050565b6000811580611bd457505080820282828281611bd157fe5b04145b610b34576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604482015290519081900360640190fd5b80820382811115610b34576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b6001600160701b038411801590611c8a57506001600160701b038311155b611cd1576040805162461bcd60e51b8152602060048201526013602482015272556e697377617056323a204f564552464c4f5760681b604482015290519081900360640190fd5b60085463ffffffff42811691600160e01b90048116820390811615801590611d0157506001600160701b03841615155b8015611d1557506001600160701b03831615155b15611d80578063ffffffff16611d3d85611d2e86612201565b6001600160e01b031690612213565b600980546001600160e01b03929092169290920201905563ffffffff8116611d6884611d2e87612201565b600a80546001600160e01b0392909216929092020190555b600880546dffffffffffffffffffffffffffff19166001600160701b03888116919091176dffffffffffffffffffffffffffff60701b1916600160701b8883168102919091176001600160e01b0316600160e01b63ffffffff871602179283905560408051848416815291909304909116602082015281517f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1929181900390910190a1505050505050565b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316600090815260016020526040902054611eb09082611c1c565b6001600160a01b038085166000908152600160205260408082209390935590841681522054611edf9082612238565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600080600560009054906101000a90046001600160a01b03166001600160a01b031663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b158015611f8c57600080fd5b505afa158015611fa0573d6000803e3d6000fd5b505050506040513d6020811015611fb657600080fd5b5051600b546001600160a01b038216158015945091925090612067578015612062576000611ff3610ff56001600160701b03888116908816611bb9565b905060006120008361207b565b90508082111561205f5760006120226120198484611c1c565b60005490611bb9565b9050600061203b83612035866005611bb9565b90612238565b9050600081838161204857fe5b049050801561205b5761205b87826120cd565b5050505b50505b612073565b8015612073576000600b555b505092915050565b600060038211156120be575080600160028204015b818110156120b8578091506002818285816120a757fe5b0401816120b057fe5b049050612090565b506120c8565b81156120c8575060015b919050565b6000546120da9082612238565b60009081556001600160a01b0383168152600160205260409020546120ff9082612238565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b60008183106121665781612168565b825b9392505050565b6001600160a01b0382166000908152600160205260409020546121929082611c1c565b6001600160a01b038316600090815260016020526040812091909155546121b99082611c1c565b60009081556040805183815290516001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef919081900360200190a35050565b6001600160701b0316600160701b0290565b60006001600160701b0382166001600160e01b0384168161223057fe5b049392505050565b80820182811015610b34576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fdfe556e697377617056323a20494e53554646494349454e545f4f55545055545f414d4f554e54556e697377617056323a20494e53554646494349454e545f494e5055545f414d4f554e54556e697377617056323a20494e53554646494349454e545f4c4951554944495459556e697377617056323a20494e53554646494349454e545f4c49515549444954595f4255524e4544556e697377617056323a20494e53554646494349454e545f4c49515549444954595f4d494e544544a2646970667358221220bbfb70ee3160366b2382a7548c984b23942c1ef19cd8a9fef04b947f8de69a2f64736f6c634300060c0033a2646970667358221220979dca197e065176e2c48cfca53900218c9b9a436229caa3153fda35f6d9e16a64736f6c634300060c0033";
//# sourceMappingURL=UniswapV2Factory__factory.js.map