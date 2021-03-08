import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { Timelock } from "../Timelock";
export declare class Timelock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(admin_: string, delay_: BigNumberish, overrides?: Overrides): Promise<Timelock>;
    getDeployTransaction(admin_: string, delay_: BigNumberish, overrides?: Overrides): TransactionRequest;
    attach(address: string): Timelock;
    connect(signer: Signer): Timelock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Timelock;
}
//# sourceMappingURL=Timelock__factory.d.ts.map