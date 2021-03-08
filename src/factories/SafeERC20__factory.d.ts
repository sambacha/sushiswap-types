import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { SafeERC20 } from "../SafeERC20";
export declare class SafeERC20__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<SafeERC20>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): SafeERC20;
    connect(signer: Signer): SafeERC20__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): SafeERC20;
}
//# sourceMappingURL=SafeERC20__factory.d.ts.map