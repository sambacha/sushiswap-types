import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { BoringBatchable } from "../BoringBatchable";
export declare class BoringBatchable__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<BoringBatchable>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): BoringBatchable;
    connect(signer: Signer): BoringBatchable__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): BoringBatchable;
}
//# sourceMappingURL=BoringBatchable__factory.d.ts.map