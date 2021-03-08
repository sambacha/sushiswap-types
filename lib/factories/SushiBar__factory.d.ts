import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { SushiBar } from "../SushiBar";
export declare class SushiBar__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_sushi: string, overrides?: Overrides): Promise<SushiBar>;
    getDeployTransaction(_sushi: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): SushiBar;
    connect(signer: Signer): SushiBar__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): SushiBar;
}
//# sourceMappingURL=SushiBar__factory.d.ts.map