/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IRewarderInterface extends ethers.utils.Interface {
  functions: {
    "onSushiReward(uint256,address,uint256)": FunctionFragment;
    "pendingTokens(uint256,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "onSushiReward",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingTokens",
    values: [BigNumberish, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "onSushiReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingTokens",
    data: BytesLike
  ): Result;

  events: {};
}

export class IRewarder extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IRewarderInterface;

  functions: {
    onSushiReward(
      pid: BigNumberish,
      user: string,
      sushiAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "onSushiReward(uint256,address,uint256)"(
      pid: BigNumberish,
      user: string,
      sushiAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    pendingTokens(
      pid: BigNumberish,
      user: string,
      sushiAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "pendingTokens(uint256,address,uint256)"(
      pid: BigNumberish,
      user: string,
      sushiAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  onSushiReward(
    pid: BigNumberish,
    user: string,
    sushiAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "onSushiReward(uint256,address,uint256)"(
    pid: BigNumberish,
    user: string,
    sushiAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  pendingTokens(
    pid: BigNumberish,
    user: string,
    sushiAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "pendingTokens(uint256,address,uint256)"(
    pid: BigNumberish,
    user: string,
    sushiAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    onSushiReward(
      pid: BigNumberish,
      user: string,
      sushiAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "onSushiReward(uint256,address,uint256)"(
      pid: BigNumberish,
      user: string,
      sushiAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    pendingTokens(
      pid: BigNumberish,
      user: string,
      sushiAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber[]]>;

    "pendingTokens(uint256,address,uint256)"(
      pid: BigNumberish,
      user: string,
      sushiAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber[]]>;
  };

  filters: {};

  estimateGas: {
    onSushiReward(
      pid: BigNumberish,
      user: string,
      sushiAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "onSushiReward(uint256,address,uint256)"(
      pid: BigNumberish,
      user: string,
      sushiAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    pendingTokens(
      pid: BigNumberish,
      user: string,
      sushiAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "pendingTokens(uint256,address,uint256)"(
      pid: BigNumberish,
      user: string,
      sushiAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    onSushiReward(
      pid: BigNumberish,
      user: string,
      sushiAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "onSushiReward(uint256,address,uint256)"(
      pid: BigNumberish,
      user: string,
      sushiAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    pendingTokens(
      pid: BigNumberish,
      user: string,
      sushiAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "pendingTokens(uint256,address,uint256)"(
      pid: BigNumberish,
      user: string,
      sushiAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
