import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { SushiSwapPairMock } from "../SushiSwapPairMock";
export declare class SushiSwapPairMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<SushiSwapPairMock>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): SushiSwapPairMock;
    connect(signer: Signer): SushiSwapPairMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): SushiSwapPairMock;
}
//# sourceMappingURL=SushiSwapPairMock__factory.d.ts.map