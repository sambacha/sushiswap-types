import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { SushiSwapFactoryMock } from "../SushiSwapFactoryMock";
export declare class SushiSwapFactoryMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_feeToSetter: string, overrides?: Overrides): Promise<SushiSwapFactoryMock>;
    getDeployTransaction(_feeToSetter: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): SushiSwapFactoryMock;
    connect(signer: Signer): SushiSwapFactoryMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): SushiSwapFactoryMock;
}
//# sourceMappingURL=SushiSwapFactoryMock__factory.d.ts.map