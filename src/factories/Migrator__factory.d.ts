import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { Migrator } from "../Migrator";
export declare class Migrator__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_chef: string, _oldFactory: string, _factory: string, _notBeforeBlock: BigNumberish, overrides?: Overrides): Promise<Migrator>;
    getDeployTransaction(_chef: string, _oldFactory: string, _factory: string, _notBeforeBlock: BigNumberish, overrides?: Overrides): TransactionRequest;
    attach(address: string): Migrator;
    connect(signer: Signer): Migrator__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Migrator;
}
//# sourceMappingURL=Migrator__factory.d.ts.map