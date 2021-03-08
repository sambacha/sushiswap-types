import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { SushiRoll } from "../SushiRoll";
export declare class SushiRoll__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_oldRouter: string, _router: string, overrides?: Overrides): Promise<SushiRoll>;
    getDeployTransaction(_oldRouter: string, _router: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): SushiRoll;
    connect(signer: Signer): SushiRoll__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): SushiRoll;
}
//# sourceMappingURL=SushiRoll__factory.d.ts.map