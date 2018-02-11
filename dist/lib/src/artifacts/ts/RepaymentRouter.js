"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepaymentRouter = {
    contractName: "RepaymentRouter",
    abi: [
        {
            constant: true,
            inputs: [],
            name: "tokenTransferProxy",
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
            name: "debtRegistry",
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
            constant: false,
            inputs: [],
            name: "unpause",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "paused",
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
            constant: false,
            inputs: [],
            name: "pause",
            outputs: [],
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
            constant: false,
            inputs: [
                {
                    name: "agreementId",
                    type: "bytes32",
                },
                {
                    name: "tokenId",
                    type: "uint256",
                },
                {
                    name: "tokenAddress",
                    type: "address",
                },
            ],
            name: "repayNFT",
            outputs: [
                {
                    name: "_tokenId",
                    type: "uint256",
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
            constant: false,
            inputs: [
                {
                    name: "agreementId",
                    type: "bytes32",
                },
                {
                    name: "amount",
                    type: "uint256",
                },
                {
                    name: "tokenAddress",
                    type: "address",
                },
            ],
            name: "repay",
            outputs: [
                {
                    name: "_amountRepaid",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    name: "_debtRegistry",
                    type: "address",
                },
                {
                    name: "_tokenTransferProxy",
                    type: "address",
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
                    name: "_agreementId",
                    type: "bytes32",
                },
                {
                    indexed: true,
                    name: "_payer",
                    type: "address",
                },
                {
                    indexed: true,
                    name: "_beneficiary",
                    type: "address",
                },
                {
                    indexed: false,
                    name: "_amount",
                    type: "uint256",
                },
                {
                    indexed: false,
                    name: "_token",
                    type: "address",
                },
            ],
            name: "LogRepayment",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    name: "_agreementId",
                    type: "bytes32",
                },
                {
                    indexed: true,
                    name: "_payer",
                    type: "address",
                },
                {
                    indexed: true,
                    name: "_beneficiary",
                    type: "address",
                },
                {
                    indexed: false,
                    name: "_tokenId",
                    type: "uint256",
                },
                {
                    indexed: false,
                    name: "_token",
                    type: "address",
                },
            ],
            name: "LogNFTRepayment",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    name: "_errorId",
                    type: "uint8",
                },
                {
                    indexed: true,
                    name: "_agreementId",
                    type: "bytes32",
                },
            ],
            name: "LogError",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [],
            name: "Pause",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [],
            name: "Unpause",
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
    ],
    bytecode: "0x606060405260008060146101000a81548160ff021916908315150217905550341561002957600080fd5b60405160408061182e83398101604052808051906020019091908051906020019091905050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505061170d806101216000396000f300606060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630eefdbad1461009e5780632f866f73146100f35780633f4ba83a146101485780635c975abb1461015d5780638456cb591461018a5780638da5cb5b1461019f5780639270b3a4146101f4578063f2fde38b14610257578063ff26812514610290575b600080fd5b34156100a957600080fd5b6100b16102f3565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156100fe57600080fd5b610106610319565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561015357600080fd5b61015b61033f565b005b341561016857600080fd5b6101706103fd565b604051808215151515815260200191505060405180910390f35b341561019557600080fd5b61019d610410565b005b34156101aa57600080fd5b6101b26104d0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101ff57600080fd5b61024160048080356000191690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506104f5565b6040518082815260200191505060405180910390f35b341561026257600080fd5b61028e600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610d67565b005b341561029b57600080fd5b6102dd60048080356000191690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610ebc565b6040518082815260200191505060405180910390f35b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561039a57600080fd5b600060149054906101000a900460ff1615156103b557600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600060149054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561046b57600080fd5b600060149054906101000a900460ff1615151561048757600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600080600060149054906101000a900460ff1615151561051757600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161415151561055357600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ba20dda4886000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15156105f457600080fd5b6102c65a03f1151561060557600080fd5b505050604051805190509250600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156106905786600019166000600381111561065857fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009350610d5d565b8491508173ffffffffffffffffffffffffffffffffffffffff16631051db346000604051602001526040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15156106ff57600080fd5b6102c65a03f1151561071057600080fd5b50505060405180519050151561072557600080fd5b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16636352211e886000604051602001526040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b15156107b357600080fd5b6102c65a03f115156107c457600080fd5b5050506040518051905073ffffffffffffffffffffffffffffffffffffffff161415806108d05750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1663081812fc886000604051602001526040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b151561089c57600080fd5b6102c65a03f115156108ad57600080fd5b5050506040518051905073ffffffffffffffffffffffffffffffffffffffff1614155b1561091f578660001916600260038111156108e757fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009350610d5d565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f6f494c9886000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15156109c057600080fd5b6102c65a03f115156109d157600080fd5b5050506040518051905090508073ffffffffffffffffffffffffffffffffffffffff166323d567e78833868a8a6000604051602001526040518663ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018086600019166000191681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200195505050505050602060405180830381600087803b1515610b0057600080fd5b6102c65a03f11515610b1157600080fd5b505050604051805190501515610b6a578660001916600380811115610b3257fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009350610d5d565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166315dacbea8633868a6000604051602001526040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001945050505050602060405180830381600087803b1515610c9f57600080fd5b6102c65a03f11515610cb057600080fd5b50505060405180519050508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1688600019167fbe4a224511f75fdeaff010d296cbe371b3e2243768aa1ad4dd2ce7d366ee3d058989604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a48593505b5050509392505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610dc257600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610dfe57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008060008060149054906101000a900460ff16151515610edc57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614151515610f1857600080fd5b600085111515610f2757600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ba20dda4876000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610fc857600080fd5b6102c65a03f11515610fd957600080fd5b505050604051805190509150600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156110645785600019166000600381111561102c57fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a3600092506116d8565b848473ffffffffffffffffffffffffffffffffffffffff166370a08231336000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b151561110857600080fd5b6102c65a03f1151561111957600080fd5b5050506040518051905010806112415750848473ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050602060405180830381600087803b151561122457600080fd5b6102c65a03f1151561123557600080fd5b50505060405180519050105b156112905785600019166001600381111561125857fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a3600092506116d8565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f6f494c9876000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b151561133157600080fd5b6102c65a03f1151561134257600080fd5b5050506040518051905090508073ffffffffffffffffffffffffffffffffffffffff16635f0280ba87338589896000604051602001526040518663ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018086600019166000191681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200195505050505050602060405180830381600087803b151561147157600080fd5b6102c65a03f1151561148257600080fd5b5050506040518051905015156114db5785600019166003808111156114a357fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a3600092506116d8565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166315dacbea853385896000604051602001526040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001945050505050602060405180830381600087803b151561161057600080fd5b6102c65a03f1151561162157600080fd5b50505060405180519050151561163657600080fd5b8173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1687600019167f43ea5a2b552489bf9de7c3d6ded86e3b82423e034255d06db4b388f806db50d08888604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a48492505b505093925050505600a165627a7a723058205199b12122c9b4dd8ee2774ab1ed489a5d4bafc06c8bb1872454e0458878eae10029",
    deployedBytecode: "0x606060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630eefdbad1461009e5780632f866f73146100f35780633f4ba83a146101485780635c975abb1461015d5780638456cb591461018a5780638da5cb5b1461019f5780639270b3a4146101f4578063f2fde38b14610257578063ff26812514610290575b600080fd5b34156100a957600080fd5b6100b16102f3565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156100fe57600080fd5b610106610319565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561015357600080fd5b61015b61033f565b005b341561016857600080fd5b6101706103fd565b604051808215151515815260200191505060405180910390f35b341561019557600080fd5b61019d610410565b005b34156101aa57600080fd5b6101b26104d0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101ff57600080fd5b61024160048080356000191690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506104f5565b6040518082815260200191505060405180910390f35b341561026257600080fd5b61028e600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610d67565b005b341561029b57600080fd5b6102dd60048080356000191690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610ebc565b6040518082815260200191505060405180910390f35b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561039a57600080fd5b600060149054906101000a900460ff1615156103b557600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600060149054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561046b57600080fd5b600060149054906101000a900460ff1615151561048757600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600080600060149054906101000a900460ff1615151561051757600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161415151561055357600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ba20dda4886000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15156105f457600080fd5b6102c65a03f1151561060557600080fd5b505050604051805190509250600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156106905786600019166000600381111561065857fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009350610d5d565b8491508173ffffffffffffffffffffffffffffffffffffffff16631051db346000604051602001526040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15156106ff57600080fd5b6102c65a03f1151561071057600080fd5b50505060405180519050151561072557600080fd5b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16636352211e886000604051602001526040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b15156107b357600080fd5b6102c65a03f115156107c457600080fd5b5050506040518051905073ffffffffffffffffffffffffffffffffffffffff161415806108d05750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1663081812fc886000604051602001526040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b151561089c57600080fd5b6102c65a03f115156108ad57600080fd5b5050506040518051905073ffffffffffffffffffffffffffffffffffffffff1614155b1561091f578660001916600260038111156108e757fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009350610d5d565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f6f494c9886000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15156109c057600080fd5b6102c65a03f115156109d157600080fd5b5050506040518051905090508073ffffffffffffffffffffffffffffffffffffffff166323d567e78833868a8a6000604051602001526040518663ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018086600019166000191681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200195505050505050602060405180830381600087803b1515610b0057600080fd5b6102c65a03f11515610b1157600080fd5b505050604051805190501515610b6a578660001916600380811115610b3257fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009350610d5d565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166315dacbea8633868a6000604051602001526040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001945050505050602060405180830381600087803b1515610c9f57600080fd5b6102c65a03f11515610cb057600080fd5b50505060405180519050508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1688600019167fbe4a224511f75fdeaff010d296cbe371b3e2243768aa1ad4dd2ce7d366ee3d058989604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a48593505b5050509392505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610dc257600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610dfe57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008060008060149054906101000a900460ff16151515610edc57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614151515610f1857600080fd5b600085111515610f2757600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ba20dda4876000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610fc857600080fd5b6102c65a03f11515610fd957600080fd5b505050604051805190509150600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156110645785600019166000600381111561102c57fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a3600092506116d8565b848473ffffffffffffffffffffffffffffffffffffffff166370a08231336000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b151561110857600080fd5b6102c65a03f1151561111957600080fd5b5050506040518051905010806112415750848473ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050602060405180830381600087803b151561122457600080fd5b6102c65a03f1151561123557600080fd5b50505060405180519050105b156112905785600019166001600381111561125857fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a3600092506116d8565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f6f494c9876000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b151561133157600080fd5b6102c65a03f1151561134257600080fd5b5050506040518051905090508073ffffffffffffffffffffffffffffffffffffffff16635f0280ba87338589896000604051602001526040518663ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018086600019166000191681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200195505050505050602060405180830381600087803b151561147157600080fd5b6102c65a03f1151561148257600080fd5b5050506040518051905015156114db5785600019166003808111156114a357fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a3600092506116d8565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166315dacbea853385896000604051602001526040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001945050505050602060405180830381600087803b151561161057600080fd5b6102c65a03f1151561162157600080fd5b50505060405180519050151561163657600080fd5b8173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1687600019167f43ea5a2b552489bf9de7c3d6ded86e3b82423e034255d06db4b388f806db50d08888604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a48492505b505093925050505600a165627a7a723058205199b12122c9b4dd8ee2774ab1ed489a5d4bafc06c8bb1872454e0458878eae10029",
    sourceMap: "1339:5002:4:-;;;268:5:25;247:26;;;;;;;;;;;;;;;;;;;;2228:214:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;509:10:27;501:5;;:18;;;;;;;;;;;;;;;;;;2351:13:4;2323:12;;:42;;;;;;;;;;;;;;;;;;2415:19;2375:18;;:60;;;;;;;;;;;;;;;;;;2228:214;;1339:5002;;;;;;",
    deployedSourceMap: "1339:5002:4:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1420:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1382:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;833:87:25;;;;;;;;;;;;;;247:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;666:85;;;;;;;;;;;;;;238:20:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4639:1700:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;2705:1671:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1420:44;;;;;;;;;;;;;:::o;1382:32::-;;;;;;;;;;;;;:::o;833:87:25:-;653:5:27;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;568:6:25;;;;;;;;;;;560:15;;;;;;;;895:5;886:6;;:14;;;;;;;;;;;;;;;;;;906:9;;;;;;;;;;833:87::o;247:26::-;;;;;;;;;;;;;:::o;666:85::-;653:5:27;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;416:6:25;;;;;;;;;;;415:7;407:16;;;;;;;;729:4;720:6;;:13;;;;;;;;;;;;;;;;;;739:7;;;;;;;;;;666:85::o;238:20:27:-;;;;;;;;;;;;;:::o;4639:1700:4:-;4798:13;4931:19;5154:23;5652:21;416:6:25;;;;;;;;;;;415:7;407:16;;;;;;;;4859:1:4;4835:26;;:12;:26;;;;4827:35;;;;;;;;4953:12;;;;;;;;;;;:27;;;4981:11;4953:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4931:62;;5030:1;5007:25;;:11;:25;;;5003:141;;;5099:11;5048:63;;;5063:33;5057:40;;;;;;;;5048:63;;;;;;;;;;;;5132:1;5125:8;;;;5003:141;5187:12;5154:46;;5218:16;:33;;;:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5210:44;;;;;;;;5387:10;5350:47;;:16;:24;;;5375:7;5350:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:47;;;;:131;;;;5462:18;;;;;;;;;;;5413:68;;:16;:28;;;5442:7;5413:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:68;;;;5350:131;5346:263;;;5564:11;5497:79;;;5512:49;5506:56;;;;;;;;5497:79;;;;;;;;;;;;5597:1;5590:8;;;;5346:263;5676:12;;;;;;;;;;;:29;;;5706:11;5676:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5652:66;;5747:13;5733:49;;;5796:11;5821:10;5845:11;5870:7;5891:12;5733:180;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5732:181;5728:310;;;5993:11;5929:76;;;5944:46;5938:53;;;;;;;;5929:76;;;;;;;;;;;;6026:1;6019:8;;;;5728:310;6048:18;;;;;;;;;;;:31;;;6093:12;6119:10;6143:11;6168:7;6048:137;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6272:11;6231:76;;6260:10;6231:76;;6247:11;6231:76;;;;6285:7;6294:12;6231:76;;;;;;;;;;;;;;;;;;;;;;;;;;;;6325:7;6318:14;;429:1:25;4639:1700:4;;;;;;;;:::o;832:169:27:-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o;2705:1671:4:-;2863:18;3030:19;3651:21;416:6:25;;;;;;;;;;;415:7;407:16;;;;;;;;2929:1:4;2905:26;;:12;:26;;;;2897:35;;;;;;;;2959:1;2950:6;:10;2942:19;;;;;;;;3052:12;;;;;;;;;;;:27;;;3080:11;3052:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3030:62;;3129:1;3106:25;;:11;:25;;;3102:141;;;3198:11;3147:63;;;3162:33;3156:40;;;;;;;;3147:63;;;;;;;;;;;;3231:1;3224:8;;;;3102:141;3391:6;3353:12;3347:29;;;3377:10;3347:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:50;:136;;;;3477:6;3419:12;3413:29;;;3443:10;3455:18;;;;;;;;;;;3413:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:70;3347:136;3343:265;;;3563:11;3499:76;;;3514:46;3508:53;;;;;;;;3499:76;;;;;;;;;;;;3596:1;3589:8;;;;3343:265;3675:12;;;;;;;;;;;:29;;;3705:11;3675:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3651:66;;3746:13;3732:46;;;3792:11;3817:10;3841:11;3866:6;3886:12;3732:176;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3731:177;3727:306;;;3988:11;3924:76;;;3939:46;3933:53;;;;;;;;3924:76;;;;;;;;;;;;4021:1;4014:8;;;;3727:306;4090:18;;;;;;;;;;;:31;;;4135:12;4161:10;4185:11;4210:6;4090:136;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4082:145;;;;;;;;4311:11;4273:72;;4299:10;4273:72;;4286:11;4273:72;;;;4324:6;4332:12;4273:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;4363:6;4356:13;;429:1:25;2705:1671:4;;;;;;;:::o",
    source: '/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the "License");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an "AS IS" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\nimport "./DebtRegistry.sol";\nimport "./TermsContract.sol";\nimport "./TokenTransferProxy.sol";\nimport "zeppelin-solidity/contracts/token/ERC20/ERC20.sol";\nimport "zeppelin-solidity/contracts/lifecycle/Pausable.sol";\nimport "NonFungibleToken/contracts/ERC721.sol";\n\n\n/**\n * The RepaymentRouter routes allowers payers to make repayments on any\n * given debt agreement in any given token by routing the payments to\n * the debt agreement\'s beneficiary.  Additionally, the router acts\n * as a trusted oracle to the debt agreement\'s terms contract, informing\n * it of exactly what payments have been made in what quantity and in what token.\n *\n * Authors: Jaynti Kanani -- Github: jdkanani, Nadav Hollander -- Github: nadavhollander\n */\ncontract RepaymentRouter is Pausable {\n    DebtRegistry public debtRegistry;\n    TokenTransferProxy public tokenTransferProxy;\n\n    enum Errors {\n        DEBT_AGREEMENT_NONEXISTENT,\n        PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT,\n        PAYER_OWNERSHIP_OR_ROUTER_APPROVAL_MISSING,\n        ROUTER_UNAUTHORIZED_TO_REPORT_REPAYMENT\n    }\n\n    event LogRepayment(\n        bytes32 indexed _agreementId,\n        address indexed _payer,\n        address indexed _beneficiary,\n        uint _amount,\n        address _token\n    );\n\n    event LogNFTRepayment(\n        bytes32 indexed _agreementId,\n        address indexed _payer,\n        address indexed _beneficiary,\n        uint _tokenId,\n        address _token\n    );\n\n    event LogError(uint8 indexed _errorId, bytes32 indexed _agreementId);\n\n    /**\n     * Constructor points the repayment router at the deployed registry contract.\n     */\n    function RepaymentRouter (address _debtRegistry, address _tokenTransferProxy) public {\n        debtRegistry = DebtRegistry(_debtRegistry);\n        tokenTransferProxy = TokenTransferProxy(_tokenTransferProxy);\n    }\n\n    /**\n     * Given an agreement id (synonymous to \'issuanceHash\' in the debt registry), routes a repayment\n     * of a given ERC20 token  to the debt\'s current beneficiary, and reports the repayment\n     * to the debt\'s associated terms contract.\n     */\n    function repay(\n        bytes32 agreementId,\n        uint256 amount,\n        address tokenAddress\n    )\n        public\n        whenNotPaused\n        returns (uint _amountRepaid)\n    {\n        require(tokenAddress != address(0));\n        require(amount > 0);\n\n        // Get registry entry and check if entry is valid\n        address beneficiary = debtRegistry.getBeneficiary(agreementId);\n        if (beneficiary == address(0)) {\n            LogError(uint8(Errors.DEBT_AGREEMENT_NONEXISTENT), agreementId);\n            return 0;\n        }\n\n        // Check payer has sufficient balance and has granted router sufficient allowance\n        if (ERC20(tokenAddress).balanceOf(msg.sender) < amount ||\n            ERC20(tokenAddress).allowance(msg.sender, tokenTransferProxy) < amount) {\n            LogError(uint8(Errors.PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT), agreementId);\n            return 0;\n        }\n\n        // Notify terms contract\n        address termsContract = debtRegistry.getTermsContract(agreementId);\n        if (!TermsContract(termsContract).registerRepayment(\n            agreementId,\n            msg.sender,\n            beneficiary,\n            amount,\n            tokenAddress\n        )) {\n            LogError(uint8(Errors.ROUTER_UNAUTHORIZED_TO_REPORT_REPAYMENT), agreementId);\n            return 0;\n        }\n\n        // Transfer amount to creditor\n        require(tokenTransferProxy.transferFrom(\n            tokenAddress,\n            msg.sender,\n            beneficiary,\n            amount\n        ));\n\n        // Log event for repayment\n        LogRepayment(agreementId, msg.sender, beneficiary, amount, tokenAddress);\n\n        return amount;\n    }\n\n    /**\n     * Given an agreement id (synonymous to \'issuanceHash\' in the debt registry), routes a repayment\n     * of a given ERC721 token  to the debt\'s current beneficiary and reports the repayment\n     * to the debt\'s associated terms contract.\n     */\n    function repayNFT(\n        bytes32 agreementId,\n        uint tokenId,\n        address tokenAddress\n    )\n        public\n        whenNotPaused\n        returns (uint _tokenId)\n    {\n        require(tokenAddress != address(0));\n\n        // Get registry entry and check if entry is valid\n        address beneficiary = debtRegistry.getBeneficiary(agreementId);\n        if (beneficiary == address(0)) {\n            LogError(uint8(Errors.DEBT_AGREEMENT_NONEXISTENT), agreementId);\n            return 0;\n        }\n\n        ERC721 nonFungibleToken = ERC721(tokenAddress);\n        require(nonFungibleToken.implementsERC721());\n\n        // Check payer owns token and has granted router approval to transfer it\n        if (nonFungibleToken.ownerOf(tokenId) != msg.sender ||\n            nonFungibleToken.getApproved(tokenId) != address(tokenTransferProxy)) {\n            LogError(uint8(Errors.PAYER_OWNERSHIP_OR_ROUTER_APPROVAL_MISSING), agreementId);\n            return 0;\n        }\n\n        // Notify terms contract\n        address termsContract = debtRegistry.getTermsContract(agreementId);\n        if (!TermsContract(termsContract).registerNFTRepayment(\n            agreementId,\n            msg.sender,\n            beneficiary,\n            tokenId,\n            tokenAddress\n        )) {\n            LogError(uint8(Errors.ROUTER_UNAUTHORIZED_TO_REPORT_REPAYMENT), agreementId);\n            return 0;\n        }\n\n        tokenTransferProxy.transferFrom(\n            tokenAddress,\n            msg.sender,\n            beneficiary,\n            tokenId\n        );\n\n        // Log event for repayment\n        LogNFTRepayment(agreementId, msg.sender, beneficiary, tokenId, tokenAddress);\n\n        return tokenId;\n    }\n}\n',
    sourcePath: "/Users/nadavhollander/Documents/Dharma/Development/dharma.js/node_modules/charta/contracts/RepaymentRouter.sol",
    ast: {
        attributes: {
            absolutePath: "/Users/nadavhollander/Documents/Dharma/Development/dharma.js/node_modules/charta/contracts/RepaymentRouter.sol",
            exportedSymbols: {
                RepaymentRouter: [2206],
            },
        },
        children: [
            {
                attributes: {
                    literals: ["solidity", "0.4", ".18"],
                },
                id: 1863,
                name: "PragmaDirective",
                src: "584:23:4",
            },
            {
                attributes: {
                    SourceUnit: 1605,
                    absolutePath: "/Users/nadavhollander/Documents/Dharma/Development/dharma.js/node_modules/charta/contracts/DebtRegistry.sol",
                    file: "./DebtRegistry.sol",
                    scope: 2207,
                    symbolAliases: [null],
                    unitAlias: "",
                },
                id: 1864,
                name: "ImportDirective",
                src: "609:28:4",
            },
            {
                attributes: {
                    SourceUnit: 2258,
                    absolutePath: "/Users/nadavhollander/Documents/Dharma/Development/dharma.js/node_modules/charta/contracts/TermsContract.sol",
                    file: "./TermsContract.sol",
                    scope: 2207,
                    symbolAliases: [null],
                    unitAlias: "",
                },
                id: 1865,
                name: "ImportDirective",
                src: "638:29:4",
            },
            {
                attributes: {
                    SourceUnit: 2383,
                    absolutePath: "/Users/nadavhollander/Documents/Dharma/Development/dharma.js/node_modules/charta/contracts/TokenTransferProxy.sol",
                    file: "./TokenTransferProxy.sol",
                    scope: 2207,
                    symbolAliases: [null],
                    unitAlias: "",
                },
                id: 1866,
                name: "ImportDirective",
                src: "668:34:4",
            },
            {
                attributes: {
                    SourceUnit: 5749,
                    absolutePath: "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
                    file: "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
                    scope: 2207,
                    symbolAliases: [null],
                    unitAlias: "",
                },
                id: 1867,
                name: "ImportDirective",
                src: "703:59:4",
            },
            {
                attributes: {
                    SourceUnit: 5456,
                    absolutePath: "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
                    file: "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
                    scope: 2207,
                    symbolAliases: [null],
                    unitAlias: "",
                },
                id: 1868,
                name: "ImportDirective",
                src: "763:60:4",
            },
            {
                attributes: {
                    SourceUnit: 4774,
                    absolutePath: "NonFungibleToken/contracts/ERC721.sol",
                    file: "NonFungibleToken/contracts/ERC721.sol",
                    scope: 2207,
                    symbolAliases: [null],
                    unitAlias: "",
                },
                id: 1869,
                name: "ImportDirective",
                src: "824:47:4",
            },
            {
                attributes: {
                    contractDependencies: [5455, 5609],
                    contractKind: "contract",
                    documentation: "The RepaymentRouter routes allowers payers to make repayments on any\ngiven debt agreement in any given token by routing the payments to\nthe debt agreement's beneficiary.  Additionally, the router acts\nas a trusted oracle to the debt agreement's terms contract, informing\nit of exactly what payments have been made in what quantity and in what token.\n * Authors: Jaynti Kanani -- Github: jdkanani, Nadav Hollander -- Github: nadavhollander",
                    fullyImplemented: true,
                    linearizedBaseContracts: [2206, 5455, 5609],
                    name: "RepaymentRouter",
                    scope: 2207,
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
                                    name: "Pausable",
                                    referencedDeclaration: 5455,
                                    type: "contract Pausable",
                                },
                                id: 1870,
                                name: "UserDefinedTypeName",
                                src: "1367:8:4",
                            },
                        ],
                        id: 1871,
                        name: "InheritanceSpecifier",
                        src: "1367:8:4",
                    },
                    {
                        attributes: {
                            constant: false,
                            name: "debtRegistry",
                            scope: 2206,
                            stateVariable: true,
                            storageLocation: "default",
                            type: "contract DebtRegistry",
                            value: null,
                            visibility: "public",
                        },
                        children: [
                            {
                                attributes: {
                                    contractScope: null,
                                    name: "DebtRegistry",
                                    referencedDeclaration: 1604,
                                    type: "contract DebtRegistry",
                                },
                                id: 1872,
                                name: "UserDefinedTypeName",
                                src: "1382:12:4",
                            },
                        ],
                        id: 1873,
                        name: "VariableDeclaration",
                        src: "1382:32:4",
                    },
                    {
                        attributes: {
                            constant: false,
                            name: "tokenTransferProxy",
                            scope: 2206,
                            stateVariable: true,
                            storageLocation: "default",
                            type: "contract TokenTransferProxy",
                            value: null,
                            visibility: "public",
                        },
                        children: [
                            {
                                attributes: {
                                    contractScope: null,
                                    name: "TokenTransferProxy",
                                    referencedDeclaration: 2382,
                                    type: "contract TokenTransferProxy",
                                },
                                id: 1874,
                                name: "UserDefinedTypeName",
                                src: "1420:18:4",
                            },
                        ],
                        id: 1875,
                        name: "VariableDeclaration",
                        src: "1420:44:4",
                    },
                    {
                        attributes: {
                            canonicalName: "RepaymentRouter.Errors",
                            name: "Errors",
                        },
                        children: [
                            {
                                attributes: {
                                    name: "DEBT_AGREEMENT_NONEXISTENT",
                                },
                                id: 1876,
                                name: "EnumValue",
                                src: "1493:26:4",
                            },
                            {
                                attributes: {
                                    name: "PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT",
                                },
                                id: 1877,
                                name: "EnumValue",
                                src: "1529:39:4",
                            },
                            {
                                attributes: {
                                    name: "PAYER_OWNERSHIP_OR_ROUTER_APPROVAL_MISSING",
                                },
                                id: 1878,
                                name: "EnumValue",
                                src: "1578:42:4",
                            },
                            {
                                attributes: {
                                    name: "ROUTER_UNAUTHORIZED_TO_REPORT_REPAYMENT",
                                },
                                id: 1879,
                                name: "EnumValue",
                                src: "1630:39:4",
                            },
                        ],
                        id: 1880,
                        name: "EnumDefinition",
                        src: "1471:204:4",
                    },
                    {
                        attributes: {
                            anonymous: false,
                            name: "LogRepayment",
                        },
                        children: [
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            indexed: true,
                                            name: "_agreementId",
                                            scope: 1892,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "bytes32",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "bytes32",
                                                    type: "bytes32",
                                                },
                                                id: 1881,
                                                name: "ElementaryTypeName",
                                                src: "1709:7:4",
                                            },
                                        ],
                                        id: 1882,
                                        name: "VariableDeclaration",
                                        src: "1709:28:4",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            indexed: true,
                                            name: "_payer",
                                            scope: 1892,
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
                                                id: 1883,
                                                name: "ElementaryTypeName",
                                                src: "1747:7:4",
                                            },
                                        ],
                                        id: 1884,
                                        name: "VariableDeclaration",
                                        src: "1747:22:4",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            indexed: true,
                                            name: "_beneficiary",
                                            scope: 1892,
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
                                                id: 1885,
                                                name: "ElementaryTypeName",
                                                src: "1779:7:4",
                                            },
                                        ],
                                        id: 1886,
                                        name: "VariableDeclaration",
                                        src: "1779:28:4",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            indexed: false,
                                            name: "_amount",
                                            scope: 1892,
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
                                                id: 1887,
                                                name: "ElementaryTypeName",
                                                src: "1817:4:4",
                                            },
                                        ],
                                        id: 1888,
                                        name: "VariableDeclaration",
                                        src: "1817:12:4",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            indexed: false,
                                            name: "_token",
                                            scope: 1892,
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
                                                id: 1889,
                                                name: "ElementaryTypeName",
                                                src: "1839:7:4",
                                            },
                                        ],
                                        id: 1890,
                                        name: "VariableDeclaration",
                                        src: "1839:14:4",
                                    },
                                ],
                                id: 1891,
                                name: "ParameterList",
                                src: "1699:160:4",
                            },
                        ],
                        id: 1892,
                        name: "EventDefinition",
                        src: "1681:179:4",
                    },
                    {
                        attributes: {
                            anonymous: false,
                            name: "LogNFTRepayment",
                        },
                        children: [
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            indexed: true,
                                            name: "_agreementId",
                                            scope: 1904,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "bytes32",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "bytes32",
                                                    type: "bytes32",
                                                },
                                                id: 1893,
                                                name: "ElementaryTypeName",
                                                src: "1897:7:4",
                                            },
                                        ],
                                        id: 1894,
                                        name: "VariableDeclaration",
                                        src: "1897:28:4",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            indexed: true,
                                            name: "_payer",
                                            scope: 1904,
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
                                                id: 1895,
                                                name: "ElementaryTypeName",
                                                src: "1935:7:4",
                                            },
                                        ],
                                        id: 1896,
                                        name: "VariableDeclaration",
                                        src: "1935:22:4",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            indexed: true,
                                            name: "_beneficiary",
                                            scope: 1904,
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
                                                id: 1897,
                                                name: "ElementaryTypeName",
                                                src: "1967:7:4",
                                            },
                                        ],
                                        id: 1898,
                                        name: "VariableDeclaration",
                                        src: "1967:28:4",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            indexed: false,
                                            name: "_tokenId",
                                            scope: 1904,
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
                                                id: 1899,
                                                name: "ElementaryTypeName",
                                                src: "2005:4:4",
                                            },
                                        ],
                                        id: 1900,
                                        name: "VariableDeclaration",
                                        src: "2005:13:4",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            indexed: false,
                                            name: "_token",
                                            scope: 1904,
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
                                                id: 1901,
                                                name: "ElementaryTypeName",
                                                src: "2028:7:4",
                                            },
                                        ],
                                        id: 1902,
                                        name: "VariableDeclaration",
                                        src: "2028:14:4",
                                    },
                                ],
                                id: 1903,
                                name: "ParameterList",
                                src: "1887:161:4",
                            },
                        ],
                        id: 1904,
                        name: "EventDefinition",
                        src: "1866:183:4",
                    },
                    {
                        attributes: {
                            anonymous: false,
                            name: "LogError",
                        },
                        children: [
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            indexed: true,
                                            name: "_errorId",
                                            scope: 1910,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "uint8",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "uint8",
                                                    type: "uint8",
                                                },
                                                id: 1905,
                                                name: "ElementaryTypeName",
                                                src: "2070:5:4",
                                            },
                                        ],
                                        id: 1906,
                                        name: "VariableDeclaration",
                                        src: "2070:22:4",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            indexed: true,
                                            name: "_agreementId",
                                            scope: 1910,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "bytes32",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "bytes32",
                                                    type: "bytes32",
                                                },
                                                id: 1907,
                                                name: "ElementaryTypeName",
                                                src: "2094:7:4",
                                            },
                                        ],
                                        id: 1908,
                                        name: "VariableDeclaration",
                                        src: "2094:28:4",
                                    },
                                ],
                                id: 1909,
                                name: "ParameterList",
                                src: "2069:54:4",
                            },
                        ],
                        id: 1910,
                        name: "EventDefinition",
                        src: "2055:69:4",
                    },
                    {
                        attributes: {
                            constant: false,
                            implemented: true,
                            isConstructor: true,
                            modifiers: [null],
                            name: "RepaymentRouter",
                            payable: false,
                            scope: 2206,
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
                                            name: "_debtRegistry",
                                            scope: 1930,
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
                                                id: 1911,
                                                name: "ElementaryTypeName",
                                                src: "2254:7:4",
                                            },
                                        ],
                                        id: 1912,
                                        name: "VariableDeclaration",
                                        src: "2254:21:4",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_tokenTransferProxy",
                                            scope: 1930,
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
                                                id: 1913,
                                                name: "ElementaryTypeName",
                                                src: "2277:7:4",
                                            },
                                        ],
                                        id: 1914,
                                        name: "VariableDeclaration",
                                        src: "2277:27:4",
                                    },
                                ],
                                id: 1915,
                                name: "ParameterList",
                                src: "2253:52:4",
                            },
                            {
                                attributes: {
                                    parameters: [null],
                                },
                                children: [],
                                id: 1916,
                                name: "ParameterList",
                                src: "2313:0:4",
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
                                                    type: "contract DebtRegistry",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 1873,
                                                            type: "contract DebtRegistry",
                                                            value: "debtRegistry",
                                                        },
                                                        id: 1917,
                                                        name: "Identifier",
                                                        src: "2323:12:4",
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
                                                            type: "contract DebtRegistry",
                                                            type_conversion: true,
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
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 1604,
                                                                    type: "type(contract DebtRegistry)",
                                                                    value: "DebtRegistry",
                                                                },
                                                                id: 1918,
                                                                name: "Identifier",
                                                                src: "2338:12:4",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 1912,
                                                                    type: "address",
                                                                    value: "_debtRegistry",
                                                                },
                                                                id: 1919,
                                                                name: "Identifier",
                                                                src: "2351:13:4",
                                                            },
                                                        ],
                                                        id: 1920,
                                                        name: "FunctionCall",
                                                        src: "2338:27:4",
                                                    },
                                                ],
                                                id: 1921,
                                                name: "Assignment",
                                                src: "2323:42:4",
                                            },
                                        ],
                                        id: 1922,
                                        name: "ExpressionStatement",
                                        src: "2323:42:4",
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
                                                    type: "contract TokenTransferProxy",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 1875,
                                                            type: "contract TokenTransferProxy",
                                                            value: "tokenTransferProxy",
                                                        },
                                                        id: 1923,
                                                        name: "Identifier",
                                                        src: "2375:18:4",
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
                                                            type: "contract TokenTransferProxy",
                                                            type_conversion: true,
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
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 2382,
                                                                    type: "type(contract TokenTransferProxy)",
                                                                    value: "TokenTransferProxy",
                                                                },
                                                                id: 1924,
                                                                name: "Identifier",
                                                                src: "2396:18:4",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 1914,
                                                                    type: "address",
                                                                    value: "_tokenTransferProxy",
                                                                },
                                                                id: 1925,
                                                                name: "Identifier",
                                                                src: "2415:19:4",
                                                            },
                                                        ],
                                                        id: 1926,
                                                        name: "FunctionCall",
                                                        src: "2396:39:4",
                                                    },
                                                ],
                                                id: 1927,
                                                name: "Assignment",
                                                src: "2375:60:4",
                                            },
                                        ],
                                        id: 1928,
                                        name: "ExpressionStatement",
                                        src: "2375:60:4",
                                    },
                                ],
                                id: 1929,
                                name: "Block",
                                src: "2313:129:4",
                            },
                        ],
                        id: 1930,
                        name: "FunctionDefinition",
                        src: "2228:214:4",
                    },
                    {
                        attributes: {
                            constant: false,
                            implemented: true,
                            isConstructor: false,
                            name: "repay",
                            payable: false,
                            scope: 2206,
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
                                            name: "agreementId",
                                            scope: 2067,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "bytes32",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "bytes32",
                                                    type: "bytes32",
                                                },
                                                id: 1931,
                                                name: "ElementaryTypeName",
                                                src: "2729:7:4",
                                            },
                                        ],
                                        id: 1932,
                                        name: "VariableDeclaration",
                                        src: "2729:19:4",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "amount",
                                            scope: 2067,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "uint256",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "uint256",
                                                    type: "uint256",
                                                },
                                                id: 1933,
                                                name: "ElementaryTypeName",
                                                src: "2758:7:4",
                                            },
                                        ],
                                        id: 1934,
                                        name: "VariableDeclaration",
                                        src: "2758:14:4",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "tokenAddress",
                                            scope: 2067,
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
                                                id: 1935,
                                                name: "ElementaryTypeName",
                                                src: "2782:7:4",
                                            },
                                        ],
                                        id: 1936,
                                        name: "VariableDeclaration",
                                        src: "2782:20:4",
                                    },
                                ],
                                id: 1937,
                                name: "ParameterList",
                                src: "2719:89:4",
                            },
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_amountRepaid",
                                            scope: 2067,
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
                                                id: 1940,
                                                name: "ElementaryTypeName",
                                                src: "2863:4:4",
                                            },
                                        ],
                                        id: 1941,
                                        name: "VariableDeclaration",
                                        src: "2863:18:4",
                                    },
                                ],
                                id: 1942,
                                name: "ParameterList",
                                src: "2862:20:4",
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
                                            referencedDeclaration: 5416,
                                            type: "modifier ()",
                                            value: "whenNotPaused",
                                        },
                                        id: 1938,
                                        name: "Identifier",
                                        src: "2832:13:4",
                                    },
                                ],
                                id: 1939,
                                name: "ModifierInvocation",
                                src: "2832:13:4",
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
                                                    isStructConstructorCall: false,
                                                    lValueRequested: false,
                                                    names: [null],
                                                    type: "tuple()",
                                                    type_conversion: false,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [
                                                                {
                                                                    typeIdentifier: "t_bool",
                                                                    typeString: "bool",
                                                                },
                                                            ],
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 6136,
                                                            type: "function (bool) pure",
                                                            value: "require",
                                                        },
                                                        id: 1943,
                                                        name: "Identifier",
                                                        src: "2897:7:4",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            commonType: {
                                                                typeIdentifier: "t_address",
                                                                typeString: "address",
                                                            },
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: false,
                                                            lValueRequested: false,
                                                            operator: "!=",
                                                            type: "bool",
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 1936,
                                                                    type: "address",
                                                                    value: "tokenAddress",
                                                                },
                                                                id: 1944,
                                                                name: "Identifier",
                                                                src: "2905:12:4",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: true,
                                                                    isStructConstructorCall: false,
                                                                    lValueRequested: false,
                                                                    names: [null],
                                                                    type: "address",
                                                                    type_conversion: true,
                                                                },
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: [
                                                                                {
                                                                                    typeIdentifier: "t_rational_0_by_1",
                                                                                    typeString: "int_const 0",
                                                                                },
                                                                            ],
                                                                            isConstant: false,
                                                                            isLValue: false,
                                                                            isPure: true,
                                                                            lValueRequested: false,
                                                                            type: "type(address)",
                                                                            value: "address",
                                                                        },
                                                                        id: 1945,
                                                                        name: "ElementaryTypeNameExpression",
                                                                        src: "2921:7:4",
                                                                    },
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            hexvalue: "30",
                                                                            isConstant: false,
                                                                            isLValue: false,
                                                                            isPure: true,
                                                                            lValueRequested: false,
                                                                            subdenomination: null,
                                                                            token: "number",
                                                                            type: "int_const 0",
                                                                            value: "0",
                                                                        },
                                                                        id: 1946,
                                                                        name: "Literal",
                                                                        src: "2929:1:4",
                                                                    },
                                                                ],
                                                                id: 1947,
                                                                name: "FunctionCall",
                                                                src: "2921:10:4",
                                                            },
                                                        ],
                                                        id: 1948,
                                                        name: "BinaryOperation",
                                                        src: "2905:26:4",
                                                    },
                                                ],
                                                id: 1949,
                                                name: "FunctionCall",
                                                src: "2897:35:4",
                                            },
                                        ],
                                        id: 1950,
                                        name: "ExpressionStatement",
                                        src: "2897:35:4",
                                    },
                                    {
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    isStructConstructorCall: false,
                                                    lValueRequested: false,
                                                    names: [null],
                                                    type: "tuple()",
                                                    type_conversion: false,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [
                                                                {
                                                                    typeIdentifier: "t_bool",
                                                                    typeString: "bool",
                                                                },
                                                            ],
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 6136,
                                                            type: "function (bool) pure",
                                                            value: "require",
                                                        },
                                                        id: 1951,
                                                        name: "Identifier",
                                                        src: "2942:7:4",
                                                    },
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
                                                            operator: ">",
                                                            type: "bool",
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 1934,
                                                                    type: "uint256",
                                                                    value: "amount",
                                                                },
                                                                id: 1952,
                                                                name: "Identifier",
                                                                src: "2950:6:4",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    hexvalue: "30",
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: true,
                                                                    lValueRequested: false,
                                                                    subdenomination: null,
                                                                    token: "number",
                                                                    type: "int_const 0",
                                                                    value: "0",
                                                                },
                                                                id: 1953,
                                                                name: "Literal",
                                                                src: "2959:1:4",
                                                            },
                                                        ],
                                                        id: 1954,
                                                        name: "BinaryOperation",
                                                        src: "2950:10:4",
                                                    },
                                                ],
                                                id: 1955,
                                                name: "FunctionCall",
                                                src: "2942:19:4",
                                            },
                                        ],
                                        id: 1956,
                                        name: "ExpressionStatement",
                                        src: "2942:19:4",
                                    },
                                    {
                                        attributes: {
                                            assignments: [1958],
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    constant: false,
                                                    name: "beneficiary",
                                                    scope: 2067,
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
                                                        id: 1957,
                                                        name: "ElementaryTypeName",
                                                        src: "3030:7:4",
                                                    },
                                                ],
                                                id: 1958,
                                                name: "VariableDeclaration",
                                                src: "3030:19:4",
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
                                                    type: "address",
                                                    type_conversion: false,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [
                                                                {
                                                                    typeIdentifier: "t_bytes32",
                                                                    typeString: "bytes32",
                                                                },
                                                            ],
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: false,
                                                            lValueRequested: false,
                                                            member_name: "getBeneficiary",
                                                            referencedDeclaration: 1495,
                                                            type: "function (bytes32) view external returns (address)",
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 1873,
                                                                    type: "contract DebtRegistry",
                                                                    value: "debtRegistry",
                                                                },
                                                                id: 1959,
                                                                name: "Identifier",
                                                                src: "3052:12:4",
                                                            },
                                                        ],
                                                        id: 1960,
                                                        name: "MemberAccess",
                                                        src: "3052:27:4",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 1932,
                                                            type: "bytes32",
                                                            value: "agreementId",
                                                        },
                                                        id: 1961,
                                                        name: "Identifier",
                                                        src: "3080:11:4",
                                                    },
                                                ],
                                                id: 1962,
                                                name: "FunctionCall",
                                                src: "3052:40:4",
                                            },
                                        ],
                                        id: 1963,
                                        name: "VariableDeclarationStatement",
                                        src: "3030:62:4",
                                    },
                                    {
                                        attributes: {
                                            falseBody: null,
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    commonType: {
                                                        typeIdentifier: "t_address",
                                                        typeString: "address",
                                                    },
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    lValueRequested: false,
                                                    operator: "==",
                                                    type: "bool",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 1958,
                                                            type: "address",
                                                            value: "beneficiary",
                                                        },
                                                        id: 1964,
                                                        name: "Identifier",
                                                        src: "3106:11:4",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: true,
                                                            isStructConstructorCall: false,
                                                            lValueRequested: false,
                                                            names: [null],
                                                            type: "address",
                                                            type_conversion: true,
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: [
                                                                        {
                                                                            typeIdentifier: "t_rational_0_by_1",
                                                                            typeString: "int_const 0",
                                                                        },
                                                                    ],
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: true,
                                                                    lValueRequested: false,
                                                                    type: "type(address)",
                                                                    value: "address",
                                                                },
                                                                id: 1965,
                                                                name: "ElementaryTypeNameExpression",
                                                                src: "3121:7:4",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    hexvalue: "30",
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: true,
                                                                    lValueRequested: false,
                                                                    subdenomination: null,
                                                                    token: "number",
                                                                    type: "int_const 0",
                                                                    value: "0",
                                                                },
                                                                id: 1966,
                                                                name: "Literal",
                                                                src: "3129:1:4",
                                                            },
                                                        ],
                                                        id: 1967,
                                                        name: "FunctionCall",
                                                        src: "3121:10:4",
                                                    },
                                                ],
                                                id: 1968,
                                                name: "BinaryOperation",
                                                src: "3106:25:4",
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
                                                                    isStructConstructorCall: false,
                                                                    lValueRequested: false,
                                                                    names: [null],
                                                                    type: "tuple()",
                                                                    type_conversion: false,
                                                                },
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: [
                                                                                {
                                                                                    typeIdentifier: "t_uint8",
                                                                                    typeString: "uint8",
                                                                                },
                                                                                {
                                                                                    typeIdentifier: "t_bytes32",
                                                                                    typeString: "bytes32",
                                                                                },
                                                                            ],
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 1910,
                                                                            type: "function (uint8,bytes32)",
                                                                            value: "LogError",
                                                                        },
                                                                        id: 1969,
                                                                        name: "Identifier",
                                                                        src: "3147:8:4",
                                                                    },
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            isConstant: false,
                                                                            isLValue: false,
                                                                            isPure: true,
                                                                            isStructConstructorCall: false,
                                                                            lValueRequested: false,
                                                                            names: [null],
                                                                            type: "uint8",
                                                                            type_conversion: true,
                                                                        },
                                                                        children: [
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: [
                                                                                        {
                                                                                            typeIdentifier: "t_enum$_Errors_$1880",
                                                                                            typeString: "enum RepaymentRouter.Errors",
                                                                                        },
                                                                                    ],
                                                                                    isConstant: false,
                                                                                    isLValue: false,
                                                                                    isPure: true,
                                                                                    lValueRequested: false,
                                                                                    type: "type(uint8)",
                                                                                    value: "uint8",
                                                                                },
                                                                                id: 1970,
                                                                                name: "ElementaryTypeNameExpression",
                                                                                src: "3156:5:4",
                                                                            },
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: null,
                                                                                    isConstant: false,
                                                                                    isLValue: false,
                                                                                    isPure: true,
                                                                                    lValueRequested: false,
                                                                                    member_name: "DEBT_AGREEMENT_NONEXISTENT",
                                                                                    referencedDeclaration: null,
                                                                                    type: "enum RepaymentRouter.Errors",
                                                                                },
                                                                                children: [
                                                                                    {
                                                                                        attributes: {
                                                                                            argumentTypes: null,
                                                                                            overloadedDeclarations: [
                                                                                                null,
                                                                                            ],
                                                                                            referencedDeclaration: 1880,
                                                                                            type: "type(enum RepaymentRouter.Errors)",
                                                                                            value: "Errors",
                                                                                        },
                                                                                        id: 1971,
                                                                                        name: "Identifier",
                                                                                        src: "3162:6:4",
                                                                                    },
                                                                                ],
                                                                                id: 1972,
                                                                                name: "MemberAccess",
                                                                                src: "3162:33:4",
                                                                            },
                                                                        ],
                                                                        id: 1973,
                                                                        name: "FunctionCall",
                                                                        src: "3156:40:4",
                                                                    },
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 1932,
                                                                            type: "bytes32",
                                                                            value: "agreementId",
                                                                        },
                                                                        id: 1974,
                                                                        name: "Identifier",
                                                                        src: "3198:11:4",
                                                                    },
                                                                ],
                                                                id: 1975,
                                                                name: "FunctionCall",
                                                                src: "3147:63:4",
                                                            },
                                                        ],
                                                        id: 1976,
                                                        name: "ExpressionStatement",
                                                        src: "3147:63:4",
                                                    },
                                                    {
                                                        attributes: {
                                                            functionReturnParameters: 1942,
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    hexvalue: "30",
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: true,
                                                                    lValueRequested: false,
                                                                    subdenomination: null,
                                                                    token: "number",
                                                                    type: "int_const 0",
                                                                    value: "0",
                                                                },
                                                                id: 1977,
                                                                name: "Literal",
                                                                src: "3231:1:4",
                                                            },
                                                        ],
                                                        id: 1978,
                                                        name: "Return",
                                                        src: "3224:8:4",
                                                    },
                                                ],
                                                id: 1979,
                                                name: "Block",
                                                src: "3133:110:4",
                                            },
                                        ],
                                        id: 1980,
                                        name: "IfStatement",
                                        src: "3102:141:4",
                                    },
                                    {
                                        attributes: {
                                            falseBody: null,
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    commonType: {
                                                        typeIdentifier: "t_bool",
                                                        typeString: "bool",
                                                    },
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    lValueRequested: false,
                                                    operator: "||",
                                                    type: "bool",
                                                },
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
                                                                            isConstant: false,
                                                                            isLValue: false,
                                                                            isPure: false,
                                                                            lValueRequested: false,
                                                                            member_name: "balanceOf",
                                                                            referencedDeclaration: 5762,
                                                                            type: "function (address) view external returns (uint256)",
                                                                        },
                                                                        children: [
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: null,
                                                                                    isConstant: false,
                                                                                    isLValue: false,
                                                                                    isPure: false,
                                                                                    isStructConstructorCall: false,
                                                                                    lValueRequested: false,
                                                                                    names: [null],
                                                                                    type: "contract ERC20",
                                                                                    type_conversion: true,
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
                                                                                            overloadedDeclarations: [
                                                                                                null,
                                                                                            ],
                                                                                            referencedDeclaration: 5748,
                                                                                            type: "type(contract ERC20)",
                                                                                            value: "ERC20",
                                                                                        },
                                                                                        id: 1981,
                                                                                        name: "Identifier",
                                                                                        src: "3347:5:4",
                                                                                    },
                                                                                    {
                                                                                        attributes: {
                                                                                            argumentTypes: null,
                                                                                            overloadedDeclarations: [
                                                                                                null,
                                                                                            ],
                                                                                            referencedDeclaration: 1936,
                                                                                            type: "address",
                                                                                            value: "tokenAddress",
                                                                                        },
                                                                                        id: 1982,
                                                                                        name: "Identifier",
                                                                                        src: "3353:12:4",
                                                                                    },
                                                                                ],
                                                                                id: 1983,
                                                                                name: "FunctionCall",
                                                                                src: "3347:19:4",
                                                                            },
                                                                        ],
                                                                        id: 1984,
                                                                        name: "MemberAccess",
                                                                        src: "3347:29:4",
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
                                                                                id: 1985,
                                                                                name: "Identifier",
                                                                                src: "3377:3:4",
                                                                            },
                                                                        ],
                                                                        id: 1986,
                                                                        name: "MemberAccess",
                                                                        src: "3377:10:4",
                                                                    },
                                                                ],
                                                                id: 1987,
                                                                name: "FunctionCall",
                                                                src: "3347:41:4",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 1934,
                                                                    type: "uint256",
                                                                    value: "amount",
                                                                },
                                                                id: 1988,
                                                                name: "Identifier",
                                                                src: "3391:6:4",
                                                            },
                                                        ],
                                                        id: 1989,
                                                        name: "BinaryOperation",
                                                        src: "3347:50:4",
                                                    },
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
                                                                                {
                                                                                    typeIdentifier: "t_contract$_TokenTransferProxy_$2382",
                                                                                    typeString: "contract TokenTransferProxy",
                                                                                },
                                                                            ],
                                                                            isConstant: false,
                                                                            isLValue: false,
                                                                            isPure: false,
                                                                            lValueRequested: false,
                                                                            member_name: "allowance",
                                                                            referencedDeclaration: 5719,
                                                                            type: "function (address,address) view external returns (uint256)",
                                                                        },
                                                                        children: [
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: null,
                                                                                    isConstant: false,
                                                                                    isLValue: false,
                                                                                    isPure: false,
                                                                                    isStructConstructorCall: false,
                                                                                    lValueRequested: false,
                                                                                    names: [null],
                                                                                    type: "contract ERC20",
                                                                                    type_conversion: true,
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
                                                                                            overloadedDeclarations: [
                                                                                                null,
                                                                                            ],
                                                                                            referencedDeclaration: 5748,
                                                                                            type: "type(contract ERC20)",
                                                                                            value: "ERC20",
                                                                                        },
                                                                                        id: 1990,
                                                                                        name: "Identifier",
                                                                                        src: "3413:5:4",
                                                                                    },
                                                                                    {
                                                                                        attributes: {
                                                                                            argumentTypes: null,
                                                                                            overloadedDeclarations: [
                                                                                                null,
                                                                                            ],
                                                                                            referencedDeclaration: 1936,
                                                                                            type: "address",
                                                                                            value: "tokenAddress",
                                                                                        },
                                                                                        id: 1991,
                                                                                        name: "Identifier",
                                                                                        src: "3419:12:4",
                                                                                    },
                                                                                ],
                                                                                id: 1992,
                                                                                name: "FunctionCall",
                                                                                src: "3413:19:4",
                                                                            },
                                                                        ],
                                                                        id: 1993,
                                                                        name: "MemberAccess",
                                                                        src: "3413:29:4",
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
                                                                                id: 1994,
                                                                                name: "Identifier",
                                                                                src: "3443:3:4",
                                                                            },
                                                                        ],
                                                                        id: 1995,
                                                                        name: "MemberAccess",
                                                                        src: "3443:10:4",
                                                                    },
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 1875,
                                                                            type: "contract TokenTransferProxy",
                                                                            value: "tokenTransferProxy",
                                                                        },
                                                                        id: 1996,
                                                                        name: "Identifier",
                                                                        src: "3455:18:4",
                                                                    },
                                                                ],
                                                                id: 1997,
                                                                name: "FunctionCall",
                                                                src: "3413:61:4",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 1934,
                                                                    type: "uint256",
                                                                    value: "amount",
                                                                },
                                                                id: 1998,
                                                                name: "Identifier",
                                                                src: "3477:6:4",
                                                            },
                                                        ],
                                                        id: 1999,
                                                        name: "BinaryOperation",
                                                        src: "3413:70:4",
                                                    },
                                                ],
                                                id: 2000,
                                                name: "BinaryOperation",
                                                src: "3347:136:4",
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
                                                                    isStructConstructorCall: false,
                                                                    lValueRequested: false,
                                                                    names: [null],
                                                                    type: "tuple()",
                                                                    type_conversion: false,
                                                                },
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: [
                                                                                {
                                                                                    typeIdentifier: "t_uint8",
                                                                                    typeString: "uint8",
                                                                                },
                                                                                {
                                                                                    typeIdentifier: "t_bytes32",
                                                                                    typeString: "bytes32",
                                                                                },
                                                                            ],
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 1910,
                                                                            type: "function (uint8,bytes32)",
                                                                            value: "LogError",
                                                                        },
                                                                        id: 2001,
                                                                        name: "Identifier",
                                                                        src: "3499:8:4",
                                                                    },
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            isConstant: false,
                                                                            isLValue: false,
                                                                            isPure: true,
                                                                            isStructConstructorCall: false,
                                                                            lValueRequested: false,
                                                                            names: [null],
                                                                            type: "uint8",
                                                                            type_conversion: true,
                                                                        },
                                                                        children: [
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: [
                                                                                        {
                                                                                            typeIdentifier: "t_enum$_Errors_$1880",
                                                                                            typeString: "enum RepaymentRouter.Errors",
                                                                                        },
                                                                                    ],
                                                                                    isConstant: false,
                                                                                    isLValue: false,
                                                                                    isPure: true,
                                                                                    lValueRequested: false,
                                                                                    type: "type(uint8)",
                                                                                    value: "uint8",
                                                                                },
                                                                                id: 2002,
                                                                                name: "ElementaryTypeNameExpression",
                                                                                src: "3508:5:4",
                                                                            },
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: null,
                                                                                    isConstant: false,
                                                                                    isLValue: false,
                                                                                    isPure: true,
                                                                                    lValueRequested: false,
                                                                                    member_name: "PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT",
                                                                                    referencedDeclaration: null,
                                                                                    type: "enum RepaymentRouter.Errors",
                                                                                },
                                                                                children: [
                                                                                    {
                                                                                        attributes: {
                                                                                            argumentTypes: null,
                                                                                            overloadedDeclarations: [
                                                                                                null,
                                                                                            ],
                                                                                            referencedDeclaration: 1880,
                                                                                            type: "type(enum RepaymentRouter.Errors)",
                                                                                            value: "Errors",
                                                                                        },
                                                                                        id: 2003,
                                                                                        name: "Identifier",
                                                                                        src: "3514:6:4",
                                                                                    },
                                                                                ],
                                                                                id: 2004,
                                                                                name: "MemberAccess",
                                                                                src: "3514:46:4",
                                                                            },
                                                                        ],
                                                                        id: 2005,
                                                                        name: "FunctionCall",
                                                                        src: "3508:53:4",
                                                                    },
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 1932,
                                                                            type: "bytes32",
                                                                            value: "agreementId",
                                                                        },
                                                                        id: 2006,
                                                                        name: "Identifier",
                                                                        src: "3563:11:4",
                                                                    },
                                                                ],
                                                                id: 2007,
                                                                name: "FunctionCall",
                                                                src: "3499:76:4",
                                                            },
                                                        ],
                                                        id: 2008,
                                                        name: "ExpressionStatement",
                                                        src: "3499:76:4",
                                                    },
                                                    {
                                                        attributes: {
                                                            functionReturnParameters: 1942,
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    hexvalue: "30",
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: true,
                                                                    lValueRequested: false,
                                                                    subdenomination: null,
                                                                    token: "number",
                                                                    type: "int_const 0",
                                                                    value: "0",
                                                                },
                                                                id: 2009,
                                                                name: "Literal",
                                                                src: "3596:1:4",
                                                            },
                                                        ],
                                                        id: 2010,
                                                        name: "Return",
                                                        src: "3589:8:4",
                                                    },
                                                ],
                                                id: 2011,
                                                name: "Block",
                                                src: "3485:123:4",
                                            },
                                        ],
                                        id: 2012,
                                        name: "IfStatement",
                                        src: "3343:265:4",
                                    },
                                    {
                                        attributes: {
                                            assignments: [2014],
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    constant: false,
                                                    name: "termsContract",
                                                    scope: 2067,
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
                                                        id: 2013,
                                                        name: "ElementaryTypeName",
                                                        src: "3651:7:4",
                                                    },
                                                ],
                                                id: 2014,
                                                name: "VariableDeclaration",
                                                src: "3651:21:4",
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
                                                    type: "address",
                                                    type_conversion: false,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [
                                                                {
                                                                    typeIdentifier: "t_bytes32",
                                                                    typeString: "bytes32",
                                                                },
                                                            ],
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: false,
                                                            lValueRequested: false,
                                                            member_name: "getTermsContract",
                                                            referencedDeclaration: 1508,
                                                            type: "function (bytes32) view external returns (address)",
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 1873,
                                                                    type: "contract DebtRegistry",
                                                                    value: "debtRegistry",
                                                                },
                                                                id: 2015,
                                                                name: "Identifier",
                                                                src: "3675:12:4",
                                                            },
                                                        ],
                                                        id: 2016,
                                                        name: "MemberAccess",
                                                        src: "3675:29:4",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 1932,
                                                            type: "bytes32",
                                                            value: "agreementId",
                                                        },
                                                        id: 2017,
                                                        name: "Identifier",
                                                        src: "3705:11:4",
                                                    },
                                                ],
                                                id: 2018,
                                                name: "FunctionCall",
                                                src: "3675:42:4",
                                            },
                                        ],
                                        id: 2019,
                                        name: "VariableDeclarationStatement",
                                        src: "3651:66:4",
                                    },
                                    {
                                        attributes: {
                                            falseBody: null,
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    lValueRequested: false,
                                                    operator: "!",
                                                    prefix: true,
                                                    type: "bool",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: false,
                                                            isStructConstructorCall: false,
                                                            lValueRequested: false,
                                                            names: [null],
                                                            type: "bool",
                                                            type_conversion: false,
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: [
                                                                        {
                                                                            typeIdentifier: "t_bytes32",
                                                                            typeString: "bytes32",
                                                                        },
                                                                        {
                                                                            typeIdentifier: "t_address",
                                                                            typeString: "address",
                                                                        },
                                                                        {
                                                                            typeIdentifier: "t_address",
                                                                            typeString: "address",
                                                                        },
                                                                        {
                                                                            typeIdentifier: "t_uint256",
                                                                            typeString: "uint256",
                                                                        },
                                                                        {
                                                                            typeIdentifier: "t_address",
                                                                            typeString: "address",
                                                                        },
                                                                    ],
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: false,
                                                                    lValueRequested: false,
                                                                    member_name: "registerRepayment",
                                                                    referencedDeclaration: 2223,
                                                                    type: "function (bytes32,address,address,uint256,address) external returns (bool)",
                                                                },
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            isConstant: false,
                                                                            isLValue: false,
                                                                            isPure: false,
                                                                            isStructConstructorCall: false,
                                                                            lValueRequested: false,
                                                                            names: [null],
                                                                            type: "contract TermsContract",
                                                                            type_conversion: true,
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
                                                                                    overloadedDeclarations: [
                                                                                        null,
                                                                                    ],
                                                                                    referencedDeclaration: 2257,
                                                                                    type: "type(contract TermsContract)",
                                                                                    value: "TermsContract",
                                                                                },
                                                                                id: 2020,
                                                                                name: "Identifier",
                                                                                src: "3732:13:4",
                                                                            },
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: null,
                                                                                    overloadedDeclarations: [
                                                                                        null,
                                                                                    ],
                                                                                    referencedDeclaration: 2014,
                                                                                    type: "address",
                                                                                    value: "termsContract",
                                                                                },
                                                                                id: 2021,
                                                                                name: "Identifier",
                                                                                src: "3746:13:4",
                                                                            },
                                                                        ],
                                                                        id: 2022,
                                                                        name: "FunctionCall",
                                                                        src: "3732:28:4",
                                                                    },
                                                                ],
                                                                id: 2023,
                                                                name: "MemberAccess",
                                                                src: "3732:46:4",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 1932,
                                                                    type: "bytes32",
                                                                    value: "agreementId",
                                                                },
                                                                id: 2024,
                                                                name: "Identifier",
                                                                src: "3792:11:4",
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
                                                                        id: 2025,
                                                                        name: "Identifier",
                                                                        src: "3817:3:4",
                                                                    },
                                                                ],
                                                                id: 2026,
                                                                name: "MemberAccess",
                                                                src: "3817:10:4",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 1958,
                                                                    type: "address",
                                                                    value: "beneficiary",
                                                                },
                                                                id: 2027,
                                                                name: "Identifier",
                                                                src: "3841:11:4",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 1934,
                                                                    type: "uint256",
                                                                    value: "amount",
                                                                },
                                                                id: 2028,
                                                                name: "Identifier",
                                                                src: "3866:6:4",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 1936,
                                                                    type: "address",
                                                                    value: "tokenAddress",
                                                                },
                                                                id: 2029,
                                                                name: "Identifier",
                                                                src: "3886:12:4",
                                                            },
                                                        ],
                                                        id: 2030,
                                                        name: "FunctionCall",
                                                        src: "3732:176:4",
                                                    },
                                                ],
                                                id: 2031,
                                                name: "UnaryOperation",
                                                src: "3731:177:4",
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
                                                                    isStructConstructorCall: false,
                                                                    lValueRequested: false,
                                                                    names: [null],
                                                                    type: "tuple()",
                                                                    type_conversion: false,
                                                                },
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: [
                                                                                {
                                                                                    typeIdentifier: "t_uint8",
                                                                                    typeString: "uint8",
                                                                                },
                                                                                {
                                                                                    typeIdentifier: "t_bytes32",
                                                                                    typeString: "bytes32",
                                                                                },
                                                                            ],
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 1910,
                                                                            type: "function (uint8,bytes32)",
                                                                            value: "LogError",
                                                                        },
                                                                        id: 2032,
                                                                        name: "Identifier",
                                                                        src: "3924:8:4",
                                                                    },
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            isConstant: false,
                                                                            isLValue: false,
                                                                            isPure: true,
                                                                            isStructConstructorCall: false,
                                                                            lValueRequested: false,
                                                                            names: [null],
                                                                            type: "uint8",
                                                                            type_conversion: true,
                                                                        },
                                                                        children: [
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: [
                                                                                        {
                                                                                            typeIdentifier: "t_enum$_Errors_$1880",
                                                                                            typeString: "enum RepaymentRouter.Errors",
                                                                                        },
                                                                                    ],
                                                                                    isConstant: false,
                                                                                    isLValue: false,
                                                                                    isPure: true,
                                                                                    lValueRequested: false,
                                                                                    type: "type(uint8)",
                                                                                    value: "uint8",
                                                                                },
                                                                                id: 2033,
                                                                                name: "ElementaryTypeNameExpression",
                                                                                src: "3933:5:4",
                                                                            },
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: null,
                                                                                    isConstant: false,
                                                                                    isLValue: false,
                                                                                    isPure: true,
                                                                                    lValueRequested: false,
                                                                                    member_name: "ROUTER_UNAUTHORIZED_TO_REPORT_REPAYMENT",
                                                                                    referencedDeclaration: null,
                                                                                    type: "enum RepaymentRouter.Errors",
                                                                                },
                                                                                children: [
                                                                                    {
                                                                                        attributes: {
                                                                                            argumentTypes: null,
                                                                                            overloadedDeclarations: [
                                                                                                null,
                                                                                            ],
                                                                                            referencedDeclaration: 1880,
                                                                                            type: "type(enum RepaymentRouter.Errors)",
                                                                                            value: "Errors",
                                                                                        },
                                                                                        id: 2034,
                                                                                        name: "Identifier",
                                                                                        src: "3939:6:4",
                                                                                    },
                                                                                ],
                                                                                id: 2035,
                                                                                name: "MemberAccess",
                                                                                src: "3939:46:4",
                                                                            },
                                                                        ],
                                                                        id: 2036,
                                                                        name: "FunctionCall",
                                                                        src: "3933:53:4",
                                                                    },
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 1932,
                                                                            type: "bytes32",
                                                                            value: "agreementId",
                                                                        },
                                                                        id: 2037,
                                                                        name: "Identifier",
                                                                        src: "3988:11:4",
                                                                    },
                                                                ],
                                                                id: 2038,
                                                                name: "FunctionCall",
                                                                src: "3924:76:4",
                                                            },
                                                        ],
                                                        id: 2039,
                                                        name: "ExpressionStatement",
                                                        src: "3924:76:4",
                                                    },
                                                    {
                                                        attributes: {
                                                            functionReturnParameters: 1942,
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    hexvalue: "30",
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: true,
                                                                    lValueRequested: false,
                                                                    subdenomination: null,
                                                                    token: "number",
                                                                    type: "int_const 0",
                                                                    value: "0",
                                                                },
                                                                id: 2040,
                                                                name: "Literal",
                                                                src: "4021:1:4",
                                                            },
                                                        ],
                                                        id: 2041,
                                                        name: "Return",
                                                        src: "4014:8:4",
                                                    },
                                                ],
                                                id: 2042,
                                                name: "Block",
                                                src: "3910:123:4",
                                            },
                                        ],
                                        id: 2043,
                                        name: "IfStatement",
                                        src: "3727:306:4",
                                    },
                                    {
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    isStructConstructorCall: false,
                                                    lValueRequested: false,
                                                    names: [null],
                                                    type: "tuple()",
                                                    type_conversion: false,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [
                                                                {
                                                                    typeIdentifier: "t_bool",
                                                                    typeString: "bool",
                                                                },
                                                            ],
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 6136,
                                                            type: "function (bool) pure",
                                                            value: "require",
                                                        },
                                                        id: 2044,
                                                        name: "Identifier",
                                                        src: "4082:7:4",
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
                                                            type: "bool",
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
                                                                        {
                                                                            typeIdentifier: "t_address",
                                                                            typeString: "address",
                                                                        },
                                                                        {
                                                                            typeIdentifier: "t_address",
                                                                            typeString: "address",
                                                                        },
                                                                        {
                                                                            typeIdentifier: "t_uint256",
                                                                            typeString: "uint256",
                                                                        },
                                                                    ],
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: false,
                                                                    lValueRequested: false,
                                                                    member_name: "transferFrom",
                                                                    referencedDeclaration: 2381,
                                                                    type: "function (address,address,address,uint256) external returns (bool)",
                                                                },
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 1875,
                                                                            type: "contract TokenTransferProxy",
                                                                            value: "tokenTransferProxy",
                                                                        },
                                                                        id: 2045,
                                                                        name: "Identifier",
                                                                        src: "4090:18:4",
                                                                    },
                                                                ],
                                                                id: 2046,
                                                                name: "MemberAccess",
                                                                src: "4090:31:4",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 1936,
                                                                    type: "address",
                                                                    value: "tokenAddress",
                                                                },
                                                                id: 2047,
                                                                name: "Identifier",
                                                                src: "4135:12:4",
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
                                                                        id: 2048,
                                                                        name: "Identifier",
                                                                        src: "4161:3:4",
                                                                    },
                                                                ],
                                                                id: 2049,
                                                                name: "MemberAccess",
                                                                src: "4161:10:4",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 1958,
                                                                    type: "address",
                                                                    value: "beneficiary",
                                                                },
                                                                id: 2050,
                                                                name: "Identifier",
                                                                src: "4185:11:4",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 1934,
                                                                    type: "uint256",
                                                                    value: "amount",
                                                                },
                                                                id: 2051,
                                                                name: "Identifier",
                                                                src: "4210:6:4",
                                                            },
                                                        ],
                                                        id: 2052,
                                                        name: "FunctionCall",
                                                        src: "4090:136:4",
                                                    },
                                                ],
                                                id: 2053,
                                                name: "FunctionCall",
                                                src: "4082:145:4",
                                            },
                                        ],
                                        id: 2054,
                                        name: "ExpressionStatement",
                                        src: "4082:145:4",
                                    },
                                    {
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    isStructConstructorCall: false,
                                                    lValueRequested: false,
                                                    names: [null],
                                                    type: "tuple()",
                                                    type_conversion: false,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [
                                                                {
                                                                    typeIdentifier: "t_bytes32",
                                                                    typeString: "bytes32",
                                                                },
                                                                {
                                                                    typeIdentifier: "t_address",
                                                                    typeString: "address",
                                                                },
                                                                {
                                                                    typeIdentifier: "t_address",
                                                                    typeString: "address",
                                                                },
                                                                {
                                                                    typeIdentifier: "t_uint256",
                                                                    typeString: "uint256",
                                                                },
                                                                {
                                                                    typeIdentifier: "t_address",
                                                                    typeString: "address",
                                                                },
                                                            ],
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 1892,
                                                            type: "function (bytes32,address,address,uint256,address)",
                                                            value: "LogRepayment",
                                                        },
                                                        id: 2055,
                                                        name: "Identifier",
                                                        src: "4273:12:4",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 1932,
                                                            type: "bytes32",
                                                            value: "agreementId",
                                                        },
                                                        id: 2056,
                                                        name: "Identifier",
                                                        src: "4286:11:4",
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
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 6133,
                                                                    type: "msg",
                                                                    value: "msg",
                                                                },
                                                                id: 2057,
                                                                name: "Identifier",
                                                                src: "4299:3:4",
                                                            },
                                                        ],
                                                        id: 2058,
                                                        name: "MemberAccess",
                                                        src: "4299:10:4",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 1958,
                                                            type: "address",
                                                            value: "beneficiary",
                                                        },
                                                        id: 2059,
                                                        name: "Identifier",
                                                        src: "4311:11:4",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 1934,
                                                            type: "uint256",
                                                            value: "amount",
                                                        },
                                                        id: 2060,
                                                        name: "Identifier",
                                                        src: "4324:6:4",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 1936,
                                                            type: "address",
                                                            value: "tokenAddress",
                                                        },
                                                        id: 2061,
                                                        name: "Identifier",
                                                        src: "4332:12:4",
                                                    },
                                                ],
                                                id: 2062,
                                                name: "FunctionCall",
                                                src: "4273:72:4",
                                            },
                                        ],
                                        id: 2063,
                                        name: "ExpressionStatement",
                                        src: "4273:72:4",
                                    },
                                    {
                                        attributes: {
                                            functionReturnParameters: 1942,
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    overloadedDeclarations: [null],
                                                    referencedDeclaration: 1934,
                                                    type: "uint256",
                                                    value: "amount",
                                                },
                                                id: 2064,
                                                name: "Identifier",
                                                src: "4363:6:4",
                                            },
                                        ],
                                        id: 2065,
                                        name: "Return",
                                        src: "4356:13:4",
                                    },
                                ],
                                id: 2066,
                                name: "Block",
                                src: "2887:1489:4",
                            },
                        ],
                        id: 2067,
                        name: "FunctionDefinition",
                        src: "2705:1671:4",
                    },
                    {
                        attributes: {
                            constant: false,
                            implemented: true,
                            isConstructor: false,
                            name: "repayNFT",
                            payable: false,
                            scope: 2206,
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
                                            name: "agreementId",
                                            scope: 2205,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "bytes32",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "bytes32",
                                                    type: "bytes32",
                                                },
                                                id: 2068,
                                                name: "ElementaryTypeName",
                                                src: "4666:7:4",
                                            },
                                        ],
                                        id: 2069,
                                        name: "VariableDeclaration",
                                        src: "4666:19:4",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "tokenId",
                                            scope: 2205,
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
                                                id: 2070,
                                                name: "ElementaryTypeName",
                                                src: "4695:4:4",
                                            },
                                        ],
                                        id: 2071,
                                        name: "VariableDeclaration",
                                        src: "4695:12:4",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "tokenAddress",
                                            scope: 2205,
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
                                                id: 2072,
                                                name: "ElementaryTypeName",
                                                src: "4717:7:4",
                                            },
                                        ],
                                        id: 2073,
                                        name: "VariableDeclaration",
                                        src: "4717:20:4",
                                    },
                                ],
                                id: 2074,
                                name: "ParameterList",
                                src: "4656:87:4",
                            },
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_tokenId",
                                            scope: 2205,
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
                                                id: 2077,
                                                name: "ElementaryTypeName",
                                                src: "4798:4:4",
                                            },
                                        ],
                                        id: 2078,
                                        name: "VariableDeclaration",
                                        src: "4798:13:4",
                                    },
                                ],
                                id: 2079,
                                name: "ParameterList",
                                src: "4797:15:4",
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
                                            referencedDeclaration: 5416,
                                            type: "modifier ()",
                                            value: "whenNotPaused",
                                        },
                                        id: 2075,
                                        name: "Identifier",
                                        src: "4767:13:4",
                                    },
                                ],
                                id: 2076,
                                name: "ModifierInvocation",
                                src: "4767:13:4",
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
                                                    isStructConstructorCall: false,
                                                    lValueRequested: false,
                                                    names: [null],
                                                    type: "tuple()",
                                                    type_conversion: false,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [
                                                                {
                                                                    typeIdentifier: "t_bool",
                                                                    typeString: "bool",
                                                                },
                                                            ],
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 6136,
                                                            type: "function (bool) pure",
                                                            value: "require",
                                                        },
                                                        id: 2080,
                                                        name: "Identifier",
                                                        src: "4827:7:4",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            commonType: {
                                                                typeIdentifier: "t_address",
                                                                typeString: "address",
                                                            },
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: false,
                                                            lValueRequested: false,
                                                            operator: "!=",
                                                            type: "bool",
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 2073,
                                                                    type: "address",
                                                                    value: "tokenAddress",
                                                                },
                                                                id: 2081,
                                                                name: "Identifier",
                                                                src: "4835:12:4",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: true,
                                                                    isStructConstructorCall: false,
                                                                    lValueRequested: false,
                                                                    names: [null],
                                                                    type: "address",
                                                                    type_conversion: true,
                                                                },
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: [
                                                                                {
                                                                                    typeIdentifier: "t_rational_0_by_1",
                                                                                    typeString: "int_const 0",
                                                                                },
                                                                            ],
                                                                            isConstant: false,
                                                                            isLValue: false,
                                                                            isPure: true,
                                                                            lValueRequested: false,
                                                                            type: "type(address)",
                                                                            value: "address",
                                                                        },
                                                                        id: 2082,
                                                                        name: "ElementaryTypeNameExpression",
                                                                        src: "4851:7:4",
                                                                    },
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            hexvalue: "30",
                                                                            isConstant: false,
                                                                            isLValue: false,
                                                                            isPure: true,
                                                                            lValueRequested: false,
                                                                            subdenomination: null,
                                                                            token: "number",
                                                                            type: "int_const 0",
                                                                            value: "0",
                                                                        },
                                                                        id: 2083,
                                                                        name: "Literal",
                                                                        src: "4859:1:4",
                                                                    },
                                                                ],
                                                                id: 2084,
                                                                name: "FunctionCall",
                                                                src: "4851:10:4",
                                                            },
                                                        ],
                                                        id: 2085,
                                                        name: "BinaryOperation",
                                                        src: "4835:26:4",
                                                    },
                                                ],
                                                id: 2086,
                                                name: "FunctionCall",
                                                src: "4827:35:4",
                                            },
                                        ],
                                        id: 2087,
                                        name: "ExpressionStatement",
                                        src: "4827:35:4",
                                    },
                                    {
                                        attributes: {
                                            assignments: [2089],
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    constant: false,
                                                    name: "beneficiary",
                                                    scope: 2205,
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
                                                        id: 2088,
                                                        name: "ElementaryTypeName",
                                                        src: "4931:7:4",
                                                    },
                                                ],
                                                id: 2089,
                                                name: "VariableDeclaration",
                                                src: "4931:19:4",
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
                                                    type: "address",
                                                    type_conversion: false,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [
                                                                {
                                                                    typeIdentifier: "t_bytes32",
                                                                    typeString: "bytes32",
                                                                },
                                                            ],
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: false,
                                                            lValueRequested: false,
                                                            member_name: "getBeneficiary",
                                                            referencedDeclaration: 1495,
                                                            type: "function (bytes32) view external returns (address)",
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 1873,
                                                                    type: "contract DebtRegistry",
                                                                    value: "debtRegistry",
                                                                },
                                                                id: 2090,
                                                                name: "Identifier",
                                                                src: "4953:12:4",
                                                            },
                                                        ],
                                                        id: 2091,
                                                        name: "MemberAccess",
                                                        src: "4953:27:4",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2069,
                                                            type: "bytes32",
                                                            value: "agreementId",
                                                        },
                                                        id: 2092,
                                                        name: "Identifier",
                                                        src: "4981:11:4",
                                                    },
                                                ],
                                                id: 2093,
                                                name: "FunctionCall",
                                                src: "4953:40:4",
                                            },
                                        ],
                                        id: 2094,
                                        name: "VariableDeclarationStatement",
                                        src: "4931:62:4",
                                    },
                                    {
                                        attributes: {
                                            falseBody: null,
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    commonType: {
                                                        typeIdentifier: "t_address",
                                                        typeString: "address",
                                                    },
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    lValueRequested: false,
                                                    operator: "==",
                                                    type: "bool",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2089,
                                                            type: "address",
                                                            value: "beneficiary",
                                                        },
                                                        id: 2095,
                                                        name: "Identifier",
                                                        src: "5007:11:4",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: true,
                                                            isStructConstructorCall: false,
                                                            lValueRequested: false,
                                                            names: [null],
                                                            type: "address",
                                                            type_conversion: true,
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: [
                                                                        {
                                                                            typeIdentifier: "t_rational_0_by_1",
                                                                            typeString: "int_const 0",
                                                                        },
                                                                    ],
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: true,
                                                                    lValueRequested: false,
                                                                    type: "type(address)",
                                                                    value: "address",
                                                                },
                                                                id: 2096,
                                                                name: "ElementaryTypeNameExpression",
                                                                src: "5022:7:4",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    hexvalue: "30",
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: true,
                                                                    lValueRequested: false,
                                                                    subdenomination: null,
                                                                    token: "number",
                                                                    type: "int_const 0",
                                                                    value: "0",
                                                                },
                                                                id: 2097,
                                                                name: "Literal",
                                                                src: "5030:1:4",
                                                            },
                                                        ],
                                                        id: 2098,
                                                        name: "FunctionCall",
                                                        src: "5022:10:4",
                                                    },
                                                ],
                                                id: 2099,
                                                name: "BinaryOperation",
                                                src: "5007:25:4",
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
                                                                    isStructConstructorCall: false,
                                                                    lValueRequested: false,
                                                                    names: [null],
                                                                    type: "tuple()",
                                                                    type_conversion: false,
                                                                },
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: [
                                                                                {
                                                                                    typeIdentifier: "t_uint8",
                                                                                    typeString: "uint8",
                                                                                },
                                                                                {
                                                                                    typeIdentifier: "t_bytes32",
                                                                                    typeString: "bytes32",
                                                                                },
                                                                            ],
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 1910,
                                                                            type: "function (uint8,bytes32)",
                                                                            value: "LogError",
                                                                        },
                                                                        id: 2100,
                                                                        name: "Identifier",
                                                                        src: "5048:8:4",
                                                                    },
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            isConstant: false,
                                                                            isLValue: false,
                                                                            isPure: true,
                                                                            isStructConstructorCall: false,
                                                                            lValueRequested: false,
                                                                            names: [null],
                                                                            type: "uint8",
                                                                            type_conversion: true,
                                                                        },
                                                                        children: [
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: [
                                                                                        {
                                                                                            typeIdentifier: "t_enum$_Errors_$1880",
                                                                                            typeString: "enum RepaymentRouter.Errors",
                                                                                        },
                                                                                    ],
                                                                                    isConstant: false,
                                                                                    isLValue: false,
                                                                                    isPure: true,
                                                                                    lValueRequested: false,
                                                                                    type: "type(uint8)",
                                                                                    value: "uint8",
                                                                                },
                                                                                id: 2101,
                                                                                name: "ElementaryTypeNameExpression",
                                                                                src: "5057:5:4",
                                                                            },
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: null,
                                                                                    isConstant: false,
                                                                                    isLValue: false,
                                                                                    isPure: true,
                                                                                    lValueRequested: false,
                                                                                    member_name: "DEBT_AGREEMENT_NONEXISTENT",
                                                                                    referencedDeclaration: null,
                                                                                    type: "enum RepaymentRouter.Errors",
                                                                                },
                                                                                children: [
                                                                                    {
                                                                                        attributes: {
                                                                                            argumentTypes: null,
                                                                                            overloadedDeclarations: [
                                                                                                null,
                                                                                            ],
                                                                                            referencedDeclaration: 1880,
                                                                                            type: "type(enum RepaymentRouter.Errors)",
                                                                                            value: "Errors",
                                                                                        },
                                                                                        id: 2102,
                                                                                        name: "Identifier",
                                                                                        src: "5063:6:4",
                                                                                    },
                                                                                ],
                                                                                id: 2103,
                                                                                name: "MemberAccess",
                                                                                src: "5063:33:4",
                                                                            },
                                                                        ],
                                                                        id: 2104,
                                                                        name: "FunctionCall",
                                                                        src: "5057:40:4",
                                                                    },
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 2069,
                                                                            type: "bytes32",
                                                                            value: "agreementId",
                                                                        },
                                                                        id: 2105,
                                                                        name: "Identifier",
                                                                        src: "5099:11:4",
                                                                    },
                                                                ],
                                                                id: 2106,
                                                                name: "FunctionCall",
                                                                src: "5048:63:4",
                                                            },
                                                        ],
                                                        id: 2107,
                                                        name: "ExpressionStatement",
                                                        src: "5048:63:4",
                                                    },
                                                    {
                                                        attributes: {
                                                            functionReturnParameters: 2079,
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    hexvalue: "30",
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: true,
                                                                    lValueRequested: false,
                                                                    subdenomination: null,
                                                                    token: "number",
                                                                    type: "int_const 0",
                                                                    value: "0",
                                                                },
                                                                id: 2108,
                                                                name: "Literal",
                                                                src: "5132:1:4",
                                                            },
                                                        ],
                                                        id: 2109,
                                                        name: "Return",
                                                        src: "5125:8:4",
                                                    },
                                                ],
                                                id: 2110,
                                                name: "Block",
                                                src: "5034:110:4",
                                            },
                                        ],
                                        id: 2111,
                                        name: "IfStatement",
                                        src: "5003:141:4",
                                    },
                                    {
                                        attributes: {
                                            assignments: [2113],
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    constant: false,
                                                    name: "nonFungibleToken",
                                                    scope: 2205,
                                                    stateVariable: false,
                                                    storageLocation: "default",
                                                    type: "contract ERC721",
                                                    value: null,
                                                    visibility: "internal",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            contractScope: null,
                                                            name: "ERC721",
                                                            referencedDeclaration: 4773,
                                                            type: "contract ERC721",
                                                        },
                                                        id: 2112,
                                                        name: "UserDefinedTypeName",
                                                        src: "5154:6:4",
                                                    },
                                                ],
                                                id: 2113,
                                                name: "VariableDeclaration",
                                                src: "5154:23:4",
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
                                                    type: "contract ERC721",
                                                    type_conversion: true,
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
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 4773,
                                                            type: "type(contract ERC721)",
                                                            value: "ERC721",
                                                        },
                                                        id: 2114,
                                                        name: "Identifier",
                                                        src: "5180:6:4",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2073,
                                                            type: "address",
                                                            value: "tokenAddress",
                                                        },
                                                        id: 2115,
                                                        name: "Identifier",
                                                        src: "5187:12:4",
                                                    },
                                                ],
                                                id: 2116,
                                                name: "FunctionCall",
                                                src: "5180:20:4",
                                            },
                                        ],
                                        id: 2117,
                                        name: "VariableDeclarationStatement",
                                        src: "5154:46:4",
                                    },
                                    {
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    isStructConstructorCall: false,
                                                    lValueRequested: false,
                                                    names: [null],
                                                    type: "tuple()",
                                                    type_conversion: false,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [
                                                                {
                                                                    typeIdentifier: "t_bool",
                                                                    typeString: "bool",
                                                                },
                                                            ],
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 6136,
                                                            type: "function (bool) pure",
                                                            value: "require",
                                                        },
                                                        id: 2118,
                                                        name: "Identifier",
                                                        src: "5210:7:4",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            arguments: [null],
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: false,
                                                            isStructConstructorCall: false,
                                                            lValueRequested: false,
                                                            names: [null],
                                                            type: "bool",
                                                            type_conversion: false,
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: [null],
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: false,
                                                                    lValueRequested: false,
                                                                    member_name: "implementsERC721",
                                                                    referencedDeclaration: 4756,
                                                                    type: "function () view external returns (bool)",
                                                                },
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 2113,
                                                                            type: "contract ERC721",
                                                                            value: "nonFungibleToken",
                                                                        },
                                                                        id: 2119,
                                                                        name: "Identifier",
                                                                        src: "5218:16:4",
                                                                    },
                                                                ],
                                                                id: 2120,
                                                                name: "MemberAccess",
                                                                src: "5218:33:4",
                                                            },
                                                        ],
                                                        id: 2121,
                                                        name: "FunctionCall",
                                                        src: "5218:35:4",
                                                    },
                                                ],
                                                id: 2122,
                                                name: "FunctionCall",
                                                src: "5210:44:4",
                                            },
                                        ],
                                        id: 2123,
                                        name: "ExpressionStatement",
                                        src: "5210:44:4",
                                    },
                                    {
                                        attributes: {
                                            falseBody: null,
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    commonType: {
                                                        typeIdentifier: "t_bool",
                                                        typeString: "bool",
                                                    },
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    lValueRequested: false,
                                                    operator: "||",
                                                    type: "bool",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            commonType: {
                                                                typeIdentifier: "t_address",
                                                                typeString: "address",
                                                            },
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: false,
                                                            lValueRequested: false,
                                                            operator: "!=",
                                                            type: "bool",
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: false,
                                                                    isStructConstructorCall: false,
                                                                    lValueRequested: false,
                                                                    names: [null],
                                                                    type: "address",
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
                                                                            member_name: "ownerOf",
                                                                            referencedDeclaration: 4721,
                                                                            type: "function (uint256) view external returns (address)",
                                                                        },
                                                                        children: [
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: null,
                                                                                    overloadedDeclarations: [
                                                                                        null,
                                                                                    ],
                                                                                    referencedDeclaration: 2113,
                                                                                    type: "contract ERC721",
                                                                                    value: "nonFungibleToken",
                                                                                },
                                                                                id: 2124,
                                                                                name: "Identifier",
                                                                                src: "5350:16:4",
                                                                            },
                                                                        ],
                                                                        id: 2125,
                                                                        name: "MemberAccess",
                                                                        src: "5350:24:4",
                                                                    },
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 2071,
                                                                            type: "uint256",
                                                                            value: "tokenId",
                                                                        },
                                                                        id: 2126,
                                                                        name: "Identifier",
                                                                        src: "5375:7:4",
                                                                    },
                                                                ],
                                                                id: 2127,
                                                                name: "FunctionCall",
                                                                src: "5350:33:4",
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
                                                                        id: 2128,
                                                                        name: "Identifier",
                                                                        src: "5387:3:4",
                                                                    },
                                                                ],
                                                                id: 2129,
                                                                name: "MemberAccess",
                                                                src: "5387:10:4",
                                                            },
                                                        ],
                                                        id: 2130,
                                                        name: "BinaryOperation",
                                                        src: "5350:47:4",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            commonType: {
                                                                typeIdentifier: "t_address",
                                                                typeString: "address",
                                                            },
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: false,
                                                            lValueRequested: false,
                                                            operator: "!=",
                                                            type: "bool",
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: false,
                                                                    isStructConstructorCall: false,
                                                                    lValueRequested: false,
                                                                    names: [null],
                                                                    type: "address",
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
                                                                            member_name: "getApproved",
                                                                            referencedDeclaration: 4735,
                                                                            type: "function (uint256) view external returns (address)",
                                                                        },
                                                                        children: [
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: null,
                                                                                    overloadedDeclarations: [
                                                                                        null,
                                                                                    ],
                                                                                    referencedDeclaration: 2113,
                                                                                    type: "contract ERC721",
                                                                                    value: "nonFungibleToken",
                                                                                },
                                                                                id: 2131,
                                                                                name: "Identifier",
                                                                                src: "5413:16:4",
                                                                            },
                                                                        ],
                                                                        id: 2132,
                                                                        name: "MemberAccess",
                                                                        src: "5413:28:4",
                                                                    },
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 2071,
                                                                            type: "uint256",
                                                                            value: "tokenId",
                                                                        },
                                                                        id: 2133,
                                                                        name: "Identifier",
                                                                        src: "5442:7:4",
                                                                    },
                                                                ],
                                                                id: 2134,
                                                                name: "FunctionCall",
                                                                src: "5413:37:4",
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
                                                                    type: "address",
                                                                    type_conversion: true,
                                                                },
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: [
                                                                                {
                                                                                    typeIdentifier: "t_contract$_TokenTransferProxy_$2382",
                                                                                    typeString: "contract TokenTransferProxy",
                                                                                },
                                                                            ],
                                                                            isConstant: false,
                                                                            isLValue: false,
                                                                            isPure: true,
                                                                            lValueRequested: false,
                                                                            type: "type(address)",
                                                                            value: "address",
                                                                        },
                                                                        id: 2135,
                                                                        name: "ElementaryTypeNameExpression",
                                                                        src: "5454:7:4",
                                                                    },
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 1875,
                                                                            type: "contract TokenTransferProxy",
                                                                            value: "tokenTransferProxy",
                                                                        },
                                                                        id: 2136,
                                                                        name: "Identifier",
                                                                        src: "5462:18:4",
                                                                    },
                                                                ],
                                                                id: 2137,
                                                                name: "FunctionCall",
                                                                src: "5454:27:4",
                                                            },
                                                        ],
                                                        id: 2138,
                                                        name: "BinaryOperation",
                                                        src: "5413:68:4",
                                                    },
                                                ],
                                                id: 2139,
                                                name: "BinaryOperation",
                                                src: "5350:131:4",
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
                                                                    isStructConstructorCall: false,
                                                                    lValueRequested: false,
                                                                    names: [null],
                                                                    type: "tuple()",
                                                                    type_conversion: false,
                                                                },
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: [
                                                                                {
                                                                                    typeIdentifier: "t_uint8",
                                                                                    typeString: "uint8",
                                                                                },
                                                                                {
                                                                                    typeIdentifier: "t_bytes32",
                                                                                    typeString: "bytes32",
                                                                                },
                                                                            ],
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 1910,
                                                                            type: "function (uint8,bytes32)",
                                                                            value: "LogError",
                                                                        },
                                                                        id: 2140,
                                                                        name: "Identifier",
                                                                        src: "5497:8:4",
                                                                    },
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            isConstant: false,
                                                                            isLValue: false,
                                                                            isPure: true,
                                                                            isStructConstructorCall: false,
                                                                            lValueRequested: false,
                                                                            names: [null],
                                                                            type: "uint8",
                                                                            type_conversion: true,
                                                                        },
                                                                        children: [
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: [
                                                                                        {
                                                                                            typeIdentifier: "t_enum$_Errors_$1880",
                                                                                            typeString: "enum RepaymentRouter.Errors",
                                                                                        },
                                                                                    ],
                                                                                    isConstant: false,
                                                                                    isLValue: false,
                                                                                    isPure: true,
                                                                                    lValueRequested: false,
                                                                                    type: "type(uint8)",
                                                                                    value: "uint8",
                                                                                },
                                                                                id: 2141,
                                                                                name: "ElementaryTypeNameExpression",
                                                                                src: "5506:5:4",
                                                                            },
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: null,
                                                                                    isConstant: false,
                                                                                    isLValue: false,
                                                                                    isPure: true,
                                                                                    lValueRequested: false,
                                                                                    member_name: "PAYER_OWNERSHIP_OR_ROUTER_APPROVAL_MISSING",
                                                                                    referencedDeclaration: null,
                                                                                    type: "enum RepaymentRouter.Errors",
                                                                                },
                                                                                children: [
                                                                                    {
                                                                                        attributes: {
                                                                                            argumentTypes: null,
                                                                                            overloadedDeclarations: [
                                                                                                null,
                                                                                            ],
                                                                                            referencedDeclaration: 1880,
                                                                                            type: "type(enum RepaymentRouter.Errors)",
                                                                                            value: "Errors",
                                                                                        },
                                                                                        id: 2142,
                                                                                        name: "Identifier",
                                                                                        src: "5512:6:4",
                                                                                    },
                                                                                ],
                                                                                id: 2143,
                                                                                name: "MemberAccess",
                                                                                src: "5512:49:4",
                                                                            },
                                                                        ],
                                                                        id: 2144,
                                                                        name: "FunctionCall",
                                                                        src: "5506:56:4",
                                                                    },
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 2069,
                                                                            type: "bytes32",
                                                                            value: "agreementId",
                                                                        },
                                                                        id: 2145,
                                                                        name: "Identifier",
                                                                        src: "5564:11:4",
                                                                    },
                                                                ],
                                                                id: 2146,
                                                                name: "FunctionCall",
                                                                src: "5497:79:4",
                                                            },
                                                        ],
                                                        id: 2147,
                                                        name: "ExpressionStatement",
                                                        src: "5497:79:4",
                                                    },
                                                    {
                                                        attributes: {
                                                            functionReturnParameters: 2079,
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    hexvalue: "30",
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: true,
                                                                    lValueRequested: false,
                                                                    subdenomination: null,
                                                                    token: "number",
                                                                    type: "int_const 0",
                                                                    value: "0",
                                                                },
                                                                id: 2148,
                                                                name: "Literal",
                                                                src: "5597:1:4",
                                                            },
                                                        ],
                                                        id: 2149,
                                                        name: "Return",
                                                        src: "5590:8:4",
                                                    },
                                                ],
                                                id: 2150,
                                                name: "Block",
                                                src: "5483:126:4",
                                            },
                                        ],
                                        id: 2151,
                                        name: "IfStatement",
                                        src: "5346:263:4",
                                    },
                                    {
                                        attributes: {
                                            assignments: [2153],
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    constant: false,
                                                    name: "termsContract",
                                                    scope: 2205,
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
                                                        id: 2152,
                                                        name: "ElementaryTypeName",
                                                        src: "5652:7:4",
                                                    },
                                                ],
                                                id: 2153,
                                                name: "VariableDeclaration",
                                                src: "5652:21:4",
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
                                                    type: "address",
                                                    type_conversion: false,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [
                                                                {
                                                                    typeIdentifier: "t_bytes32",
                                                                    typeString: "bytes32",
                                                                },
                                                            ],
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: false,
                                                            lValueRequested: false,
                                                            member_name: "getTermsContract",
                                                            referencedDeclaration: 1508,
                                                            type: "function (bytes32) view external returns (address)",
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 1873,
                                                                    type: "contract DebtRegistry",
                                                                    value: "debtRegistry",
                                                                },
                                                                id: 2154,
                                                                name: "Identifier",
                                                                src: "5676:12:4",
                                                            },
                                                        ],
                                                        id: 2155,
                                                        name: "MemberAccess",
                                                        src: "5676:29:4",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2069,
                                                            type: "bytes32",
                                                            value: "agreementId",
                                                        },
                                                        id: 2156,
                                                        name: "Identifier",
                                                        src: "5706:11:4",
                                                    },
                                                ],
                                                id: 2157,
                                                name: "FunctionCall",
                                                src: "5676:42:4",
                                            },
                                        ],
                                        id: 2158,
                                        name: "VariableDeclarationStatement",
                                        src: "5652:66:4",
                                    },
                                    {
                                        attributes: {
                                            falseBody: null,
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    lValueRequested: false,
                                                    operator: "!",
                                                    prefix: true,
                                                    type: "bool",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: false,
                                                            isStructConstructorCall: false,
                                                            lValueRequested: false,
                                                            names: [null],
                                                            type: "bool",
                                                            type_conversion: false,
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: [
                                                                        {
                                                                            typeIdentifier: "t_bytes32",
                                                                            typeString: "bytes32",
                                                                        },
                                                                        {
                                                                            typeIdentifier: "t_address",
                                                                            typeString: "address",
                                                                        },
                                                                        {
                                                                            typeIdentifier: "t_address",
                                                                            typeString: "address",
                                                                        },
                                                                        {
                                                                            typeIdentifier: "t_uint256",
                                                                            typeString: "uint256",
                                                                        },
                                                                        {
                                                                            typeIdentifier: "t_address",
                                                                            typeString: "address",
                                                                        },
                                                                    ],
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: false,
                                                                    lValueRequested: false,
                                                                    member_name: "registerNFTRepayment",
                                                                    referencedDeclaration: 2238,
                                                                    type: "function (bytes32,address,address,uint256,address) external returns (bool)",
                                                                },
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            isConstant: false,
                                                                            isLValue: false,
                                                                            isPure: false,
                                                                            isStructConstructorCall: false,
                                                                            lValueRequested: false,
                                                                            names: [null],
                                                                            type: "contract TermsContract",
                                                                            type_conversion: true,
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
                                                                                    overloadedDeclarations: [
                                                                                        null,
                                                                                    ],
                                                                                    referencedDeclaration: 2257,
                                                                                    type: "type(contract TermsContract)",
                                                                                    value: "TermsContract",
                                                                                },
                                                                                id: 2159,
                                                                                name: "Identifier",
                                                                                src: "5733:13:4",
                                                                            },
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: null,
                                                                                    overloadedDeclarations: [
                                                                                        null,
                                                                                    ],
                                                                                    referencedDeclaration: 2153,
                                                                                    type: "address",
                                                                                    value: "termsContract",
                                                                                },
                                                                                id: 2160,
                                                                                name: "Identifier",
                                                                                src: "5747:13:4",
                                                                            },
                                                                        ],
                                                                        id: 2161,
                                                                        name: "FunctionCall",
                                                                        src: "5733:28:4",
                                                                    },
                                                                ],
                                                                id: 2162,
                                                                name: "MemberAccess",
                                                                src: "5733:49:4",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 2069,
                                                                    type: "bytes32",
                                                                    value: "agreementId",
                                                                },
                                                                id: 2163,
                                                                name: "Identifier",
                                                                src: "5796:11:4",
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
                                                                        id: 2164,
                                                                        name: "Identifier",
                                                                        src: "5821:3:4",
                                                                    },
                                                                ],
                                                                id: 2165,
                                                                name: "MemberAccess",
                                                                src: "5821:10:4",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 2089,
                                                                    type: "address",
                                                                    value: "beneficiary",
                                                                },
                                                                id: 2166,
                                                                name: "Identifier",
                                                                src: "5845:11:4",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 2071,
                                                                    type: "uint256",
                                                                    value: "tokenId",
                                                                },
                                                                id: 2167,
                                                                name: "Identifier",
                                                                src: "5870:7:4",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 2073,
                                                                    type: "address",
                                                                    value: "tokenAddress",
                                                                },
                                                                id: 2168,
                                                                name: "Identifier",
                                                                src: "5891:12:4",
                                                            },
                                                        ],
                                                        id: 2169,
                                                        name: "FunctionCall",
                                                        src: "5733:180:4",
                                                    },
                                                ],
                                                id: 2170,
                                                name: "UnaryOperation",
                                                src: "5732:181:4",
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
                                                                    isStructConstructorCall: false,
                                                                    lValueRequested: false,
                                                                    names: [null],
                                                                    type: "tuple()",
                                                                    type_conversion: false,
                                                                },
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: [
                                                                                {
                                                                                    typeIdentifier: "t_uint8",
                                                                                    typeString: "uint8",
                                                                                },
                                                                                {
                                                                                    typeIdentifier: "t_bytes32",
                                                                                    typeString: "bytes32",
                                                                                },
                                                                            ],
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 1910,
                                                                            type: "function (uint8,bytes32)",
                                                                            value: "LogError",
                                                                        },
                                                                        id: 2171,
                                                                        name: "Identifier",
                                                                        src: "5929:8:4",
                                                                    },
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            isConstant: false,
                                                                            isLValue: false,
                                                                            isPure: true,
                                                                            isStructConstructorCall: false,
                                                                            lValueRequested: false,
                                                                            names: [null],
                                                                            type: "uint8",
                                                                            type_conversion: true,
                                                                        },
                                                                        children: [
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: [
                                                                                        {
                                                                                            typeIdentifier: "t_enum$_Errors_$1880",
                                                                                            typeString: "enum RepaymentRouter.Errors",
                                                                                        },
                                                                                    ],
                                                                                    isConstant: false,
                                                                                    isLValue: false,
                                                                                    isPure: true,
                                                                                    lValueRequested: false,
                                                                                    type: "type(uint8)",
                                                                                    value: "uint8",
                                                                                },
                                                                                id: 2172,
                                                                                name: "ElementaryTypeNameExpression",
                                                                                src: "5938:5:4",
                                                                            },
                                                                            {
                                                                                attributes: {
                                                                                    argumentTypes: null,
                                                                                    isConstant: false,
                                                                                    isLValue: false,
                                                                                    isPure: true,
                                                                                    lValueRequested: false,
                                                                                    member_name: "ROUTER_UNAUTHORIZED_TO_REPORT_REPAYMENT",
                                                                                    referencedDeclaration: null,
                                                                                    type: "enum RepaymentRouter.Errors",
                                                                                },
                                                                                children: [
                                                                                    {
                                                                                        attributes: {
                                                                                            argumentTypes: null,
                                                                                            overloadedDeclarations: [
                                                                                                null,
                                                                                            ],
                                                                                            referencedDeclaration: 1880,
                                                                                            type: "type(enum RepaymentRouter.Errors)",
                                                                                            value: "Errors",
                                                                                        },
                                                                                        id: 2173,
                                                                                        name: "Identifier",
                                                                                        src: "5944:6:4",
                                                                                    },
                                                                                ],
                                                                                id: 2174,
                                                                                name: "MemberAccess",
                                                                                src: "5944:46:4",
                                                                            },
                                                                        ],
                                                                        id: 2175,
                                                                        name: "FunctionCall",
                                                                        src: "5938:53:4",
                                                                    },
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 2069,
                                                                            type: "bytes32",
                                                                            value: "agreementId",
                                                                        },
                                                                        id: 2176,
                                                                        name: "Identifier",
                                                                        src: "5993:11:4",
                                                                    },
                                                                ],
                                                                id: 2177,
                                                                name: "FunctionCall",
                                                                src: "5929:76:4",
                                                            },
                                                        ],
                                                        id: 2178,
                                                        name: "ExpressionStatement",
                                                        src: "5929:76:4",
                                                    },
                                                    {
                                                        attributes: {
                                                            functionReturnParameters: 2079,
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    hexvalue: "30",
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: true,
                                                                    lValueRequested: false,
                                                                    subdenomination: null,
                                                                    token: "number",
                                                                    type: "int_const 0",
                                                                    value: "0",
                                                                },
                                                                id: 2179,
                                                                name: "Literal",
                                                                src: "6026:1:4",
                                                            },
                                                        ],
                                                        id: 2180,
                                                        name: "Return",
                                                        src: "6019:8:4",
                                                    },
                                                ],
                                                id: 2181,
                                                name: "Block",
                                                src: "5915:123:4",
                                            },
                                        ],
                                        id: 2182,
                                        name: "IfStatement",
                                        src: "5728:310:4",
                                    },
                                    {
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    isStructConstructorCall: false,
                                                    lValueRequested: false,
                                                    names: [null],
                                                    type: "bool",
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
                                                                {
                                                                    typeIdentifier: "t_address",
                                                                    typeString: "address",
                                                                },
                                                                {
                                                                    typeIdentifier: "t_address",
                                                                    typeString: "address",
                                                                },
                                                                {
                                                                    typeIdentifier: "t_uint256",
                                                                    typeString: "uint256",
                                                                },
                                                            ],
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: false,
                                                            lValueRequested: false,
                                                            member_name: "transferFrom",
                                                            referencedDeclaration: 2381,
                                                            type: "function (address,address,address,uint256) external returns (bool)",
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 1875,
                                                                    type: "contract TokenTransferProxy",
                                                                    value: "tokenTransferProxy",
                                                                },
                                                                id: 2183,
                                                                name: "Identifier",
                                                                src: "6048:18:4",
                                                            },
                                                        ],
                                                        id: 2185,
                                                        name: "MemberAccess",
                                                        src: "6048:31:4",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2073,
                                                            type: "address",
                                                            value: "tokenAddress",
                                                        },
                                                        id: 2186,
                                                        name: "Identifier",
                                                        src: "6093:12:4",
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
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 6133,
                                                                    type: "msg",
                                                                    value: "msg",
                                                                },
                                                                id: 2187,
                                                                name: "Identifier",
                                                                src: "6119:3:4",
                                                            },
                                                        ],
                                                        id: 2188,
                                                        name: "MemberAccess",
                                                        src: "6119:10:4",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2089,
                                                            type: "address",
                                                            value: "beneficiary",
                                                        },
                                                        id: 2189,
                                                        name: "Identifier",
                                                        src: "6143:11:4",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2071,
                                                            type: "uint256",
                                                            value: "tokenId",
                                                        },
                                                        id: 2190,
                                                        name: "Identifier",
                                                        src: "6168:7:4",
                                                    },
                                                ],
                                                id: 2191,
                                                name: "FunctionCall",
                                                src: "6048:137:4",
                                            },
                                        ],
                                        id: 2192,
                                        name: "ExpressionStatement",
                                        src: "6048:137:4",
                                    },
                                    {
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    isStructConstructorCall: false,
                                                    lValueRequested: false,
                                                    names: [null],
                                                    type: "tuple()",
                                                    type_conversion: false,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [
                                                                {
                                                                    typeIdentifier: "t_bytes32",
                                                                    typeString: "bytes32",
                                                                },
                                                                {
                                                                    typeIdentifier: "t_address",
                                                                    typeString: "address",
                                                                },
                                                                {
                                                                    typeIdentifier: "t_address",
                                                                    typeString: "address",
                                                                },
                                                                {
                                                                    typeIdentifier: "t_uint256",
                                                                    typeString: "uint256",
                                                                },
                                                                {
                                                                    typeIdentifier: "t_address",
                                                                    typeString: "address",
                                                                },
                                                            ],
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 1904,
                                                            type: "function (bytes32,address,address,uint256,address)",
                                                            value: "LogNFTRepayment",
                                                        },
                                                        id: 2193,
                                                        name: "Identifier",
                                                        src: "6231:15:4",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2069,
                                                            type: "bytes32",
                                                            value: "agreementId",
                                                        },
                                                        id: 2194,
                                                        name: "Identifier",
                                                        src: "6247:11:4",
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
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 6133,
                                                                    type: "msg",
                                                                    value: "msg",
                                                                },
                                                                id: 2195,
                                                                name: "Identifier",
                                                                src: "6260:3:4",
                                                            },
                                                        ],
                                                        id: 2196,
                                                        name: "MemberAccess",
                                                        src: "6260:10:4",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2089,
                                                            type: "address",
                                                            value: "beneficiary",
                                                        },
                                                        id: 2197,
                                                        name: "Identifier",
                                                        src: "6272:11:4",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2071,
                                                            type: "uint256",
                                                            value: "tokenId",
                                                        },
                                                        id: 2198,
                                                        name: "Identifier",
                                                        src: "6285:7:4",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2073,
                                                            type: "address",
                                                            value: "tokenAddress",
                                                        },
                                                        id: 2199,
                                                        name: "Identifier",
                                                        src: "6294:12:4",
                                                    },
                                                ],
                                                id: 2200,
                                                name: "FunctionCall",
                                                src: "6231:76:4",
                                            },
                                        ],
                                        id: 2201,
                                        name: "ExpressionStatement",
                                        src: "6231:76:4",
                                    },
                                    {
                                        attributes: {
                                            functionReturnParameters: 2079,
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    overloadedDeclarations: [null],
                                                    referencedDeclaration: 2071,
                                                    type: "uint256",
                                                    value: "tokenId",
                                                },
                                                id: 2202,
                                                name: "Identifier",
                                                src: "6325:7:4",
                                            },
                                        ],
                                        id: 2203,
                                        name: "Return",
                                        src: "6318:14:4",
                                    },
                                ],
                                id: 2204,
                                name: "Block",
                                src: "4817:1522:4",
                            },
                        ],
                        id: 2205,
                        name: "FunctionDefinition",
                        src: "4639:1700:4",
                    },
                ],
                id: 2206,
                name: "ContractDefinition",
                src: "1339:5002:4",
            },
        ],
        id: 2207,
        name: "SourceUnit",
        src: "584:5758:4",
    },
    compiler: {
        name: "solc",
        version: "0.4.18+commit.9cf6e910.Emscripten.clang",
    },
    networks: {
        "70": {
            events: {},
            links: {},
            address: "0x384cdafd4dddd1b7f9210534a16931e60809b658",
        },
    },
    schemaVersion: "1.0.1",
    updatedAt: "2018-02-10T23:43:14.728Z",
};
//# sourceMappingURL=RepaymentRouter.js.map