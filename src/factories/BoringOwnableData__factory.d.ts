import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { BoringOwnableData } from "../BoringOwnableData";
export declare class BoringOwnableData__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<BoringOwnableData>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): BoringOwnableData;
    connect(signer: Signer): BoringOwnableData__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): BoringOwnableData;
}
//# sourceMappingURL=BoringOwnableData__factory.d.ts.map