import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { UniswapV2Router02 } from "../UniswapV2Router02";
export declare class UniswapV2Router02__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_factory: string, _WETH: string, overrides?: Overrides): Promise<UniswapV2Router02>;
    getDeployTransaction(_factory: string, _WETH: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): UniswapV2Router02;
    connect(signer: Signer): UniswapV2Router02__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): UniswapV2Router02;
}
//# sourceMappingURL=UniswapV2Router02__factory.d.ts.map