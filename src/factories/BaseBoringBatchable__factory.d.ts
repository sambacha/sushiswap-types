import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { BaseBoringBatchable } from "../BaseBoringBatchable";
export declare class BaseBoringBatchable__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<BaseBoringBatchable>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): BaseBoringBatchable;
    connect(signer: Signer): BaseBoringBatchable__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): BaseBoringBatchable;
}
//# sourceMappingURL=BaseBoringBatchable__factory.d.ts.map