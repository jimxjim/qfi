/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AccQueueQuinaryBlankSl,
  AccQueueQuinaryBlankSlInterface,
} from "../AccQueueQuinaryBlankSl";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_subDepth",
        type: "uint256",
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
    name: "calcMinHeight",
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
        internalType: "uint256",
        name: "_leaf",
        type: "uint256",
      },
    ],
    name: "enqueue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fill",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_depth",
        type: "uint256",
      },
    ],
    name: "getMainRoot",
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
    inputs: [],
    name: "getSmallSRTroot",
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
    inputs: [],
    name: "getSrIndices",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getSubRoot",
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
        internalType: "uint256[2]",
        name: "array",
        type: "uint256[2]",
      },
    ],
    name: "hash2",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[3]",
        name: "array",
        type: "uint256[3]",
      },
    ],
    name: "hash3",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[4]",
        name: "array",
        type: "uint256[4]",
      },
    ],
    name: "hash4",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[5]",
        name: "array",
        type: "uint256[5]",
      },
    ],
    name: "hash5",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_left",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_right",
        type: "uint256",
      },
    ],
    name: "hashLeftRight",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_level",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_leaf",
        type: "uint256",
      },
    ],
    name: "hashLevelLeaf",
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
        internalType: "uint256",
        name: "_subRoot",
        type: "uint256",
      },
    ],
    name: "insertSubTree",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_depth",
        type: "uint256",
      },
    ],
    name: "merge",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_numSrQueueOps",
        type: "uint256",
      },
    ],
    name: "mergeSubRoots",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "numLeaves",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array",
        type: "uint256[]",
      },
    ],
    name: "sha256Hash",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "subTreesMerged",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "treeMerged",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b5060405162002a8338038062002a8383398101604081905262000034916200061f565b808060056200004c62000046620005cb565b620005cf565b60008211620000785760405162461bcd60e51b81526004016200006f90620006d3565b60405180910390fd5b60208211156200009c5760405162461bcd60e51b81526004016200006f9062000638565b8060021480620000ac5750806005145b620000cb5760405162461bcd60e51b81526004016200006f9062000686565b6000805460ff60a01b191660028314600160a01b02179055608082905260a0819052620000f9828262000767565b60c05250507f0ef71f46e11a513c599eed9dd03576c33439bcfb1cee155316f90541e41649ba6101725550507f0404a2ed0a1df2006441895d9a65ffffdd4968cb5f555fe72a6da7aaec83e1a0610173557f0b1c3d09dd575749a374a9dc1ee32af8c2312e24ad33a3e40fce8120b0f25fe3610174557f1f60ed72fc1915366d2e52cfc7ddc0ff854c7aee9abbc07d1ca88ada842354dc610175557f2ca1efc603fc121baf791319195ee3ab7fa075cee664d008f9ab2870f5028360610176557f2a0381fc4fb108733dfc58c355f2de753bcde61bd988eaa7d33fc967262be5ad610177557f12c6c7cce0332367373dafc95d75b98dd58980410434929dff09466a4ba262db610178557f2f212d3cc7e7334c4a10ced1be011b9cd70f73cca5522fc4137a51be8a17d18e610179557f0968ef20d515d8d743b2cf66603f8b86f3fdeee932fdc911774bb8699566e11c61017a557f2e3604981890fb676c3dac1e14c5c201573f99d1b9e67025109baf274b10e9dd61017b557f147d317fd4b7a1dd6cb961cfba444466b3c431ea638c8df74a89fc591d1a3a5161017c557f10ea2b72952b619afd5b9bc50561df8de0c6e1ba9b5ad66b179c39c420304a7561017d557f1c49f7b357d244d9144676ad23f79465ef5b88ef0f91762a3d35997688af9a5a61017e557f05ca0cfef8158efc5c4af44122e2765179b5463618d5c5ac6185c192332cade961017f557f0ae1595634e8a2e23620f33f9b2b5a23387a28f5833814646900110842f3a109610180557f08be8c2a6a099d9cdc96f9197af6ad99595d73419eb0694eaea432fa18baa203610181557f207f689ce35cf857ee6e68c42d31bb2191d1e84d7a295ccd63995ca7369d20eb610182557f2a6f6b7e4a2cd1a6466ed17debb0a27904e99adbd72be85566a87340f41efd05610183557f0f0725795350566920bbf56d3f22c4d38e832e638c9cb91811f83194e9dd74be610184557f02cd50632e5c5b00a9a93f434797725ec0f85f11ba1b6a844f0cd10c70df6392610185557f08868b85d2fa4c17eec0a7d8bca4671a00474bff80e801981437b77aa11d10b5610186557f294a84b7b46ea0a781877a2c0efd1ee56758d9ee55722721867efe53f4645286610187557f02cb8070979a018bb919f0d1a25d5ad3d5a376c4cf66f36d33434d221ca77e88610188557f05dfce8303f471d776762f2ddd37f05191b8bf5064d8d28e892cd4ec21e7aab4610189557f28a47617aa1e26bf42fd3b26e88aa717fd759bb92b22faaf5ad82090680b523161018a557f1de9253f5fa546603817abd83d1a13c8562f2bf6a0069a546fe546ca0c03c17061018b557f1cb9bd316e341b873dbbef94fd699c6e3a638451de2817db1620235db2b6c39e61018c557f0654785b2917d7c659a95738add3d8eb51cbbefc0f521c2640bc74b0fec5816261018d557f2eed74eacf5de60a758f815cb5e73015455c38408143fc25810d03e1ec9e352461018e557f16bea3363deb4753db67be8b19110b169ae39f33113a92773c41a8b025ca5a9361018f557f2b0dd3b7e0a7e234a4a1b48dd0e9083dc8bfc8cd7f72abdb93a1b8e5ef3e22ed610190557f0bc1ca795d5a059b1dc0c51f72c46f2288cb139ebf09f38ac3e8bca0485ed497610191557f249ca1610a7f80bbf422388c18ef9777fcdab26ee718e2b39e4011973a9023306101925562000872565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121562000631578081fd5b5051919050565b6020808252602e908201527f41636351756575653a206f6e6c7920737570706f72747320757020746f204d4160408201526d585f4445505448206c6576656c7360901b606082015260800190565b6020808252602d908201527f41636351756575653a206f6e6c7920737570706f727473205f686173684c656e60408201526c677468206f662032206f72203560981b606082015260800190565b60208082526027908201527f41636351756575653a205f7375624465707468206d757374206265206d6f72656040820152660207468616e20360cc1b606082015260800190565b80825b60018086116200072e57506200075e565b8187048211156200074357620007436200085c565b808616156200075157918102915b9490941c9380026200071d565b94509492505050565b60006200077860001984846200077f565b9392505050565b600082620007905750600162000778565b816200079f5750600062000778565b8160018114620007b85760028114620007c357620007f7565b600191505062000778565b60ff841115620007d757620007d76200085c565b6001841b915084821115620007f057620007f06200085c565b5062000778565b5060208310610133831016604e8410600b84101617156200082f575081810a838111156200082957620008296200085c565b62000778565b6200083e84848460016200071a565b8086048211156200085357620008536200085c565b02949350505050565b634e487b7160e01b600052601160045260246000fd5b60805160a05160c05161216362000920600039600081816103bf01528181610b4f01528181610c2101528181610e290152610f370152600081816102c10152818161058c0152818161071c01528181610d18015281816110920152818161125f01526115770152600081816103ec0152818161045b0152818161056201528181610d5201528181610e5f01528181610ea90152818161102601528181611105015261147a01526121636000f3fe608060405234801561001057600080fd5b506004361061011d5760003560e01c80631b9b8aa7146101225780631ffc735d1461014b57806324a47aeb1461015e5780633bfa6fce146101715780633dfb88b2146101795780633e1a8cc11461018c57806358bfc379146101945780635bb93995146101a75780635bf1fa4d146101ba57806362a361bb146101cd57806369e7c586146101e0578063715018a6146101f557806381d6a24a146101ff5780638da5cb5b146102155780639cfced971461022a578063b6a64acd1461023d578063bea140b314610245578063c00bdbcc14610258578063c15da65b1461026b578063d9c55ce11461027e578063dda89a6e14610286578063e93fb4d41461028e578063f2fde38b146102a1575b600080fd5b610135610130366004611a5b565b6102b4565b6040516101429190611edd565b60405180910390f35b610135610159366004611a5b565b610338565b61013561016c366004611a5b565b6104b6565b61013561070e565b610135610187366004611947565b610761565b6101356107eb565b6101356101a236600461199d565b610819565b6101356101b5366004611a73565b6108b3565b6101356101c8366004611a73565b6108d8565b6101356101db366004611886565b6109ba565b6101e86109f4565b6040516101429190611bc0565b6101fd610a03565b005b610207610a4e565b604051610142929190611ee6565b61021d610a59565b6040516101429190611b03565b610135610238366004611972565b610a68565b6101e8610aa2565b6101356102533660046118ec565b610aac565b6101fd610266366004611a5b565b610ae6565b6101fd610279366004611a5b565b610b99565b6101fd610de8565b610135610f74565b61013561029c366004611a5b565b610f7b565b6101fd6102af366004611858565b610fb2565b610171546000906102e5837f0000000000000000000000000000000000000000000000000000000000000000611f82565b101561030c5760405162461bcd60e51b815260040161030390611e8c565b60405180910390fd5b61014d826021811061032e57634e487b7160e01b600052603260045260246000fd5b015490505b919050565b6000610342611020565b6001600160a01b0316610353610a59565b6001600160a01b0316146103795760405162461bcd60e51b815260040161030390611d2f565b61017154610388836000611024565b610393816001611f24565b610171556103a461014d6000611744565b600061016f5561016e805460ff19169055610171546103e4907f0000000000000000000000000000000000000000000000000000000000000000906120c1565b6104b05760027f00000000000000000000000000000000000000000000000000000000000000006021811061042957634e487b7160e01b600052603260045260246000fd5b600402015460018054600090815261014c602052604081209290925580549161045183612086565b90915550600290507f00000000000000000000000000000000000000000000000000000000000000006021811061049857634e487b7160e01b600052603260045260246000fd5b6004020160008091018190556104b090608690611744565b92915050565b60006104c0611020565b6001600160a01b03166104d1610a59565b6001600160a01b0316146104f75760405162461bcd60e51b815260040161030390611d2f565b600082116105175760405162461bcd60e51b815260040161030390611de3565b61016e5460ff16151560011461053f5760405162461bcd60e51b815260040161030390611ca8565b60208211156105605760405162461bcd60e51b815260040161030390611c11565b7f00000000000000000000000000000000000000000000000000000000000000005b610171546105b0827f0000000000000000000000000000000000000000000000000000000000000000611f82565b106105ba576105cc565b806105c481612086565b915050610582565b808310156105ec5760405162461bcd60e51b815260040161030390611d99565b808314156106375761016f5461014d846021811061061a57634e487b7160e01b600052603260045260246000fd5b0155505061016e805461ff00191661010017905561016f54610333565b61016f54815b848110156106cf576000610650826111af565b600054909150600160a01b900460ff16156106885761066d611753565b83815260208101829052610680816109ba565b9350506106bc565b610690611771565b838152602081018290526040810182905260608101829052608081018290526106b881610a68565b9350505b50806106c781612086565b91505061063d565b508061014d85602181106106f357634e487b7160e01b600052603260045260246000fd5b015561016e805461ff00191661010017905591506103339050565b600060015b600154610740827f0000000000000000000000000000000000000000000000000000000000000000611f82565b1061074a5761075c565b8061075481612086565b915050610713565b905090565b60405163248f667760e01b815260009073__$786969981fde07b94dd43900e3ddcb0089$__9063248f66779061079b908590600401611b70565b60206040518083038186803b1580156107b357600080fd5b505af41580156107c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b09190611a43565b61016e5460009060ff166108115760405162461bcd60e51b815260040161030390611d64565b5061016f5490565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160028360405160200161084f9190611a94565b60408051601f198184030181529082905261086991611aca565b602060405180830381855afa158015610886573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052508101906108a99190611a43565b6104b091906120c1565b60006108bd611753565b838152602081018390526108d0816109ba565b949350505050565b60006108e2611771565b6002846021811061090357634e487b7160e01b600052603260045260246000fd5b600402015481526002846021811061092b57634e487b7160e01b600052603260045260246000fd5b600402016001015481600160200201526002846021811061095c57634e487b7160e01b600052603260045260246000fd5b600402016002015481600260200201526002846021811061098d57634e487b7160e01b600052603260045260246000fd5b6004020160030154816003602002015282816004602002015260006109b182610a68565b95945050505050565b6040516314d2f97b60e11b815260009073__$596cabfdcfe42a7e95c4859ee209d8ae06$__906329a5f2f69061079b908590600401611b17565b61016e54610100900460ff1681565b610a0b611020565b6001600160a01b0316610a1c610a59565b6001600160a01b031614610a425760405162461bcd60e51b815260040161030390611d2f565b610a4c60006111d3565b565b610170546001549091565b6000546001600160a01b031690565b604051630926f44b60e31b815260009073__$ef696bd9a8b217cb2f06b9f3dff68275d6$__90634937a2589061079b908590600401611b98565b61016e5460ff1681565b6040516304b98e1d60e31b815260009073__$c2ea40cdad08c2f0f910bd605f43e18753$__906325cc70e89061079b908590600401611b48565b610aee611020565b6001600160a01b0316610aff610a59565b6001600160a01b031614610b255760405162461bcd60e51b815260040161030390611d2f565b60018054600090815261014c6020526040812083905581549190610b4883612086565b91905055507f00000000000000000000000000000000000000000000000000000000000000006101716000828254610b809190611f24565b9091555050600061016f555061016e805460ff19169055565b610ba1611020565b6001600160a01b0316610bb2610a59565b6001600160a01b031614610bd85760405162461bcd60e51b815260040161030390611d2f565b61016e5460ff1615610bfc5760405162461bcd60e51b815260040161030390611cee565b60006101715411610c1f5760405162461bcd60e51b815260040161030390611e27565b7f000000000000000000000000000000000000000000000000000000000000000061017154610c4e91906120c1565b15610c5b57610c5b610de8565b60015460011415610c8757610c706000610f7b565b61016f5561016e805460ff19166001179055610de5565b6000610c9161070e565b610170549091506000905b600154811015610d0f578315801590610cb457508382145b15610cc157505050610de5565b610cd8610cd061017054610f7b565b600085611223565b6101708054906000610ce983612086565b91905055508180610cf990612086565b9250508080610d0790612086565b915050610c9c565b506000610d3c837f0000000000000000000000000000000000000000000000000000000000000000611f82565b9050600154610170541415610da6576000610d767f00000000000000000000000000000000000000000000000000000000000000006111af565b6001549091505b82811015610da357610d9182600087611223565b80610d9b81612086565b915050610d7d565b50505b60a78360218110610dc757634e487b7160e01b600052603260045260246000fd5b600402016000015461016f55505061016e805460ff19166001179055505b50565b610df0611020565b6001600160a01b0316610e01610a59565b6001600160a01b031614610e275760405162461bcd60e51b815260040161030390611d2f565b7f000000000000000000000000000000000000000000000000000000000000000061017154610e5691906120c1565b610e9b57610e837f00000000000000000000000000000000000000000000000000000000000000006111af565b600154600090815261014c6020526040902055610f1a565b610ea56000611478565b60027f000000000000000000000000000000000000000000000000000000000000000060218110610ee657634e487b7160e01b600052603260045260246000fd5b6004020154600154600090815261014c6020526040812091909155610f0d9060029061178f565b610f1a61014d6000611744565b60006001546001610f2b9190611f24565b60018190559050610f5c7f000000000000000000000000000000000000000000000000000000000000000082612050565b6101715550600061016f5561016e805460ff19169055565b6101715481565b60008160015411610f9e5760405162461bcd60e51b815260040161030390611c57565b50600090815261014c602052604090205490565b610fba611020565b6001600160a01b0316610fcb610a59565b6001600160a01b031614610ff15760405162461bcd60e51b815260040161030390611d2f565b6001600160a01b0381166110175760405162461bcd60e51b815260040161030390611bcb565b610de5816111d3565b3390565b7f00000000000000000000000000000000000000000000000000000000000000008111156110645760405162461bcd60e51b815260040161030390611e5b565b60006086826021811061108757634e487b7160e01b600052603260045260246000fd5b015490506110b660017f000000000000000000000000000000000000000000000000000000000000000061206f565b81146111665782600283602181106110de57634e487b7160e01b600052603260045260246000fd5b60040201826004811061110157634e487b7160e01b600052603260045260246000fd5b01557f00000000000000000000000000000000000000000000000000000000000000008214611160576086826021811061114b57634e487b7160e01b600052603260045260246000fd5b01805490600061115a83612086565b91905055505b506111ab565b6111708284611638565b92506086826021811061119357634e487b7160e01b600052603260045260246000fd5b6000910155816111a281612086565b92505050611064565b5050565b6000610172826021811061032e57634e487b7160e01b600052603260045260246000fd5b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8082111561123057611473565b600061012b836021811061125457634e487b7160e01b600052603260045260246000fd5b0154905061128360017f000000000000000000000000000000000000000000000000000000000000000061206f565b811461130b578360a784602181106112ab57634e487b7160e01b600052603260045260246000fd5b6004020182600481106112ce57634e487b7160e01b600052603260045260246000fd5b015561012b83602181106112f257634e487b7160e01b600052603260045260246000fd5b01805490600061130183612086565b9190505550611471565b60008054600160a01b900460ff161561136657611326611753565b60a7856021811061134757634e487b7160e01b600052603260045260246000fd5b600402015481526020810186905261135e816109ba565b915050611433565b61136e611771565b60005b838160ff1610156113ff5760a7866021811061139d57634e487b7160e01b600052603260045260246000fd5b600402018160ff16600481106113c357634e487b7160e01b600052603260045260246000fd5b0154828260ff16600581106113e857634e487b7160e01b600052603260045260246000fd5b6020020152806113f7816120a1565b915050611371565b508581846005811061142157634e487b7160e01b600052603260045260246000fd5b602002015261142f81610a68565b9150505b61012b846021811061145557634e487b7160e01b600052603260045260246000fd5b600091015561146f81611469866001611f24565b85611223565b505b505b505050565b7f0000000000000000000000000000000000000000000000000000000000000000811015610de5576000608682602181106114c357634e487b7160e01b600052603260045260246000fd5b0154905080156115ff5760006114d7611771565b60006114e2856111af565b905060005b848160ff161015611575576002866021811061151357634e487b7160e01b600052603260045260246000fd5b600402018160ff166004811061153957634e487b7160e01b600052603260045260246000fd5b0154838260ff166005811061155e57634e487b7160e01b600052603260045260246000fd5b60200201528061156d816120a1565b9150506114e7565b7f00000000000000000000000000000000000000000000000000000000000000008160ff1610156115db5781838260ff16600581106115c457634e487b7160e01b600052603260045260246000fd5b6020020152806115d3816120a1565b915050611575565b6115e483610a68565b93506115fa846115f5886001611f24565b611024565b505050505b6086826021811061162057634e487b7160e01b600052603260045260246000fd5b60009101558161162f81612086565b92505050611478565b6000611642611771565b6002846021811061166357634e487b7160e01b600052603260045260246000fd5b600402015481526002846021811061168b57634e487b7160e01b600052603260045260246000fd5b60040201600101548160016020020152600284602181106116bc57634e487b7160e01b600052603260045260246000fd5b60040201600201548160026020020152600284602181106116ed57634e487b7160e01b600052603260045260246000fd5b60040201600301548160036020020152828160046020020152600061171182610a68565b90506002856021811061173457634e487b7160e01b600052603260045260246000fd5b6004020160006108d0919061179e565b50610de59060218101906117ba565b60405180604001604052806002906020820280368337509192915050565b6040518060a001604052806005906020820280368337509192915050565b50610de59060848101906117d3565b5060008155600101600081556001016000815560010160009055565b5b808211156117cf57600081556001016117bb565b5090565b808211156117cf5760006117e7828261179e565b506004016117d3565b60006001600160401b03831115611809576118096120f7565b602080840261181781611ef4565b9250828487838701111561182a57600080fd5b600092505b8683101561184d57803582526001929092019190830190830161182f565b505050509392505050565b600060208284031215611869578081fd5b81356001600160a01b038116811461187f578182fd5b9392505050565b600060408284031215611897578081fd5b82601f8301126118a5578081fd5b6118af6040611ef4565b8083856040860111156118c0578384fd5b835b60028110156118e15781358452602093840193909101906001016118c2565b509095945050505050565b6000606082840312156118fd578081fd5b82601f83011261190b578081fd5b6119156060611ef4565b808385606086011115611926578384fd5b835b60038110156118e1578135845260209384019390910190600101611928565b600060808284031215611958578081fd5b82601f830112611966578081fd5b61187f836004846117f0565b600060a08284031215611983578081fd5b82601f830112611991578081fd5b61187f836005846117f0565b600060208083850312156119af578182fd5b82356001600160401b03808211156119c5578384fd5b818501915085601f8301126119d8578384fd5b8135818111156119ea576119ea6120f7565b83810291506119fa848301611ef4565b8181528481019084860184860187018a1015611a14578788fd5b8795505b83861015611a36578035835260019590950194918601918601611a18565b5098975050505050505050565b600060208284031215611a54578081fd5b5051919050565b600060208284031215611a6c578081fd5b5035919050565b60008060408385031215611a85578081fd5b50508035926020909101359150565b815160009082906020808601845b83811015611abe57815185529382019390820190600101611aa2565b50929695505050505050565b60008251815b81811015611aea5760208186018101518583015201611ad0565b81811115611af85782828501525b509190910192915050565b6001600160a01b0391909116815260200190565b60408101818360005b6002811015611b3f578151835260209283019290910190600101611b20565b50505092915050565b60608101818360005b6003811015611b3f578151835260209283019290910190600101611b51565b60808101818360005b6004811015611b3f578151835260209283019290910190600101611b79565b60a08101818360005b6005811015611b3f578151835260209283019290910190600101611ba1565b901515815260200190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526026908201527f41636351756575653a205f6465707468206d757374206265206c7465204d41586040820152650be888aa0a8960d31b606082015260800190565b60208082526031908201527f41636351756575653a205f696e646578206d75737420726566657220746f206160408201527020636f6d706c657465207375627472656560781b606082015260800190565b602080825260389082015260008051602061210e83398151915260408201527764206265666f72652063616c6c696e67206d65726765282960401b606082015260800190565b60208082526021908201527f41636351756575653a20737562747265657320616c7265616479206d657267656040820152601960fa1b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b602080825260279082015260008051602061210e8339815191526040820152661908199a5c9cdd60ca1b606082015260800190565b6020808252602a908201527f41636351756575653a205f6465707468206d7573742062652067746520746865604082015269040a6a4a840c8cae0e8d60b31b606082015260800190565b60208082526024908201527f41636351756575653a205f6465707468206d757374206265206d6f72652074686040820152630616e20360e41b606082015260800190565b6020808252601a908201527941636351756575653a206e6f7468696e6720746f206d6572676560301b604082015260600190565b6020808252601790820152761058d8d45d595d594e881a5b9d985b1a59081b195d995b604a1b604082015260600190565b60208082526031908201527f41636351756575653a206765744d61696e526f6f743a205f6465707468206d756040820152700e6e840c4ca40d0d2ced040cadcdeeaced607b1b606082015260800190565b90815260200190565b918252602082015260400190565b604051601f8201601f191681016001600160401b0381118282101715611f1c57611f1c6120f7565b604052919050565b60008219821115611f3757611f376120e1565b500190565b80825b6001808611611f4e5750611f79565b818704821115611f6057611f606120e1565b80861615611f6d57918102915b9490941c938002611f3f565b94509492505050565b600061187f6000198484600082611f9b5750600161187f565b81611fa85750600061187f565b8160018114611fbe5760028114611fc857611ff5565b600191505061187f565b60ff841115611fd957611fd96120e1565b6001841b915084821115611fef57611fef6120e1565b5061187f565b5060208310610133831016604e8410600b8410161715612028575081810a83811115612023576120236120e1565b61187f565b6120358484846001611f3c565b808604821115612047576120476120e1565b02949350505050565b600081600019048311821515161561206a5761206a6120e1565b500290565b600082821015612081576120816120e1565b500390565b600060001982141561209a5761209a6120e1565b5060010190565b600060ff821660ff8114156120b8576120b86120e1565b60010192915050565b6000826120dc57634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfe41636351756575653a207375627472656573206d757374206265206d65726765a2646970667358221220ae2f36e4f1a1c2ed28ff0dfa4ebe5f7912e8a09567d4415dbc6b6873386cb9cf64736f6c63430008010033";

type AccQueueQuinaryBlankSlConstructorParams =
  | [
      linkLibraryAddresses: AccQueueQuinaryBlankSlLibraryAddresses,
      signer?: Signer
    ]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AccQueueQuinaryBlankSlConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class AccQueueQuinaryBlankSl__factory extends ContractFactory {
  constructor(...args: AccQueueQuinaryBlankSlConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        AccQueueQuinaryBlankSl__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: AccQueueQuinaryBlankSlLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$786969981fde07b94dd43900e3ddcb0089\\$__", "g"),
      linkLibraryAddresses[
        "qaci-contracts/contracts/crypto/Hasher.sol:PoseidonT5"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$596cabfdcfe42a7e95c4859ee209d8ae06\\$__", "g"),
      linkLibraryAddresses[
        "qaci-contracts/contracts/crypto/Hasher.sol:PoseidonT3"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$ef696bd9a8b217cb2f06b9f3dff68275d6\\$__", "g"),
      linkLibraryAddresses[
        "qaci-contracts/contracts/crypto/Hasher.sol:PoseidonT6"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$c2ea40cdad08c2f0f910bd605f43e18753\\$__", "g"),
      linkLibraryAddresses[
        "qaci-contracts/contracts/crypto/Hasher.sol:PoseidonT4"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    _subDepth: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AccQueueQuinaryBlankSl> {
    return super.deploy(
      _subDepth,
      overrides || {}
    ) as Promise<AccQueueQuinaryBlankSl>;
  }
  getDeployTransaction(
    _subDepth: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_subDepth, overrides || {});
  }
  attach(address: string): AccQueueQuinaryBlankSl {
    return super.attach(address) as AccQueueQuinaryBlankSl;
  }
  connect(signer: Signer): AccQueueQuinaryBlankSl__factory {
    return super.connect(signer) as AccQueueQuinaryBlankSl__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AccQueueQuinaryBlankSlInterface {
    return new utils.Interface(_abi) as AccQueueQuinaryBlankSlInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AccQueueQuinaryBlankSl {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AccQueueQuinaryBlankSl;
  }
}

export interface AccQueueQuinaryBlankSlLibraryAddresses {
  ["qaci-contracts/contracts/crypto/Hasher.sol:PoseidonT5"]: string;
  ["qaci-contracts/contracts/crypto/Hasher.sol:PoseidonT3"]: string;
  ["qaci-contracts/contracts/crypto/Hasher.sol:PoseidonT6"]: string;
  ["qaci-contracts/contracts/crypto/Hasher.sol:PoseidonT4"]: string;
}
