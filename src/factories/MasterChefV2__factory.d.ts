import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MasterChefV2 } from "../MasterChefV2";
export declare class MasterChefV2__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_MASTER_CHEF: string, _sushi: string, _MASTER_PID: BigNumberish, overrides?: Overrides): Promise<MasterChefV2>;
    getDeployTransaction(_MASTER_CHEF: string, _sushi: string, _MASTER_PID: BigNumberish, overrides?: Overrides): TransactionRequest;
    attach(address: string): MasterChefV2;
    connect(signer: Signer): MasterChefV2__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MasterChefV2;
}
//# sourceMappingURL=MasterChefV2__factory.d.ts.map