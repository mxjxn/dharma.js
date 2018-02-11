"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DummyToken = {
    contractName: "DummyToken",
    abi: [
        {
            constant: true,
            inputs: [],
            name: "mintingFinished",
            outputs: [
                {
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "name",
            outputs: [
                {
                    name: "",
                    type: "string",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    name: "_spender",
                    type: "address",
                },
                {
                    name: "_value",
                    type: "uint256",
                },
            ],
            name: "approve",
            outputs: [
                {
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "totalSupply",
            outputs: [
                {
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    name: "_from",
                    type: "address",
                },
                {
                    name: "_to",
                    type: "address",
                },
                {
                    name: "_value",
                    type: "uint256",
                },
            ],
            name: "transferFrom",
            outputs: [
                {
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "decimals",
            outputs: [
                {
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    name: "_to",
                    type: "address",
                },
                {
                    name: "_amount",
                    type: "uint256",
                },
            ],
            name: "mint",
            outputs: [
                {
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    name: "_spender",
                    type: "address",
                },
                {
                    name: "_subtractedValue",
                    type: "uint256",
                },
            ],
            name: "decreaseApproval",
            outputs: [
                {
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    name: "_owner",
                    type: "address",
                },
            ],
            name: "balanceOf",
            outputs: [
                {
                    name: "balance",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [],
            name: "finishMinting",
            outputs: [
                {
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "owner",
            outputs: [
                {
                    name: "",
                    type: "address",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "symbol",
            outputs: [
                {
                    name: "",
                    type: "string",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    name: "_to",
                    type: "address",
                },
                {
                    name: "_value",
                    type: "uint256",
                },
            ],
            name: "transfer",
            outputs: [
                {
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    name: "_spender",
                    type: "address",
                },
                {
                    name: "_addedValue",
                    type: "uint256",
                },
            ],
            name: "increaseApproval",
            outputs: [
                {
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    name: "_owner",
                    type: "address",
                },
                {
                    name: "_spender",
                    type: "address",
                },
            ],
            name: "allowance",
            outputs: [
                {
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    name: "_target",
                    type: "address",
                },
                {
                    name: "_value",
                    type: "uint256",
                },
            ],
            name: "setBalance",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    name: "newOwner",
                    type: "address",
                },
            ],
            name: "transferOwnership",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    name: "_name",
                    type: "string",
                },
                {
                    name: "_symbol",
                    type: "string",
                },
                {
                    name: "_decimals",
                    type: "uint256",
                },
                {
                    name: "_totalSupply",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "constructor",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    name: "to",
                    type: "address",
                },
                {
                    indexed: false,
                    name: "amount",
                    type: "uint256",
                },
            ],
            name: "Mint",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [],
            name: "MintFinished",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    name: "previousOwner",
                    type: "address",
                },
                {
                    indexed: true,
                    name: "newOwner",
                    type: "address",
                },
            ],
            name: "OwnershipTransferred",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    name: "owner",
                    type: "address",
                },
                {
                    indexed: true,
                    name: "spender",
                    type: "address",
                },
                {
                    indexed: false,
                    name: "value",
                    type: "uint256",
                },
            ],
            name: "Approval",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    name: "from",
                    type: "address",
                },
                {
                    indexed: true,
                    name: "to",
                    type: "address",
                },
                {
                    indexed: false,
                    name: "value",
                    type: "uint256",
                },
            ],
            name: "Transfer",
            type: "event",
        },
    ],
    bytecode: "0x60606040526000600360146101000a81548160ff02191690831515021790555034156200002b57600080fd5b60405162001ba438038062001ba48339810160405280805182019190602001805182019190602001805190602001909190805190602001909190505033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508360049080519060200190620000c092919062000135565b508260059080519060200190620000d992919062000135565b508160068190555080600181905550806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050505050620001e4565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200017857805160ff1916838001178555620001a9565b82800160010185558215620001a9579182015b82811115620001a85782518255916020019190600101906200018b565b5b509050620001b89190620001bc565b5090565b620001e191905b80821115620001dd576000816000905550600101620001c3565b5090565b90565b6119b080620001f46000396000f3006060604052600436106100f1576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806305d2035b146100f657806306fdde0314610123578063095ea7b3146101b157806318160ddd1461020b57806323b872dd14610234578063313ce567146102ad57806340c10f19146102d6578063661884631461033057806370a082311461038a5780637d64bcb4146103d75780638da5cb5b1461040457806395d89b4114610459578063a9059cbb146104e7578063d73dd62314610541578063dd62ed3e1461059b578063e30443bc14610607578063f2fde38b14610649575b600080fd5b341561010157600080fd5b610109610682565b604051808215151515815260200191505060405180910390f35b341561012e57600080fd5b610136610695565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561017657808201518184015260208101905061015b565b50505050905090810190601f1680156101a35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156101bc57600080fd5b6101f1600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610733565b604051808215151515815260200191505060405180910390f35b341561021657600080fd5b61021e610825565b6040518082815260200191505060405180910390f35b341561023f57600080fd5b610293600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061082f565b604051808215151515815260200191505060405180910390f35b34156102b857600080fd5b6102c0610be9565b6040518082815260200191505060405180910390f35b34156102e157600080fd5b610316600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610bef565b604051808215151515815260200191505060405180910390f35b341561033b57600080fd5b610370600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610dd5565b604051808215151515815260200191505060405180910390f35b341561039557600080fd5b6103c1600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611066565b6040518082815260200191505060405180910390f35b34156103e257600080fd5b6103ea6110ae565b604051808215151515815260200191505060405180910390f35b341561040f57600080fd5b610417611176565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561046457600080fd5b61046c61119c565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104ac578082015181840152602081019050610491565b50505050905090810190601f1680156104d95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156104f257600080fd5b610527600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061123a565b604051808215151515815260200191505060405180910390f35b341561054c57600080fd5b610581600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611459565b604051808215151515815260200191505060405180910390f35b34156105a657600080fd5b6105f1600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611655565b6040518082815260200191505060405180910390f35b341561061257600080fd5b610647600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506116dc565b005b341561065457600080fd5b610680600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506117f5565b005b600360149054906101000a900460ff1681565b60048054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561072b5780601f106107005761010080835404028352916020019161072b565b820191906000526020600020905b81548152906001019060200180831161070e57829003601f168201915b505050505081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600154905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561086c57600080fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156108b957600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561094457600080fd5b610995826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461194d90919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610a28826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461196690919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610af982600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461194d90919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60065481565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610c4d57600080fd5b600360149054906101000a900460ff16151515610c6957600080fd5b610c7e8260015461196690919063ffffffff16565b600181905550610cd5826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461196690919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885836040518082815260200191505060405180910390a28273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905080831115610ee6576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610f7a565b610ef9838261194d90919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561110c57600080fd5b600360149054906101000a900460ff1615151561112857600080fd5b6001600360146101000a81548160ff0219169083151502179055507fae5184fba832cb2b1f702aca6117b8d265eaf03ad33eb133f19dde0f5920fa0860405160405180910390a16001905090565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112325780601f1061120757610100808354040283529160200191611232565b820191906000526020600020905b81548152906001019060200180831161121557829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561127757600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156112c457600080fd5b611315826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461194d90919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506113a8826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461196690919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60006114ea82600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461196690919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561173a57600080fd5b61174383611066565b90508082101561177f57611774611763838361194d90919063ffffffff16565b60015461194d90919063ffffffff16565b6001819055506117ad565b6117a6611795828461194d90919063ffffffff16565b60015461196690919063ffffffff16565b6001819055505b816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561185157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561188d57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600082821115151561195b57fe5b818303905092915050565b600080828401905083811015151561197a57fe5b80915050929150505600a165627a7a7230582011ba72e8efc23b428d25e0bb1750f0359daa16be211171d117c67dc3853efc870029",
    deployedBytecode: "0x6060604052600436106100f1576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806305d2035b146100f657806306fdde0314610123578063095ea7b3146101b157806318160ddd1461020b57806323b872dd14610234578063313ce567146102ad57806340c10f19146102d6578063661884631461033057806370a082311461038a5780637d64bcb4146103d75780638da5cb5b1461040457806395d89b4114610459578063a9059cbb146104e7578063d73dd62314610541578063dd62ed3e1461059b578063e30443bc14610607578063f2fde38b14610649575b600080fd5b341561010157600080fd5b610109610682565b604051808215151515815260200191505060405180910390f35b341561012e57600080fd5b610136610695565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561017657808201518184015260208101905061015b565b50505050905090810190601f1680156101a35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156101bc57600080fd5b6101f1600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610733565b604051808215151515815260200191505060405180910390f35b341561021657600080fd5b61021e610825565b6040518082815260200191505060405180910390f35b341561023f57600080fd5b610293600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061082f565b604051808215151515815260200191505060405180910390f35b34156102b857600080fd5b6102c0610be9565b6040518082815260200191505060405180910390f35b34156102e157600080fd5b610316600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610bef565b604051808215151515815260200191505060405180910390f35b341561033b57600080fd5b610370600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610dd5565b604051808215151515815260200191505060405180910390f35b341561039557600080fd5b6103c1600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611066565b6040518082815260200191505060405180910390f35b34156103e257600080fd5b6103ea6110ae565b604051808215151515815260200191505060405180910390f35b341561040f57600080fd5b610417611176565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561046457600080fd5b61046c61119c565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104ac578082015181840152602081019050610491565b50505050905090810190601f1680156104d95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156104f257600080fd5b610527600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061123a565b604051808215151515815260200191505060405180910390f35b341561054c57600080fd5b610581600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611459565b604051808215151515815260200191505060405180910390f35b34156105a657600080fd5b6105f1600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611655565b6040518082815260200191505060405180910390f35b341561061257600080fd5b610647600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506116dc565b005b341561065457600080fd5b610680600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506117f5565b005b600360149054906101000a900460ff1681565b60048054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561072b5780601f106107005761010080835404028352916020019161072b565b820191906000526020600020905b81548152906001019060200180831161070e57829003601f168201915b505050505081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600154905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561086c57600080fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156108b957600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561094457600080fd5b610995826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461194d90919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610a28826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461196690919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610af982600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461194d90919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60065481565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610c4d57600080fd5b600360149054906101000a900460ff16151515610c6957600080fd5b610c7e8260015461196690919063ffffffff16565b600181905550610cd5826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461196690919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885836040518082815260200191505060405180910390a28273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905080831115610ee6576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610f7a565b610ef9838261194d90919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561110c57600080fd5b600360149054906101000a900460ff1615151561112857600080fd5b6001600360146101000a81548160ff0219169083151502179055507fae5184fba832cb2b1f702aca6117b8d265eaf03ad33eb133f19dde0f5920fa0860405160405180910390a16001905090565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112325780601f1061120757610100808354040283529160200191611232565b820191906000526020600020905b81548152906001019060200180831161121557829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561127757600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156112c457600080fd5b611315826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461194d90919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506113a8826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461196690919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60006114ea82600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461196690919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561173a57600080fd5b61174383611066565b90508082101561177f57611774611763838361194d90919063ffffffff16565b60015461194d90919063ffffffff16565b6001819055506117ad565b6117a6611795828461194d90919063ffffffff16565b60015461196690919063ffffffff16565b6001819055505b816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561185157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561188d57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600082821115151561195b57fe5b818303905092915050565b600080828401905083811015151561197a57fe5b80915050929150505600a165627a7a7230582011ba72e8efc23b428d25e0bb1750f0359daa16be211171d117c67dc3853efc870029",
    sourceMap: "151:821:13:-;;;544:5:31;514:35;;;;;;;;;;;;;;;;;;;;300:304:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;509:10:27;501:5;;:18;;;;;;;;;;;;;;;;;;454:5:13;447:4;:12;;;;;;;;;;;;:::i;:::-;;478:7;469:6;:16;;;;;;;;;;;;:::i;:::-;;506:9;495:8;:20;;;;540:12;525;:27;;;;585:12;562:8;:20;571:10;562:20;;;;;;;;;;;;;;;:35;;;;300:304;;;;151:821;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
    deployedSourceMap: "151:821:13:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;514:35:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;223:18:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1798:183:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;371:83:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;736:439:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;273:20:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;853:264:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3602:398:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1189:107:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1231:135:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;238:20:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;247::13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;608:379:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2883:257:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2300:126;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;610:360:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;514:35:31;;;;;;;;;;;;;:::o;223:18:13:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1798:183:32:-;1865:4;1909:6;1877:7;:19;1885:10;1877:19;;;;;;;;;;;;;;;:29;1897:8;1877:29;;;;;;;;;;;;;;;:38;;;;1942:8;1921:38;;1930:10;1921:38;;;1952:6;1921:38;;;;;;;;;;;;;;;;;;1972:4;1965:11;;1798:183;;;;:::o;371:83:28:-;415:7;437:12;;430:19;;371:83;:::o;736:439:32:-;818:4;853:1;838:17;;:3;:17;;;;830:26;;;;;;;;880:8;:15;889:5;880:15;;;;;;;;;;;;;;;;870:6;:25;;862:34;;;;;;;;920:7;:14;928:5;920:14;;;;;;;;;;;;;;;:26;935:10;920:26;;;;;;;;;;;;;;;;910:6;:36;;902:45;;;;;;;;972:27;992:6;972:8;:15;981:5;972:15;;;;;;;;;;;;;;;;:19;;:27;;;;:::i;:::-;954:8;:15;963:5;954:15;;;;;;;;;;;;;;;:45;;;;1021:25;1039:6;1021:8;:13;1030:3;1021:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;1005:8;:13;1014:3;1005:13;;;;;;;;;;;;;;;:41;;;;1081:38;1112:6;1081:7;:14;1089:5;1081:14;;;;;;;;;;;;;;;:26;1096:10;1081:26;;;;;;;;;;;;;;;;:30;;:38;;;;:::i;:::-;1052:7;:14;1060:5;1052:14;;;;;;;;;;;;;;;:26;1067:10;1052:26;;;;;;;;;;;;;;;:67;;;;1141:3;1125:28;;1134:5;1125:28;;;1146:6;1125:28;;;;;;;;;;;;;;;;;;1166:4;1159:11;;736:439;;;;;:::o;273:20:13:-;;;;:::o;853:264:31:-;931:4;653:5:27;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;589:15:31;;;;;;;;;;;588:16;580:25;;;;;;;;958;975:7;958:12;;:16;;:25;;;;:::i;:::-;943:12;:40;;;;1005:26;1023:7;1005:8;:13;1014:3;1005:13;;;;;;;;;;;;;;;;:17;;:26;;;;:::i;:::-;989:8;:13;998:3;989:13;;;;;;;;;;;;;;;:42;;;;1042:3;1037:18;;;1047:7;1037:18;;;;;;;;;;;;;;;;;;1082:3;1061:34;;1078:1;1061:34;;;1087:7;1061:34;;;;;;;;;;;;;;;;;;1108:4;1101:11;;853:264;;;;:::o;3602:398:32:-;3685:4;3697:13;3713:7;:19;3721:10;3713:19;;;;;;;;;;;;;;;:29;3733:8;3713:29;;;;;;;;;;;;;;;;3697:45;;3771:8;3752:16;:27;3748:164;;;3821:1;3789:7;:19;3797:10;3789:19;;;;;;;;;;;;;;;:29;3809:8;3789:29;;;;;;;;;;;;;;;:33;;;;3748:164;;;3875:30;3888:16;3875:8;:12;;:30;;;;:::i;:::-;3843:7;:19;3851:10;3843:19;;;;;;;;;;;;;;;:29;3863:8;3843:29;;;;;;;;;;;;;;;:62;;;;3748:164;3938:8;3917:61;;3926:10;3917:61;;;3948:7;:19;3956:10;3948:19;;;;;;;;;;;;;;;:29;3968:8;3948:29;;;;;;;;;;;;;;;;3917:61;;;;;;;;;;;;;;;;;;3991:4;3984:11;;3602:398;;;;;:::o;1189:107:28:-;1245:15;1275:8;:16;1284:6;1275:16;;;;;;;;;;;;;;;;1268:23;;1189:107;;;:::o;1231:135:31:-;1290:4;653:5:27;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;589:15:31;;;;;;;;;;;588:16;580:25;;;;;;;;1320:4;1302:15;;:22;;;;;;;;;;;;;;;;;;1330:14;;;;;;;;;;1357:4;1350:11;;1231:135;:::o;238:20:27:-;;;;;;;;;;;;;:::o;247::13:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;608:379:28:-;671:4;706:1;691:17;;:3;:17;;;;683:26;;;;;;;;733:8;:20;742:10;733:20;;;;;;;;;;;;;;;;723:6;:30;;715:39;;;;;;;;847:32;872:6;847:8;:20;856:10;847:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;824:8;:20;833:10;824:20;;;;;;;;;;;;;;;:55;;;;901:25;919:6;901:8;:13;910:3;901:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;885:8;:13;894:3;885:13;;;;;;;;;;;;;;;:41;;;;953:3;932:33;;941:10;932:33;;;958:6;932:33;;;;;;;;;;;;;;;;;;978:4;971:11;;608:379;;;;:::o;2883:257:32:-;2961:4;3005:46;3039:11;3005:7;:19;3013:10;3005:19;;;;;;;;;;;;;;;:29;3025:8;3005:29;;;;;;;;;;;;;;;;:33;;:46;;;;:::i;:::-;2973:7;:19;2981:10;2973:19;;;;;;;;;;;;;;;:29;2993:8;2973:29;;;;;;;;;;;;;;;:78;;;;3078:8;3057:61;;3066:10;3057:61;;;3088:7;:19;3096:10;3088:19;;;;;;;;;;;;;;;:29;3108:8;3088:29;;;;;;;;;;;;;;;;3057:61;;;;;;;;;;;;;;;;;;3131:4;3124:11;;2883:257;;;;:::o;2300:126::-;2374:7;2396;:15;2404:6;2396:15;;;;;;;;;;;;;;;:25;2412:8;2396:25;;;;;;;;;;;;;;;;2389:32;;2300:126;;;;:::o;610:360:13:-;687:16;653:5:27;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;706:18:13;716:7;706:9;:18::i;:::-;687:37;;747:11;738:6;:20;734:194;;;789:41;806:23;822:6;806:11;:15;;:23;;;;:::i;:::-;789:12;;:16;;:41;;;;:::i;:::-;774:12;:56;;;;734:194;;;876:41;893:23;904:11;893:6;:10;;:23;;;;:::i;:::-;876:12;;:16;;:41;;;;:::i;:::-;861:12;:56;;;;734:194;957:6;937:8;:17;946:7;937:17;;;;;;;;;;;;;;;:26;;;;610:360;;;:::o;832:169:27:-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o;836:110:26:-;894:7;921:1;916;:6;;909:14;;;;;;940:1;936;:5;929:12;;836:110;;;;:::o;1008:129::-;1066:7;1081:9;1097:1;1093;:5;1081:17;;1116:1;1111;:6;;1104:14;;;;;;1131:1;1124:8;;1008:129;;;;;:::o",
    source: 'pragma solidity 0.4.18;\n\nimport "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";\nimport "zeppelin-solidity/contracts/math/SafeMath.sol";\n\n\ncontract DummyToken is MintableToken {\n    using SafeMath for uint;\n    string public name;\n    string public symbol;\n    uint public decimals;\n\n    function DummyToken(\n        string _name,\n        string _symbol,\n        uint _decimals,\n        uint _totalSupply)\n        public\n    {\n        name = _name;\n        symbol = _symbol;\n        decimals = _decimals;\n        totalSupply_ = _totalSupply;\n        balances[msg.sender] = _totalSupply;\n    }\n\n    function setBalance(address _target, uint _value) public onlyOwner {\n        uint currBalance = balanceOf(_target);\n        if (_value < currBalance) {\n            totalSupply_ = totalSupply_.sub(currBalance.sub(_value));\n        } else {\n            totalSupply_ = totalSupply_.add(_value.sub(currBalance));\n        }\n        balances[_target] = _value;\n    }\n}\n',
    sourcePath: "/Users/nadavhollander/Documents/Dharma/Development/dharma.js/node_modules/charta/contracts/test/dummy_tokens/DummyToken.sol",
    ast: {
        attributes: {
            absolutePath: "/Users/nadavhollander/Documents/Dharma/Development/dharma.js/node_modules/charta/contracts/test/dummy_tokens/DummyToken.sol",
            exportedSymbols: {
                DummyToken: [3167],
            },
        },
        children: [
            {
                attributes: {
                    literals: ["solidity", "0.4", ".18"],
                },
                id: 3070,
                name: "PragmaDirective",
                src: "0:23:13",
            },
            {
                attributes: {
                    SourceUnit: 5876,
                    absolutePath: "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol",
                    file: "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol",
                    scope: 3168,
                    symbolAliases: [null],
                    unitAlias: "",
                },
                id: 3071,
                name: "ImportDirective",
                src: "25:67:13",
            },
            {
                attributes: {
                    SourceUnit: 5554,
                    absolutePath: "zeppelin-solidity/contracts/math/SafeMath.sol",
                    file: "zeppelin-solidity/contracts/math/SafeMath.sol",
                    scope: 3168,
                    symbolAliases: [null],
                    unitAlias: "",
                },
                id: 3072,
                name: "ImportDirective",
                src: "93:55:13",
            },
            {
                attributes: {
                    contractDependencies: [5609, 5705, 5748, 5780, 5875, 6121],
                    contractKind: "contract",
                    documentation: null,
                    fullyImplemented: true,
                    linearizedBaseContracts: [3167, 5875, 5609, 6121, 5705, 5748, 5780],
                    name: "DummyToken",
                    scope: 3168,
                },
                children: [
                    {
                        attributes: {
                            arguments: [null],
                        },
                        children: [
                            {
                                attributes: {
                                    contractScope: null,
                                    name: "MintableToken",
                                    referencedDeclaration: 5875,
                                    type: "contract MintableToken",
                                },
                                id: 3073,
                                name: "UserDefinedTypeName",
                                src: "174:13:13",
                            },
                        ],
                        id: 3074,
                        name: "InheritanceSpecifier",
                        src: "174:13:13",
                    },
                    {
                        children: [
                            {
                                attributes: {
                                    contractScope: null,
                                    name: "SafeMath",
                                    referencedDeclaration: 5553,
                                    type: "library SafeMath",
                                },
                                id: 3075,
                                name: "UserDefinedTypeName",
                                src: "200:8:13",
                            },
                            {
                                attributes: {
                                    name: "uint",
                                    type: "uint256",
                                },
                                id: 3076,
                                name: "ElementaryTypeName",
                                src: "213:4:13",
                            },
                        ],
                        id: 3077,
                        name: "UsingForDirective",
                        src: "194:24:13",
                    },
                    {
                        attributes: {
                            constant: false,
                            name: "name",
                            scope: 3167,
                            stateVariable: true,
                            storageLocation: "default",
                            type: "string storage ref",
                            value: null,
                            visibility: "public",
                        },
                        children: [
                            {
                                attributes: {
                                    name: "string",
                                    type: "string storage pointer",
                                },
                                id: 3078,
                                name: "ElementaryTypeName",
                                src: "223:6:13",
                            },
                        ],
                        id: 3079,
                        name: "VariableDeclaration",
                        src: "223:18:13",
                    },
                    {
                        attributes: {
                            constant: false,
                            name: "symbol",
                            scope: 3167,
                            stateVariable: true,
                            storageLocation: "default",
                            type: "string storage ref",
                            value: null,
                            visibility: "public",
                        },
                        children: [
                            {
                                attributes: {
                                    name: "string",
                                    type: "string storage pointer",
                                },
                                id: 3080,
                                name: "ElementaryTypeName",
                                src: "247:6:13",
                            },
                        ],
                        id: 3081,
                        name: "VariableDeclaration",
                        src: "247:20:13",
                    },
                    {
                        attributes: {
                            constant: false,
                            name: "decimals",
                            scope: 3167,
                            stateVariable: true,
                            storageLocation: "default",
                            type: "uint256",
                            value: null,
                            visibility: "public",
                        },
                        children: [
                            {
                                attributes: {
                                    name: "uint",
                                    type: "uint256",
                                },
                                id: 3082,
                                name: "ElementaryTypeName",
                                src: "273:4:13",
                            },
                        ],
                        id: 3083,
                        name: "VariableDeclaration",
                        src: "273:20:13",
                    },
                    {
                        attributes: {
                            constant: false,
                            implemented: true,
                            isConstructor: true,
                            modifiers: [null],
                            name: "DummyToken",
                            payable: false,
                            scope: 3167,
                            stateMutability: "nonpayable",
                            superFunction: null,
                            visibility: "public",
                        },
                        children: [
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_name",
                                            scope: 3118,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "string memory",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "string",
                                                    type: "string storage pointer",
                                                },
                                                id: 3084,
                                                name: "ElementaryTypeName",
                                                src: "329:6:13",
                                            },
                                        ],
                                        id: 3085,
                                        name: "VariableDeclaration",
                                        src: "329:12:13",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_symbol",
                                            scope: 3118,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "string memory",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "string",
                                                    type: "string storage pointer",
                                                },
                                                id: 3086,
                                                name: "ElementaryTypeName",
                                                src: "351:6:13",
                                            },
                                        ],
                                        id: 3087,
                                        name: "VariableDeclaration",
                                        src: "351:14:13",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_decimals",
                                            scope: 3118,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "uint256",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "uint",
                                                    type: "uint256",
                                                },
                                                id: 3088,
                                                name: "ElementaryTypeName",
                                                src: "375:4:13",
                                            },
                                        ],
                                        id: 3089,
                                        name: "VariableDeclaration",
                                        src: "375:14:13",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_totalSupply",
                                            scope: 3118,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "uint256",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "uint",
                                                    type: "uint256",
                                                },
                                                id: 3090,
                                                name: "ElementaryTypeName",
                                                src: "399:4:13",
                                            },
                                        ],
                                        id: 3091,
                                        name: "VariableDeclaration",
                                        src: "399:17:13",
                                    },
                                ],
                                id: 3092,
                                name: "ParameterList",
                                src: "319:98:13",
                            },
                            {
                                attributes: {
                                    parameters: [null],
                                },
                                children: [],
                                id: 3093,
                                name: "ParameterList",
                                src: "437:0:13",
                            },
                            {
                                children: [
                                    {
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    lValueRequested: false,
                                                    operator: "=",
                                                    type: "string storage ref",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 3079,
                                                            type: "string storage ref",
                                                            value: "name",
                                                        },
                                                        id: 3094,
                                                        name: "Identifier",
                                                        src: "447:4:13",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 3085,
                                                            type: "string memory",
                                                            value: "_name",
                                                        },
                                                        id: 3095,
                                                        name: "Identifier",
                                                        src: "454:5:13",
                                                    },
                                                ],
                                                id: 3096,
                                                name: "Assignment",
                                                src: "447:12:13",
                                            },
                                        ],
                                        id: 3097,
                                        name: "ExpressionStatement",
                                        src: "447:12:13",
                                    },
                                    {
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    lValueRequested: false,
                                                    operator: "=",
                                                    type: "string storage ref",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 3081,
                                                            type: "string storage ref",
                                                            value: "symbol",
                                                        },
                                                        id: 3098,
                                                        name: "Identifier",
                                                        src: "469:6:13",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 3087,
                                                            type: "string memory",
                                                            value: "_symbol",
                                                        },
                                                        id: 3099,
                                                        name: "Identifier",
                                                        src: "478:7:13",
                                                    },
                                                ],
                                                id: 3100,
                                                name: "Assignment",
                                                src: "469:16:13",
                                            },
                                        ],
                                        id: 3101,
                                        name: "ExpressionStatement",
                                        src: "469:16:13",
                                    },
                                    {
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    lValueRequested: false,
                                                    operator: "=",
                                                    type: "uint256",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 3083,
                                                            type: "uint256",
                                                            value: "decimals",
                                                        },
                                                        id: 3102,
                                                        name: "Identifier",
                                                        src: "495:8:13",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 3089,
                                                            type: "uint256",
                                                            value: "_decimals",
                                                        },
                                                        id: 3103,
                                                        name: "Identifier",
                                                        src: "506:9:13",
                                                    },
                                                ],
                                                id: 3104,
                                                name: "Assignment",
                                                src: "495:20:13",
                                            },
                                        ],
                                        id: 3105,
                                        name: "ExpressionStatement",
                                        src: "495:20:13",
                                    },
                                    {
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    lValueRequested: false,
                                                    operator: "=",
                                                    type: "uint256",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 5624,
                                                            type: "uint256",
                                                            value: "totalSupply_",
                                                        },
                                                        id: 3106,
                                                        name: "Identifier",
                                                        src: "525:12:13",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 3091,
                                                            type: "uint256",
                                                            value: "_totalSupply",
                                                        },
                                                        id: 3107,
                                                        name: "Identifier",
                                                        src: "540:12:13",
                                                    },
                                                ],
                                                id: 3108,
                                                name: "Assignment",
                                                src: "525:27:13",
                                            },
                                        ],
                                        id: 3109,
                                        name: "ExpressionStatement",
                                        src: "525:27:13",
                                    },
                                    {
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    lValueRequested: false,
                                                    operator: "=",
                                                    type: "uint256",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            isConstant: false,
                                                            isLValue: true,
                                                            isPure: false,
                                                            lValueRequested: true,
                                                            type: "uint256",
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 5622,
                                                                    type: "mapping(address => uint256)",
                                                                    value: "balances",
                                                                },
                                                                id: 3110,
                                                                name: "Identifier",
                                                                src: "562:8:13",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: false,
                                                                    lValueRequested: false,
                                                                    member_name: "sender",
                                                                    referencedDeclaration: null,
                                                                    type: "address",
                                                                },
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 6133,
                                                                            type: "msg",
                                                                            value: "msg",
                                                                        },
                                                                        id: 3111,
                                                                        name: "Identifier",
                                                                        src: "571:3:13",
                                                                    },
                                                                ],
                                                                id: 3112,
                                                                name: "MemberAccess",
                                                                src: "571:10:13",
                                                            },
                                                        ],
                                                        id: 3113,
                                                        name: "IndexAccess",
                                                        src: "562:20:13",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 3091,
                                                            type: "uint256",
                                                            value: "_totalSupply",
                                                        },
                                                        id: 3114,
                                                        name: "Identifier",
                                                        src: "585:12:13",
                                                    },
                                                ],
                                                id: 3115,
                                                name: "Assignment",
                                                src: "562:35:13",
                                            },
                                        ],
                                        id: 3116,
                                        name: "ExpressionStatement",
                                        src: "562:35:13",
                                    },
                                ],
                                id: 3117,
                                name: "Block",
                                src: "437:167:13",
                            },
                        ],
                        id: 3118,
                        name: "FunctionDefinition",
                        src: "300:304:13",
                    },
                    {
                        attributes: {
                            constant: false,
                            implemented: true,
                            isConstructor: false,
                            name: "setBalance",
                            payable: false,
                            scope: 3167,
                            stateMutability: "nonpayable",
                            superFunction: null,
                            visibility: "public",
                        },
                        children: [
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_target",
                                            scope: 3166,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "address",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "address",
                                                    type: "address",
                                                },
                                                id: 3119,
                                                name: "ElementaryTypeName",
                                                src: "630:7:13",
                                            },
                                        ],
                                        id: 3120,
                                        name: "VariableDeclaration",
                                        src: "630:15:13",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_value",
                                            scope: 3166,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "uint256",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "uint",
                                                    type: "uint256",
                                                },
                                                id: 3121,
                                                name: "ElementaryTypeName",
                                                src: "647:4:13",
                                            },
                                        ],
                                        id: 3122,
                                        name: "VariableDeclaration",
                                        src: "647:11:13",
                                    },
                                ],
                                id: 3123,
                                name: "ParameterList",
                                src: "629:30:13",
                            },
                            {
                                attributes: {
                                    parameters: [null],
                                },
                                children: [],
                                id: 3126,
                                name: "ParameterList",
                                src: "677:0:13",
                            },
                            {
                                attributes: {
                                    arguments: [null],
                                },
                                children: [
                                    {
                                        attributes: {
                                            argumentTypes: null,
                                            overloadedDeclarations: [null],
                                            referencedDeclaration: 5583,
                                            type: "modifier ()",
                                            value: "onlyOwner",
                                        },
                                        id: 3124,
                                        name: "Identifier",
                                        src: "667:9:13",
                                    },
                                ],
                                id: 3125,
                                name: "ModifierInvocation",
                                src: "667:9:13",
                            },
                            {
                                children: [
                                    {
                                        attributes: {
                                            assignments: [3128],
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    constant: false,
                                                    name: "currBalance",
                                                    scope: 3166,
                                                    stateVariable: false,
                                                    storageLocation: "default",
                                                    type: "uint256",
                                                    value: null,
                                                    visibility: "internal",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            name: "uint",
                                                            type: "uint256",
                                                        },
                                                        id: 3127,
                                                        name: "ElementaryTypeName",
                                                        src: "687:4:13",
                                                    },
                                                ],
                                                id: 3128,
                                                name: "VariableDeclaration",
                                                src: "687:16:13",
                                            },
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    isStructConstructorCall: false,
                                                    lValueRequested: false,
                                                    names: [null],
                                                    type: "uint256",
                                                    type_conversion: false,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [
                                                                {
                                                                    typeIdentifier: "t_address",
                                                                    typeString: "address",
                                                                },
                                                            ],
                                                            overloadedDeclarations: [5704],
                                                            referencedDeclaration: 5704,
                                                            type: "function (address) view returns (uint256)",
                                                            value: "balanceOf",
                                                        },
                                                        id: 3129,
                                                        name: "Identifier",
                                                        src: "706:9:13",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 3120,
                                                            type: "address",
                                                            value: "_target",
                                                        },
                                                        id: 3130,
                                                        name: "Identifier",
                                                        src: "716:7:13",
                                                    },
                                                ],
                                                id: 3131,
                                                name: "FunctionCall",
                                                src: "706:18:13",
                                            },
                                        ],
                                        id: 3132,
                                        name: "VariableDeclarationStatement",
                                        src: "687:37:13",
                                    },
                                    {
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    commonType: {
                                                        typeIdentifier: "t_uint256",
                                                        typeString: "uint256",
                                                    },
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    lValueRequested: false,
                                                    operator: "<",
                                                    type: "bool",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 3122,
                                                            type: "uint256",
                                                            value: "_value",
                                                        },
                                                        id: 3133,
                                                        name: "Identifier",
                                                        src: "738:6:13",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 3128,
                                                            type: "uint256",
                                                            value: "currBalance",
                                                        },
                                                        id: 3134,
                                                        name: "Identifier",
                                                        src: "747:11:13",
                                                    },
                                                ],
                                                id: 3135,
                                                name: "BinaryOperation",
                                                src: "738:20:13",
                                            },
                                            {
                                                children: [
                                                    {
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: false,
                                                                    lValueRequested: false,
                                                                    operator: "=",
                                                                    type: "uint256",
                                                                },
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 5624,
                                                                            type: "uint256",
                                                                            value: "totalSupply_",
                                                                        },
                                                                        id: 3136,
                                                                        name: "Identifier",
                                                                        src: "774:12:13",
                                                                    },
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            isConstant: false,
                                                                            isLValue: false,
                                                                            isPure: false,
                                                                            isStructConstructorCall: false,
                                                                            lValueRequested: false,
                                                                            names: [null],
                                                                            type: "uint256",
                                                                            type_conversion: false,
                                                                        },
                                                                        children: [
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: [
                                                                                        {
                                                                                            typeIdentifier: "t_uint256",
                                                                                            typeString: "uint256",
                                                                                        },
                                                                                    ],
                                                                                    isConstant: false,
                                                                                    isLValue: false,
                                                                                    isPure: false,
                                                                                    lValueRequested: false,
                                                                                    member_name: "sub",
                                                                                    referencedDeclaration: 5528,
                                                                                    type: "function (uint256,uint256) pure returns (uint256)",
                                                                                },
                                                                                children: [
                                                                                    {
                                                                                        attributes: {
                                                                                            argumentTypes: null,
                                                                                            overloadedDeclarations: [
                                                                                                null,
                                                                                            ],
                                                                                            referencedDeclaration: 5624,
                                                                                            type: "uint256",
                                                                                            value: "totalSupply_",
                                                                                        },
                                                                                        id: 3137,
                                                                                        name: "Identifier",
                                                                                        src: "789:12:13",
                                                                                    },
                                                                                ],
                                                                                id: 3138,
                                                                                name: "MemberAccess",
                                                                                src: "789:16:13",
                                                                            },
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: null,
                                                                                    isConstant: false,
                                                                                    isLValue: false,
                                                                                    isPure: false,
                                                                                    isStructConstructorCall: false,
                                                                                    lValueRequested: false,
                                                                                    names: [null],
                                                                                    type: "uint256",
                                                                                    type_conversion: false,
                                                                                },
                                                                                children: [
                                                                                    {
                                                                                        attributes: {
                                                                                            argumentTypes: [
                                                                                                {
                                                                                                    typeIdentifier: "t_uint256",
                                                                                                    typeString: "uint256",
                                                                                                },
                                                                                            ],
                                                                                            isConstant: false,
                                                                                            isLValue: false,
                                                                                            isPure: false,
                                                                                            lValueRequested: false,
                                                                                            member_name: "sub",
                                                                                            referencedDeclaration: 5528,
                                                                                            type: "function (uint256,uint256) pure returns (uint256)",
                                                                                        },
                                                                                        children: [
                                                                                            {
                                                                                                attributes: {
                                                                                                    argumentTypes: null,
                                                                                                    overloadedDeclarations: [
                                                                                                        null,
                                                                                                    ],
                                                                                                    referencedDeclaration: 3128,
                                                                                                    type: "uint256",
                                                                                                    value: "currBalance",
                                                                                                },
                                                                                                id: 3139,
                                                                                                name: "Identifier",
                                                                                                src: "806:11:13",
                                                                                            },
                                                                                        ],
                                                                                        id: 3140,
                                                                                        name: "MemberAccess",
                                                                                        src: "806:15:13",
                                                                                    },
                                                                                    {
                                                                                        attributes: {
                                                                                            argumentTypes: null,
                                                                                            overloadedDeclarations: [
                                                                                                null,
                                                                                            ],
                                                                                            referencedDeclaration: 3122,
                                                                                            type: "uint256",
                                                                                            value: "_value",
                                                                                        },
                                                                                        id: 3141,
                                                                                        name: "Identifier",
                                                                                        src: "822:6:13",
                                                                                    },
                                                                                ],
                                                                                id: 3142,
                                                                                name: "FunctionCall",
                                                                                src: "806:23:13",
                                                                            },
                                                                        ],
                                                                        id: 3143,
                                                                        name: "FunctionCall",
                                                                        src: "789:41:13",
                                                                    },
                                                                ],
                                                                id: 3144,
                                                                name: "Assignment",
                                                                src: "774:56:13",
                                                            },
                                                        ],
                                                        id: 3145,
                                                        name: "ExpressionStatement",
                                                        src: "774:56:13",
                                                    },
                                                ],
                                                id: 3146,
                                                name: "Block",
                                                src: "760:81:13",
                                            },
                                            {
                                                children: [
                                                    {
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: false,
                                                                    lValueRequested: false,
                                                                    operator: "=",
                                                                    type: "uint256",
                                                                },
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 5624,
                                                                            type: "uint256",
                                                                            value: "totalSupply_",
                                                                        },
                                                                        id: 3147,
                                                                        name: "Identifier",
                                                                        src: "861:12:13",
                                                                    },
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            isConstant: false,
                                                                            isLValue: false,
                                                                            isPure: false,
                                                                            isStructConstructorCall: false,
                                                                            lValueRequested: false,
                                                                            names: [null],
                                                                            type: "uint256",
                                                                            type_conversion: false,
                                                                        },
                                                                        children: [
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: [
                                                                                        {
                                                                                            typeIdentifier: "t_uint256",
                                                                                            typeString: "uint256",
                                                                                        },
                                                                                    ],
                                                                                    isConstant: false,
                                                                                    isLValue: false,
                                                                                    isPure: false,
                                                                                    lValueRequested: false,
                                                                                    member_name: "add",
                                                                                    referencedDeclaration: 5552,
                                                                                    type: "function (uint256,uint256) pure returns (uint256)",
                                                                                },
                                                                                children: [
                                                                                    {
                                                                                        attributes: {
                                                                                            argumentTypes: null,
                                                                                            overloadedDeclarations: [
                                                                                                null,
                                                                                            ],
                                                                                            referencedDeclaration: 5624,
                                                                                            type: "uint256",
                                                                                            value: "totalSupply_",
                                                                                        },
                                                                                        id: 3148,
                                                                                        name: "Identifier",
                                                                                        src: "876:12:13",
                                                                                    },
                                                                                ],
                                                                                id: 3149,
                                                                                name: "MemberAccess",
                                                                                src: "876:16:13",
                                                                            },
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: null,
                                                                                    isConstant: false,
                                                                                    isLValue: false,
                                                                                    isPure: false,
                                                                                    isStructConstructorCall: false,
                                                                                    lValueRequested: false,
                                                                                    names: [null],
                                                                                    type: "uint256",
                                                                                    type_conversion: false,
                                                                                },
                                                                                children: [
                                                                                    {
                                                                                        attributes: {
                                                                                            argumentTypes: [
                                                                                                {
                                                                                                    typeIdentifier: "t_uint256",
                                                                                                    typeString: "uint256",
                                                                                                },
                                                                                            ],
                                                                                            isConstant: false,
                                                                                            isLValue: false,
                                                                                            isPure: false,
                                                                                            lValueRequested: false,
                                                                                            member_name: "sub",
                                                                                            referencedDeclaration: 5528,
                                                                                            type: "function (uint256,uint256) pure returns (uint256)",
                                                                                        },
                                                                                        children: [
                                                                                            {
                                                                                                attributes: {
                                                                                                    argumentTypes: null,
                                                                                                    overloadedDeclarations: [
                                                                                                        null,
                                                                                                    ],
                                                                                                    referencedDeclaration: 3122,
                                                                                                    type: "uint256",
                                                                                                    value: "_value",
                                                                                                },
                                                                                                id: 3150,
                                                                                                name: "Identifier",
                                                                                                src: "893:6:13",
                                                                                            },
                                                                                        ],
                                                                                        id: 3151,
                                                                                        name: "MemberAccess",
                                                                                        src: "893:10:13",
                                                                                    },
                                                                                    {
                                                                                        attributes: {
                                                                                            argumentTypes: null,
                                                                                            overloadedDeclarations: [
                                                                                                null,
                                                                                            ],
                                                                                            referencedDeclaration: 3128,
                                                                                            type: "uint256",
                                                                                            value: "currBalance",
                                                                                        },
                                                                                        id: 3152,
                                                                                        name: "Identifier",
                                                                                        src: "904:11:13",
                                                                                    },
                                                                                ],
                                                                                id: 3153,
                                                                                name: "FunctionCall",
                                                                                src: "893:23:13",
                                                                            },
                                                                        ],
                                                                        id: 3154,
                                                                        name: "FunctionCall",
                                                                        src: "876:41:13",
                                                                    },
                                                                ],
                                                                id: 3155,
                                                                name: "Assignment",
                                                                src: "861:56:13",
                                                            },
                                                        ],
                                                        id: 3156,
                                                        name: "ExpressionStatement",
                                                        src: "861:56:13",
                                                    },
                                                ],
                                                id: 3157,
                                                name: "Block",
                                                src: "847:81:13",
                                            },
                                        ],
                                        id: 3158,
                                        name: "IfStatement",
                                        src: "734:194:13",
                                    },
                                    {
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    lValueRequested: false,
                                                    operator: "=",
                                                    type: "uint256",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            isConstant: false,
                                                            isLValue: true,
                                                            isPure: false,
                                                            lValueRequested: true,
                                                            type: "uint256",
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 5622,
                                                                    type: "mapping(address => uint256)",
                                                                    value: "balances",
                                                                },
                                                                id: 3159,
                                                                name: "Identifier",
                                                                src: "937:8:13",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 3120,
                                                                    type: "address",
                                                                    value: "_target",
                                                                },
                                                                id: 3160,
                                                                name: "Identifier",
                                                                src: "946:7:13",
                                                            },
                                                        ],
                                                        id: 3161,
                                                        name: "IndexAccess",
                                                        src: "937:17:13",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 3122,
                                                            type: "uint256",
                                                            value: "_value",
                                                        },
                                                        id: 3162,
                                                        name: "Identifier",
                                                        src: "957:6:13",
                                                    },
                                                ],
                                                id: 3163,
                                                name: "Assignment",
                                                src: "937:26:13",
                                            },
                                        ],
                                        id: 3164,
                                        name: "ExpressionStatement",
                                        src: "937:26:13",
                                    },
                                ],
                                id: 3165,
                                name: "Block",
                                src: "677:293:13",
                            },
                        ],
                        id: 3166,
                        name: "FunctionDefinition",
                        src: "610:360:13",
                    },
                ],
                id: 3167,
                name: "ContractDefinition",
                src: "151:821:13",
            },
        ],
        id: 3168,
        name: "SourceUnit",
        src: "0:973:13",
    },
    compiler: {
        name: "solc",
        version: "0.4.18+commit.9cf6e910.Emscripten.clang",
    },
    networks: {},
    schemaVersion: "1.0.1",
    updatedAt: "2018-02-10T23:43:15.620Z",
};
//# sourceMappingURL=DummyToken.js.map