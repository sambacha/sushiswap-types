import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { BoringOwnable } from "../BoringOwnable";
export declare class BoringOwnable__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<BoringOwnable>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): BoringOwnable;
    connect(signer: Signer): BoringOwnable__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): BoringOwnable;
}
//# sourceMappingURL=BoringOwnable__factory.d.ts.map