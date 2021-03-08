import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { OwnableData } from "../OwnableData";
export declare class OwnableData__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<OwnableData>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): OwnableData;
    connect(signer: Signer): OwnableData__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): OwnableData;
}
//# sourceMappingURL=OwnableData__factory.d.ts.map