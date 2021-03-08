import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { SushiMaker } from "../SushiMaker";
export declare class SushiMaker__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_factory: string, _bar: string, _sushi: string, _weth: string, overrides?: Overrides): Promise<SushiMaker>;
    getDeployTransaction(_factory: string, _bar: string, _sushi: string, _weth: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): SushiMaker;
    connect(signer: Signer): SushiMaker__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): SushiMaker;
}
//# sourceMappingURL=SushiMaker__factory.d.ts.map